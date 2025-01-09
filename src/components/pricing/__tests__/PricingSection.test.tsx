import React from 'react';
import { render, screen } from '@testing-library/react';
import PricingSection from '../PricingSection';
import { pricingPlans } from '../../../data/pricingPlans';

describe('PricingSection', () => {
  it('renders all pricing plans', () => {
    render(<PricingSection />);
    
    pricingPlans.forEach(plan => {
      expect(screen.getByText(plan.title)).toBeInTheDocument();
      expect(screen.getByText(`${plan.price}€`)).toBeInTheDocument();
      expect(screen.getByText(`${plan.minutes} minutes/mois`)).toBeInTheDocument();
      
      plan.features.forEach(feature => {
        expect(screen.getByText(feature.text)).toBeInTheDocument();
      });
    });
  });

  it('highlights the recommended plan', () => {
    render(<PricingSection />);
    
    const recommendedPlan = pricingPlans[1]; // Growth plan
    const recommendedBadge = screen.getByText('Recommandé');
    
    expect(recommendedBadge).toBeInTheDocument();
    expect(recommendedBadge.closest('div')).toContainElement(
      screen.getByText(recommendedPlan.title)
    );
  });

  it('displays correct pricing information', () => {
    render(<PricingSection />);
    
    pricingPlans.forEach(plan => {
      expect(screen.getByText(`Setup : ${plan.setupFee}€ HT`)).toBeInTheDocument();
      expect(screen.getByText(`Engagement ${plan.commitment} mois`)).toBeInTheDocument();
    });
  });
});