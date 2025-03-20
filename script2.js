document.addEventListener("DOMContentLoaded", function () {
    function updateTimer() {
        const startDate = new Date("November 19, 2024 11:02:00");
        const now = new Date();
        
        let diff = now - startDate;
        
        let years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
        diff -= years * (1000 * 60 * 60 * 24 * 365);
        
        let months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
        diff -= months * (1000 * 60 * 60 * 24 * 30);
        
        let weeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
        diff -= weeks * (1000 * 60 * 60 * 24 * 7);
        
        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        diff -= days * (1000 * 60 * 60 * 24);
        
        let hours = Math.floor(diff / (1000 * 60 * 60));
        diff -= hours * (1000 * 60 * 60);
        
        let minutes = Math.floor(diff / (1000 * 60));
        diff -= minutes * (1000 * 60);
        
        let seconds = Math.floor(diff / 1000);
        
        let timerText = "";
        if (years > 0) {
            timerText += `${years} years, `;
        }
        timerText += `${months} months, ${weeks} weeks, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
        
        const timerElement = document.getElementById("timer");
        timerElement.textContent = timerText;

        // Add a jump animation when the timer updates
        timerElement.classList.add("jump");
        setTimeout(() => {
            timerElement.classList.remove("jump");
        }, 300);
    }
    
    setInterval(updateTimer, 1000);
    updateTimer(); // Initial call to set the timer immediately
});
