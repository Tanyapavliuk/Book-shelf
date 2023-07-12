import { books } from './shopping';
import { isEmpty } from './isEmpty';
import { listBooksEl } from './shopping';
import { marcupListBooks } from './marcupListBooks';
import { resetPag } from './pagination';

export function onRemoveCard(e) {
  const { target } = e;
  if (!target.classList.contains('js-trash')) {
    return;
  }
  const shoppingCardId =
    target.dataset.id ?? target.closest('.js-trash-id').dataset.id;

  const indexDel = books.findIndex(({ _id }) => _id === shoppingCardId);
  if (indexDel !== -1) {
    books.splice(indexDel, 1);

    localStorage.setItem('savedBooks', JSON.stringify(books));
    booksADel = JSON.parse(localStorage.getItem('savedBooks'));
    resetPag(booksADel.length);
    if (!books.length) {
      return isEmpty();
    }
    listBooksEl.innerHTML = marcupListBooks(books);
  }
}
