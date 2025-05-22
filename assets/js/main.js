// Loader logic
document.addEventListener("DOMContentLoaded", () => {
  const loaderDisplayed = localStorage.getItem('loaderDisplayed') === 'true';
  if (loaderDisplayed) {
    hideLoader();
  } else {
    document.body.classList.add('no-scroll');
    localStorage.setItem('loaderDisplayed', 'true');
    window.addEventListener('load', () => setTimeout(hideLoader, 500));
  }
});

function hideLoader() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.classList.add('loader-hidden');
    document.body.classList.remove('no-scroll');
    setTimeout(() => loader.remove(), 750);
  }
}

// Theme logic
const themeOptions = [
  { name: "Default", value: "default" },
  { name: "Dark-Blue", value: "dark-blue" },
  { name: "Dark-Red", value: "dark-red" },
  { name: "Dark-Purple", value: "dark-purple" },
  { name: "Dark-Green", value: "dark-green" },
  { name: "Dark-Yellow", value: "dark-yellow" },
  { name: "Modern-White", value: "modern-white" },
  { name: "White-Blue", value: "white-blue" },
  { name: "White-Red", value: "white-red" },
  { name: "White-Purple", value: "white-purple" },
  { name: "White-Green", value: "white-green" },
  { name: "White-Yellow", value: "white-yellow" },
];

function changeTheme(themeName) {
  document.body.className = `theme-${themeName}`;
  localStorage.setItem('selectedTheme', themeName);
}

function loadThemeFromStorage() {
  const savedTheme = localStorage.getItem('selectedTheme') || 'default';
  changeTheme(savedTheme);
  const themeSelect = document.getElementById('theme-select');
  if (themeSelect) themeSelect.value = savedTheme;
}

window.addEventListener('load', loadThemeFromStorage);

const themeSelect = document.getElementById('theme-select');
if (themeSelect) {
  // Populate dropdown if empty
  if (!themeSelect.options.length) {
    themeOptions.forEach(theme => {
      const option = document.createElement('option');
      option.textContent = theme.name;
      option.value = theme.value;
      themeSelect.appendChild(option);
    });
  }
  themeSelect.addEventListener('change', e => changeTheme(e.target.value));
}

// Tilt effect logic
function applyTiltEffect(selector, { maxTilt = 10, perspective = 500 } = {}) {
  document.querySelectorAll(selector).forEach(elem => {
    let animationFrame;
    elem.addEventListener('mousemove', event => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        const rect = elem.getBoundingClientRect();
        const relX = event.clientX - rect.left;
        const relY = event.clientY - rect.top;
        const rotateY = ((relX / rect.width) - 0.5) * maxTilt * 2;
        const rotateX = ((relY / rect.height) - 0.5) * -maxTilt * 2;
        elem.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
    });
    elem.addEventListener('mouseleave', () => {
      elem.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg)`;
      if (animationFrame) cancelAnimationFrame(animationFrame);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  applyTiltEffect('.caption-content', { maxTilt: 5, perspective: 500 });
  applyTiltEffect('.character-card', { maxTilt: 3, perspective: 500 });
  applyTiltEffect('.character-info', { maxTilt: 3, perspective: 500 });
  applyTiltEffect('.character-slider', { maxTilt: 1, perspective: 500 });
});
