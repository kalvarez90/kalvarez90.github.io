/*
============================================
; Title:  function-class.js
; Date:   27 August 2020
; Author: Karina Alvarez
; Description: JS for profile
;===========================================
*/

// Responsive NavBar for smaller screens
function myFunction() {
  var x = document.getElementById("navB");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
};

/*======
; TYPEWRITTER EFFECT
; Author: W.S. Toh
; Modified by: Karina Alvarez
*/

var tw = {
  container: "typewriterSub", // ID of typewriter container
  text: [ // Blocks of text to show
    "A wife",
    "A mother of 4",
    "A year-round homeschool mom",
    "A pet foster mom",
    "A student at Bellevue University",
    "A future web developer"

  ],
  delay: 100,
  blockDelay: 800,

  timer: null, // Used to hold the timer
  pointer: 0, // text position
  block: 0, // block of text
  draw: function() {
    tw.pointer++;
    tw.container.innerHTML = tw.text[tw.block].substring(0, tw.pointer);
    if (tw.pointer < tw.text[tw.block].length) {
      tw.timer = setTimeout(tw.draw, tw.delay);
    }

    // End of block
    else {
      tw.block++;
      if (tw.text[tw.block] == undefined) {
        tw.block = 0;
      }
      tw.timer = setTimeout(tw.reset, tw.blockDelay);
    }
  },
  reset: function() {
    tw.pointer = 0;
    tw.container.innerHTML = "";
    tw.timer = setTimeout(tw.draw, tw.delay);
  }
};

window.addEventListener("load", function() {
  tw.container = document.getElementById(tw.container);
  tw.draw();
});

//Load more button
$(function(){
  $("div.column").slice(0, 3).show(); // select the first three
  $("#loadMore").click(function(e){ // click event for load more
      e.preventDefault();
      $("div.column:hidden").slice(0, 3).show(); // select next 3 hidden divs and show them
      if($("div.column:hidden").length == 0){ // check if any hidden divs still exist
          alert("No more columns to show"); // alert if there are none left
      }
  });
});
