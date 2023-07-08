const categoryList = document.querySelector(".category-list");
const axios = require('axios').default;
const bookCardList = document.querySelector(".bookCard-list");
const bookCard =document.querySelector(".bookCard");
categoryList.addEventListener('click', onCategoryListClick);



 function getCategoryList (){
     axios.get(`https://books-backend.p.goit.global/books/category-list`).then(({data}) => {
    renderCategory(data)}).catch(err => console.log( 'error', err))
}
getCategoryList()

async function renderCategory(data){
    const markup =  await data.map(({list_name}) => `
    <li class = "category-list-item"> ${list_name} </li>
    `).join('');
    categoryList.innerHTML=markup;
}


function onCategoryListClick(event){
    bookCardList.innerHTML='';
    const idElem= event.target;
    if (idElem.tagName!=="LI"){
        return;
    } getBookByCategory(idElem.textContent.trim());
  
}



async  function getBookByCategory(changeCategory){
        await axios.get(`https://books-backend.p.goit.global/books/category?category=${changeCategory}`).then(({data}) => renderedBookCardItem(data)
    )
    }

function renderedBookCardItem(data){
    const markup = `
    <h2 class =" categoryTitle">${data[0].list_name}</h2>
    <ul class=" bookCard-list">${data.map(({author ,book_image, description, title, _id }) =>
    `<li class="book-list-item">
    <div class="image-overlay">
    <img src="${book_image}" alt="${description} id= "${_id}">
    <div class="image-description">
                    <p class="image-overlay-description">
                    quick view 
                    </p>
                  </div>
                  </div>
    <p class="book-title">${title}</p>
    <p class="book-author"> ${author}</p>
    </li>`).join('')}
    </ul>
     `;
     bookCard.classList.remove("is-hiden")
    bookCard.innerHTML= markup;
   
}
