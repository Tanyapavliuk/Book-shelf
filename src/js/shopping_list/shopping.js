import { marcupListBooks } from './marcupListBooks';
import { isActivePage } from '../is-active-page';
import { isEmpty } from './isEmpty';

const listBooksEl = document.querySelector('.js-list-books');
const serchActivEl = document.querySelector('.home');
const activPage = document.querySelector('.shopping-list');

isActivePage.call(activPage);

try {
  const books = JSON.parse(localStorage.getItem('savedBooks'));
  if (!books || !books.length) {
    isEmpty();
  } else {
    listBooksEl.innerHTML = marcupListBooks(books);

    listBooksEl.addEventListener('click', onRemuveCard);

    function onRemuveCard(e) {
      if (!e.target.classList.contains('js-trash')) {
        return;
      }
      const shoppingCardId =
        e.target.dataset.id ?? e.target.closest('.js-trash-id').dataset.id;

      const indexDel = books.findIndex(({ _id }) => _id === shoppingCardId);
      if (indexDel !== -1) {
        books.splice(indexDel, 1);

        localStorage.setItem('savedBooks', JSON.stringify(books));

        if (!books.length) {
          return isEmpty();
        }
        listBooksEl.innerHTML = marcupListBooks(books);
      }
    }
  }
} catch (err) {
  console.log(err);
}

export{listBooksEl,books}
