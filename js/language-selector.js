document.addEventListener("DOMContentLoaded", () => {
  const languages = [
    { code: "en", flag: "/flags/en.png" },
    { code: "cz", flag: "/flags/cz.png" },
    { code: "es", flag: "/flags/es.png" },
    { code: "de", flag: "/flags/de.png" }
  ];

  const container = document.getElementById("language-selector-container");
  if (!container) return;

  let currentLang = localStorage.getItem("selectedLanguage") || "en";

  const btn = document.createElement("button");
  btn.id = "current-lang-btn";
  btn.type = "button";
  btn.style.background = "none";
  btn.style.border = "none";
  btn.style.cursor = "pointer";
  container.appendChild(btn);

  const dropdown = document.createElement("ul");
  dropdown.id = "lang-dropdown";
  container.appendChild(dropdown);

  function updateCurrentFlag() {
    const current = languages.find(l => l.code === currentLang);
    btn.innerHTML = `<img src="${current.flag}" class="flag-icon" alt="${current.code}">`;
  }

  function buildDropdown() {
    dropdown.innerHTML = "";
    languages.forEach(l => {
      if (l.code !== currentLang) {
        const li = document.createElement("li");
        li.innerHTML = `<img src="${l.flag}" class="flag-icon" alt="${l.code}">`;
        li.dataset.lang = l.code;
        dropdown.appendChild(li);
      }
    });
    dropdown.style.display = "none";
  }

  async function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("selectedLanguage", lang);
    document.documentElement.setAttribute("lang", lang);
    updateCurrentFlag();
    buildDropdown();

    // Wait for translations to load
    if (typeof loadTranslations === "function") {
      await loadTranslations(lang);
    }

    // Now render the table
    if (typeof renderVocab === "function") renderVocab();
  }

  // Initialize
  applyLanguage(currentLang);

  btn.addEventListener("click", e => {
    e.stopPropagation();
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  });

  dropdown.addEventListener("click", e => {
    const li = e.target.closest("li");
    if (!li) return;
    applyLanguage(li.dataset.lang);
  });

  document.addEventListener("click", e => {
    if (!container.contains(e.target)) dropdown.style.display = "none";
  });
});
