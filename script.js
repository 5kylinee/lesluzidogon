
const audio = document.getElementById("bg-music");
const playButton = document.getElementById("playButton");


playButton.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    playButton.textContent = "Pause Music"; 
  } else {
    audio.pause();
    playButton.textContent = "Play Music"; 
  }
});
