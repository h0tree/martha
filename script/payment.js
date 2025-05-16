let form = document.querySelector('.payment__form');
let payment = document.querySelector('.payment')
let buttonPay = document.querySelector('.product_buy')
let paymentPrice = document.querySelector('.payment__price')
let priceBook = Number(document.querySelector('.product_price_text').innerHTML);

paymentPrice.innerHTML = priceBook

buttonPay.addEventListener('click', ()=>{
    payment.classList.add('payment--open')
})

form.addEventListener('submit', (event) => {
    event.preventDefault(); 
    anonsOn();
    setTimeout(anonsOff, 3000);
    payment.classList.remove('payment--open')
});

function anonsOn(text) {
    let anonsWindow = document.querySelector('.announcement');
    let anons_p = document.querySelector('.announcement__p');

    if(text != null) {
        anons_p.innerHTML = anonsText;
        let anonsText = text;
    }


    anonsWindow.classList.add('announcement__open');
}

function anonsOff() {
    let anonsWindow = document.querySelector('.announcement');
    anonsWindow.classList.remove('announcement__open');
}