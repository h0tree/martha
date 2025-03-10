let ClassMain = document.querySelector('.content');

let main = document.querySelector('.main')
let title = document.querySelector('.title')
let subtitle = document.querySelector('.sub-title')
let next = document.querySelector('.next')

let arror = []
arror.push(main, title, subtitle, next)

console.log(arror)

ClassMain.addEventListener('click', () => {
    window.location.href = `pl2.html`;
})


