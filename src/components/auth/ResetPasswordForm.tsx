import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { useResetPassword } from '../../hooks/useResetPassword';
import FormInput from '../contact/FormInput';

export default function ResetPasswordForm() {
  const { handleSubmit, isSubmitting, error, success } = useResetPassword();
  const navigate = useNavigate();

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Mot de passe modifié !
          </h2>
          <p className="text-gray-600 mb-8">
            Votre mot de passe a été réinitialisé avec succès.
          </p>
          <button
            onClick={() => navigate('/login')}
            className="text-indigo-600 hover:text-indigo-500 font-medium"
          >
            Retour à la connexion
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Nouveau mot de passe
          </h2>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <FormInput
            label="Nouveau mot de passe"
            name="password"
            type="password"
            required
          />

          <FormInput
            label="Confirmer le mot de passe"
            name="passwordConfirm"
            type="password"
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
              'Modification...'
            ) : (
              <>
                <Lock className="h-5 w-5 mr-2" />
                Modifier le mot de passe
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}