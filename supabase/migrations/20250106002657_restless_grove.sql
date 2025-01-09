/*
  # Fix RLS policies and demo data

  1. Drop existing policies
  2. Create correct RLS policies
  3. Add demo data safely
*/

-- Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Users can read own data" ON users;
DROP POLICY IF EXISTS "Users can read own subscriptions" ON subscriptions;
DROP POLICY IF EXISTS "Users can read own credits" ON credits;
DROP POLICY IF EXISTS "Users can read own time logs" ON time_logs;
DROP POLICY IF EXISTS "Users can read own invoices" ON invoices;

-- Create correct RLS policies
CREATE POLICY "users_read_own"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "subscriptions_read_own"
  ON subscriptions
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "credits_read_own"
  ON credits
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "time_logs_read_own"
  ON time_logs
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "invoices_read_own"
  ON invoices
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

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
  ('00000000-0000-0000-0000-000000000001'::uuid, 'start', 'active', NOW() - INTERVAL '2 months', NOW() + INTERVAL '1 month', true),
  ('00000000-0000-0000-0000-000000000002'::uuid, 'growth', 'active', NOW() - INTERVAL '5 months', NOW() + INTERVAL '1 month', true),
  ('00000000-0000-0000-0000-000000000003'::uuid, 'premium', 'active', NOW() - INTERVAL '8 months', NOW() + INTERVAL '1 month', true)
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
    -- Start Plan User - Recent Activities
    ('00000000-0000-0000-0000-000000000001', 'Formation IA', 30, 'Introduction à ChatGPT pour l''équipe', NOW() - INTERVAL '6 days'),
    ('00000000-0000-0000-0000-000000000001', 'Design', 45, 'Création de visuels écologiques avec DALL-E', NOW() - INTERVAL '4 days'),
    ('00000000-0000-0000-0000-000000000001', 'Consulting', 35, 'Optimisation workflow marketing', NOW() - INTERVAL '2 days'),
    ('00000000-0000-0000-0000-000000000001', 'Marketing', 25, 'Rédaction contenu blog IA', NOW() - INTERVAL '1 day'),
    
    -- Growth Plan User - Diverse Usage
    ('00000000-0000-0000-0000-000000000002', 'Analyse IA', 60, 'Prédiction des tendances de vente', NOW() - INTERVAL '7 days'),
    ('00000000-0000-0000-0000-000000000002', 'Développement', 90, 'Configuration assistant virtuel', NOW() - INTERVAL '5 days'),
    ('00000000-0000-0000-0000-000000000002', 'Formation', 45, 'Formation équipe vente aux outils IA', NOW() - INTERVAL '3 days'),
    ('00000000-0000-0000-0000-000000000002', 'Marketing', 55, 'Campagne automation marketing', NOW() - INTERVAL '1 day'),
    
    -- Premium Plan User - Advanced Usage
    ('00000000-0000-0000-0000-000000000003', 'Stratégie IA', 120, 'Plan transformation digitale 2024', NOW() - INTERVAL '8 days'),
    ('00000000-0000-0000-0000-000000000003', 'Production', 80, 'Création vidéos IA personnalisées', NOW() - INTERVAL '6 days'),
    ('00000000-0000-0000-0000-000000000003', 'Formation', 90, 'Workshop avancé IA générative', NOW() - INTERVAL '4 days'),
    ('00000000-0000-0000-0000-000000000003', 'Consulting', 70, 'Audit et optimisation processus IA', NOW() - INTERVAL '2 days')
) AS t(uuid_val, task_type, minutes_used, description, created_at)
WHERE NOT EXISTS (
  SELECT 1 FROM time_logs 
  WHERE user_id = t.uuid_val::uuid 
  AND created_at = t.created_at
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
    -- Start Plan Invoices (99€/month)
    ('00000000-0000-0000-0000-000000000001', 9900, 'paid', NOW() - INTERVAL '2 months'),
    ('00000000-0000-0000-0000-000000000001', 9900, 'paid', NOW() - INTERVAL '1 month'),
    ('00000000-0000-0000-0000-000000000001', 9900, 'paid', NOW()),
    
    -- Growth Plan Invoices (199€/month)
    ('00000000-0000-0000-0000-000000000002', 19900, 'paid', NOW() - INTERVAL '2 months'),
    ('00000000-0000-0000-0000-000000000002', 19900, 'paid', NOW() - INTERVAL '1 month'),
    ('00000000-0000-0000-0000-000000000002', 19900, 'paid', NOW()),
    
    -- Premium Plan Invoices (499€/month)
    ('00000000-0000-0000-0000-000000000003', 49900, 'paid', NOW() - INTERVAL '2 months'),
    ('00000000-0000-0000-0000-000000000003', 49900, 'paid', NOW() - INTERVAL '1 month'),
    ('00000000-0000-0000-0000-000000000003', 49900, 'paid', NOW())
) AS t(uuid_val, amount, status, created_at)
WHERE NOT EXISTS (
  SELECT 1 FROM invoices 
  WHERE user_id = t.uuid_val::uuid 
  AND created_at = t.created_at
);