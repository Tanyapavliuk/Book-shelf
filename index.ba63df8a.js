let t;function e(t,e,o,i){Object.defineProperty(t,e,{get:o,set:i,enumerable:!0,configurable:!0})}function o(t){return t&&t.__esModule?t.default:t}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},s={},n=i.parcelRequired7c6;null==n&&((n=function(t){if(t in a)return a[t].exports;if(t in s){var e=s[t];delete s[t];var o={id:t,exports:{}};return a[t]=o,e.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){s[t]=e},i.parcelRequired7c6=n),n.register("kyEFX",function(t,o){"use strict";e(t.exports,"register",function(){return i},function(t){return i=t}),e(t.exports,"resolve",function(){return a},function(t){return a=t});var i,a,s={};i=function(t){for(var e=Object.keys(t),o=0;o<e.length;o++)s[e[o]]=t[e[o]]},a=function(t){var e=s[t];if(null==e)throw Error("Could not resolve bundle with id "+t);return e}}),n("kyEFX").register(JSON.parse('{"5ZPII":"index.ba63df8a.js","1yVwl":"amazon.40ba9165.png","fIBw5":"book.89e7d427.png","fSsri":"book-block.950d06ef.png","eOeju":"shopinglist.66cb482e.js","k0tj8":"shopinglist.965323f6.js"}')),n("bUb57"),n("ghT7p");var l=n("2shzp"),r=n("iQIUW");const c=document.querySelector(".container-books");async function d(){try{var t;let e;let o=await (0,l.default).get("https://books-backend.p.goit.global/books/top-books ");c.insertAdjacentHTML("beforeend",(t=o.data,e="",t.forEach(t=>{e+=`<div class="category-block">
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
    </div>`}),e='<h1 class="main-title">Best Sellers <span>Books</span></h1>'+e))}catch(t){(0,r.Notify).warning("Sorry, failed to load information")}}c.firstChild||d();var r=n("iQIUW");const u=document.querySelector(".category-list");var l=n("2shzp"),g=l.default;const m=document.querySelector(".container-books");async function f(){try{let t;let e=await g.get("https://books-backend.p.goit.global/books/category-list");t=e.data.map(({list_name:t})=>`<li class = "category-list-item"> ${t} </li>`).join(""),t='<li class = "category-list-item"> All Categories </li>'+t,u.innerHTML=t}catch(t){(0,r.Notify).warning("Sorry, failed to load information")}}async function b(t){await g.get(`https://books-backend.p.goit.global/books/category?category=${t}`).then(({data:t})=>(function(t){let e=`
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
     `;c.innerHTML=e;let o=document.querySelector(".main-title"),i=o.textContent,a=i.split(" "),s=a[a.length-1];o.innerHTML=i.replace(s,`<span class="brendcolor">${s}</span>`)})(t))}m.addEventListener("click",function(t){let e=t.target.dataset.catname,o=Array.from(u.querySelectorAll("li")),i=o.find(t=>t.innerText===e),a=o.find(t=>"all categories"===t.innerText.toLowerCase());i&&(a.classList.remove("categories__title-active"),i.classList.add("categories__title-active"))}),u.addEventListener("click",function(t){let e=t.target,o=document.querySelector(".categories__title-active");if("LI"===e.tagName){if(o&&o.classList.remove("categories__title-active"),t.target.classList.add("categories__title-active"),"All Categories"===e.textContent.trim())return c.innerHTML="",d();b(e.textContent.trim())}}),f(),n("dTazW");var p={};p=new URL(n("kyEFX").resolve("1yVwl"),import.meta.url).toString();var v={};v=new URL(n("kyEFX").resolve("fIBw5"),import.meta.url).toString();var k={};k=new URL(n("kyEFX").resolve("fSsri"),import.meta.url).toString();var r=n("iQIUW"),y=n("ctMCH");const h=document.querySelector(".backdrop"),S=document.querySelector(".modal"),_=document.querySelector(".modal-shopping-close"),L=document.querySelector(".render-modal"),w=document.querySelector(".scroll-btn");function $(){h.classList.remove("active"),S.classList.remove("active"),w.classList.remove("visually-hidden"),document.body.style.overflow="auto"}async function E(t){try{let e=`https://books-backend.p.goit.global/books/${t}`,o=await fetch(e);if(!o.ok)throw Error(`Error: ${o.status} ${o.statusText}`);let i=await o.json();return[i]}catch(t){(0,r.Notify).warning("Sorry, failed to load information")}}const j=()=>{let t=document.querySelector(".darkFilterModal");"dark"===localStorage.getItem("theme")?t.classList.add("filter-img"):t.classList.remove("filter-img")};async function H(e){try{w.classList.add("visually-hidden"),L.innerHTML="";let i=await E(e);t=i[0]._id,function(t){let e=t.map(t=>`
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
        `).join("");L.insertAdjacentHTML("beforeend",e)}(i),j(),function(t){let e=JSON.parse(localStorage.getItem("savedBooks"));if(e.some(e=>e._id===t)){let t=`
      <button type="submit" class="button book" aria-label="Remove from shopping">
        Remove from the shopping list
      </button>
      <p class="congratulation">
        Сongratulations! You have added the book to the shopping list. To delete,
        press the button “Remove from the shopping list”.
      </p>
    `;L.insertAdjacentHTML("beforeend",t);let e=document.querySelector(".button.book");JSON.parse(localStorage.getItem("userLogin"))||(e.disabled=!0,e.textContent="Login please"),e.addEventListener("click",q)}else{let t=`
      <button type="submit" class="button book" aria-label="Add to shopping">
        Add to shopping list
      </button>
    `;L.insertAdjacentHTML("beforeend",t);let e=document.querySelector(".button.book");JSON.parse(localStorage.getItem("userLogin"))||(e.disabled=!0,e.textContent="Login please"),e.addEventListener("click",N)}}(t)}catch(t){(0,r.Notify).warning("Sorry, failed to load information")}}async function T(t){try{let e=await E(t),{_id:o,book_image:i,title:a,list_name:s,description:n,author:l,buy_links:r}=e[0],c=JSON.parse(localStorage.getItem("savedBooks"))||[];c.push({_id:o,book_image:i,title:a,list_name:s,description:n,author:l,buy_links:r}),localStorage.setItem("savedBooks",JSON.stringify(c))}catch(t){(0,r.Notify).warning("Sorry, failed to load information")}finally{(0,y.setCounterCard)()}}function N(e){T(t),$(),I()}function q(e){!function(t){let e=JSON.parse(localStorage.getItem("savedBooks")),o=e.findIndex(e=>e._id===t);-1!==o&&e.splice(o,1),localStorage.setItem("savedBooks",JSON.stringify(e)),(0,y.setCounterCard)()}(t),$(),I()}function I(){let t=document.querySelector(".button.book");t.removeEventListener("click",q),t.removeEventListener("click",N)}function x(t){t.target===h&&($(),O())}function A(t){$(),O()}function C(t){"Escape"===t.key&&($(),O())}function O(){h.removeEventListener("click",x),document.removeEventListener("keydown",C),_.removeEventListener("click",A)}function M(t){let e;"BUTTON"===t.target.tagName&&b(t.target.dataset.catname),t.target.classList.value.includes("js-ct")&&(e=t.target.parentElement.dataset.id),e&&(H(e),h.classList.add("active"),S.classList.add("active"),document.body.style.overflow="hidden",h.addEventListener("click",x),document.addEventListener("keydown",C),_.addEventListener("click",A))}!function(){let t=JSON.parse(localStorage.getItem("savedBooks"));t||localStorage.setItem("savedBooks",JSON.stringify([]))}(),window.addEventListener("load",function(){c.addEventListener("click",M)}),n("gjiCh"),n("h8wPa"),n("ctMCH");
//# sourceMappingURL=index.ba63df8a.js.map