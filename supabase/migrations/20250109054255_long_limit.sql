/*
  # Stripe Products and Prices Setup
  
  1. Creates Stripe products for each plan
  2. Creates corresponding prices
  3. Uses ON CONFLICT DO UPDATE to handle existing records
*/

-- Add Stripe products
INSERT INTO stripe_products (id, active, name, description, metadata)
VALUES
  ('prod_start', true, 'Plan Start', 'Plan de démarrage avec 120 minutes par mois', '{"minutes": "120"}'::jsonb),
  ('prod_growth', true, 'Plan Growth', 'Plan croissance avec 200 minutes par mois', '{"minutes": "200"}'::jsonb),
  ('prod_premium', true, 'Plan Premium', 'Plan premium avec 360 minutes par mois', '{"minutes": "360"}'::jsonb)
ON CONFLICT (id) DO UPDATE SET
  active = EXCLUDED.active,
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  metadata = EXCLUDED.metadata;

-- Add Stripe prices
INSERT INTO stripe_prices (id, product_id, active, currency, type, unit_amount, interval, interval_count, metadata)
VALUES
  ('price_start', 'prod_start', true, 'eur', 'recurring', 9900, 'month', 1, '{"minutes": "120"}'::jsonb),
  ('price_growth', 'prod_growth', true, 'eur', 'recurring', 19900, 'month', 1, '{"minutes": "200"}'::jsonb),
  ('price_premium', 'prod_premium', true, 'eur', 'recurring', 49900, 'month', 1, '{"minutes": "360"}'::jsonb)
ON CONFLICT (id) DO UPDATE SET
  active = EXCLUDED.active,
  currency = EXCLUDED.currency,
  unit_amount = EXCLUDED.unit_amount,
  metadata = EXCLUDED.metadata;