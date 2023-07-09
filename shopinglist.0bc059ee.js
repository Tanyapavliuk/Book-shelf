var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},e={},s=o.parcelRequired7c6;null==s&&((s=function(o){if(o in i)return i[o].exports;if(o in e){var s=e[o];delete e[o];var t={id:o,exports:{}};return i[o]=t,s.call(t.exports,t,t.exports),t.exports}var l=Error("Cannot find module '"+o+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(o,i){e[o]=i},o.parcelRequired7c6=s);var t=s("2shzp");async function l(){let o=await (0,t.default)("https://books-backend.p.goit.global/books/category?category=Advice How-To and Miscellaneous");return console.log(o.data),o.data}const a=document.querySelector(".js-list-books");console.log(a),async function(o){localStorage.setItem("shopingBooks",JSON.stringify(await o()))}(l);try{let o=JSON.parse(localStorage.getItem("shopingBooks"));o?a.innerHTML=o.map(({title:o,book_image:i="./images/book_default/book_default.jpg",author:e,description:s,list_name:t,buy_links:l})=>(s||(s="Sorry, but this book does not have an accessible description. Try reading it on the website of one of the shops"),`<li class="shopping-list-card">
            <div class="shopping-list-img-container"><img class="shopping-list-img" src="${i}" alt="${o}" /></div>
            <div class="shopping-list-description-thumb">
              <div >
                <h2 class="title-book">${o}</h2>
                <h3 class="shopping-list__subtitle">${t}</h3>
                <p class="description">${s}</p>
              </div>
              <div class="shopping-list-thumb">
                <span class="author">${e.split(",")[0]}</span>
                <ul class="shopping-list-store">
                <li > 
                 <a href="${l.filter(({name:o})=>"Amazon"===o)[0].url}"><img src="./images/amazon.png" alt="logo Amazon" />
</a>
</li>
<li> 
  <a href="${l.filter(({name:o})=>"Apple Books"===o)[0].url}"><img src="./images/book.png" alt="Book" />
</a>
</li>
<li> 
<a href="${l.filter(({name:o})=>"Bookshop"===o)[0].url}"><img src="./images/book-block.png" alt="logo Book-block" /></a>
</li></ul>
                </div>
              </div>
            </div>
            
          </li>
`)).join(""):a.innerHTML=`<p>This page is empty, add some books and proceed to order.</p><img src="./images/shopping_List/IMG_9606 1.png" alt="">
`}catch(o){console.log(o)}
//# sourceMappingURL=shopinglist.0bc059ee.js.map
