document.addEventListener("DOMContentLoaded", function () {
    const quoteText = document.querySelector(".quote-text");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                quoteText.classList.add("show");
            } else {
                quoteText.classList.remove("show");
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the quote section is visible
    });

    observer.observe(quoteText);
});
