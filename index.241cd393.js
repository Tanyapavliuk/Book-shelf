let e,t,o;function i(e,t,o,i){Object.defineProperty(e,t,{get:o,set:i,enumerable:!0,configurable:!0})}function a(e){return e&&e.__esModule?e.default:e}var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},l={},r=s.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in l){var t=l[e];delete l[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){l[e]=t},s.parcelRequired7c6=r),r.register("kyEFX",function(e,t){"use strict";i(e.exports,"register",function(){return o},function(e){return o=e}),i(e.exports,"resolve",function(){return a},function(e){return a=e});var o,a,s={};o=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)s[t[o]]=e[t[o]]},a=function(e){var t=s[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),r("kyEFX").register(JSON.parse('{"5ZPII":"index.241cd393.js","efaol":"choosed.f713fddf.png","1yVwl":"amazon.40ba9165.png","fIBw5":"book.89e7d427.png","fSsri":"book-block.950d06ef.png","jueIu":"shopinglist.41491a22.js","a98jH":"shopinglist.5e4a169d.js"}')),r("bUb57"),r("ghT7p");var c=r("2shzp"),d=r("iQIUW"),u={};u=new URL(r("kyEFX").resolve("efaol"),import.meta.url).toString();const g=document.querySelector(".container-books");async function m(){try{var e;let t;let o=await (0,c.default).get("https://books-backend.p.goit.global/books/top-books ");g.insertAdjacentHTML("beforeend",(e=o.data,t="",e.forEach(e=>{let o=e.list_name,i=e.books.map(e=>(p().includes(e._id)?e.choosed=1:e.choosed=0,e));t+=`<div class="category-block">
        <h2 class="cat-title">${e.list_name}</h2>
        <ul class="book-list">${i.map(({book_image:e,author:t,title:o,_id:i,choosed:s})=>`<li class="bs-list-item" hidden>
        <div class="book-card" data-id="${i}">
        <img class="choosed-icon js-ct ${y(s)}" src="${a(u)}" alt="icon" width="25" >
        <div class="image-overlay">
            <img class="book-img js-ct" src="${e}" alt="${o}" loading="lazy" />
            <div class="image-description">
      <p class="image-overlay-description js-ct">quick view</p>
     </div>
      </div>
            <h3 class="book-title js-ct">${o}</h3>
            <h4 class="book-author js-ct">${t}</h4>
        </div>
        </li>`).join("")}</ul>
        <button type="button" class="btn-more" data-catname="${o}">SEE MORE</button>
    </div>`}),t='<h1 class="main-title">Best Sellers <span>Books</span></h1>'+t))}catch(e){(0,d.Notify).warning("Sorry, failed to load information")}}g.firstChild||m();var d=r("iQIUW");const f=document.querySelector(".category-list");var c=r("2shzp"),b=c.default;const v=document.querySelector(".container-books");function p(){let e=JSON.parse(localStorage.getItem("savedBooks"));return e.map(e=>e._id)}async function k(){try{let e;let t=await b.get("https://books-backend.p.goit.global/books/category-list");e=t.data.map(({list_name:e})=>`<li class = "category-list-item"> ${e} </li>`).join(""),e='<li class = "category-list-item"> All Categories </li>'+e,f.innerHTML=e}catch(e){(0,d.Notify).warning("Sorry, failed to load information")}}async function h(e){await b.get(`https://books-backend.p.goit.global/books/category?category=${e}`).then(({data:e})=>(function(e){let t=e.map(e=>(p().includes(e._id)?e.choosed=1:e.choosed=0,e)),o=`
    <h2 class ="main-title">${e[0].list_name}</h2>
    <ul class="book-list">${t.map(({author:e,book_image:t,title:o,_id:i,choosed:s})=>`<li class="bs-list-item">
          <div class="book-card " data-id="${i}">
          <img class="choosed-icon js-ct ${y(s)}" src="${a(u)}" alt="icon" width="25" >
    <div class="image-overlay">
    <img class="book-img js-ct" src="${t}" alt="${o} loading="lazy" >
    <div class="image-description">
      <p class="image-overlay-description js-ct"> quick view  </p>
     </div>
      </div>
    <h3 class="book-title js-ct">${o}</h3>
    <p class="book-author js-ct"> ${e}</p>
    </div>
    </li>`).join("")}
    </ul>
     `;g.innerHTML=o;let i=document.querySelector(".main-title"),s=i.textContent,n=s.split(" "),l=n[n.length-1];i.innerHTML=s.replace(l,`<span class="brendcolor">${l}</span>`)})(e))}function y(e){return e?"":"visually-hidden"}v.addEventListener("click",function(e){let t=e.target.dataset.catname,o=Array.from(f.querySelectorAll("li")),i=o.find(e=>e.innerText===t),a=o.find(e=>"all categories"===e.innerText.toLowerCase());i&&(a.classList.remove("categories__title-active"),i.classList.add("categories__title-active"))}),f.addEventListener("click",function(e){let t=e.target,o=document.querySelector(".categories__title-active");if("LI"===t.tagName){if(o&&o.classList.remove("categories__title-active"),e.target.classList.add("categories__title-active"),"All Categories"===t.textContent.trim())return g.innerHTML="",m();h(t.textContent.trim())}}),k(),r("dTazW");var S={};S=new URL(r("kyEFX").resolve("1yVwl"),import.meta.url).toString();var _={};_=new URL(r("kyEFX").resolve("fIBw5"),import.meta.url).toString();var L={};L=new URL(r("kyEFX").resolve("fSsri"),import.meta.url).toString();var d=r("iQIUW");const w=document.querySelector(".backdrop"),E=document.querySelector(".modal"),$=document.querySelector(".modal-shopping-close"),j=document.querySelector(".render-modal"),H=document.querySelector(".scroll-btn");function N(){p().includes(o)?t.children[0].classList.remove("visually-hidden"):t.children[0].classList.add("visually-hidden")}function T(){w.classList.remove("active"),E.classList.remove("active"),H.classList.remove("visually-hidden"),document.body.style.overflow="auto",N()}async function I(e){try{let t=`https://books-backend.p.goit.global/books/${e}`,o=await fetch(t);if(!o.ok)throw Error(`Error: ${o.status} ${o.statusText}`);let i=await o.json();return[i]}catch(e){(0,d.Notify).warning("Sorry, failed to load information")}}const q=()=>{let e=document.querySelector(".darkFilterModal");"dark"===localStorage.getItem("theme")?e.classList.add("filter-img"):e.classList.remove("filter-img")};async function A(t){try{H.classList.add("visually-hidden"),j.innerHTML="";let o=await I(t);e=o[0]._id,function(e){let t=e.map(e=>`
        <div class="card-modal" id="${e._id}">
        <img
          class="modal-img"
          alt="${e.title}"
          src="${e.book_image}"
        />
  
        <div class="thumb-modal">
          <h2 class="book-title-in-modal">${e.title}</h2>
          <p class="subtitle-book">${e.author}</p>
          <p class="text book">
          ${e.description?e.description:"Sorry, but this book does not have an accessible description. Try reading it on the website of one of the shops"}
          </p>
          <ul class="shop-list">
            <li>
              <a href="${e.buy_links[0].url}" target="_blank">
                <img src="${a(S)}" alt="Amazon" class="darkFilterModal"/>
              </a>
            </li>
            <li>
              <a href="${e.buy_links[1].url}" target="_blank">
                <img src="${a(_)}" alt="Apple Books" />
              </a>
            </li>
            <li>
              <a href="${e.buy_links[4].url}" target="_blank">
                <img src="${a(L)}" alt="Bookshop" />
              </a>
            </li>
          </ul>
        </div>
      </div>
        `).join("");j.insertAdjacentHTML("beforeend",t)}(o),q(),function(e){let t=JSON.parse(localStorage.getItem("savedBooks"));if(t.some(t=>t._id===e)){let e=`
      <button type="submit" class="button book" aria-label="Remove from shopping">
        Remove from the shopping list
      </button>
      <p class="congratulation">
        Сongratulations! You have added the book to the shopping list. To delete,
        press the button “Remove from the shopping list”.
      </p>
    `;j.insertAdjacentHTML("beforeend",e);let t=document.querySelector(".button.book");JSON.parse(localStorage.getItem("userLogin"))||(t.disabled=!0,t.textContent="Login please"),t.addEventListener("click",R)}else{let e=`
      <button type="submit" class="button book" aria-label="Add to shopping">
        Add to shopping list
      </button>
    `;j.insertAdjacentHTML("beforeend",e);let t=document.querySelector(".button.book");JSON.parse(localStorage.getItem("userLogin"))||(t.disabled=!0,t.textContent="Login please"),t.addEventListener("click",x)}}(e)}catch(e){(0,d.Notify).warning("Sorry, failed to load information")}}async function O(e){try{let t=await I(e),{_id:o,book_image:i,title:a,list_name:s,description:n,author:l,buy_links:r}=t[0],c=JSON.parse(localStorage.getItem("savedBooks"))||[];c.push({_id:o,book_image:i,title:a,list_name:s,description:n,author:l,buy_links:r}),localStorage.setItem("savedBooks",JSON.stringify(c)),N()}catch(e){(0,d.Notify).warning("Sorry, failed to load information")}}function x(t){O(e),T(),B()}function R(t){!function(e){let t=JSON.parse(localStorage.getItem("savedBooks")),o=t.findIndex(t=>t._id===e);-1!==o&&t.splice(o,1),localStorage.setItem("savedBooks",JSON.stringify(t))}(e),T(),B()}function B(){let e=document.querySelector(".button.book");e.removeEventListener("click",R),e.removeEventListener("click",x)}function F(e){e.target===w&&(T(),U())}function M(e){T(),U()}function C(e){"Escape"===e.key&&(T(),U())}function U(){w.removeEventListener("click",F),document.removeEventListener("keydown",C),$.removeEventListener("click",M)}function J(e){"BUTTON"===e.target.tagName&&h(e.target.dataset.catname),e.target.classList.value.includes("js-ct")&&(o=(t=e.target.closest(".book-card")).dataset.id),o&&(A(o),w.classList.add("active"),E.classList.add("active"),document.body.style.overflow="hidden",w.addEventListener("click",F),document.addEventListener("keydown",C),$.addEventListener("click",M))}!function(){let e=JSON.parse(localStorage.getItem("savedBooks"));e||localStorage.setItem("savedBooks",JSON.stringify([]))}(),window.addEventListener("load",function(){g.addEventListener("click",e=>{"BUTTON"===e.target.tagName&&h(e.target.dataset.catname),e.target.classList.value.includes("js-ct")&&(o=(t=e.target.closest(".book-card")).dataset.id),o&&(A(o),w.classList.add("active"),E.classList.add("active"),document.body.style.overflow="hidden",w.addEventListener("click",e=>{e.target===w&&T()}),document.addEventListener("keydown",e=>{"Escape"===e.key&&T()}),$.addEventListener("click",e=>{T()}))}),g.addEventListener("click",J)}),r("gjiCh"),r("h8wPa");
//# sourceMappingURL=index.241cd393.js.map
