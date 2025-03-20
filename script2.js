document.addEventListener("DOMContentLoaded", function () {
    function updateTimer() {
        const startDate = new Date("2024-11-19T11:02:00Z"); // Creation date of Leśluzidogon Racing
        const now = new Date();
        const diff = now - startDate;

        const msPerSecond = 1000;
        const msPerMinute = msPerSecond * 60;
        const msPerHour = msPerMinute * 60;
        const msPerDay = msPerHour * 24;
        const msPerWeek = msPerDay * 7;
        const msPerMonth = msPerDay * 30.4375; // Average month length
        const msPerYear = msPerDay * 365.25; // Leap year included

        let years = Math.floor(diff / msPerYear);
        let months = Math.floor((diff % msPerYear) / msPerMonth);
        let weeks = Math.floor((diff % msPerMonth) / msPerWeek);
        let days = Math.floor((diff % msPerWeek) / msPerDay);
        let hours = Math.floor((diff % msPerDay) / msPerHour);

        let timerText = "";
        if (years > 0) {
            timerText = `${years} years, ${months} months, ${weeks} weeks, ${days} days, ${hours} hours`;
        } else {
            timerText = `${months} months, ${weeks} weeks, ${days} days, ${hours} hours`;
        }

        document.getElementById("timer").textContent = timerText;
    }

    // Update the timer every second
    updateTimer();
    setInterval(updateTimer, 1000);
});
