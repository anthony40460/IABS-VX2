import React from 'react';
import { Brain, Clock, Users, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: Brain,
    value: "15+",
    label: "ans d'expertise",
    color: "from-primary/20 to-primary/5"
  },
  {
    icon: Clock,
    value: "120-360",
    label: "minutes/mois",
    color: "from-secondary/20 to-secondary/5"
  },
  {
    icon: Users,
    value: "500+",
    label: "clients satisfaits",
    color: "from-accent/20 to-accent/5"
  },
  {
    icon: TrendingUp,
    value: "300%",
    label: "ROI moyen",
    color: "from-primary/20 to-accent/5"
  }
];

export default function HeroStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="relative group p-4 rounded-xl border border-white/10 backdrop-blur-sm"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity`} />
          <div className="relative flex flex-col items-center text-center">
            <stat.icon className="w-8 h-8 mb-2 text-primary" />
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {stat.value}
            </div>
            <div className="text-sm text-muted-foreground">
              {stat.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}