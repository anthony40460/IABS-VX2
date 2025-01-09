import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionContainer } from '@/components/ui/section-container';
import { GradientBackground } from '@/components/ui/gradient-background';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  return (
    <SectionContainer className="py-32">
      <GradientBackground variant="primary" />

      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-[#FF1CF7]/10 to-[#00F0FF]/10 border border-[#FF1CF7]/20 backdrop-blur-sm mb-8">
          <span className="text-sm font-medium bg-gradient-to-r from-[#FF1CF7] to-[#00F0FF] bg-clip-text text-transparent">
            Commencez maintenant
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-[#FF1CF7] via-[#5D12D2] to-[#00F0FF] bg-clip-text text-transparent">
            Prêt à transformer votre entreprise ?
          </span>
        </h2>

        <p className="text-lg text-gray-400 mb-12">
          Commencez dès aujourd'hui avec un audit gratuit et découvrez comment l'IA peut révolutionner votre activité.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gradient-to-r from-[#FF1CF7] to-[#00F0FF] text-black font-semibold hover:opacity-90 transition-opacity"
          >
            Demander un audit gratuit
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            to="/pricing"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-[#FF1CF7]/20 hover:bg-white/5 transition-colors text-white font-semibold"
          >
            Voir les tarifs
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
}