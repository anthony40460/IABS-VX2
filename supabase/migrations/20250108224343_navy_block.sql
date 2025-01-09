/*
  # Configuration Stripe

  1. Nouvelles Tables
    - `stripe_customers` : Lie les utilisateurs Supabase aux clients Stripe
    - `stripe_products` : Stocke les produits Stripe
    - `stripe_prices` : Stocke les prix Stripe
    - `stripe_subscriptions` : Stocke les abonnements actifs

  2. Sécurité
    - RLS activé sur toutes les tables
    - Politiques pour limiter l'accès aux données
*/

-- Table pour lier les utilisateurs aux clients Stripe
CREATE TABLE stripe_customers (
  id uuid PRIMARY KEY REFERENCES auth.users(id),
  stripe_customer_id text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE stripe_customers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own stripe customer"
  ON stripe_customers
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

-- Table des produits Stripe
CREATE TABLE stripe_products (
  id text PRIMARY KEY,
  active boolean,
  name text,
  description text,
  metadata jsonb,
  created timestamptz DEFAULT now(),
  updated timestamptz DEFAULT now()
);

ALTER TABLE stripe_products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read active products"
  ON stripe_products
  FOR SELECT
  TO anon, authenticated
  USING (active = true);

-- Table des prix Stripe
CREATE TABLE stripe_prices (
  id text PRIMARY KEY,
  product_id text REFERENCES stripe_products(id),
  active boolean,
  currency text,
  type text,
  unit_amount bigint,
  interval text,
  interval_count integer,
  metadata jsonb,
  created timestamptz DEFAULT now(),
  updated timestamptz DEFAULT now()
);

ALTER TABLE stripe_prices ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read active prices"
  ON stripe_prices
  FOR SELECT
  TO anon, authenticated
  USING (active = true);

-- Table des abonnements
CREATE TABLE stripe_subscriptions (
  id text PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id),
  status text,
  metadata jsonb,
  price_id text REFERENCES stripe_prices(id),
  quantity integer,
  cancel_at_period_end boolean,
  created timestamptz DEFAULT now(),
  current_period_start timestamptz,
  current_period_end timestamptz,
  ended_at timestamptz,
  cancel_at timestamptz,
  canceled_at timestamptz,
  trial_start timestamptz,
  trial_end timestamptz
);

ALTER TABLE stripe_subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own subscriptions"
  ON stripe_subscriptions
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Fonction pour gérer les webhooks Stripe
CREATE OR REPLACE FUNCTION handle_stripe_webhook()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Cette fonction sera complétée avec la logique de gestion des webhooks
  -- selon les événements Stripe (customer.created, subscription.updated, etc.)
  NULL;
END;
$$;