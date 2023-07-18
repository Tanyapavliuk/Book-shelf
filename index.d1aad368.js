!function(){let t;function e(t,e,o,i){Object.defineProperty(t,e,{get:o,set:i,enumerable:!0,configurable:!0})}function o(t){return t&&t.__esModule?t.default:t}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},s=i.parcelRequired7c6;null==s&&((s=function(t){if(t in a)return a[t].exports;if(t in n){var e=n[t];delete n[t];var o={id:t,exports:{}};return a[t]=o,e.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){n[t]=e},i.parcelRequired7c6=s),s.register("iE7OH",function(t,o){"use strict";e(t.exports,"register",function(){return i},function(t){return i=t}),e(t.exports,"resolve",function(){return a},function(t){return a=t});var i,a,n={};i=function(t){for(var e=Object.keys(t),o=0;o<e.length;o++)n[e[o]]=t[e[o]]},a=function(t){var e=n[t];if(null==e)throw Error("Could not resolve bundle with id "+t);return e}}),s.register("aNJCr",function(t,o){e(t.exports,"getBundleURL",function(){return i},function(t){return i=t});"use strict";var i,a={};i=function(t){var e=a[t];return e||(e=function(){try{throw Error()}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(t)return(""+t[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),a[t]=e),e}}),s("iE7OH").register(JSON.parse('{"EVgbq":"index.d1aad368.js","aaLHb":"amazon.40ba9165.png","cL3Jl":"book.89e7d427.png","jr1cR":"book-block.950d06ef.png","3Q9Tf":"shopinglist.bd17420c.js","cQXZ9":"shopinglist.80fdd0c6.js"}')),s("i8Q71"),s("32ZrB");var r=s("dIxxU"),l=s("h6c0i");let c=document.querySelector(".container-books");async function d(){try{var t;let e;let o=await (0,r.default).get("https://books-backend.p.goit.global/books/top-books ");c.insertAdjacentHTML("beforeend",(t=o.data,e="",t.forEach(t=>{e+=`<div class="category-block">
        <h2 class="cat-title">${t.list_name}</h2>
        <ul class="book-list">${t.books.map(({book_image:t,author:e,title:o,_id:i})=>`<li class="bs-list-item" hidden>
        <div class="book-card" data-id="${i}">
        <div class="image-overlay" data-id="${i}">
            <img class="book-img js-ct" src="${t}" alt="${o}" loading="lazy" />
            <div class="image-description" data-id="${i}">
      <p class="image-overlay-description js-ct">quick view</p>
     </div>
      </div>
            <h3 class="book-title js-ct">${o}</h3>
            <h4 class="book-author js-ct">${e}</h4>
        </div>
        </li>`).join("")}</ul>
        <button type="button" class="btn-more" data-catname="${t.list_name}">SEE MORE</button>
    </div>`}),e='<h1 class="main-title">Best Sellers <span>Books</span></h1>'+e))}catch(t){(0,l.Notify).warning("Sorry, failed to load information")}}c.firstChild||d();var l=s("h6c0i");let u=document.querySelector(".category-list");var r=s("dIxxU"),g=r.default;let m=document.querySelector(".container-books");async function f(){try{let t;let e=await g.get("https://books-backend.p.goit.global/books/category-list");t=e.data.map(({list_name:t})=>`<li class = "category-list-item"> ${t} </li>`).join(""),t='<li class = "category-list-item"> All Categories </li>'+t,u.innerHTML=t}catch(t){(0,l.Notify).warning("Sorry, failed to load information")}}async function b(t){await g.get(`https://books-backend.p.goit.global/books/category?category=${t}`).then(({data:t})=>(function(t){let e=`
    <h2 class ="main-title">${t[0].list_name}</h2>
    <ul class="book-list">${t.map(({author:t,book_image:e,title:o,_id:i})=>`<li class="bs-list-item">
          <div class="book-card " data-id="${i}">
    <div class="image-overlay" data-id="${i}">
    <img class="book-img js-ct" src="${e}" alt="${o} loading="lazy" >
    <div class="image-description" data-id="${i}">
      <p class="image-overlay-description js-ct"> quick view  </p>
     </div>
      </div>
    <h3 class="book-title js-ct">${o}</h3>
    <p class="book-author js-ct"> ${t}</p>
    </div>
    </li>`).join("")}
    </ul>
     `;c.innerHTML=e;let o=document.querySelector(".main-title"),i=o.textContent,a=i.split(" "),n=a[a.length-1];o.innerHTML=i.replace(n,`<span class="brendcolor">${n}</span>`)})(t))}m.addEventListener("click",function(t){let e=t.target.dataset.catname,o=Array.from(u.querySelectorAll("li")),i=o.find(t=>t.innerText===e),a=o.find(t=>"all categories"===t.innerText.toLowerCase());i&&(a.classList.remove("categories__title-active"),i.classList.add("categories__title-active"))}),u.addEventListener("click",function(t){let e=t.target,o=document.querySelector(".categories__title-active");if("LI"===e.tagName){if(o&&o.classList.remove("categories__title-active"),t.target.classList.add("categories__title-active"),"All Categories"===e.textContent.trim())return c.innerHTML="",d();b(e.textContent.trim())}}),f(),s("xpKCW");var p={};p=s("aNJCr").getBundleURL("EVgbq")+s("iE7OH").resolve("aaLHb");var v={};v=s("aNJCr").getBundleURL("EVgbq")+s("iE7OH").resolve("cL3Jl");var k={};k=s("aNJCr").getBundleURL("EVgbq")+s("iE7OH").resolve("jr1cR");var l=s("h6c0i");let h=document.querySelector(".backdrop"),y=document.querySelector(".modal"),_=document.querySelector(".modal-shopping-close"),L=document.querySelector(".render-modal"),S=document.querySelector(".scroll-btn");function E(){h.classList.remove("active"),y.classList.remove("active"),S.classList.remove("visually-hidden"),document.body.style.overflow="auto"}async function $(t){try{let e=`https://books-backend.p.goit.global/books/${t}`,o=await fetch(e);if(!o.ok)throw Error(`Error: ${o.status} ${o.statusText}`);let i=await o.json();return[i]}catch(t){(0,l.Notify).warning("Sorry, failed to load information")}}let w=()=>{let t=document.querySelector(".darkFilterModal");"dark"===localStorage.getItem("theme")?t.classList.add("filter-img"):t.classList.remove("filter-img")};async function H(e){try{S.classList.add("visually-hidden"),L.innerHTML="";let i=await $(e);t=i[0]._id,function(t){let e=t.map(t=>`
        <div class="card-modal" id="${t._id}">
        <img
          class="modal-img"
          alt="${t.title}"
          src="${t.book_image}"
        />
  
        <div class="thumb-modal">
          <h2 class="book-title-in-modal">${t.title}</h2>
          <p class="subtitle-book">${t.author}</p>
          <p class="text book">
          ${t.description?t.description:"Sorry, but this book does not have an accessible description. Try reading it on the website of one of the shops"}
          </p>
          <ul class="shop-list">
            <li>
              <a href="${t.buy_links[0].url}" target="_blank">
                <img src="${o(p)}" alt="Amazon" class="darkFilterModal"/>
              </a>
            </li>
            <li>
              <a href="${t.buy_links[1].url}" target="_blank">
                <img src="${o(v)}" alt="Apple Books" />
              </a>
            </li>
            <li>
              <a href="${t.buy_links[4].url}" target="_blank">
                <img src="${o(k)}" alt="Bookshop" />
              </a>
            </li>
          </ul>
        </div>
      </div>
        `).join("");L.insertAdjacentHTML("beforeend",e)}(i),w(),function(t){let e=JSON.parse(localStorage.getItem("savedBooks"));if(e.some(e=>e._id===t)){let t=`
      <button type="submit" class="button book" aria-label="Remove from shopping">
        Remove from the shopping list
      </button>
      <p class="congratulation">
        Сongratulations! You have added the book to the shopping list. To delete,
        press the button “Remove from the shopping list”.
      </p>
    `;L.insertAdjacentHTML("beforeend",t);let e=document.querySelector(".button.book");JSON.parse(localStorage.getItem("userLogin"))||(e.disabled=!0,e.textContent="Login please"),e.addEventListener("click",N)}else{let t=`
      <button type="submit" class="button book" aria-label="Add to shopping">
        Add to shopping list
      </button>
    `;L.insertAdjacentHTML("beforeend",t);let e=document.querySelector(".button.book");JSON.parse(localStorage.getItem("userLogin"))||(e.disabled=!0,e.textContent="Login please"),e.addEventListener("click",j)}}(t)}catch(t){(0,l.Notify).warning("Sorry, failed to load information")}}async function x(t){try{let e=await $(t),{_id:o,book_image:i,title:a,list_name:n,description:s,author:r,buy_links:l}=e[0],c=JSON.parse(localStorage.getItem("savedBooks"))||[];c.push({_id:o,book_image:i,title:a,list_name:n,description:s,author:r,buy_links:l}),localStorage.setItem("savedBooks",JSON.stringify(c))}catch(t){(0,l.Notify).warning("Sorry, failed to load information")}}function j(e){x(t),E(),q()}function N(e){!function(t){let e=JSON.parse(localStorage.getItem("savedBooks")),o=e.findIndex(e=>e._id===t);-1!==o&&e.splice(o,1),localStorage.setItem("savedBooks",JSON.stringify(e))}(t),E(),q()}function q(){let t=document.querySelector(".button.book");t.removeEventListener("click",N),t.removeEventListener("click",j)}function O(t){t.target===h&&(E(),R())}function T(t){E(),R()}function A(t){"Escape"===t.key&&(E(),R())}function R(){h.removeEventListener("click",O),document.removeEventListener("keydown",A),_.removeEventListener("click",T)}function B(t){let e;"BUTTON"===t.target.tagName&&b(t.target.dataset.catname),t.target.classList.value.includes("js-ct")&&(e=t.target.parentElement.dataset.id),e&&(H(e),h.classList.add("active"),y.classList.add("active"),document.body.style.overflow="hidden",h.addEventListener("click",O),document.addEventListener("keydown",A),_.addEventListener("click",T))}!function(){let t=JSON.parse(localStorage.getItem("savedBooks"));t||localStorage.setItem("savedBooks",JSON.stringify([]))}(),window.addEventListener("load",function(){c.addEventListener("click",B)}),s("kvC6y"),s("8VrgS")}();
//# sourceMappingURL=index.d1aad368.js.map
