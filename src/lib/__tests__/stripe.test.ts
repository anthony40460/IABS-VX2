import { describe, it, expect, vi, beforeEach } from 'vitest';
import { createCheckoutSession, stripe } from '../stripe';
import { supabase } from '../supabase';

vi.mock('@stripe/stripe-js', () => ({
  loadStripe: vi.fn(() => Promise.resolve({
    redirectToCheckout: vi.fn()
  }))
}));

vi.mock('../supabase', () => ({
  supabase: {
    auth: {
      getSession: vi.fn()
    }
  }
}));

describe('Stripe Integration', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('creates a checkout session with valid price ID', async () => {
    const mockSession = { access_token: 'test-token' };
    vi.mocked(supabase.auth.getSession).mockResolvedValue({ data: { session: mockSession } });

    global.fetch = vi.fn().mockResolvedValue({
      json: () => Promise.resolve({ sessionId: 'test_session_123' }),
      ok: true
    });

    await createCheckoutSession('price_test123');

    expect(global.fetch).toHaveBeenCalledWith('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer test-token'
      },
      body: JSON.stringify({
        priceId: 'price_test123',
        successUrl: expect.any(String),
        cancelUrl: expect.any(String)
      })
    });
  });

  it('throws error when user is not authenticated', async () => {
    vi.mocked(supabase.auth.getSession).mockResolvedValue({ data: { session: null } });

    await expect(createCheckoutSession('price_test123')).rejects.toThrow('Vous devez être connecté pour souscrire');
  });

  it('handles API errors gracefully', async () => {
    const mockSession = { access_token: 'test-token' };
    vi.mocked(supabase.auth.getSession).mockResolvedValue({ data: { session: mockSession } });

    global.fetch = vi.fn().mockResolvedValue({
      json: () => Promise.resolve({ error: 'Invalid price ID' }),
      ok: false
    });

    await expect(createCheckoutSession('invalid_price')).rejects.toThrow('Invalid price ID');
  });
});