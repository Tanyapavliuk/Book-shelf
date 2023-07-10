function e(e,t,s,n){Object.defineProperty(e,t,{get:s,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=s.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var s={id:e,exports:{}};return n[e]=s,t.call(s.exports,s,s.exports),s.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},s.parcelRequired7c6=o),o.register("kyEFX",function(t,s){"use strict";e(t.exports,"register",function(){return n},function(e){return n=e}),e(t.exports,"resolve",function(){return i},function(e){return i=e});var n,i,o={};n=function(e){for(var t=Object.keys(e),s=0;s<t.length;s++)o[t[s]]=e[t[s]]},i=function(e){var t=o[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),o("kyEFX").register(JSON.parse('{"MrFY9":"shopinglist.66b7911b.js","1yVwl":"amazon.34000ac9.png","fIBw5":"book.7263ab5e.png","fSsri":"book-block.a9d887af.png","lp5u4":"sprite.ee5e019c.svg","axSJb":"IMG_9606 1.8e56c68d.png"}'));const r=document.querySelector(".sing-up-btn"),l=document.querySelector(".backdrop-login"),a=document.querySelector(".login"),c=document.querySelector(".modal-login-close"),u=document.querySelector(".sing-up-btn-mob");function d(){l.classList.add("active"),l.style.zIndex="2",a.classList.add("active")}r.addEventListener("click",d),u.addEventListener("click",d),c.addEventListener("click",function(){l.classList.remove("active"),a.classList.remove("active")});const g=document.querySelector(".hamburger-menu"),p=document.querySelector(".mobile-menu"),m=document.querySelector(".mobile-close");g.addEventListener("click",function(){g.classList.add("visually-hidden"),p.style.left="0",m.classList.remove("visually-hidden")}),m.addEventListener("click",function(){g.classList.remove("visually-hidden"),p.style.left="100%",m.classList.add("visually-hidden")}),document.querySelector(".switch");const f=document.querySelector(".checkbox-theme");localStorage.getItem("theme")&&(f.checked=!0);const v=document.querySelector(".login-form"),b=document.querySelector(".sing-up-js"),h=document.querySelector(".sing-in-js"),y=document.querySelector(".sub-btn-js");y.textContent="Sing up";let S=0;function k(){b.classList.add("disabled-btn"),h.classList.remove("disabled-btn"),y.textContent="Sing in"}b.addEventListener("click",function(){h.classList.add("disabled-btn"),b.classList.remove("disabled-btn"),y.textContent="Sing up"}),h.addEventListener("click",k),v.addEventListener("submit",function(e){if(e.preventDefault(),"Sing up"===y.textContent&&e.target.username.value&&e.target.useremail.value&&e.target.userpass.value){let t={name:e.target.username.value,email:e.target.useremail.value,password:e.target.userpass.value};localStorage.setItem(`user${S}`,JSON.stringify(t)),S+=1,e.target.username.value="",e.target.useremail.value="",e.target.userpass.value="",k()}else console.log("Заповніть усі поля")});var L={};L=new URL(o("kyEFX").resolve("1yVwl"),import.meta.url).toString();var _={};_=new URL(o("kyEFX").resolve("fIBw5"),import.meta.url).toString();var E={};E=new URL(o("kyEFX").resolve("fSsri"),import.meta.url).toString();var w={};function $(e){return e.map(({_id:e,title:s,book_image:n="./images/book_default/book_default.jpg",author:i,description:o,list_name:r,buy_links:l})=>(o||(o="Sorry, but this book does not have an accessible description. Try reading it on the website of one of the shops"),`<li class="shopping-list-card">
            <div class="shopping-list-img-container"><img class="shopping-list-img" src="${n}" alt="${s}" /></div>
            <div class="shopping-list-description-thumb">
              <div >
                <h2 class="title-book">${s}</h2>
                <h3 class="shopping-list__subtitle">${r}</h3>
                <p class="description">${o}</p>
              </div>
              <div class="shopping-list-thumb">
                <span class="author">${i.split(",")[0]}</span>
                <ul class="shopping-list-store">
                <li > 
                 <a href="${l.filter(({name:e})=>"Amazon"===e)[0].url}" target="_blank"><img src="${t(L)} alt="logo Amazon" />
</a>
</li>
<li> 
  <a href="${l.filter(({name:e})=>"Apple Books"===e)[0].url}" target="_blank"><img src="${t(_)}" alt="Book" />
</a>
</li>
<li> 
<a href="${l.filter(({name:e})=>"Bookshop"===e)[0].url}"target="_blank"><img src="${t(E)}" alt="logo Book-block" /></a>
</li></ul>
                </div>
              </div>
            </div>
            <button type="button" data-id="${e}" class="shopping-list-btn-del js-trash "><svg class="trash ">
  <use href="${t(w)}#trash"></use>
</svg> 

</button> 
          </li>
`)).join("")}w=new URL(o("kyEFX").resolve("lp5u4"),import.meta.url).toString();var q={};function x(){F.innerHTML=`<p>This page is empty, add some books and proceed to order.</p><img src="${t(q)}" alt="">
`}q=new URL(o("kyEFX").resolve("axSJb"),import.meta.url).toString();const F=document.querySelector(".js-list-books");try{let e=JSON.parse(localStorage.getItem("savedBooks"));e&&e.length?(F.innerHTML=$(e),F.addEventListener("click",function(e){let t=$4b7d28a918203711$export$d6dc9f58cff1c30b();if(!e.target.classList.contains("js-trash"))return;let s=t.findIndex(({_id:t})=>t===e.target.dataset.id);if(-1!==s){if(t.splice(s,1),localStorage.setItem("savedBooks",JSON.stringify(t)),!t.length)return x();F.innerHTML=$(t)}})):x()}catch(e){console.log(e)}
//# sourceMappingURL=shopinglist.66b7911b.js.map
