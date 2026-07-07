# Buren van Artis

Wekelijkse buurtberichten over het Masterplan van Artis — statische site voor GitHub Pages.

## Bestanden

| Bestand | Doel |
|---|---|
| `index.html` | de berichtenfeed |
| `doelen.html` | pagina "Onze doelen" (7 doelen + positionering) |
| `stijl.css` | gedeelde vormgeving van beide pagina's |
| `instellingen.js` | alle instellingen op één plek (Tikkie, Buttondown, Supabase, planning) |
| `posts.js` | de berichten — dit bestand bewerk je wekelijks |
| `images/` | eigen foto's voor bij de berichten |

## Eenmalige setup

1. Upload alle bestanden hierboven naar deze repository
   (github.com: **Add file → Upload files**).
2. **Settings → Pages → Branch: main / (root) → Save.**
3. Na ± 1 minuut live op `https://ashumathura.github.io/BurenvanArtis/`

## Instellingen (in instellingen.js)

| Variabele | Doel |
|---|---|
| `TIKKIE_URL` | de echte Tikkie-link voor de "💚 Help mee!"-knop onder elk bericht |
| `BUTTONDOWN_GEBRUIKER` | Buttondown-gebruikersnaam voor e-mailaanmeldingen (zolang leeg: aanmelden gaat via mail naar artis-omwonenden@proton.me) |
| `SUPABASE_URL` + `SUPABASE_KEY` | gedeelde +1-tellers (zolang leeg: teller werkt per apparaat) |
| `TOON_GEPLANDE` | `true` = alle berichten direct zichtbaar; `false` = berichten verschijnen automatisch pas op hun datum (wekelijkse planning!) |

In `posts.js` staat bovenin ook `MANIFEST_URL` — vervang die door de echte Linktree/manifest-link.

De Tikkie-knop op de doelenpagina gebruikt automatisch dezelfde `TIKKIE_URL`.

## Wekelijks bericht plaatsen

Alle 18 berichten staan al ingepland (wekelijks op dinsdag, 7 juli t/m 3 november 2026).
Zet `TOON_GEPLANDE` op `false` en elk bericht verschijnt vanzelf op zijn datum — je hoeft
dan alleen nog per week de placeholder-afbeelding te vervangen:

1. Upload de echte foto naar de map `images/` (bijv. `images/2026-07-14.jpg`).
2. Open `posts.js`, zoek het bericht en vervang de picsum-URL door `images/2026-07-14.jpg`.
3. Commit — de site is binnen een minuut bijgewerkt.

Nieuw bericht toevoegen: kopieer een blok in `posts.js`, geef het een nieuwe `id` en `datum`
(JJJJ-MM-DD). Weeknummer en Nederlandse datum verschijnen automatisch.

## Supabase (gedeelde +1-tellers)

SQL voor een nieuw gratis project op supabase.com:

```sql
create table likes (post_id text primary key, count int not null default 0);
alter table likes enable row level security;
create policy "iedereen mag lezen" on likes for select using (true);

create or replace function plus_een(p_post_id text)
returns void language sql security definer as $$
  insert into likes (post_id, count) values (p_post_id, 1)
  on conflict (post_id) do update set count = likes.count + 1;
$$;
grant execute on function plus_een(text) to anon;
```

Daarna `SUPABASE_URL` en `SUPABASE_KEY` invullen in `instellingen.js`
(Project Settings → API → Project URL en anon public key).


## Design v3 (juli 2026)

- **Typografie**: Poppins (400/500/600/700) — modern geometrisch sans.
- **Basiskleur**: `#00DA88` (fris groen). Voor CTA-knoppen zoals *Teken het Manifest*
  en *Help mee!*: `#00A96B` (donkerder groen). Voor deep contrast: `#003D28`.
- **Ondersteunend**: `#9CA3AF` grijs voor secundaire tekst en `#E5E7EB` voor randen.
- **Afbeeldingen**: 4/3 verhouding (± 30% groter dan Instagram-standaard).
- **Actiehiërarchie per bericht**: Manifest-knop (alleen op zware posts) → Help mee!
  Tikkie → +1 → delen. Zo staat de "grote vraag" alleen bij de posts die het aankunnen.

## Copy-strategie voor de berichten

Elk bericht volgt een vaste ritmiek: **haak** (concreet feit) → **jij-moment**
(sensorisch, tweede persoon) → **context + haalbare alternatief** → **één CTA**.
Vermijd stapels cijfers; kies één held-stat per bericht. Refereer consequent aan
Masterplan 2034 en het bouwprogramma dat op de aanname van 2 miljoen bezoekers rust.
