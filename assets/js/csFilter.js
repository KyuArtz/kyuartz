document.addEventListener('DOMContentLoaded', function () {
  const categoryLinks = document.querySelectorAll('.category-link');
  const commissionItems = document.querySelectorAll('.cs-content');

  categoryLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      const category = this.getAttribute('data-category');

      // Filter items based on the selected category
      commissionItems.forEach(item => {
        if (category === 'all') {
          item.style.display = 'block'; // Show all if 'All' is selected
        } else {
          // Show only items that match the category, hide the rest
          if (item.getAttribute('data-category') === category) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        }
      });
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.sample-img').forEach(img => {
      img.addEventListener('click', function() {
          // Toggle the 'clicked' class
          this.classList.toggle('clicked');
          console.log('Toggled:', this.classList);
      });
  });
});