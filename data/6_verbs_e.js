// data/2_verbs_basic.js
const vocab = [
  {
    czech: "Děkovat (1. osoba) – děkuju",
    english: "to thank (I thank)",
    spanish: "agradecer (yo agradezco)",
    german: "danken (ich danke)"
  },
  {
    czech: "Litovat (1. osoba) – lituju",
    english: "to regret (I regret)",
    spanish: "lamentar (yo lamento)",
    german: "bedauern (ich bedaure)"
  },
  {
    czech: "Nakupovat (1. osoba) – nakupuju",
    english: "to shop (I shop)",
    spanish: "comprar (yo compro)",
    german: "einkaufen (ich kaufe ein)"
  },
  {
    czech: "Telefonovat (1. osoba) – telefonuju",
    english: "to call (I call)",
    spanish: "llamar por teléfono (yo llamo)",
    german: "telefonieren (ich telefoniere)"
  },
  {
    czech: "Sportovat (1. osoba) – sportuju",
    english: "to do sports (I do sports)",
    spanish: "hacer deporte (yo hago deporte)",
    german: "Sport treiben (ich mache Sport)"
  },
  {
    czech: "Pracovat (1. osoba) – pracuju",
    english: "to work (I work)",
    spanish: "trabajar (yo trabajo)",
    german: "arbeiten (ich arbeite)"
  },
  {
    czech: "Studovat (1. osoba) – studuju",
    english: "to study (I study)",
    spanish: "estudiar (yo estudio)",
    german: "studieren (ich studiere)"
  },
  {
    czech: "Malovat (1. osoba) – maluju",
    english: "to paint (I paint)",
    spanish: "pintar (yo pinto)",
    german: "malen (ich male)"
  },
  {
    czech: "Tancovat (1. osoba) – tancuju",
    english: "to dance (I dance)",
    spanish: "bailar (yo bailo)",
    german: "tanzen (ich tanze)"
  },
  {
    czech: "Sprchovat se (1. osoba) – sprchuju se",
    english: "to shower (I shower)",
    spanish: "ducharse (me ducho)",
    german: "sich duschen (ich dusche mich)"
  },
  {
    czech: "Hrát (1. osoba) – hraju",
    english: "to play (I play)",
    spanish: "jugar (yo juego)",
    german: "spielen (ich spiele)"
  },
  {
    czech: "Plavat (1. osoba) – plavu",
    english: "to swim (I swim)",
    spanish: "nadar (yo nado)",
    german: "schwimmen (ich schwimme)"
  },
  {
    czech: "Jet (1. osoba) – jedu",
    english: "to go (by vehicle) (I go)",
    spanish: "ir (en vehículo) (voy)",
    german: "fahren (ich fahre)"
  },
  {
    czech: "Jít (1. osoba) – jdu",
    english: "to go (on foot) (I go)",
    spanish: "ir (a pie) (voy)",
    german: "gehen (ich gehe)"
  },
  {
    czech: "Číst (1. osoba) – čtu",
    english: "to read (I read)",
    spanish: "leer (yo leo)",
    german: "lesen (ich lese)"
  },
  {
    czech: "Psát (1. osoba) – píšu",
    english: "to write (I write)",
    spanish: "escribir (yo escribo)",
    german: "schreiben (ich schreibe)"
  },
  {
    czech: "Cestovat (1. osoba) – cestuju",
    english: "to travel (I travel)",
    spanish: "viajar (yo viajo)",
    german: "reisen (ich reise)"
  },
  {
    czech: "Děkuju za pomoc.",
    english: "I thank you for the help.",
    spanish: "Gracias por su ayuda.",
    german: "Ich danke Ihnen für Ihre Hilfe."
  },
  {
    czech: "Lituju, že jsem tě neviděla.",
    english: "I regret that I did not see you.",
    spanish: "Lamento no haberte visto.",
    german: "Ich bedauere, dich nicht gesehen zu haben."
  },
  {
    czech: "Nakupuju v supermarketu.",
    english: "I shop at the supermarket.",
    spanish: "Hago compras en el supermercado.",
    german: "Ich kaufe im Supermarkt ein."
  },
  {
    czech: "Telefonuju mamince.",
    english: "I call my mum.",
    spanish: "Estoy llamando a mi mamá.",
    german: "Ich rufe meine Mutter an."
  },
  {
    czech: "Sportuju každý den.",
    english: "I do sports every day.",
    spanish: "Hago deporte todos los días.",
    german: "Ich mache jeden Tag Sport."
  },
  {
    czech: "Pracuju ve škole.",
    english: "I work at a school.",
    spanish: "Trabajo en una escuela.",
    german: "Ich arbeite an einer Schule."
  },
  {
    czech: "Studuju na univerzitě.",
    english: "I study at a university.",
    spanish: "Yo estudio en la universidad.",
    german: "Ich studiere an der Universität."
  },
  {
    czech: "Maluju obrázek.",
    english: "I paint a picture.",
    spanish: "Pinto un cuadro.",
    german: "Ich male ein Bild."
  },
  {
    czech: "Tancuju salsu.",
    english: "I dance salsa.",
    spanish: "Yo bailo salsa.",
    german: "Ich tanze Salsa."
  },
  {
    czech: "Sprchuju se každý den.",
    english: "I shower every day.",
    spanish: "Me ducho todos los días.",
    german: "Ich dusche jeden Tag."
  },
  {
    czech: "Rád/a hraju fotbal.",
    english: "I like to play football.",
    spanish: "Me gusta jugar al fútbol.",
    german: "Ich spiele gerne Fußball."
  },
  {
    czech: "Nerad/a plavu.",
    english: "I don’t like to swim.",
    spanish: "No me gusta nadar.",
    german: "Ich schwimme nicht gern."
  },
  {
    czech: "Jedu z Prahy do Brna.",
    english: "I am going (by vehicle) from Prague to Brno.",
    spanish: "Voy de Praga a Brno.",
    german: "Ich fahre von Prag nach Brünn."
  },
  {
    czech: "Jdu (pěšky) domů.",
    english: "I am going (on foot) home.",
    spanish: "Me voy (a pie) a casa.",
    german: "Ich gehe (zu Fuß) nach Hause."
  },
  {
    czech: "Čtu hezkou knihu.",
    english: "I read a nice book.",
    spanish: "Leo un buen libro.",
    german: "Ich lese ein schönes Buch."
  },
  {
    czech: "Píšu dopis.",
    english: "I write a letter.",
    spanish: "Escribo una carta.",
    german: "Ich schreibe einen Brief."
  }
];
