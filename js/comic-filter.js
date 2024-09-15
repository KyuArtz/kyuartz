document.addEventListener('DOMContentLoaded', function () {
  const categoryLinks = document.querySelectorAll('.category-link');
  const slideshowContainer = document.querySelectorAll('.slideshow-container');

  categoryLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      const category = this.getAttribute('data-category');

      // Filter slides based on category
      slideshowContainer.forEach(slide => {
        if (category === 'all') {
          slide.style.display = 'block'; // Show all slideshow container
        } else {
          // Show only slides that match the category, hide the rest
          if (slide.getAttribute('data-category') === category) {
            slide.style.display = 'block';
          } else {
            slide.style.display = 'none';
          }
        }
      });
    });
  });
});
