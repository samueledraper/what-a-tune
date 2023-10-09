const userProfile = JSON.parse(localStorage.getItem("userProfile"));
const userMessageElement = document.getElementById("userMessage");
const videoElement = document.getElementById("recommendationVideo");

const newSongButton = document.getElementById("newSong");
const reloadButton = document.getElementById("reload");

function Song(name, artist, mood, genre, album_art_src, yt_src) {
  this.name = name;
  this.artist = artist;
  this.mood = mood;
  this.genre = genre;
  this.album_art_src = album_art_src;
  this.yt_src = yt_src;
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
    "Electronic",
    "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ed/17/65/ed17656f-4c55-97c2-c93d-4b94f829799f/859381157694.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/dQw4w9WgXcQ?si=IiZZpCIPEUjonDIR"
  ),
  new Song(
    "Never Gonna Give You Left Bad",
    "Rick Astley",
    "bad",
    "Electronic",
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
];

let matchingSongs = [];

function checkSongs() {
  for (let i = 0; i < songs.length; i++) {
    if (
      songs[i].mood === userProfile.mood &&
      songs[i].genre === userProfile.genre
    ) {
      matchingSongs.push(songs[i]);
    } else {
      console.log("no match");
    }
  }

  renderSong();
}

function createRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

function renderSong() {
  const chosenSong = matchingSongs[createRandomIndex(matchingSongs)];
  console.log(chosenSong);
  const userMessageText = `Here's a ${chosenSong.genre} song for when you're in a ${chosenSong.mood} mood. Please enjoy!`;
  userMessageElement.textContent = userMessageText;
  videoElement.src = chosenSong.yt_src;
}

checkSongs();
