document.addEventListener("DOMContentLoaded", () => {
  const languages = [
    { code: "en", flag: "../images/flags/en.png" },
    { code: "cz", flag: "../images/flags/cz.png" },
    { code: "es", flag: "../images/flags/es.png" },
    { code: "de", flag: "../images/flags/de.png" }
  ];

  const container = document.getElementById("language-selector-container");
  if (!container) return;

  let currentLang = localStorage.getItem("selectedLanguage") || "en";

  // Create button for current language
  const btn = document.createElement("button");
  btn.id = "current-lang-btn";
  btn.type = "button";
  btn.style.background = "none";
  btn.style.border = "none";
  btn.style.cursor = "pointer";
  container.appendChild(btn);

  // Dropdown list
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

  function changeLanguage(lang) {
    localStorage.setItem("selectedLanguage", lang);
    // Reload the page to apply the language globally
    location.reload();
  }

  // Initialize
  updateCurrentFlag();
  buildDropdown();

  // Toggle dropdown
  btn.addEventListener("click", e => {
    e.stopPropagation();
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  });

  // Select language from dropdown
  dropdown.addEventListener("click", e => {
    const li = e.target.closest("li");
    if (!li) return;
    changeLanguage(li.dataset.lang);
  });

  // Close dropdown clicking outside
  document.addEventListener("click", e => {
    if (!container.contains(e.target)) dropdown.style.display = "none";
  });
});
