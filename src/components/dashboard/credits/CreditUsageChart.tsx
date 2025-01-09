import React from 'react';
import { useTimeLogs } from '../../../hooks/useTimeLogs';
import { formatDate } from '../../../utils/date';

export default function CreditUsageChart() {
  const { timeLogs, loading } = useTimeLogs();

  if (loading) {
    return <div>Chargement...</div>;
  }

  // Grouper les logs par jour
  const dailyUsage = timeLogs?.reduce((acc: Record<string, number>, log) => {
    const date = formatDate(log.created_at);
    acc[date] = (acc[date] || 0) + log.minutes_used;
    return acc;
  }, {}) || {};

  const days = Object.keys(dailyUsage).slice(-7); // 7 derniers jours
  const maxUsage = Math.max(...Object.values(dailyUsage), 30); // minimum 30 pour l'échelle

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Utilisation des 7 derniers jours
      </h3>
      
      <div className="relative h-64">
        <div className="absolute inset-0 flex items-end justify-between gap-2">
          {days.map((day) => (
            <div key={day} className="flex flex-col items-center w-full">
              <div 
                className="w-full bg-indigo-200 rounded-t"
                style={{ 
                  height: `${(dailyUsage[day] / maxUsage) * 100}%`,
                  minHeight: '1px'
                }}
              >
                <div className="w-full h-full bg-indigo-600 opacity-80 rounded-t transform transition-all duration-300 hover:opacity-100" />
              </div>
              <div className="mt-2 text-xs text-gray-600 rotate-45 origin-left">
                {day}
              </div>
            </div>
          ))}
        </div>
        
        {/* Axe Y */}
        <div className="absolute left-0 inset-y-0 flex flex-col justify-between">
          {[maxUsage, maxUsage * 0.75, maxUsage * 0.5, maxUsage * 0.25, 0].map((value) => (
            <div key={value} className="text-xs text-gray-500">
              {Math.round(value)} min
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}