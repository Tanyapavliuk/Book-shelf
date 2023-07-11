let t;function e(t,e,o,a){Object.defineProperty(t,e,{get:o,set:a,enumerable:!0,configurable:!0})}function o(t){return t&&t.__esModule?t.default:t}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},s={},l=a.parcelRequired7c6;null==l&&((l=function(t){if(t in i)return i[t].exports;if(t in s){var e=s[t];delete s[t];var o={id:t,exports:{}};return i[t]=o,e.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){s[t]=e},a.parcelRequired7c6=l),l.register("kyEFX",function(t,o){"use strict";e(t.exports,"register",function(){return a},function(t){return a=t}),e(t.exports,"resolve",function(){return i},function(t){return i=t});var a,i,s={};a=function(t){for(var e=Object.keys(t),o=0;o<e.length;o++)s[e[o]]=t[e[o]]},i=function(t){var e=s[t];if(null==e)throw Error("Could not resolve bundle with id "+t);return e}}),l("kyEFX").register(JSON.parse('{"5ZPII":"index.4e00b7af.js","1yVwl":"amazon.40ba9165.png","fIBw5":"book.89e7d427.png","fSsri":"book-block.950d06ef.png","fISP1":"shopinglist.44450895.js","hh9YY":"shopinglist.41d42f4d.js"}')),l("bUb57"),l("ghT7p");var n=l("2shzp");const r=document.querySelector(".container-books");async function c(){try{var t;let e;let o=await (0,n.default).get("https://books-backend.p.goit.global/books/top-books ");r.insertAdjacentHTML("beforeend",(t=o.data,e="",t.forEach(t=>{e+=`<div class="category-block">
        <h2 class="cat-title">${t.list_name}</h2>
        <ul class="book-list">${t.books.map(({book_image:t,author:e,title:o,_id:a})=>`<li class="bs-list-item" hidden>
        <div class="book-card" data-id="${a}">
        <div class="image-overlay" data-id="${a}">
            <img class="book-img js-ct" src="${t}" alt="${o}" loading="lazy" />
            <div class="image-description js-ct">
      <p class="image-overlay-description"> quick view  </p>
     </div>
      </div>
            <h3 class="book-title js-ct">${o}</h3>
            <h4 class="book-author js-ct">${e}</h4>
        </div>
        </li>`).join("")}</ul>
        <button type="button" class="btn-more" data-catname="${t.list_name}">SEE MORE</button>
    </div>`}),e='<h1 class="main-title">Best Sellers <span>Books</span></h1>'+e))}catch(t){console.log(t)}}r.firstChild||c();const d=document.querySelector(".category-list");var n=l("2shzp"),u=n.default;const g=document.querySelector(".container-books");async function b(){try{let t;let e=await u.get("https://books-backend.p.goit.global/books/category-list");t=e.data.map(({list_name:t})=>`<li class = "category-list-item"> ${t} </li>`).join(""),t='<li class = "category-list-item"> All Categories </li>'+t,d.innerHTML=t}catch(t){console.log("error",t)}}async function p(t){await u.get(`https://books-backend.p.goit.global/books/category?category=${t}`).then(({data:t})=>(function(t){let e=`
    <h2 class ="main-title">${t[0].list_name}</h2>
    <ul class="book-list">${t.map(({author:t,book_image:e,description:o,title:a,_id:i})=>`<li class="bs-list-item">
          <div class="book-card " data-id="${i}">
    <div class="image-overlay" data-id="${i}">
    <img class="book-img js-ct" src="${e}" alt="${a} loading="lazy" >
    <div class="image-description">
      <p class="image-overlay-description"> quick view  </p>
     </div>
      </div>
    <h3 class="book-title js-ct">${a}</h3>
    <p class="book-author js-ct"> ${t}</p>
    </div>
    </li>`).join("")}
    </ul>
     `;r.innerHTML=e;let o=document.querySelector(".main-title"),a=o.textContent,i=a.split(" "),s=i[i.length-1];o.innerHTML=a.replace(s,`<span class="brendcolor">${s}</span>`)})(t))}g.addEventListener("click",function(t){let e=t.target.dataset.catname,o=Array.from(d.querySelectorAll("li")),a=o.find(t=>t.innerText===e),i=o.find(t=>"all categories"===t.innerText.toLowerCase());a&&(i.classList.remove("categories__title-active"),a.classList.add("categories__title-active"))}),d.addEventListener("click",function(t){let e=t.target,o=document.querySelector(".categories__title-active");if("LI"===e.tagName){if(o&&o.classList.remove("categories__title-active"),t.target.classList.add("categories__title-active"),"All Categories"===e.textContent.trim())return r.innerHTML="",c();p(e.textContent.trim())}}),b(),l("dTazW");var m={};m=new URL(l("kyEFX").resolve("1yVwl"),import.meta.url).toString();var f={};f=new URL(l("kyEFX").resolve("fIBw5"),import.meta.url).toString();var v={};v=new URL(l("kyEFX").resolve("fSsri"),import.meta.url).toString();const h=document.querySelector(".backdrop"),k=document.querySelector(".modal"),y=document.querySelector(".modal-shopping-close"),_=document.querySelector(".render-modal");function S(){h.classList.remove("active"),k.classList.remove("active"),document.body.style.overflow="auto"}async function L(t){try{let e=`https://books-backend.p.goit.global/books/${t}`,o=await fetch(e);if(!o.ok)throw Error(`Error: ${o.status} ${o.statusText}`);let a=await o.json();return[a]}catch(t){console.error(t)}}async function $(e){try{_.innerHTML="";let a=await L(e);t=a[0]._id,function(t){let e=t.map(t=>`
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
              <a href="${t.buy_links[0].url}">
                <img src="${o(m)}" alt="Amazon" />
              </a>
            </li>
            <li>
              <a href="${t.buy_links[1].url}">
                <img src="${o(f)}" alt="Apple Books" />
              </a>
            </li>
            <li>
              <a href="${t.buy_links[4].url}">
                <img src="${o(v)}" alt="Bookshop" />
              </a>
            </li>
          </ul>
        </div>
      </div>
        `).join("");_.insertAdjacentHTML("beforeend",e)}(a),function(t){let e=JSON.parse(localStorage.getItem("savedBooks"));if(e.some(e=>e._id===t)){let e=`
      <button type="submit" class="button book" aria-label="Remove from shopping">
        Remove from the shopping list
      </button>
      <p class="congratulation">
        Сongratulations! You have added the book to the shopping list. To delete,
        press the button “Remove from the shopping list”.
      </p>
    `;_.insertAdjacentHTML("beforeend",e);let o=document.querySelector(".button.book");JSON.parse(localStorage.getItem("userLogin"))||(o.disabled=!0,o.textContent="Login please"),o.addEventListener("click",e=>{(function(t){let e=JSON.parse(localStorage.getItem("savedBooks")),o=e.findIndex(e=>e._id===t);-1!==o&&e.splice(o,1),localStorage.setItem("savedBooks",JSON.stringify(e))})(t),S()})}else{let e=`
      <button type="submit" class="button book" aria-label="Add to shopping">
        Add to shopping list
      </button>
    `;_.insertAdjacentHTML("beforeend",e);let o=document.querySelector(".button.book");JSON.parse(localStorage.getItem("userLogin"))||(o.disabled=!0,o.textContent="Login please"),o.addEventListener("click",e=>{w(t),S()})}}(t)}catch(t){console.error(t)}}async function w(t){try{let e=await L(t),{_id:o,book_image:a,title:i,list_name:s,description:l,author:n,buy_links:r}=e[0],c=JSON.parse(localStorage.getItem("savedBooks"))||[];c.push({_id:o,book_image:a,title:i,list_name:s,description:l,author:n,buy_links:r}),localStorage.setItem("savedBooks",JSON.stringify(c))}catch(t){console.error(t)}}!function(){let t=JSON.parse(localStorage.getItem("savedBooks"));t||localStorage.setItem("savedBooks",JSON.stringify([]))}(),window.addEventListener("load",function(){r.addEventListener("click",t=>{let e;"BUTTON"===t.target.tagName&&p(t.target.dataset.catname),t.target.classList.value.includes("js-ct")&&(e=t.target.parentElement.dataset.id),e&&($(e),h.classList.add("active"),k.classList.add("active"),document.body.style.overflow="hidden",h.addEventListener("click",t=>{t.target===h&&S()}),document.addEventListener("keydown",t=>{"Escape"===t.key&&S()}),y.addEventListener("click",t=>{S()}))})}),l("1MnFF"),l("gjiCh"),l("h8wPa");
//# sourceMappingURL=index.4e00b7af.js.map
