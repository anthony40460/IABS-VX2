import React from 'react';
import PricingCard from './PricingCard';
import { pricingPlans } from '../../data/pricingPlans';

export default function PricingSection() {
  return (
    <div className="bg-black py-24">
      <div className="container px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-[#FF1CF7]/10 to-[#00F0FF]/10 border border-[#FF1CF7]/20 backdrop-blur-sm mb-4">
            <span className="text-sm font-medium bg-gradient-to-r from-[#FF1CF7] to-[#00F0FF] bg-clip-text text-transparent">
              Tarification
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Des formules adaptées à vos besoins
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choisissez le plan qui correspond le mieux à vos objectifs de transformation numérique.
            Tous nos plans incluent un accompagnement personnalisé.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={plan.title}
              {...plan}
              highlighted={index === 1}
              priceId={plan.priceId}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tous nos plans incluent : consultation IA, formation, création de contenu, 
            support technique et maintenance.
          </p>
        </div>
      </div>
    </div>
  );
}