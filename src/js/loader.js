
let mask = document.querySelector('.mask');
window.addEventListener('load', () => {
    mask.classList.add('hiden');
    setTimeout(() => {
        mask.remove();
    }, 800);
})
// window.onload = function (){
//     let mask = document.getElementById('#preloader');
//     mask.style.display = 'none';
//  }