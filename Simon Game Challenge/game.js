var started = false;
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var clickCount = 0;
var userClickedPattern = [];
var level = 0;

$(document).keypress(function() {
  if (!started) {
    started = true;
    $("h1").text("Level " + level);
    clickCount = 0;
    nextSequence();
  }
});

$(".btn").click(function() {
  var userChosenColor = $(this).attr('id');
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(clickCount);
  clickCount++;
})

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  level++;
  $("h1").text("Level " + level);
  var randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);

  var counter = 0;
  animateGame(counter, level - 1);
}

function playSound(name) {
  var buttonSound = new Audio("sounds/" + name + ".mp3");
  buttonSound.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function animateGame(count, currentLev) {
  setTimeout(function() {
    $("#" + gamePattern[count]).fadeOut(150).fadeIn(150);
    playSound(gamePattern[count]);
    if (count < currentLev) {
      count++;
      animateGame(count, currentLev);
    }
  }, 300);
}

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("success at ");
    if (currentLevel === (gamePattern.length - 1)) {

      setTimeout(function() {
        userClickedPattern = [];
        clickCount = 0;
        nextSequence();
      }, 1000);

    }
  } else {
    console.log("wrong at ");
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game over, Press Any Key to Restart");
    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
  userClickedPattern = [];
}
