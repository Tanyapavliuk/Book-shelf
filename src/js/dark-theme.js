document.querySelector('.themetoggle').addEventListener('click', (event) => {
  event.preventDefault();
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
  }
  else {
    localStorage.setItem('theme', 'dark')
  }
  addDarkThemeToBody()
});

function addDarkThemeToBody() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      document.body.setAttribute('dark', "");
      document.querySelector('.themetoggle .dark').classList.remove('hidden');
      document.querySelector('.themetoggle .light').classList.add('hidden');
    }
    else {
      document.body.removeAttribute('dark');
      document.querySelector('.themetoggle .dark').classList.add('hidden');
      document.querySelector('.themetoggle .light').classList.remove('hidden');
    }
  } catch (err) { }
}

addDarkThemeToBody();