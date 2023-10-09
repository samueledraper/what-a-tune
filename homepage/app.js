const thumbsUpButton = document.getElementById("thumbsUpButton");
const thumbsDownButton = document.getElementById("thumbsDownButton");

// const genre1Element = document.getElementById("");
// const genre2Element = document.getElementById("");
// const genre3Element = document.getElementById("");
// const genre4Element = document.getElementById("");

// const genreElements = document.querySelectorAll("");

const userProfile = {
  mood: "",
  genre: "",
};

function handleMoodChange(target) {
  if (target === thumbsUpButton) {
    userProfile.mood = "good";
  } else if (target === thumbsDownButton) {
    userProfile.mood = "bad";
  }

  localStorage.setItem("userProfile", userProfile);
}

function handleGenreChange(target) {
  for (let i = 0; i < genreElements.length; i++) {
    if (genreElements[i] === target) {
      console.log(genreElements[i]);
    }
  }
}

thumbsUpButton.addEventListener("click", function (event) {
  handleMoodChange(event.target);
  console.table(userProfile);
});

thumbsDownButton.addEventListener("click", function (event) {
  handleMoodChange(event.target);
  console.table(userProfile);
});

// for (let i = 0; i < genreElements.length; i++) {
//   genreElements[i].addEventListener("click", function (event) {
//     handleGenreChange(event.target);
//   });
// }
