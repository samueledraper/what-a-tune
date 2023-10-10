const vinylRecord = document.querySelector(".vinyl-container");

vinylRecord.addEventListener("click", () => {
  if (vinylRecord.style.animationPlayState === "paused") {
    vinylRecord.style.animationPlayState = "running";
  } else {
    vinylRecord.style.animationPlayState = "paused";
  }
});

// const thumbsUpButton = document.getElementById("thumbsUp");
// const thumbsDownButton = document.getElementById("thumbsDown");

// let upVotes = 0;
// let downVotes = 0;

// thumbsUpButton.addEventListener("click", () => {
//   upVotes++;
//   updateVoteCount();
// });

// thumbsDownButton.addEventListener("click", () => {
//   downVotes++;
//   updateVoteCount();
// });

// function updateVoteCount() {
//   const voteCount = document.getElementById("voteCount");
//   voteCount.innerHTML = `👍 ${upVotes}  👎 ${downVotes}`;
// }
