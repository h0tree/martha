let banner = document.querySelector('.banner');
let arrow = document.querySelectorAll('.arrrow');
let list = 0;

arrow[0].addEventListener('click', () => {
    if(list == 1) {
        list = list - 1;
        arrowBanner()
    }
    if(list == 0) {
        return true;
    }
    arrowBanner()
})

arrow[1].addEventListener('click', () => {
    if(list == 1) {
        return true;
    }
    if(list == 0) {
        list++;
    }

    arrowBanner()
})


function arrowBanner() {
    if(list == 0) {
        banner.classList.add('banner-martha');
        banner.classList.remove('banner-steepness')
        arrow[0].setAttribute("disabled", "")
        arrow[1].removeAttribute("disabled")
    }
    if(list == 1) {
        banner.classList.add('banner-steepness');
        banner.classList.remove('banner-martha')
        arrow[1].setAttribute("disabled", "")
        arrow[0].removeAttribute("disabled")
    }
}