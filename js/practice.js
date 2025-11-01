// ---------- Practice App Logic ----------

let currentIndex = 0;
const total = vocab.length;

const englishCard = document.getElementById("englishCard");
const czechCard = document.getElementById("czechCard");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const progressBar = document.getElementById("progress");

// Optional: create a numeric progress display
let progressText = document.createElement("div");
progressText.style.textAlign = "center";
progressText.style.marginTop = "8px";
progressText.style.fontWeight = "bold";
progressText.style.fontSize = "1rem";
progressBar.parentNode.insertBefore(progressText, progressBar.nextSibling);

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
  if (currentIndex < total - 1) {
    currentIndex++;
    showCard(currentIndex);
  } else {
    nextBtn.disabled = true; // disable when reaching the end
    alert("You have finished all phrases!");
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    showCard(currentIndex);
  } else {
    prevBtn.disabled = true; // disable at the first card
  }
});

function updateProgress() {
  progressBar.style.width = ((currentIndex + 1) / total * 100) + "%";
  progressText.textContent = `${currentIndex + 1} / ${total}`;
  
  // Enable/disable buttons dynamically
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === total - 1;
}

// Initialize first card
showCard(currentIndex);
