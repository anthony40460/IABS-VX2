import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Users, Coins, Clock, TrendingUp, Globe } from 'lucide-react';

const benefits = [
  {
    icon: Brain,
    title: "Expertise IA Valorisée",
    description: "Intégrez un réseau d'experts reconnus dans l'IA et bénéficiez de notre marque forte sur le marché."
  },
  {
    icon: Coins,
    title: "Commission Attractive",
    description: "25% sur les missions que nous apportons, 50% sur vos apports d'affaires, avec un support complet."
  },
  {
    icon: Clock,
    title: "Flexibilité Totale",
    description: "Organisez votre temps comme vous le souhaitez, tout en bénéficiant de notre infrastructure."
  },
  {
    icon: TrendingUp,
    title: "Marché en Croissance",
    description: "Positionnez-vous sur un marché en pleine expansion avec une demande croissante."
  },
  {
    icon: Users,
    title: "Communauté d'Experts",
    description: "Rejoignez une communauté dynamique d'experts et partagez vos connaissances."
  },
  {
    icon: Globe,
    title: "Visibilité Accrue",
    description: "Profitez de notre présence digitale et de nos actions marketing pour développer votre activité."
  }
];

export default function ConsultantPage() {
  return (
    <div className="min-h-screen bg-black py-24">
      <div className="container px-4">
        {/* Hero Section with Background Image */}
        <div className="relative text-center mb-16 py-24 rounded-2xl overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&auto=format&fit=crop"
              alt="Team collaboration"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black" />
          </div>
          
          <div className="relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-[#FF1CF7]/10 to-[#00F0FF]/10 border border-[#FF1CF7]/20 backdrop-blur-sm mb-4">
            <span className="text-sm font-medium bg-gradient-to-r from-[#FF1CF7] to-[#00F0FF] bg-clip-text text-transparent">
              Opportunité
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Devenez Consultant(e) IA Business School
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Rejoignez notre réseau d'experts et développez votre activité dans l'IA avec un modèle attractif et flexible
          </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="group relative bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:border-[#FF1CF7]/20 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF1CF7]/5 via-[#5D12D2]/5 to-[#00F0FF]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <benefit.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Why Join Us Section */}
        <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop"
              alt="Team meeting"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">
              Pourquoi devenir consultant IA Business School ?
            </h2>
            <p className="text-gray-400">
              Le marché de l'IA connaît une croissance exponentielle, avec une demande qui dépasse largement l'offre. 
              En rejoignant IA Business School en tant que consultant indépendant, vous bénéficiez :
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <p className="text-gray-400">
                  <span className="text-white font-semibold">D'un marché en pleine expansion :</span> La demande en expertise IA 
                  augmente de 50% chaque année, offrant des opportunités illimitées.
                </p>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <p className="text-gray-400">
                  <span className="text-white font-semibold">D'une liberté totale :</span> Choisissez vos missions, 
                  gérez votre temps et développez votre expertise dans les domaines qui vous passionnent.
                </p>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <p className="text-gray-400">
                  <span className="text-white font-semibold">D'un support complet :</span> Accédez à nos ressources, 
                  formations continues et bénéficiez de notre infrastructure administrative.
                </p>
              </li>
            </ul>
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-primary">50%</div>
                <div className="text-sm text-gray-400">Croissance annuelle</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-sm text-gray-400">Clients actifs</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-primary">25k€</div>
                <div className="text-sm text-gray-400">Revenu mensuel moyen</div>
              </div>
            </div>
          </div>
        </div>
        {/* Commission Structure */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Structure de Commission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">Missions Apportées</h3>
              <p className="text-gray-400">25% de commission sur les missions que nous vous apportons :</p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                  Support commercial et administratif complet
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                  Facturation et recouvrement gérés
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                  Accompagnement technique si nécessaire
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">Apport d'Affaires</h3>
              <p className="text-gray-400">50% de commission sur vos apports d'affaires :</p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                  Liberté de gestion de la relation client
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                  Support méthodologique et technique
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                  Accès à nos ressources et outils
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gradient-to-r from-[#FF1CF7] to-[#00F0FF] text-black font-semibold hover:opacity-90 transition-opacity"
          >
            Postuler maintenant
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <p className="mt-4 text-gray-400">
            Nous étudions chaque candidature avec attention et reviendrons vers vous sous 48h.
          </p>
        </div>
      </div>
    </div>
  );
}