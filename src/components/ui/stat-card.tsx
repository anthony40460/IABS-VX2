import React from 'react';
import { GlassCard } from './glass-card';
import { GradientText } from './gradient-text';

interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <GlassCard className="text-center">
      <div className="text-2xl font-bold">
        <GradientText>{value}</GradientText>
      </div>
      <div className="text-sm text-gray-400 mt-1">{label}</div>
    </GlassCard>
  );
}