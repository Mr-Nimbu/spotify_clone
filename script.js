console.log("welcome to sargam");
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let mastersongname = document.getElementById('mastersongname');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');

let songs = [
    {songName: "suno-na-sangemarmar" , filepath: "songs/1.mp3"},
    {songName: "jashan-e-ishqa" , filepath: "songs/2.mp3"},
    {songName: "baby-doll" , filepath: "songs/3.mp3"},
    {songName: "tune-maari-entriyaa" , filepath: "songs/4.mp3"},
    {songName: "mitti-di-kushboo" , filepath: "songs/5.mp3"},
    {songName: "alcoholic" , filepath: "songs/6.mp3"},
    {songName: "kamli-kamli" , filepath: "songs/7.mp3"},
]

//audioElement.play();

//Handle play pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    }

    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
    console.log("Play");
})

audioElement.addEventListener('timeupdate' , ()=>{
    //console.log('TimeUpdate');

    //seekBar Update
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log('progress');
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change' , ()=>{
    audioElement.currentTime = (myprogressbar.value * audioElement.duration)/100;

})

const makeAllPlay =()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}


Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click' , (e)=>{
        makeAllPlay();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        if(audioElement.play){
            gif.style.opacity = 1;
        }
    })
})

document.getElementById("next").addEventListener('click' , ()=>{
    if(songIndex>=6){
        songIndex=0;
    }
    else{
    songIndex= songIndex+1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    mastersongname.innerHTML = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    if(audioElement.play){
        gif.style.opacity = 1;
    }
})

document.getElementById('previous').addEventListener('click' , ()=>{
    if(songIndex<=0){
       songIndex=6;
    }
    else{
    songIndex= songIndex-1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    mastersongname.innerHTML = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    if(audioElement.play){
        gif.style.opacity = 1;
    }
})



