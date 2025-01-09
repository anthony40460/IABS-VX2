import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';
import { portfolioItems, MediaType } from '../../data/portfolio';

export default function GallerySection() {
  const [selectedType, setSelectedType] = useState<MediaType | 'all'>('all');
  const navigate = useNavigate();

  const filteredItems = selectedType === 'all' 
    ? portfolioItems.slice(0, 6) 
    : portfolioItems.filter(item => item.type === selectedType).slice(0, 6);

  const filterButtons = [
    { type: 'all', label: 'Tout' },
    { type: 'image', label: 'Images IA' },
    { type: 'video', label: 'Vidéos IA' },
    { type: 'app', label: 'Applications IA' }
  ];

  return (
    <div className="py-24 bg-black">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-[#FF1CF7]/10 to-[#00F0FF]/10 border border-[#FF1CF7]/20 backdrop-blur-sm mb-4">
            <Filter className="w-4 h-4 mr-2 text-[#FF1CF7]" />
            <span className="text-sm font-medium bg-gradient-to-r from-[#FF1CF7] to-[#00F0FF] bg-clip-text text-transparent">
              Galerie
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
              key={`filter-${type}`}
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
                      Lancer l'application
                    </div>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.tags.map((tag) => (
                      <span
                        key={`${item.id}-${tag}`}
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
        
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate('/portfolio')}
            className="px-6 py-3 rounded-lg border border-white/10 text-white hover:bg-white/5 transition-colors"
          >
            Voir tous les projets
          </button>
        </div>
      </div>
    </div>
  );
}