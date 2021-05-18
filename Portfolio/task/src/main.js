let popUp = document.querySelector(".pop-up");
let toggleMenu = document.querySelector(".toggle");
let hamburger = document.querySelector(".hamburger");

function showPopUp(event) {
  if (event.target.nodeName === "BUTTON") {
    popUp.classList.toggle("pop-up-display")
  }
}

document.addEventListener("click", showPopUp);
toggleMenu.onclick = () => hamburger.classList.toggle("toggle-display");
