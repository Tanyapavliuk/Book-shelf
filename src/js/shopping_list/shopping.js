import fetch from './serviceBook';
import bookIsEmptyMob from '../../images/shopping_List/IMG_9606 1.png';
import { marcupListBooks } from './marcupListBooks';
const listBooksEl = document.querySelector('.js-list-books');

// async function addLocalStoredge(data) {
//   localStorage.setItem('shopingBooks', JSON.stringify(await data()));
// }

// addLocalStoredge(fetch);

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

function isEmpty() {
  listBooksEl.innerHTML = `<div class="is-empty">
  <p class="text-empty">This page is empty, add some books and proceed to order.</p>
  <img src="${bookIsEmptyMob}" alt=""/></div>
`;
}
