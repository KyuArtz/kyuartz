document.addEventListener("DOMContentLoaded", () => {
  // Cache DOM elements
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".navigation-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const moreMenuLinks = document.querySelectorAll(".nav-link-moreMenu");
  const moreMenuContents = document.querySelectorAll(".moreMenu-content");
  const blurOverlay = document.querySelector(".blur-overlay");
  const settingsBtn = document.querySelector(".settings-btn");
  const settingsMenu = document.querySelector(".settings-menu");
  const upBtn = document.getElementById("upBtn");

  handleHeaderScroll();

  // Header scroll effect
  function handleHeaderScroll() {
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        header.style.backdropFilter = 'blur(5%)';
      } else {
        header.style.backdropFilter = 'blur(5%)';
      }

      // Hide/show header on scroll
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        header.style.transform = 'translateY(-100%)';
      } else {
        header.style.transform = 'translateY(0)';
      }

      lastScrollY = currentScrollY;
    });
  }

  // Hamburger menu toggle
  hamburger?.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger-active");
    navMenu?.classList.toggle("navMenu-active");
  });

  // Close nav menu on nav link click
  navLinks.forEach(navLink => {
    navLink.addEventListener("click", () => {
      hamburger?.classList.remove("hamburger-active");
      navMenu?.classList.remove("navMenu-active");
    });
  });

  // Side menu toggle
  moreMenuLinks.forEach(moreMenuLink => {
    moreMenuLink.addEventListener("click", (event) => {
      event.stopPropagation();
      const moreMenuContent = moreMenuLink.nextElementSibling;
      if (moreMenuContent) {
        const isShown = moreMenuContent.classList.toggle("show-moreMenu");
        blurOverlay && (blurOverlay.style.display = isShown ? "block" : "none");
        document.body.classList.toggle("no-scroll", isShown);
      }
    });
  });

  // Settings menu toggle
  settingsBtn?.addEventListener("click", (event) => {
    event.stopPropagation();
    settingsMenu?.classList.toggle("show-settings");
  });

  // Global click handler for closing menus
  window.addEventListener("click", (event) => {
    // Side menu
    if (![...moreMenuLinks, ...moreMenuContents].some(el => el.contains(event.target))) {
      moreMenuContents.forEach(content => content.classList.remove("show-moreMenu"));
      if (blurOverlay) blurOverlay.style.display = "none";
      document.body.classList.remove("no-scroll");
    }
    // Nav menu
    if (!event.target.closest('.hamburger') && !event.target.closest('.navigation-menu')) {
      hamburger?.classList.remove("hamburger-active");
      navMenu?.classList.remove("navMenu-active");
    }
    // Settings menu
    if (!event.target.closest('.settings-btn') && !event.target.closest('.settings-menu')) {
      settingsMenu?.classList.remove("show-settings");
    }
  });

  // Scroll-to-top button
  if (upBtn) {
    window.addEventListener("scroll", () => {
      upBtn.style.display = (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? "block" : "none";
    });
    upBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Highlight active nav link
  const currentPage = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-link, .nav-link-moreMenu, .moreMenu-content a').forEach(link => {
    if (link.getAttribute('data-page') === currentPage) {
      link.classList.add('activeLink');
    }
  });
});
