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

  // --- Headings ---
  const hWelcome = document.getElementById("heading-welcome");
  if (hWelcome && translations["heading-welcome"]) hWelcome.textContent = translations["heading-welcome"];

  const hMainText = document.getElementById("heading-mainText");
  if (hMainText && translations["heading-mainPageText"]) hMainText.textContent = translations["heading-mainPageText"];

  const hTopics = document.getElementById("heading-topics");
  if (hTopics && translations["heading-topics"]) hTopics.textContent = translations["heading-topics"];

  const hVocab = document.getElementById("heading-vocab");
  if (hVocab && translations["heading-vocab"]) hVocab.textContent = translations["heading-vocab"];

  const hVocabList = document.getElementById("heading-vocabList");
  if (hVocabList && translations["heading-vocabList"]) hVocabList.textContent = translations["heading-vocabList"];

  const hUseful = document.getElementById("link-ex-useful-phrases");
  if (hUseful && translations["link-ex-useful-phrases"]) hUseful.textContent = translations["link-ex-useful-phrases"];

  const hPast = document.getElementById("link-ex-past-tense");
  if (hPast && translations["link-ex-past-tense"]) hPast.textContent = translations["link-ex-past-tense"];

  const hQuestion = document.getElementById("link-ex-question-generator");
  if (hQuestion && translations["link-ex-question-generator"]) hQuestion.textContent = translations["link-ex-question-generator"];

  // --- Menu ---
  const mHome = document.getElementById("menu-home");
  if (mHome && translations.menu && translations.menu.home) mHome.textContent = translations.menu.home;

  const mVocab = document.getElementById("menu-vocabulary");
  if (mVocab && translations.menu && translations.menu.vocabulary) mVocab.textContent = translations.menu.vocabulary;

  const mPract = document.getElementById("menu-practicing");
  if (mPract && translations.menu && translations.menu.practicing) mPract.textContent = translations.menu.practicing;

  const mTest = document.getElementById("menu-testing");
  if (mTest && translations.menu && translations.menu.testing) mTest.textContent = translations.menu.testing;

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
