const imageContainer = document.querySelector(".centered-animation");
const images = ["", "image2.jpg", "image3.jpg"];
let currentIndex = 0;

function changeImage() {
  imageContainer.innerHTML = `<img src="${images[currentIndex]}" alt="Image ${currentIndex + 1}">`;
  currentIndex = (currentIndex + 1) % images.length;
}

// Cambiar la imagen cada 5 segundos
setInterval(changeImage, 5000);
