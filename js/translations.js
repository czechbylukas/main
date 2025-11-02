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

  // Headings
  const hWelcome = document.getElementById("heading-welcome");
  if (hWelcome && translations.headings && translations.headings.welcome) hWelcome.textContent = translations.headings.welcome;

  const hVocab = document.getElementById("heading-vocab");
  if (hVocab && translations.headings && translations.headings.vocab) hVocab.textContent = translations.headings.vocab;

  const hMainText = document.getElementById("heading-mainText");
  if (hMainText && translations.headings && translations.headings.mainPageText) hMainText.textContent = translations.headings.mainPageText;

  const hVocabList = document.getElementById("heading-vocabList");
  if (hVocabList && translations.headings && translations.headings.vocabList) hVocabList.textContent = translations.headings.vocabList;

  // Menu
  const mHome = document.getElementById("menu-home");
  if (mHome && translations.menu && translations.menu.home) mHome.textContent = translations.menu.home;

  const mVocab = document.getElementById("menu-vocabulary");
  if (mVocab && translations.menu && translations.menu.vocabulary) mVocab.textContent = translations.menu.vocabulary;

  const mPract = document.getElementById("menu-practicing");
  if (mPract && translations.menu && translations.menu.practicing) mPract.textContent = translations.menu.practicing;

  const mTest = document.getElementById("menu-testing");
  if (mTest && translations.menu && translations.menu.testing) mTest.textContent = translations.menu.testing;

  // Links on vocab page
  const lUseful = document.getElementById("link-usefulPhrases");
  if (lUseful && translations.links && translations.links.usefulPhrases) lUseful.textContent = translations.links.usefulPhrases;

  const lPast = document.getElementById("link-pastTense");
  if (lPast && translations.links && translations.links.pastTense) lPast.textContent = translations.links.pastTense;

  // Footer
  const footerText = document.getElementById("footer-text");
  const footerLink = document.getElementById("footer-link");
  if (footerText && footerLink && translations.footer) {
    // set text before link
    footerText.childNodes[0].nodeValue = translations.footer.text + " ";
    footerLink.textContent = translations.footer.link;
  }
}

// load default on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  loadTranslations(currentLang);
});
