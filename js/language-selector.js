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
