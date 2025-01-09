import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import { services } from '../../data/services';

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find(s => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen bg-black py-24">
        <div className="container px-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Service non trouvé</h1>
            <Link
              to="/services"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour aux services
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-24">
      <div className="container px-4">
        {/* Navigation */}
        <Link
          to="/services"
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour aux services
        </Link>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {service.title}
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              {service.description}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-[#FF1CF7] to-[#00F0FF] text-black font-semibold hover:opacity-90 transition-opacity"
            >
              Demander un devis
            </Link>
          </div>
          <div>
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-[300px] object-cover rounded-xl border border-white/10"
            />
          </div>
        </div>

        {/* Features & Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <h2 className="text-xl font-semibold text-white mb-6">
              Fonctionnalités
            </h2>
            <ul className="space-y-4">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center text-gray-400">
                  <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <h2 className="text-xl font-semibold text-white mb-6">
              Bénéfices
            </h2>
            <ul className="space-y-4">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-center text-gray-400">
                  <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">
            Notre processus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, index) => (
              <div
                key={step.title}
                className="relative bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-black font-bold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8">
            Outils utilisés
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {service.tools.map((tool) => (
              <div
                key={tool}
                className="bg-white/5 border border-white/10 rounded-xl p-4 text-center"
              >
                <span className="text-white">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}