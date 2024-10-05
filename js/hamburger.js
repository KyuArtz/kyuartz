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

  // Toggle sidemenu menu visibility
  sideMenuLinks.forEach(dropdownLink => {
    dropdownLink.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevents window click handler from immediately closing the dropdown
      const dropdownContent = event.currentTarget.nextElementSibling;
      dropdownContent.classList.toggle("show");
    });
  });

  // Close sidemenu and nav menus when clicking outside
  window.addEventListener("click", (event) => {
    // Check if clicked target is part of the dropdown link or content
    const clickedInsideDropdown = [...sideMenuLinks].some(link => link.contains(event.target));
    const clickedInsideContent = [...sideMenuContents].some(content => content.contains(event.target));
    
    // Close dropdowns if the click is outside
    if (!clickedInsideDropdown && !clickedInsideContent) {
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