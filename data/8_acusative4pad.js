// data/1_usefulphrases.js
const vocab = [
  // Prepositions with 4th case
  {
    czech: "pro",
    english: "for",
    spanish: "para",
    german: "für"
  },
  {
    czech: "skrz",
    english: "through",
    spanish: "a través de",
    german: "durch"
  },
  {
    czech: "přes",
    english: "over",
    spanish: "encima",
    german: "über (over)"
  },

  // Prepositions with location/movement
  {
    czech: "mezi (+ pohyb)",
    english: "between",
    spanish: "entre",
    german: "zwischen (wohin)"
  },
  {
    czech: "na (+ pohyb)",
    english: "on (a surface)",
    spanish: "en (a superficie)",
    german: "auf (wohin)"
  },
  {
    czech: "nad (+ pohyb)",
    english: "above",
    spanish: "encima",
    german: "über (above) (wohin)"
  },
  {
    czech: "pod (+ pohyb)",
    english: "below, under",
    spanish: "bajo",
    german: "unter (wohin)"
  },
  {
    czech: "před (+ pohyb)",
    english: "in front, before",
    spanish: "antes",
    german: "vor (wohin)"
  },
  {
    czech: "za (+ pohyb)",
    english: "behind, after",
    spanish: "atrás",
    german: "hinter (wohin)"
  },

  // Main group words in 4th case
  {
    czech: "město -> město (centrum -> centra)",
    english: "city -> city (center -> centers)",
    spanish: "ciudad -> ciudad (centro -> centros)",
    german: "Stadt -> Stadt (Zentrum -> Zentren)"
  },
  {
    czech: "ženA -> ženU",
    english: "woman -> woman",
    spanish: "mujer -> mujer",
    german: "Frau -> Frau"
  },
  {
    czech: "růžE -> růžI",
    english: "rose -> rose",
    spanish: "rosa -> rosa",
    german: "Rose -> Rose"
  },
  {
    czech: "pán -> pánA",
    english: "man -> man",
    spanish: "hombre -> hombre",
    german: "Mann -> Mann"
  },
  {
    czech: "hrad -> hrad",
    english: "castle -> castle",
    spanish: "castillo -> castillo",
    german: "Burg -> Burg"
  },
  {
    czech: "muž -> mužE",
    english: "man -> man",
    spanish: "hombre -> hombre",
    german: "Mann -> Mann"
  },
  {
    czech: "stroj -> stroj",
    english: "machine -> machine",
    spanish: "máquina -> máquina",
    german: "Maschine -> Maschine"
  },

  // Example sentences with 4th case objects
  {
    czech: "Dám si kávu, lososa, pivo a vodu.",
    english: "I'll take a coffee, salmon, beer and water.",
    spanish: "Tomaré café, salmón, cerveza y agua.",
    german: "Ich nehme Kaffee, Lachs, Bier und Wasser."
  },
  {
    czech: "Eliška studuje češtinu.",
    english: "Eliška is studying Czech language.",
    spanish: "Eliška estudia checo.",
    german: "Eliška lernt Tschechisch."
  },
  {
    czech: "Eva má ráda Petra / Lukáše / Barboru.",
    english: "Eva likes Petr / Lukáš / Barbora.",
    spanish: "A Eva le gusta Peter / Lukáš / Barbora.",
    german: "Eva mag Peter / Lukáš / Barbora."
  },
  {
    czech: "Mám narozeniny, dělám oslavu.",
    english: "I have birthday, I do party.",
    spanish: "Es mi cumpleaños, lo estoy celebrando.",
    german: "Es ist mein Geburtstag, ich feiere."
  },
  {
    czech: "Petr schová dárek za skříň, pod postel, nebo nad knihovnu.",
    english: "Petr hides the present behind the wardrobe, under the bed, or above the bookshelf.",
    spanish: "Petr esconderá el regalo detrás del armario, debajo de la cama o encima de la estantería.",
    german: "Petr versteckt das Geschenk hinter dem Schrank, unter dem Bett oder über dem Bücherregal."
  },
  {
    czech: "Petr kupuje dárek pro Evu.",
    english: "Petr is buying a gift for Eva.",
    spanish: "Petr compra un regalo para Eva.",
    german: "Petr kauft ein Geschenk für Eva."
  },
  {
    czech: "Petr miluje Evu.",
    english: "Peter loves Eva.",
    spanish: "Pedro ama a Eva.",
    german: "Peter liebt Eva."
  },
  {
    czech: "Evu miluje Petr.",
    english: "Peter loves Eva.",
    spanish: "Pedro ama a Eva.",
    german: "Peter liebt Eva."
  },
  {
    czech: "Evu Petr miluje.",
    english: "Peter loves Eva.",
    spanish: "Pedro ama a Eva.",
    german: "Peter liebt Eva."
  },
  {
    czech: "Petr Evu miluje.",
    english: "Peter loves Eva.",
    spanish: "Pedro ama a Eva.",
    german: "Peter liebt Eva."
  },

  // Main group words in 4th case with adjectives
  {
    czech: "mladé / jarní město -> mladé / jarní město",
    english: "young / spring city -> young / spring city",
    spanish: "joven / primavera ciudad -> joven / primavera ciudad",
    german: "jung / Frühlingsstadt -> jung / Frühlingsstadt"
  },
  {
    czech: "mladá / jarní ženA -> mladOU / jarní ženU",
    english: "young / spring woman -> young / spring woman",
    spanish: "joven / primavera mujer -> joven / primavera mujer",
    german: "jung / Frühlingsfrau -> junge / Frühlingsfrau"
  },
  {
    czech: "mladá / jarní růže -> mladOU / jarní růžI",
    english: "young / spring rose -> young / spring rose",
    spanish: "joven / primavera rosa -> joven / primavera rosa",
    german: "jung / Frühlingsrose -> junge / Frühlingsrose"
  },
  {
    czech: "mladý / jarní pán -> mladÉHO / jarnÍHO pánA",
    english: "young / spring man -> young / spring man",
    spanish: "joven / primavera hombre -> joven / primavera hombre",
    german: "junger / Frühlingsmann -> jungen / Frühlingsmann"
  },
  {
    czech: "mladý / jarní hrad -> mladý / jarní hrad",
    english: "young / spring castle -> young / spring castle",
    spanish: "joven / primavera castillo -> joven / primavera castillo",
    german: "junger / Frühlingsburg -> junger / Frühlingsburg"
  },
  {
    czech: "mladý / jarní muž -> mladÉHO / jarnÍHO mužE",
    english: "young / spring man -> young / spring man",
    spanish: "joven / primavera hombre -> joven / primavera hombre",
    german: "junger / Frühlingsmann -> jungen / Frühlingsmann"
  },
  {
    czech: "mladý / jarní stroj -> mladý / jarní stroj",
    english: "young / spring machine -> young / spring machine",
    spanish: "joven / primavera máquina -> joven / primavera máquina",
    german: "junger / Frühlingsmaschine -> junger / Frühlingsmaschine"
  }
];
