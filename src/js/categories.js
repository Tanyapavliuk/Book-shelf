import { getQuery } from './hero';
import { container as bookCard } from './hero';

const categoryList = document.querySelector('.category-list');
const axios = require('axios').default;

categoryList.addEventListener('click', onCategoryListClick);

async function getCategoryList() {
  await axios
    .get(`https://books-backend.p.goit.global/books/category-list`)
    .then(({ data }) => {
      renderCategory(data);
    })
    .catch(err => console.log('error', err));
}
getCategoryList();

function renderCategory(data) {
  let markup = data
    .map(
      ({ list_name }) => `<li class = "category-list-item"> ${list_name} </li>`
    )
    .join('');
  markup = `<li class = "category-list-item"> All Categories </li>` + markup;
  categoryList.innerHTML = markup;
}

function onCategoryListClick(event) {
  const idElem = event.target;
  if (idElem.tagName !== 'LI') {
    return;
  }
  if (idElem.textContent === ' All Categories ') {
    bookCard.innerHTML = '';
    getQuery();
  }
  getBookByCategory(idElem.textContent.trim());
  const elem = document.querySelector('.categories__title-active');
  if (elem) {
    elem.classList.remove('categories__title-active');
  }
  event.target.classList.add('categories__title-active');
}

async function getBookByCategory(changeCategory) {
  await axios
    .get(
      `https://books-backend.p.goit.global/books/category?category=${changeCategory}`
    )
    .then(({ data }) => renderedBookCardItem(data));
}

function renderedBookCardItem(data) {
  console.log(data);

  const markup = `
    <h2 class ="main-title">${data[0].list_name}</h2>
    <ul class="book-list">${data
      .map(
        ({ author, book_image, description, title, _id }) =>
          `<li class="bs-list-item">
          <div class="book-card " data-id="${_id}">
    <div class="image-overlay">
    <img class="book-img js-ct" src="${book_image}" alt="${title} id= "${_id}" loading="lazy" >
    <div class="image-description">
      <p class="image-overlay-description"> quick view  </p>
     </div>
      </div>
    <h3 class="book-title js-ct">${title}</h3>
    <p class="book-author js-ct"> ${author}</p>
    </div>
    </li>`
      )
      .join('')}
    </ul>
     `;
  bookCard.innerHTML = markup;
  const titleElement = document.querySelector('.main-title');
  const titleText = titleElement.textContent;
  const words = titleText.split(' ');
  const lastWord = words[words.length - 1];
  titleElement.innerHTML = titleText.replace(
    lastWord,
    `<span class="brendcolor">${lastWord}</span>`
  );
}
