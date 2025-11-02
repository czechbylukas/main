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

// Render the cards
function renderCard(index) {
  const item = vocab[index];

  // Czech card: initially hidden, shows grey "Click to show Czech"
  czechCard.textContent = translations.messages?.clickToShow || "Click to show Czech";
  czechCard.classList.add("click-to-show");
  
  // First card shows selected language translation
  englishCard.textContent = getTranslation(item);

  // Update progress
  progressText.textContent = `${index + 1} / ${vocab.length}`;
  progressBar.style.width = ((index + 1) / vocab.length * 100) + "%";
}

// Show Czech translation when right card is clicked
czechCard.addEventListener("click", () => {
  const item = vocab[currentIndex];
  czechCard.textContent = item.czech + (item.pronunciation ? ` (${item.pronunciation})` : "");
  czechCard.classList.remove("click-to-show");
});

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
