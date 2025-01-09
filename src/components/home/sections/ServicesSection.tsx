import React from 'react';
import { Brain, Bot, Code, Zap, Shield, Book } from 'lucide-react';

const services = [
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
    icon: Shield,
    title: "Sécurité Garantie",
    description: "Protection des données et confidentialité assurée pour tous vos projets."
  },
  {
    icon: Book,
    title: "Formation Continue",
    description: "Formation approfondie aux outils d'IA générative et accompagnement personnalisé."
  }
];

export default function ServicesSection() {
  return (
    <div className="relative py-24 bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-primary/5 to-black" />

      <div className="container relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Solutions complètes
          </h2>
          <p className="text-gray-400">
            Des outils puissants et une expertise reconnue pour accélérer votre transformation digitale.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.title}
              className="group relative p-6 rounded-2xl border border-white/10 bg-black/50 backdrop-blur-sm hover:border-primary/20 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}