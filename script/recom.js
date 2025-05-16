const card = document.querySelectorAll('.recommend-card');

card.forEach((element, index) => {
    element.addEventListener('mouseover', () => {
        element.style.cursor = "pointer";
    })
})

card[0].addEventListener('click', () => {
    window.location.href = `read.html`
})
card[1].addEventListener('click', () => {
    window.location.href = `new.html`
})