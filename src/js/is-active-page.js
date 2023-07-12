export function isActivePage() {
  const serchActivEl = document.querySelector('.home');
  if (serchActivEl) {
    serchActivEl.classList.remove('home');
  }
  this.classList.add('home');
}
