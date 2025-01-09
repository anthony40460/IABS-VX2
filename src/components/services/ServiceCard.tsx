import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export default function ServiceCard({ title, description, icon: Icon, image }: ServiceCardProps) {
  return (
    <div className="group relative bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:border-[#FF1CF7]/20 transition-all">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF1CF7]/5 via-[#5D12D2]/5 to-[#00F0FF]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative">
        <div className="aspect-video mb-4 overflow-hidden rounded-lg">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform group-hover:scale-110"
          />
          <div className="absolute top-2 right-2 w-10 h-10 rounded-lg bg-black/50 backdrop-blur-sm flex items-center justify-center">
            <Icon className="h-5 w-5 text-primary" />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}