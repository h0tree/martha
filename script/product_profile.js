const urlParams = new URLSearchParams(window.location.search)
const productId = urlParams.get('id');

let title = document.querySelector('.preview_title');
let auther = document.querySelector('.auther');
let description = document.querySelector('.description-p');
let priceText = document.querySelector('.product_price_text');
let img = document.querySelector('.preview_imges');

let info = document.querySelectorAll('.informationText');

let price = product[productId].price

title.innerHTML = product[productId].title
auther.innerHTML = product[productId].author
description.innerHTML = product[productId].description
priceText.innerHTML = price



img.src = `../imges/book/book${productId}.webp`
info[0].innerHTML = product[productId].genre
info[1].innerHTML = product[productId].publisher
info[2].innerHTML = product[productId].year_publis
info[3].innerHTML = product[productId].age_limit
