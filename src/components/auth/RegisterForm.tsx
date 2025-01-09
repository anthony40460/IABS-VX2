import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserPlus } from 'lucide-react';
import { useRegisterForm } from '../../hooks/useRegisterForm';
import FormInput from '../contact/FormInput';

export default function RegisterForm() {
  const { handleSubmit, isSubmitting, error } = useRegisterForm();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Créer votre compte
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Ou{' '}
            <button
              onClick={() => navigate('/login')}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              connectez-vous à votre compte existant
            </button>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <FormInput
            label="Nom complet"
            name="fullName"
            type="text"
            required
          />

          <FormInput
            label="Email professionnel"
            name="email"
            type="email"
            required
          />

          <FormInput
            label="Mot de passe"
            name="password"
            type="password"
            required
          />

          <FormInput
            label="Nom de l'entreprise"
            name="company"
            type="text"
            required
          />

          {error && (
            <div className="text-red-600 text-sm">{error}</div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {isSubmitting ? (
              'Création du compte...'
            ) : (
              <>
                <UserPlus className="h-5 w-5 mr-2" />
                Créer mon compte
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}