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

  // Toggle body scroll for popups
  if (["open", "close"].includes(action)) {
    const anyPopupOpen =
      document.getElementById('welcome-message')?.style.display === 'block' ||
      document.getElementById('whats-new-popup')?.classList.contains('open-whats-new-popup') ||
      document.getElementById('notice-popup')?.classList.contains('open-notice') ||
      document.getElementById('donate-popup')?.classList.contains('open-donate');
    if (action === "open" || anyPopupOpen) {
      document.body.classList.add("no-scroll-popup");
    } else {
      document.body.classList.remove("no-scroll-popup");
    }
  }
};

// Close Welcome Message
const closeWelcomeMessage = () => {
  document.getElementById('welcome-overlay')?.style.setProperty('display', 'none');
  document.getElementById('welcome-message')?.style.setProperty('display', 'none');
  document.body.classList.remove("no-scroll-popup");
};

// Toggle "What's New" popup
const toggleWn = () => {
  const wnPopup = document.getElementById("whats-new-popup");
  const toggleBtn = document.getElementById("toggle-whats-new-btn");
  const wnOverlay = document.getElementById("whats-new-overlay");
  if (!wnPopup || !toggleBtn || !wnOverlay) return;

  const isOpen = wnPopup.classList.contains("open-whats-new-popup");
  togglePopup("whats-new-popup", isOpen ? "close" : "open", "open-whats-new-popup");
  toggleBtn.textContent = isOpen ? "What's New?" : "Close";
  wnOverlay.style.display = isOpen ? "none" : "block";
  document.body.classList.toggle("no-scroll-popup", !isOpen);
};

// Open/Close Notice and Donate popups
const openNotice = () => {
  togglePopup("notice-popup", "open", "open-notice");
  const overlay = document.getElementById("notice-overlay");
  if (overlay) overlay.style.display = "block";
  document.body.classList.add("no-scroll-popup");
};
const closeNotice = () => {
  togglePopup("notice-popup", "close", "open-notice");
  const overlay = document.getElementById("notice-overlay");
  if (overlay) overlay.style.display = "none";
  document.body.classList.remove("no-scroll-popup");
};
const openDonate = () => {
  togglePopup("donate-popup", "open", "open-donate");
  const overlay = document.getElementById("donate-overlay");
  if (overlay) overlay.style.display = "block";
  document.body.classList.add("no-scroll-popup");
};
const closeDonate = () => {
  togglePopup("donate-popup", "close", "open-donate");
  const overlay = document.getElementById("donate-overlay");
  if (overlay) overlay.style.display = "none";
  document.body.classList.remove("no-scroll-popup");
};

// DOMContentLoaded logic
document.addEventListener("DOMContentLoaded", () => {
  // Welcome Message Popup Logic
  if (!getCookie("welcome-messageShown")) {
    document.getElementById('welcome-overlay')?.style.setProperty('display', 'block');
    document.getElementById('welcome-message')?.style.setProperty('display', 'block');
    setCookie("welcome-messageShown", true, 365);
    document.body.classList.add("no-scroll-popup");
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
