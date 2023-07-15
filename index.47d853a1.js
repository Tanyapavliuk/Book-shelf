!function(){function t(t,e,a,i){Object.defineProperty(t,e,{get:a,set:i,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},i={},o=e.parcelRequired7c6;null==o&&((o=function(t){if(t in a)return a[t].exports;if(t in i){var e=i[t];delete i[t];var o={id:t,exports:{}};return a[t]=o,e.call(o.exports,o,o.exports),o.exports}var r=Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){i[t]=e},e.parcelRequired7c6=o),o.register("iE7OH",function(e,a){"use strict";t(e.exports,"register",function(){return i},function(t){return i=t}),t(e.exports,"resolve",function(){return o},function(t){return o=t});var i,o,r={};i=function(t){for(var e=Object.keys(t),a=0;a<e.length;a++)r[e[a]]=t[e[a]]},o=function(t){var e=r[t];if(null==e)throw Error("Could not resolve bundle with id "+t);return e}}),o.register("aNJCr",function(e,a){t(e.exports,"getBundleURL",function(){return i},function(t){return i=t});"use strict";var i,o={};i=function(t){var e=o[t];return e||(e=function(){try{throw Error()}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(t)return(""+t[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),o[t]=e),e}}),o("iE7OH").register(JSON.parse('{"EVgbq":"index.47d853a1.js","aaLHb":"amazon.40ba9165.png","cL3Jl":"book.89e7d427.png","jr1cR":"book-block.950d06ef.png","3Q9Tf":"shopinglist.193055f2.js","cQXZ9":"shopinglist.225a7cdf.js"}')),o("i8Q71"),o("32ZrB");var r=o("dIxxU"),n=o("h6c0i");let s=document.querySelector(".container-books");async function l(){try{var t;let e;let a=await (0,r.default).get("https://books-backend.p.goit.global/books/top-books ");s.insertAdjacentHTML("beforeend",(t=a.data,e="",t.forEach(t=>{e+=`<div class="category-block">
        <h2 class="cat-title">${t.list_name}</h2>
        <ul class="book-list">${t.books.map(({book_image:t,author:e,title:a,_id:i})=>`<li class="bs-list-item" hidden>
        <div class="book-card" data-id="${i}">
        <div class="image-overlay" data-id="${i}">
            <img class="book-img js-ct" src="${t}" alt="${a}" loading="lazy" />
            <div class="image-description" data-id="${i}">
      <p class="image-overlay-description js-ct">quick view</p>
     </div>
      </div>
            <h3 class="book-title js-ct">${a}</h3>
            <h4 class="book-author js-ct">${e}</h4>
        </div>
        </li>`).join("")}</ul>
        <button type="button" class="btn-more" data-catname="${t.list_name}">SEE MORE</button>
    </div>`}),e='<h1 class="main-title">Best Sellers <span>Books</span></h1>'+e))}catch(t){(0,n.Notify).warning("Sorry, failed to load information")}}s.firstChild||l();var n=o("h6c0i");let c=document.querySelector(".category-list");var r=o("dIxxU"),d=r.default;let u=document.querySelector(".container-books");async function g(){try{let t;let e=await d.get("https://books-backend.p.goit.global/books/category-list");t=e.data.map(({list_name:t})=>`<li class = "category-list-item"> ${t} </li>`).join(""),t='<li class = "category-list-item"> All Categories </li>'+t,c.innerHTML=t}catch(t){(0,n.Notify).warning("Sorry, failed to load information")}}async function f(t){await d.get(`https://books-backend.p.goit.global/books/category?category=${t}`).then(({data:t})=>(function(t){let e=`
    <h2 class ="main-title">${t[0].list_name}</h2>
    <ul class="book-list">${t.map(({author:t,book_image:e,title:a,_id:i})=>`<li class="bs-list-item">
          <div class="book-card " data-id="${i}">
    <div class="image-overlay" data-id="${i}">
    <img class="book-img js-ct" src="${e}" alt="${a} loading="lazy" >
    <div class="image-description" data-id="${i}">
      <p class="image-overlay-description js-ct"> quick view  </p>
     </div>
      </div>
    <h3 class="book-title js-ct">${a}</h3>
    <p class="book-author js-ct"> ${t}</p>
    </div>
    </li>`).join("")}
    </ul>
     `;s.innerHTML=e;let a=document.querySelector(".main-title"),i=a.textContent,o=i.split(" "),r=o[o.length-1];a.innerHTML=i.replace(r,`<span class="brendcolor">${r}</span>`)})(t))}u.addEventListener("click",function(t){let e=t.target.dataset.catname,a=Array.from(c.querySelectorAll("li")),i=a.find(t=>t.innerText===e),o=a.find(t=>"all categories"===t.innerText.toLowerCase());i&&(o.classList.remove("categories__title-active"),i.classList.add("categories__title-active"))}),c.addEventListener("click",function(t){let e=t.target,a=document.querySelector(".categories__title-active");if("LI"===e.tagName){if(a&&a.classList.remove("categories__title-active"),t.target.classList.add("categories__title-active"),"All Categories"===e.textContent.trim())return s.innerHTML="",l();f(e.textContent.trim())}}),g(),o("xpKCW"),o("aNJCr").getBundleURL("EVgbq"),o("iE7OH").resolve("aaLHb"),o("aNJCr").getBundleURL("EVgbq"),o("iE7OH").resolve("cL3Jl"),o("aNJCr").getBundleURL("EVgbq"),o("iE7OH").resolve("jr1cR");var n=o("h6c0i");function b(t){"BUTTON"===t.target.tagName&&f(t.target.dataset.catname),t.target.classList.value.includes("js-ct")&&t.target.parentElement.dataset.id}document.querySelector(".backdrop"),document.querySelector(".modal"),document.querySelector(".modal-shopping-close"),document.querySelector(".render-modal"),document.querySelector(".scroll-btn"),function(){let t=JSON.parse(localStorage.getItem("savedBooks"));t||localStorage.setItem("savedBooks",JSON.stringify([]))}(),window.addEventListener("load",function(){s.addEventListener("click",b)}),o("kvC6y"),o("8VrgS")}();
//# sourceMappingURL=index.47d853a1.js.map
