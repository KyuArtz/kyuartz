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
    { name: "Traditional", value: "traditional"},
    { name: "Dark-Red", value: "dark-red"},
    { name: "White-Red", value: "white-red" },
    { name: "Dark-Purple", value: "dark-purple"},
    { name: "White-Purple", value: "white-purple"},
    { name: "Dark-Green", value: "dark-green"},
    { name: "White-Green", value: "white-green"},
    { name: "Dark-Yellow", value: "dark-yellow"},
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