import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuthContext } from '../components/auth/AuthContext';

interface Credits {
  available_minutes: number;
  carried_over_minutes: number;
  expires_at: string;
}

export function useCredits() {
  const { user } = useAuthContext();
  const [credits, setCredits] = useState<Credits | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) return;

    const fetchCredits = async () => {
      try {
        const { data, error } = await supabase
          .from('credits')
          .select('*')
          .eq('user_id', user.id)
          .maybeSingle();

        if (error) throw error;
        setCredits(data);
        setError(null);
      } catch (err: any) {
        console.error('Error fetching credits:', err);
        setError('Impossible de charger les crédits');
        setCredits(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCredits();

    const subscription = supabase
      .channel('credits_changes')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'credits', filter: `user_id=eq.${user.id}` },
        (payload) => {
          setCredits(payload.new as Credits);
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [user]);

  const deductCredits = async (minutes: number, taskType: string, description: string) => {
    if (!user || !credits) return false;
    
    if (credits.available_minutes < minutes) {
      throw new Error('Crédits insuffisants');
    }

    const { error: deductError } = await supabase.rpc('deduct_credits', {
      p_user_id: user.id,
      p_minutes: minutes
    });

    if (deductError) throw deductError;

    const { error: logError } = await supabase
      .from('time_logs')
      .insert([{
        user_id: user.id,
        task_type: taskType,
        minutes_used: minutes,
        description
      }]);

    if (logError) throw logError;

    return true;
  };

  return {
    credits,
    loading,
    error,
    deductCredits
  };
}