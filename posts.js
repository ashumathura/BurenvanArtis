// ============================================================
//  BUREN VAN ARTIS — BERICHTEN
//
//  Nieuw bericht? Voeg bovenaan een blok toe. Velden:
//    id       uniek, bijv. "2026-11-10" (nooit hergebruiken)
//    datum    publicatiedatum als "JJJJ-MM-DD" — weeknummer en
//             nederlandse datum worden automatisch getoond.
//             Berichten met een datum in de toekomst verschijnen
//             pas op die dag (zie TOON_GEPLANDE in index.html).
//    titel    kop van het bericht
//    tekst    alinea's, gescheiden met \n\n
//    tags     lijst hashtags, zonder #
//    afbeelding  pad in images/ of volledige URL (vervang de
//                picsum-placeholders door eigen foto's!)
//    youtube  in plaats van afbeelding: alleen de video-ID
//    knoppen  extra knoppen: { label, url }
//             (De vaste "Help mee!"-Tikkieknop en deelknoppen
//              staan automatisch onder elk bericht.)
// ============================================================

// Vervang deze door jullie echte links:
const MANIFEST_URL = "https://linktr.ee/VOORBEELD";        // Manifest Behoud Plantagebuurt
const CONTACT_EMAIL = "artis-omwonenden@proton.me";

