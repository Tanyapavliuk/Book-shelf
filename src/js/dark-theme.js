const checkboxDarkTheme = document.querySelector('input[type = "checkbox"]');

checkboxDarkTheme.addEventListener('change', (event) => {
  event.preventDefault();

  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');

  }
  else {
    localStorage.setItem('theme', 'dark');
  }
  
  addDarkThemeToBody();
  setTimeout(onClick, 700);

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

const onClick = () => {
  const forAmazonFilter = document.querySelectorAll('.darkFilter');

  if (localStorage.getItem('theme') === 'dark') {

    forAmazonFilter.forEach((el) => {
      el.classList.add("filter-img");
    });

  } else {

    forAmazonFilter.forEach((el) => {
      el.classList.remove("filter-img");
    });
  }

};