import axios from 'axios';
export let bookId;

const container = document.querySelector('.container-books');

console.dir(container);
getQuery();

document.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.classList.value.includes('js-ct')) {
    bookId = e.target.parentElement.dataset.id;
    console.log(bookId);
  }
});

function changeName() {}

async function getQuery() {
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
  data.forEach(el => {
    let list = el.books
      .map(
        ({ book_image, author, title, _id }) =>
          `<li class="bs-list-item" hidden>
        <a href="#" class="book-card js-cta" data-id="${_id}">
            <img class="book-img js-ct" src="${book_image}" alt="${title}" />
            <h3 class="book-title js-ct">${title}</h3>
            <h4 class="book-author js-ct">${author}</h4>
        </a>
        </li>`
      )
      .join('');
    html += `<div class="category-block">
        <h2 class="cat-title">${el.list_name}</h2>
        <ul class="book-list">${list}</ul>
        <button type="button" class="btn-more">SEE MORE</button>
    </div>`;
  });
  return html;
}