const POSTS = [
  {
    id: "2026-11-03",
    datum: "2026-11-03",
    titel: "💪 Samen staan we sterk: doe mee! 🤝",
    tekst:
      "Individueel 'nee' schudden heeft geen zin, maar als verenigde buren kunnen we dit veranderen! Wij hebben het juridische playbook klaarliggen en we geven niet op. Wat kun jij doen?\n\n" +
      "1. Teken het manifest via de knop hieronder.\n\n" +
      "2. Blijf geïnformeerd: meld je onderaan deze pagina aan voor de mail, of stuur een bericht naar " + CONTACT_EMAIL + ".\n\n" +
      "3. Steun het procesfonds: juridische procedures en contra-expertises (voor o.a. verkeer en geluid) kosten geld. Elke bijdrage via de Help mee!-knop helpt ons de beste advocaten in te zetten.\n\n" +
      "Samen dwingen we Artis terug naar de tekentafel voor een plan dat écht past bij de buurt! 🌳",
    tags: ["BurenVanArtis", "Participatie", "Plantagebuurt", "Amsterdam"],
    afbeelding: "https://picsum.photos/seed/samen18/1200/675", // vervang: foto van buurtbewoners samen
    knoppen: [{ label: "Teken het manifest", url: MANIFEST_URL }]
  },
  {
    id: "2026-10-27",
    datum: "2026-10-27",
    titel: "🏛 Gemeente Amsterdam, bescherm de buurt! 🛑",
    tekst:
      "Artis bouwt niet op een eiland; ze bouwen in ónze stad, midden in een woonwijk. Toch lijkt de Gemeente Amsterdam (en de Commissie Omgevingskwaliteit) telkens vrolijk mee te buigen met de grootse plannen van het park.\n\n" +
      "Of het nu gaat om het aanpassen van bestemmingsplannen of het verlenen van \"tijdelijke\" vergunningen van 10 jaar voor horeca: de balans is zoek. Wij eisen dat de gemeente haar rol als toezichthouder serieus neemt. Toets deze bouwplannen kritisch en bescherm de leefbaarheid, in plaats van de rode loper uit te rollen voor commerciële groei.",
    tags: ["Amsterdam", "Stadsontwikkeling", "LeefbareStad", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/stopera17/1200/675", // vervang: foto van de Stopera / het stadhuis
    knoppen: []
  },
  {
    id: "2026-10-20",
    datum: "2026-10-20",
    titel: "🗣 Participatie of slechts een presentatie? 📑",
    tekst:
      "Artis huurde een bureau in om het \"participatieproces\" te leiden. Hun conclusie? \"Artis heeft haar best gedaan.\"\n\n" +
      "Maar laten we eerlijk zijn: naar onze grootste zorgen – de enorme hoogte en massa van het gebouw op de kade – is níét geluisterd. Van de aanwezigen bij de laatste sessie zag de helft geen verbetering of vond het zelfs slechter geworden. Echte participatie betekent dat je sámen ontwerpt en de basis durft aan te passen (de hoogte), in plaats van dat je een kant-en-klaar plan presenteert en de buurt alleen mag meepraten over de kleur van de bakstenen.\n\n" +
      "Was jij bij de bewonersavonden? Voelde jij je gehoord? Mail ons via " + CONTACT_EMAIL + ".",
    tags: ["Participatie", "MasterplanArtis", "Plantagebuurt", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/grafiek16/1200/675", // vervang: grafiekje uit het participatierapport
    knoppen: []
  },
  {
    id: "2026-10-13",
    datum: "2026-10-13",
    titel: "♻️ Verduurzamen? Ja! Douches bouwen in onze zon? Nee! 🚿",
    tekst:
      "Artis wil in 2030 van het gas af. Daarvoor is een WKO (warmte/koude-opslag) nodig. Wij steunen die verduurzaming 100%!\n\n" +
      "Maar... Artis stopt in datzelfde gigantische WKO-gebouw óók een nieuwe kantine, kleedruimtes en douches voor personeel. Dát is de reden dat het gebouw 14 meter hoog moet worden. Wij hebben namens de buurt prima, haalbare alternatieven aangedragen om die douches en kantine ergens anders in het park te plaatsen. Zo kan het WKO-gebouw veel lager blijven! Waarom weigert Artis dit te heroverwegen?\n\n" +
      "Duurzaamheid mag geen excuus zijn voor overbodige nieuwbouw!",
    tags: ["MasterplanArtis", "Entrepotdok", "LeefbareStad", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/weegschaal15/1200/675", // vervang: infographic WKO vs. douches/kantine
    knoppen: []
  },
  {
    id: "2026-10-06",
    datum: "2026-10-06",
    titel: "🌿 Groenwassen of echte natuur? 🤔",
    tekst:
      "In de ontwerpplannen van het nieuwe Dienstengebouw strooit Artis met prachtige termen: \"natuurinclusief\", \"Braziliaans metselwerk\", \"groene daktuinen\" en \"inheemse beplanting\". Klinkt fantastisch, toch?\n\n" +
      "Maar laat je niet afleiden: onder al dat metselwerk en die klimplantjes schuilt nog steeds een massieve, stenen klomp van 14 meter hoog en 74 meter lang die de zon wegneemt van de kade. Een beetje groen tegen een te hoge muur plakken, maakt het gebouw niet ineens passend voor de buurt.\n\n" +
      "Trap jij in deze 'groenwasserij'?",
    tags: ["Entrepotdok", "MasterplanArtis", "Stadsontwikkeling", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/muur14/1200/675", // vervang: carrousel quote 'Natuurinclusief' + foto blinde muur
    knoppen: []
  },
  {
    id: "2026-09-29",
    datum: "2026-09-29",
    titel: "📏 Onze eis: behoud de menselijke schaal (max 8 meter) 🏡",
    tekst:
      "Wij zijn niet tegen Artis en we zijn niet tegen verduurzaming. Maar we eisen een leefbare buurt! Samen met buren hebben we het 'Manifest Behoud Plantagebuurt' opgesteld. Eén van onze snoeiharde maar redelijke eisen:\n\n" +
      "Trek een grens bij nieuwbouw op de erfgrenzen van het park: maximaal 8 meter hoog. De plannen voor 14 meter hoge gebouwen aan het water slaan de menselijke schaal volledig dood. Tot 8 meter blijft de kade zonnig, leefbaar en in balans met de historische omgeving.\n\n" +
      "Teken het manifest en eis samen met ons die menselijke schaal terug!",
    tags: ["Plantagebuurt", "LeefbareStad", "MasterplanArtis", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/schaal13/1200/675", // vervang: infographic 14m vs. 8m met poppetje
    knoppen: [{ label: "Teken het manifest", url: MANIFEST_URL }]
  },
  {
    id: "2026-09-22",
    datum: "2026-09-22",
    titel: "🚚 Het verkeersinfarct dreigt... 🚲",
    tekst:
      "Met de komst van het nieuwe, massale Dienstengebouw, de verwachte groei naar 2 miljoen bezoekers én extra kantoor- en horecafuncties, houden we ons hart vast voor het verkeer.\n\n" +
      "De Plantagebuurt zit nu op topdagen al muurvast. Fietsen, bakfietsen, auto's en zwaar leveranciersverkeer moeten straks allemaal door onze smalle straten. Waar moeten we dit laten? Wij eisen een onafhankelijke contra-expertise naar de verkeersdruk en parkeernormen. De wijk mag niet verstopt raken door de expansiedrift van één park.\n\n" +
      "Heb jij nu al last van de parkeer- en verkeersdrukte? Mail je ervaring naar " + CONTACT_EMAIL + "!",
    tags: ["Plantagebuurt", "Amsterdam", "LeefbareStad", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/verkeer12/1200/675", // vervang: foto geblokkeerde straat door bouwverkeer
    knoppen: []
  },
  {
    id: "2026-09-15",
    datum: "2026-09-15",
    titel: "☕ 10 jaar 'tijdelijk'... hoe dan?! ⏳",
    tekst:
      "Achter de schermen gebeurt er meer. Wist je dat Artis aan de entreezone (Salmplein) een nieuw, groot horecapunt wil realiseren? Dit stond helemáál niet in de afspraken over het masterplan!\n\n" +
      "Artis probeert dit erdoor te krijgen als een \"tijdelijk\" project. Maar let op: de vergunning is aangevraagd voor maar liefst 10 jaar! Tien jaar is een decennium; dat is voor omwonenden niet tijdelijk, maar een permanente verandering van de buurt en extra drukte. Wij vinden dit in strijd met de eerdere afspraken.\n\n" +
      "Een afspraak is een afspraak. Steun onze oproep aan de gemeente om de regels te handhaven!",
    tags: ["MasterplanArtis", "Amsterdam", "Plantagebuurt", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/salmplein11/1200/675", // vervang: foto entreezone/Salmplein met tekst 'Tijdelijk = 10 jaar?'
    knoppen: []
  },
  {
    id: "2026-09-08",
    datum: "2026-09-08",
    titel: "🐘 Dierentuin of pretpark? 🎡",
    tekst:
      "We houden allemaal van de dieren in Artis. Maar draait het nieuwe masterplan nog wel om hén?\n\n" +
      "Zelfs de Partij voor de Dieren waarschuwde al: de nieuwe plannen lijken te veel gericht op commerciële horeca, kantoorruimtes en massale techniek, in plaats van op het verbeteren van de leefruimte voor de dieren zelf. Een dierentuin moet primair draaien om dierenwelzijn en natuureducatie, niet om het maximaliseren van winst per vierkante meter.\n\n" +
      "Vind jij ook dat de ruimte in Artis naar de dieren moet gaan in plaats van naar kantoren en mega-installaties?",
    tags: ["Artis", "MasterplanArtis", "Amsterdam", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/dier10/1200/675", // vervang: foto dier in Artis met bouwhekken/terrassen
    knoppen: []
  },
  {
    id: "2026-09-01",
    datum: "2026-09-01",
    titel: "🧱 Valt hier de eerste dominosteen? 🧱",
    tekst:
      "Artis wil beginnen met een 14 meter hoog en 74 meter lang Dienstengebouw aan de rand van het Entrepotdok. Waarom maken we ons daar zo druk om? Omdat dit de eerste dominosteen is!\n\n" +
      "Als we dit toestaan, schept dit een direct juridisch precedent voor álle volgende bouwplannen uit het Masterplan 2030 langs de andere randen van het park. Voor we het weten is Artis geen open, groen park meer dat ademt in de buurt, maar een vesting ommuurd door massieve gebouwen.\n\n" +
      "Laten we voorkomen dat onze open buurt een afgesloten vesting wordt. Lees ons hele bezwaarschrift via de knop hieronder!",
    tags: ["Entrepotdok", "MasterplanArtis", "Stadsontwikkeling", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/domino9/1200/675", // vervang: vallende dominosteen 'De eerste steen...?'
    knoppen: [{ label: "Lees het bezwaarschrift", url: MANIFEST_URL }]
  },
  {
    id: "2026-08-25",
    datum: "2026-08-25",
    titel: "🍔 Natuurpark of horecaplein? ☕",
    tekst:
      "In een opinieartikel in de NRC stond laatst dat filmmuseum Eye te weinig aan de 'core-business' (film) deed, en te veel aan het uitbaten van horeca. Gaat Artis straks ook die kant op?\n\n" +
      "In de nieuwe plannen worden gebouwen gerestaureerd en historische zichtlijnen hersteld. Prachtig! Maar deze restauratie gaat bijna steeds gepaard met de verhoging van gebouwen. Bovendien is er in zowat ieder plan sprake van een nieuwe horecagelegenheid.\n\n" +
      "Artis wordt ruim gesubsidieerd door de gemeente voor natuureducatie, maatschappelijk belang en natuurbehoud. Wat ons betreft wordt de gemeente strikter in het toetsen van de plannen aan díe belangrijke doelen. Zodat Artis het groene, educatieve hart van Amsterdam blijft!",
    tags: ["Artis", "Amsterdam", "MasterplanArtis", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/horeca8/1200/675", // vervang: screenshot krantenartikel (NRC over Eye)
    knoppen: []
  },
  {
    id: "2026-08-18",
    datum: "2026-08-18",
    titel: "☀️ Zonlicht of schaduw op het Entrepotdok? 🧱",
    tekst:
      "Op een zonnige namiddag zitten Amsterdammers heerlijk op de Entrepotdokkade met een broodje of een pizza. Maar met het geplande Dienstengebouw aan de overkant van het water, zou hier straks alleen maar schaduw zijn.\n\n" +
      "Dit gebouw wordt namelijk 14 meter hoog en zo'n 74 meter lang! Daarmee is de kade volgebouwd. Artis wil in dit enorme gebouw niet alleen de WKO plaatsen, maar ook een kantine en douches.\n\n" +
      "Als buren hebben we constructieve alternatieven aangedragen voor deze niet-WKO-zaken, waardoor het gebouw lager kan worden. Eerst was dit 'onhaalbaar', maar door wijzigingen in het masterplan kán dit nu wel! Toch beschouwt Artis het gesprek als gesloten. Wij hebben half april schriftelijk verzocht om met ons weer om tafel te gaan. We hopen snel op een open gesprek!",
    tags: ["Entrepotdok", "MasterplanArtis", "LeefbareStad", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/zon7/1200/675", // vervang: carrousel zonnige kade + illustratie 14m schaduwlijn
    knoppen: []
  },
  {
    id: "2026-08-11",
    datum: "2026-08-11",
    titel: "🗣 Hallo... hallo... het galm-effect op het water 🌊",
    tekst:
      "Wist je dat stenen muren die tegenover elkaar liggen werken als een klankkast? Geluid wordt weerkaatst en versterkt. Bewoners van Aquartis weten hier helaas alles van; een persoonlijk gesprek voeren in de daktuin is daar lastig.\n\n" +
      "De realisering van het door Artis geplande Dienstengebouw veroorzaakt ook zo'n klankkast. Van de leveranciersingang tot aan het leeuwenverblijf staan er dan aan weerskanten van het water stenen muren. Het geluid van boten en de kade zal daardoor enorm versterkt worden (het galm-effect).\n\n" +
      "Naar verwachting zal dit op het hele Entrepotdok en in een deel van de Kazernebuurt waarneembaar zijn. Wij vragen Artis om garanties dat de geluidsoverlast voor de buurt hierdoor niet toeneemt.",
    tags: ["Entrepotdok", "LeefbareStad", "MasterplanArtis", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/kade6/1200/675", // vervang: foto hoge stenen muren aan het water
    knoppen: []
  },
  {
    id: "2026-08-04",
    datum: "2026-08-04",
    titel: "🦟 De bromtoon die nooit stopt... bzzzz 🙉",
    tekst:
      "Iedereen kent het: het zoemende geluid van een mug is niet per se luid, maar wel enorm irritant. Zeker als je in bed ligt en wilt slapen! Straks horen de buren van Artis zo'n geluid misschien continu.\n\n" +
      "De geplande WKO (warmte/koude-opslag) wordt een technische installatie van ongekende omvang. Denk aan warmtepompen en compressoren die continu zoemen of brommen, zomer en winter, dag en nacht. Wettelijk mag dit in de nacht niet meer zijn dan 40 dB op de erfgrens.\n\n" +
      "Tijdens informatieavonden uitten omwonenden hun zorgen, maar Artis kon bij doorvragen geen concrete geruststelling bieden. Nu, een jaar later, ontbreekt die geruststelling nog steeds. Als buren willen we op feiten gebaseerde toezeggingen dat dit binnen de wettelijke grenzen blijft.",
    tags: ["Plantagebuurt", "LeefbareStad", "MasterplanArtis", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/mug5/1200/675", // vervang: de afbeelding van de getekende mug
    knoppen: []
  },
  {
    id: "2026-07-28",
    datum: "2026-07-28",
    titel: "🚲 De Kalverstraat van Oost: een logistieke nachtmerrie 🚗",
    tekst:
      "Wat gebeurt er als er op een zomerse dag 10.000 mensen naar Artis komen? Laten we even realistisch rekenen over het vervoer door onze wijk:\n\n" +
      "🚙 Stel dat 'maar' 30% met de auto komt: dat zijn 3.000 extra auto's per dag die zich door onze straten wringen, op zoek naar een plekje in de geplande nieuwe parkeergarage.\n\n" +
      "🚲 Stel dat 40% met de fiets komt: dat zijn 4.000 extra (bak)fietsen die ergens op onze nu al overvolle stoepen gedumpt moeten worden.\n\n" +
      "🛍 De nieuwe Kalverstraat? Op een extreem drukke zaterdag lopen er 60.000 tot 80.000 mensen door de Kalverstraat. Maar: het centrum is speciaal ingericht met brede looproutes, treinstations en géén woonstoepen. De Plantage Kerklaan krijgt straks de drukte van een kleine Kalverstraat, maar dan op stoepen waar we ook nog bomen, voordeuren en onze eigen fietsen hebben staan.\n\n" +
      "Dit is onhoudbaar. Help ons het verkeersinfarct te voorkomen en sluit je aan bij Buren van Artis!",
    tags: ["Plantagebuurt", "Amsterdam", "Stadsontwikkeling", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/logistiek4/1200/675", // vervang: infographic mintgroene autootjes en fietsen
    knoppen: []
  },
  {
    id: "2026-07-21",
    datum: "2026-07-21",
    titel: "🎤 Een compleet dorp in onze achtertuin... elke dag weer! 🏘",
    tekst:
      "Als Artis de ambitie van 2 miljoen bezoekers doorzet, betekent dat in de zomermaanden zo'n 10.000 bezoekers per dag. Dat is lastig voor te stellen, totdat je het zo bekijkt:\n\n" +
      "🎸 2x een uitverkochte AFAS Live: de AFAS Live (voorheen HMH) trekt 6.000 mensen per concert. 10.000 bezoekers in Artis betekent dat we bíjna twee volledige uitverkochte concertzalen door onze straten krijgen. Dag in, dag uit.\n\n" +
      "🏘 Het dorp Laren of Monnickendam verhuist: 10.000 mensen is de complete populatie van een heel dorp! Stel je voor dat elke man, vrouw en kind uit Laren zich 's ochtends door de Plantagebuurt perst, en 's avonds weer vertrekt. Iedere. Dag. Weer.\n\n" +
      "Onze woonwijk is hier simpelweg niet op gebouwd. Hoe ervaar jij de drukte op dit moment al? Laat het ons weten via " + CONTACT_EMAIL + "!",
    tags: ["Plantagebuurt", "Amsterdam", "MasterplanArtis", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/dorp3/1200/675", // vervang: carrousel concertzaal + dorp
    knoppen: []
  },
  {
    id: "2026-07-14",
    datum: "2026-07-14",
    titel: "🐘 Proppen op de vierkante meter: Artis vs. de rest 🎢",
    tekst:
      "Artis wil in het nieuwe masterplan groeien naar 2 miljoen bezoekers per jaar. Klinkt als een getal, maar wat betekent dit in de praktijk? Laten we het vergelijken:\n\n" +
      "🦒 Diergaarde Blijdorp (Rotterdam): Blijdorp is 26 hectare groot, ligt nét buiten het centrum en heeft gigantische eigen parkeerterreinen. Toch trekken zij 'slechts' 1,5 miljoen bezoekers. Artis is maar 14 hectare groot en ligt midden in onze historische woonwijk, maar wil dus een half miljoen bezoekers méér trekken dan de grootste dierentuin van Nederland!\n\n" +
      "🎡 De Efteling: het grootste pretpark van de Benelux trekt zo'n 5,4 miljoen bezoekers, weggestopt in 72 hectare bos met een eigen snelwegafslag. Artis wil qua bezoekers ruim 40% van de Efteling evenaren... maar dan met de infrastructuur van onze 19e-eeuwse straatjes.\n\n" +
      "Onze buurt is geen pretpark. Teken ons manifest voor een stop op de ongeremde schaalvergroting!",
    tags: ["Artis", "MasterplanArtis", "Stadsontwikkeling", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/vergelijk2/1200/675", // vervang: carrousel Artis vs. Blijdorp / Efteling (wit + mintgroen)
    knoppen: [{ label: "Teken het manifest", url: MANIFEST_URL }]
  },
  {
    id: "2026-07-07",
    datum: "2026-07-07",
    titel: "📈 Druk, drukker, drukst: de balans in onze buurt 🚲",
    tekst:
      "Bij het presenteren van het nieuwe masterplan had Artis het over een streefgetal van maar liefst 2 miljoen bezoekers. Ter vergelijking: in 2025 waren er 1.271.612 bezoekers in Artis. Onze prachtige buurt schrok enorm van deze potentiële groei, want het is op sommige dagen nu al zo druk in de Plantage Kerklaan!\n\n" +
      "We snappen dat de exploitatie een dure business is. Een volwassene betaalt nu €30,- en een kind €27,50. Gelukkig krijgt Artis flinke steun: in 2021 kregen ze voor vijf jaar bijna 19 miljoen euro subsidie van de gemeente, en voor het Aquarium is 50 miljoen opgehaald bij diverse partijen.\n\n" +
      "Artis heeft het getal van 2 miljoen inmiddels gerelativeerd. Maar wij buren vragen ons af: is dat streefgetal écht bijgesteld, of blijft het boven de markt hangen?",
    tags: ["Artis", "Plantagebuurt", "MasterplanArtis", "BurenVanArtis"],
    afbeelding: "https://picsum.photos/seed/druk1/1200/675", // vervang: foto van drukke Plantage Kerklaan met (bak)fietsen
    knoppen: []
  }
];
