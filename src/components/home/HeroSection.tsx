import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(326_100%_60%/0.3)_0%,transparent_50%)] animate-pulse-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,hsl(150_100%_50%/0.3)_0%,transparent_50%)] animate-pulse-slow delay-75" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_50%,hsl(270_100%_60%/0.3)_0%,transparent_50%)] animate-pulse-slow delay-150" />
      </div>
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 lg:py-40">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Logo */}
            <div className="inline-flex items-center space-x-3 bg-white/5 p-3 rounded-2xl backdrop-blur-sm border border-white/10">
              <img src="/logo.png" alt="IA Business School" className="h-16 w-auto" />
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
                <span className="block text-glow">Transformez votre</span>
                <span className="block mt-2 bg-gradient-to-r from-[#ff3399] via-[#33ff99] to-[#9933ff] bg-clip-text text-transparent animate-gradient">
                  entreprise avec l'IA
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="max-w-2xl text-lg md:text-xl text-muted-foreground">
              Accélérez votre croissance grâce à nos solutions d'IA sur mesure. Formation, consulting et outils pour multiplier la productivité de vos équipes.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg" className="glow-effect group bg-gradient-to-r from-[#ff3399] to-[#9933ff] border-0">
                Démarrer maintenant
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5">
                Voir les offres
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}