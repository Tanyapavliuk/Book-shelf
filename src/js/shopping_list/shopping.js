import { marcupListBooks } from './marcupListBooks';
import { onRemuveCard } from './onRemuveCard';
import { isEmpty } from './isEmpty';

const listBooksEl = document.querySelector('.js-list-books');

try {
  const books = JSON.parse(localStorage.getItem('savedBooks'));
  if (!books || !books.length) {
    isEmpty();
  } else {
    listBooksEl.innerHTML = marcupListBooks(books);
    listBooksEl.addEventListener('click', onRemuveCard);
    function returnBooks() {
      return books;
    }
  }
} catch (err) {
  console.log(err);
}

export { returnBooks, isEmpty, listBooksEl };
  
  console.log('hello!!!!')
