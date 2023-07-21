const counter = document.querySelector(".cart-counter");
const cart = document.querySelector(".header__cart");
const icon = document.querySelector(".header__cart-icon");

export function userTrue() {
if (!window.localStorage.getItem('userLogin')) {
    cart.classList.add("visually-hidden");
}
else {
    setCounterCard();
}
}



export function setCounterCard() {
    try{if (window.localStorage.getItem('savedBooks') === []) {
        counter.textContent = 0;
        cart.classList.remove("visually-hidden");
        }
    else {
        const arreyBook = JSON.parse(window.localStorage.getItem('savedBooks'));
        console.log(arreyBook);
        counter.textContent = arreyBook.length;
        cart.classList.remove("visually-hidden");
    }
    }
    catch (err) {
        console.log(err);
    }
    
}
userTrue();



