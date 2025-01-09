import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from './useAuth';

export function useTimeLogs() {
  const { user } = useAuth();
  const [timeLogs, setTimeLogs] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    async function fetchTimeLogs() {
      try {
        const { data, error } = await supabase
          .from('time_logs')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });

        if (error) throw error;
        setTimeLogs(data);
      } catch (error) {
        console.error('Error fetching time logs:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchTimeLogs();
  }, [user]);

  return { timeLogs, loading };
}