document.addEventListener("DOMContentLoaded", () => {

  let currentIndex = 0;
  const total = vocab.length;

  const englishCard = document.getElementById("englishCard");
  const czechCard = document.getElementById("czechCard");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  const progressBar = document.getElementById("progress");
  const progressText = document.getElementById("progressText");

// Set Czech card to hidden
  czechCard.textContent = "Click to show Czech";
  czechCard.dataset.czech = item.czech;

  // Apply the grey color
  czechCard.classList.add("hidden-czech");

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

  // Remove grey color when revealed
  czechCard.classList.remove("hidden-czech");});


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





// Keyboard support: left/right arrows
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {   // Right arrow → next
    if (currentIndex < total - 1) {
      currentIndex++;
      showCard(currentIndex);
    } else {
      nextBtn.disabled = true;
      alert("You have finished all phrases!");
    }
  } else if (event.key === "ArrowLeft") { // Left arrow → previous
    if (currentIndex > 0) {
      currentIndex--;
      showCard(currentIndex);
    } else {
      prevBtn.disabled = true;
    }
  }
});
