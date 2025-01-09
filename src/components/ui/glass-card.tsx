import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div className={cn(
      "relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10",
      hover && "hover:border-primary/20 transition-colors",
      className
    )}>
      {children}
    </div>
  );
}