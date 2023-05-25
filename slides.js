// pick all of the images and layer them based on the z-index

const slideArea = document.querySelector("div.slides");
const images = slideArea.querySelectorAll("img");

// keep track of two things
let currentSlide = 0;
let z = 1;
