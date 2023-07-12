export function isActivePage() {
  const serchActivEl = document.querySelector('.home');
  if (!serchActivEl) {
    this.classList.add('home');
  }
  if (serchActivEl) {
    serchActivEl.remove('home');
  }
  this.classList.add('home');
}
