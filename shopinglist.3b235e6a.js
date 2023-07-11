function e(e,t,s,i){Object.defineProperty(e,t,{get:s,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},o={},r=s.parcelRequired7c6;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in o){var t=o[e];delete o[e];var s={id:e,exports:{}};return i[e]=s,t.call(s.exports,s,s.exports),s.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},s.parcelRequired7c6=r),r.register("kyEFX",function(t,s){"use strict";e(t.exports,"register",function(){return i},function(e){return i=e}),e(t.exports,"resolve",function(){return o},function(e){return o=e});var i,o,r={};i=function(e){for(var t=Object.keys(e),s=0;s<t.length;s++)r[t[s]]=e[t[s]]},o=function(e){var t=r[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),r("kyEFX").register(JSON.parse('{"cJ7wh":"shopinglist.3b235e6a.js","1yVwl":"amazon.40ba9165.png","fIBw5":"book.89e7d427.png","fSsri":"book-block.950d06ef.png","axSJb":"IMG_9606 1.8e56c68d.png","lp5u4":"sprite.ee5e019c.svg","fISP1":"shopinglist.63565c5c.js","hh9YY":"shopinglist.0a773df6.js"}')),r("bUb57"),r("ghT7p"),r("dTazW"),r("2shzp");var n={};n=new URL(r("kyEFX").resolve("axSJb"),import.meta.url).toString();var l={};l=new URL(r("kyEFX").resolve("1yVwl"),import.meta.url).toString();var a={};a=new URL(r("kyEFX").resolve("fIBw5"),import.meta.url).toString();var c={};c=new URL(r("kyEFX").resolve("fSsri"),import.meta.url).toString();var p={};function d(e){return e.map(({_id:e,title:s,book_image:i="./images/book_default/book_default.jpg",author:o,description:r,list_name:n,buy_links:d})=>(r||(r="Sorry, but this book does not have an accessible description. Try reading it on the website of one of the shops"),`<li class="shopping-list-card">
            <div class="shopping-list-img-container"><img class="shopping-list-img" src="${i}" alt="${s}" /></div>
            <div class="shopping-list-description-thumb">
              <div >
                <h2 class="title-book shopping-title-book">${s}</h2>
                <h3 class="shopping-list__subtitle ">${n}</h3>
                <p class="description">${r}</p>
              </div>
              <div class="shopping-list-thumb">
                <span class="author">${o.split(",")[0]}</span>
                <ul class="shopping-list-store">
                <li > 
                 <a href="${d.filter(({name:e})=>"Amazon"===e)[0].url}"><img src="${t(l)}" />
</a>
</li>
<li> 
  <a href="${d.filter(({name:e})=>"Apple Books"===e)[0].url}"><img src="${t(a)}" alt="Book" />
</a>
</li>
<li> 
<a href="${d.filter(({name:e})=>"Bookshop"===e)[0].url}"><img src="${t(c)}" alt="logo Book-block" /></a>
</li></ul>
                </div>
              </div>
            </div>
            <button type="button" data-id="${e}" class="shopping-list-btn-del js-trash js-trash-id "><svg class="trash js-trash">
  <use class="js-trash" href="${t(p)}#trash"></use>
</svg> 
</button> 
          </li>
`)).join("")}p=new URL(r("kyEFX").resolve("lp5u4"),import.meta.url).toString();const u=document.querySelector(".js-list-books");try{let e=JSON.parse(localStorage.getItem("savedBooks"));e&&e.length?(u.innerHTML=d(e),u.addEventListener("click",function(t){var s;if(!t.target.classList.contains("js-trash"))return;let i=null!==(s=t.target.dataset.id)&&void 0!==s?s:t.target.closest(".js-trash-id").dataset.id,o=e.findIndex(({_id:e})=>e===i);if(-1!==o){if(e.splice(o,1),localStorage.setItem("savedBooks",JSON.stringify(e)),!e.length)return f();u.innerHTML=d(e)}})):f()}catch(e){console.log(e)}function f(){u.innerHTML=`<div class="is-empty">
  <p class="text-empty">This page is empty, add some books and proceed to order.</p>
  <img src="${t(n)}" alt=""/></div>
`}r("1MnFF"),r("gjiCh"),r("h8wPa");
//# sourceMappingURL=shopinglist.3b235e6a.js.map
