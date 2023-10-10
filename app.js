const vinylRecord = document.querySelector(".vinyl-container");
const vinylImage = document.querySelector("img[src='vinyl.png']");

let isSpinning = false;

vinylRecord.addEventListener("click", () => {
  if (isSpinning) {
    //  stop the animation
    vinylImage.style.animationPlayState = "paused";
  } else {
    // start the animation
    vinylImage.style.animationPlayState = "running";
  }

  // toggle
  isSpinning = !isSpinning;
});
