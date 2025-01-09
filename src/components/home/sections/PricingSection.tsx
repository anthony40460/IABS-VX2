import React from 'react';
import { SectionContainer } from '@/components/ui/section-container';
import { GradientBackground } from '@/components/ui/gradient-background';
import { SectionHeader } from '@/components/ui/section-header';
import { PricingCard } from '@/components/ui/pricing-card';

const plans = [
  {
    title: 'Start',
    price: 99,
    setupFee: 399,
    minutes: 120,
    commitment: 6,
    features: [
      'Consulting & Formation IA',
      'Création de contenu',
      'Support technique',
      'Report sur 3 mois (max 360 min)',
      'Accès dashboard client'
    ]
  },
  {
    title: 'Growth',
    price: 199,
    setupFee: 990,
    minutes: 200,
    commitment: 12,
    features: [
      'Consulting & Formation IA avancée',
      'Création de contenu premium',
      'Support technique prioritaire',
      'Report sur 2 mois (max 400 min)',
      'Audit mensuel personnalisé'
    ]
  },
  {
    title: 'Premium',
    price: 499,
    setupFee: 1490,
    minutes: 360,
    commitment: 12,
    features: [
      'Consulting & Formation IA expert',
      'Création de contenu illimitée',
      'Support technique 24/7',
      'Report sur 2 mois (max 720 min)',
      'Audit hebdomadaire personnalisé'
    ]
  }
];

export default function PricingSection() {
  return (
    <SectionContainer>
      <GradientBackground variant="primary" />
      
      <SectionHeader
        badge="Tarification"
        title="Formules Co-Créateur"
        description="Choisissez le plan qui correspond à vos besoins avec un engagement sur mesure."
      />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <PricingCard
            key={plan.title}
            {...plan}
            highlighted={index === 1}
          />
        ))}
      </div>
    </SectionContainer>
  );
}