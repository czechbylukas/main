function applyTranslations() {
  if (!translations) return;

  // --- Page title ---
  const pageTitle = document.querySelector("title");
  if (pageTitle) {
    if (translations["heading-vocab"] && pageTitle.textContent.includes("Vocabulary")) pageTitle.textContent = translations["heading-vocab"];
    if (translations["heading-exercise"] && pageTitle.textContent.includes("Practice")) pageTitle.textContent = translations["heading-exercise"];
    if (translations["heading-tests"] && pageTitle.textContent.includes("Tests")) pageTitle.textContent = translations["heading-tests"];
  }

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

  const hExercise = document.getElementById("heading-exercise");
  if (hExercise && translations["heading-exercise"]) hExercise.textContent = translations["heading-exercise"];

  const hExList = document.getElementById("heading-exList");
  if (hExList && translations["heading-exList"]) hExList.textContent = translations["heading-exList"];

  const hTests = document.getElementById("heading-tests");
  if (hTests && translations["heading-tests"]) hTests.textContent = translations["heading-tests"];

  const hTestList = document.getElementById("heading-testList");
  if (hTestList && translations["heading-testList"]) hTestList.textContent = translations["heading-testList"];

  // --- Links (Exercises & Tests) ---
  const hUsefulEx = document.getElementById("link-ex-useful-phrases");
  if (hUsefulEx && translations["link-ex-useful-phrases"]) hUsefulEx.textContent = translations["link-ex-useful-phrases"];

  const hPastEx = document.getElementById("link-ex-past-tense");
  if (hPastEx && translations["link-ex-past-tense"]) hPastEx.textContent = translations["link-ex-past-tense"];

  const hQuestionEx = document.getElementById("link-ex-question-generator");
  if (hQuestionEx && translations["link-ex-question-generator"]) hQuestionEx.textContent = translations["link-ex-question-generator"];

  const hUsefulTest = document.getElementById("link-test-useful-phrases");
  if (hUsefulTest && translations["link-test-useful-phrases"]) hUsefulTest.textContent = translations["link-test-useful-phrases"];

  const hPastTest = document.getElementById("link-test-past-tense");
  if (hPastTest && translations["link-test-past-tense"]) hPastTest.textContent = translations["link-test-past-tense"];

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
