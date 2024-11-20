document.addEventListener('DOMContentLoaded', function () {
  const categoryLinks = document.querySelectorAll('.category-link');
  const slideshowContainer = document.querySelectorAll('.slideshow-container');

  categoryLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      const category = this.getAttribute('data-category');

      // Filter slides based on category
      slideshowContainer.forEach(slide => {
        const slideCategories = slide.getAttribute('data-category').split(' '); // Assuming space-separated

        if (category === 'all') {
          slide.style.display = 'block'; // Show all slideshow containers
        } else {
          // Check if the slide's categories include the selected category
          if (slideCategories.includes(category)) {
            slide.style.display = 'block'; // Show if matches the category
          } else {
            slide.style.display = 'none'; // Hide if it doesn't match
          }
        }
      });
    });
  });
});
