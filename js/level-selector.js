document.addEventListener("DOMContentLoaded", () => {
  const levels = [
    { code: "A1", label: "A1" },
    { code: "A2", label: "A2" },
    { code: "B1", label: "B1" }
  ];

  // Map each level to its dataset file
  const levelFiles = {
    A1: "1_A1_usefulphrases.js",
    A2: "1_pasttense.js",
    B1: "1_B1_shopping_advanced.js"
  };

  const container = document.getElementById("level-selector-container");
  if (!container) return;

  const selector = document.createElement("select");
  selector.id = "level-selector";

  levels.forEach(level => {
    const option = document.createElement("option");
    option.value = level.code;
    option.textContent = level.label;
    selector.appendChild(option);
  });

  container.appendChild(selector);

  // Load saved level or default
  selector.value = localStorage.getItem("selectedLevel") || "A1";

  selector.addEventListener("change", async () => {
    const level = selector.value;
    localStorage.setItem("selectedLevel", level);
    await loadLevelVocab(level);
  });

  // Initial load
  loadLevelVocab(selector.value);

  async function loadLevelVocab(level) {
    const fileName = levelFiles[level];
    if (!fileName) return;

    // Remove previous dataset if exists
    const oldScript = document.getElementById("level-vocab");
    if (oldScript) oldScript.remove();

    // Load new dataset
    const vocabScript = document.createElement("script");
    vocabScript.id = "level-vocab";
    vocabScript.src = `../data/${fileName}`;
    vocabScript.onload = () => {
      if (typeof renderVocab === "function") renderVocab();
    };
    document.body.appendChild(vocabScript);
  }
});
