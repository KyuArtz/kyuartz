const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active-hamburger");
  navMenu.classList.toggle("active-nav");
})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active-hamburger");
  navMenu.classList.remove("active-nav");
}))