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