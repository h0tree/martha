let linkRandom = document.querySelectorAll('.menu__list-item__link');
let randomNumber = Math.floor(Math.random()*product.length);

linkRandom[0].addEventListener('click', () => {
    window.location.href = `product.html?id=${randomNumber}`;
})