const dots = document.querySelector(".three-dots");
const dotMenu = document.querySelector(".dots-menu");

dots.addEventListener("click", () => {
  dotMenu.classList.toggle("active-dot");
})
document.querySelectorAll(".dot-link").forEach(n => n.addEventListener("click", () => {
  dotMenu.classList.remove("active-dot");
}))