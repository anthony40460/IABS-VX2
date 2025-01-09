import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Filter } from 'lucide-react';
import { cn } from '@/lib/utils';

type MediaType = 'image' | 'video' | 'app';

interface GalleryItem {
  id: string;
  type: MediaType;
  title: string;
  description: string;
  url: string;
  thumbnail?: string;
  tags: string[];
}

const portfolioItems: GalleryItem[] = [
  {
    id: '1',
    type: "image",
    title: "Campagne Marketing IA",
    description: "Série de visuels générés par IA pour une campagne de luxe",
    url: "https://images.unsplash.com/photo-1664575198308-3959904fa430?w=800&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1664575198308-3959904fa430?w=400&auto=format&fit=crop",
    tags: ["IA", "Marketing", "Luxe"]
  },
  {
    id: '2',
    type: "image",
    title: "Collection Mode IA",
    description: "Design de mode généré par IA pour une collection exclusive",
    url: "https://images.unsplash.com/photo-1670272505340-d906d8d77d03?w=800&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1670272505340-d906d8d77d03?w=400&auto=format&fit=crop",
    tags: ["IA", "Mode", "Design"]
  },
  {
    id: '3',
    type: "video",
    title: "Vidéo Produit IA",
    description: "Animation produit générée par IA avec Runway ML",
    url: "https://player.vimeo.com/video/824804225",
    thumbnail: "https://images.unsplash.com/photo-1676299081847-824916de030a?w=400&auto=format&fit=crop",
    tags: ["IA", "Animation", "Produit"]
  },
  {
    id: '4',
    type: "app",
    title: "Assistant E-commerce",
    description: "Chatbot IA personnalisé pour recommandations produits",
    url: "https://chat.openai.com/embed",
    thumbnail: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&auto=format&fit=crop",
    tags: ["IA", "E-commerce", "Chatbot"]
  },
  {
    id: '5',
    type: "image",
    title: "Identité Visuelle IA",
    description: "Branding complet généré par IA pour une startup tech",
    url: "https://images.unsplash.com/photo-1664575198393-c0f5df03a7cd?w=800&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1664575198393-c0f5df03a7cd?w=400&auto=format&fit=crop",
    tags: ["IA", "Branding", "Tech"]
  },
  {
    id: '6',
    type: "video",
    title: "Spot Publicitaire IA",
    description: "Publicité TV générée entièrement par IA",
    url: "https://player.vimeo.com/video/824804225",
    thumbnail: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&auto=format&fit=crop",
    tags: ["IA", "Publicité", "Vidéo"]
  },
  {
    id: '7',
    type: "app",
    title: "IA RH Assistant",
    description: "Assistant IA pour le recrutement et la formation",
    url: "https://chat.openai.com/embed",
    thumbnail: "https://images.unsplash.com/photo-1664575197229-3bbebc281874?w=400&auto=format&fit=crop",
    tags: ["IA", "RH", "Formation"]
  },
  {
    id: '8',
    type: "image",
    title: "Art Architectural IA",
    description: "Concepts architecturaux générés par IA",
    url: "https://images.unsplash.com/photo-1670272498380-eb330b61f3cd?w=800&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1670272498380-eb330b61f3cd?w=400&auto=format&fit=crop",
    tags: ["IA", "Architecture", "Design"]
  },
  {
    id: '9',
    type: "video",
    title: "Motion Design IA",
    description: "Animation logo générée par intelligence artificielle",
    url: "https://player.vimeo.com/video/824804225",
    thumbnail: "https://images.unsplash.com/photo-1682687220198-88e9bdea9931?w=400&auto=format&fit=crop",
    tags: ["IA", "Motion", "Logo"]
  }
];

export default function PortfolioSection() {
  const [selectedType, setSelectedType] = useState<MediaType | 'all'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const navigate = useNavigate();

  const filteredItems = selectedType === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.type === selectedType);

  const filterButtons = [
    { type: 'all', label: 'Tout' },
    { type: 'image', label: 'Images IA' },
    { type: 'video', label: 'Vidéos IA' },
    { type: 'app', label: 'Applications IA' }
  ];

  return (
    <div className="bg-black py-24">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-[#FF1CF7]/10 to-[#00F0FF]/10 border border-[#FF1CF7]/20 backdrop-blur-sm mb-4">
            <Filter className="w-4 h-4 mr-2 text-[#FF1CF7]" />
            <span className="text-sm font-medium bg-gradient-to-r from-[#FF1CF7] to-[#00F0FF] bg-clip-text text-transparent">
              Portfolio
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nos Créations IA
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Découvrez notre collection de créations générées par intelligence artificielle
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filterButtons.map(({ type, label }) => (
            <button
              key={type}
              onClick={() => setSelectedType(type as MediaType | 'all')}
              className={cn(
                "px-4 py-2 rounded-full border transition-all",
                selectedType === type
                  ? "border-[#FF1CF7] bg-[#FF1CF7]/10 text-white"
                  : "border-white/10 hover:border-white/20 text-gray-400 hover:text-white"
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-[#FF1CF7]/20 transition-all cursor-pointer"
              onClick={() => navigate(`/portfolio/${item.id}`)}
            >
              {item.type === 'image' && (
                <div className="aspect-video">
                  <img
                    src={item.thumbnail || item.url}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                </div>
              )}
              {item.type === 'video' && (
                <div className="aspect-video">
                  <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: `url(${item.thumbnail})` }} />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1" />
                    </div>
                  </div>
                </div>
              )}
              {item.type === 'app' && (
                <div className="aspect-video">
                  <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: `url(${item.thumbnail})` }} />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="px-4 py-2 rounded-lg bg-white/20 text-white">
                      Voir l'application
                    </div>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      </div>
    </div>
  );
}