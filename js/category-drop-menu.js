const dots = document.querySelector(".category-dots");
const dotMenu = document.querySelector(".category-menu");

dots.addEventListener("click", () => {
  dotMenu.classList.toggle("active-category");
})
document.querySelectorAll(".category-link").forEach(n => n.addEventListener("click", () => {
  dotMenu.classList.remove("active-category");
}))