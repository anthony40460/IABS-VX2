import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import PricingCard from '../PricingCard';
import { createCheckoutSession } from '../../../lib/stripe';
import { useAuthContext } from '../../../components/auth/AuthContext';
import { useNavigate } from 'react-router-dom';

vi.mock('../../../lib/stripe');
vi.mock('../../../components/auth/AuthContext');
vi.mock('react-router-dom');

const mockNavigate = vi.fn();
vi.mocked(useNavigate).mockReturnValue(mockNavigate);

const mockProps = {
  title: 'Start',
  price: 99,
  setupFee: 399,
  minutes: 120,
  commitment: 6,
  features: [
    'Consulting & Formation IA',
    'Création de contenu',
    'Support technique'
  ],
  priceId: 'price_test123'
};

describe('PricingCard', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('redirects to login when user is not authenticated', async () => {
    vi.mocked(useAuthContext).mockReturnValue({ user: null, loading: false });
    
    render(<PricingCard {...mockProps} />);
    
    const subscribeButton = screen.getByText(`Choisir ${mockProps.title}`);
    await fireEvent.click(subscribeButton);
    
    expect(mockNavigate).toHaveBeenCalledWith('/login');
    expect(createCheckoutSession).not.toHaveBeenCalled();
  });

  it('creates checkout session when user is authenticated', async () => {
    vi.mocked(useAuthContext).mockReturnValue({ 
      user: { id: 'test-user' }, 
      loading: false 
    });
    
    render(<PricingCard {...mockProps} />);
    
    const subscribeButton = screen.getByText(`Choisir ${mockProps.title}`);
    await fireEvent.click(subscribeButton);
    
    expect(createCheckoutSession).toHaveBeenCalledWith(mockProps.priceId);
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  it('displays error message when checkout fails', async () => {
    vi.mocked(useAuthContext).mockReturnValue({ 
      user: { id: 'test-user' }, 
      loading: false 
    });
    vi.mocked(createCheckoutSession).mockRejectedValue(new Error('Test error'));
    
    render(<PricingCard {...mockProps} />);
    
    const subscribeButton = screen.getByText(`Choisir ${mockProps.title}`);
    await fireEvent.click(subscribeButton);
    
    expect(screen.getByText('Test error')).toBeInTheDocument();
  });
});