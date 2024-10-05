document.addEventListener("DOMContentLoaded", () => {
  // Cache DOM elements
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const sideMenuLinks = document.querySelectorAll(".nav-link-sideMenu");
  const sideMenuContents = document.querySelectorAll(".sideMenu-content");
  const settingsBtn = document.querySelector(".settings-btn");
  const settingsMenu = document.querySelector(".settings-menu");

  // Toggle hamburger and nav menu
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active-hamburger");
    navMenu.classList.toggle("active-nav");
  });

  // Close nav menu when a nav link is clicked
  navLinks.forEach(navLink => {
    navLink.addEventListener("click", () => {
      hamburger.classList.remove("active-hamburger");
      navMenu.classList.remove("active-nav");
    });
  });

  // Toggle side menu visibility
  sideMenuLinks.forEach(sideMenuLink => {
    sideMenuLink.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevents window click handler from immediately closing the side menu
      const sideMenuContent = event.currentTarget.nextElementSibling;
      sideMenuContent.classList.toggle("show");
    });
  });

  // Close side menu and nav menu when clicking outside
  window.addEventListener("click", (event) => {
    // Check if clicked target is part of the side menu link or content
    const clickedInsideSideMenu = [...sideMenuLinks].some(link => link.contains(event.target));
    const clickedInsideContent = [...sideMenuContents].some(content => content.contains(event.target));
    
    // Close side menu if the click is outside
    if (!clickedInsideSideMenu && !clickedInsideContent) {
      sideMenuContents.forEach(content => content.classList.remove("show"));
    }

    // Close the nav menu if not clicked on hamburger or nav menu
    if (!event.target.closest('.hamburger') && !event.target.closest('.nav-menu')) {
      hamburger.classList.remove("active-hamburger");
      navMenu.classList.remove("active-nav");
    }
  });

  // Toggle settings menu
  settingsBtn?.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent window click from closing it immediately
    settingsMenu.classList.toggle("show");
  });

  // Close settings menu when clicking outside
  window.addEventListener("click", (event) => {
    if (!event.target.closest('.settings-btn') && !event.target.closest('.settings-menu')) {
      settingsMenu.classList.remove("show");
    }
  });
});