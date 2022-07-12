const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;
timeDisplay.textContent = "00:00:00";

startBtn.addEventListener("click", () => {
    if(paused)
    {
        //unpause
        paused = false; 
        //calulate the start time
        startTime = Date.now() - elapsedTime; 
        //begins timer
        intervalId = setInterval(updateTime,1000);
    }
});
pauseBtn.addEventListener("click", () => {
    if(!paused)
    {
        //unpause
        paused = true; 
        //calulate the start time
        elapsedTime = Date.now() - startTime; 
        //begins timer
        clearInterval(intervalId);
    }
});
resetBtn.addEventListener("click", () => {
    //reset everything to default like in the beginning lines
    paused = true;
     startTime = 0;
     elapsedTime = 0;
     currTime = 0;
     intervalId;
     hrs = 0;
     mins = 0;
     secs = 0;
    timeDisplay.textContent = "00:00:00";

});

function updateTime()
{
    elapsedTime = Date.now() - startTime;

    //these lines convert the time 
    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

    //padding for single digit nums
    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);

    timeDisplay.textContent = `${hrs}:${mins}:${secs}`;

    //function for padding using ternary 
    function pad(unit)
    {
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }

}