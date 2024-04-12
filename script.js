let cntl = document.getElementById("play")
let progress = document.getElementById("range");
let song = document.getElementById("song");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}
function playPause(){
    if(cntl.classList.contains("fa-pause")) {
        song.pause();
        cntl.classList.add("fa-play");
        cntl.classList.remove("fa-pause");
    }else {
        song.play();
        cntl.classList.remove("fa-play");
        cntl.classList.add("fa-pause");
    }
}
if(song.play()) {
    setInterval(()=>{
        progress.value = song.currentTime;
    },500)
}
progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    cntl.classList.remove("fa-play");
    cntl.classList.add("fa-pause");
}
let next = document.querySelector("#aa").src;
let before = document.getElementById('before');

function nextSong() {
   // if(next == "alag_assman.jpg"){
    document.querySelector('#aa').src = "ktmbk.jpeg";
    document.querySelector("#song").src = "ktmbk.mp3";
    //}//else{
      //  document.querySelector('#aa').src = "alag_assman.jpg";
     //   document.querySelector("#song").src = "alag_aasmaan.mp3";
    //}
   // cntl.classList.add("fa-play");
   // cntl.classList.remove("fa-pause");
    document.querySelector("#name").innerText = "KTMBK";
    document.querySelector("#singer").innerText = "~Hanita Bhambri and Zaeden";
    cntl.classList.remove("fa-play");
    cntl.classList.add("fa-pause");
    song.play();
    }

function previousSong() {
    document.querySelector('#aa').src = "alag_assman.jpg";
    document.querySelector("#song").src = "alag_aasmaan.mp3";
        //cntl.classList.add("fa-play");
        //cntl.classList.remove("fa-pause");
    document.querySelector("#name").innerText = "Alag Aasmaan";
    document.querySelector("#singer").innerText = "~Anuv Jain";
    cntl.classList.remove("fa-play");
    cntl.classList.add("fa-pause");
        song.play();
    
}    