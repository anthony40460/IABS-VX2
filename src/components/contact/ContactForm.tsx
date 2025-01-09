import React from 'react';
import { Send } from 'lucide-react';
import { useContactForm } from '../../hooks/useContactForm';
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';

export default function ContactForm() {
  const { handleSubmit, isSubmitting, error, success } = useContactForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormInput
        label="Nom complet"
        name="fullName"
        type="text"
        required
      />
      
      <FormInput
        label="Email"
        name="email"
        type="email"
        required
      />
      
      <FormInput
        label="Entreprise"
        name="company"
        type="text"
      />
      
      <FormTextArea
        label="Message"
        name="message"
        required
      />

      {error && (
        <div className="text-red-600 text-sm">{error}</div>
      )}
      
      {success && (
        <div className="text-green-600 text-sm">
          Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
      >
        {isSubmitting ? (
          'Envoi...'
        ) : (
          <>
            Envoyer <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}