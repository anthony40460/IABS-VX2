/*
  # Add realistic demo data
  
  1. Demo Users
    - Creates demo accounts with realistic French company names
  2. Demo Subscriptions
    - Sets up subscriptions for demo accounts
  3. Demo Credits
    - Initializes credits with realistic usage patterns
  4. Demo Time Logs
    - Adds realistic activity history
  5. Demo Invoices
    - Creates realistic invoice history
*/

-- Demo Users
DO $$
BEGIN
  INSERT INTO users (id, email, full_name, company_name)
  SELECT 
    '00000000-0000-0000-0000-000000000001', 'demo.start@example.com', 'Sophie Laurent', 'Eco-Print Solutions'
  WHERE NOT EXISTS (
    SELECT 1 FROM users WHERE id = '00000000-0000-0000-0000-000000000001'
  );

  INSERT INTO users (id, email, full_name, company_name)
  SELECT 
    '00000000-0000-0000-0000-000000000002', 'demo.growth@example.com', 'Thomas Mercier', 'BioVert Distribution'
  WHERE NOT EXISTS (
    SELECT 1 FROM users WHERE id = '00000000-0000-0000-0000-000000000002'
  );

  INSERT INTO users (id, email, full_name, company_name)
  SELECT 
    '00000000-0000-0000-0000-000000000003', 'demo.premium@example.com', 'Claire Rousseau', 'Artisan Digital'
  WHERE NOT EXISTS (
    SELECT 1 FROM users WHERE id = '00000000-0000-0000-0000-000000000003'
  );
END $$;

-- Demo Subscriptions
DO $$
BEGIN
  INSERT INTO subscriptions (user_id, plan_type, status, current_period_start, current_period_end, setup_paid)
  SELECT 
    '00000000-0000-0000-0000-000000000001', 'start', 'active', NOW(), NOW() + INTERVAL '1 month', true
  WHERE NOT EXISTS (
    SELECT 1 FROM subscriptions WHERE user_id = '00000000-0000-0000-0000-000000000001'
  );

  INSERT INTO subscriptions (user_id, plan_type, status, current_period_start, current_period_end, setup_paid)
  SELECT 
    '00000000-0000-0000-0000-000000000002', 'growth', 'active', NOW(), NOW() + INTERVAL '1 month', true
  WHERE NOT EXISTS (
    SELECT 1 FROM subscriptions WHERE user_id = '00000000-0000-0000-0000-000000000002'
  );

  INSERT INTO subscriptions (user_id, plan_type, status, current_period_start, current_period_end, setup_paid)
  SELECT 
    '00000000-0000-0000-0000-000000000003', 'premium', 'active', NOW(), NOW() + INTERVAL '1 month', true
  WHERE NOT EXISTS (
    SELECT 1 FROM subscriptions WHERE user_id = '00000000-0000-0000-0000-000000000003'
  );
END $$;

-- Demo Credits
DO $$
BEGIN
  INSERT INTO credits (user_id, available_minutes, carried_over_minutes, expires_at)
  SELECT 
    '00000000-0000-0000-0000-000000000001', 85, 25, NOW() + INTERVAL '2 months'
  WHERE NOT EXISTS (
    SELECT 1 FROM credits WHERE user_id = '00000000-0000-0000-0000-000000000001'
  );

  INSERT INTO credits (user_id, available_minutes, carried_over_minutes, expires_at)
  SELECT 
    '00000000-0000-0000-0000-000000000002', 150, 50, NOW() + INTERVAL '2 months'
  WHERE NOT EXISTS (
    SELECT 1 FROM credits WHERE user_id = '00000000-0000-0000-0000-000000000002'
  );

  INSERT INTO credits (user_id, available_minutes, carried_over_minutes, expires_at)
  SELECT 
    '00000000-0000-0000-0000-000000000003', 280, 80, NOW() + INTERVAL '2 months'
  WHERE NOT EXISTS (
    SELECT 1 FROM credits WHERE user_id = '00000000-0000-0000-0000-000000000003'
  );
END $$;

-- Demo Time Logs
INSERT INTO time_logs (user_id, task_type, minutes_used, description)
VALUES
  ('00000000-0000-0000-0000-000000000001', 'Consulting IA', 30, 'Optimisation workflow avec ChatGPT'),
  ('00000000-0000-0000-0000-000000000001', 'Design', 45, 'Création charte graphique éco-responsable'),
  ('00000000-0000-0000-0000-000000000001', 'Formation', 35, 'Formation équipe commerciale IA'),
  
  ('00000000-0000-0000-0000-000000000002', 'Consulting IA', 60, 'Analyse prédictive stocks'),
  ('00000000-0000-0000-0000-000000000002', 'Développement', 90, 'Chatbot service client'),
  ('00000000-0000-0000-0000-000000000002', 'Marketing', 45, 'Campagne réseaux sociaux IA'),
  
  ('00000000-0000-0000-0000-000000000003', 'Formation', 120, 'Formation complète outils IA'),
  ('00000000-0000-0000-0000-000000000003', 'Production', 80, 'Vidéos présentation produits'),
  ('00000000-0000-0000-0000-000000000003', 'Consulting', 60, 'Stratégie transformation digitale');

-- Demo Invoices
INSERT INTO invoices (user_id, amount, status, created_at)
VALUES
  ('00000000-0000-0000-0000-000000000001', 9900, 'paid', NOW() - INTERVAL '2 months'),
  ('00000000-0000-0000-0000-000000000001', 9900, 'paid', NOW() - INTERVAL '1 month'),
  ('00000000-0000-0000-0000-000000000001', 9900, 'paid', NOW()),
  
  ('00000000-0000-0000-0000-000000000002', 19900, 'paid', NOW() - INTERVAL '2 months'),
  ('00000000-0000-0000-0000-000000000002', 19900, 'paid', NOW() - INTERVAL '1 month'),
  ('00000000-0000-0000-0000-000000000002', 19900, 'paid', NOW()),
  
  ('00000000-0000-0000-0000-000000000003', 49900, 'paid', NOW() - INTERVAL '2 months'),
  ('00000000-0000-0000-0000-000000000003', 49900, 'paid', NOW() - INTERVAL '1 month'),
  ('00000000-0000-0000-0000-000000000003', 49900, 'paid', NOW());