import React from 'react';
import { Check, Zap, Clock, Shield, Users, Sparkles } from 'lucide-react';
import { createCheckoutSession } from '../../lib/stripe';

interface PricingCardProps {
  title: string;
  price: number;
  setupFee: number;
  minutes: number;
  commitment: number;
  features: string[];
  highlighted?: boolean;
  priceId: string;
}

export default function PricingCard({
  title,
  price,
  setupFee,
  minutes,
  commitment,
  features,
  highlighted = false,
  priceId
}: PricingCardProps) {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleSubscribe = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log('Starting checkout for plan:', title, 'with priceId:', priceId);
      await createCheckoutSession(priceId);
    } catch (err: any) {
      console.error('Subscription error:', err);
      setError(err.message || 'Une erreur est survenue lors de la souscription');
    } finally {
      setLoading(false);
    }
  };

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
      {/* ... reste du code inchangé ... */}
      <button 
        onClick={handleSubscribe}
        disabled={loading}
        className={`w-full px-4 py-3 rounded-lg font-semibold transition-colors ${
          highlighted 
            ? 'bg-gradient-to-r from-primary to-accent hover:opacity-90 text-black' 
            : 'bg-white/5 hover:bg-white/10 text-white'
        } disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {loading ? 'Chargement...' : `Choisir ${title}`}
      </button>
    </div>
  );
}