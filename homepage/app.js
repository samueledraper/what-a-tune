const thumbsUpButton = document.getElementById("thumbsUpButton");
const thumbsDownButton = document.getElementById("thumbsDownButton");

const genreElements = document.querySelectorAll(".genre-button");

let userProfile = {};

const parsedData = JSON.parse(localStorage.getItem("userProfile"));

if (parsedData) {
  userProfile = parsedData;
} else {
  userProfile = {
    mood: "",
    genre: "",
  };
}

console.table(userProfile);

function handleMoodChange(target) {
  if (target === thumbsUpButton) {
    userProfile.mood = "good";
  } else if (target === thumbsDownButton) {
    userProfile.mood = "bad";
  }

  localStorage.setItem("userProfile", JSON.stringify(userProfile));
}

function handleGenreChange(target) {
  for (let i = 0; i < genreElements.length; i++) {
    if (genreElements[i] === target) {
      userProfile.genre = target.dataset.genre;
    }
  }
  localStorage.setItem("userProfile", JSON.stringify(userProfile));
}

thumbsUpButton.addEventListener("click", function (event) {
  handleMoodChange(event.target);
});

thumbsDownButton.addEventListener("click", function (event) {
  handleMoodChange(event.target);
});

for (let i = 0; i < genreElements.length; i++) {
  genreElements[i].addEventListener("click", function (event) {
    handleGenreChange(event.target);
  });
}
