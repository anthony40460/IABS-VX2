import React from 'react';
import { cn } from '@/lib/utils';

interface GradientBackgroundProps {
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
}

export function GradientBackground({ variant = 'primary', className }: GradientBackgroundProps) {
  const gradients = {
    primary: [
      "bg-[radial-gradient(circle_at_50%_120%,#FF1CF7_0%,transparent_50%)]",
      "bg-[radial-gradient(circle_at_0%_0%,#00F0FF_0%,transparent_50%)]",
      "bg-[radial-gradient(circle_at_100%_50%,#5D12D2_0%,transparent_50%)]"
    ],
    secondary: [
      "bg-[radial-gradient(circle_at_50%_120%,#FF1CF7_0%,transparent_50%)]",
      "bg-[radial-gradient(circle_at_0%_0%,#5D12D2_0%,transparent_50%)]",
      "bg-[radial-gradient(circle_at_100%_50%,#00F0FF_0%,transparent_50%)]"
    ],
    accent: [
      "bg-[radial-gradient(circle_at_50%_120%,#5D12D2_0%,transparent_50%)]",
      "bg-[radial-gradient(circle_at_0%_0%,#FF1CF7_0%,transparent_50%)]",
      "bg-[radial-gradient(circle_at_100%_50%,#00F0FF_0%,transparent_50%)]"
    ]
  };

  return (
    <div className={cn("absolute inset-0 opacity-30", className)}>
      {gradients[variant].map((gradient, index) => (
        <div 
          key={index}
          className={cn(
            "absolute inset-0",
            gradient,
            "animate-pulse-slow",
            index === 1 && "delay-75",
            index === 2 && "delay-150"
          )}
        />
      ))}
    </div>
  );
}