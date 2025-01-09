import React from 'react';
import { Award, Users, TrendingUp } from 'lucide-react';

export default function AboutSection() {
  return (
    <div className="relative bg-background/50 py-24">
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-base font-semibold text-primary">À propos de nous</h2>
          <p className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Une expertise reconnue en IA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          <StatsCard
            icon={Award}
            title="15+ ans d'expérience"
            description="Une équipe d'experts passionnés par l'innovation et la transformation digitale."
          />
          <StatsCard
            icon={Users}
            title="500+ clients satisfaits"
            description="Des entreprises de toutes tailles nous font confiance pour leur transformation."
          />
          <StatsCard
            icon={TrendingUp}
            title="300% de ROI moyen"
            description="Des résultats mesurables et un impact direct sur votre productivité."
          />
        </div>
      </div>
    </div>
  );
}

function StatsCard({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-secondary/30 p-6 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-colors">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative z-10">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="mb-2 font-semibold text-lg">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}