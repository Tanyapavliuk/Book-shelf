import fetch from './serviceBook';
import { marcupListBooks } from './marcupListBooks';
import { isActivePage } from '../is-active-page';
import { isEmpty } from './isEmpty';
import { onRemoveCard } from './remuve-card';
import { shopListMobEl } from '../header';
import { isPagination } from './pagination';


const listBooksEl = document.querySelector('.js-list-books');
const serchActivEl = document.querySelector('.home');
const activePage = document.querySelector('.shopping-list');
let books = null;

// оформлення активної сторінки

if (window.innerWidth < 768) {
  isActivePage.call(shopListMobEl);
} else {
  isActivePage.call(activePage);
}

try {
  books = JSON.parse(localStorage.getItem('savedBooks'));
  if (!books || !books.length) {
    isEmpty();
  } else {
    listBooksEl.innerHTML = marcupListBooks(books);
    isPagination();
    listBooksEl.addEventListener('click', onRemoveCard);
  }
} catch (err) {
  console.log(err);
}

export { listBooksEl, books };
