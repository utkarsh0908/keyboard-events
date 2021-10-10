
window.addEventListener("keydown", function(e){
    const keys = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    keys.classList.add("playing");
    this.setTimeout(()=>{
        keys.classList.remove("playing");
    }, 200)

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
})