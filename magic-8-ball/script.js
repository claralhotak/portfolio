$(document).ready(function(){
  
  $("#answer").hide();    
    var magic8Ball = {};
    
    magic8Ball.listOfAnswers = ["YesYesYes", "Absolutely!", "Hmm.... well, yeah.", "Of course!", "Indubitably!", "100%!"];


    magic8Ball.askQuestion = function(question){
        var randomNumber = Math.random();
        var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
        var randomIndex = Math.floor(randomNumberForListOfAnswers);
        var answer = this.listOfAnswers[randomIndex];

        $("#answer").text( answer );

        console.log(question);
        console.log(answer);
    };


    var onClick = function() {
        var question = prompt("Type in your question! For example, should I invite Clara for an interview? Would she make a good candidate? Is she creative, thoughtful, and efficient?");
        magic8Ball.askQuestion(question);
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
    $("#answer").fadeIn(4000);
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
    $("#8ball").effect( "shake" );
    };
  
$("#questionButton").click( onClick );


});