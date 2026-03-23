
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.style.opacity = '0';
    loader.style.transition = 'opacity 0.5s';

    setTimeout(() => {
        loader.style.display = 'none';
    }, 800);
});