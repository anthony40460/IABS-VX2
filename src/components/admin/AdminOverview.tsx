import React from 'react';
import { Users, Clock, CreditCard, TrendingUp } from 'lucide-react';

const stats = [
  {
    label: 'Utilisateurs actifs',
    value: '157',
    change: '+12%',
    icon: Users,
    trend: 'up'
  },
  {
    label: 'Minutes consommées',
    value: '2,847',
    change: '+23%',
    icon: Clock,
    trend: 'up'
  },
  {
    label: 'Revenu mensuel',
    value: '14,580€',
    change: '+18%',
    icon: CreditCard,
    trend: 'up'
  },
  {
    label: 'Taux de conversion',
    value: '3.2%',
    change: '+0.8%',
    icon: TrendingUp,
    trend: 'up'
  }
];

export default function AdminOverview() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-white">Vue d'ensemble</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <stat.icon className="h-8 w-8 text-primary" />
              <span className={`text-sm px-2 py-1 rounded-full ${
                stat.trend === 'up' 
                  ? 'bg-green-500/10 text-green-500' 
                  : 'bg-red-500/10 text-red-500'
              }`}>
                {stat.change}
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
              <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}