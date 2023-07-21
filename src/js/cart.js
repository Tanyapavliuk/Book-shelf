const counter = document.querySelector(".cart-counter");
const cart = document.querySelector(".header__cart");
const icon = document.querySelector(".header__cart-icon");

console.log(counter);

export function userTrue() {
if (!window.localStorage.getItem('userLogin')) {
    cart.classList.add("visually-hidden");
}
else {
    setCounterCard();
}
}



export function setCounterCard(params) {
    try{if (window.localStorage.getItem('savedBooks') === []) {
        counter.textContent = 0;
        }
    else {
        const arreyBook = JSON.parse(window.localStorage.getItem('savedBooks'));
        console.log(arreyBook);
        counter.textContent = arreyBook.length;
    }
    }
    catch (err) {
        console.log(err);
    }
    
}
userTrue();



