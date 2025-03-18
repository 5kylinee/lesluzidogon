document.addEventListener("DOMContentLoaded", function () {
    const quoteText = document.querySelector(".quote-text");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                quoteText.classList.add("show");
            }
        });
    }, {
        threshold: 0.6 // Trigger when 60% of the section is visible
    });

    observer.observe(quoteText);
});
