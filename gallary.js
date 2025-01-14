// Array of image sources
const images = [
    "assets/images/img1.jpg",
    "assets/images/img2.jpg",
    "assets/images/img3.jpg",
    "assets/images/img4.jpg",
    "assets/images/img5.jpg",
    "assets/images/img6.jpg",
    "assets/images/img7.jpg",
    "assets/images/img8.jpg",
    "assets/images/img9.jpg",
    "assets/images/img10.jpg",
    "assets/images/img11.jpg",
    "assets/images/img12.jpg"
  ];
  
  let currentIndex = 0;
  
  // Function to open the lightbox and display the clicked image
  function openLightbox(index) {
    currentIndex = index;
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    lightboxImage.src = images[currentIndex];  // Set the large image source
    lightbox.style.display = "flex";  // Show the lightbox
  }
  
  // Function to close the lightbox
  function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";  // Hide the lightbox
  }
  
  // Function to change the image on left or right arrow click
  function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;  // Wrap to last image if at the beginning
    } else if (currentIndex >= images.length) {
      currentIndex = 0;  // Wrap to first image if at the end
    }
    const lightboxImage = document.getElementById("lightbox-image");
    lightboxImage.src = images[currentIndex];  // Update the large image
  }
  