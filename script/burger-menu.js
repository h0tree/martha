let button = document.querySelector(".menu-button");
let header = document.querySelector(".header");
let array = document.querySelectorAll(".menu-button-arrow")
let nav = document.querySelector(".header-listmenu")
let title = document.querySelector(".header-title")

button.addEventListener("click", () => {
    header.classList.toggle("header-burger")
    button.classList.toggle("menu-button-active")
    array.forEach(element => {
        element.classList.toggle("menu-button-arrow-active")
    });
    nav.classList.toggle("header-listmenu-active");
    title.classList.toggle("header-listmenu-active")
})