const containerEl = document.querySelector('.container');
const modalEl = document.querySelector('.backdrop');
const closeButtonEl = document.querySelector('.modal-shopping-close');
const modalShoppingEl = document.querySelector('.render-modal');
const submitShoppingEl = document.querySelector('.button.book')

const bookId = '643282b1e85766588626a0dc';

function closeModal() {
  modalEl.classList.remove('active');
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
          ${data.description}
          </p>
          <ul class="shop-list">
            <li>
              <a href="${data.buy_links[0].url}">
                <img src="./images/amazon.png" alt="Amazon" />
              </a>
            </li>
            <li>
              <a href="${data.buy_links[1].url}">
                <img src="./images/book.png" alt="Apple Books" />
              </a>
            </li>
            <li>
              <a href="${data.buy_links[4].url}">
                <img src="./images/book-block.png" alt="Bookshop" />
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
    renderModal(bookData);
  } catch (error) {
    console.error(error);
  }
}

window.addEventListener('load', function () {
  containerEl.addEventListener('click', event => {
    callModal(bookId);
    modalEl.classList.add('active');
  });

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
});

submitShoppingEl.addEventListener('click', event => {
  const cardModalElement = event.target.parentNode.closest('.card-modal');
  if (cardModalElement) {
    const id = cardModalElement.getAttribute('id');
    console.log(id);
  }
});


