let button = document.querySelector(".menu-button");
let header = document.querySelector(".header");
let array = document.querySelectorAll(".menu-button-arrow")
let nav = document.querySelector(".header-listmenu")
let login = document.querySelector("#profile-btn")
let titleHeader = document.querySelector(".header-title")

button.addEventListener("click", () => {
    header.classList.toggle("header-burger")
    button.classList.toggle("menu-button-active")
    array.forEach(element => {
        element.classList.toggle("menu-button-arrow-active")
    });
    login.classList.toggle("login-active")
    nav.classList.toggle("header-listmenu-active");
    titleHeader.classList.toggle("header-listmenu-active")
})