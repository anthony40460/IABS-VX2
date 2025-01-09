import React from 'react';

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute w-full h-full bg-[radial-gradient(circle_at_top_left,#FF1CF7_0%,transparent_25%)] opacity-30" />
      <div className="absolute w-full h-full bg-[radial-gradient(circle_at_bottom_right,#00F0FF_0%,transparent_25%)] opacity-30" />
      <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,#5D12D2_0%,transparent_25%)] opacity-20" />
      <div className="absolute inset-0 bg-grid opacity-20" />
    </div>
  );
}