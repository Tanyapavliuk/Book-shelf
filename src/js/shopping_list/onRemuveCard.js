import { returnBooks} from "./shopping";
import { isEmpty } from './isEmpty';
import { listBooksEl } from "./shopping";
import { marcupListBooks } from "./marcupListBooks";

export function onRemuveCard(e) {
  const booksArr = returnBooks();
  if (!e.target.classList.contains('js-trash')) {
    return;
  }
    console.log(e.target);

  const indexDel = booksArr.findIndex(({ _id }) => _id === e.target.dataset.id);

  if (indexDel !== -1) {
    booksArr.splice(indexDel, 1);
    localStorage.setItem('savedBooks', JSON.stringify(booksArr));
    if (!booksArr.length) {
      return isEmpty();
    }
    listBooksEl.innerHTML = marcupListBooks(booksArr);
  }
}

