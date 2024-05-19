class Slideshow {
  constructor(container) {
    this.container = container;
    this.slides = container.querySelectorAll('.mySlides');
    this.dots = document.querySelectorAll('.dot');
    this.prevButton = container.querySelector('.prev');
    this.nextButton = container.querySelector('.next');
    this.slideIndex = 1;

    this.showSlides(this.slideIndex);
    this.addEventListeners();
  }

  addEventListeners() {
    this.prevButton.addEventListener('click', () => this.plusSlides(-1));
    this.nextButton.addEventListener('click', () => this.plusSlides(1));
    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => this.currentSlide(index + 1));
    });
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n) {
    if (n > this.slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = this.slides.length;
    }

    this.slides.forEach(slide => slide.classList.remove('active-slide'));
    this.dots.forEach(dot => dot.classList.remove('active-dot'));

    this.slides[this.slideIndex - 1].classList.add('active-slide');
    this.dots[this.slideIndex - 1].classList.add('active-dot');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const slideshowContainers = document.querySelectorAll('.slideshow_container');
  slideshowContainers.forEach(container => new Slideshow(container));
});
