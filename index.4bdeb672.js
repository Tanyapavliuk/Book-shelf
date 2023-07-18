function t(t,e,a,o){Object.defineProperty(t,e,{get:a,set:o,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},o={},i=e.parcelRequired7c6;null==i&&((i=function(t){if(t in a)return a[t].exports;if(t in o){var e=o[t];delete o[t];var i={id:t,exports:{}};return a[t]=i,e.call(i.exports,i,i.exports),i.exports}var s=Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){o[t]=e},e.parcelRequired7c6=i),i.register("kyEFX",function(e,a){"use strict";t(e.exports,"register",function(){return o},function(t){return o=t}),t(e.exports,"resolve",function(){return i},function(t){return i=t});var o,i,s={};o=function(t){for(var e=Object.keys(t),a=0;a<e.length;a++)s[e[a]]=t[e[a]]},i=function(t){var e=s[t];if(null==e)throw Error("Could not resolve bundle with id "+t);return e}}),i("kyEFX").register(JSON.parse('{"5ZPII":"index.4bdeb672.js","1yVwl":"amazon.40ba9165.png","fIBw5":"book.89e7d427.png","fSsri":"book-block.950d06ef.png","gR0Wf":"shopinglist.bfe48258.js","9UbnX":"shopinglist.64cc4d55.js"}')),i("bUb57"),i("ghT7p");var s=i("2shzp"),r=i("iQIUW");const n=document.querySelector(".container-books");async function l(){try{var t;let e;let a=await (0,s.default).get("https://books-backend.p.goit.global/books/top-books ");n.insertAdjacentHTML("beforeend",(t=a.data,e="",t.forEach(t=>{e+=`<div class="category-block">
        <h2 class="cat-title">${t.list_name}</h2>
        <ul class="book-list">${t.books.map(({book_image:t,author:e,title:a,_id:o})=>`<li class="bs-list-item" hidden>
        <div class="book-card" data-id="${o}">
        <div class="image-overlay" data-id="${o}">
            <img class="book-img js-ct" src="${t}" alt="${a}" loading="lazy" />
            <div class="image-description" data-id="${o}">
      <p class="image-overlay-description js-ct">quick view</p>
     </div>
      </div>
            <h3 class="book-title js-ct">${a}</h3>
            <h4 class="book-author js-ct">${e}</h4>
        </div>
        </li>`).join("")}</ul>
        <button type="button" class="btn-more" data-catname="${t.list_name}">SEE MORE</button>
    </div>`}),e='<h1 class="main-title">Best Sellers <span>Books</span></h1>'+e))}catch(t){(0,r.Notify).warning("Sorry, failed to load information")}}n.firstChild||l();var r=i("iQIUW");const c=document.querySelector(".category-list");var s=i("2shzp"),d=s.default;const u=document.querySelector(".container-books");async function g(){try{let t;let e=await d.get("https://books-backend.p.goit.global/books/category-list");t=e.data.map(({list_name:t})=>`<li class = "category-list-item"> ${t} </li>`).join(""),t='<li class = "category-list-item"> All Categories </li>'+t,c.innerHTML=t}catch(t){(0,r.Notify).warning("Sorry, failed to load information")}}async function m(t){await d.get(`https://books-backend.p.goit.global/books/category?category=${t}`).then(({data:t})=>(function(t){let e=`
    <h2 class ="main-title">${t[0].list_name}</h2>
    <ul class="book-list">${t.map(({author:t,book_image:e,title:a,_id:o})=>`<li class="bs-list-item">
          <div class="book-card " data-id="${o}">
    <div class="image-overlay" data-id="${o}">
    <img class="book-img js-ct" src="${e}" alt="${a} loading="lazy" >
    <div class="image-description" data-id="${o}">
      <p class="image-overlay-description js-ct"> quick view  </p>
     </div>
      </div>
    <h3 class="book-title js-ct">${a}</h3>
    <p class="book-author js-ct"> ${t}</p>
    </div>
    </li>`).join("")}
    </ul>
     `;n.innerHTML=e;let a=document.querySelector(".main-title"),o=a.textContent,i=o.split(" "),s=i[i.length-1];a.innerHTML=o.replace(s,`<span class="brendcolor">${s}</span>`)})(t))}u.addEventListener("click",function(t){let e=t.target.dataset.catname,a=Array.from(c.querySelectorAll("li")),o=a.find(t=>t.innerText===e),i=a.find(t=>"all categories"===t.innerText.toLowerCase());o&&(i.classList.remove("categories__title-active"),o.classList.add("categories__title-active"))}),c.addEventListener("click",function(t){let e=t.target,a=document.querySelector(".categories__title-active");if("LI"===e.tagName){if(a&&a.classList.remove("categories__title-active"),t.target.classList.add("categories__title-active"),"All Categories"===e.textContent.trim())return n.innerHTML="",l();m(e.textContent.trim())}}),g(),i("dTazW"),new URL(i("kyEFX").resolve("1yVwl"),import.meta.url).toString(),new URL(i("kyEFX").resolve("fIBw5"),import.meta.url).toString(),new URL(i("kyEFX").resolve("fSsri"),import.meta.url).toString();var r=i("iQIUW");function f(t){"BUTTON"===t.target.tagName&&m(t.target.dataset.catname),t.target.classList.value.includes("js-ct")&&t.target.parentElement.dataset.id}document.querySelector(".backdrop"),document.querySelector(".modal"),document.querySelector(".modal-shopping-close"),document.querySelector(".render-modal"),document.querySelector(".scroll-btn"),function(){let t=JSON.parse(localStorage.getItem("savedBooks"));t||localStorage.setItem("savedBooks",JSON.stringify([]))}(),window.addEventListener("load",function(){n.addEventListener("click",f)}),i("gjiCh"),i("h8wPa");
//# sourceMappingURL=index.4bdeb672.js.map
