// Get elements
const audio = document.getElementById("bg-music");
const playButton = document.getElementById("playButton");
const volumeControl = document.getElementById("volumeControl");
const volumeLabel = document.getElementById("volumeLabel");

// Set default volume to 100% (1.0)
audio.volume = 1.0;

// Play/Pause button functionality
playButton.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    playButton.textContent = "Pause Music";
  } else {
    audio.pause();
    playButton.textContent = "Play Music";
  }
});

// Volume control functionality
volumeControl.addEventListener("input", function () {
  let volume = volumeControl.value / 100; // Convert range (0-100) to (0-1)
  audio.volume = volume; // Set the volume
  volumeLabel.textContent = volumeControl.value + "%"; // Update label
});
