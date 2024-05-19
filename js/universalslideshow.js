(function() {
  document.addEventListener('DOMContentLoaded', () => {
      initSlideshow();
  });

  function initSlideshow() {
      const slideshowContainers = document.querySelectorAll('.slideshow-container');

      slideshowContainers.forEach(container => {
          const slides = container.querySelectorAll('.mySlides');
          const dots = container.querySelectorAll('.dot');
          if (slides.length > 0 && dots.length > 0) {
              slides[0].classList.add('active-slide');
              dots[0].classList.add('active');
          }

          // Dot click functionality
          container.addEventListener('click', (event) => {
              if (event.target.classList.contains('dot')) {
                  const index = Array.from(dots).indexOf(event.target);
                  setActiveSlide(container, index);
              }
          });

          // Prev/Next click functionality
          container.querySelectorAll('a').forEach(link => {
              link.addEventListener('click', (event) => {
                  event.preventDefault();
                  if (link.classList.contains('next')) {
                      changeSlide(container, 1);
                  } else if (link.classList.contains('prev')) {
                      changeSlide(container, -1);
                  }
              });
          });
      });
  }

  function setActiveSlide(container, index) {
      const slides = container.querySelectorAll('.mySlides');
      const dots = container.querySelectorAll('.dot');
      
      slides.forEach(slide => slide.classList.remove('active-slide'));
      dots.forEach(dot => dot.classList.remove('active'));

      slides[index].classList.add('active-slide');
      dots[index].classList.add('active');
  }

  function changeSlide(container, direction) {
      const slides = container.querySelectorAll('.mySlides');
      const dots = container.querySelectorAll('.dot');
      const currentSlide = container.querySelector('.active-slide');
      const currentIndex = Array.from(slides).indexOf(currentSlide);
      let newIndex = (currentIndex + direction + slides.length) % slides.length;

      setActiveSlide(container, newIndex);
  }
})();
