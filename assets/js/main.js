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
      document.getElementById('welcomeOverlay')?.style.display === 'flex'
    if (action === "open" || anyPopupOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }
};

// Close Welcome Message
const closeWelcomeMessage = () => {
  document.getElementById('welcomeOverlay')?.style.setProperty('display', 'none');
  document.body.classList.remove("no-scroll");
};

// DOMContentLoaded logic
document.addEventListener("DOMContentLoaded", () => {
  // Welcome Message Popup Logic
  if (!getCookie("welcome-messageShown")) {
    document.getElementById('welcomeOverlay')?.style.setProperty('display', 'flex');
    setCookie("welcome-messageShown", true, 365);
    document.body.classList.add("no-scroll");
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

// Language selection logic
document.addEventListener("DOMContentLoaded", () => {
  const TRANSLATIONS_URL = 'assets/json/translations.json';
  const LANGUAGE_KEY = 'selectedLanguage';
  const DEFAULT_LANGUAGE = 'en';

  const languageSwitcher = document.getElementById('languageSwitcher');
  const elementsToTranslate = document.querySelectorAll("[data-translate]");

  // Utility: Safely get translation
  function getTranslation(data, language, key) {
    return data[language]?.[key] || data[DEFAULT_LANGUAGE]?.[key] || '';
  }

  // Apply translations to all elements
  function applyTranslations(data, language) {
    elementsToTranslate.forEach(element => {
      const key = element.getAttribute("data-translate");
      const translation = getTranslation(data, language, key);
      if (translation) {
        element.textContent = translation;
      } else {
        console.warn(`No translation found for key: ${key} in language: ${language}`);
      }
    });
  }

  // Change language and persist selection
  function changeLanguage(data, language) {
    if (!data[language]) {
      console.warn(`Language data for ${language} not found. Falling back to '${DEFAULT_LANGUAGE}'.`);
      language = DEFAULT_LANGUAGE;
    }
    applyTranslations(data, language);
    localStorage.setItem(LANGUAGE_KEY, language);
    if (languageSwitcher) languageSwitcher.value = language;
  }

  // Fetch and initialize translations
  fetch(TRANSLATIONS_URL)
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .then(data => {
      const savedLanguage = localStorage.getItem(LANGUAGE_KEY) || DEFAULT_LANGUAGE;
      changeLanguage(data, savedLanguage);

      if (languageSwitcher) {
        languageSwitcher.addEventListener('change', () => {
          changeLanguage(data, languageSwitcher.value);
        });
      }
    })
    .catch(error => console.error('Error fetching translations:', error));
});

async function loadVersion() {
  const repo = "KyuArtz/kyuartz"; // Configure your repository here
  const versionElement = document.getElementById("version");

  // Set loading state
  if (versionElement) {
    versionElement.innerText = "Version: Loading...";
  } else {
    console.warn("Version element not found");
    return;
  }

  try {
    // Make both API calls concurrently for better performance
    const [releaseResponse, commitResponse] = await Promise.all([
      fetch(`https://api.github.com/repos/${repo}/releases/latest`, {
        headers: {
          'Accept': 'application/vnd.github.v3+json'
        }
      }),
      fetch(`https://api.github.com/repos/${repo}/commits?per_page=1`, {
        headers: {
          'Accept': 'application/vnd.github.v3+json'
        }
      })
    ]);

    // Check for API errors
    if (!releaseResponse.ok) {
      throw new Error(`Release API error: ${releaseResponse.status} ${releaseResponse.statusText}`);
    }

    if (!commitResponse.ok) {
      throw new Error(`Commit API error: ${commitResponse.status} ${commitResponse.statusText}`);
    }

    // Parse responses
    const [releaseData, commitData] = await Promise.all([
      releaseResponse.json(),
      commitResponse.json()
    ]);

    // Extract version info with validation
    const tag = releaseData?.tag_name || "unknown";
    const commitHash = commitData?.[0]?.sha?.substring(0, 7) || "unknown";

    // Update UI
    versionElement.innerText = `Version: ${tag} (${commitHash})`;

  } catch (error) {
    console.error("Failed to load version information:", error);

    // Provide more specific error messages
    let errorMessage = "Version: unavailable";

    if (error.message.includes("Failed to fetch")) {
      errorMessage = "Version: network error";
    } else if (error.message.includes("404")) {
      errorMessage = "Version: repository not found";
    } else if (error.message.includes("403")) {
      errorMessage = "Version: rate limited";
    }

    versionElement.innerText = errorMessage;
  }
}

// Optional: Add retry logic for better reliability
async function loadVersionWithRetry(maxRetries = 2) {
  for (let attempt = 1; attempt <= maxRetries + 1; attempt++) {
    try {
      await loadVersion();
      break; // Success, exit retry loop
    } catch (error) {
      if (attempt === maxRetries + 1) {
        console.error(`Version loading failed after ${maxRetries} retries:`, error);
        break;
      }

      // Wait before retrying (exponential backoff)
      const delay = Math.min(1000 * Math.pow(2, attempt - 1), 5000);
      console.warn(`Version loading attempt ${attempt} failed, retrying in ${delay}ms...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}

// Initialize - choose one of these approaches:

// Option 1: Simple version
loadVersion();

// Option 2: With retry logic (recommended for production)
// loadVersionWithRetry();

// Set current year
const currentYearElement = document.getElementById('currentyear');
if (currentYearElement) {
  currentYearElement.textContent = new Date().getFullYear();
}