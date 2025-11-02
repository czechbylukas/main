// Get selected language (default = English)
const lang = localStorage.getItem("selectedLanguage") || "en";

let currentIndex = 0;

// Flashcard elements
const englishCard = document.getElementById("englishCard");
const czechCard = document.getElementById("czechCard");
const progressBar = document.getElementById("progress");
const progressText = document.getElementById("progressText");

// Map language to flashcard display
function getTranslation(item) {
  switch(lang) {
    case "de": return item.german;
    case "es": return item.spanish;
    default:   return item.english;
  }
}

function renderCard(index) {
  const item = vocab[index];

  // Czech is always on the second card
  czechCard.textContent = item.czech + (item.pronunciation ? ` (${item.pronunciation})` : "");
  
  // First card shows selected language translation
  englishCard.textContent = translations.messages?.clickToShow || "Click to show Czech";

  // Update progress
  progressText.textContent = `${index + 1} / ${vocab.length}`;
  progressBar.style.width = ((index + 1) / vocab.length * 100) + "%";
}

// Navigation buttons
document.getElementById("prevBtn").addEventListener("click", () => {
  if(currentIndex > 0) currentIndex--;
  renderCard(currentIndex);
});

document.getElementById("nextBtn").addEventListener("click", () => {
  if(currentIndex < vocab.length - 1) currentIndex++;
  renderCard(currentIndex);
});

// Initial render
document.addEventListener("DOMContentLoaded", () => {
  renderCard(currentIndex);
});
