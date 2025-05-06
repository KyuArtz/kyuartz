document.addEventListener("DOMContentLoaded", function() {
  // Check if the loader has been shown before
  if (localStorage.getItem('loaderDisplayed') === 'true') {
      // Hide the loader if it has been shown before
      hideLoader();
  } else {
      // Show the loader for the first time
      document.body.classList.add('no-scroll'); // Disable scroll while loader is active
      localStorage.setItem('loaderDisplayed', 'true');
      
      window.addEventListener('load', function() {
          // Add a small delay to ensure the page is fully loaded before hiding the loader
          setTimeout(hideLoader, 500); // Adjust the delay as necessary
      });
  }
});

// Utility function to disable and enable scrolling on the body
function toggleBodyScroll(disable) {
  if (disable) {
      document.body.classList.add('no-scroll');
  } else {
      document.body.classList.remove('no-scroll');
  }
}

function hideLoader() {
  const loader = document.querySelector('.loader');
  if (loader) {
      loader.classList.add('loader-hidden');
      document.body.classList.remove('no-scroll'); 
      
      // Remove the loader from the DOM once hidden
      setTimeout(function() {
          loader.remove();
      }, 750); // Adjust the delay to match the transition duration in CSS
  }
}

function changeTheme(themeName) {
  // Remove any previously set theme class
  document.body.classList.remove(...document.body.classList);
  
  // Apply the selected theme as a class to the body
  document.body.classList.add(`theme-${themeName}`);
  
  // Save the selected theme in localStorage
  localStorage.setItem('selectedTheme', themeName);
}

// Function to load the saved theme from localStorage when the page loads
function loadThemeFromStorage() {
  const savedTheme = localStorage.getItem('selectedTheme');
  
  // If a theme was saved, apply it
  if (savedTheme) {
      changeTheme(savedTheme);
  } else {
      // Default theme if none is saved
      changeTheme('default');
  }
}

// Execute theme load on page load
window.onload = function() {
  loadThemeFromStorage();
};

const themeOptions = [
  { name: "Default", value: "default" },
  { name: "Dark-Blue", value: "dark-blue" },
  { name: "Dark-Red", value: "dark-red"},
  { name: "Dark-Purple", value: "dark-purple"},
  { name: "Dark-Green", value: "dark-green"},
  { name: "Dark-Yellow", value: "dark-yellow"},
  { name: "Modern-White", value: "modern-white"},
  { name: "White-Blue", value: "white-blue"},    
  { name: "White-Red", value: "white-red" },
  { name: "White-Purple", value: "white-purple"},
  { name: "White-Green", value: "white-green"},
  { name: "White-Yellow", value: "white-yellow"},
];

// Check if the theme select dropdown exists
const themeSelect = document.getElementById('theme-select');

if (themeSelect) {
  // Dynamically create the theme options in the dropdown
  themeOptions.forEach(theme => {
    const option = document.createElement('option');
    option.innerText = theme.name;
    option.value = theme.value;
    themeSelect.appendChild(option);
  });

  // Function to change the theme based on selection
  themeSelect.addEventListener('change', (e) => {
    const selectedTheme = e.target.value;
    changeTheme(selectedTheme);
  });

  // Load the previously selected theme into the dropdown on page load (if saved)
  document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('selectedTheme') || 'default';
    document.body.className = 'theme-' + savedTheme;
    themeSelect.value = savedTheme; // Set the dropdown value to the saved theme
  });
};

document.addEventListener('DOMContentLoaded', () => {
  /**
   * Attaches a tilt effect to all elements matching the selector.
   *
   * @param {string} selector - CSS selector for target elements.
   * @param {object} options - Optional configuration:
   * @property {number} maxTilt - Maximum tilt angle in degrees (default: 10)
   * @property {number} perspective - Perspective value in pixels (default: 500)
   */
  function applyTiltEffect(selector, options = {}) {
    const elements = document.querySelectorAll(selector);
    const maxTilt = options.maxTilt || 10;
    const perspective = options.perspective || 500;

    elements.forEach((elem) => {
      let animationFrame;

      elem.addEventListener('mousemove', (event) => {
        // Cancel any pending animation frame to prevent jittering
        if (animationFrame) cancelAnimationFrame(animationFrame);

        animationFrame = requestAnimationFrame(() => {
          // Use bounding rectangle for calculated coordinates
          const rect = elem.getBoundingClientRect();
          const relX = event.clientX - rect.left;
          const relY = event.clientY - rect.top;
  
          // Calculate tilt angles (-maxTilt to +maxTilt)
          const rotateY = ((relX / rect.width) - 0.5) * maxTilt * 2;
          const rotateX = ((relY / rect.height) - 0.5) * -maxTilt * 2;
  
          elem.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
      });

      elem.addEventListener('mouseleave', () => {
        // Reset the tilt effect and cancel any pending frame
        elem.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg)`;
        if (animationFrame) cancelAnimationFrame(animationFrame);
      });
    });
  }

  // Apply the tilt effect to elements with the "caption-content" class.
  // To use it on other content, simply change the selector instead.
  applyTiltEffect('.caption-content', { maxTilt: 10, perspective: 500 });
  applyTiltEffect('.character-card', { maxTilt: 7, perspective: 500 });
  applyTiltEffect('.character-info', { maxTilt: 3, perspective: 500 });
  applyTiltEffect('.character-slider', { maxTilt: 1, perspective: 500 });
});

/*
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.caption-content').forEach(card => {
    let animationFrame;

    card.addEventListener('mousemove', (event) => {
      // Cancel any pending frame so we don't overdo the updates.
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }

      animationFrame = requestAnimationFrame(() => {
        // Use the element's bounding rectangle for consistent measurements.
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left; // Mouse X relative to the card
        const y = event.clientY - rect.top;  // Mouse Y relative to the card

        // Calculate tilt angles: adjust the multiplier as needed.
        const rotateY = ((x / rect.width) - 0.5) * 10; // Left/Right tilt
        const rotateX = ((y / rect.height) - 0.5) * -10; // Up/Down tilt

        card.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
    });

    card.addEventListener('mouseleave', () => {
      // Reset the transformation when the mouse leaves.
      card.style.transform = 'perspective(500px) rotateX(0deg) rotateY(0deg)';
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    });
  });
});
*/
