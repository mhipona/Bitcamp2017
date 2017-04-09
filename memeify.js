/* Where the magic happens */

/* Implements the button */
document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('memePage');
  checkPageButton.addEventListener('click', function() {
  	var myAudio = new Audio();        // create the audio object
	myAudio.src = "allstar.mp3"; // assign the audio file to its src
	myAudio.play(); 
  	
    
  }, false);
}, false);