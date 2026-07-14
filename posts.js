// ============================================================
//  BUREN VAN ARTIS — BERICHTEN (v5, sterkere emotionele lading)
//
//  Nieuw bericht? Voeg bovenaan een blok toe. Velden:
//    id       uniek, bijv. "2026-11-10" (nooit hergebruiken)
//    datum    "JJJJ-MM-DD" — week en NL-datum zijn automatisch.
//             Berichten in de toekomst verschijnen pas op die dag
//             als TOON_GEPLANDE=false (zie instellingen.js).
//    titel    kop van het bericht
//    tekst    template literal met dubbele witregels tussen alinea's
//    tags     lijst hashtags, zonder #
//    afbeelding  pad in images/ of volledige URL
//    knoppen  extra knoppen: { label, url }
//             (De vaste "Help mee!"-Tikkieknop en deelknoppen
//              staan automatisch onder elk bericht.)
// ============================================================

const MANIFEST_URL = "#manifest";  // scrollt naar het formulier op de pagina  // Manifest / Linktree
const CONTACT_EMAIL = "iksteun@burenvanartis.nl";

const POSTS = [

  // ---------- POST 18 (nieuwste) — Doe mee ----------
  {
    id: "2026-11-03",
    datum: "2026-11-03",
    titel: "Wat één huishouden niet kan, kunnen 240 huishoudens wel. Help ook mee en houd Artis in toom!",
    tekst:
`Als u vandaag niets doet, ligt de eerste vergunning voor onderdelen van Masterplan 2030 er binnenkort.

Als 100 buren van Artis nú tekenen, kunnen we gezamenlijk Artis terugdwingen naar de tekentafel. Als 240 huishoudens elk 15 euro bijdragen, kunnen we een onafhankelijke verkeers-contra-expertise laten uitvoeren die de gemeente niet kan negeren.

WAT KUNT Ú DOEN?
✍️ Onderteken het Manifest van Buren van Artis via de knop hieronder
📬 Meld u aan voor de mailinglijst onderaan de pagina
💚 Steun de activiteiten van Buren van Artis financieel via de knop HELP MEE hieronder!`,
    tags: ["BurenVanArtis", "Participatie", "Plantagebuurt", "Amsterdam"],
    afbeelding: "https://picsum.photos/seed/samen18/1200/900",
    knoppen: [{ label: "JA, IK TEKEN HET MANIFEST!", url: MANIFEST_URL }]
  },

  // ---------- POST 17 — Gemeente ----------
  {
    id: "2026-10-27",
    datum: "2026-10-27",
    titel: "Amsterdam wil minder toeristen. Van 26 miljoen per jaar naar maximaal 20 miljoen per jaar. Maar de Plantagebuurt moet juist méér toeristen ontvangen?",
    tekst:
`U woont hier misschien omdat de Plantagebuurt géén Museumplein is. Het Masterplan van Artis verandert dat in tien jaar. Met steun van de gemeente…

Bestemmingsplannen worden aangepast, 'tijdelijke' vergunningen voor tien jaar verleend en hoogtenormen opgerekt. De randen van Artis worden volgebouwd met hoogbouw.

De buurt zal de gevolgen voelen: extreme drukte en lawaai, meer verkeer en meer schadelijke uitstoot.

Artis ontving bijna 19 miljoen subsidie van de gemeente. Vanwege onder meer natuureducatie en maatschappelijk belang.
Níet voor commerciële expansie in een woonwijk!

Deel dit bericht met uw stadsdeelbestuurder of gemeenteraadslid. Laat ze horen wat ze liever níet horen!`,
    tags: ["Amsterdam", "Stadsontwikkeling", "LeefbareStad", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/stopera17/1200/900",
    knoppen: []
  },

  // ---------- POST 16 — Participatie ----------
  {
    id: "2026-10-20",
    datum: "2026-10-20",
    titel: "Buurtbewoners zien geen verbetering van de plannen. Tóch gaan ze door!",
    tekst:
`Artis heeft een extern bureau ingeschakeld om het participatieproces rond Masterplan 2030 te begeleiden. 'Artis heeft zijn best gedaan,' meent dit bureau.

De buurtbewoners op de laatste Artis-bijeenkomst voor de buurt hadden een andere ervaring. Zij vonden de plannen zelfs verslechterd.

Artis presenteerde een typisch staaltje schijnparticipatie: de buurt mag meepraten over de kleur van de bakstenen en de begroeiing, maar níet over de hoogte van gebouwen.

Ondertussen worden de hoofdlijnen van het Masterplan doorgezet. De hoogbouw aan de randen van het park komt eraan…
Laat dat niet gebeuren!

Mail uw ervaringen met de participatie en uw mening over de plannen naar ${CONTACT_EMAIL}`,
    tags: ["Participatie", "MasterplanArtis", "Plantagebuurt", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/grafiek16/1200/900",
    knoppen: []
  },

  // ---------- POST 15 — WKO / douches (Manifest) ----------
  {
    id: "2026-10-13",
    datum: "2026-10-13",
    titel: "Van het gas af? Prima idee! Maar waarom moeten alle personeelsvoorzieningen in zo'n kolossaal gebouw?",
    tekst:
`De geplande WKO-installatie zorgt ervoor dat Artis in 2030 van het gas af kan. Extra personeelsvoorzieningen zijn blijkbaar nodig.
Maar waarom in zo'n mega-gebouw?

Deze nieuwe kolos werpt straks schaduw over úw kade, úw ontbijttafel en úw zomeravond.
Een precedent, vrezen wij. Als het in één hoek van Artis mag, mag het straks dan overal?

De buurt heeft alternatieven aangedragen, waar Artis niet voor openstaat. Artis beschouwt 'het gesprek' over het WKO/Dienstengebouw als afgesloten. Wíj niet!

Onderteken het Manifest! Steun de WKO, maar kom in actie tegen nodeloze hoogbouw!`,
    tags: ["MasterplanArtis", "Entrepotdok", "LeefbareStad", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/weegschaal15/1200/900",
    knoppen: [{ label: "Teken het Manifest", url: MANIFEST_URL }]
  },

  // ---------- POST 14 — Groenwassen ----------
  {
    id: "2026-10-06",
    datum: "2026-10-06",
    titel: "'Natuurinclusief, groene daktuinen…' Greenwashing op hoog niveau!",
    tekst:
`Loop eens langs een muur van 14 meter hoog en 74 meter breed. Bedenk er wat klimplanten bij. Is dát een 'natuurinclusieve' wijk?
En als die Muur van Artis er staat, gaat hij niet zo snel weer weg…

Buren van Artis roept de gemeente op: toets de Artis-plannen nu écht op massa, hoogte en impact!

Deel dit bericht als u genoeg heeft van greenwashing ten koste van de Plantagebuurt!`,
    tags: ["Entrepotdok", "MasterplanArtis", "Stadsontwikkeling", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/muur14/1200/900",
    knoppen: []
  },

  // ---------- POST 13 — 8m eis (Manifest) ----------
  {
    id: "2026-09-29",
    datum: "2026-09-29",
    titel: "Wij vragen om de menselijke maat! Maximaal 8 meter en níet hoger!",
    tekst:
`Voor ons, onze kinderen, en iedereen die de komende 20 jaar in onze historische wijk rond Artis woont.

Géén ingewikkelde trajecten per gebouw, maar één vuistregel: maximaal 8 meter de hoogte in!

Als Artis deze grenzen niet respecteert, komen er de volgende jaren ongetwijfeld nog meer kolossale gebouwen bij. Ten koste van de buurt.

TEKEN HET MANIFEST NÚ!`,
    tags: ["Plantagebuurt", "LeefbareStad", "MasterplanArtis", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/schaal13/1200/900",
    knoppen: [{ label: "Teken het Manifest nú!", url: MANIFEST_URL }]
  },

  // ---------- POST 12 — Verkeersinfarct ----------
  {
    id: "2026-09-22",
    datum: "2026-09-22",
    titel: "Een grote parkeergarage en héél veel auto's…",
    tekst:
`Dinsdagochtend. Je fietst met je zoontje achterop door de Plantage Kerklaan. Voor je: een SUV met buitenlands kenteken. Naast je: een reusachtige vrachtauto van een van de vele leveranciers die achteruit een steeg in wil. Achter je: een auto die jouw fietsbel niet hoort.
Je zoontje klemt zich stevig aan je vast.

Dít is wat de Artis-expansie ons oplevert. Een grote parkeergarage aan de rand van het park heeft een aanzuigende werking, dat is elders al gebleken. Géén stimulans om met het OV naar Artis, kantoren of restaurants te komen.

Gevolgen voor de buurt: meer schadelijke uitstoot, onveilige stoepen en straten, hulpdiensten die vastlopen.

De Buren van Artis pleiten voor onafhankelijke contra-expertise: uitgebreid onderzoek naar de extra verkeersstromen als gevolg van Artis' plannen.
Wilt u dat ook? Meld u aan onderaan de pagina!`,
    tags: ["Plantagebuurt", "Amsterdam", "LeefbareStad", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/verkeer12/1200/900",
    knoppen: []
  },

  // ---------- POST 11 — Salmplein 10 jaar ----------
  {
    id: "2026-09-15",
    datum: "2026-09-15",
    titel: "'Tijdelijk' horecapaviljoen op het Salmplein. Vergunning aangevraagd voor 10 jaar.",
    tekst:
`Let op het woord 'tijdelijk'! Een kind dat in 2026 leert lezen, doet gemiddeld rond 2036 eindexamen. Dát is dus 'tijdelijk'.
En, zoals heel vaak in onze stad: 'tijdelijk' wordt meestal 'vast'.

Artis wil een tijdelijke vergunning voor een nieuw, groot horecapaviljoen op het Salmplein. Verrassing voor de buurt…

Het Masterplan schetst de contouren van Artis' gulzige plannen: hoogbouw aan de randen, meer autoverkeer in de buurt.
Daarná komt de rest. Stapsgewijs. Met afzonderlijke vergunningen. Nog meer horeca, meer bezoekers, minder groen.

NB: voor de gemiddelde Amsterdammer wordt Artis steeds onbereikbaarder. Véél te duur.

Wij vragen de gemeente: geef Artis niet voortdurend haar zin! En check héél goed wat alle grote plannen betekenen voor de Amsterdammers in de buurt.`,
    tags: ["MasterplanArtis", "Amsterdam", "Plantagebuurt", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/salmplein11/1200/900",
    knoppen: []
  },

  // ---------- POST 10 — Pretpark vs dierenwelzijn ----------
  {
    id: "2026-09-08",
    datum: "2026-09-08",
    titel: "Gaan de Artis-plannen over dieren en bezoekers? Of over méér horeca, kantoren en installaties?",
    tekst:
`Kijk eens goed naar de plannen van Artis: prachtige 'artist impressions' van dure horeca en meer kantoorruimte.

De Partij voor de Dieren waarschuwde al: de plannen gaan allereerst over horeca, kantoorruimtes en enorme technische installaties. Is dat nog te rijmen met alle steun die Artis krijgt van de gemeente?
Met de gigantische kosten die een dagje Artis betekenen voor een gemiddeld Amsterdams gezin?`,
    tags: ["Artis", "MasterplanArtis", "BurenVanArtis", "LeefbareStad"],
    afbeelding: "https://picsum.photos/seed/dier10/1200/900",
    knoppen: []
  },

  // ---------- POST 9 — Dominosteen (Manifest) ----------
  {
    id: "2026-09-01",
    datum: "2026-09-01",
    titel: "Als het nieuwe Dienstengebouw 14 meter hoog wordt, staat er een precedent voor de rest van Artis voor tientallen jaren.",
    tekst:
`Kijk naar de horizon boven Artis vanaf de hoek Sarphatistraat/Entrepotdok. Straks staat daar een reusachtige 'muur' van 14 meter.

En het klopt níet dat het geplande Dienstengebouw op zichzelf staat. Bij een volgend plan: nóg een muur? En dan nóg een?
Een onherkenbare Plantagebuurt met een stenen Artis als middelpunt?

Het Masterplan vermeldt aan de randen van het park nog meer bouwlocaties. Voor kantoren (grotendeels verhuurd aan derden), horeca en technische installaties.
Was dit niet allereerst een DIERENpark?

De Buren van Artis trekken aan de bel: wil Amsterdam dit écht? Een grotendeels 19e-eeuwse wijk met een gigantische stenen vesting als middelpunt? Ten koste van Amsterdammers die hier wónen?`,
    tags: ["Entrepotdok", "MasterplanArtis", "Stadsontwikkeling", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/domino9/1200/900",
    knoppen: []
  },

  // ---------- POST 8 — Horecaplein ----------
  {
    id: "2026-08-25",
    datum: "2026-08-25",
    titel: "Acht horecagelegenheden en heel veel kantoren… En het Masterplan wil er nóg meer.",
    tekst:
`Weet u nog dat u door Artis liep en iemand hoorde zeggen: 'Waar zijn de dieren eigenlijk?'

In Masterplan 2030 worden gebouwen gerestaureerd en historische zichtlijnen hersteld. Mooi.
Maar bij elke restauratie staat ook een horecagelegenheid of een kantoorfunctie gepland.
Artis' huishoudboekje rust zwaar op commerciële exploitatie. Méér bezoekers, meer horeca, meer kantoorruimte voor verhuur.`,
    tags: ["Artis", "MasterplanArtis", "Amsterdam", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/horeca8/1200/900",
    knoppen: []
  },

  // ---------- POST 7 — Zonlicht / schaduw (Manifest) ----------
  {
    id: "2026-08-18",
    datum: "2026-08-18",
    titel: "Vanaf 15:00 is de zon van de Entrepotdokkade. Voor altijd. Voor de kade die niets kost om te bezoeken.",
    tekst:
`Warme dinsdagavond. Je haalt een broodje. Zoekt een plek op de kade. Er is geen zon meer, sinds vanmiddag niet. En jij weet: morgen weer zo. En volgende zomer. En de zomer daarna.

Het Entrepotdok is een van de laatste gratis, zonovergoten plekken in Amsterdam waar je nog gewoon kunt zitten. Voor jongeren met een klein budget. Voor gezinnen zonder tuin. Voor iedereen die zich Artis niet kan veroorloven. Precies díe plek gaat Masterplan 2030 wegnemen.

Het geplande Dienstengebouw wordt 74 meter lang en 14 meter hoog — een blok zo lang als een voetbalveld en zo hoog als 4,5 verdiepingen. Aan de overkant van jouw water. In dat gebouw komt niet alleen de WKO-installatie, maar ook een personeelskantine, kleedruimtes en douches. Voor die extra functies moet het gebouw hoger. Voor die extra functies verliezen wij de zon op de kade.

We hebben concreet voorgesteld die niet-technische functies elders in het park onder te brengen. Eerst hoorden we "onhaalbaar". Na wijzigingen in het masterplan kán het wél. Toch beschouwt Artis het gesprek als gesloten.

Onderteken ons Manifest. Help ons de zon terug te vechten voordat de muur er staat.`,
    tags: ["Entrepotdok", "MasterplanArtis", "LeefbareStad", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/zon7/1200/900",
    knoppen: [{ label: "Teken het Manifest", url: MANIFEST_URL }]
  },

  // ---------- POST 6 — Galm / klankkast ----------
  {
    id: "2026-08-11",
    datum: "2026-08-11",
    titel: "Twee stenen muren aan het water werken als een klankkast. Vraag maar aan de bewoners van Aquartis.",
    tekst:
`Je zit op je balkon aan het Entrepotdok. Iemand roept twee bruggen verderop. Je hoort het alsof het naast je is. Dit gaat niet weg. Dit is elke ochtend, elke avond, elk feestje op de kade. En het is niet terug te draaien nadat de muur er staat.

Bewoners van Aquartis kennen het effect al: hun daktuin ligt tegenover een hoge stenen muur, en een gewoon gesprek is er lastig te voeren. Het geplande Dienstengebouw uit Masterplan 2030 plaatst een tweede muur, aan de overkant van het water. Precies zoals in Aquartis — maar dan langs een groot deel van de kade. Van de leveranciersingang tot het leeuwenverblijf.

De akoestiek van boten, terrassen en verkeer op de kade zal daardoor sterk versterkt worden. Voelbaar op het hele Entrepotdok en in delen van de Kazernebuurt. Niet alleen overdag — ook 's avonds. Ook in de zomer. Ook als je slaapt. Ook als je kind slaapt.

Onze vraag: een onafhankelijk akoestisch onderzoek vóórdat de bouw onherroepelijk is. Vraag maar — of wij vragen het straks voor jouw slaapkamer.`,
    tags: ["Entrepotdok", "LeefbareStad", "MasterplanArtis", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/kade6/1200/900",
    knoppen: []
  },

  // ---------- POST 5 — WKO mug ----------
  {
    id: "2026-08-04",
    datum: "2026-08-04",
    titel: "40 dB is wat 's nachts nog mag. Dat is exact de zoem van een mug. Elke nacht. Voor altijd.",
    tekst:
`Zomeravond. Raam open. Je hebt bijna slaap. En dan hoor je het — bzzzz. Alleen: deze mug zit niet in je slaapkamer. Hij zit in het WKO-gebouw van Artis. En hij vliegt nooit weg. Niet vanavond, niet morgen, niet volgend jaar. Nooit meer.

De warmte-koude-opslag die Artis in Masterplan 2030 wil bouwen, is een technische installatie van ongekende omvang: warmtepompen en compressoren die 24/7 draaien, zomer en winter. Wettelijk mag dat 's nachts niet boven 40 dB uitkomen op de erfgrens — precies de grens waarop een mug al irritant wordt. En let op: dat is de wettelijke bovengrens, niet het beloofde niveau.

Op informatieavonden vroegen buren om harde garanties. Een jaar later ontbreken die nog steeds. Als een bedrijf jou belooft dat je niets zult horen, maar weigert dat vast te leggen — hoeveel vertrouwen heb je dan nog?

Wij vragen niet om beloftes. Wij eisen meetgaranties in het masterplan, met sancties als de norm wordt overschreden.

Verduurzaming steunen we volledig. Slaaploos wakker liggen aan een mug die nooit weggaat: niet.`,
    tags: ["Plantagebuurt", "LeefbareStad", "MasterplanArtis", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/mug5/1200/900",
    knoppen: []
  },

  // ---------- POST 4 — Kalverstraat verkeer ----------
  {
    id: "2026-07-28",
    datum: "2026-07-28",
    titel: "Op een topdag straks: 3.000 auto's + 4.000 fietsen extra. Elke zomerdag. Door onze woonwijk.",
    tekst:
`Denk aan de laatste keer dat je je boodschappentas omhoog moest houden om langs een geparkeerde bakfiets te komen. Vermenigvuldig dat met vier. Nu je moeder die met de rollator wil oversteken. Nu een ambulance die het gaspedaal ingedrukt houdt en niet vooruitkomt.

Bij 10.000 bezoekers op een zomerse dag komt zo'n 30% met de auto (3.000 voertuigen die parkeerruimte zoeken) en 40% met de fiets (4.000 (bak)fietsen op stoepen waar we nu al niet langs komen). Masterplan 2030 lost dat op door een grotere parkeergarage aan de rand van het park te plannen — met precies de aanzuigende werking waarvoor we vrezen.

Meer auto's = meer uitstoot = meer fijnstof in de longen van onze kinderen. Meer opstoppingen = hulpdiensten die vastlopen. Onze stoepen worden dagelijkse hindernisbanen, zeker voor mensen die minder mobiel zijn.

De Kalverstraat kan 60.000 bezoekers op een zaterdag verwerken omdat er brede stoepen zijn, geen voordeuren, geen bewoners. Wij hebben allebei niet.

Onze vraag: onafhankelijke contra-expertise op de verkeersparagraaf van Masterplan 2030. Meld je aan onderaan de pagina — dan hoor je wanneer we die stap zetten.`,
    tags: ["Plantagebuurt", "Amsterdam", "LeefbareStad", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/logistiek4/1200/900",
    knoppen: []
  },

  // ---------- POST 3 — 10.000 mensen ----------
  {
    id: "2026-07-21",
    datum: "2026-07-21",
    titel: "10.000 mensen per dag door de Plantagebuurt. Dat is heel Monnickendam. Elke dag. In jouw straat.",
    tekst:
`Bakfiets naar de crèche. Achter je een school. Voor je 10.000 mensen die de ingang zoeken. Kinderen die tussen benen door proberen te komen. Fietsers die schreeuwen. Een ambulance die je pas hoort als hij vlak achter je is.

Dit is niet een enkele festival-zaterdag. Dit is dinsdag. En woensdag. En donderdag. Elke zomerdag opnieuw, tien jaar lang. 2 miljoen bezoekers per jaar, verdeeld over de zomermaanden, betekent op piekdagen zo'n 10.000 mensen door onze straten — twee uitverkochte AFAS Live's, dagelijks. De complete populatie van Monnickendam die zich 's ochtends door je straat perst en 's avonds weer vertrekt.

Hulpdiensten die er niet doorheen komen. Bewoners die niet in of uit hun eigen huis kunnen. Bakfietsen die minutenlang stilstaan tussen twee voordeuren. Meer uitstoot van al die voertuigen die met de motor aan staan te wachten.

Onze wijk is niet gebouwd op continue festivalstromen. Wat we missen in Masterplan 2030 is één cijfer: een harde bovengrens voor bezoekers. Een cijfer dat past bij 14 hectare in een woonwijk.

Herken je dit al? Geef een +1 en deel het bericht met één buur. Straks doen we het samen.`,
    tags: ["Plantagebuurt", "Amsterdam", "MasterplanArtis", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/dorp3/1200/900",
    knoppen: []
  },

  // ---------- POST 2 — Ruimte-paradox ----------
  {
    id: "2026-07-14",
    datum: "2026-07-14",
    titel: "Blijdorp: 26 hectare, 1,5 miljoen. Artis: 14 hectare, wil 2 miljoen. De drukste dierentuin per m² van Nederland — dat wíllen ze zijn.",
    tekst:
`Loop straks een blokje om je huis heen. Elke vierkante meter tussen jouw voordeur en het einde van je straat gaat straks meer bezoekers dragen dan Blijdorp — dat op de rand van de stad ligt, met eigen parkeerterreinen ter grootte van een half stadion.

Blijdorp is bijna twee keer zo groot als Artis en zit onder de 1,5 miljoen. De Efteling heeft 72 hectare bos en een eigen snelwegafslag voor 5,4 miljoen bezoekers. Wij hebben 14 hectare en 19e-eeuwse straatjes. En Artis wil de drukste dierentuin per vierkante meter van Nederland worden — in ónze buurt.

In Masterplan 2030 wordt de aanname van 2 miljoen bezoekers gebruikt om hoogbouw op de randen van het park, een grotere parkeergarage en meer horeca te legitimeren. Als de aanname te ambitieus is, valt het hele bouwprogramma anders uit. Als de aanname blijft, valt onze buurt anders uit: viezere lucht, hulpdiensten die niet doorkomen, prijzen die de gewone Amsterdammer buitensluiten.

Ken jij iemand die om de hoek van Artis woont, of vroeger woonde? Stuur ze dit bericht door. Iedereen moet weten wat er aankomt. Zwijgen kost ons de buurt.`,
    tags: ["Artis", "MasterplanArtis", "Stadsontwikkeling", "BurenVanArtis"],
    afbeelding: "https://www.burenvanartis.nl/images/post2.png",
    knoppen: []
  },

  // ---------- POST 1 (oudste) — 2M bezoekers ----------
  {
    id: "2026-07-07",
    datum: "2026-07-07",
    titel: "1.271.612 bezoekers in 2025. Masterplan 2030 mikt op 2 miljoen. Om de drukste dierentuin per m² van het land te worden.",
    tekst:
`Denk terug aan de drukste zomerse zaterdag die je vorig jaar meemaakte in de Plantage Kerklaan. Fietsen tussen de bakfietsen, bezoekers met plattegronden op je stoep, een kruispunt dat niet meer opschoot. Vermenigvuldig die dag met 1,6. Dagelijks, in de zomer. En elke dag krijgen we er meer stapels uitstoot bij van de auto's die op de nieuwe grotere parkeergarage afkomen.

Artis is 14 hectare — een postzegel, midden in een 19e-eeuwse woonwijk. Ter vergelijking: Beekse Bergen heeft 120 hectare voor 1,5 miljoen bezoekers. Onze wijk zit al opgescheept met de drukste dierentuin per vierkante meter van Nederland — en Masterplan 2030 wil daar bovenop.

Het argument dat "dynamic pricing" de piek zal spreiden, is in de hele attractiesector nooit bewezen. Wat het streefgetal van 2 miljoen wél doet: het legitimeert de hoogbouw op de randen van het park. De grotere parkeergarage. De duurdere horeca. Kortom: het legitimeert dat onze buurt wordt volgebouwd, dat de lucht viezer wordt, en dat Artis onbereikbaar wordt voor mensen met een gewone portemonnee.

Wij vragen: leg in Masterplan 2030 een harde bovengrens vast die past bij 14 hectare in een woonwijk. Niet 2 miljoen. En niet ten koste van deze buurt.`,
    tags: ["Artis", "MasterplanArtis", "Plantagebuurt", "BurenVanArtis"],
    afbeelding: "https://www.burenvanartis.nl/images/post1.png",
    knoppen: []
  }
];
