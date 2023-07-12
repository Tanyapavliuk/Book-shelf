import { container as containerEl } from './hero';
import { getBookByCategory } from './categories';
import amazon from '../images/amazon.png';
import applebooks from '../images/book.png';
import bookshop from '../images/book-block.png';

const modalEl = document.querySelector('.backdrop');
const modalCard = document.querySelector('.modal');
const closeButtonEl = document.querySelector('.modal-shopping-close');
const modalShoppingEl = document.querySelector('.render-modal');
const scrollUpBntEl = document.querySelector('.scroll-btn');
let bookIdent;

function isLocalStorage() {
  const savedBooks = JSON.parse(localStorage.getItem('savedBooks'));
  if (!savedBooks) {
    localStorage.setItem('savedBooks', JSON.stringify([]));
  }
}

function closeModal() {
  modalEl.classList.remove('active');
  modalCard.classList.remove('active');
  scrollUpBntEl.classList.remove("visually-hidden");
  document.body.style.overflow = 'auto';
}

async function fetchBookDetails(bookId) {
  try {
    const url = `https://books-backend.p.goit.global/books/${bookId}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const bookData = await response.json();
    return [bookData];
  } catch (error) {
    console.error(error);
  }
}

function renderModal(bookData) {
  const modalMarkup = bookData
    .map(data => {
      return `
        <div class="card-modal" id="${data._id}">
        <img
          class="modal-img"
          alt="${data.title}"
          src="${data.book_image}"
        />
  
        <div class="thumb-modal">
          <h2 class="book-title-in-modal">${data.title}</h2>
          <p class="subtitle-book">${data.author}</p>
          <p class="text book">
          ${
            data.description
              ? data.description
              : 'Sorry, but this book does not have an accessible description. Try reading it on the website of one of the shops'
          }
          </p>
          <ul class="shop-list">
            <li>
              <a href="${data.buy_links[0].url}" target="_blank">
                <img src="${amazon}" alt="Amazon" class="darkFilterModal"/>
              </a>
            </li>
            <li>
              <a href="${data.buy_links[1].url}" target="_blank">
                <img src="${applebooks}" alt="Apple Books" />
              </a>
            </li>
            <li>
              <a href="${data.buy_links[4].url}" target="_blank">
                <img src="${bookshop}" alt="Bookshop" />
              </a>
            </li>
          </ul>
        </div>
      </div>
        `;
    })
    .join('');

  modalShoppingEl.insertAdjacentHTML('beforeend', modalMarkup);
}

// Застосування білого фільтру для картинки Амазон

const imgFilterAmazon = () => {
  const forAmazonFilterModal = document.querySelector('.darkFilterModal');

  if (localStorage.getItem('theme') === 'dark') {
    forAmazonFilterModal.classList.add('filter-img');
    
  } else {
    forAmazonFilterModal.classList.remove('filter-img');
  }
};

// ---

async function callModal(bookId) {
  try { 
    scrollUpBntEl.classList.add("visually-hidden");
    modalShoppingEl.innerHTML = '';
    const bookData = await fetchBookDetails(bookId);
    bookIdent = bookData[0]._id;

    renderModal(bookData);
    imgFilterAmazon();
    renderModalButton(bookIdent);
  } catch (error) {
    console.error(error);
  }
}

async function saveObjectLocal(bookIdent) {
  try {
    const bookData = await fetchBookDetails(bookIdent);

    const {
      _id,
      book_image,
      title,
      list_name,
      description,
      author,
      buy_links,
    } = bookData[0];

    const savedBook = {
      _id,
      book_image,
      title,
      list_name,
      description,
      author,
      buy_links,
    };

    const savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];

    savedBooks.push(savedBook);

    localStorage.setItem('savedBooks', JSON.stringify(savedBooks));
  } catch (error) {
    console.error(error);
  }
}

function deleteObjectLocal(bookIdent) {
  const savedBooks = JSON.parse(localStorage.getItem('savedBooks'));

  const index = savedBooks.findIndex(book => book._id === bookIdent);

  if (index !== -1) {
    savedBooks.splice(index, 1);
  }

  localStorage.setItem('savedBooks', JSON.stringify(savedBooks));
}

function renderModalButton(bookIdent) {
  const savedBooks = JSON.parse(localStorage.getItem('savedBooks'));

  if (savedBooks.some(book => book._id === bookIdent)) {
    const modalBtn = `
      <button type="submit" class="button book" aria-label="Remove from shopping">
        Remove from the shopping list
      </button>
      <p class="congratulation">
        Сongratulations! You have added the book to the shopping list. To delete,
        press the button “Remove from the shopping list”.
      </p>
    `;
    modalShoppingEl.insertAdjacentHTML('beforeend', modalBtn);

    const submitShoppingEl = document.querySelector('.button.book');

    let isLogin = JSON.parse(localStorage.getItem('userLogin'));

    if (!isLogin) {
      submitShoppingEl.disabled = true;
      submitShoppingEl.textContent = 'Login please';
    }

    submitShoppingEl.addEventListener('click', handleRemoveButtonClick);
    
  } else {
    const modalBtn = `
      <button type="submit" class="button book" aria-label="Add to shopping">
        Add to shopping list
      </button>
    `;
    modalShoppingEl.insertAdjacentHTML('beforeend', modalBtn);

    const submitShoppingEl = document.querySelector('.button.book');

    let isLogin = JSON.parse(localStorage.getItem('userLogin'));

    if (!isLogin) {
      submitShoppingEl.disabled = true;
      submitShoppingEl.textContent = 'Login please';
    }

    submitShoppingEl.addEventListener('click', handleAddButtonClick);
  }
}


function handleAddButtonClick(event) {
  saveObjectLocal(bookIdent);
  closeModal();
  removeModalButtonEventListeners();
}

function handleRemoveButtonClick(event) {
  deleteObjectLocal(bookIdent);
  closeModal();
  removeModalButtonEventListeners();
}

function removeModalButtonEventListeners() {
  const submitShoppingEl = document.querySelector('.button.book');
  submitShoppingEl.removeEventListener('click', handleRemoveButtonClick);
  submitShoppingEl.removeEventListener('click', handleAddButtonClick);
}

function modalBackdropClose(event) {
  if (event.target === modalEl) {
    closeModal();
    removeModalEventListeners();
  }
}

function modalCloseButtonClick(event) {
  closeModal();
  removeModalEventListeners();
}

function escapeKeyClose(event) {
  if (event.key === 'Escape') {
    closeModal();
    removeModalEventListeners();
  }
}

function removeModalEventListeners() {
  modalEl.removeEventListener('click', modalBackdropClose);
  document.removeEventListener('keydown', escapeKeyClose);
  closeButtonEl.removeEventListener('click', modalCloseButtonClick);
}

isLocalStorage();

window.addEventListener('load', function () {
  containerEl.addEventListener('click', containerClick);
});

function containerClick(event) {
  let bookId;

  if (event.target.tagName === 'BUTTON') {
    getBookByCategory(event.target.dataset.catname);
  }
  if (event.target.classList.value.includes('js-ct')) {
    bookId = event.target.parentElement.dataset.id;
  }

  if (bookId) {
    callModal(bookId);
    modalEl.classList.add('active');
    modalCard.classList.add('active');
    document.body.style.overflow = 'hidden';

    modalEl.addEventListener('click', modalBackdropClose);
    document.addEventListener('keydown', escapeKeyClose);
    closeButtonEl.addEventListener('click', modalCloseButtonClick);
  }
}
