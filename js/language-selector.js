document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("language-selector-container");
    if (!container) return;

    // Inject the selector HTML
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

    // Toggle dropdown visibility when clicking current flag
    currentLangBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // prevent immediate close
        langDropdown.classList.toggle("hidden");
    });

    // Change language when a flag is clicked
    langDropdown.querySelectorAll("li").forEach(item => {
        item.addEventListener("click", () => {
            const lang = item.getAttribute("data-lang");

            // Load translations if available
            if (typeof loadTranslations === "function") {
                loadTranslations(lang);
            }

            // Update the current flag
            const img = item.querySelector("img").cloneNode();
            currentLangBtn.innerHTML = '';
            currentLangBtn.appendChild(img);

            // Hide dropdown after selection
            langDropdown.classList.add("hidden");
        });
    });

    // Close dropdown if clicked outside
    document.addEventListener("click", () => {
        langDropdown.classList.add("hidden");
    });
});
