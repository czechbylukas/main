document.addEventListener("DOMContentLoaded", () => {
    const languages = [
        { code: "en", flag: "flags/en.png" },
        { code: "cz", flag: "flags/cz.png" },
        { code: "es", flag: "flags/es.png" },
        { code: "de", flag: "flags/de.png" }
    ];

    const container = document.getElementById("language-selector-container");
    let currentLang = "en";

    if (!container) return;

    // Current flag button
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
    }

    updateCurrentFlag();
    buildDropdown();

    // Toggle dropdown
    btn.addEventListener("click", () => {
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    });

    // Select language
    dropdown.addEventListener("click", e => {
        const li = e.target.closest("li");
        if (!li) return;
        currentLang = li.dataset.lang;
        updateCurrentFlag();
        dropdown.style.display = "none";
        buildDropdown();
        if (typeof loadTranslations === "function") loadTranslations(currentLang);
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", e => {
        if (!container.contains(e.target)) dropdown.style.display = "none";
    });
});
