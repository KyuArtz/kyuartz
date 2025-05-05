// Welcome Message Popup Logic
document.addEventListener("DOMContentLoaded", function() {
  if (!getCookie("welcome-messageShown")) {
    var welcomeOverlay = document.getElementById('welcome-overlay');
    var welcomeMessage = document.getElementById('welcome-message');

    welcomeOverlay.style.display = 'block';
    welcomeMessage.style.display = 'block';
    setCookie("welcome-messageShown", true, 365); // Cookie expires in 365 days
  }
});

function closeWelcomeMessage() {
  var welcomeOverlay = document.getElementById('welcome-overlay');
  var welcomeMessage = document.getElementById('welcome-message');

  welcomeOverlay.style.display = 'none';
  welcomeMessage.style.display = 'none';
}

// Utility Functions for Cookies
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
function openNotice() {
  togglePopup("notice", "open", "open-notice");
}

function closeNotice() {
  togglePopup("notice", "close", "open-notice");
}

function openDonate() {
  togglePopup("donate-popup", "open", "open-donate");
}

function closeDonate() {
  togglePopup("donate-popup", "close", "open-donate");
}

// General Toggle Popup Function
function togglePopup(id, action, openClass) {
  const popup = document.getElementById(id);
  popup.classList[action === "open" ? "add" : "remove"](openClass);
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