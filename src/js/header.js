const loginBtnEl = document.querySelector('.sing-up-btn');
const backdropLoginEl = document.querySelector('.backdrop-login');
const modalLoginEl = document.querySelector('.login');
const closeModalLoginEl = document.querySelector('.modal-login-close');
const loginBtnMobEl = document.querySelector('.sing-up-btn-mob');

loginBtnEl.addEventListener('click', handlerOpenLoginModal);
loginBtnMobEl.addEventListener('click', handlerOpenLoginModal);
closeModalLoginEl.addEventListener('click', handlerCloseLoginModal);

function handlerOpenLoginModal() {
  backdropLoginEl.classList.add('active');
  backdropLoginEl.style.zIndex = '2';
  modalLoginEl.classList.add('active');
}
function handlerCloseLoginModal() {
  backdropLoginEl.classList.remove('active');
  modalLoginEl.classList.remove('active');
}

const humbMenuEl = document.querySelector('.hamburger-menu');
const mobMenuEl = document.querySelector('.mobile-menu');
const mobCloseEl = document.querySelector('.mobile-close');

humbMenuEl.addEventListener('click', handlerOpenMobMenu);
mobCloseEl.addEventListener('click', handlerCloseMobMenu);

function handlerOpenMobMenu() {
  humbMenuEl.classList.add('visually-hidden');
  mobMenuEl.style.left = '0';
  mobCloseEl.classList.remove('visually-hidden');
}
function handlerCloseMobMenu() {
  humbMenuEl.classList.remove('visually-hidden');
  mobMenuEl.style.left = '100%';
  mobCloseEl.classList.add('visually-hidden');
}

const switchThemeEl = document.querySelector('.switch');
const checkboxEl = document.querySelector('.checkbox-theme');

function switchPosition() {
  if (localStorage.getItem('theme')) {
    return (checkboxEl.checked = true);
  }
}
switchPosition();

const formEl = document.querySelector('.login-form');
const singUpEl = document.querySelector('.sing-up-js');
const singInEl = document.querySelector('.sing-in-js');
const submitBtnEl = document.querySelector('.sub-btn-js');

submitBtnEl.textContent = 'Sing up';
let usersId = 0;

singUpEl.addEventListener('click', handleSingUp);
singInEl.addEventListener('click', handlesingIn);

function handleSingUp() {
  singInEl.classList.add('disabled-btn');
  singUpEl.classList.remove('disabled-btn');
  submitBtnEl.textContent = 'Sing up';
}

function handlesingIn() {
  singUpEl.classList.add('disabled-btn');
  singInEl.classList.remove('disabled-btn');

  submitBtnEl.textContent = 'Sing in';
}

formEl.addEventListener('submit', handlerForm);

function handlerForm(evt) {
  evt.preventDefault();

  if (
    submitBtnEl.textContent === 'Sing up' &&
    evt.target.username.value &&
    evt.target.useremail.value &&
    evt.target.userpass.value
  ) {
    const user = {
      name: evt.target.username.value,
      email: evt.target.useremail.value,
      password: evt.target.userpass.value,
    };

    localStorage.setItem(`user${usersId}`, JSON.stringify(user));
    usersId += 1;

    evt.target.username.value = '';
    evt.target.useremail.value = '';
    evt.target.userpass.value = '';

    handlesingIn();
  } else {
    console.log('Заповніть усі поля');
  }
}
