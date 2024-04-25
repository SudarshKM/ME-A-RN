buttonColors=['red','blue','green','yellow'];

gamePattern=[];

userClickedPattern =[];

var level = 0;

var started =false;


nextSequence = () => {

    level++;
    $("h1").text("level: "+level)

    var randomNumber = Math.floor(Math.random() *4);
    console.log(randomNumber);
    var randomChosenColor = buttonColors[randomNumber];
    console.log(randomChosenColor);
    gamePattern.push(randomChosenColor);
    console.log(gamePattern);

    $('#' + randomChosenColor).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);

   
}

$(".btn").on("click" , function handler(e) {
    var userChosenColor =  e.target.id;
    console.log(e.target.id);

    userClickedPattern.push(userChosenColor);

    console.log(userClickedPattern);

    playSound(userChosenColor);

    animatePress(userChosenColor);

    lastIndex = userClickedPattern.indexOf(userChosenColor);

    checkAnswer(lastIndex)

})


$(document).on("keypress" , function (e) {
 if (!started) {
    console.log(e.key);
    $("h1").text("level: "+level)
    nextSequence();
    started=true;

 }
    
})

playSound=(name)=> {
    var audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();

}

animatePress =(currentColor) =>{
    $("."+currentColor).addClass("pressed");
    setTimeout( ()=>{$("."+currentColor).removeClass("pressed")},100)
}


checkAnswer=(currentLevel) => {
if (gamePattern[currentLevel]==userClickedPattern[currentLevel]) {
    console.log("kidu");
    setTimeout(()=>{
        nextSequence();
        userClickedPattern=[];
    } , 1000)
}
else {
    console.log("wrong");

    var wrong = new Audio("./sounds/wrong.mp3");
    wrong.play();
    $("body").addClass("game-over");
    setTimeout(()=>{
        $("body").removeClass("game-over");
    },200)

    $("h1").text("Game Over, Press Any Key to Restart");

    startOver();
}
}



startOver=() =>{
    level=0;
    gamePattern=[];
    started=false

}