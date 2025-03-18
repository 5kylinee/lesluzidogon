document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector(".about");
    const quoteText = document.querySelector(".quote-text");

    let hasFadedIn = false;

    window.addEventListener("scroll", function () {
        const sectionRect = aboutSection.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Condition: Image is fully in view (or almost)
        if (sectionRect.top < viewportHeight * 0.1 && sectionRect.bottom > viewportHeight * 0.5) {
            if (!hasFadedIn) {
                quoteText.classList.add("show");
                hasFadedIn = true; // Prevents re-triggering
            }
        } else {
            quoteText.classList.remove("show");
            hasFadedIn = false; // Allows it to trigger again when scrolling back up
        }
    });
});
