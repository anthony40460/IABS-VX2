import { supabase } from '../lib/supabase';

export const DEMO_USERS = {
  start: {
    email: 'demo.start@example.com',
    password: 'StartDemo123!',
    fullName: 'Sophie Laurent',
    company: 'Eco-Print Solutions',
    id: '00000000-0000-0000-0000-000000000001'
  },
  growth: {
    email: 'demo.growth@example.com',
    password: 'GrowthDemo123!',
    fullName: 'Thomas Mercier',
    company: 'BioVert Distribution',
    id: '00000000-0000-0000-0000-000000000002'
  },
  premium: {
    email: 'demo.premium@example.com',
    password: 'PremiumDemo123!',
    fullName: 'Claire Rousseau',
    company: 'Artisan Digital',
    id: '00000000-0000-0000-0000-000000000003'
  }
};

export async function setupDemoUser(planType: 'start' | 'growth' | 'premium') {
  const user = DEMO_USERS[planType];
  
  try {
    // Try to sign in first
    const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
      email: user.email,
      password: user.password
    });

    // If sign in succeeds, return credentials
    if (signInData.user) {
      return { email: user.email, password: user.password };
    }

    // If error is not "Invalid credentials", something else is wrong
    if (signInError && signInError.message !== 'Invalid login credentials') {
      throw signInError;
    }

    // Create the user if sign in failed
    const { error: signUpError } = await supabase.auth.admin.createUser({
      email: user.email,
      password: user.password,
      email_confirm: true,
      user_metadata: {
        full_name: user.fullName,
        company_name: user.company
      }
    });

    if (signUpError) throw signUpError;

    // Return credentials for immediate sign in
    return { email: user.email, password: user.password };
  } catch (error) {
    console.error('Error setting up demo user:', error);
    throw new Error('Impossible de configurer le compte de démonstration. Veuillez réessayer plus tard.');
  }
}

export async function getDemoCredentials(planType: 'start' | 'growth' | 'premium') {
  await setupDemoUser(planType);
  return {
    email: DEMO_USERS[planType].email,
    password: DEMO_USERS[planType].password
  };
}