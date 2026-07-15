// ============================================================
//  FEED — bouwt de berichtenfeed en site-interactie op.
//  Gedeeld door index.html (nl) en en/index.html (en).
//  Vereist: instellingen.js en posts.js zijn eerder geladen.
// ============================================================

const PAGINA_TAAL = (document.documentElement.lang || "nl").toLowerCase().startsWith("en") ? "en" : "nl";

const FEED_TEKST = {
  nl: {
    maanden: ["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],
    week: "Week",
    deelMail: "✉️ E-mail",
    deelWhatsApp: "📱 WhatsApp",
    mailBody: titel => "Dit bericht van Buren van Artis is misschien interessant voor je:\n\n" + titel
  },
  en: {
    maanden: ["January","February","March","April","May","June","July","August","September","October","November","December"],
    week: "Week",
    deelMail: "✉️ Email",
    deelWhatsApp: "📱 WhatsApp",
    mailBody: titel => "This post from Buren van Artis might interest you:\n\n" + titel
  }
}[PAGINA_TAAL];

function nlDatum(iso){
  const d = new Date(iso + "T00:00:00");
  return `${d.getDate()} ${FEED_TEKST.maanden[d.getMonth()]} ${d.getFullYear()}`;
}
function weekNr(iso){
  const d = new Date(iso + "T00:00:00");
  const t = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const dag = (t.getUTCDay() + 6) % 7;
  t.setUTCDate(t.getUTCDate() - dag + 3);
  const eersteDonderdag = t.valueOf();
  t.setUTCMonth(0, 1);
  if (t.getUTCDay() !== 4) t.setUTCMonth(0, 1 + ((4 - t.getUTCDay()) + 7) % 7);
  return 1 + Math.round((eersteDonderdag - t) / 604800000);
}
function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, c =>
    ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}

// ---------- feed opbouwen ----------
const vandaag = new Date(); vandaag.setHours(23,59,59);
const zichtbaar = POSTS
  .filter(p => TOON_GEPLANDE || new Date(p.datum + "T00:00:00") <= vandaag)
  .sort((a,b) => b.datum.localeCompare(a.datum));

const feed = document.getElementById("feed");
zichtbaar.forEach(post => {
  const kaart = document.createElement("article");
  kaart.className = "kaart";
  kaart.id = "post-" + post.id;

  let media = "";
  if (post.youtube) {
    media = `<div class="kaart-media"><div class="video">
      <iframe src="https://www.youtube-nocookie.com/embed/${post.youtube}"
        title="${escapeHtml(post.titel)}" loading="lazy" allowfullscreen
        allow="accelerometer; encrypted-media; picture-in-picture"></iframe>
    </div></div>`;
  } else if (post.afbeelding) {
    media = `<div class="kaart-media"><img src="${post.afbeelding}" alt="Buren van Artis — ${escapeHtml(post.titel)}" loading="lazy"></div>`;
  }

  const alineas = (post.tekst || "").split("\n\n").map(a => `<p>${escapeHtml(a).replace(/\n/g, "<br>")}</p>`).join("");

  const knoppen = (post.knoppen || []).map(k =>
    `<a class="knop" href="${k.url}" target="_blank" rel="noopener">${escapeHtml(k.label)}</a>`
  ).join("");

  const tags = (post.tags || []).map(t => `<span class="tag">#${escapeHtml(t)}</span>`).join("");

  const postUrl = location.origin + location.pathname + "#post-" + post.id;
  const deelTekst = encodeURIComponent(post.titel + " — Buren van Artis\n" + postUrl);
  const mailOnderwerp = encodeURIComponent(post.titel + " — Buren van Artis");
  const mailBody = encodeURIComponent(FEED_TEKST.mailBody(post.titel) + "\n" + postUrl);

  kaart.innerHTML = `
    ${media}
    <div class="kaart-body">
      <div class="wenkbrauw"><span>${FEED_TEKST.week} ${weekNr(post.datum)}</span><time class="datum" datetime="${post.datum}">${nlDatum(post.datum)}</time></div>
      <h2>${escapeHtml(post.titel)}</h2>
      ${alineas}
      ${knoppen ? `<div class="acties">${knoppen}</div>` : ""}
      ${tags ? `<div class="tags">${tags}</div>` : ""}
      <div class="steun">
        <button class="plusje" data-post="${post.id}" aria-pressed="false">
          <span class="vogel" aria-hidden="true">🦩</span>
          🦩 +1 <span class="teller" data-teller="${post.id}">0</span>
        </button>
        <a class="helpmee" href="${TIKKIE_URL}" target="_blank" rel="noopener">💚 Help mee!</a>
        <span class="delen">
          <a class="deel" href="https://wa.me/?text=${deelTekst}" target="_blank" rel="noopener" aria-label="Deel via WhatsApp">${FEED_TEKST.deelWhatsApp}</a>
          <a class="deel" href="mailto:?subject=${mailOnderwerp}&body=${mailBody}" aria-label="Deel via e-mail">${FEED_TEKST.deelMail}</a>
        </span>
      </div>
    </div>`;
  feed.appendChild(kaart);
});

// Hero-band Manifest-knop koppelen aan de gedeelde MANIFEST_URL
const heroManifest = document.getElementById("hero-manifest");
if (heroManifest) {
  heroManifest.href = "#manifest";
  heroManifest.addEventListener("click", () => {
    if (typeof gtag === "function") gtag("event", "klik_teken_manifest");
  });
}

// Hero-band Help mee!-knop koppelen aan de gedeelde TIKKIE_URL
const heroTikkie = document.getElementById("hero-tikkie");
if (heroTikkie && typeof TIKKIE_URL === "string") heroTikkie.href = TIKKIE_URL;
if (heroTikkie) {
  heroTikkie.addEventListener("click", () => {
    if (typeof gtag === "function") gtag("event", "klik_help_mee");
  });
}

