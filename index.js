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

const signupbox = document.querySelector(".sign-in-box");
const overlaybox = document.querySelector(".box-overlay");
const closebox = document.querySelector(".close-box");
const opensignup = document.querySelector(".explore-button");

opensignup.addEventListener("click", function () {
  signupbox.classList.add("active");
  overlaybox.classList.add("active");
});
closebox.addEventListener("click", function () {
  signupbox.classList.remove("active");
  overlaybox.classList.remove("active");
});
const signupbox1 = document.querySelector(".sign-in-box1");
const overlaybox1 = document.querySelector(".box-overlay1");
const closebox1 = document.querySelector(".close-box1");
const opensignup1 = document.querySelector(".explore-btn1");

opensignup1.addEventListener("click", function () {
  signupbox1.classList.add("active");
  overlaybox1.classList.add("active");
});
closebox1.addEventListener("click", function () {
  signupbox1.classList.remove("active");
  overlaybox1.classList.remove("active");
});
const aula = document.querySelector(".aula");
const aula2 = document.querySelector(".aula2");
const aula3 = document.querySelector(".aula3");
const aula4 = document.querySelector(".aula4");
const plate1 = document.querySelectorAll(".plate1");
const plate2 = document.querySelectorAll(".plate2");
const plate3 = document.querySelectorAll(".plate3");
const plate4 = document.querySelectorAll(".plate4");
plate1.forEach(function (button) {
  button.addEventListener("click", function () {
    aula2.classList.remove("active");
    aula.classList.add("active");
    aula3.classList.remove("active");
    aula4.classList.remove("active");
  });
});

plate2.forEach(function (button) {
  button.addEventListener("click", function () {
    aula.classList.remove("active");
    aula2.classList.add("active");
    aula3.classList.remove("active");
    aula4.classList.remove("active");
  });
});
plate3.forEach(function (button) {
  button.addEventListener("click", function () {
    aula2.classList.remove("active");
    aula.classList.remove("active");
    aula3.classList.add("active");
    aula4.classList.remove("active");
  });
});
plate4.forEach(function (button) {
  button.addEventListener("click", function () {
    aula2.classList.remove("active");
    aula.classList.remove("active");
    aula3.classList.remove("active");
    aula4.classList.add("active");
  });
});
