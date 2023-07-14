const scrollUpBtn = document.querySelector('.scroll-btn');
const modalCloseBtn = document.querySelector('.modal-shopping-close');
const modal = document.querySelector('.modal');

const onScroll = () => {
  if (window.scrollY > 100 && !modal.hasAttribute('data-open')) {
    scrollUpBtn.classList.add('show-scroll-btn');
  } else {
    scrollUpBtn.classList.remove('show-scroll-btn');
  }
};

const scrollUp = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

scrollUpBtn.addEventListener('click', scrollUp);
document.addEventListener('scroll', onScroll);


