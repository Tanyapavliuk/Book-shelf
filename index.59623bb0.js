let e;function t(e,t,o,a){Object.defineProperty(e,t,{get:o,set:a,enumerable:!0,configurable:!0})}function o(e){return e&&e.__esModule?e.default:e}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},s={},l=a.parcelRequired7c6;null==l&&((l=function(e){if(e in i)return i[e].exports;if(e in s){var t=s[e];delete s[e];var o={id:e,exports:{}};return i[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){s[e]=t},a.parcelRequired7c6=l),l.register("kyEFX",function(e,o){"use strict";t(e.exports,"register",function(){return a},function(e){return a=e}),t(e.exports,"resolve",function(){return i},function(e){return i=e});var a,i,s={};a=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)s[t[o]]=e[t[o]]},i=function(e){var t=s[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),l("kyEFX").register(JSON.parse('{"5ZPII":"index.59623bb0.js","1yVwl":"amazon.40ba9165.png","fIBw5":"book.89e7d427.png","fSsri":"book-block.950d06ef.png","jzqwD":"shopinglist.240f4c0c.js","ghGpw":"shopinglist.cfddd1fa.js"}')),l("bUb57"),l("ghT7p");var n=l("2shzp");const r=document.querySelector(".container-books");async function c(){try{var e;let t;let o=await (0,n.default).get("https://books-backend.p.goit.global/books/top-books ");r.insertAdjacentHTML("beforeend",(e=o.data,t="",e.forEach(e=>{t+=`<div class="category-block">
        <h2 class="cat-title">${e.list_name}</h2>
        <ul class="book-list">${e.books.map(({book_image:e,author:t,title:o,_id:a})=>`<li class="bs-list-item" hidden>
        <div class="book-card" data-id="${a}">
        <div class="image-overlay" data-id="${a}">
            <img class="book-img js-ct" src="${e}" alt="${o}" loading="lazy" />
            <div class="image-description js-ct">
      <p class="image-overlay-description"> quick view  </p>
     </div>
      </div>
            <h3 class="book-title js-ct">${o}</h3>
            <h4 class="book-author js-ct">${t}</h4>
        </div>
        </li>`).join("")}</ul>
        <button type="button" class="btn-more" data-catname="${e.list_name}">SEE MORE</button>
    </div>`}),t='<h1 class="main-title">Best Sellers <span>Books</span></h1>'+t))}catch(e){console.log(e)}}r.firstChild||c();const d=document.querySelector(".category-list");var n=l("2shzp"),u=n.default;const g=document.querySelector(".container-books");async function b(){try{let e;let t=await u.get("https://books-backend.p.goit.global/books/category-list");e=t.data.map(({list_name:e})=>`<li class = "category-list-item"> ${e} </li>`).join(""),e='<li class = "category-list-item"> All Categories </li>'+e,d.innerHTML=e}catch(e){console.log("error",e)}}async function p(e){await u.get(`https://books-backend.p.goit.global/books/category?category=${e}`).then(({data:e})=>(function(e){let t=`
    <h2 class ="main-title">${e[0].list_name}</h2>
    <ul class="book-list">${e.map(({author:e,book_image:t,description:o,title:a,_id:i})=>`<li class="bs-list-item">
          <div class="book-card " data-id="${i}">
    <div class="image-overlay" data-id="${i}">
    <img class="book-img js-ct" src="${t}" alt="${a} loading="lazy" >
    <div class="image-description">
      <p class="image-overlay-description"> quick view  </p>
     </div>
      </div>
    <h3 class="book-title js-ct">${a}</h3>
    <p class="book-author js-ct"> ${e}</p>
    </div>
    </li>`).join("")}
    </ul>
     `;r.innerHTML=t;let o=document.querySelector(".main-title"),a=o.textContent,i=a.split(" "),s=i[i.length-1];o.innerHTML=a.replace(s,`<span class="brendcolor">${s}</span>`)})(e))}g.addEventListener("click",function(e){let t=e.target.dataset.catname,o=Array.from(d.querySelectorAll("li")),a=o.find(e=>e.innerText===t),i=o.find(e=>"all categories"===e.innerText.toLowerCase());a&&(i.classList.remove("categories__title-active"),a.classList.add("categories__title-active"))}),d.addEventListener("click",function(e){let t=e.target,o=document.querySelector(".categories__title-active");if("LI"===t.tagName){if(o&&o.classList.remove("categories__title-active"),e.target.classList.add("categories__title-active"),"All Categories"===t.textContent.trim())return r.innerHTML="",c();p(t.textContent.trim())}}),b(),l("dTazW");var m={};m=new URL(l("kyEFX").resolve("1yVwl"),import.meta.url).toString();var f={};f=new URL(l("kyEFX").resolve("fIBw5"),import.meta.url).toString();var v={};v=new URL(l("kyEFX").resolve("fSsri"),import.meta.url).toString();const k=document.querySelector(".backdrop"),h=document.querySelector(".modal"),y=document.querySelector(".modal-shopping-close"),_=document.querySelector(".render-modal");function S(){k.classList.remove("active"),h.classList.remove("active"),document.body.style.overflow="auto"}async function L(e){try{let t=`https://books-backend.p.goit.global/books/${e}`,o=await fetch(t);if(!o.ok)throw Error(`Error: ${o.status} ${o.statusText}`);let a=await o.json();return[a]}catch(e){console.error(e)}}async function $(t){try{_.innerHTML="";let a=await L(t);e=a[0]._id,function(e){let t=e.map(e=>`
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
              <a href="${e.buy_links[0].url}">
                <img src="${o(m)}" alt="Amazon" />
              </a>
            </li>
            <li>
              <a href="${e.buy_links[1].url}">
                <img src="${o(f)}" alt="Apple Books" />
              </a>
            </li>
            <li>
              <a href="${e.buy_links[4].url}">
                <img src="${o(v)}" alt="Bookshop" />
              </a>
            </li>
          </ul>
        </div>
      </div>
        `).join("");_.insertAdjacentHTML("beforeend",t)}(a),function(e){let t=JSON.parse(localStorage.getItem("savedBooks"));if(t.some(t=>t._id===e)){let t=`
      <button type="submit" class="button book" aria-label="Remove from shopping">
        Remove from the shopping list
      </button>
      <p class="congratulation">
        Сongratulations! You have added the book to the shopping list. To delete,
        press the button “Remove from the shopping list”.
      </p>
    `;_.insertAdjacentHTML("beforeend",t);let o=document.querySelector(".button.book");JSON.parse(localStorage.getItem("userLogin"))||(o.disabled=!0,o.textContent="Login please"),o.addEventListener("click",t=>{(function(e){let t=JSON.parse(localStorage.getItem("savedBooks")),o=t.findIndex(t=>t._id===e);-1!==o&&t.splice(o,1),localStorage.setItem("savedBooks",JSON.stringify(t))})(e),S()})}else{let t=`
      <button type="submit" class="button book" aria-label="Add to shopping">
        Add to shopping list
      </button>
    `;_.insertAdjacentHTML("beforeend",t);let o=document.querySelector(".button.book");JSON.parse(localStorage.getItem("userLogin"))||(o.disabled=!0,o.textContent="Login please"),o.addEventListener("click",t=>{w(e),S()})}}(e)}catch(e){console.error(e)}}async function w(e){try{let t=await L(e),{_id:o,book_image:a,title:i,list_name:s,description:l,author:n,buy_links:r}=t[0],c=JSON.parse(localStorage.getItem("savedBooks"))||[];c.push({_id:o,book_image:a,title:i,list_name:s,description:l,author:n,buy_links:r}),localStorage.setItem("savedBooks",JSON.stringify(c))}catch(e){console.error(e)}}!function(){let e=JSON.parse(localStorage.getItem("savedBooks"));e||localStorage.setItem("savedBooks",JSON.stringify([]))}(),window.addEventListener("load",function(){r.addEventListener("click",e=>{let t;"BUTTON"===e.target.tagName&&p(e.target.dataset.catname),e.target.classList.value.includes("js-ct")&&(t=e.target.parentElement.dataset.id),t&&($(t),k.classList.add("active"),h.classList.add("active"),document.body.style.overflow="hidden",k.addEventListener("click",e=>{e.target===k&&S()}),document.addEventListener("keydown",e=>{"Escape"===e.key&&S()}),y.addEventListener("click",e=>{S()}))})}),l("1MnFF"),l("gjiCh"),l("h8wPa");
//# sourceMappingURL=index.59623bb0.js.map
