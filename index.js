const menupanel = document.querySelector(".menupanel");
const openrbutton = document.querySelector(".menu-button");
const closebutton = document.querySelector(".close-button");
const overlay = document.querySelector(".overlay");

function openmenu() {
  menupanel.classList.add("active");
  overlay.classList.add("active");
}
function closemenu() {
  menupanel.classList.remove("active");
  overlay.classList.remove("active");
}
