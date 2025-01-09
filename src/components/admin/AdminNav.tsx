import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Users, Clock, Image, LayoutDashboard } from 'lucide-react';

const navItems = [
  { path: '/admin', icon: LayoutDashboard, label: 'Vue d\'ensemble' },
  { path: '/admin/users', icon: Users, label: 'Utilisateurs' },
  { path: '/admin/usage', icon: Clock, label: 'Consommation' },
  { path: '/admin/gallery', icon: Image, label: 'Galerie' }
];

export default function AdminNav() {
  const location = useLocation();

  return (
    <nav className="bg-black border-b border-white/10">
      <div className="container">
        <div className="flex space-x-8 h-16 items-center">
          {navItems.map(({ path, icon: Icon, label }) => (
            <Link
              key={path}
              to={path}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                location.pathname === path
                  ? 'text-white bg-white/10'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}