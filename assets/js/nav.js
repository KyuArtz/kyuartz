document.addEventListener("DOMContentLoaded", () => {
  // Cache DOM elements
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".navigation-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const sideMenuLinks = document.querySelectorAll(".nav-link-sideMenu");
  const sideMenuContents = document.querySelectorAll(".sideMenu-content");
  const btn = document.querySelector(".category-btn");
  const categoryMenu = document.querySelector(".category-menu");
  const settingsBtn = document.querySelector(".settings-btn");
  const settingsMenu = document.querySelector(".settings-menu");
  const upBtn = document.getElementById("upBtn");

  // Toggle hamburger and nav menu
  hamburger?.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("navMenu-active");
  });

  // Close nav menu when a nav link is clicked
  navLinks.forEach(navLink => {
    navLink.addEventListener("click", () => {
      hamburger.classList.remove("hamburger-active");
      navMenu.classList.remove("navMenu-active");
    });
  });

  // Toggle side menu visibility
  sideMenuLinks.forEach(sideMenuLink => {
    sideMenuLink.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevents window click handler from closing the side menu
      const sideMenuContent = event.currentTarget.nextElementSibling;
      sideMenuContent.classList.toggle("show-sideMenu");
    });
  });

  // Toggle category menu visibility
  btn?.addEventListener("click", () => {
    categoryMenu.classList.toggle("categoryMenu-active");
  });

  document.querySelectorAll(".category-link").forEach(n => 
    n.addEventListener("click", () => {
      categoryMenu.classList.remove("categoryMenu-active");
    })
  );

  // Close side menu and nav menu when clicking outside
  window.addEventListener("click", (event) => {
    // Check if the click was inside side menu or content
    const clickedInsideSideMenu = [...sideMenuLinks].some(link => link.contains(event.target));
    const clickedInsideContent = [...sideMenuContents].some(content => content.contains(event.target));
    
    // Close side menu if clicked outside
    if (!clickedInsideSideMenu && !clickedInsideContent) {
      sideMenuContents.forEach(content => content.classList.remove("show-sideMenu"));
    }

    // Close nav menu if clicked outside
    if (!event.target.closest('.hamburger') && !event.target.closest('.navigation-menu')) {
      hamburger.classList.remove("hamburger-active");
      navMenu.classList.remove("navMenu-active");
    }
  });

  // Toggle settings menu
  settingsBtn?.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevents window click from closing it immediately
    settingsMenu.classList.toggle("show-settings");
  });

  // Close settings menu when clicking outside
  window.addEventListener("click", (event) => {
    if (!event.target.closest('.settings-btn') && !event.target.closest('.settings-menu')) {
      settingsMenu.classList.remove("show-settings");
    }
  });

  // Scroll-to-top button functionality
  if (upBtn) { // Check if upBtn exists
    window.onscroll = function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        upBtn.style.display = "block";
      } else {
        upBtn.style.display = "none";
      }
    };

    upBtn?.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Update the current year dynamically
  const currentYearElement = document.getElementById('currentyear');
  if (currentYearElement) {
    const year = new Date().getFullYear();
    currentYearElement.textContent = year;
}});

document.addEventListener("DOMContentLoaded", function() {
  // Get the current page's filename
  const currentPage = window.location.pathname.split('/').pop();

  // Get all nav links
  const navLinks = document.querySelectorAll('.nav-link, .nav-link-sideMenu, .sideMenu-content a');

  // Loop through links and add 'activeLink' class to the matching link
  navLinks.forEach(link => {
    if (link.getAttribute('data-page') === currentPage) {
      link.classList.add('activeLink');
    }
  });
});