

var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 6; // 6AM
var breakfastTime = 8; // 8AM
var lunchTime = 12; // 12PM
var dinnerTime = 5; // 5PM
var nightcapTime = 10; // 12PM

var updateClock = function(){

     var time = new Date().getHours();
     var drink = document.getElementById('drink');
     var message = document.getElementById('timeEvent');
     var messageText;
     var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

  

if (time > wakeupTime){
    messageText = "Time for some coffee.";
  image = "wakeup.jpg";
} else if (time > breakfastTime) {
    messageText = "Enjoy a smoothie for breakfast.";
  image = "breakfast.jpg";
} else if (time > lunchTime) {
    messageText = "More coffee.";
  image = "lunch.jpg";
} else if (time > dinnerTime) {
    messageText = "Finally! A glass of wine!";
  image = "dinner.jpg";
} else if (time > nightcapTime) {
    messageText = "It's been a long day.";
  image = "nightcap.jpg";
} 

     message.innerText = messageText;
     drink.src = image;

     showCurrentTime();

};



/*  jQuery ready function. Specify a function to execute when the DOM is fully loaded.  */
$(document).ready(function() {
  var currentdate = new Date();
	var l=0;
	function callme()
	{
		currentdate = new Date();
		$('.hour').html(currentdate.getHours());
		$('.min').html(currentdate.getMinutes());
		$('.second').html(currentdate.getSeconds());
		$('.data').css({'padding-left':l+'px'}); 
		l=l+1;
	}
window.setInterval(callme,1000);

});