import React from 'react';
import { ClipboardCheck, Users, Lightbulb, Rocket } from 'lucide-react';

const steps = [
  {
    title: 'Audit initial',
    description: 'Analyse approfondie de vos besoins et objectifs pour définir la meilleure stratégie.',
    icon: ClipboardCheck,
  },
  {
    title: 'Formation équipe',
    description: 'Formation personnalisée de vos équipes aux outils et méthodologies IA.',
    icon: Users,
  },
  {
    title: 'Implémentation',
    description: 'Mise en place progressive des solutions et accompagnement pas à pas.',
    icon: Lightbulb,
  },
  {
    title: 'Optimisation',
    description: 'Suivi des performances et optimisation continue des processus.',
    icon: Rocket,
  },
];

export default function ProcessSection() {
  return (
    <div className="bg-gradient-to-b from-white to-indigo-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Notre méthode</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Une approche structurée et efficace
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Nous vous accompagnons à chaque étape de votre transformation digitale avec une méthodologie éprouvée.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                {index !== steps.length - 1 && (
                  <div className="absolute top-12 left-full h-0.5 w-full transform -translate-x-1/2 bg-indigo-200 hidden md:block" />
                )}
                <div className="relative flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600">
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-center text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}