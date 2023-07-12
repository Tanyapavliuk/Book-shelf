import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { isActivePage } from './is-active-page';

const loginBtnEl = document.querySelector('.sing-up-btn');
const loginBtnMobEl = document.querySelector('.sing-up-btn-mob');
const backdropLoginEl = document.querySelector('.backdrop-login');
const modalLoginEl = document.querySelector('.login');
const closeModalLoginEl = document.querySelector('.modal-login-close');
const formEl = document.querySelector('.login-form');
const singUpEl = document.querySelector('.sing-up-js');
const singInEl = document.querySelector('.sing-in-js');
const submitBtnEl = document.querySelector('.sub-btn-js');
const nameEl = document.querySelector('.name-js');
const userBtnEl = document.querySelector('.user-btn');
const userDescEl = document.querySelector('.user');
const userMobEl = document.querySelector('.user-mob');
const userNameEl = document.querySelector('.name-user');
const userNameMobEl = document.querySelector('.name-user-mob');
const logoutDescEl = document.querySelector('.log-out-decs');
const logoutMobEl = document.querySelector('.log-out-mob');
const humbMenuEl = document.querySelector('.hamburger-menu');
const mobMenuEl = document.querySelector('.mobile-menu');
const mobCloseEl = document.querySelector('.mobile-close');
const bodyEl = document.querySelector('body');
const spanSingUpEl = document.querySelector('.span-sing-up');
const spanSingInEl = document.querySelector('.span-sing-in');
const shopListDescEl = document.querySelector('.shop-list-desc-js');
export const shopListMobEl = document.querySelector('.shop-list-mob-js');
const homeMobEl = document.querySelector('.home-mob-js');
const homeDescEl = document.querySelector('.home-desc-js');

// оформлення активної сторінки(Ардрій)

if (window.innerWidth < 768) {
  isActivePage.call(homeMobEl);
} else {
  isActivePage.call(homeDescEl);
}

// відкриття модалки логіну

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

// виключення скролу

function scrollOff() {
  if (humbMenuEl.classList.contains('visually-hidden')) {
    bodyEl.style.overflow = 'hidden';
  } else {
    bodyEl.style.overflow = 'visible';
  }
}

// відкриття мобільного меню

humbMenuEl.addEventListener('click', handlerOpenMobMenu);
mobCloseEl.addEventListener('click', handlerCloseMobMenu);

function handlerOpenMobMenu() {
  humbMenuEl.classList.add('visually-hidden');
  mobMenuEl.style.left = '0';
  mobCloseEl.classList.remove('visually-hidden');
  scrollOff();
}
function handlerCloseMobMenu() {
  humbMenuEl.classList.remove('visually-hidden');
  mobMenuEl.style.left = '100%';
  mobCloseEl.classList.add('visually-hidden');
  scrollOff();
}

// зміна теми

const switchThemeEl = document.querySelector('.switch');
const checkboxEl = document.querySelector('.checkbox-theme');

function switchPosition() {
  if (localStorage.getItem('theme')) {
    return (checkboxEl.checked = true);
  }
}
switchPosition();

// опрацювання модалки логіну, реестрація і логінізація
submitBtnEl.textContent = 'Sing up';
if (submitBtnEl.textContent === 'Sing up') {
  submitBtnEl.textContent = 'Sing up';
} else {
  submitBtnEl.textContent = 'Sing in';
}

singUpEl.addEventListener('click', handleSingUp);
singInEl.addEventListener('click', handlesingIn);

function handleSingUp() {
  singInEl.classList.add('disabled-btn');
  singUpEl.classList.remove('disabled-btn');
  spanSingInEl.classList.remove('active-btn');
  spanSingUpEl.classList.add('active-btn');
  submitBtnEl.textContent = 'Sing up';
  nameEl.classList.remove('visually-hidden');
}

function handlesingIn() {
  singUpEl.classList.add('disabled-btn');
  singInEl.classList.remove('disabled-btn');
  spanSingInEl.classList.add('active-btn');
  spanSingUpEl.classList.remove('active-btn');
  nameEl.classList.add('visually-hidden');
  submitBtnEl.textContent = 'Sing in';
}

formEl.addEventListener('submit', handlerFormReg);
formEl.addEventListener('submit', handlerFormLogin);

// реестрація

