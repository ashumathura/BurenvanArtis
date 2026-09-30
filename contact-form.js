// ============================================================
//  CONTACTFORMULIER — stuurt een bericht via Supabase
//  Wordt geladen op elke pagina die <div id="contact"> bevat.
//  Teksten volgen de taal van de pagina (<html lang="nl|en">).
// ============================================================

(function(){
  const el = document.getElementById("contact");
  if (!el) return;

  const taal = (document.documentElement.lang || "nl").toLowerCase().startsWith("en") ? "en" : "nl";
  const T = {
    nl: {
      veldenLeeg: "Vul alle verplichte velden in.",
      emailOngeldig: "Vul een geldig e-mailadres in.",
      nietGeconfigureerd: "Het formulier staat nog niet aan. Vul SUPABASE_URL en SUPABASE_KEY in.",
      bezig: "Bezig...",
      geenRechten: "Het formulier heeft nog geen schrijfrechten in Supabase (RLS-policy ontbreekt). Zie README.",
      misgegaan: "Er ging iets mis. Probeer het later opnieuw.",
      geenVerbinding: "Kan geen verbinding maken. Controleer je internetverbinding.",
      knop: "Verstuur bericht"
    },
    en: {
      veldenLeeg: "Please fill in all required fields.",
      emailOngeldig: "Please enter a valid email address.",
      nietGeconfigureerd: "The form is not active yet. Fill in SUPABASE_URL and SUPABASE_KEY.",
      bezig: "Sending...",
      geenRechten: "The form does not have write access in Supabase yet (missing RLS policy). See README.",
      misgegaan: "Something went wrong. Please try again later.",
      geenVerbinding: "Could not connect. Please check your internet connection.",
      knop: "Send message"
    }
  }[taal];

  const supabaseAan = typeof SUPABASE_URL === "string" && SUPABASE_URL !== ""
                    && typeof SUPABASE_KEY === "string" && SUPABASE_KEY !== "";

  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", async e => {
    e.preventDefault();

    // honeypot: bots vullen vaak elk veld, echte bezoekers zien dit veld nooit
    if (form.website.value.trim() !== "") return;

    const btn = form.querySelector("button[type=submit]");
    const fout = document.getElementById("contact-fout");
    const ok = document.getElementById("contact-ok");
    fout.style.display = "none";
    ok.style.display = "none";

    const velden = {
      voornaam:   form.voornaam.value.trim(),
      achternaam: form.achternaam.value.trim(),
      email:      form.email.value.trim(),
      onderwerp:  form.onderwerp.value.trim(),
      bericht:    form.bericht.value.trim()
    };
    for (const [k,v] of Object.entries(velden)) {
      if (!v) { toonFout(T.veldenLeeg); return; }
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(velden.email)) {
      toonFout(T.emailOngeldig); return;
    }

    if (!supabaseAan) {
      toonFout(T.nietGeconfigureerd);
      return;
    }

    btn.disabled = true;
    btn.textContent = T.bezig;

    try {
      const r = await fetch(`${SUPABASE_URL}/rest/v1/contact_berichten`, {
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
        document.getElementById("contact-formulier").style.display = "none";
        ok.style.display = "block";
        ok.scrollIntoView({ behavior: "smooth", block: "center" });
        ok.focus();
        if (typeof gtag === "function") gtag("event", "contact_verzonden");
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
