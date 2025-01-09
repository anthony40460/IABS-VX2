import React from 'react';
import { Star, Quote } from 'lucide-react';
import { GradientText } from '@/components/ui/gradient-text';
import { GlassCard } from '@/components/ui/glass-card';
import { AnimatedBackground } from '@/components/ui/animated-background';

const testimonials = [
  {
    content: "L'accompagnement a été décisif dans notre transformation digitale. L'équipe est à l'écoute et les résultats sont au rendez-vous.",
    author: "Marie Laurent",
    role: "Directrice Marketing",
    company: "EcoTech Solutions",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    content: "Un ROI impressionnant dès les premiers mois. La productivité de notre équipe a été multipliée par 3 grâce aux outils IA.",
    author: "Thomas Mercier",
    role: "CEO",
    company: "InnovaCorp",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    content: "La qualité de la formation et du support est exceptionnelle. Une équipe vraiment à l'écoute et compétente.",
    author: "Sophie Dubois",
    role: "DRH",
    company: "Green Solutions",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">
      {/* Animated background */}
      <AnimatedBackground />

      <div className="container relative z-10">
        {/* Badge animé */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-[#FF1CF7]/10 to-[#00F0FF]/10 border border-[#FF1CF7]/20 backdrop-blur-sm">
            <span className="text-sm font-medium bg-gradient-to-r from-[#FF1CF7] to-[#00F0FF] bg-clip-text text-transparent animate-pulse">
              Témoignages Clients
            </span>
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ils nous font <GradientText>confiance</GradientText>
          </h2>
          <p className="text-gray-400 text-lg">
            Découvrez les retours d'expérience de nos clients sur leur transformation digitale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <GlassCard 
              key={testimonial.author}
              className="relative group"
            >
              {/* Quote icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-[#FF1CF7]/20" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className="w-5 h-5 fill-[#FF1CF7] text-[#FF1CF7]"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-[#FF1CF7]/20"
                />
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                  <div className="text-sm">
                    <GradientText>{testimonial.company}</GradientText>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}