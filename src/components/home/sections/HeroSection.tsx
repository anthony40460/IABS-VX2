import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black">
      {/* Badge animé */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-[#FF1CF7]/10 to-[#00F0FF]/10 border border-[#FF1CF7]/20 backdrop-blur-sm">
          <span className="text-sm font-medium bg-gradient-to-r from-[#FF1CF7] to-[#00F0FF] bg-clip-text text-transparent animate-pulse">
            Intelligence Artificielle Conversationnelle
          </span>
        </div>
      </div>

      {/* Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_top_left,#FF1CF7_0%,transparent_25%)] opacity-30" />
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_bottom_right,#00F0FF_0%,transparent_25%)] opacity-30" />
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,#5D12D2_0%,transparent_25%)] opacity-20" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)] opacity-20" />
      </div>

      <div className="container relative z-10 px-4">
        <div className="max-w-[800px] mx-auto text-center">
          {/* Titre principal avec animation */}
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-8">
            <span className="block mb-4 text-white">L'IA Conversationnelle</span>
            <span className="block bg-gradient-to-r from-[#FF1CF7] via-[#5D12D2] to-[#00F0FF] bg-clip-text text-transparent animate-gradient bg-300% leading-tight">
              dédiée à la Relation Client
            </span>
          </h1>

          {/* Description avec glassmorphism */}
          <div className="relative mb-12 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <p className="text-lg md:text-xl text-gray-300">
              Transformez votre expérience client grâce à l'intelligence artificielle.
              <span className="block mt-2 text-white/80">
                Automatisation intelligente, analyse et optimisation de vos interactions.
              </span>
            </p>
          </div>

          {/* Boutons CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-[#FF1CF7] to-[#00F0FF] hover:opacity-90 text-black font-semibold"
            >
              Demander une démo
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-[#FF1CF7]/20 hover:bg-[#FF1CF7]/10"
            >
              Découvrir nos solutions
            </Button>
          </div>

          {/* Stats avec glassmorphism */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { value: '15+', label: "ans d'expertise" },
              { value: '500+', label: 'clients satisfaits' },
              { value: '98%', label: 'satisfaction client' },
              { value: '300%', label: 'ROI moyen' }
            ].map((stat) => (
              <div key={stat.label} className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#FF1CF7]/20 transition-colors">
                <div className="text-2xl font-bold bg-gradient-to-r from-[#FF1CF7] to-[#00F0FF] bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}