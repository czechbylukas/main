let translations = {};
let currentLang = "en"; // default

async function loadTranslations(lang) {
  try {
    const res = await fetch(`/data/translations/translations_${lang}.json`);
    translations = await res.json();
    currentLang = lang;
    applyTranslations();
  } catch (err) {
    console.error(`Failed to load translations for ${lang}:`, err);
  }
}

function applyTranslations() {
  if (!translations) return;

  // --- Page title ---
  const pageTitle = document.querySelector("title");
  if (pageTitle && translations["page-title"]) {
    pageTitle.textContent = translations["page-title"];
  }

  // --- All headings and text elements ---
  const idsToTranslate = [
    "heading-welcome",
    "heading-mainText",
    "heading-topics",
    "heading-vocab",
    "heading-vocabList",
    "heading-exercise",
    "heading-exList",
    "heading-tests",
    "heading-testList",
    "link-ex-useful-phrases",
    "link-ex-past-tense",
    "link-ex-question-generator",
    "link-test-useful-phrases",
    "link-test-past-tense"
  ];

  idsToTranslate.forEach(id => {
    const el = document.getElementById(id);
    if (el && translations[id]) el.textContent = translations[id];
  });

  // --- Menu ---
  const menuItems = ["home", "vocabulary", "practicing", "testing"];
  menuItems.forEach(item => {
    const el = document.getElementById(`menu-${item}`);
    if (el && translations.menu && translations.menu[item]) el.textContent = translations.menu[item];
  });

  // --- Footer ---
  const footerText = document.getElementById("footer-text");
  const footerLink = document.getElementById("footer-link");
  if (footerText && footerLink) {
    if (translations["footer-text"]) footerText.childNodes[0].nodeValue = translations["footer-text"] + " ";
    if (translations["footer-link"]) footerLink.textContent = translations["footer-link"];
  }
}

// Load default language on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  loadTranslations(currentLang);
});
