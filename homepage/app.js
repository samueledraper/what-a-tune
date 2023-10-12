const thumbsUpButton = document.getElementById("thumbs-up");
const thumbsDownButton = document.getElementById("thumbs-down");

const genreElements = document.querySelectorAll(".bubble-item");

let userProfile = {};

const parsedData = JSON.parse(localStorage.getItem("userProfile"));

let moodSelected = false;
let genreSelected = false;

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
  const selectedElement = target.closest(".bubble-item");

  for (let i = 0; i < genreElements.length; i++) {
    if (genreElements[i] === selectedElement) {
      userProfile.genre = selectedElement.dataset.genre;
    }
  }

  localStorage.setItem("userProfile", JSON.stringify(userProfile));
}

function checkIfReadyToShowResults() {
  if (moodSelected && genreSelected) {
    const seeResultsDiv = document.getElementById("see-results");
    seeResultsDiv.style.display = "block";
    seeResultsDiv.classList.add("fade-in");

    seeResultsDiv.addEventListener("animationend", function () {
      seeResultsDiv.classList.remove("fade-in");
    });
  }
}

thumbsUpButton.addEventListener("click", function (event) {
  handleMoodChange(event.target);
  moodSelected = true;
  checkIfReadyToShowResults();
});

thumbsDownButton.addEventListener("click", function (event) {
  handleMoodChange(event.target);
  moodSelected = true;
  checkIfReadyToShowResults();
});

for (let i = 0; i < genreElements.length; i++) {
  genreElements[i].addEventListener("click", function (event) {
    handleGenreChange(event.target);
    genreSelected = true;
    checkIfReadyToShowResults();
  });
}
