document.addEventListener("DOMContentLoaded", function() {
  // Check if the loader has been shown before
  if (localStorage.getItem('loaderDisplayed') === 'true') {
      // Hide the loader if it has been shown before
      hideLoader();
  } else {
      // Show the loader for the first time
      localStorage.setItem('loaderDisplayed', 'true');
      window.addEventListener('load', function() {
          // Add a small delay to ensure the page is fully loaded before hiding the loader
          setTimeout(hideLoader, 500); // Adjust the delay as necessary
      });
  }
});

function hideLoader() {
  var loader = document.querySelector('.loader');
  if (loader) {
      loader.classList.add('loader-hidden');
      // Remove the loader from the DOM once hidden
      setTimeout(function() {
          loader.remove();
      }, 750); // Adjust the delay to match the transition duration in CSS
  }
}

let availableKeywords = [
  { name: 'Portfolio', url: '../pages/portfolio.html' },
  { name: 'About', url: '../pages/about.html' },
  { name: 'Contact Us', url: '../pages/contact.html' },
  { name: 'Commission Sheet', url: '../pages/commission-sheet.html' },
  { name: 'Commissioner Information', url: '../pages/commissioner-info.html' },
  { name: 'Comic', url: '../pages/comic.html' },
  { name: 'Original Character', url: '../pages/original-character.html' },
  { name: 'Timelapse Video', url: '../pages/timelapse-video.html' },
  { name: 'Personal Project', url: '../pages/personal-project.html' },
  { name: 'Terms of Service', url: '../pages/terms-of-service.html' },
  { name: 'Privacy Policy', url: '../pages/privacy-policy.html' },
  { name: 'FAQs', url: '../pages/faq.html' },
  { name: 'Customer Support', url: '../pages/customer-support.html' },
  { name: 'Help Center', url: '../pages/help.html' },
  { name: 'User Guide to KyuArtz', url: '../pages/guide.html' },
  { name: 'Troubleshooting', url: '../pages/troubleshoot.html' },
  { name: 'Preferences', url: '../pages/preferences.html' },
  { name: 'Paypal (KyuArtz)', url: 'https://paypal.me/kyushiartz?country.x=PH&locale.x=en_US' },
  { name: 'Facebook (KyuArtz page)', url: 'https://www.facebook.com/KyuArtz' },
  { name: 'Youtube (KyuArtz page)', url: 'https://www.youtube.com/channel/UCfrtqAzAoFq0IzE_nlvi4Tw' },
  { name: 'X-Twitter (KyuArtz page)', url: 'https://x.com/KyuArtz_992' },
  { name: 'Artstation (KyuArtz page)', url: 'https://KyuArtz.artstation.com/' },
  { name: 'Cara (KyuArtz page)', url: 'https://cara.app/kyuu' },
];

const resultBox = document.querySelector(".search-result");
const inputBox = document.getElementById("input-box");
const searchButton = document.getElementById("search-button");

inputBox.onkeyup = function() {
  search();
}

searchButton.onclick = function(event) {
  event.preventDefault(); // Prevent the form from submitting
  search();
}

function search() {
  let result = [];
  let input = inputBox.value;
  if (input.length) {
      result = availableKeywords.filter((keyword) => {
          return keyword.name.toLowerCase().includes(input.toLowerCase());
      });
      display(result);
  } else {
      resultBox.style.display = 'none';
  }
}

function display(result) {
  if (result.length === 0) {
      resultBox.innerHTML = "<p>No matching results were found.</p>";
  } else {
      const content = result.map((list) => {
          return `<li><a href="${list.url}"><i class="fa-solid fa-magnifying-glass"></i> ${list.name}</a></li>`;
      }).join(""); // join the array into a single string

      resultBox.innerHTML = `<ul>${content}</ul>`;
  }
  resultBox.style.display = 'block'; // show the result box
}

// Hide the search results when clicking outside
document.addEventListener('click', function(event) {
  if (!resultBox.contains(event.target) && !inputBox.contains(event.target) && !searchButton.contains(event.target)) {
      resultBox.style.display = 'none';
  }
});

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
  { name: "Darker", value: "darker" },
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

// Dynamically create the theme options in the dropdown
const themeSelect = document.getElementById('theme-select');

themeOptions.forEach(theme => {
  const option = document.createElement('option');
  option.innerText = theme.name;
  option.value = theme.value;
  themeSelect.appendChild(option);
});

// Function to change the theme based on selection
function changeTheme(theme) {
  // Here you can handle how the theme will be applied.
  document.body.className = 'theme-' + theme;

  // Optionally, save the selected theme in local storage or cookies
  localStorage.setItem('selectedTheme', theme);
}

// Load the previously selected theme on page load (if saved)
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('selectedTheme') || 'default';
  document.body.className = 'theme-' + savedTheme;
  themeSelect.value = savedTheme; // Set the dropdown value to the saved theme
});

// Utility function for toggling popup classes
function togglePopup(popupId, action, className) {
  const popup = document.getElementById(popupId);
  if (action === "open") {
      popup.classList.add(className);
  } else {
      popup.classList.remove(className);
  }
}