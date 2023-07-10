function e(e,t,s,n){Object.defineProperty(e,t,{get:s,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=s.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var s={id:e,exports:{}};return n[e]=s,t.call(s.exports,s,s.exports),s.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},s.parcelRequired7c6=r),r.register("kyEFX",function(t,s){"use strict";e(t.exports,"register",function(){return n},function(e){return n=e}),e(t.exports,"resolve",function(){return o},function(e){return o=e});var n,o,r={};n=function(e){for(var t=Object.keys(e),s=0;s<t.length;s++)r[t[s]]=e[t[s]]},o=function(e){var t=r[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),r("kyEFX").register(JSON.parse('{"MrFY9":"shopinglist.f39a4c18.js","1yVwl":"amazon.34000ac9.png","fIBw5":"book.7263ab5e.png","fSsri":"book-block.a9d887af.png","lp5u4":"sprite.ee5e019c.svg","axSJb":"IMG_9606 1.8e56c68d.png"}'));const i=document.querySelector(".sing-up-btn"),l=document.querySelector(".backdrop-login"),a=document.querySelector(".login"),c=document.querySelector(".modal-login-close"),u=document.querySelector(".sing-up-btn-mob");function d(){l.classList.add("active"),l.style.zIndex="2",a.classList.add("active")}i.addEventListener("click",d),u.addEventListener("click",d),c.addEventListener("click",function(){l.classList.remove("active"),a.classList.remove("active")});const g=document.querySelector(".hamburger-menu"),p=document.querySelector(".mobile-menu"),m=document.querySelector(".mobile-close");g.addEventListener("click",function(){g.classList.add("visually-hidden"),p.style.left="0",m.classList.remove("visually-hidden")}),m.addEventListener("click",function(){g.classList.remove("visually-hidden"),p.style.left="100%",m.classList.add("visually-hidden")}),document.querySelector(".switch");const f=document.querySelector(".checkbox-theme");localStorage.getItem("theme")&&(f.checked=!0);const v=document.querySelector(".login-form"),b=document.querySelector(".sing-up-js"),h=document.querySelector(".sing-in-js"),y=document.querySelector(".sub-btn-js");y.textContent="Sing up";let S=0;function k(){b.classList.add("disabled-btn"),h.classList.remove("disabled-btn"),y.textContent="Sing in"}b.addEventListener("click",function(){h.classList.add("disabled-btn"),b.classList.remove("disabled-btn"),y.textContent="Sing up"}),h.addEventListener("click",k),v.addEventListener("submit",function(e){if(e.preventDefault(),"Sing up"===y.textContent&&e.target.username.value&&e.target.useremail.value&&e.target.userpass.value){let t={name:e.target.username.value,email:e.target.useremail.value,password:e.target.userpass.value};localStorage.setItem(`user${S}`,JSON.stringify(t)),S+=1,e.target.username.value="",e.target.useremail.value="",e.target.userpass.value="",k()}else console.log("Заповніть усі поля")});var L={};L=new URL(r("kyEFX").resolve("1yVwl"),import.meta.url).toString();var _={};_=new URL(r("kyEFX").resolve("fIBw5"),import.meta.url).toString();var E={};E=new URL(r("kyEFX").resolve("fSsri"),import.meta.url).toString();var w={};function $(e){return e.map(({_id:e,title:s,book_image:n="./images/book_default/book_default.jpg",author:o,description:r,list_name:i,buy_links:l})=>(r||(r="Sorry, but this book does not have an accessible description. Try reading it on the website of one of the shops"),`<li class="shopping-list-card">
            <div class="shopping-list-img-container"><img class="shopping-list-img" src="${n}" alt="${s}" /></div>
            <div class="shopping-list-description-thumb">
              <div >
                <h2 class="title-book">${s}</h2>
                <h3 class="shopping-list__subtitle">${i}</h3>
                <p class="description">${r}</p>
              </div>
              <div class="shopping-list-thumb">
                <span class="author">${o.split(",")[0]}</span>
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
            <button type="button" data-id="${e}" class="shopping-list-btn-del js-trash "><svg class="trash js-trash ">
  <use class="js-trash" href="${t(w)}#trash"></use>
</svg> 

</button> 
          </li>
`)).join("")}w=new URL(r("kyEFX").resolve("lp5u4"),import.meta.url).toString();var q={};function x(){F.innerHTML=`<p>This page is empty, add some books and proceed to order.</p><img src="${t(q)}" alt="">
`}q=new URL(r("kyEFX").resolve("axSJb"),import.meta.url).toString();const F=document.querySelector(".js-list-books");try{let e=JSON.parse(localStorage.getItem("savedBooks"));e&&e.length?(F.innerHTML=$(e),F.addEventListener("click",function(e){let t=$4b7d28a918203711$export$d6dc9f58cff1c30b();if(!e.target.classList.contains("js-trash"))return;console.log(e.target);let s=t.findIndex(({_id:t})=>t===e.target.dataset.id);if(-1!==s){if(t.splice(s,1),localStorage.setItem("savedBooks",JSON.stringify(t)),!t.length)return x();F.innerHTML=$(t)}})):x()}catch(e){console.log(e)}
//# sourceMappingURL=shopinglist.f39a4c18.js.map
