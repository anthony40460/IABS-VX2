import { useState } from 'react';
import { supabase } from '../lib/supabase';

export function useContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData(event.currentTarget);
    const data = {
      full_name: formData.get('fullName'),
      email: formData.get('email'),
      company: formData.get('company'),
      message: formData.get('message'),
      status: 'new'
    };

    try {
      const { error: submitError } = await supabase
        .from('contact_messages')
        .insert([data]);

      if (submitError) throw submitError;

      setSuccess(true);
      event.currentTarget.reset();
    } catch (err: any) {
      setError(err.message || 'Une erreur est survenue');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    handleSubmit,
    isSubmitting,
    error,
    success
  };
}