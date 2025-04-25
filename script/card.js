function MakeNode(html, css, parEl, inner) {
    let node = document.createElement(html);
    let partElem = document.querySelector(parEl);
    node.classList.add(css);
    if(inner != undefined) {
        node.innerHTML = inner;
    }
    partElem.prepend(node);

}
function MakeNodeReturnHidden(html, css, parEl, inner) {
    let node = document.createElement(html);
    let partElem = document.querySelector(parEl);
    node.classList.add(css);
    node.classList.add("hidden");
    if(inner != undefined) {
        node.innerHTML = inner;
    }
    partElem.prepend(node);

    return node;

}
function MakeNodeReturn(html, css, parEl, inner) {
    let node = document.createElement(html);
    let partElem = document.querySelector(parEl);
    node.classList.add(css);
    if(inner != undefined) {
        node.innerHTML = inner;
    }
    partElem.prepend(node);

    return node;

}
function MakeNodeImg(css, parEl, img) {
    let node = document.createElement('img');
    let partElem = document.querySelector(parEl);
    node.classList.add(css);
    node.src = `imges/book/book${img}.webp`;
    partElem.prepend(node);

}

product.forEach((element, index) => {


    let Description;
    if (element.description.length > 400) {
        Description = `${element.description.substring(0, 400)}...`;
    } else {
        Description = element.description;
    }

    let node = document.createElement('li');
    let partElem = document.querySelector('.product-list');
    node.classList.add('product-list-item');
    partElem.prepend(node);

    MakeNode('div', 'product-list-item-card', '.product-list-item')
    MakeNode('div', 'product-list-item__bottom', '.product-list-item-card')
    let buy = MakeNodeReturn('div', 'product-list-item__buy', '.product-list-item__bottom')
    MakeNode('p', 'product-list-item__price', '.product-list-item__bottom', `${element.price} рублей`)
    MakeNode('div', 'product__click', '.product-list-item-card')
    MakeNode('p', 'product-list-item__auther', '.product__click', element.author)
    MakeNode('h3', 'product-list-item__title', '.product__click', element.title)
    let card = MakeNodeReturn('div', 'imges_content', '.product__click')



    let img = document.createElement('img');
    let partElemImg = document.querySelector('.imges_content');
    img.classList.add('product-list-item__img');
    img.src = `imges/book/book${index}.webp`;
    partElemImg.prepend(img);


    let DescriptionP = MakeNodeReturnHidden('p', 'description-p', '.imges_content', Description)
    let DescriptionTitle = MakeNodeReturnHidden('p', 'description-title', '.imges_content', 'Описание:')


    node.addEventListener('mouseover', () => {
        img.classList.add('product-list-item__img-hidden');
        DescriptionTitle.classList.toggle('hidden');
        DescriptionP.classList.toggle('hidden');
        node.style.cursor = "pointer";
    })
    node.addEventListener('mouseout', () => {
        img.classList.remove('product-list-item__img-hidden');
        DescriptionTitle.classList.toggle('hidden');
        DescriptionP.classList.toggle('hidden');

    })

    card.addEventListener('click', () => {
        const productID = index
        window.location.href = `product.html?id=${productID}`;
    })


    let payment = document.querySelector('.payment')
    let payment_price = document.querySelector('.payment__price')

    buy.addEventListener('click', () => {

        let confirmation_block = []
        

        confirmation_block.push(MakeNodeReturn('div', 'confirmation__background', '.body')) 
        confirmation_block.push(MakeNodeReturn('div', 'confirmation', '.confirmation__background'))
        confirmation_block.push(MakeNodeReturn('div', 'confirmation_button', '.confirmation'))
        confirmation_block.push(MakeNodeReturn('div', 'confirmation__button_open', '.confirmation_button'))
        confirmation_block.push(MakeNodeReturn('p', 'confirmation__button__p', '.confirmation__button_open', 'Продолжить'))
        confirmation_block.push(MakeNodeReturn('div', 'confirmation__button_close', '.confirmation_button'))
        confirmation_block.push(MakeNodeReturn('p', 'confirmation__button__p', '.confirmation__button_close', 'Закрыть'))
        confirmation_block.push(MakeNodeReturn('p', 'confirmation__p', '.confirmation', 'Если вы продолжите, то сразу перейдёте к оплате!'))
        confirmation_block.push(MakeNodeReturn('p', 'confirmation__title', '.confirmation', 'Вы уверены?'))


        confirmation_block[5].addEventListener('click', () => {

            confirmation_block.forEach((element) => {
                element.remove()
            })
        })

        confirmation_block[5].addEventListener('mouseover', () => {
            confirmation_block[5].style.cursor = "pointer";
        })

        confirmation_block[3].addEventListener('click', () => {
            payment_price.textContent = `${element.price}`
            payment.classList.toggle('payment--open')

            confirmation_block.forEach((element) => {
                element.remove()
            })

        })

        confirmation_block[3].addEventListener('mouseover', () => {
            confirmation_block[3].style.cursor = "pointer";
        })






        let form = document.querySelector('.payment__form');

        form.addEventListener('submit', (event) => {
            event.preventDefault(); 
            anonsOn('Реквизиты для оплаты отправлены на вашу почту. После оплаты мы вышлем данные для отслеживания вашей посылки.');
            setTimeout(anonsOff, 3000);
            payment.classList.remove('payment--open')
        });
        
        function anonsOn(text) {
            let anonsWindow = document.querySelector('.announcement');
            let anonsText = text;
            let anons_p = document.querySelector('.announcement__p');
        
            anonsWindow.classList.add('announcement__open');
            anons_p.innerHTML = anonsText;
        }
        
        function anonsOff() {
            let anonsWindow = document.querySelector('.announcement');
            anonsWindow.classList.remove('announcement__open');
        }

    })
}) 