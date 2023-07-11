function e(e,t,s,o){Object.defineProperty(e,t,{get:s,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},i={},r=s.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in i){var t=i[e];delete i[e];var s={id:e,exports:{}};return o[e]=s,t.call(s.exports,s,s.exports),s.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},s.parcelRequired7c6=r),r.register("kyEFX",function(t,s){"use strict";e(t.exports,"register",function(){return o},function(e){return o=e}),e(t.exports,"resolve",function(){return i},function(e){return i=e});var o,i,r={};o=function(e){for(var t=Object.keys(e),s=0;s<t.length;s++)r[t[s]]=e[t[s]]},i=function(e){var t=r[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),r("kyEFX").register(JSON.parse('{"cJ7wh":"shopinglist.71471e1a.js","1yVwl":"amazon.40ba9165.png","fIBw5":"book.89e7d427.png","fSsri":"book-block.950d06ef.png","lp5u4":"sprite.ee5e019c.svg","axSJb":"IMG_9606 1.8e56c68d.png","fISP1":"shopinglist.63565c5c.js","hh9YY":"shopinglist.1ff62f27.js"}')),r("bUb57"),r("ghT7p"),r("dTazW"),r("2shzp");var n={};n=new URL(r("kyEFX").resolve("1yVwl"),import.meta.url).toString();var l={};l=new URL(r("kyEFX").resolve("fIBw5"),import.meta.url).toString();var a={};a=new URL(r("kyEFX").resolve("fSsri"),import.meta.url).toString();var c={};function d(e){return e.map(({_id:e,title:s,book_image:o="./images/book_default/book_default.jpg",author:i,description:r,list_name:d,buy_links:u})=>(r||(r="Sorry, but this book does not have an accessible description. Try reading it on the website of one of the shops"),`<li class="shopping-list-card">
            <div class="shopping-list-img-container"><img class="shopping-list-img" src="${o}" alt="${s}" /></div>
            <div class="shopping-list-description-thumb">
              <div >
                <h2 class="title-book shopping-title-book">${s}</h2>
                <h3 class="shopping-list__subtitle ">${d}</h3>
                <p class="description">${r}</p>
              </div>
              <div class="shopping-list-thumb">
                <span class="author">${i.split(",")[0]}</span>
                <ul class="shopping-list-store">
                <li > 
                 <a href="${u.filter(({name:e})=>"Amazon"===e)[0].url}"><img src="${t(n)}" />
</a>
</li>
<li> 
  <a href="${u.filter(({name:e})=>"Apple Books"===e)[0].url}"><img src="${t(l)}" alt="Book" />
</a>
</li>
<li> 
<a href="${u.filter(({name:e})=>"Bookshop"===e)[0].url}"><img src="${t(a)}" alt="logo Book-block" /></a>
</li></ul>
                </div>
              </div>
            </div>
            <button type="button" data-id="${e}" class="shopping-list-btn-del js-trash js-trash-id "><svg class="trash js-trash">
  <use class="js-trash" href="${t(c)}#trash"></use>
</svg> 
</button> 
          </li>
`)).join("")}c=new URL(r("kyEFX").resolve("lp5u4"),import.meta.url).toString();var u={};function p(){f.innerHTML=`<div class="is-empty">
  <p class="text-empty">This page is empty, add some books and proceed to order.</p>
  <img src="${t(u)}" alt=""/></div>
`}u=new URL(r("kyEFX").resolve("axSJb"),import.meta.url).toString();const f=document.querySelector(".js-list-books");document.querySelector(".home");const h=document.querySelector(".shopping-list");let g=null;(function(){let e=document.querySelector(".home");e&&e.classList.remove("home"),this.classList.add("home")}).call(h);try{(g=JSON.parse(localStorage.getItem("savedBooks")))&&g.length?(f.innerHTML=d(g),f.addEventListener("click",function(e){var t;let{target:s}=e;if(!s.classList.contains("js-trash"))return;let o=null!==(t=s.dataset.id)&&void 0!==t?t:s.closest(".js-trash-id").dataset.id,i=g.findIndex(({_id:e})=>e===o);if(-1!==i){if(g.splice(i,1),localStorage.setItem("savedBooks",JSON.stringify(g)),!g.length)return p();f.innerHTML=d(g)}})):p()}catch(e){console.log(e)}r("1MnFF"),r("gjiCh"),r("h8wPa");
//# sourceMappingURL=shopinglist.71471e1a.js.map
