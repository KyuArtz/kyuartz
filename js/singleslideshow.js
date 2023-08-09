let slideIndex = 1;
  showSlides(slideIndex);
  
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
  
  // Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
  
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let btn = document.getElementsByClassName("btn");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < btn.length; i++) {
    btn[i].className = btn[i].className.replace(" active-btn", "");
  }
  slides[slideIndex-1].style.display = "block";
  btn[slideIndex-1].className += " active-btn";
}