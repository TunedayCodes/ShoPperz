const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  burger.classList.toggle('toggle');
});

// Variables
const carouselContainer = document.querySelector('.carousel-container');
const images = carouselContainer.querySelectorAll('img');
const imageWidth = images[0].clientWidth;

let currentIndex = 0;
let timer;

// Function to move to the next image
function nextImage() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  updateCarousel();
}

// Function to move to the previous image
function prevImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  updateCarousel();
}

// Function to update the carousel position
function updateCarousel() {
  carouselContainer.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

// Start the slideshow
function startSlideshow() {
  timer = setInterval(nextImage, 3000); // Change the duration (in milliseconds) as desired
}

// Stop the slideshow
function stopSlideshow() {
  clearInterval(timer);
}

// Event listeners for next and previous buttons
document.getElementById('nextBtn').addEventListener('click', () => {
  stopSlideshow();
  nextImage();
});
document.getElementById('prevBtn').addEventListener('click', () => {
  stopSlideshow();
  prevImage();
});

// Start the slideshow initially
startSlideshow();


