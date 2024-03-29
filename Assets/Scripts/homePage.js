// Select the hamburger div, the navbar, the navLinks div, and the links
let hamburger = document.querySelector(".hamburger");
let navbar = document.querySelector(".navbar");
let navLinks = document.querySelector(".navLinks");
let links = document.querySelectorAll(".navLinks a");

// Add an event listener for click events on the hamburger div
hamburger.addEventListener("click", function () {
  // Toggle the 'cross' class on the hamburger div
  hamburger.classList.toggle("cross");
  // Toggle the 'show' class on the navLinks div
  navLinks.classList.toggle("show");
  // Toggle the 'active' class on the navbar
  navbar.classList.toggle("active");
});

// Add an event listener for click events on each link
links.forEach(function (link) {
  link.addEventListener("click", function () {
    // Remove the 'show' class from the navLinks div
    navLinks.classList.remove("show");
    // Remove the 'cross' class from the hamburger div
    hamburger.classList.remove("cross");
    // Remove the 'active' class from the navbar
    navbar.classList.remove("active");
  });
});

// Add an event listener for scroll events on the window
window.addEventListener("scroll", function () {
  // Remove the 'show' class from the navLinks div
  navLinks.classList.remove("show");
  // Remove the 'cross' class from the hamburger div
  hamburger.classList.remove("cross");
  // Remove the 'active' class from the navbar
  navbar.classList.remove("active");
});

// Video Player Controls
document.querySelector(".playerBtn").addEventListener("click", function () {
  var myVideo = document.getElementById("myVideo");
  if (myVideo.paused) {
    myVideo.play();
  } else {
    myVideo.pause();
  }
});


let aboutUsVideoEl = document.getElementById("aboutUsVideo");
let aboutUsContainerEl = document.getElementById("aboutUsVideoContainer");

// Add an event listener to the container
aboutUsContainerEl.addEventListener("click", function () {
  // If the video is currently playing, pause it
  if (!aboutUsVideoEl.paused) {
    aboutUsVideoEl.pause();
  }
  // Otherwise, play the video
  else {
    aboutUsVideoEl.play();
  }
});


