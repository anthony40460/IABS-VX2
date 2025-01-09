import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from './DashboardLayout';
import CreditOverview from './credits/CreditOverview';
import TimeLogList from './time/TimeLogList';
import InvoiceList from './billing/InvoiceList';

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Routes>
        <Route index element={<CreditOverview />} />
        <Route path="time-logs" element={<TimeLogList />} />
        <Route path="invoices" element={<InvoiceList />} />
      </Routes>
    </DashboardLayout>
  );
}