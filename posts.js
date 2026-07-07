// ============================================================
//  BUREN VAN ARTIS — BERICHTEN
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

const MANIFEST_URL = "https://linktr.ee/VOORBEELD";  // Manifest / Linktree
const CONTACT_EMAIL = "artis-omwonenden@proton.me";

const POSTS = [

  // ---------- POST 18 — Doe mee (heaviest CTA) ----------
  {
    id: "2026-11-03",
    datum: "2026-11-03",
    titel: "Wat één huishouden niet kan, kunnen 240 huishoudens wél.",
    tekst:
`Als jij nu niets doet, ligt de eerste vergunning voor Masterplan 2034 er binnen een paar maanden. Als 100 buren nu tekenen, ligt er een juridisch obstakel — en dat obstakel geeft ons tijd om aan de tafel te komen.

Dit is wat we hebben, en wat we nodig hebben. Het juridische playbook ligt klaar: manifest, bezwaarschriften, contra-expertises. Eén onafhankelijke verkeerscontra-expertise kost ongeveer €3.500. Bij 240 huishoudens die €15 doneren, is dat gedekt. En met een groeiende mailinglijst kunnen we op het juiste moment gecoördineerd bezwaar maken.

Drie stappen. Kies wat past.

1. Onderteken het Manifest via de knop hieronder.
2. Meld je aan voor de mailinglijst onderaan de pagina.
3. Doneer eenmalig via de "Help mee!"-knop hieronder.

Samen krijgen we Masterplan 2034 terug op de tekentafel voor een plan dat past bij een woonwijk.`,
    tags: ["BurenVanArtis", "Participatie", "Plantagebuurt", "Amsterdam"],
    afbeelding: "https://picsum.photos/seed/samen18/1200/900",
    knoppen: [{ label: "Teken het Manifest", url: MANIFEST_URL }]
  },

  // ---------- POST 17 — Gemeente ----------
  {
    id: "2026-10-27",
    datum: "2026-10-27",
    titel: "Amsterdam wil onder 20 miljoen toeristen. Zit al op 26 miljoen. En de Plantagebuurt moet meer aan?",
    tekst:
`Je woont hier omdat de Plantagebuurt geen Museumplein is. Onthoud dat als je in Masterplan 2034 leest over meer bezoekers, meer horeca, meer kantoor — allemaal met gemeentelijke akkoorden.

Amsterdam heeft zelf een bovengrens vastgesteld: 20 miljoen toeristen per jaar. Vorig jaar zat de stad al op 26 miljoen. Tegelijkertijd wordt het masterplan van Artis stap voor stap doorgezet — bestemmingsplannen worden aangepast, "tijdelijke" vergunningen van tien jaar worden verleend, hoogte- en massanormen worden opgerekt.

Artis bouwt niet op een eiland. Ze bouwen in ónze stad, midden in een woonwijk. Wij vragen de gemeente om haar rol als toezichthouder serieus te nemen: toets kritisch, houd vast aan de eigen bovengrenzen, bescherm de leefbaarheid.

Deel dit bericht met je stadsdeelbestuurder of gemeenteraadslid.`,
    tags: ["Amsterdam", "Stadsontwikkeling", "LeefbareStad", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/stopera17/1200/900",
    knoppen: []
  },

  // ---------- POST 16 — Participatie ----------
  {
    id: "2026-10-20",
    datum: "2026-10-20",
    titel: "De helft van de aanwezigen zag geen verbetering. Of vond het slechter.",
    tekst:
`Herinner je die keer dat een leidinggevende naar je mening vroeg en er niets mee deed? Dit voelt zo. Alleen dan op wijkschaal.

Artis heeft een extern bureau ingehuurd om het "participatieproces" rond Masterplan 2034 te leiden. De conclusie van dat bureau: "Artis heeft haar best gedaan." De aanwezigen op de laatste sessie hadden een andere ervaring — de helft zag geen verbetering, of vond het zelfs slechter geworden.

Echte participatie betekent dat je bereid bent de basis van het ontwerp aan te passen: de hoogte, de massa, de commerciële functies. Niet dat je een vrijwel afgerond plan presenteert en meepraten toestaat over de kleur van de bakstenen.

Was jij bij de bewonersavonden? Mail je ervaring naar ${CONTACT_EMAIL} — we bundelen de verhalen.`,
    tags: ["Participatie", "MasterplanArtis", "Plantagebuurt", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/grafiek16/1200/900",
    knoppen: []
  },

  // ---------- POST 15 — WKO ja, douches nee ----------
  {
    id: "2026-10-13",
    datum: "2026-10-13",
    titel: "Van het gas af? 100% steun. Personeelsdouches in datzelfde gebouw? Niet nodig.",
    tekst:
`Als jij thuis je cv-ketel vervangt door een warmtepomp, bouw je er dan een badkamer omheen? Waarom moet dat bij Artis wel?

De WKO-installatie in Masterplan 2034 zorgt ervoor dat Artis in 2030 van het gas af kan. Dat steunen we volledig. Wat we niet begrijpen: waarom er in datzelfde gebouw óók een personeelskantine, kleedruimtes en douches komen. Dát is de reden dat het gebouw 14 meter hoog moet worden.

We hebben concrete, uitgewerkte alternatieven aangedragen om die niet-technische functies elders in het park onder te brengen. Zonder verlies aan duurzaamheid. Mét een gebouw dat past bij de schaal van de kade.

Onderteken het Manifest — steun de WKO, verwerp de overbodige stapeling.`,
    tags: ["MasterplanArtis", "Entrepotdok", "LeefbareStad", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/weegschaal15/1200/900",
    knoppen: [{ label: "Teken het Manifest", url: MANIFEST_URL }]
  },

  // ---------- POST 14 — Groenwassen ----------
  {
    id: "2026-10-06",
    datum: "2026-10-06",
    titel: "\"Natuurinclusief.\" \"Groene daktuinen.\" 14 meter hoog. 74 meter lang.",
    tekst:
`Loop straks langs een muur van 4,5 verdieping hoog. Bekijk het klimplantje op de gevel. Vraag jezelf af of dit is wat er bedoeld wordt met "natuurinclusieve stad".

Het ontwerp van het Dienstengebouw uit Masterplan 2034 strooit met marketingtermen: natuurinclusief, Braziliaans metselwerk, groene daktuinen, inheemse beplanting. Onder al die woorden zit nog steeds een blok van 14 meter hoog en 74 meter lang dat de zon van de kade neemt.

Groen tegen een te hoog gebouw plakken maakt het niet passend voor de buurt. Onze vraag aan de gemeente: toets de plannen op massa, hoogte en impact — niet op adjectieven.

Deel dit bericht als je genoeg hebt van groenwas-marketing.`,
    tags: ["Entrepotdok", "MasterplanArtis", "Stadsontwikkeling", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/muur14/1200/900",
    knoppen: []
  },

  // ---------- POST 13 — 8-meter eis (Manifest) ----------
  {
    id: "2026-09-29",
    datum: "2026-09-29",
    titel: "Onze eis is één cijfer: 8 meter. Niet hoger.",
    tekst:
`Sta op je stoep en kijk omhoog. 8 meter is ongeveer 2,5 verdieping — de hoogte waar de historische panden op het Entrepotdok op zitten. 14 meter is 4,5 verdieping. Het verschil is: zon of geen zon.

Wij zijn niet tegen Artis en niet tegen verduurzaming. We eisen wel dat nieuwbouw op de erfgrenzen van het park de menselijke schaal respecteert. Vandaar één harde regel voor Masterplan 2034: maximaal 8 meter op de randen van het park.

Bij 8 meter blijft de kade zonovergoten en past de nieuwbouw bij de historische omgeving. De WKO-installatie kan op die hoogte — als de niet-technische functies (kantines, douches, kantoor) elders in het park worden ondergebracht. Dat is haalbaar; we hebben het uitgewerkt.

Onderteken het Manifest Behoud Plantagebuurt. Één cijfer, één harde regel, één eerlijke afspraak.`,
    tags: ["Plantagebuurt", "LeefbareStad", "MasterplanArtis", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/schaal13/1200/900",
    knoppen: [{ label: "Teken het Manifest", url: MANIFEST_URL }]
  },

  // ---------- POST 12 — Verkeersinfarct ----------
  {
    id: "2026-09-22",
    datum: "2026-09-22",
    titel: "Een nieuwe parkeergarage voor bezoekersgroei = auto's die onze wijk doorkruisen.",
    tekst:
`Denk aan die keer dat een verhuiswagen twintig minuten voor je huis stond omdat hij nergens kon draaien. Verhuiswagens komen incidenteel. Toeristenauto's straks dagelijks.

Masterplan 2034 combineert bezoekersgroei richting 2 miljoen met een nieuwe, grote parkeergarage aan de rand van het park. Elk verkeerskundig onderzoek laat zien dat parkeergarages verkeer aanzuigen — bezoekers die anders het OV zouden kiezen, kiezen bij een garage voor de auto. Precies wat je niet wilt in een 19e-eeuwse woonwijk.

Bij dat bezoekersverkeer komt nog het zware leveranciersverkeer voor de nieuwe horeca- en kantoorfuncties, en het reguliere bouwverkeer voor de bouwfases van het masterplan zelf.

Onze vraag: onafhankelijke contra-expertise op de verkeers- en parkeernormen — vóór de vergunningen onherroepelijk worden. Meld je aan onderaan de pagina voor updates over die stap.`,
    tags: ["Plantagebuurt", "Amsterdam", "LeefbareStad", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/verkeer12/1200/900",
    knoppen: []
  },

  // ---------- POST 11 — Salmplein 10 jaar ----------
  {
    id: "2026-09-15",
    datum: "2026-09-15",
    titel: "\"Tijdelijk\" horecapaviljoen op het Salmplein. Vergunning aangevraagd voor 10 jaar.",
    tekst:
`Onthoud dit woord: tijdelijk. Een kind dat in 2026 leert lezen, doet in 2036 eindexamen. Zo tijdelijk.

Naast de bouwstenen uit Masterplan 2034 vraagt Artis nu ook een "tijdelijke" vergunning aan voor een nieuw horecapaviljoen op het Salmplein — bij de entree. Voor tien jaar. Dit stond niet in de afspraken die eerder met de buurt zijn gemaakt.

De optelsom van deze aanvragen laat een patroon zien: het masterplan legt de grote infrastructuur vast, en de commerciële invulling wordt daarnaast stapsgewijs via losse vergunningen toegevoegd. Aan het eind is er van de oorspronkelijke afspraken weinig over.

Onze vraag aan de gemeente: houd vast aan wat afgesproken is. Toets "tijdelijke" vergunningen die tien jaar duren aan het strengere regime dat past bij hun feitelijke impact.`,
    tags: ["MasterplanArtis", "Amsterdam", "Plantagebuurt", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/salmplein11/1200/900",
    knoppen: []
  },

  // ---------- POST 10 — Pretpark vs dierenwelzijn ----------
  {
    id: "2026-09-08",
    datum: "2026-09-08",
    titel: "De Partij voor de Dieren waarschuwde het al: dit plan gaat over horeca en kantoren.",
    tekst:
`Denk aan de foto's van Artis uit je jeugd — of die van je ouders. Groen. Ruim. Dieren op de voorgrond. Blader nu door Masterplan 2034: rendering na rendering van gebouwen.

Zelfs de Partij voor de Dieren gaf een openbaar signaal: de plannen leunen sterk op commerciële horeca, kantoorruimtes en massale technische installaties, en veel minder op meer leefruimte voor de dieren zelf. Dat is precies waar wij als omwonenden ook op wijzen.

Een dierentuin die miljoenen aan subsidie krijgt voor natuureducatie en dierenwelzijn zou het beschikbare budget primair aan díe doelen moeten besteden. Niet aan gebouwen van 14 meter voor douches, kantines en kantoren.

Waar zou jíj de ruimte in Artis aan besteden — meer dieren, of meer horeca? Deel dit bericht als je het antwoord duidelijk vindt.`,
    tags: ["Artis", "MasterplanArtis", "BurenVanArtis", "LeefbareStad"],
    afbeelding: "https://picsum.photos/seed/dier10/1200/900",
    knoppen: []
  },

  // ---------- POST 9 — Dominosteen ----------
  {
    id: "2026-09-01",
    datum: "2026-09-01",
    titel: "Als het Dienstengebouw op 14 meter komt, ligt er een precedent voor de rest van het park.",
    tekst:
`Loop straks langs het huis waar je vroeger op kraamvisite kwam. Kijk naar de horizon boven het park. Straks staat daar een muur van 14 meter. Bij de volgende bouwlocatie: nóg een muur. Bij de derde: een vesting.

Het klopt niet dat het Dienstengebouw op zichzelf staat. Het is een bewuste eerste stap. Masterplan 2034 wijst langs de randen van het park nog meer bouwlocaties aan voor nieuwe kantoren, technische installaties en horecafuncties. Elke keer dat de gemeente vraagt of 14 meter écht nodig is, wijst Artis naar de vorige beslissing.

De eerste beslissing bepaalt de norm voor de tien jaar erna. Onder de 14 meter blijft de menselijke schaal intact. Erboven verdwijnt die — permanent.

Lees ons volledige bezwaarschrift en onderteken.`,
    tags: ["Entrepotdok", "MasterplanArtis", "Stadsontwikkeling", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/domino9/1200/900",
    knoppen: [{ label: "Lees en onderteken", url: MANIFEST_URL }]
  },

  // ---------- POST 8 — Horecaplein ----------
  {
    id: "2026-08-25",
    datum: "2026-08-25",
    titel: "Acht horecagelegenheden telt Artis nu al. Masterplan 2034 wil er meer.",
    tekst:
`Onthoud die keer dat je door Artis liep en iemand hoorde zeggen "waar zijn de dieren eigenlijk?". Straks weet je waarom.

In het masterplan worden gebouwen gerestaureerd en historische zichtlijnen hersteld — mooi. Maar bij bijna elke restauratie komt een nieuwe horecagelegenheid, een kantoorfunctie of een uitbreiding. De business case leunt zwaar op commerciële exploitatie: extra bezoekers, extra horeca, extra kantoor.

De NRC schreef laatst een opiniestuk over Eye, dat volgens de auteur te ver was doorgeslagen richting horeca-uitbating in plaats van film. De vergelijking is niet onterecht.

Artis krijgt bijna 19 miljoen euro gemeentesubsidie voor natuureducatie, natuurbehoud en maatschappelijk belang. Wij vragen de gemeente om de plannen strikt aan díe doelen te toetsen — niet aan het verdienmodel.`,
    tags: ["Artis", "MasterplanArtis", "Amsterdam", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/horeca8/1200/900",
    knoppen: []
  },

  // ---------- POST 7 — Schaduw op Entrepotdok ----------
  {
    id: "2026-08-18",
    datum: "2026-08-18",
    titel: "Vanaf 15:00 is de zon van de Entrepotdokkade. Structureel.",
    tekst:
`Warme dinsdagavond. Je haalt een broodje, zoekt een plek op de kade. Er is geen zon meer. Sinds vanmiddag niet.

Het geplande Dienstengebouw uit Masterplan 2034 wordt 74 meter lang en 14 meter hoog — een blok zo lang als een voetbalveld en zo hoog als een gebouw van 4,5 verdiepingen. In dat gebouw komt niet alleen de WKO-installatie, maar ook een personeelskantine, kleedruimtes en douches.

Wij hebben concreet voorgesteld die niet-technische functies elders in het park onder te brengen. Dan kan het gebouw lager. Eerst hoorden we "onhaalbaar", na wijzigingen in het masterplan blijkt het wél te kunnen. Toch beschouwt Artis het gesprek als gesloten. Half april vroegen we schriftelijk om heropening. We wachten nog steeds.

Onderteken ons Manifest en help ons de kade zonovergoten te houden.`,
    tags: ["Entrepotdok", "MasterplanArtis", "LeefbareStad", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/zon7/1200/900",
    knoppen: [{ label: "Teken het Manifest", url: MANIFEST_URL }]
  },

  // ---------- POST 6 — Galm / klankkast ----------
  {
    id: "2026-08-11",
    datum: "2026-08-11",
    titel: "Twee stenen muren aan het water werken als een klankkast. Vraag maar aan Aquartis.",
    tekst:
`Je zit op je balkon aan het Entrepotdok. Iemand roept twee bruggen verderop. Je hoort het alsof het naast je is. Zo klinkt straks de kade van leveranciersingang tot leeuwenverblijf.

Bewoners van Aquartis kennen het effect al: hun daktuin ligt tegenover een hoge stenen muur, en een gewoon gesprek is er lastig te voeren. Het geplande Dienstengebouw uit Masterplan 2034 plaatst een tweede muur, aan de overkant van het water. Precies zoals in Aquartis, maar dan langs een groot deel van de kade.

De akoestiek van boten, terrassen en verkeer op de kade zal daardoor sterk versterkt worden — waarneembaar op het hele Entrepotdok en in delen van de Kazernebuurt.

Onze vraag: een onafhankelijk akoestisch onderzoek voordat de bouw onherroepelijk is.`,
    tags: ["Entrepotdok", "LeefbareStad", "MasterplanArtis", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/kade6/1200/900",
    knoppen: []
  },

  // ---------- POST 5 — WKO mug (40 dB) ----------
  {
    id: "2026-08-04",
    datum: "2026-08-04",
    titel: "40 dB is wat 's nachts nog mag. Dat is exact de zoem van een mug.",
    tekst:
`Zomeravond. Raam open. Je hebt bijna slaap. En dan hoor je het — bzzzz. Alleen: deze mug zit niet in je slaapkamer. Hij zit in het WKO-gebouw van Artis. En hij vliegt nooit weg.

De warmte-koude-opslag die Artis in Masterplan 2034 wil bouwen, is een technische installatie van ongekende omvang: warmtepompen en compressoren die 24/7 draaien, zomer en winter. Wettelijk mag dat 's nachts niet boven 40 dB uitkomen op de erfgrens — precies de grens waarop een mug al irritant wordt.

Op informatieavonden vroegen buren om harde garanties. Een jaar later ontbreken die nog steeds. Wij vragen om meetgaranties in het masterplan, niet om beloften.

Verduurzaming steunen we volledig. Onbeschermde nachtrust is geen consequentie waar we aan willen wennen.`,
    tags: ["Plantagebuurt", "LeefbareStad", "MasterplanArtis", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/mug5/1200/900",
    knoppen: []
  },

  // ---------- POST 4 — Kalverstraat verkeer ----------
  {
    id: "2026-07-28",
    datum: "2026-07-28",
    titel: "Op een topdag straks: 3.000 auto's + 4.000 fietsen extra. Elke zomerdag.",
    tekst:
`Denk aan de laatste keer dat je je boodschappentas omhoog moest houden om langs een geparkeerde bakfiets te komen. Vermenigvuldig dat met vier.

Bij 10.000 bezoekers op een zomerse dag komt zo'n 30% met de auto (3.000 voertuigen die parkeerruimte zoeken) en 40% met de fiets (4.000 (bak)fietsen op stoepen waar we nu al niet langs komen). Masterplan 2034 lost dat op door een nieuwe grote parkeergarage aan de rand van het park te plannen — met precies de aanzuigende werking waarvoor we vrezen.

De Kalverstraat kan 60.000 bezoekers op een zaterdag verwerken omdat er brede stoepen zijn, geen voordeuren en geen bewoners. Wij hebben allebei niet.

Onze vraag: onafhankelijke contra-expertise op de verkeersparagraaf van Masterplan 2034. Meld je aan onderaan de pagina, dan hoor je wanneer we die stap zetten.`,
    tags: ["Plantagebuurt", "Amsterdam", "LeefbareStad", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/logistiek4/1200/900",
    knoppen: []
  },

  // ---------- POST 3 — 10.000 = dorp ----------
  {
    id: "2026-07-21",
    datum: "2026-07-21",
    titel: "10.000 mensen per dag door de Plantagebuurt. Dat is heel Monnickendam.",
    tekst:
`Bakfiets naar de crèche. Achter je een school. Voor je 10.000 mensen die de ingang zoeken. Dit is niet een enkele festival-zaterdag. Dit is dinsdag. En woensdag. En donderdag.

2 miljoen bezoekers per jaar, verdeeld over de zomermaanden, betekent op piekdagen zo'n 10.000 mensen door onze straten — twee uitverkochte AFAS Live's, dagelijks. Of: de complete populatie van Monnickendam die zich 's ochtends door je straat perst en 's avonds weer vertrekt.

Onze wijk is niet gebouwd op continue festivalstromen. Wat we missen in Masterplan 2034 is één cijfer: een harde bovengrens die bewijst dat Artis de omvang van het park en de leefbaarheid van de buurt echt serieus neemt.

Herken je dit? Geef een +1 en deel het bericht met één buur.`,
    tags: ["Plantagebuurt", "Amsterdam", "MasterplanArtis", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/dorp3/1200/900",
    knoppen: []
  },

  // ---------- POST 2 — Ruimte-paradox ----------
  {
    id: "2026-07-14",
    datum: "2026-07-14",
    titel: "Blijdorp: 26 hectare, 1,5 miljoen. Artis: 14 hectare, wil 2 miljoen.",
    tekst:
`Loop straks een blokje om je huis heen. Elke vierkante meter tussen jouw voordeur en het einde van je straat gaat straks meer bezoekers dragen dan Blijdorp — dat op de rand van de stad ligt, met eigen parkeerterreinen ter grootte van een half stadion.

Blijdorp is bijna twee keer zo groot als Artis en zit onder de 1,5 miljoen. De Efteling heeft 72 hectare bos en een eigen snelwegafslag voor 5,4 miljoen bezoekers. Wij hebben 14 hectare en 19e-eeuwse straatjes.

In Masterplan 2034 wordt de aanname van 2 miljoen bezoekers gebruikt om nieuwe hoogbouw, kantoren en horeca op de randen van het park te legitimeren. Als de aanname te ambitieus is, valt het hele bouwprogramma anders uit.

Ken jij nog iemand die om de hoek van Artis woont? Stuur ze dit bericht door.`,
    tags: ["Artis", "MasterplanArtis", "Stadsontwikkeling", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/vergelijk2/1200/900",
    knoppen: []
  },

  // ---------- POST 1 — 2 miljoen bezoekers ----------
  {
    id: "2026-07-07",
    datum: "2026-07-07",
    titel: "1.271.612 bezoekers in 2025. Masterplan 2034 mikt op 2 miljoen.",
    tekst:
`Denk terug aan de drukste zomerse zaterdag die je vorig jaar meemaakte in de Plantage Kerklaan. Fietsen tussen de bakfietsen, bezoekers met plattegronden op je stoep, een kruispunt dat niet meer opschoot. Vermenigvuldig die dag met 1,6. Dat is waar Masterplan 2034 op mikt.

Artis is 14 hectare — een postzegel, midden in een 19e-eeuwse woonwijk. Ter vergelijking: Beekse Bergen heeft 120 hectare voor 1,5 miljoen bezoekers. Onze wijk zit al opgescheept met de drukste dierentuin per vierkante meter van Nederland.

Het bekende argument dat "dynamic pricing" de piek zal spreiden, is in de hele attractiesector nooit bewezen. Ondertussen legitimeert het streefgetal van 2 miljoen wél de nieuwbouw, horeca en kantoorruimte op de randen van het park.

Wij vragen: leg in Masterplan 2034 een harde bovengrens vast die past bij 14 hectare in een woonwijk.`,
    tags: ["Artis", "MasterplanArtis", "Plantagebuurt", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/druk1/1200/900",
    knoppen: []
  }
];
