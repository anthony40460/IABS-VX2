import React from 'react';
import ServicesGrid from './ServicesGrid';

export default function ServicesSection() {
  return (
    <div className="bg-black py-24">
      <div className="container px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-[#FF1CF7]/10 to-[#00F0FF]/10 border border-[#FF1CF7]/20 backdrop-blur-sm mb-4">
            <span className="text-sm font-medium bg-gradient-to-r from-[#FF1CF7] to-[#00F0FF] bg-clip-text text-transparent">
              Nos Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Solutions IA & Marketing Digital
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Plus de 15 ans d'expertise au service de votre transformation numérique.
            Nous co-créons avec vous des solutions innovantes et sur mesure.
          </p>
        </div>
        
        <ServicesGrid />
        
        <div className="mt-16 text-center text-gray-400">
          <p className="max-w-2xl mx-auto">
            Chaque service est accessible via notre système de crédit minutes, 
            vous permettant une flexibilité totale dans la gestion de vos projets.
          </p>
        </div>
      </div>
    </div>
  );
}