let startBtn = document.querySelector('.start'),
stopBtn = document.querySelector('.stop'),
resBtn = document.querySelector('.reset'),
timeRow = document.querySelector('.row');

let interval = null;
let seconds = 0;

startBtn.addEventListener('click', start());
stopBtn.addEventListener('click', stop());

function timer() {
    seconds++;

    let hours = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hours * 3600))/60);
    let sec = seconds % 60;
    if(hours < 10)hours = '0'+ hours;
    if(mins < 10)mins = '0'+ mins;
    if(sec < 10)sec = '0'+ sec;

    timeRow.innerHTML = `${hours} : ${mins} : ${sec}`;
}

function start() {
    if (interval) {
        return 
    } 
    interval = setInterval(timer, 1000)
}

function stop() {
    clearInterval(interval);
    interval = null
}

function reset() {
    stop();
    seconds = 0
    timeRow.innerHTML = '00:00:00'
}