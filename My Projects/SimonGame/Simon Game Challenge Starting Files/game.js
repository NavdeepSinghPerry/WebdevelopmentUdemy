var gamePattern=[];
var buttonColours =["red", "blue", "green", "yellow"];
var userClickedPattern=[];
var level =0;

$(".btn").click(function() {
  $("h1").text("Level0");
  nextSequence(this.id);
})

$(document).on('keypress', function(e) {
nextSequence(e.key);
})

function nextSequence(id){
  level++;
    $("h1").text("Level"+level);
  userChosenColour = id;
  var randomNumber= Math.round(Math.random()*3);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  console.log("gamePattern");
  $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', "sounds/"+ randomChosenColour+".mp3");
          audioElement.play();

  userClickedPattern.push(userChosenColour) ;
  animatePress(userChosenColour);
}


function animatePress(currentColour){

  $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
$("#"+currentColour).removeClass("pressed");
},100);
}

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}
