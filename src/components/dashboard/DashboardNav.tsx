import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CreditCard, Clock, Receipt } from 'lucide-react';

const navigation = [
  { name: 'Crédits', href: '/dashboard', icon: CreditCard },
  { name: 'Historique', href: '/dashboard/time-logs', icon: Clock },
  { name: 'Factures', href: '/dashboard/invoices', icon: Receipt },
];

export default function DashboardNav() {
  const location = useLocation();

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  location.pathname === item.href
                    ? 'border-indigo-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                <item.icon className="h-5 w-5 mr-2" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}