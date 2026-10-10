import { createClient } from "npm:@supabase/supabase-js@2.57.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const jsonResponse = (body: Record<string, unknown>, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { ...corsHeaders, "Content-Type": "application/json" },
});

const escapeHtml = (value: string) => value.replace(/[&<>'"]/g, (character) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "'": "&#39;",
  '"': "&quot;",
}[character] ?? character));

const hashValue = async (value: string) => {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
};

Deno.serve(async (request: Request) => {
  if (request.method === "OPTIONS") return new Response(null, { status: 200, headers: corsHeaders });
  if (request.method !== "POST") return jsonResponse({ error: "Method not allowed" }, 405);

  try {
    const body = await request.json();
    const firstName = typeof body.firstName === "string" ? body.firstName.trim() : "";
    const lastName = typeof body.lastName === "string" ? body.lastName.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const event = typeof body.event === "string" ? body.event.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const people = Number(body.people);
    const honeypot = typeof body.website === "string" ? body.website.trim() : "";

    if (honeypot) return jsonResponse({ ok: true });
    if (!firstName || firstName.length > 80 || !lastName || lastName.length > 80 || !event || event.length > 120 || !message || message.length > 4000 || !Number.isInteger(people) || people < 1 || people > 10000 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return jsonResponse({ error: "Invalid request" }, 400);
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    const companyEmail = Deno.env.get("COMPANY_EMAIL") ?? "info@lafavolajs.de";
    const fromEmail = Deno.env.get("RESEND_FROM_EMAIL") ?? companyEmail;
    if (!supabaseUrl || !serviceRoleKey || !resendApiKey) return jsonResponse({ error: "Mail service unavailable" }, 503);

    const admin = createClient(supabaseUrl, serviceRoleKey);
    const source = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    const ipHash = await hashValue(source);
    const windowStart = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    const { count, error: countError } = await admin.from("event_request_rate_limits").select("id", { count: "exact", head: true }).eq("ip_hash", ipHash).gte("created_at", windowStart);
    if (countError) return jsonResponse({ error: "Request unavailable" }, 503);
    if ((count ?? 0) >= 5) return jsonResponse({ error: "Too many requests" }, 429);
    const { error: insertError } = await admin.from("event_request_rate_limits").insert({ ip_hash: ipHash });
    if (insertError) return jsonResponse({ error: "Request unavailable" }, 503);

    const safeFirstName = escapeHtml(firstName);
    const safeLastName = escapeHtml(lastName);
    const safeEmail = escapeHtml(email);
    const safeEvent = escapeHtml(event);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
    const headers = { Authorization: `Bearer ${resendApiKey}`, "Content-Type": "application/json" };
    const requestMail = await fetch("https://api.resend.com/emails", { method: "POST", headers, body: JSON.stringify({ from: fromEmail, to: [companyEmail], reply_to: email, subject: `Anfrage: ${event}`, html: `<h2>Neue Event-Anfrage</h2><p><strong>Event:</strong> ${safeEvent}</p><p><strong>Name:</strong> ${safeFirstName} ${safeLastName}</p><p><strong>E-Mail:</strong> ${safeEmail}</p><p><strong>Personen:</strong> ${people}</p><p><strong>Anfrage:</strong><br />${safeMessage}</p>` }) });
    if (!requestMail.ok) return jsonResponse({ error: "Mail service unavailable" }, 503);

    const confirmationMail = await fetch("https://api.resend.com/emails", { method: "POST", headers, body: JSON.stringify({ from: fromEmail, to: [email], subject: "Ihre Anfrage bei La Favola", html: `<p>Hallo ${safeFirstName},</p><p>vielen Dank für Ihre Anfrage zum Event <strong>${safeEvent}</strong>.</p><p>Wir haben Ihre Nachricht erhalten und melden uns persönlich bei Ihnen.</p><p>Herzliche Grüße<br />La Favola</p>` }) });
    if (!confirmationMail.ok) return jsonResponse({ error: "Confirmation unavailable" }, 503);
    return jsonResponse({ ok: true });
  } catch {
    return jsonResponse({ error: "Request unavailable" }, 500);
  }
});
