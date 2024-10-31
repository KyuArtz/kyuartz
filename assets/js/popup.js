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

// Comic titles and descriptions
const comicData = {
  type1: {
      title: "FRAGMENTS OF DECAY",
      description: "In a future where humanity has achieved peace and technological advancement, tensions simmer beneath the surface as minor conflicts arise between two factions: the Alliance and the Resistance. However, everything changes when fragments of a mysterious meteor crash into Terra, releasing a highly contagious dust that transforms living beings into terrifying hybrid creatures known as Corruptors. These monstrous beings, mutated with alien traits, take on multiple deadly forms. Some Corruptors mysteriously gain supernatural abilities, becoming hybrids—a force with the potential to unlock the secrets of the contagion, but also a temptation that some misuse for their own gain. As the contagion spreads, society crumbles. Once-thriving cities descend into chaos, governments collapse, and survivors turn rogue. Amid the destruction, factions form, each with its own vision for humanity’s survival. While some factions work to restore order and unity, others embrace brutality and selfishness, leading to inhumane acts that deepen the divides. With humanity on the brink of extinction, war erupts not only against the Corruptors but also among the survivors themselves. As new enemies emerge and darkness closes in, humanity’s last hope lies in those willing to stand together—or perish apart."
  },
  type2: {
      title: "LEGEND OF THE CRYSTALIGHT",
      description: ""
  },
  // Add more types as needed
};

function showDescription(button) {
  // Get the comic type from the data attribute
  const comicType = button.getAttribute("data-comic");
  // Get the corresponding title and description
  const comicInfo = comicData[comicType];
  // Set the title and description in the popup
  document.getElementById("comic-title").innerText = comicInfo.title;
  document.getElementById("comic-description").innerText = comicInfo.description;
  // Display the popup
  document.getElementById("description-popup").style.display = "block";
}

function closeDescription() {
  // Hide the popup
  document.getElementById("description-popup").style.display = "none";
}

// Optional: Close popup when clicking outside of it
window.onclick = function(event) {
  const popup = document.getElementById("description-popup");
  if (event.target == popup) {
      popup.style.display = "none";
  }
};