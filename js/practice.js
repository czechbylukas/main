document.addEventListener("DOMContentLoaded", () => {

  let currentIndex = 0;
  const total = vocab.length;

  const englishCard = document.getElementById("englishCard");
  const czechCard = document.getElementById("czechCard");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  const progressBar = document.getElementById("progress");
  const progressText = document.getElementById("progressText");

  function showCard(index) {
    const item = vocab[index];
    englishCard.textContent = item.english;
    czechCard.textContent = "Click to show Czech";
    czechCard.dataset.czech = item.czech;
    updateProgress();
  }

  function updateProgress() {
    progressBar.style.width = ((currentIndex + 1) / total * 100) + "%";
    progressText.textContent = `${currentIndex + 1} / ${total}`;

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === total - 1;
  }

  czechCard.addEventListener("click", () => {
    czechCard.textContent = czechCard.dataset.czech;
  czechCard.style.color = "black"; // <-- turns text black when revealed
  });

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

  // Initialize first card
  showCard(currentIndex);

});
