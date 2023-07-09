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
  // console.log('books', books);
  // const books = [];
  if (!books) {
    // console.log("fuck!!!", books.length);
    listBooksEl.innerHTML = `<p>This page is empty, add some books and proceed to order.</p><img src="./images/shopping_List/IMG_9606 1.png" alt="">
`}else{  listBooksEl.innerHTML = marcupListBooks(books);
}

} catch (err) { console.log(err) }

