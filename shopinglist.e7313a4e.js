!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},s=n.parcelRequired7c6;null==s&&((s=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},n.parcelRequired7c6=s),s.register("iE7OH",function(t,n){"use strict";e(t.exports,"register",function(){return r},function(e){return r=e}),e(t.exports,"resolve",function(){return o},function(e){return o=e});var r,o,s={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)s[t[n]]=e[t[n]]},o=function(e){var t=s[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),s.register("aNJCr",function(t,n){e(t.exports,"getBundleURL",function(){return r},function(e){return r=e});"use strict";var r,o={};r=function(e){var t=o[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),o[e]=t),t}}),s("iE7OH").register(JSON.parse('{"exjHQ":"shopinglist.e7313a4e.js","aaLHb":"amazon.34000ac9.png","cL3Jl":"book.7263ab5e.png","jr1cR":"book-block.a9d887af.png","ee16w":"sprite.ee5e019c.svg","3PIDE":"IMG_9606 1.8e56c68d.png"}'));var a=document.querySelector(".sing-up-btn"),i=document.querySelector(".backdrop-login"),c=document.querySelector(".login"),l=document.querySelector(".modal-login-close"),u=document.querySelector(".sing-up-btn-mob");function d(){i.classList.add("active"),i.style.zIndex="2",c.classList.add("active")}a.addEventListener("click",d),u.addEventListener("click",d),l.addEventListener("click",function(){i.classList.remove("active"),c.classList.remove("active")});var g=document.querySelector(".hamburger-menu"),f=document.querySelector(".mobile-menu"),v=document.querySelector(".mobile-close");g.addEventListener("click",function(){g.classList.add("visually-hidden"),f.style.left="0",v.classList.remove("visually-hidden")}),v.addEventListener("click",function(){g.classList.remove("visually-hidden"),f.style.left="100%",v.classList.add("visually-hidden")}),document.querySelector(".switch");var p=document.querySelector(".checkbox-theme");localStorage.getItem("theme")&&(p.checked=!0);var m=document.querySelector(".login-form"),b=document.querySelector(".sing-up-js"),h=document.querySelector(".sing-in-js"),y=document.querySelector(".sub-btn-js");y.textContent="Sing up";var L=0;function k(){b.classList.add("disabled-btn"),h.classList.remove("disabled-btn"),y.textContent="Sing in"}b.addEventListener("click",function(){h.classList.add("disabled-btn"),b.classList.remove("disabled-btn"),y.textContent="Sing up"}),h.addEventListener("click",k),m.addEventListener("submit",function(e){if(e.preventDefault(),"Sing up"===y.textContent&&e.target.username.value&&e.target.useremail.value&&e.target.userpass.value){var t={name:e.target.username.value,email:e.target.useremail.value,password:e.target.userpass.value};localStorage.setItem("user".concat(L),JSON.stringify(t)),L+=1,e.target.username.value="",e.target.useremail.value="",e.target.userpass.value="",k()}else console.log("Заповніть усі поля")});var S={};S=s("aNJCr").getBundleURL("exjHQ")+s("iE7OH").resolve("aaLHb");var H={};H=s("aNJCr").getBundleURL("exjHQ")+s("iE7OH").resolve("cL3Jl");var _={};_=s("aNJCr").getBundleURL("exjHQ")+s("iE7OH").resolve("jr1cR");var E={};function x(e){return e.map(function(e){var n=e._id,r=e.title,o=e.book_image,s=e.author,a=e.description,i=e.list_name,c=e.buy_links;return a||(a="Sorry, but this book does not have an accessible description. Try reading it on the website of one of the shops"),'<li class="shopping-list-card">\n            <div class="shopping-list-img-container"><img class="shopping-list-img" src="'.concat(void 0===o?"./images/book_default/book_default.jpg":o,'" alt="').concat(r,'" /></div>\n            <div class="shopping-list-description-thumb">\n              <div >\n                <h2 class="title-book">').concat(r,'</h2>\n                <h3 class="shopping-list__subtitle">').concat(i,'</h3>\n                <p class="description">').concat(a,'</p>\n              </div>\n              <div class="shopping-list-thumb">\n                <span class="author">').concat(s.split(",")[0],'</span>\n                <ul class="shopping-list-store">\n                <li > \n                 <a href="').concat(c.filter(function(e){return"Amazon"===e.name})[0].url,'" target="_blank"><img src="').concat(t(S),' alt="logo Amazon" />\n</a>\n</li>\n<li> \n  <a href="').concat(c.filter(function(e){return"Apple Books"===e.name})[0].url,'" target="_blank"><img src="').concat(t(H),'" alt="Book" />\n</a>\n</li>\n<li> \n<a href="').concat(c.filter(function(e){return"Bookshop"===e.name})[0].url,'"target="_blank"><img src="').concat(t(_),'" alt="logo Book-block" /></a>\n</li></ul>\n                </div>\n              </div>\n            </div>\n            <button type="button" data-id="').concat(n,'" class="shopping-list-btn-del js-trash "><svg class="trash js-trash ">\n  <use class="js-trash" href="').concat(t(E),'#trash"></use>\n</svg> \n\n</button> \n          </li>\n')}).join("")}E=s("aNJCr").getBundleURL("exjHQ")+s("iE7OH").resolve("ee16w");var j={};function q(){O.innerHTML='<p>This page is empty, add some books and proceed to order.</p><img src="'.concat(t(j),'" alt="">\n')}j=s("aNJCr").getBundleURL("exjHQ")+s("iE7OH").resolve("3PIDE");var O=document.querySelector(".js-list-books");try{var R=JSON.parse(localStorage.getItem("savedBooks"));R&&R.length?(O.innerHTML=x(R),O.addEventListener("click",function(e){var t=$63415d2b53e88af1$export$d6dc9f58cff1c30b();if(e.target.classList.contains("js-trash")){console.log(e.target);var n=t.findIndex(function(t){return t._id===e.target.dataset.id});if(-1!==n){if(t.splice(n,1),localStorage.setItem("savedBooks",JSON.stringify(t)),!t.length)return q();O.innerHTML=x(t)}}})):q()}catch(e){console.log(e)}}();
//# sourceMappingURL=shopinglist.e7313a4e.js.map