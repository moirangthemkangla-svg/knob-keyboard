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
const container1 = document.querySelector(".container");
const leftbtn = document.querySelector(".arrow.left");
const rightbtn = document.querySelector(".arrow.right");

leftbtn.addEventListener("click", function () {
  container1.scrollBy({
    left: -400,
    behavior: "smooth",
  });
});

rightbtn.addEventListener("click", function () {
  container1.scrollBy({
    left: 400,
    behavior: "smooth",
  });
});
const container = document.querySelector(".container");

let startX = 0;
let isDown = false;

container.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX;
});

container.addEventListener("mouseup", () => {
  isDown = false;
});

container.addEventListener("mouseleave", () => {
  isDown = false;
});

container.addEventListener("mousemove", (e) => {
  if (!isDown) return;

  container.scrollLeft -= e.movementX;
});
