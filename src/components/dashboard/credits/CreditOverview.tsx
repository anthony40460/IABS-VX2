import React from 'react';
import { useCredits } from '../../../hooks/useCredits';
import CreditStats from './CreditStats';
import CreditUsageChart from './CreditUsageChart';
import LoadingSpinner from '../../common/LoadingSpinner';
import ErrorMessage from '../../common/ErrorMessage';

export default function CreditOverview() {
  const { credits, loading, error } = useCredits();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Aperçu des Crédits</h1>
      <CreditStats credits={credits} />
      <CreditUsageChart />
    </div>
  );
}