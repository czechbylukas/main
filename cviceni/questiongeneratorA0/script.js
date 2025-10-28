const questions = [
  "Jak se jmenuješ?",
  "Odkud jsi?",
  "Kolik je ti let?",
  "Máš sourozence?",
  "Kde bydlíš?",
  "Co děláš ve volném čase?",
  "Jaké máš oblíbené jídlo?",
  "Máš rád hudbu?",
  "Jak se máš?",
  "Mluvíš česky?"
];

document.getElementById("generateBtn").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * questions.length);
  document.getElementById("questionBox").textContent = questions[randomIndex];
});
