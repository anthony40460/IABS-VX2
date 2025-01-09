import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <div className="bg-black py-24">
      <div className="container px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-[#FF1CF7]/10 to-[#00F0FF]/10 border border-[#FF1CF7]/20 backdrop-blur-sm mb-4">
            <span className="text-sm font-medium bg-gradient-to-r from-[#FF1CF7] to-[#00F0FF] bg-clip-text text-transparent">
              Contact
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contactez-nous
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Une question ? Un projet ? N'hésitez pas à nous contacter.
            Notre équipe vous répondra dans les plus brefs délais.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <dl className="space-y-6">
              <div className="flex gap-3">
                <dt className="flex-none">
                  <Mail className="h-6 w-6 text-primary" />
                </dt>
                <dd>
                  <a href="mailto:contact@ia-business.fr" className="text-white hover:text-primary transition-colors">
                    contact@ia-business.fr
                  </a>
                </dd>
              </div>
              
              <div className="flex gap-3">
                <dt className="flex-none">
                  <Phone className="h-6 w-6 text-primary" />
                </dt>
                <dd>
                  <a href="tel:+33123456789" className="text-white hover:text-primary transition-colors">
                    +33 1 23 45 67 89
                  </a>
                </dd>
              </div>
              
              <div className="flex gap-3">
                <dt className="flex-none">
                  <MapPin className="h-6 w-6 text-primary" />
                </dt>
                <dd className="text-white">
                  123 Avenue des Champs-Élysées<br />
                  75008 Paris, France
                </dd>
              </div>
            </dl>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}