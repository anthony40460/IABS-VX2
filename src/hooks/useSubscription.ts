import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from './useAuth';

interface Subscription {
  id: string;
  status: string;
  price_id: string;
  cancel_at_period_end: boolean;
  current_period_end: string;
  trial_end: string | null;
}

export function useSubscription() {
  const { user } = useAuth();
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) return;

    async function fetchSubscription() {
      try {
        const { data, error } = await supabase
          .from('stripe_subscriptions')
          .select('*')
          .eq('user_id', user.id)
          .single();

        if (error) throw error;
        setSubscription(data);
        setError(null);
      } catch (err: any) {
        console.error('Error fetching subscription:', err);
        setError('Impossible de charger les informations d\'abonnement');
        setSubscription(null);
      } finally {
        setLoading(false);
      }
    }

    fetchSubscription();

    // Écouter les changements d'abonnement en temps réel
    const subscription = supabase
      .channel('stripe_subscriptions_changes')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'stripe_subscriptions', filter: `user_id=eq.${user.id}` },
        (payload) => {
          setSubscription(payload.new as Subscription);
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [user]);

  return { subscription, loading, error };
}