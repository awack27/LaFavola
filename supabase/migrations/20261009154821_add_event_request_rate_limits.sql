/*
# Add server-side event request rate limiting

1. New Tables
- `event_request_rate_limits`
- `id` (uuid, primary key)
- `ip_hash` (text, non-sensitive one-way request identifier)
- `created_at` (timestamp for the rate-limit window)

2. Security
- Row Level Security is enabled.
- No public or authenticated policies are added because only the server-side email function may access these rows.
- The browser never receives or writes to this table directly.

3. Important Notes
- The table intentionally stores no names, email addresses, messages, or event details.
- The server function uses the table to limit repeated submissions from the same hashed network address.
*/

CREATE TABLE IF NOT EXISTS public.event_request_rate_limits (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  ip_hash text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.event_request_rate_limits ENABLE ROW LEVEL SECURITY;

CREATE INDEX IF NOT EXISTS event_request_rate_limits_ip_created_idx
  ON public.event_request_rate_limits (ip_hash, created_at);

REVOKE ALL ON TABLE public.event_request_rate_limits FROM anon, authenticated;
