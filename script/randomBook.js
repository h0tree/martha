let linkRandom = document.querySelectorAll('.header-listmenu-text:nth-child(2)');
let randomNumber = Math.floor(Math.random()*11);

linkRandom[0].addEventListener('click', () => {
    window.location.href = `product.html?id=${randomNumber}`;
})