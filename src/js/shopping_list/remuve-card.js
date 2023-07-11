import { books } from "./shopping";

export function onRemuveCard(e) {
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
