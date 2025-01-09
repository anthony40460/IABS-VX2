import React from 'react';
import { cn } from '@/lib/utils';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionContainer({ children, className }: SectionContainerProps) {
  return (
    <section className={cn("relative py-24 bg-black overflow-hidden", className)}>
      <div className="container relative z-10">
        {children}
      </div>
    </section>
  );
}