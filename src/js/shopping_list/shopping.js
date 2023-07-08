import fetch from './serviceBook';

const listBooksEl = document.querySelector('.js-list-books');
console.log(listBooksEl);
async function addLocalStoredge(data) {
  localStorage.setItem('shopingBooks', JSON.stringify(await data()));
}
addLocalStoredge(fetch);

const books = JSON.parse(localStorage.getItem('shopingBooks'));
console.log('books', books);

function marcupListBooks(arr) {
  return arr
    .map(
      ({
        title,
        book_image,
        author,
        description,
        list_name,
        buy_links,
      }) => `<li>
            <div><img src="${book_image}" alt="${title}" /></div>
            <div>
              <div>
                <h2>${title}</h2>
                <h3>${list_name}</h3>
                <p>${description}</p>
              </div>
              <div>
                <span>${author}</span>
                <ul>
                <li> 
                 <a href="${
                   buy_links.filter(({ name }) => {
                     return name === 'Amazon';
                   })[0].url
                 }))}"><img src="./images/amazon.png" alt="logo Amazon" /></a>
</li>
<li> 
  <a href="${
    buy_links.filter(({ name }) => {
      return name === 'Apple Books';
    })[0].url
  }"><img src="./images/book.png" alt="logo Book" /></a>
</li>
<li> 
<a href="${
        buy_links.filter(({ name }) => {
          return name === 'Bookshop';
        })[0].url
      }"><img src="./images/book-block.png" alt="logo Book-block" /></a>
</li></ul>
                </div>
              </div>
            </div>
            <button></button>
          </li>
`
    )
    .join('');
}

listBooksEl.innerHTML = marcupListBooks(books);
