function MakeNode(html, css, parEl, inner) {
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

function MakeNodeHidden(html, css, parEl, inner) {
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

const client = window.supabase.createClient(
  "https://cejwvftwqbsynomkodvy.supabase.co",
  "sb_publishable_CW1Q1g2giFzoC5YUSR2kUQ_RbvkoZaa"
);

async function loadBooks() {
  const { data, error } = await client
    .from('books')
    .select('*');

  if (error) {
    console.error(error);
    return;
  }


  renderBooks(data);
}


function renderBooks(books) {
    books.forEach((element, index) => {


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
        let buy = MakeNode('div', 'product-list-item__buy', '.product-list-item__bottom')
        MakeNode('p', 'product-list-item__price', '.product-list-item__bottom', `${element.price} рублей`)
        MakeNode('div', 'product__click', '.product-list-item-card')
        MakeNode('p', 'product-list-item__auther', '.product__click', element.author)
        MakeNode('h3', 'product-list-item__title', '.product__click', element.title)
        let card = MakeNode('div', 'imges_content', '.product__click')



        let img = document.createElement('img');
        let partElemImg = document.querySelector('.imges_content');
        img.classList.add('product-list-item__img');
        img.src = `imges/book/book${element.id}.webp`;
        partElemImg.prepend(img);


        let DescriptionP = MakeNodeHidden('p', 'description-p', '.imges_content', Description)
        let DescriptionTitle = MakeNodeHidden('p', 'description-title', '.imges_content', 'Описание:')


            const show = () => {
                img.classList.add('product-list-item__img-hidden');
                DescriptionTitle.classList.remove('hidden');
                DescriptionP.classList.remove('hidden');
                node.style.cursor = "pointer";
            };

            const hide = () => {
                img.classList.remove('product-list-item__img-hidden');
                DescriptionTitle.classList.add('hidden');
                DescriptionP.classList.add('hidden');
            };

            // события "показать"
            ["mouseenter", "touchstart"].forEach(event => {
                node.addEventListener(event, show);
            });

            // события "скрыть"
            ["mouseleave", "touchend"].forEach(event => {
                node.addEventListener(event, hide);
            });

        card.addEventListener('click', () => {
            const productID = element.id
            window.location.href = `product.html?id=${productID}`;
        })
        console.log(element.id)

    });
}

loadBooks();