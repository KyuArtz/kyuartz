const themeOptions = [
    { name: "Default", value: "default" },
    { name: "Dark Blue", value: "dark-blue" },
    { name: "Dark Red", value: "dark-red" },
    { name: "Dark Purple", value: "dark-purple" },
    { name: "Dark Green", value: "dark-green" },
    { name: "Dark Yellow", value: "dark-yellow" },
    { name: "Modern White", value: "modern-white" },
    { name: "White Blue", value: "white-blue" },
    { name: "White Red", value: "white-red" },
    { name: "White Purple", value: "white-purple" },
    { name: "White Green", value: "white-green" },
    { name: "White Yellow", value: "white-yellow" }
];

// Generate theme previews
function generateThemePreviews() {
    const container = document.getElementById('theme-previews');
    container.innerHTML = '';

    themeOptions.forEach(theme => {
        const option = document.createElement('div');
        option.className = 'theme-option';
        option.setAttribute('data-theme', theme.value);
        option.onclick = () => selectTheme(theme.value);

        option.innerHTML = `
          <div class="theme-preview theme-${theme.value}"></div>
          <div class="theme-name">${theme.name}</div>
        `;

        container.appendChild(option);
    });

    // Highlight current theme
    updateThemeSelection();
}

function selectTheme(themeName) {
    changeTheme(themeName);
    updateThemeSelection();
    showSaveStatus('Theme updated successfully!', 'success');
}

function updateThemeSelection() {
    const currentTheme = localStorage.getItem('selectedTheme') || 'default';
    document.querySelectorAll('.theme-option').forEach(option => {
        option.classList.toggle('selected', option.getAttribute('data-theme') === currentTheme);
    });
    document.getElementById('theme-select').value = currentTheme;
}

function changeTheme(themeName) {
    document.body.className = `theme-${themeName}`;
    localStorage.setItem('selectedTheme', themeName);
}

function loadThemeFromStorage() {
    const savedTheme = localStorage.getItem('selectedTheme') || 'default';
    changeTheme(savedTheme);
}

// Settings management
const settingsConfig = {
    'animations-toggle': { key: 'animations', default: true },
    'reduced-motion-toggle': { key: 'reducedMotion', default: false },
    'autoplay-toggle': { key: 'autoplay', default: true },
    'welcome-toggle': { key: 'showWelcome', default: true },
    'updates-toggle': { key: 'updateNotifications', default: true },
    'analytics-toggle': { key: 'analytics', default: false }
};

function loadSettings() {
    Object.entries(settingsConfig).forEach(([toggleId, config]) => {
        const toggle = document.getElementById(toggleId);
        if (toggle) {
            const saved = localStorage.getItem(config.key);
            toggle.checked = saved !== null ? JSON.parse(saved) : config.default;
            toggle.addEventListener('change', () => saveSetting(config.key, toggle.checked));
        }
    });

    // Load language setting
    const languageSwitcher = document.getElementById('languageSwitcher');
    if (languageSwitcher) {
        const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
        languageSwitcher.value = savedLanguage;
        languageSwitcher.addEventListener('change', () => {
            localStorage.setItem('selectedLanguage', languageSwitcher.value);
            showSaveStatus('Language preference saved!', 'success');
        });
    }
}

function saveSetting(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    showSaveStatus('Setting saved!', 'success');

    // Apply setting immediately
    applySetting(key, value);
}

function applySetting(key, value) {
    switch (key) {
        case 'reducedMotion':
            document.body.style.setProperty('--transition', value ? 'none' : 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)');
            break;
        case 'animations':
            if (!value) {
                document.body.classList.add('no-animations');
            } else {
                document.body.classList.remove('no-animations');
            }
            break;
    }
}

function saveAllPreferences() {
    const button = document.querySelector('.save-button');
    const originalText = button.innerHTML;

    button.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Saving...';
    button.disabled = true;

    setTimeout(() => {
        showSaveStatus('All preferences saved successfully!', 'success');
        button.innerHTML = originalText;
        button.disabled = false;
    }, 1000);
}

function clearAllData() {
    if (confirm('This will clear all your preferences and data. Are you sure?')) {
        localStorage.clear();
        showSaveStatus('All data cleared. Reloading page...', 'success');
        setTimeout(() => location.reload(), 1500);
    }
}

function showSaveStatus(message, type) {
    const status = document.getElementById('save-status');
    status.textContent = message;
    status.className = `save-status ${type}`;
    status.style.display = 'block';

    setTimeout(() => {
        status.style.display = 'none';
    }, 3000);
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    loadThemeFromStorage();
    generateThemePreviews();
    loadSettings();

    // Theme select dropdown
    const themeSelect = document.getElementById('theme-select');
    if (themeSelect) {
        themeSelect.addEventListener('change', (e) => {
            selectTheme(e.target.value);
        });
    }
});

// Add some nice visual feedback
document.querySelectorAll('.preference-section').forEach(section => {
    section.addEventListener('mouseenter', () => {
        section.style.transform = 'translateY(-2px)';
    });

    section.addEventListener('mouseleave', () => {
        section.style.transform = 'translateY(0)';
    });
});