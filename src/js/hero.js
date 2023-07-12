import axios from 'axios';

export const container = document.querySelector('.container-books');

if (!container.firstChild) getQuery();

function changeName() {}

export async function getQuery() {
  try {
    const resp = await axios.get(
      `https://books-backend.p.goit.global/books/top-books `
    );
    console.log(resp.data);
    container.insertAdjacentHTML('beforeend', markup(resp.data));
  } catch (err) {
    console.log(err);
  }
}

function markup(data) {
  let html = '';

  console.log;
  data.forEach(el => {
    let catName = el.list_name;
    let list = el.books
      .map(
        ({ book_image, author, title, _id }) =>
          `<li class="bs-list-item" hidden>
        <div class="book-card" data-id="${_id}">
        <div class="image-overlay" data-id="${_id}">
            <img class="book-img js-ct" src="${book_image}" alt="${title}" loading="lazy" />
            <div class="image-description" data-id="${_id}">
      <p class="image-overlay-description js-ct">quick view</p>
     </div>
      </div>
            <h3 class="book-title js-ct">${title}</h3>
            <h4 class="book-author js-ct">${author}</h4>
        </div>
        </li>`
      )
      .join('');
    html += `<div class="category-block">
        <h2 class="cat-title">${el.list_name}</h2>
        <ul class="book-list">${list}</ul>
        <button type="button" class="btn-more" data-catname="${catName}">SEE MORE</button>
    </div>`;
  });

  html = `<h1 class="main-title">Best Sellers <span>Books</span></h1>` + html;
  return html;
}
