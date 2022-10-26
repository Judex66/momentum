const butPlay=document.getElementById("play")
const butPlayPrev=document.getElementById("prev")
const butPlayNext=document.getElementById("next")
const audio=document.querySelector(".audio")
const progresContainer = document.querySelector(".mus")
const progress = document.querySelector(".timer")
const songName=document.querySelector(".sonName")

const songs=["Aqua Caelestis","Ennio Morricone",
"River Flows In You","Summer Wind"]

let songindex=0

function loadSong(songs){
    audio.src=`assets/sounds/${songs}.mp3`
    songName.innerHTML=songs
}
loadSong(songs[songindex])

function playSong(){
    butPlay.classList.remove("play")
    butPlay.classList.add("pause")
    audio.play()
}
function pauseSong(){
    butPlay.classList.add("play")
    butPlay.classList.remove("pause")
    audio.pause()
}

butPlay.addEventListener("click", ()=>{
    const isPlaying = butPlay.classList.contains("play")
    if (isPlaying){
        playSong()
    }else {
        pauseSong()
    }
})

function nextSong(){
    songindex++
    if (songindex > songs.length -1){
        songindex = 0
    }
    loadSong(songs[songindex])
    
    playSong()
}
function prevSong(){
    songindex--
    if (songindex<0){
        songindex = songs.length - 1
    }
    loadSong(songs[songindex])
    
    playSong()
}

butPlayNext.addEventListener("click", nextSong)
butPlayPrev.addEventListener("click", prevSong)


function progressTime(e){
const {duration, currentTime}=e.srcElement
const progressProg = (currentTime/duration)*100
console.log(progressProg)
progress.style.width=`${progressProg}%`

}
audio.addEventListener("timeupdate", progressTime)

function setProgress(e){
    const width= this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration
    audio.currentTime = (clickX/width)*duration
}
progresContainer.addEventListener("click",setProgress)
audio.addEventListener("ended", nextSong)