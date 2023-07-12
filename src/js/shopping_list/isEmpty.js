import bookIsEmptyMob from '../../images/shopping_List/IMG_9606 1.png';
import { listBooksEl } from './shopping';
import { onRemoveCard } from './remuve-card';

export function isEmpty() {
  listBooksEl.innerHTML = `<div class="is-empty">
  <p class="text-empty">This page is empty, add some books and proceed to order.</p>
  <img src="${bookIsEmptyMob}" alt=""/></div>
`;
  listBooksEl.removeEventListener('click', onRemoveCard);
}
