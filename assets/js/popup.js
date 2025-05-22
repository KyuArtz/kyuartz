// Utility Functions for Cookies
const setCookie = (name, value, days) => {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = `${name}=${value || ""}${expires}; path=/`;
};

const getCookie = (name) => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let c of ca) {
    c = c.trim();
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
  }
  return null;
};

// General Toggle Popup Function
const togglePopup = (id, action, openClass) => {
  const popup = document.getElementById(id);
  if (popup) popup.classList[action === "open" ? "add" : "remove"](openClass);
};

// Close Welcome Message
const closeWelcomeMessage = () => {
  document.getElementById('welcome-overlay')?.style.setProperty('display', 'none');
  document.getElementById('welcome-message')?.style.setProperty('display', 'none');
};

// Toggle "What's New" popup
const toggleWn = () => {
  const popupWn = document.getElementById("popup-wn");
  const toggleBtn = document.getElementById("toggleWnBtn");
  if (!popupWn || !toggleBtn) return;

  const isOpen = popupWn.classList.contains("open-popup-wn");
  togglePopup("popup-wn", isOpen ? "close" : "open", "open-popup-wn");
  toggleBtn.textContent = isOpen ? "What's New?" : "Close";
};

// Open/Close Notice and Donate popups
const openNotice = () => togglePopup("notice", "open", "open-notice");
const closeNotice = () => togglePopup("notice", "close", "open-notice");
const openDonate = () => togglePopup("donate-popup", "open", "open-donate");
const closeDonate = () => togglePopup("donate-popup", "close", "open-donate");

// DOMContentLoaded logic
document.addEventListener("DOMContentLoaded", () => {
  // Welcome Message Popup Logic
  if (!getCookie("welcome-messageShown")) {
    document.getElementById('welcome-overlay')?.style.setProperty('display', 'block');
    document.getElementById('welcome-message')?.style.setProperty('display', 'block');
    setCookie("welcome-messageShown", true, 365);
  }

  // Cookie pop-up logic
  const cookiePopup = document.getElementById("cookie-popup");
  const acceptButton = document.getElementById("accept-cookies");
  if (cookiePopup && acceptButton && !localStorage.getItem("cookiesAccepted")) {
    cookiePopup.style.display = "block";
    acceptButton.addEventListener("click", () => {
      localStorage.setItem("cookiesAccepted", "true");
      cookiePopup.style.display = "none";
    });
  }
});
