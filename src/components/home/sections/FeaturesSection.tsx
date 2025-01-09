import React from 'react';
import { Brain, Zap, Users, Shield, Bot, Code } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "IA Générative",
    description: "Maîtrisez ChatGPT, DALL-E et autres outils d'IA pour transformer votre workflow."
  },
  {
    icon: Bot,
    title: "Chatbots IA", 
    description: "Automatisation intelligente du service client et des processus métier."
  },
  {
    icon: Code,
    title: "Développement",
    description: "Intégration sur mesure des solutions IA dans vos outils existants."
  },
  {
    icon: Zap,
    title: "Productivité x3",
    description: "Automatisez les tâches répétitives et concentrez-vous sur la création de valeur."
  },
  {
    icon: Users,
    title: "Formation Continue",
    description: "Accompagnement personnalisé et mise à niveau régulière de vos compétences."
  },
  {
    icon: Shield,
    title: "Sécurité Garantie",
    description: "Protection des données et confidentialité assurée pour tous vos projets."
  }
];

export default function FeaturesSection() {
  return (
    <div className="relative py-24 bg-black overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_top_left,#FF1CF7_0%,transparent_25%)] opacity-30" />
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_bottom_right,#00F0FF_0%,transparent_25%)] opacity-30" />
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,#5D12D2_0%,transparent_25%)] opacity-20" />
        <div className="absolute inset-0 bg-grid opacity-20" />
      </div>

      <div className="container relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-[#FF1CF7]/10 to-[#00F0FF]/10 border border-[#FF1CF7]/20 backdrop-blur-sm">
            <span className="text-sm font-medium bg-gradient-to-r from-[#FF1CF7] to-[#00F0FF] bg-clip-text text-transparent">
              Nos Solutions
            </span>
          </div>
          
          <h2 className="mt-6 text-4xl font-bold">
            <span className="bg-gradient-to-r from-[#FF1CF7] via-[#5D12D2] to-[#00F0FF] bg-clip-text text-transparent">
              Transformez votre entreprise
            </span>
          </h2>
          
          <p className="mt-4 text-lg text-gray-400">
            Des outils puissants et une expertise reconnue pour accélérer votre transformation digitale.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="group relative p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-[#FF1CF7]/20 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF1CF7]/5 via-[#5D12D2]/5 to-[#00F0FF]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                <feature.icon className="w-12 h-12 mb-4 text-[#FF1CF7]" />
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}