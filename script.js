
// Get the navbar
var navbar = document.getElementById("myNavbar");

// Add scroll event listener
window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.classList.add("scroll-effect");
  } else {
    navbar.classList.remove("scroll-effect");
  }
};

