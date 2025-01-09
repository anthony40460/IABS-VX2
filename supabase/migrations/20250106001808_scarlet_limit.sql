/*
  # Add Unique Constraints and Demo Data
  
  1. Changes
    - Add unique constraints for credits and subscriptions
    - Insert demo users with fixed UUIDs
    - Create subscriptions and credits for demo users
    - Add sample time logs and invoices
  
  2. Security
    - All data is inserted with proper UUID casting
    - No destructive operations
*/

-- Add unique constraints
ALTER TABLE credits 
ADD CONSTRAINT credits_user_id_key UNIQUE (user_id);

ALTER TABLE subscriptions 
ADD CONSTRAINT subscriptions_user_id_key UNIQUE (user_id);

-- Demo Users
INSERT INTO users (id, email, full_name, company_name)
VALUES
  ('00000000-0000-0000-0000-000000000001'::uuid, 'demo.start@example.com', 'Sophie Laurent', 'Eco-Print Solutions'),
  ('00000000-0000-0000-0000-000000000002'::uuid, 'demo.growth@example.com', 'Thomas Mercier', 'BioVert Distribution'),
  ('00000000-0000-0000-0000-000000000003'::uuid, 'demo.premium@example.com', 'Claire Rousseau', 'Artisan Digital')
ON CONFLICT (id) DO UPDATE SET
  email = EXCLUDED.email,
  full_name = EXCLUDED.full_name,
  company_name = EXCLUDED.company_name;

-- Demo Subscriptions
INSERT INTO subscriptions (user_id, plan_type, status, current_period_start, current_period_end, setup_paid)
VALUES
  ('00000000-0000-0000-0000-000000000001'::uuid, 'start', 'active', NOW(), NOW() + INTERVAL '1 month', true),
  ('00000000-0000-0000-0000-000000000002'::uuid, 'growth', 'active', NOW(), NOW() + INTERVAL '1 month', true),
  ('00000000-0000-0000-0000-000000000003'::uuid, 'premium', 'active', NOW(), NOW() + INTERVAL '1 month', true)
ON CONFLICT (user_id) DO UPDATE SET
  plan_type = EXCLUDED.plan_type,
  status = EXCLUDED.status,
  current_period_start = EXCLUDED.current_period_start,
  current_period_end = EXCLUDED.current_period_end;

-- Demo Credits
INSERT INTO credits (user_id, available_minutes, carried_over_minutes, expires_at)
VALUES
  ('00000000-0000-0000-0000-000000000001'::uuid, 85, 25, NOW() + INTERVAL '2 months'),
  ('00000000-0000-0000-0000-000000000002'::uuid, 150, 50, NOW() + INTERVAL '2 months'),
  ('00000000-0000-0000-0000-000000000003'::uuid, 280, 80, NOW() + INTERVAL '2 months')
ON CONFLICT (user_id) DO UPDATE SET
  available_minutes = EXCLUDED.available_minutes,
  carried_over_minutes = EXCLUDED.carried_over_minutes,
  expires_at = EXCLUDED.expires_at;

-- Demo Time Logs
INSERT INTO time_logs (user_id, task_type, minutes_used, description, created_at)
SELECT
  uuid_val::uuid as user_id,
  task_type,
  minutes_used,
  description,
  created_at
FROM (
  VALUES
    ('00000000-0000-0000-0000-000000000001', 'Consulting IA', 30, 'Optimisation workflow avec ChatGPT', NOW() - INTERVAL '5 days'),
    ('00000000-0000-0000-0000-000000000001', 'Design', 45, 'Création charte graphique éco-responsable', NOW() - INTERVAL '3 days'),
    ('00000000-0000-0000-0000-000000000001', 'Formation', 35, 'Formation équipe commerciale IA', NOW() - INTERVAL '1 day'),
    
    ('00000000-0000-0000-0000-000000000002', 'Consulting IA', 60, 'Analyse prédictive stocks', NOW() - INTERVAL '6 days'),
    ('00000000-0000-0000-0000-000000000002', 'Développement', 90, 'Chatbot service client', NOW() - INTERVAL '4 days'),
    ('00000000-0000-0000-0000-000000000002', 'Marketing', 45, 'Campagne réseaux sociaux IA', NOW() - INTERVAL '2 days'),
    
    ('00000000-0000-0000-0000-000000000003', 'Formation', 120, 'Formation complète outils IA', NOW() - INTERVAL '7 days'),
    ('00000000-0000-0000-0000-000000000003', 'Production', 80, 'Vidéos présentation produits', NOW() - INTERVAL '5 days'),
    ('00000000-0000-0000-0000-000000000003', 'Consulting', 60, 'Stratégie transformation digitale', NOW() - INTERVAL '2 days')
) AS t(uuid_val, task_type, minutes_used, description, created_at)
WHERE NOT EXISTS (
  SELECT 1 FROM time_logs 
  WHERE user_id = t.uuid_val::uuid 
  AND task_type = t.task_type 
  AND description = t.description
);

-- Demo Invoices
INSERT INTO invoices (user_id, amount, status, created_at)
SELECT
  uuid_val::uuid as user_id,
  amount,
  status,
  created_at
FROM (
  VALUES
    ('00000000-0000-0000-0000-000000000001', 9900, 'paid', NOW() - INTERVAL '2 months'),
    ('00000000-0000-0000-0000-000000000001', 9900, 'paid', NOW() - INTERVAL '1 month'),
    ('00000000-0000-0000-0000-000000000001', 9900, 'paid', NOW()),
    
    ('00000000-0000-0000-0000-000000000002', 19900, 'paid', NOW() - INTERVAL '2 months'),
    ('00000000-0000-0000-0000-000000000002', 19900, 'paid', NOW() - INTERVAL '1 month'),
    ('00000000-0000-0000-0000-000000000002', 19900, 'paid', NOW()),
    
    ('00000000-0000-0000-0000-000000000003', 49900, 'paid', NOW() - INTERVAL '2 months'),
    ('00000000-0000-0000-0000-000000000003', 49900, 'paid', NOW() - INTERVAL '1 month'),
    ('00000000-0000-0000-0000-000000000003', 49900, 'paid', NOW())
) AS t(uuid_val, amount, status, created_at)
WHERE NOT EXISTS (
  SELECT 1 FROM invoices 
  WHERE user_id = t.uuid_val::uuid 
  AND amount = t.amount 
  AND created_at = t.created_at
);