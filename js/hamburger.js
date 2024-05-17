document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const dropdownLinks = document.querySelectorAll(".nav-link-dropdown");
  const dropdownContents = document.querySelectorAll(".dropdown-content");

  // Toggle hamburger and nav menu
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active-hamburger");
    navMenu.classList.toggle("active-nav");
  });

  // Close nav menu on link click
  navLinks.forEach(navLink => {
    navLink.addEventListener("click", () => {
      hamburger.classList.remove("active-hamburger");
      navMenu.classList.remove("active-nav");
    });
  });

  // Toggle dropdown menu
  function toggleDropdown(event) {
    event.currentTarget.nextElementSibling.classList.toggle("show");
  }

  // Add click event to dropdown links
  dropdownLinks.forEach(dropdownLink => {
    dropdownLink.addEventListener("click", toggleDropdown);
  });

  // Close dropdown if user clicks outside
  window.addEventListener("click", (event) => {
    if (![...dropdownLinks].some(link => link.contains(event.target))) {
      dropdownContents.forEach(content => {
        if (content.classList.contains("show")) {
          content.classList.remove("show");
        }
      });
    }
  });
});
