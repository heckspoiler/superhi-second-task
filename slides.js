// pick all of the images and layer them based on the z-index

const slideArea = document.querySelector("div.slides");
const images = slideArea.querySelectorAll("img");

// keep track of two things
let currentSlide = 0;
let z = 1;

// when i click slide area, change slide on z-index

slideArea.addEventListener("click", function () {
  currentSlide = currentSlide + 1;

  if (currentSlide > images.length - 1) {
    currentSlide = 0;
  }

  z = z + 1;

  // remove the animation from the style for every image
  images.forEach((image) => {
    image.style.animation = "";
  });

  // pick the right image
  images[currentSlide].style.zIndex = z;
  images[currentSlide].style.animation = "fade 0.5s";
});

slideArea.addEventListener("mouseover", function () {
  images.forEach((image) => {
    // with this technique (15 * xxxx - 50) we will snap everything to a grid, we'll create a grid
    const x = 15 * Math.floor(Math.random() * 5) - 50;
    const y = 15 * Math.floor(Math.random() * 5) - 50;
    image.style.transform = `translate(${x}px, ${y}px)`;
  });
});

slideArea.addEventListener("mouseout", function () {
  images.forEach((image) => {
    image.style.transform = "";
  });
});
