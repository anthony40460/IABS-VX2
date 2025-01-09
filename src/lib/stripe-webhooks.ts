import { supabase } from './supabase';

interface StripeEvent {
  type: string;
  data: {
    object: any;
  };
}

export async function handleStripeWebhook(event: StripeEvent) {
  try {
    switch (event.type) {
      case 'customer.created':
        await handleCustomerCreated(event.data.object);
        break;
      case 'customer.updated':
        await handleCustomerUpdated(event.data.object);
        break;
      case 'customer.deleted':
        await handleCustomerDeleted(event.data.object);
        break;
    }
  } catch (error) {
    console.error('Erreur lors du traitement du webhook:', error);
    throw error;
  }
}

async function handleCustomerCreated(customer: any) {
  await supabase
    .from('stripe_customers')
    .upsert({
      id: customer.metadata.supabase_uid,
      stripe_customer_id: customer.id,
      email: customer.email,
      created_at: new Date(customer.created * 1000),
      metadata: customer.metadata
    });
}

async function handleCustomerUpdated(customer: any) {
  await supabase
    .from('stripe_customers')
    .update({
      email: customer.email,
      metadata: customer.metadata,
      updated_at: new Date()
    })
    .eq('stripe_customer_id', customer.id);
}

async function handleCustomerDeleted(customer: any) {
  await supabase
    .from('stripe_customers')
    .update({
      deleted_at: new Date(),
      active: false
    })
    .eq('stripe_customer_id', customer.id);
}