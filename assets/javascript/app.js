var timeLeft = 30;
var timer = document.getElementById('display');
console.log(timeLeft); //#display
var timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        timesUp();
    } else {
        timer.innerHTML ="00:" + timeLeft + " seconds remaining";
        timeLeft--;
    }
};
function timesUp() {
    alert("Times up!");
}


//start at 30
    //Display at 00:30, how do I make the timeLeft, which is a number, equal to the string of the display?
//count down by one increments of a second
//when the timer hits 0, alerts Times up!

