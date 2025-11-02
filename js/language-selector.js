// Language data
const languages = [
    { code: "en", flag: "flags/en.png" },
    { code: "cz", flag: "flags/cz.png" },
    { code: "es", flag: "flags/es.png" },
    { code: "de", flag: "flags/de.png" }
];

const container = document.getElementById("language-selector-container");

let currentLang = "en"; // default

// Create current flag button
const btn = document.createElement("button");
btn.id = "current-lang-btn";
btn.innerHTML = `<img src="flags/${currentLang}.png" class="flag-icon" alt="${currentLang}">`;
container.appendChild(btn);

// Create dropdown list
const dropdown = document.createElement("ul");
dropdown.id = "lang-dropdown";

languages.forEach(lang => {
    if (lang.code !== currentLang) { // don't include current lang
        const li = document.createElement("li");
        li.innerHTML = `<img src="${lang.flag}" class="flag-icon" alt="${lang.code}">`;
        li.dataset.lang = lang.code;
        dropdown.appendChild(li);
    }
});

container.appendChild(dropdown);

// Toggle dropdown visibility on click
btn.addEventListener("click", () => {
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

// Change language when clicking a flag
dropdown.addEventListener("click", e => {
    const lang = e.target.closest("li")?.dataset.lang;
    if (!lang) return;

    currentLang = lang;

    // Update current flag button
    btn.innerHTML = `<img src="flags/${lang}.png" class="flag-icon" alt="${lang}">`;

    // Hide dropdown
    dropdown.style.display = "none";

    // Reload translations
    if (typeof loadTranslations === "function") {
        loadTranslations(lang);
    }

    // Rebuild dropdown to exclude current lang
    while (dropdown.firstChild) dropdown.removeChild(dropdown.firstChild);
    languages.forEach(l => {
        if (l.code !== currentLang) {
            const li = document.createElement("li");
            li.innerHTML = `<img src="${l.flag}" class="flag-icon" alt="${l.code}">`;
            li.dataset.lang = l.code;
            dropdown.appendChild(li);
        }
    });
});

// Close dropdown if clicking outside
document.addEventListener("click", e => {
    if (!container.contains(e.target)) {
        dropdown.style.display = "none";
    }
});
