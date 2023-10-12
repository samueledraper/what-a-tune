const userProfile = JSON.parse(localStorage.getItem("userProfile"));

const userMessageElement = document.getElementById("userMessage");
const albumCoverElement = document.getElementById("album-cover");
const videoElement = document.getElementById("recommendationVideo");

const newSongButton = document.getElementById("newSong");
const reloadButton = document.getElementById("reload");

const userSongHistory = document.getElementById("viewSongHistory");

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
    "This Must Be the Place (Naive Melody)",
    "Talking Heads",
    "good",
    "pop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/81/22/d3/8122d33b-2334-44a3-1990-b80d80dd522d/mzi.jmjoreqd.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/fsccjsW8bSY?si=YU7rlXM61P4O4ZKb"
  ),
  new Song(
    "Good As Hell",
    "Lizzo",
    "good",
    "pop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/3f/3c/88/3f3c88e8-1433-6cb9-f96d-67adc406f65c/dj.sefecqit.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/SmbmeOgWsqE?si=hVc_CsFm3pEJHnHH"
  ),
  new Song(
    "Kiss",
    "Prince & The Revolution",
    "good",
    "pop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/a7/04/dc/a704dce9-7671-9f42-4584-57bb7f822530/075992539562.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/H9tEvfIsDyo?si=EcYGgbm9iZVIhmBf"
  ),
  new Song(
    "Walking On Sunshine",
    "Katrina & The Waves",
    "good",
    "pop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music91/v4/17/97/70/179770e0-2e2c-979f-c97f-52ac3d132010/4050538174625.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/iPUmE-tne5U?si=1jCR5IbwBeOeD5eU"
  ),
  new Song(
    "Seventeen",
    "Sharon Van Etten",
    "bad",
    "pop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/00/06/f3/0006f34f-a5cf-a6bf-edbe-62b826faf64c/dj.srbbhdke.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/j7sTHoeH0eA?si=defPGYJV8BuhY1MP"
  ),
  new Song(
    "--",
    "Rick Astley",
    "bad",
    "pop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ed/17/65/ed17656f-4c55-97c2-c93d-4b94f829799f/859381157694.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/dQw4w9WgXcQ?si=IiZZpCIPEUjonDIR"
  ),
  new Song(
    "Streets of Philadelphia",
    "Bruce Springsteen",
    "bad",
    "pop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music/f6/9a/e8/mzi.nkptsaey.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/4z2DtNW79sQ?si=KX-1zhth8EVLjYD2"
  ),
  new Song(
    "Enjoy The Silence",
    "Depeche Mode",
    "bad",
    "pop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/6c/e8/37/6ce837a3-d2d6-d1d0-1586-a3205c9813a1/0094636010359.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/aGSKrC7dGcY?si=lmIOJ9novMLR-Ot3"
  ),
  new Song(
    "Ooh La La",
    "Faces",
    "good",
    "rock",
    "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/c0/40/f9/c040f938-aa57-33c0-99e0-45be2ab9f350/603497886272.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/RUGKx_kWaVk?si=UmALrdiDsxjnYH_h"
  ),
  new Song(
    "--",
    "Rick Astley",
    "good",
    "rock",
    "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ed/17/65/ed17656f-4c55-97c2-c93d-4b94f829799f/859381157694.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/dQw4w9WgXcQ?si=IiZZpCIPEUjonDIR"
  ),
  new Song(
    "Thunderstruck",
    "AC/DC",
    "good",
    "rock",
    "https://is1-ssl.mzstatic.com/image/thumb/Features114/v4/fc/c2/f8/fcc2f850-1d81-7440-c0a0-de7fcef1e911/dj.rrgizfic.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/v2AC41dglnM?si=4NFSA0ut69m7QAmt"
  ),
  new Song(
    "New Rose",
    "The Damned",
    "good",
    "rock",
    "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/8c/bf/b1/8cbfb121-e90f-22fe-705c-709c64ef9f51/4050538253504.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/TUxFQ5QBiYk?si=jM6xmOR1bm8YOayo"
  ),
  new Song(
    "Waiting Room",
    "Fugazi",
    "bad",
    "rock",
    "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/57/63/ce/5763ce8a-c306-dea5-0dd3-39293b4e94a4/dj.exghwciw.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/C3LXkdpHNOQ?si=UN3QMMPnuQSCh53-"
  ),
  new Song(
    "--",
    "Rick Astley",
    "bad",
    "rock",
    "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ed/17/65/ed17656f-4c55-97c2-c93d-4b94f829799f/859381157694.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/dQw4w9WgXcQ?si=IiZZpCIPEUjonDIR"
  ),
  new Song(
    "Why'd You Only Call Me When You're High?",
    "Arctic Monkeys",
    "bad",
    "rock",
    "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/cc/0f/2d/cc0f2d02-5ff1-10e7-eea2-76863a55dbad/887828031795.png/600x600bb.jpg",
    "https://www.youtube.com/embed/6366dxFf-Os?si=oaXBRESDo02mI-m9"
  ),
  new Song(
    "Paranoid Android",
    "Radiohead",
    "bad",
    "rock",
    "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/60/e9/63/60e9632c-0757-58c2-88f8-afaa1f210843/634904078164.png/600x600bb.jpg",
    "https://www.youtube.com/embed/fHiGbolFFGw?si=hC8tfo9Vq7eStbjm"
  ),
  new Song(
    "D.A.N.C.E",
    "Justice",
    "good",
    "electronic",
    "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/62/e4/01/62e40187-e672-17e5-f31f-9aee262703a3/mzi.bifzeufu.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/tCnBrrnOefs?si=hIIvMMOneFpGBG03"
  ),
  new Song(
    "--",
    "Rick Astley",
    "good",
    "electronic",
    "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ed/17/65/ed17656f-4c55-97c2-c93d-4b94f829799f/859381157694.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/dQw4w9WgXcQ?si=IiZZpCIPEUjonDIR"
  ),
  new Song(
    "Go",
    "The Chemical Brothers",
    "good",
    "electronic",
    "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/22/43/d9/2243d959-e510-d026-a2f6-d7c2b9dc7f08/00602547313423.rgb.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/LO2RPDZkY88?si=40vQh8jy51JuMoyu"
  ),
  new Song(
    "Since I Left You",
    "The Avalanches",
    "good",
    "electronic",
    "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/f3/78/f3/f378f385-bb9a-d98b-9dbe-7de0f1e03b97/634904013882.png/600x600bb.jpg",
    "https://www.youtube.com/embed/wpqm-05R2Jk?si=kuLXI_VS5UF-wWH_"
  ),
  new Song(
    "Midnight In A Perfect World",
    "DJ Shadow",
    "bad",
    "electronic",
    "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/0d/14/6d/0d146d5c-44c5-22e2-c596-2242180f4774/5400863103361_cover.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/InFbBlpDTfQ?si=Wv8OCDh1cWKCf9lg"
  ),
  new Song(
    "--",
    "Rick Astley",
    "bad",
    "electronic",
    "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ed/17/65/ed17656f-4c55-97c2-c93d-4b94f829799f/859381157694.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/dQw4w9WgXcQ?si=IiZZpCIPEUjonDIR"
  ),
  new Song(
    "Prospa",
    "Goddard",
    "bad",
    "electronic",
    "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/f4/e0/23/f4e02323-57e4-f0db-84d8-36f526949574/5056412729836.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/UEDglTzpTYM?si=c_56Vh4sTOd2xeYH"
  ),
  new Song(
    "Teardrop",
    "Massive Attack",
    "bad",
    "electronic",
    "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/0a/98/55/0a98555b-8d9d-3b46-660a-b91261557d17/00724384559953.rgb.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/u7K72X4eo_s?si=e7-GHQ7szVafeM5L" //
  ),
  new Song(
    "Jazz (We've Got)",
    "A Tribe Called Quest",
    "good",
    "hip-hop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/e0/14/c8/e014c80a-425b-e01a-1124-cee985bcb5e6/dj.qafpkddz.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/cxN4nKk2cfk?si=zIXfzwFbqLE1P96A"
  ),
  new Song(
    "All About U",
    "2Pac",
    "good",
    "hip-hop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/33/84/fc/3384fc51-1eeb-e78f-2770-14844fcdd3b5/21UM1IM16262.rgb.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/uo0wCdGmBE0?si=FJhlLTH24wNuDqBq"
  ),
  new Song(
    "Hypnotize",
    "The Notorious B.I.G.",
    "good",
    "hip-hop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/51/70/ca/5170cae7-3cd5-bc59-18ba-b6f56a1c8359/603497898848.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/eaPzCHEQExs?si=rfOp3lb3iy3VMrO2"
  ),
  new Song(
    "The Magic Number",
    "De La Soul",
    "good",
    "hip-hop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/13/1e/c3/131ec37d-d764-51a6-c800-ace81490e20d/810098502627.png/600x600bb.jpg",
    "https://www.youtube.com/embed/pxkOWjZAPLs?si=LTy8iCG4zM1_P0FD"
  ),
  new Song(
    "Run The Jewels",
    "Run The Jewels",
    "bad",
    "hip-hop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/c2/f4/b6/c2f4b67f-8a30-67fd-a75d-0c4cc8334c1b/853895007148.png/600x600bb.jpg",
    "https://www.youtube.com/embed/AfuCLp8VEng?si=kTLPEI8XWOABRcDy"
  ),
  new Song(
    "--",
    "Rick Astley",
    "bad",
    "hip-hop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ed/17/65/ed17656f-4c55-97c2-c93d-4b94f829799f/859381157694.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/dQw4w9WgXcQ?si=IiZZpCIPEUjonDIR"
  ),
  new Song(
    "Fly High",
    "Snoop Dogg, Eminem, Dr. Dre ",
    "bad",
    "hip-hop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/81/99/8f/81998f7f-54cb-97ef-eca3-fef8dd9bc8a3/00075021034440.rgb.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/hWXiS43f3Ys?si=nwkSih8pONRl9CB1"
  ),
  new Song(
    "Bring The Noise",
    "Anthrax & Public Enemy",
    "bad",
    "hip-hop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/d8/c5/93/d8c59356-a429-a87e-b24b-71be114baac3/06UMGIM18846.rgb.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/kl1hgXfX5-U?si=jD6MKIAXB9RrL2jY"
  ),
];

