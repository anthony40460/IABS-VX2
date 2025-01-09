import { loadStripe } from '@stripe/stripe-js';

const stripePublicKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY;

if (!stripePublicKey) {
  throw new Error('La clé publique Stripe est manquante dans les variables d\'environnement');
}

export const stripe = await loadStripe(stripePublicKey);

export async function createCheckoutSession(priceId: string) {
  try {
    console.log('Creating checkout session for price:', priceId);
    
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        priceId,
        successUrl: `${window.location.origin}/billing/success`,
        cancelUrl: `${window.location.origin}/pricing`,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Checkout error:', error);
      throw new Error(error.message || 'Une erreur est survenue lors de la création de la session');
    }

    const { sessionId } = await response.json();
    
    if (!stripe) {
      throw new Error('Stripe n\'est pas initialisé');
    }

    console.log('Redirecting to Stripe checkout with session:', sessionId);
    const { error } = await stripe.redirectToCheckout({ sessionId });
    
    if (error) {
      throw error;
    }
  } catch (error) {
    console.error('Checkout error:', error);
    throw error;
  }
}