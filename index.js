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
const container = document.querySelector(".container");
const leftbtn = document.querySelector(".arrow.left");
const rightbtn = document.querySelector(".arrow.right");

leftbtn.addEventListener("click", function () {
  container.scrollBy({
    left: -400,
    behavior: "smooth",
  });
});

rightbtn.addEventListener("click", function () {
  container.scrollBy({
    left: 400,
    behavior: "smooth",
  });
});
