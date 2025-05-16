var buttonPromoActive = document.querySelector('.product_actived');
let BookPrice = Number(document.querySelector('.product_price_text').innerHTML);
let BookPriceText = document.querySelector('.product_price_text');
let newPrice;

let promoValue = false;

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



buttonPromoActive.addEventListener('click', () => {
    const value = document.querySelector('.product_promo_input').value;
    if(promoValue == false) {
        promo.forEach((index, element) => {
            if(index.namePromo == value) {
                newPrice = Math.floor(BookPrice - (BookPrice*index.discount));

                BookPriceText.innerHTML = newPrice;

                promoValue = true
                anonsOn_t('Вы успешно использовали промокод!')
                setTimeout(anonsOff, 3000);
            }
    })
    }
    
    if(promoValue == true) {
        anonsOn_t('Вы уже использовали промокод!')
        setTimeout(anonsOff, 3000);
    }


    function anonsOn_t(text) {
        let anonsWindow = document.querySelector('.announcement');
        let anons_p = document.querySelector('.announcement__p');

        if(text != null) {
            anons_p.innerHTML = text;
        }


        anonsWindow.classList.add('announcement__open');
    }
    
    function anonsOff() {
        let anonsWindow = document.querySelector('.announcement');
        anonsWindow.classList.remove('announcement__open');
    }

});



