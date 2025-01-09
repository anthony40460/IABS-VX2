import { Brain, Code, PenTool, Bot, Video, Book, Wrench, BarChart, Users, Music } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: any;
  image: string;
  features: string[];
  benefits: string[];
  process: {
    title: string;
    description: string;
  }[];
  tools: string[];
}

export const services = [
  {
    id: 'ia-consulting',
    title: 'Consulting IA',
    description: 'Accompagnement stratégique pour intégrer l\'IA dans votre entreprise. Audit et recommandations personnalisées.',
    icon: Brain,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop',
    features: [
      'Audit de maturité IA',
      'Stratégie d\'implémentation',
      'Optimisation des processus',
      'Formation des équipes'
    ],
    benefits: [
      'Réduction des coûts opérationnels',
      'Amélioration de la productivité',
      'Innovation accélérée',
      'Avantage compétitif'
    ],
    process: [
      {
        title: 'Audit initial',
        description: 'Analyse approfondie de vos processus et besoins'
      },
      {
        title: 'Recommandations',
        description: 'Plan d\'action détaillé et solutions sur mesure'
      },
      {
        title: 'Implémentation',
        description: 'Accompagnement dans la mise en place des solutions'
      },
      {
        title: 'Suivi',
        description: 'Mesure des résultats et optimisation continue'
      }
    ],
    tools: [
      'ChatGPT Enterprise',
      'Claude Pro',
      'Midjourney',
      'DALL-E 3'
    ]
  },
  {
    id: 'ia-formation',
    title: 'Formation IA',
    description: 'Formations pratiques sur ChatGPT, Claude, et autres outils d\'IA. Montée en compétence de vos équipes.',
    icon: Book,
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop',
    features: [
      'Formations personnalisées',
      'Ateliers pratiques',
      'Support continu',
      'Certification'
    ],
    benefits: [
      'Autonomie des équipes',
      'Productivité accrue',
      'Innovation collaborative',
      'ROI mesurable'
    ],
    process: [
      {
        title: 'Évaluation',
        description: 'Analyse des besoins et du niveau actuel'
      },
      {
        title: 'Programme',
        description: 'Création d\'un parcours sur mesure'
      },
      {
        title: 'Formation',
        description: 'Sessions interactives et exercices pratiques'
      },
      {
        title: 'Certification',
        description: 'Validation des acquis et remise des certificats'
      }
    ],
    tools: [
      'ChatGPT',
      'Claude',
      'Midjourney',
      'Stable Diffusion'
    ]
  },
  {
    id: 'web-development',
    title: 'Création de Sites Web',
    description: 'Développement de sites vitrines, e-commerce et applications web sur mesure.',
    icon: Code,
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop',
    features: [
      'Design responsive',
      'Optimisation SEO',
      'Performance optimale',
      'Sécurité renforcée'
    ],
    benefits: [
      'Visibilité accrue',
      'Conversion optimisée',
      'Image professionnelle',
      'Support technique'
    ],
    process: [
      {
        title: 'Conception',
        description: 'Design et architecture du site'
      },
      {
        title: 'Développement',
        description: 'Création et intégration des fonctionnalités'
      },
      {
        title: 'Tests',
        description: 'Validation et optimisation'
      },
      {
        title: 'Déploiement',
        description: 'Mise en ligne et formation'
      }
    ],
    tools: [
      'React',
      'Next.js',
      'Tailwind CSS',
      'Supabase'
    ]
  },
  {
    id: 'design-creation',
    title: 'Design & Création',
    description: 'Production de visuels, logos, et supports marketing avec l\'aide de l\'IA générative.',
    icon: PenTool,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop',
    features: [
      'Design sur mesure',
      'Identité visuelle',
      'Supports marketing',
      'Animation'
    ],
    benefits: [
      'Image de marque forte',
      'Cohérence visuelle',
      'Impact marketing',
      'Différenciation'
    ],
    process: [
      {
        title: 'Brief',
        description: 'Analyse des besoins et objectifs'
      },
      {
        title: 'Création',
        description: 'Production des visuels'
      },
      {
        title: 'Révision',
        description: 'Ajustements et validation'
      },
      {
        title: 'Livraison',
        description: 'Formats adaptés à vos besoins'
      }
    ],
    tools: [
      'Midjourney',
      'DALL-E 3',
      'Adobe Creative Suite',
      'Figma'
    ]
  },
  {
    id: 'chatbots',
    title: 'Chatbots IA',
    description: 'Création de chatbots intelligents pour l\'assistance client et l\'automatisation.',
    icon: Bot,
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&auto=format&fit=crop',
    features: [
      'IA conversationnelle',
      'Personnalisation',
      'Multi-langues',
      'Analytics'
    ],
    benefits: [
      'Support 24/7',
      'Réduction des coûts',
      'Satisfaction client',
      'Scalabilité'
    ],
    process: [
      {
        title: 'Analyse',
        description: 'Étude des besoins et cas d\'usage'
      },
      {
        title: 'Configuration',
        description: 'Paramétrage et entraînement'
      },
      {
        title: 'Tests',
        description: 'Validation et optimisation'
      },
      {
        title: 'Déploiement',
        description: 'Intégration et monitoring'
      }
    ],
    tools: [
      'GPT-4',
      'DialogFlow',
      'Rasa',
      'BotPress'
    ]
  },
  {
    id: 'video-production',
    title: 'Production Vidéo IA',
    description: 'Création de vidéos marketing et contenus animés optimisés par l\'IA.',
    icon: Video,
    image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?w=800&auto=format&fit=crop',
    features: [
      'Scénarisation IA',
      'Animation automatisée',
      'Voix synthétiques',
      'Montage intelligent'
    ],
    benefits: [
      'Production rapide',
      'Coûts optimisés',
      'Qualité professionnelle',
      'Personnalisation'
    ],
    process: [
      {
        title: 'Concept',
        description: 'Définition du style et du message'
      },
      {
        title: 'Production',
        description: 'Création des contenus'
      },
      {
        title: 'Post-production',
        description: 'Montage et effets'
      },
      {
        title: 'Livraison',
        description: 'Export et diffusion'
      }
    ],
    tools: [
      'Runway ML',
      'D-ID',
      'Synthesia',
      'Adobe Premiere'
    ]
  },
  {
    id: 'music-creation',
    title: 'Création Musicale IA',
    description: 'Composition et production musicale assistée par intelligence artificielle.',
    icon: Music,
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&auto=format&fit=crop',
    features: [
      'Composition sur mesure',
      'Arrangements IA',
      'Sound design',
      'Mastering automatisé'
    ],
    benefits: [
      'Originalité garantie',
      'Production rapide',
      'Droits exclusifs',
      'Adaptabilité'
    ],
    process: [
      {
        title: 'Brief',
        description: 'Définition du style et des besoins'
      },
      {
        title: 'Composition',
        description: 'Création des mélodies et arrangements'
      },
      {
        title: 'Production',
        description: 'Mix et mastering'
      },
      {
        title: 'Livraison',
        description: 'Formats adaptés à vos besoins'
      }
    ],
    tools: [
      'AIVA',
      'Amper Music',
      'OpenAI MuseNet',
      'iZotope'
    ]
  }
];