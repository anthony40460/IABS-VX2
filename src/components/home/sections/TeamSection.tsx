import React from 'react';

const teamMembers = [
  {
    name: 'Dr. Marie Laurent',
    role: 'CEO & Experte IA',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Docteur en Intelligence Artificielle, 15 ans d\'expérience dans la transformation digitale des entreprises.'
  },
  {
    name: 'Thomas Dubois',
    role: 'Directeur Formation',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Expert en pédagogie et en formation professionnelle, spécialisé dans l\'adoption des outils IA.'
  },
  {
    name: 'Sarah Cohen',
    role: 'Responsable Innovation',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Ingénieure en IA, experte en développement de solutions sur mesure et en R&D.'
  }
];

export default function TeamSection() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-indigo-600">Notre équipe</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">Les experts à votre service</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                className="h-48 w-full object-cover"
                src={member.image}
                alt={member.name}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-indigo-600 mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}