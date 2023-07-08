import axios from 'axios';

const container = document.querySelector('.container-books');

console.dir(container);
getQuery();

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
        ({ book_image, author, title }) =>
          `<li>
        <a href="#">
            <img class="book-img" src="${book_image}" alt="${title}" />
            <h3 class="book-title">${title}</h3>
            <h4 class="book-author">${author}</h4>
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
