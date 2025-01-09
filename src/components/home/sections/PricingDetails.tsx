import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Start',
    price: 99,
    setup: 399,
    minutes: 120,
    engagement: 6,
    report: '3 mois (max 360 min)',
    features: [
      'Consulting & Formation IA',
      'Création de contenu',
      'Support technique',
      'Accès dashboard client',
      'Setup payable en 4 fois'
    ],
    highlighted: false
  },
  {
    name: 'Growth',
    price: 199,
    setup: 990,
    minutes: 200,
    engagement: 12,
    report: '2 mois (max 400 min)',
    features: [
      'Consulting & Formation IA avancée',
      'Création de contenu premium',
      'Support technique prioritaire',
      'Audit mensuel personnalisé',
      'Setup payable en 4 fois'
    ],
    highlighted: true
  },
  {
    name: 'Premium',
    price: 499,
    setup: 1490,
    minutes: 360,
    engagement: 12,
    report: '2 mois (max 720 min)',
    features: [
      'Consulting & Formation IA expert',
      'Création de contenu illimitée',
      'Support technique 24/7',
      'Audit hebdomadaire personnalisé',
      'Setup payable en 4 fois'
    ],
    highlighted: false
  }
];

export default function PricingDetails() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-indigo-600">Tarification</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            Choisissez votre formule Co-Créateur
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Des forfaits adaptés à vos besoins avec un engagement sur mesure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-indigo-600 text-white ring-4 ring-indigo-600 ring-opacity-50'
                  : 'bg-white'
              }`}
            >
              <h3 className={`text-2xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              
              <p className="mt-4 flex items-baseline">
                <span className={`text-4xl font-bold tracking-tight ${
                  plan.highlighted ? 'text-white' : 'text-gray-900'
                }`}>
                  {plan.price}€
                </span>
                <span className={`ml-1 text-xl ${
                  plan.highlighted ? 'text-indigo-100' : 'text-gray-500'
                }`}>/mois</span>
              </p>

              <p className={`mt-2 text-sm ${
                plan.highlighted ? 'text-indigo-100' : 'text-gray-500'
              }`}>
                Setup : {plan.setup}€ HT (payable en 4 fois)
              </p>

              <div className="mt-6">
                <div className={`text-lg font-medium ${
                  plan.highlighted ? 'text-white' : 'text-gray-900'
                }`}>
                  {plan.minutes} minutes/mois
                </div>
                <p className={`mt-2 text-sm ${
                  plan.highlighted ? 'text-indigo-100' : 'text-gray-500'
                }`}>
                  Report sur {plan.report}
                </p>
                <p className={`text-sm ${
                  plan.highlighted ? 'text-indigo-100' : 'text-gray-500'
                }`}>
                  Engagement {plan.engagement} mois
                </p>
              </div>

              <ul className="mt-6 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className={`h-5 w-5 ${
                      plan.highlighted ? 'text-white' : 'text-indigo-600'
                    } shrink-0`} />
                    <span className={`ml-3 text-sm ${
                      plan.highlighted ? 'text-indigo-100' : 'text-gray-600'
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 block w-full rounded-lg px-4 py-3 text-center text-sm font-semibold ${
                  plan.highlighted
                    ? 'bg-white text-indigo-600 hover:bg-indigo-50'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                } transition-colors duration-200`}
              >
                Commencer maintenant
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}