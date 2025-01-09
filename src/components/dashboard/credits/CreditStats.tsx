import React from 'react';
import { Clock, Calendar, AlertTriangle, TrendingUp } from 'lucide-react';
import { formatDate } from '../../../utils/date';

interface CreditStatsProps {
  credits: {
    available_minutes: number;
    carried_over_minutes: number;
    expires_at: string;
  } | null;
}

export default function CreditStats({ credits }: CreditStatsProps) {
  if (!credits) {
    return (
      <div className="bg-white overflow-hidden shadow rounded-lg p-6">
        <p className="text-gray-500">
          Aucun crédit disponible. Veuillez souscrire à un abonnement pour commencer.
        </p>
      </div>
    );
  }

  const isLowCredits = credits.available_minutes < 30;
  const expirationDate = new Date(credits.expires_at);
  const daysUntilExpiration = Math.ceil((expirationDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
  const usageRate = Math.round((credits.carried_over_minutes / (credits.available_minutes + credits.carried_over_minutes)) * 100);

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {/* Minutes disponibles */}
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Clock className={`h-6 w-6 ${isLowCredits ? 'text-red-400' : 'text-indigo-600'}`} />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Minutes disponibles
                </dt>
                <dd className="text-lg font-semibold text-gray-900">
                  {credits.available_minutes}
                </dd>
              </dl>
            </div>
          </div>
          {isLowCredits && (
            <div className="mt-4 flex items-center text-sm text-red-600">
              <AlertTriangle className="h-4 w-4 mr-1" />
              Crédits faibles
            </div>
          )}
        </div>
      </div>

      {/* Minutes reportées */}
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Calendar className="h-6 w-6 text-indigo-600" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Minutes reportées
                </dt>
                <dd className="text-lg font-semibold text-gray-900">
                  {credits.carried_over_minutes}
                </dd>
              </dl>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            Expire le {formatDate(credits.expires_at)}
            {daysUntilExpiration <= 7 && (
              <span className="text-amber-600 ml-2">
                (Dans {daysUntilExpiration} jours)
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Taux d'utilisation */}
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <TrendingUp className="h-6 w-6 text-indigo-600" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Taux d'utilisation
                </dt>
                <dd className="text-lg font-semibold text-gray-900">
                  {usageRate}%
                </dd>
              </dl>
            </div>
          </div>
          <div className="mt-4">
            <div className="relative pt-1">
              <div className="overflow-hidden h-2 text-xs flex rounded bg-indigo-100">
                <div
                  style={{ width: `${usageRate}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}