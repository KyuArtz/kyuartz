class Slideshow {
  constructor(container) {
    this.container = container;
    this.slides = Array.from(container.querySelectorAll('.mySlides'));
    this.dots = Array.from(container.querySelectorAll('.dot'));
    this.prevButton = container.querySelector('.prev');
    this.nextButton = container.querySelector('.next');
    this.slideIndex = 1;
    this.autoSlideInterval = 10000; // 10 seconds
    this.autoSlideTimer = null;

    this.showSlides(this.slideIndex);
    this.addEventListeners();
    this.startAutoSlide();
  }

  addEventListeners() {
    if (this.prevButton) {
      this.prevButton.addEventListener('click', () => {
        this.plusSlides(-1);
        this.resetAutoSlide();
      });
    }
    if (this.nextButton) {
      this.nextButton.addEventListener('click', () => {
        this.plusSlides(1);
        this.resetAutoSlide();
      });
    }
    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        this.currentSlide(index + 1);
        this.resetAutoSlide();
      });
    });
    // Pause auto-slide on mouse enter, resume on mouse leave
    this.container.addEventListener('mouseenter', () => this.pauseAutoSlide());
    this.container.addEventListener('mouseleave', () => this.startAutoSlide());
    
    // Keyboard navigation for left/right arrows
    this.container.setAttribute('tabindex', '0'); // Make container focusable
    this.container.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        this.plusSlides(-1);
        this.resetAutoSlide();
      } else if (e.key === 'ArrowRight') {
        this.plusSlides(1);
        this.resetAutoSlide();
      }
    });
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex + n);
  }

  currentSlide(n) {
    this.showSlides(n);
  }

  showSlides(n) {
    if (this.slides.length === 0) return;
    if (n > this.slides.length) this.slideIndex = 1;
    else if (n < 1) this.slideIndex = this.slides.length;
    else this.slideIndex = n;

    this.slides.forEach(slide => slide.classList.remove('active-slide'));
    this.dots.forEach(dot => dot.classList.remove('active-dot'));

    if (this.slides[this.slideIndex - 1]) {
      this.slides[this.slideIndex - 1].classList.add('active-slide');
    }
    if (this.dots[this.slideIndex - 1]) {
      this.dots[this.slideIndex - 1].classList.add('active-dot');
    }
  }

  startAutoSlide() {
    this.pauseAutoSlide();
    this.autoSlideTimer = setInterval(() => {
      this.plusSlides(1);
    }, this.autoSlideInterval);
  }

  pauseAutoSlide() {
    if (this.autoSlideTimer) {
      clearInterval(this.autoSlideTimer);
      this.autoSlideTimer = null;
    }
  }

  resetAutoSlide() {
    this.startAutoSlide();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.slideshow-container').forEach(container => {
    new Slideshow(container);
  });
});
/*
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
  const slideshowContainers = document.querySelectorAll('.slideshow-container');
  slideshowContainers.forEach(container => new Slideshow(container));
});
*/