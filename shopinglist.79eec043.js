!function(){var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},e=n.parcelRequired7c6;null==e&&((e=function(n){if(n in t)return t[n].exports;if(n in o){var e=o[n];delete o[n];var i={id:n,exports:{}};return t[n]=i,e.call(i.exports,i,i.exports),i.exports}var s=Error("Cannot find module '"+n+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(n,t){o[n]=t},n.parcelRequired7c6=e),e("i8Q71");var i=e("i7mVp"),s=e("4tSb9"),i=e("i7mVp"),s=e("4tSb9"),a=e("dIxxU");function r(){return(r=(0,i._)(function(){return(0,s.__generator)(this,function(n){switch(n.label){case 0:return[4,(0,a.default)("https://books-backend.p.goit.global/books/category?category=Advice How-To and Miscellaneous")];case 1:return[2,n.sent().data]}})})).apply(this,arguments)}function l(n){return n.map(function(n){var t=n._id,o=n.title,e=n.book_image,i=n.author,s=n.description,a=n.list_name,r=n.buy_links;return s||(s="Sorry, but this book does not have an accessible description. Try reading it on the website of one of the shops"),'<li class="shopping-list-card">\n            <div class="shopping-list-img-container"><img class="shopping-list-img" src="'.concat(void 0===e?"./images/book_default/book_default.jpg":e,'" alt="').concat(o,'" /></div>\n            <div class="shopping-list-description-thumb">\n              <div >\n                <h2 class="title-book">').concat(o,'</h2>\n                <h3 class="shopping-list__subtitle">').concat(a,'</h3>\n                <p class="description">').concat(s,'</p>\n              </div>\n              <div class="shopping-list-thumb">\n                <span class="author">').concat(i.split(",")[0],'</span>\n                <ul class="shopping-list-store">\n                <li > \n                 <a href="').concat(r.filter(function(n){return"Amazon"===n.name})[0].url,'"><img src="./images/amazon.png" alt="logo Amazon" />\n</a>\n</li>\n<li> \n  <a href="').concat(r.filter(function(n){return"Apple Books"===n.name})[0].url,'"><img src="./images/book.png" alt="Book" />\n</a>\n</li>\n<li> \n<a href="').concat(r.filter(function(n){return"Bookshop"===n.name})[0].url,'"><img src="./images/book-block.png" alt="logo Book-block" /></a>\n</li></ul>\n                </div>\n              </div>\n            </div>\n            <button type="button" data-id="').concat(t,'" class="shopping-list-btn-del js-trash ">\n</button> \n          </li>\n')}).join("")}var c=document.querySelector(".js-list-books");function p(){return(p=(0,i._)(function(n){var t,o,e;return(0,s.__generator)(this,function(i){switch(i.label){case 0:return t=localStorage.setItem,o=["shopingBooks"],e=JSON.stringify,[4,n()];case 1:return t.apply(localStorage,o.concat([e.apply(JSON,[i.sent()])])),[2]}})})).apply(this,arguments)}!function(n){p.apply(this,arguments)}(function(){return r.apply(this,arguments)});try{var u=JSON.parse(localStorage.getItem("shopingBooks"));u&&u.length?(c.innerHTML=l(u),c.addEventListener("click",function(n){if(console.log(n.target),n.target.classList.contains("js-trash")){console.log(n.target.dataset.id),console.log("targetId",n.target.dataset.id);var t=u.findIndex(function(t){return t._id===n.target.dataset.id});if(console.log(t),-1!==t){if(u.splice(t,1),localStorage.setItem("shopingBooks",JSON.stringify(u)),!u.length)return g();c.innerHTML=l(u)}}})):g()}catch(n){console.log(n)}function g(){c.innerHTML='<p>This page is empty, add some books and proceed to order.</p><img src="./images/shopping_List/IMG_9606 1.png" alt="">\n'}}();
//# sourceMappingURL=shopinglist.79eec043.js.map
