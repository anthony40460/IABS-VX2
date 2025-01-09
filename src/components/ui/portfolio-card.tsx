import React from 'react';
import { cn } from '@/lib/utils';

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  className?: string;
}

export function PortfolioCard({
  title,
  description,
  image,
  tags,
  className
}: PortfolioCardProps) {
  return (
    <div className={cn(
      "group relative rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm",
      className
    )}>
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute bottom-0 p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
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
  );
}