import fetch from './serviceBook'
import { marcupListBooks } from './marcupListBooks';
export const listBooksEl = document.querySelector('.js-list-books');
import { resetPag } from './pagination';
import { isPagination } from './pagination';
// async function addLocalStoredge(data) {
//   localStorage.setItem('shopingBooks', JSON.stringify(await data()));
// }


isActivePage.call(activPage);

try {
  books = JSON.parse(localStorage.getItem('savedBooks'));
  if (!books || !books.length) {
    isEmpty();
  } else {
    listBooksEl.innerHTML = marcupListBooks(books);
    isPagination();
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
        qAfterDel = JSON.parse(localStorage.getItem('savedBooks'));
        resetPag(qAfterDel.length);
      }
    }
} catch (err) {
  console.log(err);
}

export { listBooksEl, books };
