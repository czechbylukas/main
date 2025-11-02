let translations = {};
let currentLang = "en"; // default language

// Load a translation JSON file
async function loadTranslations(lang) {
    try {
        const res = await fetch(`../data/translations/translations_${lang}.json`);
        translations = await res.json();
        currentLang = lang;
        applyTranslations();
    } catch (err) {
        console.error(`Failed to load translations for ${lang}:`, err);
    }
}

// Apply translations to page elements
function applyTranslations() {
    if (!translations) return;

    // Headings
    document.getElementById("heading-welcome").textContent = translations.headings.welcome;
    document.getElementById("heading-mainText").textContent = translations.headings.mainPageText;
    document.getElementById("heading-topics").textContent = translations.headings.topics;

    // Menu
    document.getElementById("menu-home").textContent = translations.menu.home;
    document.getElementById("menu-vocabulary").textContent = translations.menu.vocabulary;
    document.getElementById("menu-practicing").textContent = translations.menu.practicing;
    document.getElementById("menu-testing").textContent = translations.menu.testing;

    // Footer
    const footerText = document.getElementById("footer-text");
    const footerLink = document.getElementById("footer-link");
    if (footerText && footerLink) {
        footerText.childNodes[0].nodeValue = translations.footer.text + " ";
        footerLink.textContent = translations.footer.link;
    }

    // Buttons (if present)
    const btnNext = document.getElementById("btn-next");
    if (btnNext) btnNext.textContent = translations.buttons.next;
    const btnPrev = document.getElementById("btn-prev");
    if (btnPrev) btnPrev.textContent = translations.buttons.prev;
    const btnSubmit = document.getElementById("btn-submit");
    if (btnSubmit) btnSubmit.textContent = translations.buttons.submit;

    // Placeholders
    const searchInput = document.getElementById("search-input");
    if (searchInput) searchInput.placeholder = translations.placeholders.search;
}

// Initialize default language
document.addEventListener("DOMContentLoaded", () => {
    loadTranslations(currentLang);
});
