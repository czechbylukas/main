document.addEventListener("DOMContentLoaded", () => {

  // state
  let currentIndex = 0;
  const total = vocab.length; // requires ../data/1_usefulphrases.js to be loaded before this script

  // DOM refs
  const englishCard = document.getElementById("englishCard");
  const czechCard = document.getElementById("czechCard");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  const progressBar = document.getElementById("progress");
  const progressText = document.getElementById("progressText");

  // show card by index
  function showCard(index) {
    const item = vocab[index];
    if (!item) return;
    englishCard.textContent = item.english;
    // set Czech to hidden placeholder and apply grey class
    czechCard.textContent = "Click to show Czech";
    czechCard.dataset.czech = item.czech || "";
    czechCard.classList.add("hidden-czech");
    updateProgress();
  }

  // update bar + numeric + button enabled state
  function updateProgress() {
    const pct = ((currentIndex + 1) / total) * 100;
    progressBar.style.width = pct + "%";
    progressText.textContent = `${currentIndex + 1} / ${total}`;
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === total - 1;
  }

  // reveal Czech on click
  czechCard.addEventListener("click", () => {
    // if already revealed, do nothing
    if (!czechCard.classList.contains("hidden-czech")) return;
    czechCard.textContent = czechCard.dataset.czech;
    czechCard.classList.remove("hidden-czech");
  });

  // next / prev buttons
  nextBtn.addEventListener("click", () => {
    if (currentIndex < total - 1) {
      currentIndex++;
      showCard(currentIndex);
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      showCard(currentIndex);
    }
  });

  // keyboard navigation (left / right)
  document.addEventListener("keydown", (event) => {
    // avoid capturing keys while typing in inputs (if any)
    const active = document.activeElement;
    if (active && (active.tagName === "INPUT" || active.tagName === "TEXTAREA" || active.isContentEditable)) {
      return;
    }

    if (event.key === "ArrowRight") {
      if (currentIndex < total - 1) {
        currentIndex++;
        showCard(currentIndex);
      }
    } else if (event.key === "ArrowLeft") {
      if (currentIndex > 0) {
        currentIndex--;
        showCard(currentIndex);
      }
    }
  });

  // initialize
  showCard(currentIndex);

});
