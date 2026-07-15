// ============================================================
//  MANIFEST FORMULIER — teken het manifest via Supabase
//  Wordt geladen op elke pagina die <div id="manifest"> bevat.
//  Teksten volgen de taal van de pagina (<html lang="nl|en">).
// ============================================================

(function(){
  const el = document.getElementById("manifest");
  if (!el) return;

  const taal = (document.documentElement.lang || "nl").toLowerCase().startsWith("en") ? "en" : "nl";
  const T = {
    nl: {
      teller: n => `Al ${n} ${n === 1 ? "buur" : "buren"} tekenden.`,
      veldenLeeg: "Vul alle velden in.",
      emailOngeldig: "Vul een geldig e-mailadres in.",
      postcodeOngeldig: "Vul een geldige postcode in (bijv. 1018 AB).",
      nietGeconfigureerd: "Het formulier staat nog niet aan. Vul SUPABASE_URL en SUPABASE_KEY in.",
      bezig: "Bezig...",
      alGetekend: "Dit e-mailadres heeft het manifest al ondertekend. Bedankt!",
      geenRechten: "Het formulier heeft nog geen schrijfrechten in Supabase (RLS-policy ontbreekt). Zie README.",
      misgegaan: "Er ging iets mis. Probeer het later opnieuw.",
      geenVerbinding: "Kan geen verbinding maken. Controleer je internetverbinding.",
      knop: "Teken het manifest ✍️"
    },
    en: {
      teller: n => `${n} ${n === 1 ? "neighbour has" : "neighbours have"} already signed.`,
      veldenLeeg: "Please fill in all fields.",
      emailOngeldig: "Please enter a valid email address.",
      postcodeOngeldig: "Please enter a valid postcode (e.g. 1018 AB).",
      nietGeconfigureerd: "The form is not active yet. Fill in SUPABASE_URL and SUPABASE_KEY.",
      bezig: "Sending...",
      alGetekend: "This email address has already signed the manifesto. Thank you!",
      geenRechten: "The form does not have write access in Supabase yet (missing RLS policy). See README.",
      misgegaan: "Something went wrong. Please try again later.",
      geenVerbinding: "Could not connect. Please check your internet connection.",
      knop: "Sign the manifesto ✍️"
    }
  }[taal];

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
        tellerEl.textContent = T.teller(n);
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
      if (!v) { toonFout(T.veldenLeeg); return; }
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(velden.email)) {
      toonFout(T.emailOngeldig); return;
    }
    // Nederlandse postcode: 4 cijfers + 2 letters (met of zonder spatie)
    if (!/^\d{4}\s?[A-Za-z]{2}$/.test(velden.postcode)) {
      toonFout(T.postcodeOngeldig); return;
    }

    if (!supabaseAan) {
      toonFout(T.nietGeconfigureerd);
      return;
    }

    btn.disabled = true;
    btn.textContent = T.bezig;

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
        document.getElementById("manifest-formulier").style.display = "none";
        ok.style.display = "block";
        ok.scrollIntoView({ behavior: "smooth", block: "center" });
        ok.focus();
        laadTeller();
        if (typeof gtag === "function") gtag("event", "manifest_signed");
      } else if (r.status === 409) {
        toonFout(T.alGetekend);
      } else {
        const body = await r.text();
        console.error("Supabase response:", r.status, body);
        if (r.status === 401 || r.status === 403) {
          toonFout(T.geenRechten);
        } else {
          toonFout(T.misgegaan);
        }
      }
    } catch(err) {
      console.error(err);
      toonFout(T.geenVerbinding);
    } finally {
      btn.disabled = false;
      btn.textContent = T.knop;
    }

    function toonFout(msg){
      fout.textContent = msg;
      fout.style.display = "block";
    }
  });
})();
