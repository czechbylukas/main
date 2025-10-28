document.addEventListener("DOMContentLoaded", () => {
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

  const button = document.getElementById("generateBtn");
  const box = document.getElementById("questionBox");

  button.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    box.textContent = questions[randomIndex];
  });
});
