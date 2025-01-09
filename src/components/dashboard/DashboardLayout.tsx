import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CreditCard, Clock, Receipt } from 'lucide-react';
import DashboardNav from './DashboardNav';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardNav />
      <div className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </div>
    </div>
  );
}