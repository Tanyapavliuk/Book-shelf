export function isActivePage() {
  const serchActivEl = document.querySelectorAll('.home');
  if (!serchActivEl.length) {
    this.classList.add('home');
  }
  if (serchActivEl.length) {
    [...serchActivEl].forEach(el => el.classList.remove('home'));
  }
  this.classList.add('home');
}
