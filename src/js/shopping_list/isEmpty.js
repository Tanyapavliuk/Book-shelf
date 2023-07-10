import { listBooksEl } from "./shopping";
import bookIsEmpty from '../../images/shopping_List/IMG_9606 1.png';
    
export function isEmpty() {
  listBooksEl.innerHTML = `<p>This page is empty, add some books and proceed to order.</p><img src="${bookIsEmpty}" alt="">
`;
}
console.log('hello!')