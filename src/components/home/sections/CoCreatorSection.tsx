import React from 'react';
import { Users, Zap, Clock } from 'lucide-react';

const benefits = [
  {
    title: 'Co-création sur mesure',
    description: 'Participez activement à la création de vos solutions IA. Nous adaptons nos outils à vos besoins spécifiques.',
    icon: Users
  },
  {
    title: 'Flexibilité maximale',
    description: 'Utilisez vos minutes comme vous le souhaitez : formation, création, support technique.',
    icon: Zap
  },
  {
    title: 'Report de minutes',
    description: 'Cumulez vos minutes non utilisées pour les projets plus importants.',
    icon: Clock
  }
];

export default function CoCreatorSection() {
  return (
    <div className="relative bg-background/50 py-24">
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      <div className="absolute -left-32 -top-32 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse-slow" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-secondary/50 px-3 py-1 rounded-full">
            <span className="text-sm text-primary">Notre approche unique</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Le concept Co-Créateur
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Une nouvelle façon de collaborer où vous êtes au cœur du processus créatif
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {benefits.map((benefit) => (
            <div 
              key={benefit.title}
              className="group relative overflow-hidden rounded-2xl bg-secondary/30 p-6 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-lg">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}