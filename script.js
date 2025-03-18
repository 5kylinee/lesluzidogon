document.addEventListener("DOMContentLoaded", function () {
    const quoteText = document.querySelector(".scroll-spotlight-text-wrapper");

    function handleScroll() {
        const rect = quoteText.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Trigger animation when the text is about 40% into the viewport
        if (rect.top < viewportHeight * 0.6 && rect.bottom > viewportHeight * 0.4) {
            quoteText.classList.add("show");
        } else {
            quoteText.classList.remove("show"); // Allows re-triggering when scrolling back up
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on load in case it's already in view
});
