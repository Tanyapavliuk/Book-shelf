import fetch from './serviceBook';
import { marcupListBooks } from './marcupListBooks';

const listBooksEl = document.querySelector('.js-list-books');
console.log(listBooksEl);
async function addLocalStoredge(data) {
  localStorage.setItem('shopingBooks', JSON.stringify(await data()));
}
addLocalStoredge(fetch);

try {
  const books = JSON.parse(localStorage.getItem('shopingBooks'));
  console.log('books', books);


  listBooksEl.innerHTML = marcupListBooks(books);
}catch(err){console.log(err)}
