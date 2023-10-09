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
    "Never Gonna Give You Up",
    "Rick Astley",
    "good",
    "pop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ed/17/65/ed17656f-4c55-97c2-c93d-4b94f829799f/859381157694.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/dQw4w9WgXcQ?si=IiZZpCIPEUjonDIR"
  ),
];

function createRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

const filteredSongs = songs;

function renderSong() {
  const chosenSong = filteredSongs[createRandomIndex(filteredSongs)];
  const userMessageText = `Here's a ${chosenSong.genre} song for when you're in a ${chosenSong.mood} mood. Please enjoy!`;
  userMessageElement.textContent = userMessageText;
  videoElement.src = chosenSong.yt_src;
}

renderSong();
