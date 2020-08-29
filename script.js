/*
============================================
; Title:  function-class.js
; Author: W3School.com
; Date:   27 August 2020
; Modified by: Karina Alvarez
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
}
