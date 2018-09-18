var timeLeft = 30;
var timer = document.getElementById('display');
console.log(timeLeft); //#display
var timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        timesUp();
    } else {
        timer.innerHTML = timeLeft + " seconds remaining";
        timeLeft--;
    }
};
function timesUp() {
    alert("Times up!");
    location.reload();
}

$(".submit").on("click",function() {
    var amountCorrect = 0;
    for (var i = 1; i <= 45; i++) {
        var radios = document.getElementsByName('group' + i);
        for (var j = 0; j < radios.length; j++) {
            var radio = radios[j];
            if (radio.value == "correct" && radio.checked) {
                amountCorrect++;
            }
        }
    }
    $(".restart").show();
    $(".submit").hide();
    alert("Correct Answers: " + amountCorrect + " out of 3");
});

$(".restart").on("click",function() {
    location.reload();
});
