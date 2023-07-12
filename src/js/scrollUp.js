// const scrollUpBtn = document.querySelector('.scroll-btn');

// const onScroll = () => {
//   if (window.scrollY > 100) {
//     scrollUpBtn.classList.add('show-scroll-btn');
//   } else {
//     scrollUpBtn.classList.remove('show-scroll-btn');
//   }
// };

// const scrollUp = () => {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth',
//   });
// };

// scrollUpBtn.addEventListener('click', scrollUp);
// document.addEventListener('scroll', onScroll);

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

modalCloseBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  modal.removeAttribute('data-open');
  scrollUpBtn.classList.add('show-scroll-btn');
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
    modal.removeAttribute('data-open');
    scrollUpBtn.classList.add('show-scroll-btn');
  }
});


const showModal = () => {
  modal.style.display = 'block';
  modal.setAttribute('data-open', 'true');
  scrollUpBtn.classList.remove('show-scroll-btn');
};


