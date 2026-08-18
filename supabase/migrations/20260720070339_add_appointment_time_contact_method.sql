/*
# Extend appointments with preferred time and contact method

1. Modified Tables
- `appointments`
  - Add `preferred_time` (text, nullable) — patient's preferred time-of-day slot (e.g. "10:00 AM – 1:00 PM").
  - Add `contact_method` (text, nullable) — how the patient prefers to be contacted back ("Phone", "WhatsApp", or "Email").

2. Security
- No RLS changes. The `appointments` table already has anon + authenticated SELECT and INSERT policies
  from the initial migration, which continue to cover the new columns (they are nullable, so existing
  inserts that omit them remain valid).

3. Important Notes
- Both new columns are nullable so the existing form (which sends only name, phone, email, service,
  preferred_date, message) keeps working unchanged.
- No data is lost — this migration only adds columns; nothing is dropped, renamed, or retyped.
- Idempotent: uses a DO block to check `information_schema.columns` before adding, so re-running is safe.
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'appointments' AND column_name = 'preferred_time'
  ) THEN
    ALTER TABLE appointments ADD COLUMN preferred_time text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'appointments' AND column_name = 'contact_method'
  ) THEN
    ALTER TABLE appointments ADD COLUMN contact_method text;
  END IF;
END $$;
