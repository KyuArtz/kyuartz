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
