let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto = document.querySelector('#auto');
let present = document.querySelector('present');
let total = document.querySelector('total');
let artist = document.querySelector('artist');


let timer;
let autoplay;


let index_no = 0;
let playing_song = false;


//crate a audio element
let track = document.createElement('audio')


//all song list
let all_song = [
    {
        name: "first song",
        path: "music/song1.mp3",
        image: "img/img1.png",
        singer: "fisrt singer"
    }
];
//function load the track
function load_track(index_no){
   track.src = all_song[index_no].path;   
   title.innerHTML = all_song[index_no].name;   
   track_image.src = all_song[index_no].img;   
   artist.innerHTML = all_song[index_no].singer;   
   track.load();
}
load_track(index_no);


//play song

function justplay(){
    if(playing_song==false){
        playsong();
    }else{
        pausesong();
    }
}
function playsong(){
    track.play();
    playing_song = true;
    play.innerHTML = '<i class="fa-solid fa-pause"></i>';
}
function pausesong(){
    track.pause();
    playing_song = false;
    play.innerHTML = '<i class="fa-solid fa-play"></i>';
}
   

