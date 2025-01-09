import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
  size?: 'default' | 'lg';
  children: React.ReactNode;
}

export function Button({ 
  variant = 'default', 
  size = 'default',
  className = '',
  children,
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50";
  
  const variants = {
    default: "bg-primary text-white hover:bg-primary/90",
    outline: "border border-white/10 hover:bg-white/5"
  };
  
  const sizes = {
    default: "h-10 px-4 py-2 text-sm",
    lg: "h-12 px-8 py-3 text-base"
  };

  return (
    <button className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}