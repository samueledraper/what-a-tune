const thumbsUpButton = document.getElementById("thumbs-up");
const thumbsDownButton = document.getElementById("thumbs-down");

const genreElements = document.querySelectorAll(".genre-bubble");

let userProfile = {};

const parsedData = JSON.parse(localStorage.getItem("userProfile"));

if (parsedData) {
  userProfile = parsedData;
} else {
  userProfile = {
    mood: "",
    genre: "",
    songHistory: [],
  };
}

function handleMoodChange(target) {
  const button = target.closest("button");
  if (button === thumbsUpButton) {
    userProfile.mood = "good";
  } else if (button === thumbsDownButton) {
    userProfile.mood = "bad";
  }

  localStorage.setItem("userProfile", JSON.stringify(userProfile));
}

function handleGenreChange(target) {
  const selectedElement = target.closest(".genre-bubble");

  for (let i = 0; i < genreElements.length; i++) {
    if (genreElements[i] === selectedElement) {
      userProfile.genre = selectedElement.dataset.genre;
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
