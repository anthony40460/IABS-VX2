import React from 'react';
import { Bot, Brain, Sparkles, MessageSquare } from 'lucide-react';

const tools = [
  {
    name: 'ChatGPT Enterprise',
    description: 'Assistant IA avancé pour l\'automatisation des tâches et la génération de contenu.',
    icon: MessageSquare,
    features: ['Personnalisation avancée', 'Intégration workflow', 'Sécurité entreprise']
  },
  {
    name: 'DALL-E Pro',
    description: 'Création d\'images et de designs professionnels assistée par IA.',
    icon: Sparkles,
    features: ['Haute résolution', 'Styles personnalisés', 'Droits commerciaux']
  },
  {
    name: 'Claude 2',
    description: 'Assistant IA spécialisé dans l\'analyse et la rédaction complexe.',
    icon: Brain,
    features: ['Analyse approfondie', 'Rédaction technique', 'Recherche avancée']
  },
  {
    name: 'Copilot Business',
    description: 'Assistant de développement et d\'automatisation pour votre entreprise.',
    icon: Bot,
    features: ['Code optimisé', 'Documentation auto', 'Tests automatisés']
  }
];

export default function ToolsSection() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-indigo-600">Nos outils</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">Technologies de pointe</p>
          <p className="mt-4 text-lg text-gray-600">
            Accédez aux meilleurs outils d'IA, optimisés pour votre entreprise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool) => (
            <div key={tool.name} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white mx-auto">
                <tool.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-center text-gray-900">{tool.name}</h3>
              <p className="mt-4 text-gray-600 text-center">{tool.description}</p>
              <ul className="mt-6 space-y-3">
                {tool.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-600">
                    <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-indigo-600 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}