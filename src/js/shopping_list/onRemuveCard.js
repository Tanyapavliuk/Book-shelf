import { returnBooks} from "./shopping";
import { isEmpty } from "./isEmpty";
import { listBooksEl } from "./shopping";
import { marcupListBooks } from "./marcupListBooks";

export function onRemuveCard(e) {
    const books = returnBooks();
  if (!e.target.classList.contains('js-trash')) {
    return;
  }
  const indexDel = books.findIndex(({ _id }) => _id === e.target.dataset.id);

  if (indexDel !== -1) {
    books.splice(indexDel, 1);
    localStorage.setItem('savedBooks', JSON.stringify(books));
    if (!books.length) {
      return isEmpty();
    }
    listBooksEl.innerHTML = marcupListBooks(books);
  }
}

