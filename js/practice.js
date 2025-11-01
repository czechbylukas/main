// ---------- Practice App Logic ----------

let currentIndex = 0;
const total = vocab.length;

const englishCard = document.getElementById("englishCard");
const czechCard = document.getElementById("czechCard");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const progress = document.getElementById("progress");

function showCard(index) {
  const item = vocab[index];
  englishCard.textContent = item.english;
  czechCard.textContent = "Click to show Czech";
  czechCard.dataset.czech = item.czech;
  updateProgress();
}

czechCard.addEventListener("click", () => {
  czechCard.textContent = czechCard.dataset.czech;
});

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= total) currentIndex = 0;
  showCard(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) currentIndex = total - 1;
  showCard(currentIndex);
});

function updateProgress() {
  progress.style.width = ((currentIndex + 1) / total * 100) + "%";
}

// Initialize first card
showCard(currentIndex);
