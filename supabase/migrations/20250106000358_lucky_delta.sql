/*
  # Add invoices table and improve error handling

  1. New Tables
    - `invoices`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to users)
      - `amount` (integer, in cents)
      - `status` (text)
      - `invoice_url` (text, optional)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `invoices` table
    - Add policy for users to read their own invoices
*/

CREATE TABLE IF NOT EXISTS invoices (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) NOT NULL,
  amount integer NOT NULL,
  status text NOT NULL,
  invoice_url text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE invoices ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own invoices"
  ON invoices
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Add index for better query performance
CREATE INDEX idx_invoices_user_id ON invoices(user_id);