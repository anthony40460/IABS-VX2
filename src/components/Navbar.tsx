import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { Button } from './ui/button';

export default function Navbar() {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-black border-b border-white/10">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img src="/logo.svg" alt="IA Business School" className="h-10 w-auto" />
            <span className="text-white font-semibold text-lg">Business School</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/services" className="text-sm font-medium text-white hover:text-primary/80 transition-colors relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/pricing" className="text-sm font-medium text-white hover:text-primary/80 transition-colors relative group">
              Tarifs
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/portfolio" className="text-sm font-medium text-white hover:text-primary/80 transition-colors relative group">
              Portfolio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/become-consultant" className="text-sm font-medium text-white hover:text-primary/80 transition-colors relative group">
              Devenir Consultant(e)
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/contact" className="text-sm font-medium text-white hover:text-primary/80 transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white/80 hover:text-white"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
          
          <Link to="/login">
            <Button variant="outline" className="border-white/20 hover:border-white/40 text-white">
              Espace Client
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}