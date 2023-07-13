
let mask = document.querySelector('.mask');
window.addEventListener('load', () => {
    mask.classList.add('hiden');
    setTimeout(() => {
        mask.remove();
    }, 800);
})
