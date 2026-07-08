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

const MANIFEST_URL = "https://linktr.ee/VOORBEELD";  // Manifest / Linktree
const CONTACT_EMAIL = "iksteun@burenvanartis.nl";

const POSTS = [

  // ---------- POST 18 (nieuwste) — Doe mee ----------
  {
    id: "2026-11-03",
    datum: "2026-11-03",
    titel: "Wat één huishouden niet kan, kunnen 240 huishoudens wél. Maar dan moet je nu meedoen.",
    tekst:
`Als jij vandaag niets doet, ligt de eerste vergunning voor Masterplan 2034 er over enkele maanden. Dan wordt de eerste steen gemetseld voor 14 meter aan onze kade. En als die er staat, staat hij er honderd jaar. Onze kinderen zullen ons vragen waarom we het lieten gebeuren.

Nu kan het nog. Als 100 buren nu tekenen, ligt er een juridisch obstakel dat Artis terug naar de tafel dwingt. Als 240 huishoudens €15 doneren, kunnen we een onafhankelijke verkeers-contra-expertise financieren die de gemeente niet kan negeren.

Dit is wat we hebben: het juridische playbook ligt klaar. Manifest, bezwaarschriften, contra-expertises. We geven niet op.

Dit is wat we nodig hebben: jou. Drie stappen. Kies wat past.

1. Onderteken het Manifest via de knop hieronder.
2. Meld je aan voor de mailinglijst onderaan de pagina.
3. Doneer via de "Help mee!"-knop hieronder.

Samen krijgen we Masterplan 2034 terug op de tekentafel voor een plan dat past bij een woonwijk, niet bij een pretpark. Alleen: dan moet je nu meedoen. Straks is het niet meer terug te draaien.`,
    tags: ["BurenVanArtis", "Participatie", "Plantagebuurt", "Amsterdam"],
    afbeelding: "https://picsum.photos/seed/samen18/1200/900",
    knoppen: [{ label: "Teken het Manifest", url: MANIFEST_URL }]
  },

  // ---------- POST 17 — Gemeente ----------
  {
    id: "2026-10-27",
    datum: "2026-10-27",
    titel: "Amsterdam wil onder 20 miljoen toeristen. Zit al op 26 miljoen. En de Plantagebuurt moet er nog meer bij nemen?",
    tekst:
`Je woont hier omdat de Plantagebuurt geen Museumplein is. Masterplan 2034 verandert dat in tien jaar tijd — met gemeentelijke akkoorden erbij.

Amsterdam heeft een eigen bovengrens: 20 miljoen toeristen per jaar. Vorig jaar zat de stad op 26 miljoen. Ondertussen wordt het masterplan van Artis stap voor stap doorgezet: bestemmingsplannen aangepast, "tijdelijke" vergunningen van 10 jaar verleend, hoogtenormen opgerekt. De randen van het park worden volgebouwd met hoogbouw. Er komt een grotere parkeergarage. De horeca wordt uitgebreid, elke keer een tikje duurder. De business case leunt op één ding: nog méér bezoekers door onze wijk trekken.

Wat dat oplevert voor jou: extreme drukte, hulpdiensten die niet meer doorkomen, meer uitstoot, en een dierentuin die steeds onbereikbaarder wordt voor gewone Amsterdammers. €30 voor een volwassene, €27,50 voor een kind — reken maar uit wat een gezin betaalt.

Artis krijgt bijna 19 miljoen euro subsidie van díe gemeente. Voor natuureducatie en maatschappelijk belang. Niet voor commerciële expansie in een woonwijk.

Wij eisen dat de gemeente haar rol als toezichthouder serieus neemt. Deel dit bericht met je stadsdeelbestuurder of gemeenteraadslid. Zeg wat ze niet willen horen.`,
    tags: ["Amsterdam", "Stadsontwikkeling", "LeefbareStad", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/stopera17/1200/900",
    knoppen: []
  },

  // ---------- POST 16 — Participatie ----------
  {
    id: "2026-10-20",
    datum: "2026-10-20",
    titel: "Op de laatste bewonersavond zag de helft geen verbetering. Of vond het slechter. Toch gaat het door.",
    tekst:
`Herinner je die keer dat een leidinggevende naar je mening vroeg en er niets mee deed. Nu op wijkschaal. Nu permanent.

Artis heeft een extern bureau ingehuurd om het "participatieproces" rond Masterplan 2034 te leiden. Conclusie van dat bureau: "Artis heeft haar best gedaan." De aanwezigen op de laatste sessie hadden een andere ervaring — de helft zag geen verbetering, of vond het zelfs slechter geworden.

Dat is de definitie van schijnparticipatie: mensen laten meepraten over de kleur van de bakstenen, terwijl je de hoogte, de massa en de commerciële invulling al hebt vastgelegd. Ondertussen wordt het masterplan gewoon doorgezet. De hoogbouw op de randen komt eraan. De parkeergarage komt eraan. De duurdere horeca komt eraan. En als jouw kind straks vraagt waarom onze zonnige kade in de schaduw ligt, is het antwoord: "Omdat wij het lieten gebeuren."

Dit gebeurt zolang wij het toelaten. Zwijgen is een vorm van instemming — en Artis rekent daarop.

Was jij bij de bewonersavonden en werd je gehoord? Of niet? Mail je ervaring naar ${CONTACT_EMAIL}. We bundelen de verhalen tot een dossier dat de gemeente niet kan negeren.`,
    tags: ["Participatie", "MasterplanArtis", "Plantagebuurt", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/grafiek16/1200/900",
    knoppen: []
  },

  // ---------- POST 15 — WKO / douches (Manifest) ----------
  {
    id: "2026-10-13",
    datum: "2026-10-13",
    titel: "Van het gas af? 100% steun. Maar waarom moet er ook een personeelsdouche in dat gebouw?",
    tekst:
`Als jij thuis je cv-ketel vervangt door een warmtepomp, bouw je er dan een badkamer omheen? Waarom mag Artis dat wel — op jouw kade?

De WKO-installatie in Masterplan 2034 zorgt dat Artis in 2030 van het gas af kan. Die verduurzaming steunen we volledig. Maar in datzelfde gebouw komen óók een personeelskantine, kleedruimtes en douches. Dát is de reden dat het gebouw 14 meter hoog moet worden — 4,5 verdiepingen, over jouw kade, over jouw ontbijttafel, over jouw zomeravond.

Duurzaamheid wordt hier misbruikt als excuus voor een overmaat aan bouwvolume dat helemaal niets met duurzaamheid te maken heeft. En het schept precedent: als 14 meter hier mag, mag het overal op de randen van het park. Nog een gebouw. Nog een muur. Nog een stukje van onze wijk minder.

We hebben concrete alternatieven aangedragen: die niet-technische functies elders in het park onderbrengen. Gebouw kan lager. Zonder verlies aan duurzaamheid. Artis beschouwt het gesprek als gesloten. Wij niet.

Onderteken het Manifest. Steun de WKO, verwerp de sluipende hoogbouw op onze kade.`,
    tags: ["MasterplanArtis", "Entrepotdok", "LeefbareStad", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/weegschaal15/1200/900",
    knoppen: [{ label: "Teken het Manifest", url: MANIFEST_URL }]
  },

  // ---------- POST 14 — Groenwassen ----------
  {
    id: "2026-10-06",
    datum: "2026-10-06",
    titel: "\"Natuurinclusief.\" \"Groene daktuinen.\" 14 meter hoog. 74 meter lang. Wij trappen er niet in.",
    tekst:
`Loop straks langs een muur van 4,5 verdieping hoog. Bekijk het klimplantje op de gevel. Vraag jezelf af of dit is wat er wordt bedoeld met "natuurinclusieve stad" — of dat je voor de gek wordt gehouden.

Het ontwerp van het Dienstengebouw uit Masterplan 2034 strooit met marketingtermen: natuurinclusief, Braziliaans metselwerk, groene daktuinen, inheemse beplanting. Onder al die woorden zit nog steeds een blok van 14 meter hoog en 74 meter lang, dat de zon van de kade neemt. Aan de rand van het park. Waar honderden Amsterdammers vandaag komen om te ontsnappen aan een steeds dichter volgebouwde stad.

Dit is groenwasserij op hoog niveau: klimaat en natuur inzetten als retoriek, terwijl je een muur bouwt die precies het tegenovergestelde uitdrukt. En als hij er staat, gaat hij niet meer weg. Deze generatie besluit voor de volgende drie generaties.

Onze vraag aan de gemeente: toets de plannen op massa, hoogte en impact — op wat er straks écht staat. Niet op de adjectieven in de brochure.

Deel dit bericht als je genoeg hebt van groenwas-marketing die onze buurt kost.`,
    tags: ["Entrepotdok", "MasterplanArtis", "Stadsontwikkeling", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/muur14/1200/900",
    knoppen: []
  },

  // ---------- POST 13 — 8m eis (Manifest) ----------
  {
    id: "2026-09-29",
    datum: "2026-09-29",
    titel: "Onze eis is één cijfer: 8 meter. Niet hoger. Voor iedereen die hier over 20 jaar nog wil wonen.",
    tekst:
`Sta op je stoep en kijk omhoog. 8 meter is 2,5 verdieping — de hoogte van de historische panden op het Entrepotdok. 14 meter is 4,5 verdieping. Het verschil is: zon of geen zon. Ademen of ademnood. Historische wijk of stedelijk ravijn.

Wij zijn niet tegen Artis en niet tegen verduurzaming. Wij eisen wél dat nieuwbouw op de erfgrenzen van het park de menselijke schaal respecteert. Één harde regel voor Masterplan 2034: maximaal 8 meter op de randen van het park. Geen ingewikkelde onderhandelingen per gebouw. Eén cijfer.

Bij 8 meter blijft de kade zonovergoten en past de nieuwbouw bij de historische omgeving. De WKO-installatie past er ook onder — als de niet-technische functies (kantines, douches, kantoor) elders in het park worden ondergebracht. Dat is haalbaar; we hebben het uitgewerkt.

Als we deze grens niet nu vastleggen, komen er de volgende tien jaar nóg meer gebouwen van 14 meter langs de randen van het park. Precedentwerking heet dat — en die begint hier, met de eerste vergunning die er nu aankomt.

Onderteken het Manifest Behoud Plantagebuurt. Eén cijfer, één harde regel, één eerlijke afspraak.`,
    tags: ["Plantagebuurt", "LeefbareStad", "MasterplanArtis", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/schaal13/1200/900",
    knoppen: [{ label: "Teken het Manifest", url: MANIFEST_URL }]
  },

  // ---------- POST 12 — Verkeersinfarct ----------
  {
    id: "2026-09-22",
    datum: "2026-09-22",
    titel: "Een grotere parkeergarage voor bezoekersgroei = auto's die 24/7 onze wijk doorkruisen.",
    tekst:
`Het is een dinsdagochtend. Je fietst je zoon naar school over de Plantage Kerklaan. Voor je: een SUV met buitenlands kenteken schuin geparkeerd. Naast je: een leverancier die achteruit een steegje in probeert. Achter je: nog een auto die je bel niet hoort. Je zoon houdt zich stevig vast.

Dit is de wijk die Masterplan 2034 ons oplevert. De grotere parkeergarage aan de rand van het park is bewezen aanzuigend voor autoverkeer — bezoekers die anders het OV zouden kiezen, kiezen bij een garage voor de auto. Bij dat verkeer komt nog het zware leveranciersverkeer voor de nieuwe horeca- en kantoorfuncties.

De gevolgen zijn concreet en dagelijks: onveilige stoepen voor onze kinderen, meer fijnstof en NOx in de longen van bewoners, ambulances en brandweer die vastlopen in de drukte. En dat elk uur van elke dag dat het masterplan bezig is uit te rollen. Uitstoot ken je pas als je hem inademt.

Onze vraag: onafhankelijke contra-expertise op de verkeers- en parkeernormen, vóór de vergunningen onherroepelijk worden. Meld je aan onderaan de pagina zodat we jou kunnen bereiken op het moment dat het telt.`,
    tags: ["Plantagebuurt", "Amsterdam", "LeefbareStad", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/verkeer12/1200/900",
    knoppen: []
  },

  // ---------- POST 11 — Salmplein 10 jaar ----------
  {
    id: "2026-09-15",
    datum: "2026-09-15",
    titel: "\"Tijdelijk\" horecapaviljoen op het Salmplein. Vergunning aangevraagd voor 10 jaar. Zo tijdelijk als je basisschool.",
    tekst:
`Onthoud dit woord: tijdelijk. Een kind dat in 2026 leert lezen, doet in 2036 eindexamen. Zo tijdelijk. En binnen die tien jaar wordt "tijdelijk" gewoon "vast" — dat is het patroon in Amsterdam.

Naast de bouwstenen uit Masterplan 2034 vraagt Artis nu ook een "tijdelijke" vergunning aan voor een nieuw, groot horecapaviljoen op het Salmplein. Bij de entree. Voor tien jaar. Dit stond niet in de afspraken die eerder met de buurt zijn gemaakt.

Zie het patroon: het masterplan legt de grote infrastructuur vast — hoogbouw op de randen van het park, een grotere parkeergarage — en de commerciële invulling wordt daarnaast stapsgewijs via losse vergunningen toegevoegd. Steeds duurdere horeca. Steeds meer bezoekers. Steeds minder groen. Aan het eind is er van de oorspronkelijke afspraken weinig over — en van onze buurt ook.

Ondertussen wordt Artis voor gewone Amsterdammers steeds onbereikbaarder: €30 voor een volwassene, €27,50 voor een kind. Voor wie is deze uitbreiding eigenlijk bedoeld? Niet voor jouw buurvrouw met AOW.

Onze eis aan de gemeente: handhaaf. Een afspraak is een afspraak.`,
    tags: ["MasterplanArtis", "Amsterdam", "Plantagebuurt", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/salmplein11/1200/900",
    knoppen: []
  },

  // ---------- POST 10 — Pretpark vs dierenwelzijn ----------
  {
    id: "2026-09-08",
    datum: "2026-09-08",
    titel: "De Partij voor de Dieren waarschuwde het al: dit plan gaat over horeca, kantoren en installaties. Niet over dieren.",
    tekst:
`Denk aan de foto's van Artis uit je jeugd — of die van je ouders. Groen. Ruim. Dieren op de voorgrond. Blader nu door Masterplan 2034: rendering na rendering van gebouwen. Kantoorruimte. Duurdere horeca. Nauwelijks meer dierenverblijven.

Zelfs de Partij voor de Dieren gaf een openbaar signaal: de plannen leunen sterk op commerciële horeca, kantoorruimtes en massale technische installaties, en veel minder op meer leefruimte voor de dieren zelf. Dat is precies waar wij als omwonenden ook op wijzen.

Een dierentuin die miljoenen aan gemeentesubsidie krijgt voor natuureducatie en dierenwelzijn zou dat geld primair aan díe doelen moeten besteden. Niet aan gebouwen van 14 meter voor douches, kantines en kantoren. Niet aan een horecapaviljoen op het Salmplein dat er onder de noemer "tijdelijk" voor tien jaar bij komt. Niet aan toegangsprijzen waarvoor een gemiddeld Amsterdams gezin drie keer moet nadenken voor het gaat.

Waar zou jij de ruimte in Artis aan besteden — meer dieren, of meer horeca? Aan een dierentuin voor iedereen, of aan een attractiepark voor wie het kan betalen?

Deel dit bericht met iemand die vroeger nog gewoon naar Artis ging. Vraag hoe zij het nu ervaren.`,
    tags: ["Artis", "MasterplanArtis", "BurenVanArtis", "LeefbareStad"],
    afbeelding: "https://picsum.photos/seed/dier10/1200/900",
    knoppen: []
  },

  // ---------- POST 9 — Dominosteen (Manifest) ----------
  {
    id: "2026-09-01",
    datum: "2026-09-01",
    titel: "Als het Dienstengebouw op 14 meter komt, ligt er een precedent voor de rest van het park. Voor 100 jaar.",
    tekst:
`Loop straks langs het huis waar je vroeger op kraamvisite kwam. Kijk naar de horizon boven het park. Straks staat daar een muur van 14 meter. Bij de volgende bouwlocatie: nog een muur. Bij de derde: een vesting. Bij de vijfde: onze buurt is niet meer te herkennen.

Het klopt niet dat het Dienstengebouw op zichzelf staat. Het is een bewuste eerste steen. Masterplan 2034 wijst langs de randen van het park nog meer bouwlocaties aan voor nieuwe kantoren, technische installaties en horecafuncties. Elke keer dat de gemeente vraagt of 14 meter écht nodig is, wijst Artis naar de vorige beslissing: "Dat mocht toch ook."

De eerste beslissing bepaalt de norm voor de tien jaar erna. Onder de 14 meter blijft de menselijke schaal intact. Erboven verdwijnt die — permanent. En dan hebben we onze 19e-eeuwse wijk verruild voor een vesting, gebouwd voor toeristen die hier nooit gaan wonen.

Nu is het moment. Straks is het niet meer terug te draaien. Wij zijn de laatste generatie die het nog kan tegenhouden.

Lees ons volledige bezwaarschrift en onderteken.`,
    tags: ["Entrepotdok", "MasterplanArtis", "Stadsontwikkeling", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/domino9/1200/900",
    knoppen: [{ label: "Lees en onderteken", url: MANIFEST_URL }]
  },

  // ---------- POST 8 — Horecaplein ----------
  {
    id: "2026-08-25",
    datum: "2026-08-25",
    titel: "Acht horecagelegenheden telt Artis nu al. Masterplan 2034 wil er meer. Voor €30 per volwassene, uiteraard.",
    tekst:
`Onthoud die keer dat je door Artis liep en iemand hoorde zeggen: "waar zijn de dieren eigenlijk?". Straks weet je waarom.

In Masterplan 2034 worden gebouwen gerestaureerd en historische zichtlijnen hersteld — mooi. Maar bij bijna elke restauratie komt een nieuwe horecagelegenheid, een kantoorfunctie of een uitbreiding. De business case van Artis leunt zwaar op commerciële exploitatie: extra bezoekers (2 miljoen als streefdoel), extra dure horeca, extra kantoor. Een dierentuin die zichzelf steeds meer als attractiepark positioneert.

De NRC schreef laatst een opiniestuk over Eye, dat volgens de auteur te ver was doorgeslagen richting horeca-uitbating in plaats van film. De vergelijking is niet onterecht. Alleen: Eye ligt niet in een woonwijk. Artis wel — en de horecaprijzen die daarbij horen, sluiten Amsterdammers met een gewone portemonnee uit. Eerst uit Artis, straks uit hun eigen buurt.

Ondertussen betalen jij en je buren via belasting mee: Artis krijgt bijna 19 miljoen euro gemeentesubsidie voor natuureducatie, natuurbehoud en maatschappelijk belang.

Wij eisen dat de gemeente de plannen strikt aan díe doelen toetst — niet aan het verdienmodel dat ons zelf buitensluit.`,
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

Het Entrepotdok is een van de laatste gratis, zonovergoten plekken in Amsterdam waar je nog gewoon kunt zitten. Voor jongeren met een klein budget. Voor gezinnen zonder tuin. Voor iedereen die zich Artis niet kan veroorloven. Precies díe plek gaat Masterplan 2034 wegnemen.

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

Bewoners van Aquartis kennen het effect al: hun daktuin ligt tegenover een hoge stenen muur, en een gewoon gesprek is er lastig te voeren. Het geplande Dienstengebouw uit Masterplan 2034 plaatst een tweede muur, aan de overkant van het water. Precies zoals in Aquartis — maar dan langs een groot deel van de kade. Van de leveranciersingang tot het leeuwenverblijf.

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

De warmte-koude-opslag die Artis in Masterplan 2034 wil bouwen, is een technische installatie van ongekende omvang: warmtepompen en compressoren die 24/7 draaien, zomer en winter. Wettelijk mag dat 's nachts niet boven 40 dB uitkomen op de erfgrens — precies de grens waarop een mug al irritant wordt. En let op: dat is de wettelijke bovengrens, niet het beloofde niveau.

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

Bij 10.000 bezoekers op een zomerse dag komt zo'n 30% met de auto (3.000 voertuigen die parkeerruimte zoeken) en 40% met de fiets (4.000 (bak)fietsen op stoepen waar we nu al niet langs komen). Masterplan 2034 lost dat op door een grotere parkeergarage aan de rand van het park te plannen — met precies de aanzuigende werking waarvoor we vrezen.

Meer auto's = meer uitstoot = meer fijnstof in de longen van onze kinderen. Meer opstoppingen = hulpdiensten die vastlopen. Onze stoepen worden dagelijkse hindernisbanen, zeker voor mensen die minder mobiel zijn.

De Kalverstraat kan 60.000 bezoekers op een zaterdag verwerken omdat er brede stoepen zijn, geen voordeuren, geen bewoners. Wij hebben allebei niet.

Onze vraag: onafhankelijke contra-expertise op de verkeersparagraaf van Masterplan 2034. Meld je aan onderaan de pagina — dan hoor je wanneer we die stap zetten.`,
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

Onze wijk is niet gebouwd op continue festivalstromen. Wat we missen in Masterplan 2034 is één cijfer: een harde bovengrens voor bezoekers. Een cijfer dat past bij 14 hectare in een woonwijk.

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

In Masterplan 2034 wordt de aanname van 2 miljoen bezoekers gebruikt om hoogbouw op de randen van het park, een grotere parkeergarage en meer horeca te legitimeren. Als de aanname te ambitieus is, valt het hele bouwprogramma anders uit. Als de aanname blijft, valt onze buurt anders uit: viezere lucht, hulpdiensten die niet doorkomen, prijzen die de gewone Amsterdammer buitensluiten.

Ken jij iemand die om de hoek van Artis woont, of vroeger woonde? Stuur ze dit bericht door. Iedereen moet weten wat er aankomt. Zwijgen kost ons de buurt.`,
    tags: ["Artis", "MasterplanArtis", "Stadsontwikkeling", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/vergelijk2/1200/900",
    knoppen: []
  },

  // ---------- POST 1 (oudste) — 2M bezoekers ----------
  {
    id: "2026-07-07",
    datum: "2026-07-07",
    titel: "1.271.612 bezoekers in 2025. Masterplan 2034 mikt op 2 miljoen. Om de drukste dierentuin per m² van het land te worden.",
    tekst:
`Denk terug aan de drukste zomerse zaterdag die je vorig jaar meemaakte in de Plantage Kerklaan. Fietsen tussen de bakfietsen, bezoekers met plattegronden op je stoep, een kruispunt dat niet meer opschoot. Vermenigvuldig die dag met 1,6. Dagelijks, in de zomer. En elke dag krijgen we er meer stapels uitstoot bij van de auto's die op de nieuwe grotere parkeergarage afkomen.

Artis is 14 hectare — een postzegel, midden in een 19e-eeuwse woonwijk. Ter vergelijking: Beekse Bergen heeft 120 hectare voor 1,5 miljoen bezoekers. Onze wijk zit al opgescheept met de drukste dierentuin per vierkante meter van Nederland — en Masterplan 2034 wil daar bovenop.

Het argument dat "dynamic pricing" de piek zal spreiden, is in de hele attractiesector nooit bewezen. Wat het streefgetal van 2 miljoen wél doet: het legitimeert de hoogbouw op de randen van het park. De grotere parkeergarage. De duurdere horeca. Kortom: het legitimeert dat onze buurt wordt volgebouwd, dat de lucht viezer wordt, en dat Artis onbereikbaar wordt voor mensen met een gewone portemonnee.

Wij vragen: leg in Masterplan 2034 een harde bovengrens vast die past bij 14 hectare in een woonwijk. Niet 2 miljoen. En niet ten koste van deze buurt.`,
    tags: ["Artis", "MasterplanArtis", "Plantagebuurt", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/druk1/1200/900",
    knoppen: []
  }
];
