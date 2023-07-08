export function marcupListBooks(arr) {
  return arr
    .map(
      ({
        title,
        book_image = './images/book_default/book_default.jpg',
        author,
        description,
        list_name,
        buy_links,
      }) => `<li>
            <div><img src="${book_image}" alt="${title}" /></div>
            <div>
              <div>
                <h2 class="title-book">${title}</h2>
                <h3 class="shopping-list__subtitle">${list_name}</h3>
                <p class="description">${description}</p>
              </div>
              <div>
                <span class="autor">${author}</span>
                <ul class="shop-list">
                <li> 
                 <a href="${
                   buy_links.filter(({ name }) => {
                     return name === 'Amazon';
                   })[0].url
                 }))}">    <img src="./images/amazon.png" alt="logo Amazon" />
</a>
</li>
<li> 
  <a href="${
    buy_links.filter(({ name }) => {
      return name === 'Apple Books';
    })[0].url
  }"><img src="./images/book.png" alt="Book" />
</a>
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
