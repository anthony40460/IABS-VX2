import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Brain, Zap, Users } from 'lucide-react';

interface PortfolioItem {
  id: string;
  type: 'image' | 'video' | 'app';
  title: string;
  description: string;
  url: string;
  thumbnail?: string;
  tags: string[];
  fullDescription?: string;
  features?: string[];
  technologies?: string[];
  results?: {
    label: string;
    value: string;
    icon: any;
  }[];
}

const portfolioItems: Record<string, PortfolioItem> = {
  '1': {
    id: '1',
    type: 'image',
    title: 'Portrait Artistique IA',
    description: 'Portrait généré avec Midjourney pour une campagne marketing',
    url: 'https://images.unsplash.com/photo-1699133867157-9e926f10f155?w=800&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1699133867157-9e926f10f155?w=400&auto=format&fit=crop',
    tags: ['IA', 'Design', 'Marketing'],
    fullDescription: 'Une série de portraits artistiques générés par IA pour une campagne marketing innovante. Utilisation avancée de Midjourney pour créer des visuels uniques et captivants qui ont permis d\'augmenter l\'engagement de 300%.',
    features: [
      'Génération de portraits personnalisés',
      'Style artistique unique',
      'Adaptation aux différents formats',
      'Optimisation pour les réseaux sociaux'
    ],
    technologies: [
      'Midjourney v6',
      'Adobe Photoshop',
      'Stable Diffusion'
    ],
    results: [
      {
        label: 'Engagement',
        value: '+300%',
        icon: Users
      },
      {
        label: 'Temps de création',
        value: '-75%',
        icon: Zap
      },
      {
        label: 'Variations uniques',
        value: '50+',
        icon: Brain
      }
    ]
  },
  '2': {
    id: '2',
    type: 'image',
    title: 'Design Futuriste',
    description: 'Concept art créé avec DALL-E 3 pour un projet innovant',
    url: 'https://images.unsplash.com/photo-1697557469746-5db5f06a1045?w=800&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1697557469746-5db5f06a1045?w=400&auto=format&fit=crop',
    tags: ['IA', 'Innovation', 'Design'],
    fullDescription: 'Une exploration futuriste du design produit utilisant DALL-E 3 pour créer des concepts innovants. Ce projet a permis de réduire le temps de conception de 80% tout en augmentant la qualité et l\'originalité des designs.',
    features: [
      'Génération de concepts produits',
      'Itérations rapides',
      'Visualisation 3D',
      'Adaptation aux contraintes techniques'
    ],
    technologies: [
      'DALL-E 3',
      'Blender',
      'Adobe Creative Suite'
    ],
    results: [
      {
        label: 'Temps économisé',
        value: '80%',
        icon: Zap
      },
      {
        label: 'Concepts générés',
        value: '100+',
        icon: Brain
      },
      {
        label: 'Satisfaction client',
        value: '98%',
        icon: Users
      }
    ]
  }
};

export default function PortfolioDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = id ? portfolioItems[id] : null;

  if (!item) {
    return (
      <div className="min-h-screen bg-black py-24">
        <div className="container px-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Projet non trouvé</h1>
            <Link
              to="/portfolio"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour au portfolio
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
        <div className="flex justify-between items-center mb-8">
          <Link
            to="/portfolio"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour au portfolio
          </Link>
          <div className="flex space-x-4">
            {parseInt(id) > 1 && (
              <button
                onClick={() => navigate(`/portfolio/${parseInt(id) - 1}`)}
                className="p-2 rounded-lg border border-white/10 hover:bg-white/5 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 text-white" />
              </button>
            )}
            {parseInt(id) < Object.keys(portfolioItems).length && (
              <button
                onClick={() => navigate(`/portfolio/${parseInt(id) + 1}`)}
                className="p-2 rounded-lg border border-white/10 hover:bg-white/5 transition-colors"
              >
                <ArrowRight className="h-4 w-4 text-white" />
              </button>
            )}
          </div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Media */}
          <div>
            {item.type === 'image' && (
              <img
                src={item.url}
                alt={item.title}
                className="w-full rounded-xl border border-white/10"
              />
            )}
            {item.type === 'video' && (
              <div className="aspect-video rounded-xl border border-white/10 overflow-hidden">
                <iframe src={item.url} className="w-full h-full" allow="autoplay; fullscreen" />
              </div>
            )}
            {item.type === 'app' && (
              <div className="aspect-video rounded-xl border border-white/10 overflow-hidden">
                <iframe src={item.url} className="w-full h-full" />
              </div>
            )}
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-white mb-4">{item.title}</h1>
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-400">{item.fullDescription}</p>
            </div>

            {/* Results */}
            {item.results && (
              <div className="grid grid-cols-3 gap-4">
                {item.results.map((result) => (
                  <div key={result.label} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <result.icon className="h-6 w-6 text-primary mb-2" />
                    <div className="text-2xl font-bold text-white">{result.value}</div>
                    <div className="text-sm text-gray-400">{result.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Features */}
            {item.features && (
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Fonctionnalités</h2>
                <ul className="space-y-2">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-400">
                      <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            {item.technologies && (
              <div>
                <h2 className="text-xl font-semibold text-white mb-4">Technologies utilisées</h2>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-lg bg-white/5 border border-white/10 text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="flex-1 inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-[#FF1CF7] to-[#00F0FF] text-black font-semibold hover:opacity-90 transition-opacity"
              >
                Démarrer un projet similaire
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/pricing"
                className="flex-1 inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/10 text-white hover:bg-white/5 transition-colors"
              >
                Voir les tarifs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}