import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signInDemo } from '../../utils/auth';
import AuthButton from '../auth/AuthButton';

interface DemoLoginButtonProps {
  planType: 'start' | 'growth' | 'premium';
}

const PLAN_NAMES = {
  start: 'Start',
  growth: 'Growth',
  premium: 'Premium'
};

export default function DemoLoginButton({ planType }: DemoLoginButtonProps) {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const navigate = useNavigate();

  const handleDemoLogin = async () => {
    setLoading(true);
    setError(null);
    
    try {
      await signInDemo(planType);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <AuthButton
        type="button"
        loading={loading}
        loadingText={`Connexion ${PLAN_NAMES[planType]}...`}
        onClick={handleDemoLogin}
      >
        Essayer {PLAN_NAMES[planType]}
      </AuthButton>
      {error && (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}