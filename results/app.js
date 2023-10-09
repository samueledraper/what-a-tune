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
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D"
  ),
];
