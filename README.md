# Buren van Artis

Wekelijkse buurtberichten over het Masterplan van Artis — statische site voor GitHub Pages.

## Eenmalige setup

1. Upload `index.html`, `posts.js` en de map `images/` naar deze repository
   (github.com: **Add file → Upload files**).
2. **Settings → Pages → Branch: main / (root) → Save.**
3. Na ± 1 minuut live op `https://ashumathura.github.io/BurenvanArtis/`

## Instellingen (bovenin index.html)

| Variabele | Doel |
|---|---|
| `TIKKIE_URL` | de echte Tikkie-link voor de "💚 Help mee!"-knop onder elk bericht |
| `BUTTONDOWN_GEBRUIKER` | Buttondown-gebruikersnaam voor e-mailaanmeldingen (zolang leeg: aanmelden gaat via mail naar artis-omwonenden@proton.me) |
| `SUPABASE_URL` + `SUPABASE_KEY` | gedeelde +1-tellers (zolang leeg: teller werkt per apparaat) |
| `TOON_GEPLANDE` | `true` = alle berichten direct zichtbaar; `false` = berichten verschijnen automatisch pas op hun datum (wekelijkse planning!) |

In `posts.js` staat bovenin ook `MANIFEST_URL` — vervang die door de echte Linktree/manifest-link.

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

Daarna `SUPABASE_URL` en `SUPABASE_KEY` invullen in `index.html`
(Project Settings → API → Project URL en anon public key).
