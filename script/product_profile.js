const urlParams = new URLSearchParams(window.location.search);
const productId = Number(urlParams.get('id'));

// DOM
const title = document.querySelector('.preview_title');
const auther = document.querySelector('.auther');
const description = document.querySelector('.description-p');
const priceText = document.querySelector('.product_price_text');
const img = document.querySelector('.preview_imges');
const info = document.querySelectorAll('.informationText');

const buttonPromoActive = document.querySelector('.product_actived');
const buttonPay = document.querySelector('.product_buy');
const payment = document.querySelector('.payment');
const paymentPrice = document.querySelector('.payment__price');
const form = document.querySelector('.payment__form');

// Supabase
const client = window.supabase.createClient(
  "https://cejwvftwqbsynomkodvy.supabase.co",
  "sb_publishable_CW1Q1g2giFzoC5YUSR2kUQ_RbvkoZaa"
);

// состояние
let BookPrice = 0;
let promoUsed = false;

// промокоды
const promo = [
    { namePromo: "martha", discount: 0.50 },
    { namePromo: "streepness", discount: 0.10 },
];

// загрузка книги
async function loadBooksProfile() {
    const { data, error } = await client
        .from('books')
        .select('*');

    if (error) {
        console.error(error);
        return 0;
    }

    return renderProfile(data);
}

// рендер
function renderProfile(books) {
    let price = 0;

    books.forEach(element => {
        if (element.id === productId) {
            title.innerHTML = element.title;
            auther.innerHTML = element.author;
            description.innerHTML = element.description;
            priceText.innerHTML = element.price;

            price = Number(element.price);

            img.src = `imges/book/book${element.id}.webp`;
            info[0].innerHTML = element.genre;
            info[1].innerHTML = element.publisher;
            info[2].innerHTML = element.year_publis;
            info[3].innerHTML = element.age_limit;
        }
    });

    return price;
}

// ИНИЦИАЛИЗАЦИЯ
async function init() {
    BookPrice = await loadBooksProfile();

    // сразу обновляем цену в модалке
    paymentPrice.innerHTML = BookPrice;

    console.log('Цена загружена:', BookPrice);
}

init();


// 🎯 ПРОМОКОД
buttonPromoActive.addEventListener('click', () => {
    const value = document.querySelector('.product_promo_input').value;

    if (promoUsed) {
        showAnons('Вы уже использовали промокод!');
        return;
    }

    let found = false;

    promo.forEach(item => {
        if (item.namePromo === value) {
            BookPrice = Math.floor(BookPrice - (BookPrice * item.discount));

            priceText.innerHTML = BookPrice;
            paymentPrice.innerHTML = BookPrice;

            promoUsed = true;
            found = true;

            showAnons('Вы успешно использовали промокод!');
        }
    });

    if (!found) {
        showAnons('Неверный промокод');
    }
});


// ОПЛАТА (модалка)
buttonPay.addEventListener('click', () => {
    payment.classList.add('payment--open');
});

payment.addEventListener('click', (e) => {
    if (e.target === payment) {
        payment.classList.remove('payment--open');
    }
});

// отправка формы
form.addEventListener('submit', (event) => {
    event.preventDefault();

    showAnons('Вы успешно оплатили заказ!');
    payment.classList.remove('payment--open');
});


// 🔔 уведомления
function showAnons(text) {
    const anonsWindow = document.querySelector('.announcement');
    const anonsText = document.querySelector('.announcement__p');

    anonsText.innerHTML = text;
    anonsWindow.classList.add('announcement__open');

    setTimeout(() => {
        anonsWindow.classList.remove('announcement__open');
    }, 3000);
}