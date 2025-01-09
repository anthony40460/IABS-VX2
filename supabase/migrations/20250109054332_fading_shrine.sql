/*
  # Users Setup Migration
  
  1. Creates admin user (Anthony Mabille)
  2. Creates demo users
  3. Sets up Stripe customers and subscriptions
*/

-- Create admin user
DO $$
DECLARE
  v_admin_id uuid := '00000000-0000-0000-0000-000000000000'::uuid;
BEGIN
  -- Create in auth.users if not exists
  INSERT INTO auth.users (
    id,
    email,
    encrypted_password,
    email_confirmed_at,
    raw_app_meta_data,
    raw_user_meta_data
  ) VALUES (
    v_admin_id,
    'dealnego@gmail.com',
    crypt('AdminPass123!', gen_salt('bf')),
    now(),
    '{"provider": "email", "providers": ["email"]}'::jsonb,
    '{"full_name": "Anthony Mabille", "is_admin": true}'::jsonb
  )
  ON CONFLICT (id) DO UPDATE SET
    raw_user_meta_data = jsonb_set(
      auth.users.raw_user_meta_data,
      '{is_admin}',
      'true'
    );

  -- Create/Update in public.users
  INSERT INTO public.users (id, email, full_name, is_admin)
  VALUES (
    v_admin_id,
    'dealnego@gmail.com',
    'Anthony Mabille',
    true
  )
  ON CONFLICT (id) DO UPDATE SET
    is_admin = true;
END $$;

-- Create demo users
DO $$
DECLARE
  v_start_id uuid := '00000000-0000-0000-0000-000000000001'::uuid;
  v_growth_id uuid := '00000000-0000-0000-0000-000000000002'::uuid;
  v_premium_id uuid := '00000000-0000-0000-0000-000000000003'::uuid;
BEGIN
  -- Create demo users in auth.users
  INSERT INTO auth.users (
    id,
    email,
    encrypted_password,
    email_confirmed_at,
    raw_app_meta_data,
    raw_user_meta_data
  ) VALUES
    (
      v_start_id,
      'demo.start@example.com',
      crypt('StartDemo123!', gen_salt('bf')),
      now(),
      '{"provider": "email", "providers": ["email"]}'::jsonb,
      '{"full_name": "Sophie Laurent", "company_name": "Eco-Print Solutions"}'::jsonb
    ),
    (
      v_growth_id,
      'demo.growth@example.com',
      crypt('GrowthDemo123!', gen_salt('bf')),
      now(),
      '{"provider": "email", "providers": ["email"]}'::jsonb,
      '{"full_name": "Thomas Mercier", "company_name": "BioVert Distribution"}'::jsonb
    ),
    (
      v_premium_id,
      'demo.premium@example.com',
      crypt('PremiumDemo123!', gen_salt('bf')),
      now(),
      '{"provider": "email", "providers": ["email"]}'::jsonb,
      '{"full_name": "Claire Rousseau", "company_name": "Artisan Digital"}'::jsonb
    )
  ON CONFLICT (id) DO UPDATE SET
    raw_user_meta_data = EXCLUDED.raw_user_meta_data;

  -- Create demo users in public.users
  INSERT INTO public.users (id, email, full_name, company_name)
  VALUES
    (v_start_id, 'demo.start@example.com', 'Sophie Laurent', 'Eco-Print Solutions'),
    (v_growth_id, 'demo.growth@example.com', 'Thomas Mercier', 'BioVert Distribution'),
    (v_premium_id, 'demo.premium@example.com', 'Claire Rousseau', 'Artisan Digital')
  ON CONFLICT (id) DO UPDATE SET
    full_name = EXCLUDED.full_name,
    company_name = EXCLUDED.company_name;

  -- Create Stripe customers for demo users
  INSERT INTO stripe_customers (id, stripe_customer_id)
  VALUES
    (v_start_id, 'cus_demo_start'),
    (v_growth_id, 'cus_demo_growth'),
    (v_premium_id, 'cus_demo_premium')
  ON CONFLICT (id) DO NOTHING;

  -- Create Stripe subscriptions for demo users
  INSERT INTO stripe_subscriptions (
    id,
    user_id,
    status,
    price_id,
    quantity,
    cancel_at_period_end,
    current_period_start,
    current_period_end
  ) VALUES
    (
      'sub_demo_start',
      v_start_id,
      'active',
      'price_start',
      1,
      false,
      NOW() - INTERVAL '1 month',
      NOW() + INTERVAL '1 month'
    ),
    (
      'sub_demo_growth',
      v_growth_id,
      'active',
      'price_growth',
      1,
      false,
      NOW() - INTERVAL '1 month',
      NOW() + INTERVAL '1 month'
    ),
    (
      'sub_demo_premium',
      v_premium_id,
      'active',
      'price_premium',
      1,
      false,
      NOW() - INTERVAL '1 month',
      NOW() + INTERVAL '1 month'
    )
  ON CONFLICT (id) DO NOTHING;
END $$;