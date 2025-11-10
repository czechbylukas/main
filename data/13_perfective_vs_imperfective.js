// data/1_usefulphrases.js
const vocab = [
  // Questions about verb aspect
  {
    czech: "ukončený (jednou)",
    english: "Question: a verb that is PERFECTIVE shows that the action is:",
    spanish: "Pregunta: un verbo PERFECTIVO muestra que la acción es:",
    german: "Frage: Ein perfektives Verb zeigt an, dass die Handlung ist:"
  },
  {
    czech: "neukončený (opakovaný)",
    english: "Question: a verb that is IMperfective shows that the action is:",
    spanish: "Preguta: un verbo IMperfectivo muestra que la acción es:",
    german: "Frage: Ein imperfektives Verb zeigt an, dass die Handlung ist:"
  },


  // Perfective / Imperfective verb pairs
  { czech: "přečíst (perf.)", english: "to read (perf.)", spanish: "přečíst (perf.)", german: "lesen (perf.)" },
  { czech: "číst (imperf.)", english: "to read (imperf.)", spanish: "číst (imperf.)", german: "lesen (imperf.)" },

  { czech: "udělat (perf.)", english: "to do / make (perf.)", spanish: "udělat (perf.)", german: "machen (perf.)" },
  { czech: "dělat (imperf.)", english: "to do / make (imperf.)", spanish: "dělat (imperf.)", german: "machen (imperf.)" },

  { czech: "dát (perf.)", english: "to give (perf.)", spanish: "dát (perf.)", german: "geben (perf.)" },
  { czech: "dávat (imperf.)", english: "to give (imperf.)", spanish: "dávat (imperf.)", german: "geben (imperf.)" },

  { czech: "podívat se (perf.)", english: "to look (perf.)", spanish: "podívat se (perf.)", german: "ansehen (perf.)" },
  { czech: "dívat se (imperf.)", english: "to look (imperf.)", spanish: "dívat se (imperf.)", german: "sehen (imperf.)" },

  { czech: "dostat (perf.)", english: "to get (perf.)", spanish: "dostat (perf.)", german: "bekommen (perf.)" },
  { czech: "dostávat (imperf.)", english: "to get (imperf.)", spanish: "dostávat (imperf.)", german: "bekommen (imperf.)" },

  { czech: "sníst (perf.)", english: "to eat up (perf.)", spanish: "sníst (perf.)", german: "aufessen (perf.)" },
  { czech: "jíst (imperf.)", english: "to eat (imperf.)", spanish: "jíst (imperf.)", german: "essen (imperf.)" },

  { czech: "koupit (perf.)", english: "to buy (perf.)", spanish: "koupit (perf.)", german: "kaufen (perf.)" },
  { czech: "kupovat (imperf.)", english: "to buy (imperf.)", spanish: "kupovat (imperf.)", german: "kaufen (imperf.)" },

  { czech: "vyluxovat (perf.)", english: "to vacuum (perf.)", spanish: "vyluxovat (perf.)", german: "staubsaugen (perf.)" },
  { czech: "luxovat (imperf.)", english: "to vacuum (imperf.)", spanish: "luxovat (imperf.)", german: "staubsaugen (imperf.)" },

  { czech: "namalovat obraz (perf.)", english: "to paint a picture (perf.)", spanish: "namalovat obraz (perf.)", german: "ein Bild malen (perf.)" },
  { czech: "malovat obraz (imperf.)", english: "to paint a picture (imperf.)", spanish: "malovat obraz (imperf.)", german: "ein Bild malen (imperf.)" },

  { czech: "umýt (perf.)", english: "to wash (perf.)", spanish: "umýt (perf.)", german: "waschen (perf.)" },
  { czech: "mýt (imperf.)", english: "to wash (imperf.)", spanish: "mýt (imperf.)", german: "waschen (imperf.)" },

  { czech: "opravit (perf.)", english: "to repair (perf.)", spanish: "opravit (perf.)", german: "reparieren (perf.)" },
  { czech: "opravovat (imperf.)", english: "to repair (imperf.)", spanish: "opravovat (imperf.)", german: "reparieren (imperf.)" },

  { czech: "vyprat (perf.)", english: "to wash clothes (perf.)", spanish: "vyprat (perf.)", german: "waschen (perf.)" },
  { czech: "prát (imperf.)", english: "to wash clothes (imperf.)", spanish: "prát (imperf.)", german: "waschen (imperf.)" },

  { czech: "vypít (perf.)", english: "to drink up (perf.)", spanish: "vypít (perf.)", german: "austrinken (perf.)" },
  { czech: "pít (imperf.)", english: "to drink (imperf.)", spanish: "pít (imperf.)", german: "trinken (imperf.)" },

  { czech: "zaplatit (perf.)", english: "to pay (perf.)", spanish: "zaplatit (perf.)", german: "bezahlen (perf.)" },
  { czech: "platit (imperf.)", english: "to pay (imperf.)", spanish: "platit (imperf.)", german: "bezahlen (imperf.)" },

  { czech: "prodat (perf.)", english: "to sell (perf.)", spanish: "prodat (perf.)", german: "verkaufen (perf.)" },
  { czech: "prodávat (imperf.)", english: "to sell (imperf.)", spanish: "prodávat (imperf.)", german: "verkaufen (imperf.)" },

  { czech: "připravit (perf.)", english: "to prepare (perf.)", spanish: "připravit (perf.)", german: "vorbereiten (perf.)" },
  { czech: "připravovat (imperf.)", english: "to prepare (imperf.)", spanish: "připravovat (imperf.)", german: "vorbereiten (imperf.)" },

  { czech: "napsat (perf.)", english: "to write (perf.)", spanish: "napsat (perf.)", german: "schreiben (perf.)" },
  { czech: "psát (imperf.)", english: "to write (imperf.)", spanish: "psát (imperf.)", german: "schreiben (imperf.)" },

  { czech: "zatelefonovat (perf.)", english: "to make a call (perf.)", spanish: "zatelefonovat (perf.)", german: "anrufen (perf.)" },
  { czech: "telefonovat (imperf.)", english: "to make a call (imperf.)", spanish: "telefonovat (imperf.)", german: "telefonieren (imperf.)" },

  { czech: "naučit se (perf.)", english: "to learn (perf.)", spanish: "naučit se (perf.)", german: "lernen (perf.)" },
  { czech: "učit se (imperf.)", english: "to learn (imperf.)", spanish: "učit se (imperf.)", german: "lernen (imperf.)" },

  { czech: "uklidit (perf.)", english: "to tidy up (perf.)", spanish: "uklidit (perf.)", german: "aufräumen (perf.)" },
  { czech: "uklízet (imperf.)", english: "to tidy up (imperf.)", spanish: "uklidit (imperf.)", german: "aufräumen (imperf.)" },

  { czech: "uvařit (perf.)", english: "to cook (perf.)", spanish: "uvařit (perf.)", german: "kochen (perf.)" },
  { czech: "vařit (imperf.)", english: "to cook (imperf.)", spanish: "vařit (imperf.)", german: "kochen (imperf.)" },

  { czech: "zavolat (perf.)", english: "to call (perf.)", spanish: "zavolat (perf.)", german: "anrufen (perf.)" },
  { czech: "volat (imperf.)", english: "to call (imperf.)", spanish: "volat (imperf.)", german: "rufen / anrufen (imperf.)" },

  { czech: "ztratit (perf.)", english: "to lose (perf.)", spanish: "ztratit (perf.)", german: "verlieren (perf.)" },
  { czech: "ztrácet (imperf.)", english: "to lose (imperf.)", spanish: "ztrácet (imperf.)", german: "verlieren (imperf.)" },

  { czech: "vyžehlit (perf.)", english: "to iron (perf.)", spanish: "vyžehlit (perf.)", german: "bügeln (perf.)" },
  { czech: "žehlit (imperf.)", english: "to iron (imperf.)", spanish: "žehlit (imperf.)", german: "bügeln (imperf.)" }
];
