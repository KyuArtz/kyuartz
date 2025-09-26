document.addEventListener("DOMContentLoaded", () => {
  // Cache DOM elements
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".navigation-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const sideMenuLinks = document.querySelectorAll(".nav-link-sideMenu");
  const sideMenuContents = document.querySelectorAll(".sideMenu-content");
  const blurOverlay = document.querySelector(".blur-overlay");
  const btn = document.querySelector(".category-btn");
  const categoryMenu = document.querySelector(".category-menu");
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
  sideMenuLinks.forEach(sideMenuLink => {
    sideMenuLink.addEventListener("click", (event) => {
      event.stopPropagation();
      const sideMenuContent = sideMenuLink.nextElementSibling;
      if (sideMenuContent) {
        const isShown = sideMenuContent.classList.toggle("show-sideMenu");
        blurOverlay && (blurOverlay.style.display = isShown ? "block" : "none");
        document.body.classList.toggle("no-scroll", isShown);
      }
    });
  });

  // Category menu toggle
  btn?.addEventListener("click", (e) => {
    e.stopPropagation();
    categoryMenu?.classList.toggle("categoryMenu-show");
  });

  document.querySelectorAll(".category-link").forEach(link =>
    link.addEventListener("click", () => {
      categoryMenu?.classList.remove("categoryMenu-show");
    })
  );

  // Settings menu toggle
  settingsBtn?.addEventListener("click", (event) => {
    event.stopPropagation();
    settingsMenu?.classList.toggle("show-settings");
  });

  // Global click handler for closing menus
  window.addEventListener("click", (event) => {
    // Side menu
    if (![...sideMenuLinks, ...sideMenuContents].some(el => el.contains(event.target))) {
      sideMenuContents.forEach(content => content.classList.remove("show-sideMenu"));
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
    // Category menu
    if (!event.target.closest('.category-btn') && !event.target.closest('.category-menu')) {
      categoryMenu?.classList.remove("categoryMenu-show");
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
  document.querySelectorAll('.nav-link, .nav-link-sideMenu, .sideMenu-content a').forEach(link => {
    if (link.getAttribute('data-page') === currentPage) {
      link.classList.add('activeLink');
    }
  });
});
