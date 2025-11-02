let translations = {};
// prefer saved selection if present
let currentLang = localStorage.getItem("selectedLanguage") || "en";

async function loadTranslations(lang) {
  try {
    // Adjust path if your files are in a different location.
    const res = await fetch(`/data/translations/translations_${lang}.json`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    translations = await res.json();
    currentLang = lang;
    applyTranslations();
  } catch (err) {
    console.error(`Failed to load translations for ${lang}:`, err);
  }
}

function applyTranslations() {
  if (!translations || Object.keys(translations).length === 0) return;

  // Page title
  const pageTitle = document.querySelector("title");
  if (pageTitle && translations["pageTitle"]) {
    pageTitle.textContent = translations["pageTitle"];
  }

  // ---------- HEADINGS ----------
  const idsToTranslate = [
    "heading-welcome",
    "heading-mainPageText",
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
    "link-test-past-tense",
    "heading-vocabTitle" // add if used on pages
  ];

  idsToTranslate.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      // translations may be nested (some keys are at top-level or nested)
      if (translations[id]) el.textContent = translations[id];
    }
  });

  // ---------- MENU ----------
  const menuItems = ["home", "vocabulary", "practicing", "testing", "support"];
  menuItems.forEach(item => {
    const el = document.getElementById(`menu-${item}`);
    if (el && translations.menu && translations.menu[item]) {
      el.textContent = translations.menu[item];
    }
  });

  // ---------- VOCAB PAGE BUTTONS ----------
  const btnMap = {
    "btn-practice": "practice",
    "btn-test": "test",
    "btn-home": "home",
    "btn-vocabList": "vocabulary",
    "btn-prev": "prev",
    "btn-next": "next",
    "btn-exerciseList": "exerciseList"
  };

  if (translations.buttons) {
    for (const [id, key] of Object.entries(btnMap)) {
      const el = document.getElementById(id);
      if (el && translations.buttons[key]) el.textContent = translations.buttons[key];
    }
  }

  // ---------- TABLE HEADERS ----------
  const tableCzech = document.getElementById("table-czech");
  const tablePronunciation = document.getElementById("table-pronunciation");
  const tableEnglish = document.getElementById("table-english");

  if (translations.tableHeadings) {
    if (tableCzech && translations.tableHeadings.czech)
      tableCzech.textContent = translations.tableHeadings.czech;
    if (tablePronunciation && translations.tableHeadings.pronunciation)
      tablePronunciation.textContent = translations.tableHeadings.pronunciation;
    if (tableEnglish && translations.tableHeadings.english)
      tableEnglish.textContent = translations.tableHeadings.english;
  }

  // ---------- FOOTER ----------
  const footerText = document.getElementById("footer-text");
  const footerLink = document.getElementById("footer-link");
  if (footerText) {
    if (translations["footer-text"]) {
      // preserve the anchor node if present (node 1), replace leading text
      if (footerText.childNodes && footerText.childNodes.length > 0 && footerLink) {
        footerText.childNodes[0].nodeValue = translations["footer-text"] + " ";
      } else {
        footerText.textContent = translations["footer-text"];
        if (footerLink && translations["footer-link"]) footerLink.textContent = translations["footer-link"];
      }
    }
    if (footerLink && translations["footer-link"]) footerLink.textContent = translations["footer-link"];
  }

  // If a page-specific function exists (like renderVocab), call it to update content that depends on translations
  if (typeof renderVocab === "function") {
    try { renderVocab(); } catch (e) { /* ignore */ }
  }
}

// Load translations for saved language on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("selectedLanguage") || currentLang || "en";
  loadTranslations(saved);
});
