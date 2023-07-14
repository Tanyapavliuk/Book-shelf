import axios from 'axios';

import chekedImg from '../images/choosed.png';
import { getGhoosedBooks } from './categories';
import { isChoosed } from './categories';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


export const container = document.querySelector('.container-books');

if (!container.firstChild) getQuery();

function changeName() {}

export async function getQuery() {
  try {
    const resp = await axios.get(
      `https://books-backend.p.goit.global/books/top-books `
    );
    container.insertAdjacentHTML('beforeend', markup(resp.data));
  } catch (err) {
     Notify.warning("Sorry, failed to load information");
  }
}

function markup(data) {
  let html = '';
  data.forEach(el => {
    let catName = el.list_name;
    const dataCheck = el.books.map(el => {
      if (getGhoosedBooks().includes(el._id)) el.choosed = 1;
      else el.choosed = 0;
      return el;
    });
    let list = dataCheck
      .map(
        ({ book_image, author, title, _id, choosed }) =>
          `<li class="bs-list-item" hidden>
        <div class="book-card" data-id="${_id}">
        <img class="choosed-icon js-ct ${isChoosed(
          choosed
        )}" src="${chekedImg}" alt="icon" width="25" >
        <div class="image-overlay">
            <img class="book-img js-ct" src="${book_image}" alt="${title}" loading="lazy" />
            <div class="image-description">
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