function handlerFormReg(evt) {
  evt.preventDefault();

  if (submitBtnEl.textContent === 'Sing in') {
    return;
  }

  if (
    submitBtnEl.textContent === 'Sing up' &&
    (!evt.target.username.value ||
      !evt.target.useremail.value ||
      !evt.target.userpass.value)
  ) {
    Notify.warning('Заповніть усі поля.');
    return;
  }

  if (
    submitBtnEl.textContent === 'Sing up' &&
    evt.target.username.value &&
    evt.target.useremail.value &&
    evt.target.userpass.value
  ) {
    try {
      const { users: checkEmail } = JSON.parse(localStorage.getItem('users'));
      if (
        checkEmail.find(userObj => userObj.email === evt.target.useremail.value)
      ) {
        Notify.warning('Такий email вже зареестрований на нашому сайті.');

        evt.target.useremail.value = '';
        evt.target.userpass.value = '';
        return;
      }
    } catch (err) {
      console.log('Error');
    }

    if (!localStorage.getItem('users')) {
      const users = {
        users: [
          {
            name: evt.target.username.value,
            email: evt.target.useremail.value,
            password: evt.target.userpass.value,
          },
        ],
      };
      localStorage.setItem(`users`, JSON.stringify(users));
    } else {
      const addUsers = JSON.parse(localStorage.getItem('users'));
      addUsers.users.push({
        name: evt.target.username.value,
        email: evt.target.useremail.value,
        password: evt.target.userpass.value,
      });
      localStorage.removeItem('users');
      localStorage.setItem(`users`, JSON.stringify(addUsers));
    }

    // автологін при реестрації

    submitBtnEl.textContent = 'Sing in';

    if (
      submitBtnEl.textContent === 'Sing in' &&
      evt.target.useremail.value &&
      evt.target.userpass.value
    ) {
      const { users } = JSON.parse(localStorage.getItem('users'));

      const user = users.find(
        user =>
          user.email === evt.target.useremail.value &&
          user.password === evt.target.userpass.value
      );

      localStorage.setItem('userLogin', true);
      localStorage.setItem('userInSite', JSON.stringify(user));

      handlerCloseLoginModal();

      userNameMobEl.textContent = user.name;
      userNameEl.textContent = user.name;
      loginBtnMobEl.classList.add('visually-hidden');
      loginBtnEl.classList.add('visually-hidden');
      userDescEl.classList.remove('visually-hidden');
      userMobEl.classList.remove('visually-hidden');
      logoutMobEl.classList.remove('visually-hidden');
      shopListDescEl.classList.remove('visually-hidden');
      shopListMobEl.classList.remove('visually-hidden');
      homeMobEl.classList.remove('visually-hidden');
    }

    evt.target.username.value = '';
    evt.target.useremail.value = '';
    evt.target.userpass.value = '';

    handlesingIn();
  }
}

// логінізація

function handlerFormLogin(evt) {
  evt.preventDefault();

  if (localStorage.getItem('userLogin')) {
    return;
  }

  try {
    if (
      submitBtnEl.textContent === 'Sing in' &&
      (!evt.target.useremail.value || !evt.target.userpass.value)
    ) {
      Notify.warning('Введіть логін і пароль.');
      return;
    }

    if (
      submitBtnEl.textContent === 'Sing in' &&
      evt.target.useremail.value &&
      evt.target.userpass.value
    ) {
      const { users } = JSON.parse(localStorage.getItem('users'));

      const user = users.find(
        user =>
          user.email === evt.target.useremail.value &&
          user.password === evt.target.userpass.value
      );

      evt.target.useremail.value = '';
      evt.target.userpass.value = '';

      handlerCloseLoginModal();

      userNameMobEl.textContent = user.name;
      userNameEl.textContent = user.name;
      loginBtnMobEl.classList.add('visually-hidden');
      loginBtnEl.classList.add('visually-hidden');
      userDescEl.classList.remove('visually-hidden');
      userMobEl.classList.remove('visually-hidden');
      logoutMobEl.classList.remove('visually-hidden');
      shopListDescEl.classList.remove('visually-hidden');
      shopListMobEl.classList.remove('visually-hidden');
      homeMobEl.classList.remove('visually-hidden');

      localStorage.setItem('userLogin', true);
      localStorage.setItem('userInSite', JSON.stringify(user));
    }
  } catch (err) {
    Notify.warning('Логін або пароль невірний. Спробуйте ще разю');
    handlerOpenLoginModal();
  }
}

// перевірка при перезавантаженні сторінки

function checkUser() {
  if (localStorage.getItem('userLogin')) {
    const user = JSON.parse(localStorage.getItem('userInSite'));
    userNameMobEl.textContent = user.name;
    userNameEl.textContent = user.name;
    loginBtnMobEl.classList.add('visually-hidden');
    loginBtnEl.classList.add('visually-hidden');
    userDescEl.classList.remove('visually-hidden');
    userMobEl.classList.remove('visually-hidden');
    logoutMobEl.classList.remove('visually-hidden');
    shopListDescEl.classList.remove('visually-hidden');
    shopListMobEl.classList.remove('visually-hidden');
    homeMobEl.classList.remove('visually-hidden');
  }
}
checkUser();

// вихід

logoutDescEl.addEventListener('click', handlerLogout);
logoutMobEl.addEventListener('click', handlerLogout);
userBtnEl.addEventListener('click', handlerOpenLogout);

function handlerLogout() {
  logoutDescEl.classList.add('visually-hidden');
  logoutMobEl.classList.add('visually-hidden');
  userDescEl.classList.add('visually-hidden');
  userMobEl.classList.add('visually-hidden');
  loginBtnMobEl.classList.remove('visually-hidden');
  loginBtnEl.classList.remove('visually-hidden');
  shopListDescEl.classList.add('visually-hidden');
  shopListMobEl.classList.add('visually-hidden');
  homeMobEl.classList.add('visually-hidden');

  localStorage.removeItem('userLogin');
  localStorage.removeItem('userInSite');
  handlerCloseMobMenu();
}

function handlerOpenLogout() {
  if (logoutDescEl.classList.contains('visually-hidden')) {
    logoutDescEl.classList.remove('visually-hidden');
  } else {
    logoutDescEl.classList.add('visually-hidden');
  }
}
