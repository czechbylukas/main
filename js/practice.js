// -----------------------------
// practice.js
// -----------------------------

// Get selected language (default = English)
let lang = localStorage.getItem("selectedLanguage") || "en";
let currentIndex = 0;

// Flashcard elements
const englishCard = document.getElementById("englishCard");
const czechCard = document.getElementById("czechCard");
const progressBar = document.getElementById("progress");
const progressText = document.getElementById("progressText");

// -----------------------------
// Helper: get translation by language
// -----------------------------
function getTranslation(item) {
  switch(lang) {
    case "de": return item.german;
    case "es": return item.spanish;
    default:   return item.english;
  }
}

// -----------------------------
// Render flashcards
// -----------------------------
function renderCard(index) {
  const item = vocab[index];

  // Left card: selected language
  englishCard.textContent = getTranslation(item);

  // Right card: Czech placeholder
  czechCard.textContent = translations.messages?.clickToShow || "Click to show Czech";
  czechCard.classList.add("click-to-show");

  // Update progress
  progressText.textContent = `${index + 1} / ${vocab.length}`;
  progressBar.style.width = ((index + 1) / vocab.length * 100) + "%";
}

// -----------------------------
// Click to reveal Czech
// -----------------------------
czechCard.addEventListener("click", () => {
  const item = vocab[currentIndex];
  czechCard.textContent = item.czech + (item.pronunciation ? ` (${item.pronunciation})` : "");
  czechCard.classList.remove("click-to-show");
});

// -----------------------------
// Navigation buttons
// -----------------------------
document.getElementById("prevBtn").addEventListener("click", () => {
  if(currentIndex > 0) currentIndex--;
  renderCard(currentIndex);
});

document.getElementById("nextBtn").addEventListener("click", () => {
  if(currentIndex < vocab.length - 1) currentIndex++;
  renderCard(currentIndex);
});

// -----------------------------
// Language change handling
// -----------------------------
document.addEventListener("DOMContentLoaded", () => {
  // Load saved language from translations.js
  lang = localStorage.getItem("selectedLanguage") || "en";

  // Render first card
  renderCard(currentIndex);
});
