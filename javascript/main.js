const topview = document.getElementById("topView");
const video = document.querySelector(".spaceVideo");

topview.onclick = function (){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}