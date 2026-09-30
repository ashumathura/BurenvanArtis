// ============================================================
//  CONTACT MELDING — stuurt een e-mail via Resend
//  na elke nieuwe rij in contact_berichten.
//
//  Aanroepen door een Supabase Database Webhook (Insert-trigger
//  op contact_berichten). Zie README.md voor de setup.
//
//  Vereiste secret (Edge Functions → Secrets):
//    RESEND_API_KEY — dezelfde sleutel als manifest-bevestiging gebruikt
//
//  Het bericht wordt gestuurd naar CONTACT_ONTVANGER hieronder, met
//  het e-mailadres van de afzender als reply-to.
// ============================================================

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")!;
const CONTACT_ONTVANGER = "ashu.mathura@gmail.com";

function escapeHtml(s: string) {
  return String(s).replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c] as string));
}

function nlNaarBr(s: string) {
  return escapeHtml(s).replace(/\n/g, "<br>");
}

Deno.serve(async (req) => {
  if (!RESEND_API_KEY) {
    console.error("RESEND_API_KEY secret ontbreekt of is leeg — controleer Edge Functions → Secrets");
    return new Response("Server misconfigured: RESEND_API_KEY ontbreekt", { status: 500 });
  }

  const payload = await req.json();
  const record = payload.record;

  if (!record?.email || !record?.voornaam || !record?.onderwerp || !record?.bericht) {
    return new Response("Ongeldige payload: verplicht veld ontbreekt", { status: 400 });
  }

  const voornaam = escapeHtml(record.voornaam);
  const achternaam = escapeHtml(record.achternaam ?? "");
  const onderwerp = escapeHtml(record.onderwerp);
  const email = escapeHtml(record.email);

  const html = `
<div style="font-family:Poppins,Arial,sans-serif;max-width:520px;margin:0 auto;color:#0B1F17;line-height:1.5">
  <h1 style="color:#003D28;font-size:1.4rem;margin:0 0 1rem">Nieuw contactbericht: ${onderwerp}</h1>
  <p><strong>Van:</strong> ${voornaam} ${achternaam} (<a href="mailto:${email}" style="color:#00A96B">${email}</a>)</p>
  <p><strong>Onderwerp:</strong> ${onderwerp}</p>
  <p><strong>Bericht:</strong></p>
  <p style="background:#F4F7F2;padding:1rem 1.2rem;border-radius:10px">${nlNaarBr(record.bericht)}</p>
</div>`.trim();

  const send = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: "Buren van Artis <contact@burenvanartis.nl>",
      to: CONTACT_ONTVANGER,
      reply_to: record.email,
      subject: `Nieuw contactbericht: ${record.onderwerp}`,
      html
    })
  });

  if (!send.ok) {
    const fout = await send.text();
    console.error("Resend fout:", send.status, fout);
    return new Response("Kon contactmail niet versturen", { status: 502 });
  }

  return new Response("OK", { status: 200 });
});
