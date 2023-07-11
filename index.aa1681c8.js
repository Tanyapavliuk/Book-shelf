let t;function e(t,e,o,i){Object.defineProperty(t,e,{get:o,set:i,enumerable:!0,configurable:!0})}function o(t){return t&&t.__esModule?t.default:t}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},s={},l=i.parcelRequired7c6;null==l&&((l=function(t){if(t in a)return a[t].exports;if(t in s){var e=s[t];delete s[t];var o={id:t,exports:{}};return a[t]=o,e.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){s[t]=e},i.parcelRequired7c6=l),l.register("kyEFX",function(t,o){"use strict";e(t.exports,"register",function(){return i},function(t){return i=t}),e(t.exports,"resolve",function(){return a},function(t){return a=t});var i,a,s={};i=function(t){for(var e=Object.keys(t),o=0;o<e.length;o++)s[e[o]]=t[e[o]]},a=function(t){var e=s[t];if(null==e)throw Error("Could not resolve bundle with id "+t);return e}}),l("kyEFX").register(JSON.parse('{"5ZPII":"index.aa1681c8.js","1yVwl":"amazon.40ba9165.png","fIBw5":"book.89e7d427.png","fSsri":"book-block.950d06ef.png","fISP1":"shopinglist.0e998db6.js","hh9YY":"shopinglist.1e5e33ad.js"}')),l("bUb57"),l("ghT7p");var n=l("2shzp");const r=document.querySelector(".container-books");async function c(){try{var t;let e;let o=await (0,n.default).get("https://books-backend.p.goit.global/books/top-books ");r.insertAdjacentHTML("beforeend",(t=o.data,e="",t.forEach(t=>{e+=`<div class="category-block">
        <h2 class="cat-title">${t.list_name}</h2>
        <ul class="book-list">${t.books.map(({book_image:t,author:e,title:o,_id:i})=>`<li class="bs-list-item" hidden>
        <div class="book-card" data-id="${i}">
        <div class="image-overlay" data-id="${i}">
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
    </div>`}),e='<h1 class="main-title">Best Sellers <span>Books</span></h1>'+e))}catch(t){console.log(t)}}r.firstChild||c();const d=document.querySelector(".category-list");var n=l("2shzp"),u=n.default;const g=document.querySelector(".container-books");async function b(){try{let t;let e=await u.get("https://books-backend.p.goit.global/books/category-list");t=e.data.map(({list_name:t})=>`<li class = "category-list-item"> ${t} </li>`).join(""),t='<li class = "category-list-item"> All Categories </li>'+t,d.innerHTML=t}catch(t){console.log("error",t)}}async function m(t){await u.get(`https://books-backend.p.goit.global/books/category?category=${t}`).then(({data:t})=>(function(t){let e=`
    <h2 class ="main-title">${t[0].list_name}</h2>
    <ul class="book-list">${t.map(({author:t,book_image:e,description:o,title:i,_id:a})=>`<li class="bs-list-item">
          <div class="book-card " data-id="${a}">
    <div class="image-overlay" data-id="${a}">
    <img class="book-img js-ct" src="${e}" alt="${i} loading="lazy" >
    <div class="image-description">
      <p class="image-overlay-description"> quick view  </p>
     </div>
      </div>
    <h3 class="book-title js-ct">${i}</h3>
    <p class="book-author js-ct"> ${t}</p>
    </div>
    </li>`).join("")}
    </ul>
     `;r.innerHTML=e;let o=document.querySelector(".main-title"),i=o.textContent,a=i.split(" "),s=a[a.length-1];o.innerHTML=i.replace(s,`<span class="brendcolor">${s}</span>`)})(t))}g.addEventListener("click",function(t){let e=t.target.dataset.catname.trim(),o=Array.from(d.querySelectorAll("li")),i=o.find(t=>t.innerText===e),a=o.find(t=>"all categories"===t.innerText.toLowerCase());i&&(a.classList.remove("categories__title-active"),i.classList.add("categories__title-active"))}),d.addEventListener("click",function(t){let e=t.target,o=document.querySelector(".categories__title-active");if("LI"===e.tagName){if(o&&o.classList.remove("categories__title-active"),t.target.classList.add("categories__title-active"),"All Categories"===e.textContent.trim())return r.innerHTML="",c();m(e.textContent.trim())}}),b(),l("dTazW");var p={};p=new URL(l("kyEFX").resolve("1yVwl"),import.meta.url).toString();var f={};f=new URL(l("kyEFX").resolve("fIBw5"),import.meta.url).toString();var k={};k=new URL(l("kyEFX").resolve("fSsri"),import.meta.url).toString();const v=document.querySelector(".backdrop"),h=document.querySelector(".modal"),y=document.querySelector(".modal-shopping-close"),_=document.querySelector(".render-modal");function S(){v.classList.remove("active"),h.classList.remove("active"),document.body.style.overflow="auto"}async function $(t){try{let e=`https://books-backend.p.goit.global/books/${t}`,o=await fetch(e);if(!o.ok)throw Error(`Error: ${o.status} ${o.statusText}`);let i=await o.json();return[i]}catch(t){console.error(t)}}async function L(e){try{_.innerHTML="";let i=await $(e);t=i[0]._id,function(t){let e=t.map(t=>`
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
                <img src="${o(p)}" alt="Amazon" />
              </a>
            </li>
            <li>
              <a href="${t.buy_links[1].url}">
                <img src="${o(f)}" alt="Apple Books" />
              </a>
            </li>
            <li>
              <a href="${t.buy_links[4].url}">
                <img src="${o(k)}" alt="Bookshop" />
              </a>
            </li>
          </ul>
        </div>
      </div>
        `).join("");_.insertAdjacentHTML("beforeend",e)}(i),function(t){let e=JSON.parse(localStorage.getItem("savedBooks"));if(e.some(e=>e._id===t)){let e=`
      <button type="submit" class="button book">
        Remove from the shopping list
      </button>
      <p class="congratulation">
        Сongratulations! You have added the book to the shopping list. To delete,
        press the button “Remove from the shopping list”.
      </p>
    `;_.insertAdjacentHTML("beforeend",e);let o=document.querySelector(".button.book");o.addEventListener("click",e=>{(function(t){let e=JSON.parse(localStorage.getItem("savedBooks")),o=e.findIndex(e=>e._id===t);-1!==o&&e.splice(o,1),localStorage.setItem("savedBooks",JSON.stringify(e))})(t),S()})}else{let e=`
      <button type="submit" class="button book">
        Add to shopping list
      </button>
    `;_.insertAdjacentHTML("beforeend",e);let o=document.querySelector(".button.book");o.addEventListener("click",e=>{w(t),S()})}}(t)}catch(t){console.error(t)}}async function w(t){try{let e=await $(t),{_id:o,book_image:i,title:a,list_name:s,description:l,author:n,buy_links:r}=e[0],c=JSON.parse(localStorage.getItem("savedBooks"))||[];c.push({_id:o,book_image:i,title:a,list_name:s,description:l,author:n,buy_links:r}),localStorage.setItem("savedBooks",JSON.stringify(c))}catch(t){console.error(t)}}!function(){let t=JSON.parse(localStorage.getItem("savedBooks"));t||localStorage.setItem("savedBooks",JSON.stringify([]))}(),window.addEventListener("load",function(){r.addEventListener("click",t=>{let e;console.dir(t.target),"BUTTON"===t.target.tagName&&m(t.target.dataset.catname),t.target.classList.value.includes("js-ct")&&(e=t.target.parentElement.dataset.id),e&&(L(e),v.classList.add("active"),h.classList.add("active"),document.body.style.overflow="hidden",v.addEventListener("click",t=>{t.target===v&&S()}),document.addEventListener("keydown",t=>{"Escape"===t.key&&S()}),y.addEventListener("click",t=>{S()}))})}),l("1MnFF"),l("gjiCh"),l("h8wPa");
//# sourceMappingURL=index.aa1681c8.js.map
