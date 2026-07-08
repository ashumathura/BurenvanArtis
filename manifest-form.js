// ============================================================
//  MANIFEST FORMULIER — teken het manifest via Supabase
//  Wordt geladen op elke pagina die <div id="manifest"> bevat.
// ============================================================

(function(){
  const el = document.getElementById("manifest");
  if (!el) return;

  const supabaseAan = typeof SUPABASE_URL === "string" && SUPABASE_URL !== ""
                    && typeof SUPABASE_KEY === "string" && SUPABASE_KEY !== "";

  // ---------- teller ophalen ----------
  async function laadTeller(){
    const tellerEl = document.getElementById("manifest-teller");
    if (!tellerEl || !supabaseAan) return;
    try {
      const r = await fetch(`${SUPABASE_URL}/rest/v1/rpc/manifest_teller`, {
        method: "POST",
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
          "Content-Type": "application/json"
        },
        body: "{}"
      });
      const n = await r.json();
      if (typeof n === "number" && n > 0) {
        tellerEl.textContent = `Al ${n} ${n === 1 ? "buur" : "buren"} tekenden.`;
        tellerEl.style.display = "block";
      }
    } catch(e){ console.warn("Kon manifest-teller niet laden", e); }
  }
  laadTeller();

  // ---------- formulier afhandelen ----------
  const form = document.getElementById("manifest-form");
  if (!form) return;

  form.addEventListener("submit", async e => {
    e.preventDefault();
    const btn = form.querySelector("button[type=submit]");
    const fout = document.getElementById("manifest-fout");
    const ok = document.getElementById("manifest-ok");
    fout.style.display = "none";
    ok.style.display = "none";

    // basis clientside validatie
    const velden = {
      voornaam:   form.voornaam.value.trim(),
      achternaam: form.achternaam.value.trim(),
      straat:     form.straat.value.trim(),
      postcode:   form.postcode.value.trim(),
      stad:       form.stad.value.trim(),
      email:      form.email.value.trim()
    };
    for (const [k,v] of Object.entries(velden)) {
      if (!v) { toonFout("Vul alle velden in."); return; }
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(velden.email)) {
      toonFout("Vul een geldig e-mailadres in."); return;
    }
    // Nederlandse postcode: 4 cijfers + 2 letters (met of zonder spatie)
    if (!/^\d{4}\s?[A-Za-z]{2}$/.test(velden.postcode)) {
      toonFout("Vul een geldige postcode in (bijv. 1018 AB)."); return;
    }

    if (!supabaseAan) {
      toonFout("Het formulier staat nog niet aan. Vul SUPABASE_URL en SUPABASE_KEY in.");
      return;
    }

    btn.disabled = true;
    btn.textContent = "Bezig...";

    try {
      const r = await fetch(`${SUPABASE_URL}/rest/v1/manifest_handtekeningen`, {
        method: "POST",
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal"
        },
        body: JSON.stringify(velden)
      });

      if (r.status === 201 || r.status === 200) {
        form.style.display = "none";
        ok.style.display = "block";
        laadTeller();
      } else if (r.status === 409) {
        toonFout("Dit e-mailadres heeft het manifest al ondertekend. Bedankt!");
      } else {
        const body = await r.text();
        console.error("Supabase response:", r.status, body);
        toonFout("Er ging iets mis. Probeer het later opnieuw.");
      }
    } catch(err) {
      console.error(err);
      toonFout("Kan geen verbinding maken. Controleer je internetverbinding.");
    } finally {
      btn.disabled = false;
      btn.textContent = "Teken het manifest ✍️";
    }

    function toonFout(msg){
      fout.textContent = msg;
      fout.style.display = "block";
    }
  });
})();
