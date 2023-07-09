export function marcupListBooks(arr) {
  return arr
    .map(
        ({_id,
            title,
            book_image = './images/book_default/book_default.jpg',
            author,
            description,
            list_name,
            buy_links,
        }) => {
            if (!description) { description =
              'Sorry, but this book does not have an accessible description. Try reading it on the website of one of the shops'; };
            return `<li class="shopping-list-card">
            <div class="shopping-list-img-container"><img class="shopping-list-img" src="${book_image}" alt="${title}" /></div>
            <div class="shopping-list-description-thumb">
              <div >
                <h2 class="title-book">${title}</h2>
                <h3 class="shopping-list__subtitle">${list_name}</h3>
                <p class="description">${description}</p>
              </div>
              <div class="shopping-list-thumb">
                <span class="author">${author.split(',')[0]}</span>
                <ul class="shopping-list-store">
                <li > 
                 <a href="${
                   buy_links.filter(({ name }) => {
                     return name === 'Amazon';
                   })[0].url
                 }"><img src="./images/amazon.png" alt="logo Amazon" />
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
            <button type="button" data-id="${_id}" class="shopping-list-btn-del js-trash ">
</button> 
          </li>
`;
        })
    .join('');

}
// {/* <svg class="trash ">
//   <use href="./images/sprite.svg#trash"></use>
// </svg>; */}