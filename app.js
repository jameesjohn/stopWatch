//Global variables
var inter;
var time = 0.00;
var timeRecorded = "";
isCounting = false;

//importantShit
//event Listeners
document.getElementById('reset').addEventListener('click', reset);
document.getElementById('recordTime').addEventListener('click',recordTime);
document.getElementById('startStop').addEventListener('click',startStop);
window.addEventListener('keydown',withKeys);

//functions
function displayTime(data){
    document.getElementById('time').innerHTML = data;
}
function recordTime(){
    document.getElementById('timeRecorded').innerHTML += "<p>" + time + "</p>"
}

function stopCount() {
    clearInterval(inter);
    isCounting = false;
    displayTime(time);;
}

function startCount() {
    inter = setInterval(function(){
        time+=0.01;
        time = toTwoDec(time);
        displayTime(time);;
    },10);
    isCounting = true;
}

function toTwoDec(x) {
    var fact = Math.pow(10, 2);
    return Math.round(x*fact)/fact;
}

function startStop() {
    if (isCounting){
        stopCount();
    }else{
        startCount();
    }
    
}
function reset() {
    clearInterval(inter);
    time = 0;
    document.getElementById('timeRecorded').innerHTML = "";
    displayTime(time);
    isCounting = false;
}
function withKeys(e){
    //console.log(e.keyCode);
    if (e.keyCode == 83) {
        startStop();
    }else if(e.keyCode == 84){
        recordTime();
    }else if(e.keyCode == 82){
        reset();
    }
}