import React from 'react';

interface PortfolioCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

export default function PortfolioCard({ title, description, imageUrl, tags }: PortfolioCardProps) {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={imageUrl} alt={title} />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="mt-3 text-base text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
}