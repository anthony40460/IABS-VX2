import React from 'react';
import { Zap, TrendingUp, Users, Shield } from 'lucide-react';

const benefits = [
  {
    title: 'Productivité augmentée',
    description: 'Automatisez les tâches répétitives et libérez du temps pour la créativité et l\'innovation.',
    icon: Zap,
    stat: '300%',
    statLabel: 'Gain moyen de productivité'
  },
  {
    title: 'ROI mesurable',
    description: 'Un retour sur investissement rapide grâce à l\'optimisation des processus et la réduction des coûts.',
    icon: TrendingUp,
    stat: '5x',
    statLabel: 'Retour sur investissement'
  },
  {
    title: 'Formation continue',
    description: 'Des programmes de formation adaptés pour une montée en compétence rapide de vos équipes.',
    icon: Users,
    stat: '97%',
    statLabel: 'Taux de satisfaction'
  },
  {
    title: 'Sécurité garantie',
    description: 'Protection des données et confidentialité assurée pour tous vos projets.',
    icon: Shield,
    stat: '100%',
    statLabel: 'Conformité RGPD'
  }
];

export default function BenefitsSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Pourquoi nous choisir</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Des résultats concrets pour votre entreprise
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Notre approche unique combine expertise IA, accompagnement personnalisé et outils innovants pour une transformation digitale réussie.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <benefit.icon className="h-5 w-5 flex-none text-indigo-600" />
                  {benefit.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{benefit.description}</p>
                  <p className="mt-6">
                    <span className="text-3xl font-bold text-indigo-600">{benefit.stat}</span>
                    <span className="text-sm text-gray-500 ml-2">{benefit.statLabel}</span>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}