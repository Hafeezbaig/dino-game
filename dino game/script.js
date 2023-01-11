score = 0;
cross = true;
var audio = new Audio('./audio/music.mp3');
var audiogo = new Audio('./audio/gameover.mp3');
setTimeout(() => {
    audio.play()
}, 1000);
document.onkeydown = function (e){
    console.log("key code is ", e.keyCode)
    if (e.keyCode == 38){
        dino = document.querySelector('.dino');
        dino.classList.add('animatedino');
        setTimeout(()=>{
            dino.classList.remove('animatedino')
        }, 700);
    }
}
