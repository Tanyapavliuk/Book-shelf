import { books } from './shopping';
import { isEmpty } from './isEmpty';
import { listBooksEl } from './shopping';
import { marcupListBooks } from './marcupListBooks';

export function onRemuveCard(e) {
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

    if (!books.length) {
      return isEmpty();
    }
    listBooksEl.innerHTML = marcupListBooks(books);
  }
}
