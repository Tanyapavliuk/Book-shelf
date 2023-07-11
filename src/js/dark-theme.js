const checkboxDarkTheme = document.querySelector('input[type = "checkbox"]');
const amazonDarkTheme = document.getElementById("dark-theme-filter");   

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
      amazonDarkTheme.classList.add("filter-img");
    }
    else {
      document.body.removeAttribute('dark');
      amazonDarkTheme.classList.remove("filter-img");
    }
  } catch (err) { }
}

addDarkThemeToBody();