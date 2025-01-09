import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { validatePassword } from '../utils/validation';
import { initializeUserCredits } from '../utils/credits';

export function useRegisterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const fullName = formData.get('fullName') as string;
    const company = formData.get('company') as string;

    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
      setIsSubmitting(false);
      return;
    }

    try {
      const { data: existingUser } = await supabase
        .from('users')
        .select('email')
        .eq('email', email)
        .single();

      if (existingUser) {
        setError('Un compte existe déjà avec cet email. Veuillez vous connecter ou utiliser une autre adresse email.');
        setIsSubmitting(false);
        return;
      }

      const { error: signUpError, data } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            company_name: company,
          },
        },
      });

      if (signUpError) {
        if (signUpError.message === 'User already registered') {
          throw new Error('Un compte existe déjà avec cet email. Veuillez vous connecter ou utiliser une autre adresse email.');
        }
        throw signUpError;
      }

      if (!data.user?.id) {
        throw new Error('Erreur lors de la création du compte');
      }

      const { error: profileError } = await supabase
        .from('users')
        .insert([{
          id: data.user.id,
          email,
          full_name: fullName,
          company_name: company,
        }]);

      if (profileError) throw profileError;

      // Initialize user credits
      await initializeUserCredits(data.user.id);

      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Une erreur est survenue lors de l\'inscription');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    handleSubmit,
    isSubmitting,
    error,
  };
}