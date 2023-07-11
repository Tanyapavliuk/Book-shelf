import { container as containerEl } from './hero';
import { getBookByCategory } from './categories';
import amazon from '../images/amazon.png';
import applebooks from '../images/book.png';
import bookshop from '../images/book-block.png';

const modalEl = document.querySelector('.backdrop');
const modalCard = document.querySelector('.modal');
const closeButtonEl = document.querySelector('.modal-shopping-close');
const modalShoppingEl = document.querySelector('.render-modal');

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
              <a href="${data.buy_links[0].url}">
                <img src="${amazon}" alt="Amazon" />
              </a>
            </li>
            <li>
              <a href="${data.buy_links[1].url}">
                <img src="${applebooks}" alt="Apple Books" />
              </a>
            </li>
            <li>
              <a href="${data.buy_links[4].url}">
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

async function callModal(bookId) {
  try {
    modalShoppingEl.innerHTML = '';
    const bookData = await fetchBookDetails(bookId);
    bookIdent = bookData[0]._id;

    renderModal(bookData);
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
      <button type="submit" class="button book">
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

    submitShoppingEl.addEventListener('click', event => {
      deleteObjectLocal(bookIdent);
      closeModal();
    });
  } else {
    const modalBtn = `
      <button type="submit" class="button book">
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

    submitShoppingEl.addEventListener('click', event => {
      saveObjectLocal(bookIdent);
      closeModal();
    });
  }
}

isLocalStorage();

window.addEventListener('load', function () {
  containerEl.addEventListener('click', event => {
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

      modalEl.addEventListener('click', event => {
        if (event.target === modalEl) {
          closeModal();
        }
      });

      document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
          closeModal();
        }
      });

      closeButtonEl.addEventListener('click', event => {
        closeModal();
      });
    }
  });
});
