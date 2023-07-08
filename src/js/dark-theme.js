const checkboxDarkTheme = document.querySelector('input[type = "checkbox"]');

checkboxDarkTheme.addEventListener('change', (event) => {
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
    }
    else {
      document.body.removeAttribute('dark');
    }
  } catch (err) { }
}

addDarkThemeToBody();