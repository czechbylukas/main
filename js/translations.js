let translations = {};

async function loadTranslations(lang) {
  const res = await fetch(`../data/translations/translations_${lang}.json`);
  translations = await res.json();
  applyTranslations();
}

function applyTranslations() {
  // Headings
  document.getElementById("heading-welcome").textContent = translations.headings.welcome;
  document.getElementById("heading-mainText").textContent = translations.headings.mainPageText;
  document.getElementById("heading-topics").textContent = translations.headings.topics;

  // Menu
  document.getElementById("menu-home").textContent = translations.menu.home;
  document.getElementById("menu-vocabulary").textContent = translations.menu.vocabulary;
  document.getElementById("menu-practicing").textContent = translations.menu.practicing;
  document.getElementById("menu-testing").textContent = translations.menu.testing;
}

document.getElementById("languageSelector").addEventListener("change", (e) => {
  loadTranslations(e.target.value);
});

// Load default language
loadTranslations("en");
