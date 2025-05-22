(function () {
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    const containers = document.querySelectorAll('.slideshow-container');
    containers.forEach(container => {
      const slides = container.querySelectorAll('.mySlides');
      const dots = container.querySelectorAll('.dot');
      if (slides.length && dots.length) {
        slides.forEach(slide => slide.classList.remove('active-slide'));
        dots.forEach(dot => dot.classList.remove('active'));
        slides[0].classList.add('active-slide');
        dots[0].classList.add('active');
      }

    // Dot functionality
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function () {
          slides.forEach(slide => slide.classList.remove('active-slide'));
          dots.forEach(dot => dot.classList.remove('active'));
          if (slides[index] && dots[index]) {
            slides[index].classList.add('active-slide');
            dots[index].classList.add('active');
          }
      });
    });

    // Keyboard arrow navigation
      container.setAttribute('tabindex', '0'); // Make focusable
      container.addEventListener('keydown', function (e) {
        const currentIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active-slide'));
        let newIndex = currentIndex;
        if (e.key === 'ArrowRight') {
          newIndex = (currentIndex + 1) % slides.length;
        } else if (e.key === 'ArrowLeft') {
          newIndex = (currentIndex - 1 + slides.length) % slides.length;
        } else {
          return;
        }
        slides.forEach(slide => slide.classList.remove('active-slide'));
        dots.forEach(dot => dot.classList.remove('active'));
        slides[newIndex].classList.add('active-slide');
        dots[newIndex].classList.add('active');
        e.preventDefault();
      });
    });

    // Prev/Next functionality
    document.querySelectorAll('.slideshow-container button.prev, .slideshow-container button.next').forEach(btn => {
      btn.addEventListener('click', function () {
        const container = this.closest('.slideshow-container');
        const slides = container.querySelectorAll('.mySlides');
        const dots = container.querySelectorAll('.dot');
        const currentIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active-slide'));
        let newIndex = currentIndex;

        if (this.classList.contains('next')) {
          newIndex = (currentIndex + 1) % slides.length;
        } else if (this.classList.contains('prev')) {
          newIndex = (currentIndex - 1 + slides.length) % slides.length;
        }

        slides.forEach(slide => slide.classList.remove('active-slide'));
        dots.forEach(dot => dot.classList.remove('active'));
        slides[newIndex].classList.add('active-slide');
        dots[newIndex].classList.add('active');
      });
    });
  }
})();
