const refs = {
    startBtn: document.querySelector("button[data-start]"),
    stopBtn: document.querySelector('button[data-stop]'),
}
let intervalId;
refs.startBtn.addEventListener('click', function(){intervalId = setInterval(onstartClick, 1000);
    refs.startBtn.disabled = true;} );
refs.stopBtn.addEventListener('click', onStopBtn)
function onstartClick(){
document.body.style.backgroundColor = getRandomHexColor();

}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
    
  }
  
 function onStopBtn(){
    clearInterval(intervalId)
    refs.startBtn.disabled = false;
 }