let slideIndex = 0;
const haikuSlides = document.getElementsByClassName('haiku-slide');

function showSlides() {
  for (let i = 0; i < haikuSlides.length; i++) {
    haikuSlides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > haikuSlides.length) { slideIndex = 1; }
  haikuSlides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

window.onload = function() {
  showSlides();
}