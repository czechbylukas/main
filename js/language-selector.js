// Insert the language selector into the page
const container = document.getElementById("language-selector-container");

container.innerHTML = `
<div class="language-selector">
    <button id="current-lang">
        <img src="flags/en.png" alt="English" class="flag-icon">
    </button>
    <ul id="lang-dropdown" class="hidden">
        <li data-lang="en"><img src="flags/en.png" alt="English" class="flag-icon"></li>
        <li data-lang="cz"><img src="flags/cz.png" alt="Česky" class="flag-icon"></li>
        <li data-lang="es"><img src="flags/es.png" alt="Español" class="flag-icon"></li>
        <li data-lang="de"><img src="flags/de.png" alt="Deutsch" class="flag-icon"></li>
    </ul>
</div>
`;

const currentLangBtn = document.getElementById("current-lang");
const langDropdown = document.getElementById("lang-dropdown");

// Toggle dropdown
currentLangBtn.addEventListener("click", () => {
    langDropdown.classList.toggle("hidden");
});

// Change language when a flag is clicked
langDropdown.querySelectorAll("li").forEach(item => {
    item.addEventListener("click", () => {
        const lang = item.getAttribute("data-lang");

        // Load translations
        loadTranslations(lang);

        // Update current flag
        const img = item.querySelector("img").cloneNode();
        currentLangBtn.innerHTML = '';
        currentLangBtn.appendChild(img);

        // Close dropdown
        langDropdown.classList.add("hidden");
    });
});

// Close dropdown if clicked outside
document.addEventListener("click", (e) => {
    if (!currentLangBtn.contains(e.target) && !langDropdown.contains(e.target)) {
        langDropdown.classList.add("hidden");
    }
});
