/*
  # Add admin role and policies
  
  1. Updates
    - Add admin role to users table
    - Update RLS policies to allow admin access
  2. Security
    - Admins can access all data across all tables
    - Regular users maintain their existing access rights
*/

-- Add admin column to users table
ALTER TABLE users ADD COLUMN IF NOT EXISTS is_admin boolean DEFAULT false;

-- Update RLS policies for admin access

-- Users table
CREATE POLICY "Admins can access all users"
  ON users
  FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'email' = 'votre.email@example.com' OR auth.uid() = id)
  WITH CHECK (auth.jwt() ->> 'email' = 'votre.email@example.com' OR auth.uid() = id);

-- Subscriptions table
CREATE POLICY "Admins can access all subscriptions"
  ON subscriptions
  FOR ALL
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM users 
    WHERE users.id = auth.uid() 
    AND (users.is_admin = true OR subscriptions.user_id = auth.uid())
  ));

-- Credits table
CREATE POLICY "Admins can access all credits"
  ON credits
  FOR ALL
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM users 
    WHERE users.id = auth.uid() 
    AND (users.is_admin = true OR credits.user_id = auth.uid())
  ));

-- Time logs table
CREATE POLICY "Admins can access all time logs"
  ON time_logs
  FOR ALL
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM users 
    WHERE users.id = auth.uid() 
    AND (users.is_admin = true OR time_logs.user_id = auth.uid())
  ));

-- Invoices table
CREATE POLICY "Admins can access all invoices"
  ON invoices
  FOR ALL
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM users 
    WHERE users.id = auth.uid() 
    AND (users.is_admin = true OR invoices.user_id = auth.uid())
  ));

-- Set your account as admin
UPDATE users 
SET is_admin = true 
WHERE email = 'votre.email@example.com';