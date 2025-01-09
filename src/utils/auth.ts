import { supabase } from '../lib/supabase';

export async function signIn(email: string, password: string) {
  try {
    const { error, data } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      if (error.message === 'Invalid login credentials') {
        throw new Error('Email ou mot de passe incorrect');
      }
      throw error;
    }

    return data;
  } catch (err: any) {
    console.error('Erreur de connexion:', err);
    throw new Error(err.message || 'Une erreur est survenue lors de la connexion');
  }
}

export async function signInDemo(planType: 'start' | 'growth' | 'premium') {
  const credentials = {
    start: {
      email: 'demo.start@example.com',
      password: 'StartDemo123!'
    },
    growth: {
      email: 'demo.growth@example.com',
      password: 'GrowthDemo123!'
    },
    premium: {
      email: 'demo.premium@example.com',
      password: 'PremiumDemo123!'
    }
  };

  try {
    return await signIn(credentials[planType].email, credentials[planType].password);
  } catch (err: any) {
    console.error('Erreur de connexion démo:', err);
    throw new Error('Impossible de charger le compte de démonstration. Veuillez réessayer plus tard.');
  }
}