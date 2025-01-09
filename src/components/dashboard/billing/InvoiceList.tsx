import React from 'react';
import { useInvoices } from '../../../hooks/useInvoices';
import InvoiceTable from './InvoiceTable';
import SubscriptionInfo from './SubscriptionInfo';
import LoadingSpinner from '../../common/LoadingSpinner';
import ErrorMessage from '../../common/ErrorMessage';

export default function InvoiceList() {
  const { invoices, loading, error } = useInvoices();

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
      <h1 className="text-2xl font-semibold text-gray-900">Facturation</h1>
      <SubscriptionInfo />
      <InvoiceTable invoices={invoices} />
    </div>
  );
}