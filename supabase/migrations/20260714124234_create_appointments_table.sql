/*
# Create appointments table (single-tenant, no auth)

1. New Tables
- `appointments`
  - `id` (uuid, primary key)
  - `name` (text, not null) — patient's full name
  - `phone` (text, not null) — contact number
  - `email` (text, nullable) — optional email
  - `service` (text, not null) — requested treatment/service
  - `preferred_date` (date, nullable) — preferred appointment date
  - `message` (text, nullable) — additional notes from the patient
  - `status` (text, not null default 'pending') — pending / confirmed / completed / cancelled
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `appointments`.
- Allow anon + authenticated INSERT so the public booking form (anon-key client) can submit appointment requests.
- Allow anon + authenticated SELECT so the clinic can later display/manage requests (single-tenant, intentionally shared).
- No UPDATE/DELETE policies needed for the public form.
*/

CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text,
  service text NOT NULL,
  preferred_date date,
  message text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_appointments" ON appointments;
CREATE POLICY "anon_select_appointments" ON appointments FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_appointments" ON appointments;
CREATE POLICY "anon_insert_appointments" ON appointments FOR INSERT
  TO anon, authenticated WITH CHECK (true);
