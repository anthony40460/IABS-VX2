import React from 'react';
import { Check, Zap, Clock, Shield, Users, Sparkles } from 'lucide-react';
import { Button } from './button';

interface PricingCardProps {
  title: string;
  price: number;
  setupFee: number;
  minutes: number;
  commitment: number;
  features: string[];
  highlighted?: boolean;
}

export function PricingCard({
  title,
  price,
  setupFee,
  minutes,
  commitment,
  features,
  highlighted = false
}: PricingCardProps) {
  const icons = {
    'Consulting & Formation': Users,
    'Création de contenu': Sparkles,
    'Support technique': Shield,
    'Report sur': Clock,
    'Accès dashboard': Zap,
    'Audit': Users,
  };

  function getIconForFeature(feature: string) {
    const matchingKey = Object.keys(icons).find(key => feature.startsWith(key));
    return matchingKey ? icons[matchingKey] : Check;
  }

  return (
    <div className={`relative p-8 rounded-2xl border border-white/10 backdrop-blur-sm ${
      highlighted ? 'bg-primary/5' : 'bg-black/50'
    } hover:border-primary/20 transition-all duration-300`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
      
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-accent rounded-full text-white text-sm font-medium">
          Recommandé
        </div>
      )}
      
      <div className="relative">
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <div className="flex items-baseline mb-2">
          <span className="text-4xl font-bold text-white">{price}€</span>
          <span className="text-lg text-gray-400 ml-2">/mois</span>
        </div>
        <p className="text-sm text-gray-400 mb-6">
          Setup : {setupFee}€ HT (payable en 4 fois)
        </p>

        <div className="mb-6 p-4 rounded-lg bg-white/5">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            <div>
              <div className="text-lg font-semibold text-white">{minutes} minutes/mois</div>
              <p className="text-sm text-gray-400">Engagement {commitment} mois</p>
            </div>
          </div>
        </div>

        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => {
            const Icon = getIconForFeature(feature);
            return (
              <li key={index} className="flex items-start gap-3 text-gray-300">
                <Icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            );
          })}
        </ul>

        <Button 
          className={`w-full ${
            highlighted 
              ? 'bg-gradient-to-r from-primary to-accent hover:opacity-90' 
              : 'bg-white/5 hover:bg-white/10'
          }`}
        >
          Choisir {title}
        </Button>
      </div>
    </div>
  );
}