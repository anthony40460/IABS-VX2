import { serve } from 'https://deno.fresh.dev/std/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.1';
import Stripe from 'https://esm.sh/stripe@13.10.0';

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
  apiVersion: '2023-10-16',
  httpClient: Stripe.createFetchHttpClient(),
});

serve(async (req) => {
  try {
    // CORS headers
    if (req.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      });
    }

    // Vérifier la méthode
    if (req.method !== 'POST') {
      return new Response('Méthode non autorisée', { status: 405 });
    }

    // Récupérer le token d'authentification
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      return new Response('Non autorisé', { status: 401 });
    }

    // Initialiser le client Supabase
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    );

    // Vérifier l'utilisateur
    const { data: { user }, error: userError } = await supabaseClient.auth.getUser(
      authHeader.replace('Bearer ', '')
    );

    if (userError || !user) {
      console.error('Auth error:', userError);
      return new Response('Non autorisé', { status: 401 });
    }

    // Récupérer les données du body
    const { priceId, successUrl, cancelUrl } = await req.json();

    console.log('Creating checkout session for:', {
      userId: user.id,
      priceId,
      successUrl,
      cancelUrl
    });

    // Vérifier si l'utilisateur a déjà un customer_id
    const { data: customerData } = await supabaseClient
      .from('stripe_customers')
      .select('stripe_customer_id')
      .eq('id', user.id)
      .single();

    let customerId = customerData?.stripe_customer_id;

    // Créer un nouveau customer si nécessaire
    if (!customerId) {
      console.log('Creating new Stripe customer for user:', user.id);
      const customer = await stripe.customers.create({
        email: user.email,
        metadata: {
          supabase_uid: user.id,
        },
      });

      customerId = customer.id;

      // Sauvegarder le customer_id
      await supabaseClient
        .from('stripe_customers')
        .insert([{ id: user.id, stripe_customer_id: customerId }]);
    }

    console.log('Creating Stripe checkout session with customer:', customerId);

    // Créer la session de checkout
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      line_items: [{ price: priceId, quantity: 1 }],
      mode: 'subscription',
      success_url: successUrl,
      cancel_url: cancelUrl,
      subscription_data: {
        metadata: {
          supabase_uid: user.id,
        },
      },
      allow_promotion_codes: true,
      billing_address_collection: 'required',
      payment_method_types: ['card'],
    });

    console.log('Checkout session created:', session.id);

    return new Response(
      JSON.stringify({ sessionId: session.id }),
      { 
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        status: 400,
      }
    );
  }
});