import { supabase } from '../lib/supabase';

export async function initializeUserCredits(userId: string) {
  const expiresAt = new Date();
  expiresAt.setMonth(expiresAt.getMonth() + 1);

  const { error } = await supabase
    .from('credits')
    .insert([{
      user_id: userId,
      available_minutes: 0,
      carried_over_minutes: 0,
      expires_at: expiresAt.toISOString(),
    }]);

  if (error) {
    console.error('Error initializing user credits:', error);
    throw error;
  }
}