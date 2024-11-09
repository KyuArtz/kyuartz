document.addEventListener("DOMContentLoaded", () => {
  // Fetch translation data from JSON
  fetch('assets/json/translations.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Check if translation data is successfully loaded
      console.log('Translations loaded:', data);

      const languageSwitcher = document.getElementById('languageSwitcher');
      const elementsToTranslate = document.querySelectorAll("[data-translate]");

      // Function to change language
      function changeLanguage(language) {
        // Ensure the language exists in the data
        if (!data[language]) {
          console.warn(`Language data for ${language} not found. Falling back to 'en'.`);
          language = 'en'; // Fallback to 'en' if the selected language isn't found
        }

        // Apply translations
        elementsToTranslate.forEach(element => {
          const key = element.getAttribute("data-translate");
          if (data[language][key]) {
            element.textContent = data[language][key];
          } else {
            console.warn(`No translation found for key: ${key} in language: ${language}`);
          }
        });

        // Save selected language to localStorage
        localStorage.setItem('selectedLanguage', language);
      }

      // Check if a language is already saved in localStorage
      const savedLanguage = localStorage.getItem('selectedLanguage') || 'en'; // Default to 'en' if none found
      if (savedLanguage) {
        // Apply the saved language if found
        changeLanguage(savedLanguage);

        // Set the language switcher value to the saved language
        if (languageSwitcher) {
          languageSwitcher.value = savedLanguage;
        }
      }

      // Event listener for language switcher
      if (languageSwitcher) {
        languageSwitcher.addEventListener('change', () => {
          const selectedLanguage = languageSwitcher.value;
          changeLanguage(selectedLanguage);
        });
      }
    })
    .catch(error => console.error('Error fetching translations:', error));
});
