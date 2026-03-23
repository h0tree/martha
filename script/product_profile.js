const urlParams = new URLSearchParams(window.location.search)
const productId = urlParams.get('id');

let title = document.querySelector('.preview_title');
let auther = document.querySelector('.auther');
let description = document.querySelector('.description-p');
let priceText = document.querySelector('.product_price_text');
let img = document.querySelector('.preview_imges');

let info = document.querySelectorAll('.informationText');

let price;

const client = window.supabase.createClient(
  "https://cejwvftwqbsynomkodvy.supabase.co",
  "sb_publishable_CW1Q1g2giFzoC5YUSR2kUQ_RbvkoZaa"
);


async function loadBooksProfile() {
  const { data, error } = await client
    .from('books')
    .select('*');

  if (error) {
    console.error(error);
    return;
  }


  renderProfile(data);
}


function renderProfile(books) {

    books.forEach(element => {
        
        if (element.id == productId) {
            title.innerHTML = element.title
            auther.innerHTML = element.author
            description.innerHTML = element.description
            priceText.innerHTML = element.price

            price = element.price

            img.src = `imges/book/book${element.id}.webp`
            info[0].innerHTML = element.genre
            info[1].innerHTML = element.publisher
            info[2].innerHTML = element.year_publis
            info[3].innerHTML = element.age_limit
        }
    });
    return price;
}
price = loadBooksProfile()


