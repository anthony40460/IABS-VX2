/*
  # Initial Schema Setup for IA Business School

  1. New Tables
    - users
      - id (uuid, primary key)
      - email (text, unique)
      - full_name (text)
      - company_name (text)
      - created_at (timestamp)
      
    - subscriptions
      - id (uuid, primary key)
      - user_id (uuid, foreign key)
      - plan_type (text)
      - status (text)
      - current_period_start (timestamp)
      - current_period_end (timestamp)
      - setup_paid (boolean)
      - stripe_subscription_id (text)
      - created_at (timestamp)
      
    - credits
      - id (uuid, primary key)
      - user_id (uuid, foreign key)
      - available_minutes (integer)
      - carried_over_minutes (integer)
      - expires_at (timestamp)
      - created_at (timestamp)
      
    - time_logs
      - id (uuid, primary key)
      - user_id (uuid, foreign key)
      - task_type (text)
      - minutes_used (integer)
      - description (text)
      - created_at (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Users table
CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT auth.uid(),
  email text UNIQUE NOT NULL,
  full_name text,
  company_name text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

-- Subscriptions table
CREATE TABLE subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) NOT NULL,
  plan_type text NOT NULL,
  status text NOT NULL,
  current_period_start timestamptz NOT NULL,
  current_period_end timestamptz NOT NULL,
  setup_paid boolean DEFAULT false,
  stripe_subscription_id text UNIQUE,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own subscriptions"
  ON subscriptions
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Credits table
CREATE TABLE credits (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) NOT NULL,
  available_minutes integer NOT NULL,
  carried_over_minutes integer DEFAULT 0,
  expires_at timestamptz NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE credits ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own credits"
  ON credits
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Time logs table
CREATE TABLE time_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) NOT NULL,
  task_type text NOT NULL,
  minutes_used integer NOT NULL,
  description text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE time_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own time logs"
  ON time_logs
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Indexes for better query performance
CREATE INDEX idx_subscriptions_user_id ON subscriptions(user_id);
CREATE INDEX idx_credits_user_id ON credits(user_id);
CREATE INDEX idx_time_logs_user_id ON time_logs(user_id);