import React from 'react';
import { useTimeLogs } from '../../hooks/useTimeLogs';

export default function UsageStats() {
  const { timeLogs, loading } = useTimeLogs();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Grouper les logs par jour
  const dailyUsage = timeLogs?.reduce((acc: Record<string, number>, log) => {
    const date = new Date(log.created_at).toLocaleDateString();
    acc[date] = (acc[date] || 0) + log.minutes_used;
    return acc;
  }, {});

  const totalMinutes = Object.values(dailyUsage || {}).reduce((a, b) => a + b, 0);
  const averageMinutes = Math.round(totalMinutes / (Object.keys(dailyUsage || {}).length || 1));

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-white">Statistiques d'utilisation</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Usage List */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-6">Utilisation quotidienne</h2>
          <div className="space-y-4">
            {Object.entries(dailyUsage || {}).map(([date, minutes]) => (
              <div key={date} className="flex justify-between items-center">
                <span className="text-gray-400">{date}</span>
                <div className="flex-1 mx-4">
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full"
                      style={{ 
                        width: `${(minutes / Math.max(...Object.values(dailyUsage || {}))) * 100}%` 
                      }}
                    />
                  </div>
                </div>
                <span className="text-white font-medium">{minutes} min</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Total minutes utilisées</h3>
            <div className="text-4xl font-bold text-primary">
              {totalMinutes}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Moyenne quotidienne</h3>
            <div className="text-4xl font-bold text-primary">
              {averageMinutes}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}