document.addEventListener("DOMContentLoaded", () => {
  const images = [
    {
      src: "images/artgallary/Awakened_from_a_deep_slumber (2024).jpg",
      title: "Elishia_chibi_grayscale (2023)",
      category: "grayscale"
    },
    {
      src: "images/artgallary/Elishia_portrait (2023).jpg",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/Liliana_portrait (2023).jpg",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/Tekushiki (2023).jpg",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/Feya_landscape (2023).jpg",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/Feya_portrait (2023).jpg",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/Elishia_chibi_grayscale (2023).jpg",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    {
      src: "images/artgallary/",
      title: "",
      category: "grayscale"
    },
    
    // Add more images here
  ];

  const gallery = document.getElementById('gallery');

  images.forEach(image => {
    const link = document.createElement('a');
    link.href = image.src;
    link.setAttribute('data-lightbox', 'Art');
    link.setAttribute('data-title', image.title);
    link.setAttribute('data-category', image.category);
    link.oncontextmenu = () => false;

    const img = document.createElement('img');
    img.src = image.src;
    link.appendChild(img);

    gallery.appendChild(link);
  });

  document.querySelectorAll('.category-link').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const category = event.target.getAttribute('data-category');
      filterImages(category);
    });
  });

  function filterImages(category) {
    const links = document.querySelectorAll('#gallery a');
    links.forEach(link => {
      if (category === 'all' || link.getAttribute('data-category') === category) {
        link.style.display = '';
      } else {
        link.style.display = 'none';
      }
    });
  }

  // Default to showing all images
  filterImages('all');
});
