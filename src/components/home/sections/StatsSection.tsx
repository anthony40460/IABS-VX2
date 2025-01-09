import React from 'react';

const stats = [
  { value: "15+", label: "ans d'expertise" },
  { value: "500+", label: "entreprises formées" },
  { value: "98%", label: "satisfaction client" },
  { value: "300%", label: "ROI moyen" }
];

export default function StatsSection() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 opacity-30" />
      <div className="container relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}