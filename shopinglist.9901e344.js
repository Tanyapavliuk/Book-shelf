var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},e={},i=o.parcelRequired7c6;null==i&&((i=function(o){if(o in t)return t[o].exports;if(o in e){var i=e[o];delete e[o];var s={id:o,exports:{}};return t[o]=s,i.call(s.exports,s,s.exports),s.exports}var a=Error("Cannot find module '"+o+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(o,t){e[o]=t},o.parcelRequired7c6=i),i("bUb57");var s=i("2shzp");async function a(){let o=await (0,s.default)("https://books-backend.p.goit.global/books/category?category=Advice How-To and Miscellaneous");return o.data}function n(o){return o.map(({_id:o,title:t,book_image:e="./images/book_default/book_default.jpg",author:i,description:s,list_name:a,buy_links:n})=>(s||(s="Sorry, but this book does not have an accessible description. Try reading it on the website of one of the shops"),`<li class="shopping-list-card">
            <div class="shopping-list-img-container"><img class="shopping-list-img" src="${e}" alt="${t}" /></div>
            <div class="shopping-list-description-thumb">
              <div >
                <h2 class="title-book">${t}</h2>
                <h3 class="shopping-list__subtitle">${a}</h3>
                <p class="description">${s}</p>
              </div>
              <div class="shopping-list-thumb">
                <span class="author">${i.split(",")[0]}</span>
                <ul class="shopping-list-store">
                <li > 
                 <a href="${n.filter(({name:o})=>"Amazon"===o)[0].url}"><img src="./images/amazon.png" alt="logo Amazon" />
</a>
</li>
<li> 
  <a href="${n.filter(({name:o})=>"Apple Books"===o)[0].url}"><img src="./images/book.png" alt="Book" />
</a>
</li>
<li> 
<a href="${n.filter(({name:o})=>"Bookshop"===o)[0].url}"><img src="./images/book-block.png" alt="logo Book-block" /></a>
</li></ul>
                </div>
              </div>
            </div>
            <button type="button" data-id="${o}" class="shopping-list-btn-del js-trash ">
</button> 
          </li>
`)).join("")}const l=document.querySelector(".js-list-books");!async function(o){localStorage.setItem("shopingBooks",JSON.stringify(await o()))}(a);try{let o=JSON.parse(localStorage.getItem("shopingBooks"));o&&o.length?(l.innerHTML=n(o),l.addEventListener("click",function(t){if(console.log(t.target),!t.target.classList.contains("js-trash"))return;console.log(t.target.dataset.id),console.log("targetId",t.target.dataset.id);let e=o.findIndex(({_id:o})=>o===t.target.dataset.id);if(console.log(e),-1!==e){if(o.splice(e,1),localStorage.setItem("shopingBooks",JSON.stringify(o)),!o.length)return r();l.innerHTML=n(o)}})):r()}catch(o){console.log(o)}function r(){l.innerHTML=`<p>This page is empty, add some books and proceed to order.</p><img src="./images/shopping_List/IMG_9606 1.png" alt="">
`}
//# sourceMappingURL=shopinglist.9901e344.js.map
