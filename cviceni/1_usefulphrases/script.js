document.addEventListener("DOMContentLoaded", () => {
  const questions = [
[
   "Dobrý den", en: "How do you do (Good day)", pron: "dobree den"
	"Dobré ráno", en: "Good morning", pron: "dobreh rahno"
  	"Dobrý večer", en: "Good evening", pron: "dobree vecher"
  	"Dobrou noc", en: "Good night", pron: "dobrow nots"
	"Na shledanou", en: "Goodbye", pron: "nascledanow"
	"Prosím", en: "Please", pron: "proseem"
 	 "Děkuji", en: "Thank you", pron: "dyekuyi"
	 "S dovolením", en: "Excuse me", pron: "s dovolenyeem"
	"Lituji", en: "I’m sorry (I regret)", pron: "lituyi"
	"Promiňte", en: "Excuse me, pardon", pron: "promintey"
	"Ano", en: "Yes", pron: "ano"
	"Ne", en: "No", pron: "neh"
	"Mluvíte anglicky?", en: "Do you speak English?", pron: "mluveete anglitsky?"
	 "Nerozumím", en: "I don't understand", pron: "nerozumeem"
	 "Prosím napište to", en: "Please, write it down", pron: "proseem napishte to"
	 "Kde je restaurace", en: "Where is a restaurant", pron: "kde ye restauratse"
	 "banka", en: "bank", pron: "banca"
	"Toaleta, Záchod", en: "Bathroom, toilet", pron: "toaleta, zahkod"
	 "Muži, Páni", en: "Men", pron: "mushi, pahnyi"
 	 "Ženy, Dámy", en: "Women", pron: "zheny, dahmy"
	"Kolik to stojí", en: "How much does it cost?", pron: "kolik to stoyee"
	 "Pane vrchní!", en: "Waiter!", pron: "pane vrkhnyee"
	"Jedno pivo, prosím", en: "One beer, please", pron: "yedno pivo proseem"
	 "Účet, prosím", en: "The check, please!", pron: "platyit proseem"
	 "zde, tady (tu)", en: "here", pron: "tady"
	 "Co si dáte?", en: "What would you like?", pron: "co si daate"
	"sto korun", en: "hundred crowns", pron: "sto corun"
	 "Ještě něco?", en: "Anything else?", pron: "yeshtee nietso"
 
]

  ];

  const button = document.getElementById("generateBtn");
  const box = document.getElementById("questionBox");

  button.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    box.textContent = questions[randomIndex];
  });
});
