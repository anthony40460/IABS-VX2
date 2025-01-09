import { describe, it, expect, vi, beforeEach } from 'vitest';
import { handleStripeWebhook } from '../stripe-webhooks';
import { supabase } from '../supabase';

vi.mock('../supabase', () => ({
  supabase: {
    from: vi.fn(() => ({
      upsert: vi.fn().mockResolvedValue({ data: null, error: null }),
      update: vi.fn().mockResolvedValue({ data: null, error: null }),
      select: vi.fn().mockResolvedValue({ data: null, error: null })
    })),
    rpc: vi.fn().mockResolvedValue({ data: null, error: null })
  }
}));

describe('Stripe Webhook Handler', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    console.log = vi.fn();
    console.error = vi.fn();
  });

  it('logs customer.created event processing', async () => {
    const event = {
      type: 'customer.created',
      data: {
        object: {
          id: 'cus_test123',
          email: 'test@example.com',
          metadata: {
            supabase_uid: 'user_123'
          },
          created: 1234567890
        }
      }
    };

    await handleStripeWebhook(event);

    expect(console.log).toHaveBeenCalledWith('Processing event:', 'customer.created');
    expect(console.log).toHaveBeenCalledWith('Processing customer.created:', 'cus_test123');
    expect(console.log).toHaveBeenCalledWith('Customer created successfully:', 'cus_test123');
  });

  it('logs customer.updated event processing', async () => {
    const event = {
      type: 'customer.updated',
      data: {
        object: {
          id: 'cus_test123',
          email: 'updated@example.com',
          metadata: {
            supabase_uid: 'user_123'
          }
        }
      }
    };

    await handleStripeWebhook(event);

    expect(console.log).toHaveBeenCalledWith('Processing event:', 'customer.updated');
    expect(console.log).toHaveBeenCalledWith('Processing customer.updated:', 'cus_test123');
    expect(console.log).toHaveBeenCalledWith('Customer updated successfully:', 'cus_test123');
  });

  it('logs invoice.payment_succeeded event processing', async () => {
    const event = {
      type: 'invoice.payment_succeeded',
      data: {
        object: {
          subscription: 'sub_test123'
        }
      }
    };

    await handleStripeWebhook(event);

    expect(console.log).toHaveBeenCalledWith('Processing event:', 'invoice.payment_succeeded');
    expect(console.log).toHaveBeenCalledWith('Processing invoice.payment_succeeded');
  });

  it('logs errors when webhook signature verification fails', async () => {
    const error = new Error('Invalid signature');
    vi.spyOn(stripe.webhooks, 'constructEvent').mockImplementation(() => {
      throw error;
    });

    await handleStripeWebhook({ type: 'unknown', data: { object: {} } });

    expect(console.error).toHaveBeenCalledWith('Webhook signature verification failed:', error.message);
  });

  it('logs unhandled event types', async () => {
    const event = {
      type: 'unknown.event',
      data: {
        object: {}
      }
    };

    await handleStripeWebhook(event);

    expect(console.log).toHaveBeenCalledWith('Unhandled event type:', 'unknown.event');
  });
});