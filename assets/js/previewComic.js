class Slideshow {
  constructor(container) {
    this.container = container;
    this.slides = container.querySelectorAll('.comicSlide');
    this.prevButton = container.querySelector('.prev');
    this.nextButton = container.querySelector('.next');
    this.slideIndex = 1;

    this.showSlides(this.slideIndex);
    this.addEventListeners();
  }

  addEventListeners() {
    this.prevButton.addEventListener('click', () => this.plusSlides(-1));
    this.nextButton.addEventListener('click', () => this.plusSlides(1));
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n) {
    if (n > this.slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = this.slides.length;
    }

    this.slides.forEach(slide => slide.classList.remove('active-slide'));
    this.slides[this.slideIndex - 1].classList.add('active-slide');
  }
}

function openFullscreen() {
  const elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { // Safari
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { // IE11
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { // Safari
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { // IE11
    document.msExitFullscreen();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const chapterBtn = document.querySelector('.nav-link-dropdown');
  const chapterDropdown = document.getElementById('comicChapter');
  const slideshowContainers = document.querySelectorAll('.slideshow-container');
  const slideshows = [];
  slideshowContainers.forEach(container => {
    slideshows.push(new Slideshow(container));
  });

  if (chapterBtn && chapterDropdown) {
    chapterBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const expanded = chapterBtn.getAttribute('aria-expanded') === 'true';
      chapterDropdown.classList.toggle('show');
      chapterBtn.setAttribute('aria-expanded', !expanded);
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!chapterDropdown.contains(e.target) && !chapterBtn.contains(e.target)) {
        chapterDropdown.classList.remove('show');
        chapterBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const nav = document.querySelector('.comic-nav');
  const subMenu = document.querySelector('.subMenu-container');
  const bottomNav = document.querySelector('.bottom-nav');
  const toggleNavBtn = document.getElementById('toggle-nav-btn');
  let navHidden = false;
  // Hide/Show Nav functionality
  if (toggleNavBtn && nav) {
    toggleNavBtn.addEventListener('click', () => {
      navHidden = !navHidden;
      nav.classList.toggle('nav-hidden', navHidden);
      if (subMenu) subMenu.classList.toggle('nav-hidden', navHidden);
      if (bottomNav) bottomNav.classList.toggle('nav-hidden', navHidden);
      // Change icon and aria-label
      toggleNavBtn.innerHTML = navHidden
        ? '<i class="fa-solid fa-eye"></i>'
        : '<i class="fa-solid fa-eye-slash"></i>';
      toggleNavBtn.setAttribute('aria-label', navHidden ? 'Show Navigation' : 'Hide Navigation');
      toggleNavBtn.setAttribute('title', navHidden ? 'Show Navigation' : 'Hide Navigation');
    });
  }

  document.addEventListener('keydown', (e) => {
    if (slideshows.length === 0) return;
    // Use the first slideshow instance
    if (e.key === 'ArrowLeft') slideshows[0].plusSlides(-1);
    if (e.key === 'ArrowRight') slideshows[0].plusSlides(1);
  });
});  

  