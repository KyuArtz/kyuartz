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

// Toggle function for "What's New" popup
function toggleWn() {
  const popupWn = document.getElementById("popup-wn");
  const toggleBtn = document.getElementById("toggleWnBtn");
  
  if (popupWn.classList.contains("open-popup-wn")) {
      // Close the popup
      togglePopup("popup-wn", "close", "open-popup-wn");
      toggleBtn.textContent = "What's New?";
  } else {
      // Open the popup
      togglePopup("popup-wn", "open", "open-popup-wn");
      toggleBtn.textContent = "Close";
  }
}

// Open and Close Popup Functions for other popups
function openPopup() {
  togglePopup("popup", "open", "open-popup");
}

function closePopup() {
  togglePopup("popup", "close", "open-popup");
}

function openDonate() {
  togglePopup("donate-popup", "open", "open-donate");
}

function closeDonate() {
  togglePopup("donate-popup", "close", "open-donate");
}

// Cookie pop-up logic
document.addEventListener("DOMContentLoaded", function() {
  const cookiePopup = document.getElementById("cookie-popup");
  const acceptButton = document.getElementById("accept-cookies");

  // Check if the user has already accepted cookies
  if (!localStorage.getItem("cookiesAccepted")) {
      cookiePopup.style.display = "block"; // Show the pop-up
  }

  // Add click event to the accept button
  acceptButton.addEventListener("click", function() {
      localStorage.setItem("cookiesAccepted", "true"); // Save acceptance
      cookiePopup.style.display = "none"; // Hide the pop-up
  });
});

// Welcome Message Popup Logic
document.addEventListener("DOMContentLoaded", function() {
  if (!getCookie("popup-messageShown")) {
    var overlay = document.getElementById('overlay');
    var popupMessage = document.getElementById('popup-message');

    overlay.style.display = 'block';
    popupMessage.style.display = 'block';
    setCookie("popup-messageShown", true, 365); // Cookie expires in 365 days
  }
});

function closePopupMessage() {
  var overlay = document.getElementById('overlay');
  var popupMessage = document.getElementById('popup-message');

  overlay.style.display = 'none';
  popupMessage.style.display = 'none';
}

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) == 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return null;
}