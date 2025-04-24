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
