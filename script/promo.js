let buttonPromo = document.querySelector('.product_actived');
let priceBook = Number(document.querySelector('.product_price_text').innerHTML);
let priceBookText = document.querySelector('.product_price_text');
let newPrice;

let promo = 
[
    {
    namePromo: "martha",
    discount: 0.50,
    },
    {
    namePromo: "streepness",
    discount: 0.10,
    },
 ]



buttonPromo.addEventListener('click', () => {
    const value = document.querySelector('.product_promo_input').value;

    promo.forEach((index, element) => {
        if(index.namePromo == value) {
            newPrice = Math.floor(priceBook - (priceBook*index.discount));

            priceBookText.innerHTML = newPrice;

            anonsOn('Вы успешно использовали промокод!')

            setTimeout(anonsOff, 3000);
        }
    })



});



