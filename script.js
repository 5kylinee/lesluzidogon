
const audio = document.getElementById("bg-music");
const playButton = document.getElementById("playButton");
const volumeControl = document.getElementById("volumeControl");
const volumeLabel = document.getElementById("volumeLabel");


playButton.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    playButton.textContent = "Pause Music";
  } else {
    audio.pause();
    playButton.textContent = "Play Music";
  }
});


volumeControl.addEventListener("input", function () {
  const volume = volumeControl.value / 100; 
  audio.volume = volume;
  volumeLabel.textContent = volumeControl.value + "%"; 
});