let matchingSongs = [];

function checkSongs() {
  for (let i = 0; i < songs.length; i++) {
    if (songs[i].mood === userProfile.mood && songs[i].genre === userProfile.genre) {
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
  while (
    chosenSongIndex === currentSongIndex ||
    userProfile.songHistory.includes(matchingSongs[chosenSongIndex])
  ) {
    chosenSongIndex = createRandomIndex(matchingSongs);
  }
  const chosenSong = matchingSongs[chosenSongIndex];
  userProfile.songHistory.push(chosenSong);
  const userMessageText = `Here's a ${chosenSong.genre} song for when you're in a ${chosenSong.mood} mood. Please enjoy!`;
  userMessageElement.textContent = userMessageText;
  albumCoverElement.src = chosenSong.albumArtSrc;
  albumCoverElement.alt = `Album art for ${chosenSong.name} by ${chosenSong.artist}`;
  //adds artist's name to animated vinyl image pseudo element
  document.styleSheets[1].insertRule(
    `.inner::after{content:"${chosenSong.artist}";}`,
    document.styleSheets[1].cssRules.length
  );
  videoElement.src = chosenSong.ytSrc;
  currentSongIndex = chosenSongIndex;
  if (userProfile.songHistory.length === matchingSongs.length) {
    newSongButton.setAttribute("disabled", "");
  }
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

userSongHistory.addEventListener("click", renderSongHistory);

const parsedData = JSON.parse(localStorage.getItem("userProfile"));

document.getElementById("songHistoryList").style.display = "none";

function renderSongHistory() {
  document.getElementById("songHistoryList").innerHTML = "";
  document.getElementById("songHistoryList").style.display = "block";
  const historyList = document.getElementById("songHistoryList");
  const title = document.createElement("h2");
  title.textContent = "You've been listening to";
  historyList.appendChild(title);
  const ul = document.createElement("ul");
  historyList.appendChild(ul);
  for (let i = 0; i < userProfile.songHistory.length; i++) {
    const listItem = document.createElement("li");
    ul.appendChild(listItem);
    const albumCoverImg = document.createElement("img");
    albumCoverImg.src = userProfile.songHistory[i].albumArtSrc;
    listItem.appendChild(albumCoverImg);
    const albumInfo = document.createElement("p");
    albumInfo.textContent = `${userProfile.songHistory[i].name} by ${userProfile.songHistory[i].artist}`;
    listItem.appendChild(albumInfo);
  }
}
