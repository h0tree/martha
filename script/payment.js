


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