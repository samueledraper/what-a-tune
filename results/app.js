const userProfile = JSON.parse(localStorage.getItem("userProfile"));
const userMessageElement = document.getElementById("userMessage");
const videoElement = document.getElementById("recommendationVideo");

const newSongButton = document.getElementById("newSong");
const reloadButton = document.getElementById("reload");

function Song(name, artist, mood, genre, albumArtSrc, ytSrc) {
  this.name = name;
  this.artist = artist;
  this.mood = mood;
  this.genre = genre;
  this.albumArtSrc = albumArtSrc;
  this.ytSrc = ytSrc;
}

const songs = [
  new Song(
    "Never Gonna Give You Up Good",
    "Rick Astley",
    "good",
    "pop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ed/17/65/ed17656f-4c55-97c2-c93d-4b94f829799f/859381157694.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/dQw4w9WgXcQ?si=IiZZpCIPEUjonDIR"
  ),
  new Song(
    "Never Gonna Give You Up Good",
    "Rick Astley",
    "good",
    "pop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ed/17/65/ed17656f-4c55-97c2-c93d-4b94f829799f/859381157694.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/dQw4w9WgXcQ?si=IiZZpCIPEUjonDIR"
  ),
  new Song(
    "Never Gonna Give You Up Bad",
    "Rick Astley",
    "bad",
    "pop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ed/17/65/ed17656f-4c55-97c2-c93d-4b94f829799f/859381157694.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/dQw4w9WgXcQ?si=IiZZpCIPEUjonDIR"
  ),
  new Song(
    "Never Gonna Give You Up Bad",
    "Rick Astley",
    "bad",
    "pop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ed/17/65/ed17656f-4c55-97c2-c93d-4b94f829799f/859381157694.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/dQw4w9WgXcQ?si=IiZZpCIPEUjonDIR"
  ),
  new Song(
    "Never Gonna Give You Down Good",
    "Rick Astley",
    "good",
    "rock",
    "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ed/17/65/ed17656f-4c55-97c2-c93d-4b94f829799f/859381157694.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/dQw4w9WgXcQ?si=IiZZpCIPEUjonDIR"
  ),
  new Song(
    "Never Gonna Give You Down Good",
    "Rick Astley",
    "good",
    "rock",
    "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ed/17/65/ed17656f-4c55-97c2-c93d-4b94f829799f/859381157694.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/dQw4w9WgXcQ?si=IiZZpCIPEUjonDIR"
  ),
  new Song(
    "Never Gonna Give You Down Bad",
    "Rick Astley",
    "bad",
    "rock",
    "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ed/17/65/ed17656f-4c55-97c2-c93d-4b94f829799f/859381157694.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/dQw4w9WgXcQ?si=IiZZpCIPEUjonDIR"
  ),
  new Song(
    "Never Gonna Give You Down Bad",
    "Rick Astley",
    "bad",
    "rock",
    "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ed/17/65/ed17656f-4c55-97c2-c93d-4b94f829799f/859381157694.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/dQw4w9WgXcQ?si=IiZZpCIPEUjonDIR"
  ),
  new Song(
    "Never Gonna Give You Left Good",
    "Rick Astley",
    "good",
    "electronic",
    "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ed/17/65/ed17656f-4c55-97c2-c93d-4b94f829799f/859381157694.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/dQw4w9WgXcQ?si=IiZZpCIPEUjonDIR"
  ),
  new Song(
    "Never Gonna Give You Left Good",
    "Rick Astley",
    "good",
    "electronic",
    "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ed/17/65/ed17656f-4c55-97c2-c93d-4b94f829799f/859381157694.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/dQw4w9WgXcQ?si=IiZZpCIPEUjonDIR"
  ),
  new Song(
    "Never Gonna Give You Left Bad",
    "Rick Astley",
    "bad",
    "electronic",
    "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ed/17/65/ed17656f-4c55-97c2-c93d-4b94f829799f/859381157694.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/dQw4w9WgXcQ?si=IiZZpCIPEUjonDIR"
  ),
  new Song(
    "Never Gonna Give You Left Bad",
    "Rick Astley",
    "bad",
    "electronic",
    "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ed/17/65/ed17656f-4c55-97c2-c93d-4b94f829799f/859381157694.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/dQw4w9WgXcQ?si=IiZZpCIPEUjonDIR"
  ),
  new Song(
    "Never Gonna Give You Right Good",
    "Rick Astley",
    "good",
    "hip-hop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ed/17/65/ed17656f-4c55-97c2-c93d-4b94f829799f/859381157694.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/dQw4w9WgXcQ?si=IiZZpCIPEUjonDIR"
  ),
  new Song(
    "Never Gonna Give You Right Good",
    "Rick Astley",
    "good",
    "hip-hop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ed/17/65/ed17656f-4c55-97c2-c93d-4b94f829799f/859381157694.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/dQw4w9WgXcQ?si=IiZZpCIPEUjonDIR"
  ),
  new Song(
    "Never Gonna Give You Right Bad",
    "Rick Astley",
    "bad",
    "hip-hop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ed/17/65/ed17656f-4c55-97c2-c93d-4b94f829799f/859381157694.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/dQw4w9WgXcQ?si=IiZZpCIPEUjonDIR"
  ),
  new Song(
    "Never Gonna Give You Right Bad",
    "Rick Astley",
    "bad",
    "hip-hop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ed/17/65/ed17656f-4c55-97c2-c93d-4b94f829799f/859381157694.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/dQw4w9WgXcQ?si=IiZZpCIPEUjonDIR"
  ),
];

let matchingSongs = [];

function checkSongs() {
  for (let i = 0; i < songs.length; i++) {
    if (
      songs[i].mood === userProfile.mood &&
      songs[i].genre === userProfile.genre
    ) {
      matchingSongs.push(songs[i]);
    }
  }

  renderSong();
}

function createRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

function renderSong() {
  let chosenSongIndex = createRandomIndex(matchingSongs);
  while (chosenSongIndex === currentSongIndex) {
    chosenSongIndex = createRandomIndex(matchingSongs);
  }
  const chosenSong = matchingSongs[chosenSongIndex];
  const userMessageText = `Here's a ${chosenSong.genre} song for when you're in a ${chosenSong.mood} mood. Please enjoy!`;
  userMessageElement.textContent = userMessageText;
  videoElement.src = chosenSong.ytSrc;
  currentSongIndex = chosenSongIndex;
}

reloadButton.addEventListener("click", function () {
  localStorage.clear();
  document.location = "../index.html";
});

newSongButton.addEventListener("click", renderSong);

let currentSongIndex;

if (userProfile) {
  checkSongs();
} else {
  userMessageElement.textContent = "Error: no user profile found";
}
