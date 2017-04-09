var audio = new Audio('allstar.mp3');
audio.play();
var start = document.getElementById('start');
var stop = document.getElementById('stop');



document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('memePage');
  checkPageButton.addEventListener('click', function() {  	

  // Executes the js file that replaces all the images on the page
  chrome.tabs.executeScript(null, {
    file: "memeify.js"
  });

  }, false);
}, false);


