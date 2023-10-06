console.log("Welcome To Spotify");

let songIndex = 0;
let audioElement = new Audio("./Song/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let timeChange = Array.from(document.getElementsByClassName("timeStamp"));
let songItems = Array.from(document.getElementsByClassName("songItem"));

//--------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------

let songs = [
  {
    songName: "Kuley Kuley",
    filePath: "./Song/1.mp3",
    coverPath: "./img/kuley.jpg",
    dura: "3: 09"
  },
  {
    songName: "Achko Machko",
    filePath: "./Song/2.mp3",
    coverPath: "./img/alt.jpg",
    dura: "3: 39"
  },
  {
    songName: "Ashk",
    filePath: "./song/3.mp3",
    coverPath: "./img/alt.jpg",
    dura: "4: 23"
  },
  {
    songName: "Blue Eyes 3",
    filePath: "./song/4.mp3",
    coverPath: "./img/BlueEyes.jpg",
    dura: "3: 41"
  },
  {
    songName: "Breakup Party",
    filePath: "./song/5.mp3",
    coverPath: "./img/breakup.jpg",
    dura: "3: 25"
  },
  {
    songName: "Call Aundi",
    filePath: "./song/6.mp3",
    coverPath: "./img/alt.jpg",
    dura: "3: 44"
  },
  {
    songName: "Chaar Botal Vodka",
    filePath: "./song/7.mp3",
    coverPath: "./img/alt.jpg",
    dura: "3: 49"
  },
  {
    songName: "Love Dose Extended",
    filePath: "./song/8.mp3",
    coverPath: "./img/love.jpg",
    dura: "4: 53"
  },
  {
    songName: "Aankhon Aankhon Bhaag Johnny 320 Kbps",
    filePath: "./song/9.mp3",
    coverPath: "./img/aakh.jpg",
    dura: "4: 04"
  },
  {
    songName: "Beautiful International Villager 320 Kbps",
    filePath: "./song/10.mp3",
    coverPath: "./img/alt.jpg",
    dura: "5: 16"
  },
];

//--------------------------------------------------------------------------------------------

timeChange.forEach((e) => {
  let arr = e.id;
  e.innerHTML = songs[arr].dura;
});

//--------------------------------------------------------------------------------------------

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
const timeCount = () => {
  document.getElementBy();
};

//-------------------------------------------------------------------------------------------------

// audioElement.play();
masterPlay.addEventListener("click", () => {
  if (audioElement.paused) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});

//-------------------------------------------------------------------------------------------------

audioElement.addEventListener("timeupdate", () => {
  timeChange.forEach((e, index) => {
    seekPosition = parseInt(
      audioElement.currentTime * (100 / audioElement.duration)
    );
    myProgressBar.value = seekPosition;
    let currentMinutes = Math.floor(audioElement.currentTime / 60);
    let currentSeconds = Math.round(
      audioElement.currentTime - currentMinutes * 60
    );
    let durationMinutes = Math.floor(audioElement.duration / 60);
    let durationSeconds = Math.floor(
      audioElement.duration - durationMinutes * 60
    );

    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds;
    }
    if (durationSeconds < 10) {
      durationSeconds = "0" + durationSeconds;
    }
    if (currentMinutes < 10) {
      currentMinutes = "0" + currentMinutes;
    }
    if (durationMinutes < 10) {
      durationMinutes = "0" + durationMinutes;
    }

    if (e.id == songIndex) {
      console.log(e.id);
      e.innerHTML = `${currentMinutes} : ${currentSeconds}`;
      // totalDuration.innerText = `${durationMinutes} : ${durationSeconds}`;
    }
  });
});

//-----------------------------------------------------------------------------------------------

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});


//---------------------------------------------------------------------------------------------------
// console.log(!isNaN(audioElement.duration));
// function seekUpdate() {
//   let seekPosition = 0;
//   timeChange.forEach((e) => {
//     console.log(audioElement.duration);
//     if (isNaN(audioElement.duration))}};

//----------------------------------------------------------------------------------------------------------

for(let i = 0; i<timeChange.length;i++){

}


//---------------------------------------------------------------------------------------------------------


// const setDef = () => {
//   timeChange.forEach((e) => {
//     let currentMinutes = Math.floor(audioElement.currentTime / 60);
//     let currentSeconds = Math.round(
//       audioElement.currentTime - currentMinutes * 60
//     );
//     let durationMinutes = Math.floor(audioElement.duration / 60);
//     let durationSeconds = Math.floor(
//       audioElement.duration - durationMinutes * 60
//     );

//     if (currentSeconds < 10) {
//       currentSeconds = "0" + currentSeconds;
//     }
//     if (durationSeconds < 10) {
//       durationSeconds = "0" + durationSeconds;
//     }
//     if (currentMinutes < 10) {
//       currentMinutes = "0" + currentMinutes;
//     }
//     if (durationMinutes < 10) {
//       durationMinutes = "0" + durationMinutes;
//     }
//     // e.innerHTML = `${durationMinutes}: ${durationSeconds}`;
//   });
// };
const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.add("fa-play-circle");
      element.classList.remove("fa-pause-circle");
      timeChange[songIndex].innerHTML = songs[songIndex].dura;
    }
  );
};
Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      masterSongName.innerText = songs[songIndex].songName;
      console.log(songs[songIndex].dura);
      if (audioElement.paused) {
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src = `./song/${songIndex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
      } else {
        e.target.classList.remove("fa-pause-circle");
        e.target.classList.add("fa-play-circle");
        audioElement.src = `./song/${songIndex + 1}.mp3`;
        audioElement.currentTime;
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity = 0;
      }
    });
  }
);

//----------------------------------------------------------------------------------------------

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `./Song/${songIndex + 1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
  masterSongName.innerText = songs[songIndex].songName;
  gif.style.opacity = 1;
});

//----------------------------------------------------------------------------------------------------------

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `./Song/${songIndex + 1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
  masterSongName.innerText = songs[songIndex].songName;
  gif.style.opacity = 1;
});
