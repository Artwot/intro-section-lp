// * Declare variables
const overlay = document.getElementById("overlay");
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const lateralMenu = document.querySelector(".lateral-menu");

// * Display lateral menu & activate overlay
openMenu.addEventListener("click", () => {
  lateralMenu.classList.toggle("active");
  overlay.classList.toggle("overlay");
});

// * Hide lateral menu & deactivate overlay
closeMenu.addEventListener("click", () => {
  lateralMenu.classList.toggle("active");
  overlay.classList.toggle("overlay");
});
