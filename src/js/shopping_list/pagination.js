import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { marcupListBooks } from './marcupListBooks';
import { listBooksEl } from './shopping';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const books = JSON.parse(localStorage.getItem('savedBooks'));
let currPage = 1;
let itemsPerPage = 3;
if (window.innerWidth < 768) {
  itemsPerPage = 2;
}

const options = {
  totalItems: books.length,
  itemsPerPage: itemsPerPage,
  visiblePages: itemsPerPage,
};
let pagination;

// проверка на количество книг при удалении и обновление данных в
//пагинации, удаление блока пагинации если книг меньше 4
export function resetPag(i) {
  if (i <= 3) {
    pagination = null;
    try {
      const p = document.querySelector('#tui-pagination-container');
      p.remove();
    } catch (err) {
      if (i === 1)
        Notify.info(`There is one book in your shopping cart.`);
      if (i === 2|| i ===3)
      Notify.info(`There are ${i} books in your shopping cart.`);
    }
  } else pagination.setTotalItems(i);
}

//начальная проверка на необходимость пагинации
export function isPagination() {
  if (books.length > 3) {
    listBooksEl.insertAdjacentHTML(
      'afterend',
      `<div id="tui-pagination-container" class="tui-pagination"></div>`
    );
    pagination = new Pagination('#tui-pagination-container', options);
    document
      .querySelector('#tui-pagination-container')
      .addEventListener('click', () => {
        if (pagination.getCurrentPage() !== currPage) {
          currPage = pagination.getCurrentPage();
          listBooksEl.innerHTML = marcupListBooks(getPagArr());
        }
      });
  }
}

// резка массива на количество книг на одной странице и извлечение нужного куска

function getPagArr() {
  const books = JSON.parse(localStorage.getItem('savedBooks'));
  let page = pagination.getCurrentPage();
  return books.splice(page * 3 - 3, 3);
}
