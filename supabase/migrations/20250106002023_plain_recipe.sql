/*
  # Set up demo users with proper error handling
  
  1. Changes
    - Create or update demo users in auth.users table
    - Handle email uniqueness constraints
    - Use DO blocks for better transaction control
  
  2. Security
    - Uses proper password hashing
    - Maintains data consistency
*/

-- Function to safely update or create demo users
CREATE OR REPLACE FUNCTION safely_upsert_demo_user(
  p_id uuid,
  p_email text,
  p_password text,
  p_full_name text,
  p_company_name text
) RETURNS void AS $$
BEGIN
  -- Try to update existing user first
  UPDATE auth.users SET
    encrypted_password = crypt(p_password, gen_salt('bf')),
    email_confirmed_at = now(),
    raw_app_meta_data = jsonb_build_object('provider', 'email', 'providers', ARRAY['email']),
    raw_user_meta_data = jsonb_build_object(
      'full_name', p_full_name,
      'company_name', p_company_name
    ),
    updated_at = now()
  WHERE id = p_id;

  -- If no update happened, try to insert
  IF NOT FOUND THEN
    BEGIN
      INSERT INTO auth.users (
        id,
        email,
        encrypted_password,
        email_confirmed_at,
        raw_app_meta_data,
        raw_user_meta_data,
        created_at,
        updated_at,
        confirmation_token,
        email_change,
        email_change_token_new,
        recovery_token
      ) VALUES (
        p_id,
        p_email,
        crypt(p_password, gen_salt('bf')),
        now(),
        jsonb_build_object('provider', 'email', 'providers', ARRAY['email']),
        jsonb_build_object(
          'full_name', p_full_name,
          'company_name', p_company_name
        ),
        now(),
        now(),
        '',
        '',
        '',
        ''
      );
    EXCEPTION 
      WHEN unique_violation THEN
        -- If email exists but with different ID, we'll skip
        NULL;
    END;
  END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create demo users
DO $$
BEGIN
  -- Start Plan Demo User
  PERFORM safely_upsert_demo_user(
    '00000000-0000-0000-0000-000000000001'::uuid,
    'demo.start@example.com',
    'StartDemo123!',
    'Sophie Laurent',
    'Eco-Print Solutions'
  );

  -- Growth Plan Demo User
  PERFORM safely_upsert_demo_user(
    '00000000-0000-0000-0000-000000000002'::uuid,
    'demo.growth@example.com',
    'GrowthDemo123!',
    'Thomas Mercier',
    'BioVert Distribution'
  );

  -- Premium Plan Demo User
  PERFORM safely_upsert_demo_user(
    '00000000-0000-0000-0000-000000000003'::uuid,
    'demo.premium@example.com',
    'PremiumDemo123!',
    'Claire Rousseau',
    'Artisan Digital'
  );
END $$;