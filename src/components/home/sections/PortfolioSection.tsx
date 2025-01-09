import React from 'react';
import { SectionContainer } from '@/components/ui/section-container';
import { GradientBackground } from '@/components/ui/gradient-background';
import { SectionHeader } from '@/components/ui/section-header';
import { PortfolioCard } from '@/components/ui/portfolio-card';

const projects = [
  {
    title: "Chatbot IA pour Cabinet Médical",
    description: "Assistant virtuel pour la prise de rendez-vous et le suivi patient",
    image: "https://images.unsplash.com/photo-1516916759473-600c07bc12d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    tags: ["IA", "Chatbot", "Santé"]
  },
  {
    title: "Site E-commerce Optimisé IA",
    description: "Création d'une boutique en ligne avec recommandations personnalisées",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    tags: ["E-commerce", "IA", "UX Design"]
  },
  {
    title: "Campagne Marketing IA",
    description: "Génération de contenu et visuels optimisés par l'intelligence artificielle",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    tags: ["Marketing", "IA", "Contenu"]
  }
];

export default function PortfolioSection() {
  return (
    <SectionContainer className="bg-black/50">
      <GradientBackground variant="accent" />
      
      <SectionHeader
        badge="Portfolio"
        title="Nos Réalisations"
        description="Découvrez quelques-uns de nos projets récents et leur impact sur la transformation digitale de nos clients."
      />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <PortfolioCard key={project.title} {...project} />
        ))}
      </div>
    </SectionContainer>
  );
}