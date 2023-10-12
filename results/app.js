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
    "https://www.youtube.com/embed/fsccjsW8bSY?si=YU7rlXM61P4O4ZKb?"
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

    "Don't Stop Believin'",
    "Journey",
    "good",
    "pop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/e1/2c/0f/e12c0f90-9ff9-9ac7-c2c1-9d1132487863/884977725803.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/1k8craCGpgs?si=2ZpOcz74mId7SMJx"
  ),
  new Song(
    "Just Like Heaven",
    "The Cure",
    "good",
    "pop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music/y2004/m11/d24/h19/s06.lkkhqoax.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/n3nPiBai66M?si=yBRzCV8aj0CDvsVK"
  ),
  new Song(
    "Dancing Queen",
    "ABBA",
    "good",
    "pop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/69/4d/b4/694db440-1fdd-0112-16a0-ae501501cb32/14UMGIM07610.rgb.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/xFrGuyw1V8s?si=zwtpq329XtPnRYQz"
  ),
  new Song(
    "I Want to Hold Your Hand",
    "The Beatles",
    "good",
    "pop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/03/02/d2/0302d204-77c1-0c87-e03a-698bd31cf038/00602567725619.rgb.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/jenWdylTtzs?si=yzFE7axqbFPROj8K"
  ),
  new Song(
    "Build Me Up Buttercup",
    "The Foundations",
    "good",
    "pop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music/08/ac/91/mzi.kgqyhylu.tif/600x600bb.jpg",
    "https://www.youtube.com/embed/klNean7JJdA?si=GzdXNpZfGDvotcjd"
  ),
  new Song(
    "Wake Me Up Before You Go-Go",
    "Wham!",
    "good",
    "pop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ee/49/ac/ee49accc-78bd-bcdb-1aff-c40c1ac3ccc4/074643959520.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/pIgZ7gMze7A?si=a_Bt7qeEUYf0YaH1"
  ),
  new Song(
    "Let's Dance",
    "David Bowie",
    "good",
    "pop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/bd/df/9d/bddf9d26-d45a-278f-26c1-e5274094cb27/190295671600.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/VbD_kBJc_gI?si=djfbcxwxM_92CCcu"
  ),
  new Song(
    "Feeling Good",
    "Nina Simone",
    "good",
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
    "Yesterday",
    "The Beatles",
    "bad",
    "pop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/1a/19/db/1a19db26-17ad-b986-11a9-f72ac7a6194b/18UMGIM31214.rgb.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/NrgmdOz227I?si=eKCFlaU5LIPIQX5L"
  ),
  new Song(
    "Hurt",
    "Johnny Cash",
    "bad",
    "pop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ac/42/cd/ac42cddb-98f0-a78b-6aac-4f08266d30c4/00602537277353.rgb.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/8AHCfZTRGiI?si=MNffFse0-reogfAg"
  ),
  new Song(
    "All Out of Love",
    "Air Supply",
    "bad",
    "pop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/e7/e8/d8/e7e8d87f-a62c-44c5-b698-6698ff04c919/4007192590452.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/JWdZEumNRmI?si=b8vYe3KQJ4bJFVLX"
  ),
  new Song(
    "Mad World",
    "Tears for Fears",
    "bad",
    "pop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/24/d6/6e/24d66e27-f68f-226f-263d-e51a5d7d6611/00602537490776.rgb.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/SFsHSHE-iJQ?si=lyq0QsNb41SdL6-R"
  ),
  new Song(
    "Someone Like You",
    "Adele",
    "bad",
    "pop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/62/82/a5/6282a515-c95c-9e5e-3eef-4ef7b75639ca/191404113868.png/600x600bb.jpg",
    "https://www.youtube.com/embed/hLQl3WQQoQ0?si=2pMn6AKcrk8dLI8u"
  ),
  new Song(
    "I Will Always Love You",
    "Whitney Houston",
    "bad",
    "pop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/da/91/75/da9175da-4d37-67b7-e588-5de3601360e9/886449488834.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/3JWTaaS7LdU?si=MyiyvTTLvRK6fq0e"
  ),
  new Song(
    "Alone",
    "Heart",
    "bad",
    "pop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/86/2b/7a/862b7a60-5b32-1153-33ca-25f5a339d40d/13UABIM59256.rgb.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/1Cw1ng75KP0?si=flBnZkdpvDjzlv17"
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
    "Born to Be Wild",
    "Steppenwolf",
    "good",
    "rock",
    "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ec/b2/63/ecb263f0-55dd-6430-a916-f8c6d14430a6/00602537845194.rgb.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/rMbATaj7Il8?si=3trQfqkuMml896HJ"
  ),
  new Song(
    "Rock and Roll All Nite",
    "KISS",
    "good",
    "rock",
    "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/55/c8/fd/55c8fd86-f7f5-e7c3-abbd-3b2143dfe578/14UMGIM16085.rgb.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/f-S3X2saSwM?si=p6W66lM_EFotWIV4"
  ),
  new Song(
    "More Than a Feeling",
    "Boston",
    "good",
    "rock",
    "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/1c/3f/58/1c3f583c-1fe6-cb8a-fa68-2176e283ed3e/886444824972.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/t4QK8RxCAwo?si=DYEJrrbxhF1QsU2u"
  ),
  new Song(
    "All Right Now",
    "Free",
    "good",
    "rock",
    "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/8a/3a/73/8a3a73f3-dc5f-8646-bfa6-9903ff56c3f1/16UMGIM14876.rgb.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/5wiF6b4rxno?si=Hxf5jmZDyU-73yFu"
  ),
  new Song(
    "Livin' Thing",
    "Electric Light Orchestra",
    "good",
    "rock",
    "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/31/31/af/3131af84-1351-3704-473e-f8a1e31a05d0/mzm.aevfexsm.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/lvBOZCrJsAI?si=JCQ5NyjwXN_xGv4_"
  ),
  new Song(
    "Eye of the Tiger",
    "Survivor",
    "good",
    "rock",
    "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/f9/02/8f/f9028f63-7a55-235e-f789-1e8946430fa2/614223201122.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/btPJPFnesV4?si=eHZZ_u53Y3wck8gO"
  ),
  new Song(
    "Don't Stop",
    "Fleetwood Mac",
    "good",
    "rock",
    "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/4d/13/ba/4d13bac3-d3d5-7581-2c74-034219eadf2b/081227970949.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/QV9JJmSCiI8?si=9XRLhoIIHozLKHHC"
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
    "Paint It Black",
    "The Rolling Stones",
    "bad",
    "rock",
    "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ea/26/4d/ea264dc4-5f6e-29a2-c95e-18097da49be9/00018771894520.rgb.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/O4irXQhgMqg?si=hjBM6RqEb2MCUxST"
  ),
  new Song(
    "Hurt",
    "Nine Inch Nails",
    "bad",
    "rock",
    "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/b5/42/5d/b5425d92-410d-9c4b-72b1-d0147bbb01dd/00602567931713.rgb.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/PbHz9p7Z4OU?si=Jy5aYe2CXKjzqS36"
  ),
  new Song(
    "Black",
    "Pearl Jam",
    "bad",
    "rock",
    "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/5e/91/c1/5e91c1ba-53cb-c5c8-15f1-d3c81f3b3592/dj.psrqglcw.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/qgaRVvAKoqQ?si=vAduIDEN56R_Z1Cn"
  ),
  new Song(
    "November Rain",
    "Guns N' Roses",
    "bad",
    "rock",
    "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/6a/e2/1f/6ae21fa9-c897-3be1-2967-50eefae22b93/06UMGIM05041.rgb.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/8SbUC-UaAxE?si=ul8MPvC2g28d71mZ"
  ),
  new Song(
    "Wish You Were Here",
    "Pink Floyd",
    "bad",
    "rock",
    "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/49/ab/fe/49abfef6-0cd9-aa1f-05c3-3eb85d3fe3f5/886445635843.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/IXdNnw99-Ic?si=tNzgWAv9gWmQ6IU4"
  ),
  new Song(
    "Wish You Were Here",
    "Incubus",
    "bad",
    "rock",
    "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/2c/95/ec/2c95ecf2-8303-50b6-2e19-ea6b28424af9/mzi.yficmzdc.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/8295rOMvtQI?si=csw5uZYZSO3lGATJ"
  ),
  new Song(
    "Nothing Else Matters",
    "Metallica",
    "bad",
    "rock",
    "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/18/93/db/1893db5c-ddd1-b95c-3112-b9b83bcceab0/0093624986553.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/tAGnKpE4NCI?si=h5laf5o-5k4DXMf2"
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
    "Loud Places",
    "Jamie xx ft. Romy",
    "good",
    "electronic",
    "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/b9/dc/ce/b9dcce9c-8cf8-4105-0fab-fb048702bce2/cover.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/TP9luRtEqjc?si=C4z7B6ReMw4Z4wQj"
  ),
  new Song(
    "Holiday",
    "Confidence Man",
    "good",
    "electronic",
    "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/89/66/64/8966647c-7565-8e96-9d51-537439d81d92/5400863070014_cover.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/VcCSBrtyEP8?si=rOj4lJllG6hAp8_A"
  ),
  new Song(
    "Born Slippy (Nuxx)",
    "Underworld",
    "good",
    "electronic",
    "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/7b/23/88/7b2388e2-b820-d820-1919-dde254dc3e27/887396377387.tif/600x600bb.jpg",
    "https://www.youtube.com/embed/XiMrrleH_hI?si=8t-_GdIgsWcdm2Yf"
  ),
  new Song(
    "Breathe",
    "The Prodigy",
    "good",
    "electronic",
    "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9a/33/c4/9a33c488-08ec-3ff3-e878-35c2dd419712/634904912161.png/600x600bb.jpg",
    "https://www.youtube.com/embed/rmHDhAohJlQ?si=C09CAnuxccqiEnF9"
  ),
  new Song(
    "Romeo",
    "Basement Jaxx",
    "good",
    "electronic",
    "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/36/05/b6/3605b6c7-94b8-097c-ae15-fd936c7a56be/634904014384.png/600x600bb.jpg",
    "https://www.youtube.com/embed/x2wUbgAAydY?si=loxqQqTawBwVaHl3"
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
    "https://www.youtube.com/embed/u7K72X4eo_s?si=e7-GHQ7szVafeM5L"
  ),
  new Song(
    "Avril 14th",
    "Aphex Twin",
    "bad",
    "electronic",
    "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/b4/59/cd/b459cd17-d4cb-6810-074f-2eef4f292430/mzi.obgacqgc.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/-LgYzva-xq8?si=Aq4E_D3XTyuK-E3h"
  ),
  new Song(
    "Archangel",
    "Burial",
    "bad",
    "electronic",
    "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/9d/0f/1c/9d0f1c2b-2fae-d8ac-3920-ce9ec5bc85b5/7982.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/E2qLD9c3Gq4?si=W480TrEkYC9oYPrG"
  ),
  new Song(
    "Alberto Balsalm",
    "Aphex Twin",
    "bad",
    "electronic",
    "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/5b/b8/00/5bb80093-db7e-fdb9-c4ce-48f81847f68b/mzi.jwcepubj.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/-ZVZgCrHy5E?si=t713fktyJxaHc4PT"
  ),
  new Song(
    "Nova",
    "Burial, Four Tet",
    "bad",
    "electronic",
    "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/84/ba/34/84ba349b-f0c8-dbf5-bedf-6bd83f32bee1/3663729190741_cover.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/Y0JSeIHz8OQ?si=W0gbUmM2R04WrZ-o"
  ),
  new Song(
    "Kerala",
    "Bonobo",
    "bad",
    "electronic",
    "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/be/f1/d0/bef1d063-ed73-bd7d-3899-2217762cdcda/5054429005721.png/600x600bb.jpg",
    "https://www.youtube.com/embed/S0Q4gqBUs7c?si=YymEiSVaSdukSyHc"
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
    "Summertime",
    "DJ Jazzy Jeff & The Fresh Prince",
    "good",
    "hip-hop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/68/2b/94/682b94b0-aa4b-f07d-3300-3a6658b61b9c/012414139221.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/Kr0tTbTbmVA?si=MmXWi6fFypOtr5eN"
  ),
  new Song(
    "I Got A Story To Tell",
    "The Notorious B.I.G.",
    "good",
    "hip-hop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/51/70/ca/5170cae7-3cd5-bc59-18ba-b6f56a1c8359/603497898848.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/6TnsIGsyUyw?si=w_pjkJpJhREDQmGR"
  ),
  new Song(
    "Ex-Factor",
    "Lauryn Hill",
    "good",
    "hip-hop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/09/6b/55/096b55c4-ee8f-23bd-df8f-0ca0821f3028/886446727189.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/cE-bnWqLqxE?si=XFJYc_pAPVlBz-9m"
  ),
  new Song(
    "Harder Than You Think",
    "Public Enemy",
    "good",
    "hip-hop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music/54/e7/05/mzi.ueufdcaw.tif/600x600bb.jpg",
    "https://www.youtube.com/embed/L4EDy6wTOsg?si=yMf6et46Q5pQPJwv"
  ),
  new Song(
    "Got 'Til It's Gone",
    "Janet Jackson, Q-Tip, Joni Mitchell",
    "good",
    "hip-hop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/21/ba/cf/21bacf43-5878-e76b-e018-ca936a8243a7/22UMGIM92303.rgb.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/uznTHSEgx4U?si=sIc3f5bWCBulIcy5"
  ),
  new Song(
    "Beautiful",
    "Snoop Dogg ft. Pharrell Williams",
    "good",
    "hip-hop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/88/77/63/887763e8-b673-7e5a-fe8e-92d69cc7c9dd/00602557357073.rgb.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/B0XreQklF_w?si=-geOE0VGoG3h2JVC"
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
  new Song(
    "Stan",
    "Eminem featuring Dido",
    "bad",
    "hip-hop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/f7/76/f4/f776f482-406b-301a-4145-14617d0b8cf5/00606949062927.rgb.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/gOMhN-hfMtY?si=1LN5GAo6JwpRAcAh"
  ),
  new Song(
    "Dear Mama",
    "2Pac",
    "bad",
    "hip-hop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/aa/07/db/aa07db20-0b14-d09c-ead7-5b9e3680cb76/00602527051840.rgb.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/i2aqxtAETJs?si=dkykzZ9Kw9NLeYul"
  ),
  new Song(
    "Dance",
    "Nas",
    "bad",
    "hip-hop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/0b/45/d1/0b45d110-e637-c7b1-be21-14380c206ea2/696998693029.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/lXRSsHEvlig?si=PxqOKnh9-ZkY7MrG"
  ),
  new Song(
    "2009",
    "Mac Miller",
    "bad",
    "hip-hop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/e3/38/b5/e338b529-da3f-b4b9-b8f9-1fae428e7a23/093624905899.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/u_SvAhS7Di0?si=WgpEWiFdaUylH1z6"
  ),
  new Song(
    "Mockingbird",
    "Eminem",
    "bad",
    "hip-hop",
    "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/8b/bf/10/8bbf10dc-5dcb-9b81-6ec2-83341286ff72/00602498646717.rgb.jpg/600x600bb.jpg",
    "https://www.youtube.com/embed/S9bCLPwzSC0?si=gwhyHERM1NY4iA_F"
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
