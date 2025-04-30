// Utility function to disable and enable scrolling on the body
function toggleBodyScroll(disable) {
  if (disable) {
      document.body.classList.add('no-scroll');
  } else {
      document.body.classList.remove('no-scroll');
  }
}

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

function hideLoader() {
  const loader = document.querySelector('.loader');
  if (loader) {
      loader.classList.add('loader-hidden');
      
      // Remove scroll restriction when loader is hidden
      document.body.classList.remove('no-scroll'); 
      
      // Remove the loader from the DOM once hidden
      setTimeout(function() {
          loader.remove();
      }, 750); // Adjust the delay to match the transition duration in CSS
  }
}

// Function to change the theme dynamically
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
}

// Utility function for toggling popup classes
function togglePopup(popupId, action, className) {
  const popup = document.getElementById(popupId);
  if (action === "open") {
      popup.classList.add(className);
  } else {
      popup.classList.remove(className);
  }
}