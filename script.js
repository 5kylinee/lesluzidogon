document.addEventListener("DOMContentLoaded", function () {
    const quoteText = document.querySelector(".quote-text");

    // Intersection Observer for Quote Animation (Plays Again on Scroll)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                quoteText.classList.add("show");
            } else {
                quoteText.classList.remove("show"); // Remove class when out of view
            }
        });
    }, { threshold: 0.5 });

    observer.observe(quoteText);

    // Parallax Effect for Hero Image
    const heroImage = document.querySelector(".hero-image img");

    window.addEventListener("scroll", () => {
        let scrollPosition = window.scrollY;
        heroImage.style.transform = `translate(-50%, calc(-50% + ${scrollPosition * 0.3}px))`;
    });
});
