import fetch from './serviceBook';
import { marcupListBooks } from './marcupListBooks';
const listBooksEl = document.querySelector('.js-list-books');

async function addLocalStoredge(data) {
  localStorage.setItem('shopingBooks', JSON.stringify(await data()));
}

addLocalStoredge(fetch);

try {
  const books = JSON.parse(localStorage.getItem('shopingBooks'));
  // console.log('books', books);
  // const books = [];
  if (!books||!books.length) {
    // console.log("fuck!!!", books.length);
 isEmpty()
  } else {
    listBooksEl.innerHTML = marcupListBooks(books);
    // const btnDelEl = document.querySelectorAll('.js-trash');
    // console.log(books)
    listBooksEl.addEventListener('click', onRemuveCard);

    function onRemuveCard(e) {
      console.log(e.target);

      if (!e.target.classList.contains('js-trash')) {
        return;
      }
      console.log(e.target.dataset.id);

      console.log('targetId', e.target.dataset.id);
      const indexDel = books.findIndex(
        ({ _id }) => _id === e.target.dataset.id
      );
      console.log(indexDel);
      if (indexDel !== -1) {
        books.splice(indexDel, 1);
        localStorage.setItem('shopingBooks', JSON.stringify(books));
        if(!books.length){return isEmpty()}
        listBooksEl.innerHTML = marcupListBooks(books);
      }
    }
  }
} catch (err) {
  console.log(err);
}

function isEmpty() {
     listBooksEl.innerHTML = `<p>This page is empty, add some books and proceed to order.</p><img src="./images/shopping_List/IMG_9606 1.png" alt="">
`;
}