// ---------- JSON-LD structured data voor alle berichten (SEO) ----------
(function emitPostSchema(){
  const base = location.origin + location.pathname;
  const items = zichtbaar.map((post, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "item": {
      "@type": "BlogPosting",
      "@id": base + "#post-" + post.id,
      "headline": post.titel,
      "datePublished": post.datum,
      "url": base + "#post-" + post.id,
      "inLanguage": "nl-NL",
      "keywords": (post.tags || []).join(", "),
      "image": post.afbeelding || undefined,
      "articleBody": post.tekst,
      "author": { "@type": "Organization", "name": "Buren van Artis" },
      "publisher": {
        "@type": "Organization",
        "name": "Buren van Artis",
        "logo": { "@type": "ImageObject", "url": location.origin + "/images/og-cover.jpg" }
      },
      "mainEntityOfPage": { "@type": "WebPage", "@id": base }
    }
  }));
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Berichten van Buren van Artis",
    "itemListElement": items
  });
  document.head.appendChild(script);
})();

// ---------- +1 (plus-één) ----------
const supabaseAan = SUPABASE_URL && SUPABASE_KEY;

async function laadTellers(){
  if (supabaseAan) {
    try {
      const r = await fetch(`${SUPABASE_URL}/rest/v1/likes?select=post_id,count`, {
        headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` }
      });
      (await r.json()).forEach(rij => zetTeller(rij.post_id, rij.count));
    } catch(e){ console.warn("Kon tellers niet laden", e); }
  } else {
    zichtbaar.forEach(p => zetTeller(p.id, Number(localStorage.getItem("teller_" + p.id) || 0)));
  }
  zichtbaar.forEach(p => {
    if (localStorage.getItem("plus_" + p.id)) {
      const knop = document.querySelector(`.plusje[data-post="${p.id}"]`);
      if (knop) knop.setAttribute("aria-pressed", "true");
    }
  });
}
function zetTeller(id, n){
  const el = document.querySelector(`[data-teller="${id}"]`);
  if (el) el.textContent = n;
}
document.addEventListener("click", async e => {
  const knop = e.target.closest(".plusje");
  if (!knop || knop.getAttribute("aria-pressed") === "true") return;
  const id = knop.dataset.post;
  knop.setAttribute("aria-pressed", "true");
  localStorage.setItem("plus_" + id, "1");
  if (typeof gtag === "function") gtag("event", "klik_vind_ik_leuk", { post_id: id });

  const vogel = knop.querySelector(".vogel");
  vogel.classList.remove("vlieg"); void vogel.offsetWidth; vogel.classList.add("vlieg");

  const el = document.querySelector(`[data-teller="${id}"]`);
  const nieuw = Number(el.textContent || 0) + 1;
  zetTeller(id, nieuw);

  if (supabaseAan) {
    try {
      await fetch(`${SUPABASE_URL}/rest/v1/rpc/plus_een`, {
        method: "POST",
        headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({ p_post_id: id })
      });
    } catch(e){ console.warn("Kon +1 niet opslaan", e); }
  } else {
    localStorage.setItem("teller_" + id, nieuw);
  }
});
laadTellers();

// ---------- e-mailaanmelding ----------
const formulier = document.getElementById("aanmeldformulier");
if (BUTTONDOWN_GEBRUIKER) {
  formulier.action = `https://buttondown.email/api/emails/embed-subscribe/${BUTTONDOWN_GEBRUIKER}`;
} else {
  formulier.addEventListener("submit", e => {
    e.preventDefault();
    location.href = "mailto:iksteun@burenvanartis.nl?subject=" +
      encodeURIComponent("Aanmelden mailinglijst Buren van Artis") +
      "&body=" + encodeURIComponent("Graag aanmelden op de mailinglijst: " + document.getElementById("email").value);
  });
}
formulier.addEventListener("submit", () => {
  if (typeof gtag === "function") gtag("event", "klik_aanmelden");
});

// ---------- leesgedrag per bericht (scroll tracking) ----------
if (typeof gtag === "function" && "IntersectionObserver" in window) {
  const leesSessies = new Map(); // post_id -> tijdstip waarop bericht zichtbaar werd
  const gezienPosts = new Set(); // post_id die al een "post_zichtbaar" event kregen

  function meldLeestijd(id, titel) {
    const start = leesSessies.get(id);
    if (start == null) return;
    leesSessies.delete(id);
    const seconden = Math.round((performance.now() - start) / 1000);
    if (seconden < 1) return; // te kort om als "gelezen" te tellen
    gtag("event", "post_leestijd", { post_id: id, post_titel: titel, seconden });
  }

  const postObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.dataset.postId;
      const titel = entry.target.dataset.postTitel;
      if (entry.isIntersecting) {
        leesSessies.set(id, performance.now());
        if (!gezienPosts.has(id)) {
          gezienPosts.add(id);
          gtag("event", "post_zichtbaar", { post_id: id, post_titel: titel });
        }
      } else {
        meldLeestijd(id, titel);
      }
    });
  }, { threshold: 0.5 });

  zichtbaar.forEach(post => {
    const el = document.getElementById("post-" + post.id);
    if (!el) return;
    el.dataset.postId = post.id;
    el.dataset.postTitel = post.titel;
    postObserver.observe(el);
  });

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState !== "hidden") return;
    Array.from(leesSessies.keys()).forEach(id => {
      const el = document.getElementById("post-" + id);
      meldLeestijd(id, el ? el.dataset.postTitel : "");
    });
  });
}
