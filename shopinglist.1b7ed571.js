function e(e,t,o,i){Object.defineProperty(e,t,{get:o,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},s={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in s){var t=s[e];delete s[e];var o={id:e,exports:{}};return i[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){s[e]=t},o.parcelRequired7c6=r),r.register("kyEFX",function(t,o){"use strict";e(t.exports,"register",function(){return i},function(e){return i=e}),e(t.exports,"resolve",function(){return s},function(e){return s=e});var i,s,r={};i=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)r[t[o]]=e[t[o]]},s=function(e){var t=r[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),r("kyEFX").register(JSON.parse('{"gsDsZ":"shopinglist.1b7ed571.js","1yVwl":"amazon.40ba9165.png","fIBw5":"book.89e7d427.png","fSsri":"book-block.950d06ef.png","lp5u4":"sprite.ee5e019c.svg"}')),r("2shzp");var n={};n=new URL(r("kyEFX").resolve("1yVwl"),import.meta.url).toString();var l={};l=new URL(r("kyEFX").resolve("fIBw5"),import.meta.url).toString();var a={};a=new URL(r("kyEFX").resolve("fSsri"),import.meta.url).toString();var c={};function d(e){return e.map(({_id:e,title:o,book_image:i="./images/book_default/book_default.jpg",author:s,description:r,list_name:d,buy_links:p})=>(r||(r="Sorry, but this book does not have an accessible description. Try reading it on the website of one of the shops"),`<li class="shopping-list-card">
            <div class="shopping-list-img-container"><img class="shopping-list-img" src="${i}" alt="${o}" /></div>
            <div class="shopping-list-description-thumb">
              <div >
                <h2 class="title-book">${o}</h2>
                <h3 class="shopping-list__subtitle">${d}</h3>
                <p class="description">${r}</p>
              </div>
              <div class="shopping-list-thumb">
                <span class="author">${s.split(",")[0]}</span>
                <ul class="shopping-list-store">
                <li > 
                 <a href="${p.filter(({name:e})=>"Amazon"===e)[0].url}"><img src="${t(n)}" />
</a>
</li>
<li> 
  <a href="${p.filter(({name:e})=>"Apple Books"===e)[0].url}"><img src="${t(l)}" alt="Book" />
</a>
</li>
<li> 
<a href="${p.filter(({name:e})=>"Bookshop"===e)[0].url}"><img src="${t(a)}" alt="logo Book-block" /></a>
</li></ul>
                </div>
              </div>
            </div>
            <button type="button" data-id="${e}" class="shopping-list-btn-del js-trash "><svg class="trash ">
  <use href="${t(c)}#trash"></use>
</svg> 
</button> 
          </li>
`)).join("")}c=new URL(r("kyEFX").resolve("lp5u4"),import.meta.url).toString();const p=document.querySelector(".js-list-books");try{let e=JSON.parse(localStorage.getItem("savedBooks"));e&&e.length?(p.innerHTML=d(e),p.addEventListener("click",function(t){if(console.log(t.target),!t.target.classList.contains("js-trash"))return;console.log(t.target.dataset.id),console.log("targetId",t.target.dataset.id);let o=e.findIndex(({_id:e})=>e===t.target.dataset.id);if(console.log(o),-1!==o){if(e.splice(o,1),localStorage.setItem("savedBooks",JSON.stringify(e)),!e.length)return u();p.innerHTML=d(e)}})):u()}catch(e){console.log(e)}function u(){p.innerHTML=`<p>This page is empty, add some books and proceed to order.</p><img src="./images/shopping_List/IMG_9606 1.png" alt="">
`}
//# sourceMappingURL=shopinglist.1b7ed571.js.map
