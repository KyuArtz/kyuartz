document.addEventListener("DOMContentLoaded", () => {
  // Cache DOM elements
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const sideMenuLinks = document.querySelectorAll(".nav-link-sideMenu");
  const sideMenuContents = document.querySelectorAll(".sideMenu-content");
  const dots = document.querySelector(".category-dots");
  const dotMenu = document.querySelector(".category-menu");
  const settingsBtn = document.querySelector(".settings-btn");
  const settingsMenu = document.querySelector(".settings-menu");
  const upBtn = document.getElementById("upBtn");

  // Toggle hamburger and nav menu
  hamburger?.addEventListener("click", () => {
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
      event.stopPropagation(); // Prevents window click handler from closing the side menu
      const sideMenuContent = event.currentTarget.nextElementSibling;
      sideMenuContent.classList.toggle("show-sideMenu");
    });
  });

  // Toggle category menu visibility
  dots?.addEventListener("click", () => {
    dotMenu.classList.toggle("active-category");
  });

  document.querySelectorAll(".category-link").forEach(n => 
    n.addEventListener("click", () => {
      dotMenu.classList.remove("active-category");
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
    if (!event.target.closest('.hamburger') && !event.target.closest('.nav-menu')) {
      hamburger.classList.remove("active-hamburger");
      navMenu.classList.remove("active-nav");
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

  // Update the current year dynamically
  const year = new Date().getFullYear();
  document.getElementById('currentyear').textContent = year;
});