export type MediaType = 'image' | 'video' | 'app';

export interface PortfolioItem {
  id: string;
  type: MediaType;
  title: string;
  description: string;
  url: string;
  thumbnail?: string;
  tags: string[];
}

export const portfolioItems: PortfolioItem[] = [
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
  }
];