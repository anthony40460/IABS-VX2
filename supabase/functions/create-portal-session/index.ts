import { serve } from 'https://deno.fresh.dev/std/http/server.ts';
import { createClient } from 'jsr:@supabase/supabase-js@2';
import Stripe from 'https://esm.sh/stripe@13.10.0';

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
  apiVersion: '2023-10-16',
  httpClient: Stripe.createFetchHttpClient(),
});

serve(async (req) => {
  try {
    // Récupérer le token d'authentification
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      return new Response('Non autorisé', { status: 401 });
    }

    // Initialiser le client Supabase avec le contexte d'authentification
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      { global: { headers: { Authorization: authHeader } } }
    );

    // Vérifier l'utilisateur
    const token = authHeader.replace('Bearer ', '');
    const { data: { user }, error: userError } = await supabaseClient.auth.getUser(token);

    if (userError || !user) {
      return new Response('Non autorisé', { status: 401 });
    }

    // Récupérer le customer_id
    const { data: customerData } = await supabaseClient
      .from('stripe_customers')
      .select('stripe_customer_id')
      .eq('id', user.id)
      .single();

    if (!customerData?.stripe_customer_id) {
      return new Response(
        JSON.stringify({ error: 'Customer not found' }),
        { 
          headers: { 'Content-Type': 'application/json' },
          status: 404,
        }
      );
    }

    // Créer la session du portail client
    const session = await stripe.billingPortal.sessions.create({
      customer: customerData.stripe_customer_id,
      return_url: `${req.headers.get('origin')}/dashboard`,
    });

    return new Response(
      JSON.stringify({ url: session.url }),
      { 
        headers: { 'Content-Type': 'application/json' },
        status: 200,
      }
    );
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