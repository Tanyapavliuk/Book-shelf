import fetch from './serviceBook';
import { marcupListBooks } from './marcupListBooks';
import { isActivePage } from '../is-active-page';
import { isEmpty } from './isEmpty';
import { onRemoveCard } from './remuve-card';

const listBooksEl = document.querySelector('.js-list-books');
const serchActivEl = document.querySelector('.home');
const activPage = document.querySelector('.shopping-list');
let books = null;

isActivePage.call(activPage);

try {
  books = JSON.parse(localStorage.getItem('savedBooks'));
  if (!books || !books.length) {
    isEmpty();
  } else {
    listBooksEl.innerHTML = marcupListBooks(books);
    listBooksEl.addEventListener('click', onRemoveCard);
  }
} catch (err) {
  console.log(err);
}

export { listBooksEl, books };
