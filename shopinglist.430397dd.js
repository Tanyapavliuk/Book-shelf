function e(e,t,o,r){Object.defineProperty(e,t,{get:o,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},s=o.parcelRequired7c6;null==s&&((s=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},o.parcelRequired7c6=s),s.register("kyEFX",function(t,o){"use strict";e(t.exports,"register",function(){return r},function(e){return r=e}),e(t.exports,"resolve",function(){return i},function(e){return i=e});var r,i,s={};r=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)s[t[o]]=e[t[o]]},i=function(e){var t=s[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),s("kyEFX").register(JSON.parse('{"gsDsZ":"shopinglist.430397dd.js","1yVwl":"amazon.34000ac9.png","fIBw5":"book.7263ab5e.png","fSsri":"book-block.a9d887af.png","lp5u4":"sprite.ee5e019c.svg","axSJb":"IMG_9606 1.8e56c68d.png"}'));var n={};n=new URL(s("kyEFX").resolve("1yVwl"),import.meta.url).toString();var l={};l=new URL(s("kyEFX").resolve("fIBw5"),import.meta.url).toString();var a={};a=new URL(s("kyEFX").resolve("fSsri"),import.meta.url).toString();var c={};function u(e){return e.map(({_id:e,title:o,book_image:r="./images/book_default/book_default.jpg",author:i,description:s,list_name:u,buy_links:d})=>(s||(s="Sorry, but this book does not have an accessible description. Try reading it on the website of one of the shops"),`<li class="shopping-list-card">
            <div class="shopping-list-img-container"><img class="shopping-list-img" src="${r}" alt="${o}" /></div>
            <div class="shopping-list-description-thumb">
              <div >
                <h2 class="title-book">${o}</h2>
                <h3 class="shopping-list__subtitle">${u}</h3>
                <p class="description">${s}</p>
              </div>
              <div class="shopping-list-thumb">
                <span class="author">${i.split(",")[0]}</span>
                <ul class="shopping-list-store">
                <li > 
                 <a href="${d.filter(({name:e})=>"Amazon"===e)[0].url}" target="_blank"><img src="${t(n)} alt="logo Amazon" />
</a>
</li>
<li> 
  <a href="${d.filter(({name:e})=>"Apple Books"===e)[0].url}" target="_blank"><img src="${t(l)}" alt="Book" />
</a>
</li>
<li> 
<a href="${d.filter(({name:e})=>"Bookshop"===e)[0].url}"target="_blank"><img src="${t(a)}" alt="logo Book-block" /></a>
</li></ul>
                </div>
              </div>
            </div>
            <button type="button" data-id="${e}" class="shopping-list-btn-del js-trash "><svg class="trash ">
  <use href="${t(c)}#trash"></use>
</svg> 

</button> 
          </li>
`)).join("")}c=new URL(s("kyEFX").resolve("lp5u4"),import.meta.url).toString();var d={};function p(){f.innerHTML=`<p>This page is empty, add some books and proceed to order.</p><img src="${t(d)}" alt="">
`}d=new URL(s("kyEFX").resolve("axSJb"),import.meta.url).toString();const f=document.querySelector(".js-list-books");try{let e=JSON.parse(localStorage.getItem("savedBooks"));e&&e.length?(f.innerHTML=u(e),f.addEventListener("click",function(e){let t=$4b7d28a918203711$export$d6dc9f58cff1c30b();if(!e.target.classList.contains("js-trash"))return;let o=t.findIndex(({_id:t})=>t===e.target.dataset.id);if(-1!==o){if(t.splice(o,1),localStorage.setItem("savedBooks",JSON.stringify(t)),!t.length)return p();f.innerHTML=u(t)}})):p()}catch(e){console.log(e)}
//# sourceMappingURL=shopinglist.430397dd.js.map
