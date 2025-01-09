import React from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { stripe } from '../../lib/stripe';

interface CheckoutButtonProps {
  priceId: string;
  planType: string;
}

export default function CheckoutButton({ priceId, planType }: CheckoutButtonProps) {
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const handleCheckout = async () => {
    try {
      setLoading(true);
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate('/login');
        return;
      }

      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({
          priceId,
          planType,
        }),
      });

      const { sessionId } = await response.json();
      const result = await stripe?.redirectToCheckout({ sessionId });

      if (result?.error) {
        throw result.error;
      }
    } catch (error) {
      console.error('Error during checkout:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
    >
      {loading ? 'Redirection...' : 'Souscrire'}
    </button>
  );
}