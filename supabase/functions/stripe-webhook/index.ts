import { serve } from 'https://deno.fresh.dev/std/http/server.ts';
import { createClient } from 'jsr:@supabase/supabase-js@2';
import { Hono } from 'jsr:@hono/hono';
import Stripe from 'https://esm.sh/stripe@13.10.0';

const app = new Hono();

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
  apiVersion: '2023-10-16',
  httpClient: Stripe.createFetchHttpClient(),
});

const webhookSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET') || '';

// Initialiser le client Supabase avec la clé service
const supabaseClient = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
);

// Route principale pour les webhooks Stripe
app.post('/stripe-webhook', async (c) => {
  try {
    // Vérifier la signature
    const signature = c.req.header('stripe-signature');
    if (!signature) {
      return new Response('Signature manquante', { status: 400 });
    }

    const body = await c.req.text();
    const event = stripe.webhooks.constructEvent(body, signature, webhookSecret);

    // Traiter les événements
    switch (event.type) {
      case 'customer.subscription.created':
      case 'customer.subscription.updated':
        const subscription = event.data.object;
        await supabaseClient
          .from('stripe_subscriptions')
          .upsert({
            id: subscription.id,
            user_id: subscription.metadata.supabase_uid,
            status: subscription.status,
            price_id: subscription.items.data[0].price.id,
            quantity: subscription.items.data[0].quantity,
            cancel_at_period_end: subscription.cancel_at_period_end,
            current_period_start: new Date(subscription.current_period_start * 1000),
            current_period_end: new Date(subscription.current_period_end * 1000),
            trial_start: subscription.trial_start ? new Date(subscription.trial_start * 1000) : null,
            trial_end: subscription.trial_end ? new Date(subscription.trial_end * 1000) : null
          });
        break;

      case 'invoice.payment_succeeded':
        const invoice = event.data.object;
        if (invoice.subscription) {
          const subDetails = await stripe.subscriptions.retrieve(invoice.subscription);
          const price = await stripe.prices.retrieve(subDetails.items.data[0].price.id);
          const minutes = price.metadata.minutes ? parseInt(price.metadata.minutes) : 0;

          await supabaseClient.rpc('generate_monthly_credits', {
            p_user_id: subDetails.metadata.supabase_uid,
            p_minutes: minutes
          });
        }
        break;
    }

    return new Response(JSON.stringify({ received: true }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { 'Content-Type': 'application/json' },
        status: 400,
      }
    );
  }
});

// Route de test/santé
app.get('/stripe-webhook/health', (c) => {
  return new Response(JSON.stringify({ status: 'ok' }), {
    headers: { 'Content-Type': 'application/json' },
    status: 200,
  });
});

Deno.serve(app.fetch);