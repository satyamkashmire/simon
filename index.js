var gamePattern = [];
var buttonColours = ['red', 'yellow', 'blue', 'green'];
var userClickedPattern = [];
var level = 0;
var gameStarted = false;

$(document).keypress(function () {
    if (level === 0 && !gameStarted) {
        computerCall();
        console.log("this is working");
        $("h1").text("level 0");
        level++;
    }
});


function playGame() {
    if (level === 0 && !gameStarted) {
        computerCall();
        console.log("this is working");
        $("h1").text("level 0");
        level++;
    }
}



function computerCall() {
    var randomNumber = Math.round(Math.random() * 3);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    userClickedPattern = [];
    for (let i = 0; i < gamePattern.length; i++) {
        playSoundAnimate(i);
    }
}

// action functions
function playSoundAnimate(i) {
    setTimeout(function () {
        console.log(gamePattern[i]);
        playSound(gamePattern[i]);
        animatePress(gamePattern[i]);
    }, 1000 * i);

}

function playSound(randomChosenColour) {
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();


}

function animatePress(currentColour) {

    $("#" + currentColour).addClass('pressed');
    setTimeout(function () {

        $("#" + currentColour).removeClass('pressed');

    }, 200);


}

$(".btn").click(function () {
    playSound(this.id);
    animatePress(this.id);
    userClickedPattern.push(this.id);
    var currentColour = userClickedPattern.lastIndexOf(this.id);

    if (gamePattern[gamePattern.length - 1] === userClickedPattern[gamePattern.length - 1]) {
        setTimeout(function () {
            computerCall();
        }, 2000)


    }
    if (gamePattern[currentColour] != userClickedPattern[currentColour]) {
        // gameover
        alert("game over");

    }
});