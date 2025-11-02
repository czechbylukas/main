let translations = {};
let currentLang = "en";

async function loadTranslations(lang) {
  try {
    // Single JSON for all pages
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

  // Update page title
  const pageTitle = document.querySelector("title");
  if (pageTitle && translations["page-title"]) {
    pageTitle.textContent = translations["page-title"];
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
    "link-test-past-tense"
  ];

  idsToTranslate.forEach(id => {
    const el = document.getElementById(id);
    if (el && translations[id]) el.textContent = translations[id];
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
    "btn-vocabList": "vocabulary"
  };

  if (translations.buttons) {
    for (const [id, key] of Object.entries(btnMap)) {
      const el = document.getElementById(id);
      if (el && translations.buttons[key]) el.textContent = translations.buttons[key];
    }
  }

  // ---------- TABLE HEADERS (if defined) ----------
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
  if (footerText && footerLink) {
    if (translations["footer-text"])
      footerText.childNodes[0].nodeValue = translations["footer-text"] + " ";
    if (translations["footer-link"])
      footerLink.textContent = translations["footer-link"];
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadTranslations(currentLang);
});
