// ============================================================
//  MANIFEST BEVESTIGING — stuurt een bedankmail via Resend
//  na elke nieuwe rij in manifest_handtekeningen.
//
//  Aanroepen door een Supabase Database Webhook (Insert-trigger
//  op manifest_handtekeningen). Zie README.md voor de setup.
//
//  Vereiste secret (Edge Functions → Secrets):
//    RESEND_API_KEY — de "Manifest bevestiging" sleutel uit Resend
//
//  SUPABASE_URL en SUPABASE_ANON_KEY worden door Supabase zelf al
//  automatisch aan elke Edge Function meegegeven.
// ============================================================

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")!;
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY")!;

function escapeHtml(s: string) {
  return String(s).replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c] as string));
}

async function haalTeller(): Promise<number | null> {
  try {
    const r = await fetch(`${SUPABASE_URL}/rest/v1/rpc/manifest_teller`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json"
      },
      body: "{}"
    });
    const n = await r.json();
    return typeof n === "number" ? n : null;
  } catch {
    return null;
  }
}

Deno.serve(async (req) => {
  if (!RESEND_API_KEY) {
    console.error("RESEND_API_KEY secret ontbreekt of is leeg — controleer Edge Functions → Secrets");
    return new Response("Server misconfigured: RESEND_API_KEY ontbreekt", { status: 500 });
  }

  const payload = await req.json();
  const record = payload.record;

  if (!record?.email || !record?.voornaam) {
    return new Response("Ongeldige payload: e-mail of voornaam ontbreekt", { status: 400 });
  }

  const voornaam = escapeHtml(record.voornaam);
  const teller = await haalTeller();
  const tellerZin = teller ? `Jij bent er één van al <strong>${teller}</strong> buren` : "Jij bent een van de buren";

  const html = `
<div style="font-family:Poppins,Arial,sans-serif;max-width:520px;margin:0 auto;color:#0B1F17;line-height:1.5">
  <h1 style="color:#003D28;font-size:1.4rem;margin:0 0 1rem">Bedankt voor je steun, ${voornaam}! ✊</h1>
  <p>Bedankt dat je het <strong>Manifest Behoud Plantagebuurt</strong> hebt ondertekend. ${tellerZin} die samen opkomen voor een leefbare Plantagebuurt.</p>
  <p><strong>Met jouw handtekening eisen we:</strong></p>
  <ol style="padding-left:1.2rem">
    <li>Stop de groei naar 2 miljoen bezoekers.</li>
    <li>Max 8 meter hoog op de erfgrenzen van het park.</li>
    <li>Prioriteit voor dierenwelzijn en groen, niet voor commercie.</li>
    <li>Geen dure horeca en hogere toegangsprijzen.</li>
  </ol>
  <p><strong>Waar we voor staan:</strong> Buren van Artis is een bewonerscollectief dat pleit voor een leefbare Plantagebuurt, bouwplannen op menselijke schaal en échte participatie bij Masterplan 2030 — constructief, feitelijk en samen sterk.</p>
  <p>Hoe meer handtekeningen, hoe sterker ons mandaat richting de gemeente en Artis. Help mee door dit manifest te delen met je buren:</p>
  <p><a href="https://www.burenvanartis.nl/#manifest" style="background:#00A96B;color:#fff;padding:.7rem 1.2rem;border-radius:999px;text-decoration:none;font-weight:600;display:inline-block">Deel het manifest</a></p>
  <p style="margin-top:2rem">Met vriendelijke groet,<br>Buren van Artis<br><a href="mailto:iksteun@burenvanartis.nl" style="color:#00A96B">iksteun@burenvanartis.nl</a></p>
</div>`.trim();

  const send = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: "Buren van Artis <manifest@burenvanartis.nl>",
      to: record.email,
      subject: `Bedankt voor je steun, ${record.voornaam}! ✊`,
      html
    })
  });

  if (!send.ok) {
    const fout = await send.text();
    console.error("Resend fout:", send.status, fout);
    return new Response("Kon bevestigingsmail niet versturen", { status: 502 });
  }

  return new Response("OK", { status: 200 });
});
