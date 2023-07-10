let e;function t(e,t,o,i){Object.defineProperty(e,t,{get:o,set:i,enumerable:!0,configurable:!0})}function o(e){return e&&e.__esModule?e.default:e}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},s={},r=i.parcelRequired7c6;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in s){var t=s[e];delete s[e];var o={id:e,exports:{}};return a[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){s[e]=t},i.parcelRequired7c6=r),r.register("kyEFX",function(e,o){"use strict";t(e.exports,"register",function(){return i},function(e){return i=e}),t(e.exports,"resolve",function(){return a},function(e){return a=e});var i,a,s={};i=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)s[t[o]]=e[t[o]]},a=function(e){var t=s[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),r("kyEFX").register(JSON.parse('{"5ZPII":"index.bd63376e.js","ii3ja":"save_the_children.94101b22.png","dtU2D":"project_hope.e3ab8a1b.png","b5f6W":"united24.4f0fa97a.png","4MpEK":"international_medical_corps.be796122.png","4unQx":"medicins_sans_frontieres.43aa5a19.png","afm35":"razom.44c914c9.png","6FV5U":"action_against_hunger.d166ecc2.png","8XqL9":"world_vision.375d2563.png","7voIE":"serhiy_prytula_charity_foundation.e6f16e64.png","1yVwl":"amazon.34000ac9.png","fIBw5":"book.7263ab5e.png","fSsri":"book-block.a9d887af.png","4NqTx":"shopinglist.5464b186.js"}')),r("bUb57");const n=document.querySelector('input[type = "checkbox"]');function l(){try{"dark"===localStorage.getItem("theme")?document.body.setAttribute("dark",""):document.body.removeAttribute("dark")}catch(e){}}n.addEventListener("change",e=>{e.preventDefault(),"dark"===localStorage.getItem("theme")?localStorage.removeItem("theme"):localStorage.setItem("theme","dark"),l()}),l();var c=r("2shzp");const d=document.querySelector(".container-books");async function u(){try{var e;let t;let o=await (0,c.default).get("https://books-backend.p.goit.global/books/top-books ");console.log(o.data),d.insertAdjacentHTML("beforeend",(e=o.data,t="",e.forEach(e=>{t+=`<div class="category-block">
        <h2 class="cat-title">${e.list_name}</h2>
        <ul class="book-list">${e.books.map(({book_image:e,author:t,title:o,_id:i})=>`<li class="bs-list-item" hidden>
        <div class="book-card" data-id="${i}">
        <div class="image-overlay" data-id="${i}">
            <img class="book-img js-ct" src="${e}" alt="${o}" loading="lazy" />
            <div class="image-description js-ct">
      <p class="image-overlay-description"> quick view  </p>
     </div>
      </div>
            <h3 class="book-title js-ct">${o}</h3>
            <h4 class="book-author js-ct">${t}</h4>
        </div>
        </li>`).join("")}</ul>
        <button type="button" class="btn-more" data-catname="${e.list_name}">SEE MORE</button>
    </div>`}),t='<h1 class="main-title">Best Sellers <span>Books</span></h1>'+t))}catch(e){console.log(e)}}d.firstChild||u();const g=document.querySelector(".category-list");var c=r("2shzp"),m=c.default;async function p(e){await m.get(`https://books-backend.p.goit.global/books/category?category=${e}`).then(({data:e})=>(function(e){console.log(e);let t=`
    <h2 class ="main-title">${e[0].list_name}</h2>
    <ul class="book-list">${e.map(({author:e,book_image:t,description:o,title:i,_id:a})=>`<li class="bs-list-item">
          <div class="book-card " data-id="${a}">
    <div class="image-overlay" data-id="${a}">
    <img class="book-img js-ct" src="${t}" alt="${i} loading="lazy" >
    <div class="image-description">
      <p class="image-overlay-description"> quick view  </p>
     </div>
      </div>
    <h3 class="book-title js-ct">${i}</h3>
    <p class="book-author js-ct"> ${e}</p>
    </div>
    </li>`).join("")}
    </ul>
     `;d.innerHTML=t;let o=document.querySelector(".main-title"),i=o.textContent,a=i.split(" "),s=a[a.length-1];o.innerHTML=i.replace(s,`<span class="brendcolor">${s}</span>`)})(e))}g.addEventListener("click",function(e){let t=e.target;if("LI"!==t.tagName)return;" All Categories "===t.textContent&&(d.innerHTML="",u()),p(t.textContent.trim());let o=document.querySelector(".categories__title-active");o&&o.classList.remove("categories__title-active"),e.target.classList.add("categories__title-active")}),async function(){await m.get("https://books-backend.p.goit.global/books/category-list").then(({data:e})=>{let t;t='<li class = "category-list-item"> All Categories </li>'+(t=e.map(({list_name:e})=>`<li class = "category-list-item"> ${e} </li>`).join("")),g.innerHTML=t}).catch(e=>console.log("error",e))}();var h={};h=new URL(r("kyEFX").resolve("ii3ja"),import.meta.url).toString();var v={};v=new URL(r("kyEFX").resolve("dtU2D"),import.meta.url).toString();var y={};y=new URL(r("kyEFX").resolve("b5f6W"),import.meta.url).toString();var b={};b=new URL(r("kyEFX").resolve("4MpEK"),import.meta.url).toString();var f={};f=new URL(r("kyEFX").resolve("4unQx"),import.meta.url).toString();var k={};k=new URL(r("kyEFX").resolve("afm35"),import.meta.url).toString();var w={};w=new URL(r("kyEFX").resolve("6FV5U"),import.meta.url).toString();var _={};_=new URL(r("kyEFX").resolve("8XqL9"),import.meta.url).toString();var S={};S=new URL(r("kyEFX").resolve("7voIE"),import.meta.url).toString();const E=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:o(h)},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:o(v)},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:o(y)},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:o(b)},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:o(f)},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:o(k)},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:o(w)},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:o(_)},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:o(S)}],L=document.querySelector(".support-list"),H=E.map(function(e){return`<li class="support-item">
  <div class="fund-container"> <img src="${e.img}" alt="${e.title}" class="support-logo" data-url="${e.url}" height="32px"></div>
 
  </li>`});L.innerHTML=H.join("");const $=document.querySelectorAll(".support-logo");$.forEach(function(e){e.addEventListener("click",function(){let e=this.getAttribute("data-url");window.open(e,"_blank")})});const R=document.querySelector(".support"),x=document.querySelector(".support-container"),F=document.querySelector(".see-more");function A(){x.scrollTo({top:0,behavior:"smooth"})}window.matchMedia("(max-width: 767px)").matches?F.addEventListener("click",function(){R.classList.toggle("expanded"),R.classList.contains("expanded")?(F.style.display="none",x.style.overflowY="scroll",x.style.overflowX="auto",x.style.height="220px",x.style.marginRight="10px"):(F.style.display="flex",x.style.overflowY="hidden",x.style.overflowX="hidden",x.style.height="auto",x.style.marginRight="0"),A()}):F.addEventListener("click",function(){R.classList.toggle("expanded"),R.classList.contains("expanded")?(F.style.display="none",x.style.overflowY="scroll",x.style.overflowX="auto",x.style.height="340px",x.style.marginRight="10px"):(F.style.display="flex",x.style.overflowY="hidden",x.style.overflowX="hidden",x.style.height="auto",x.style.marginRight="0"),A()}),document.addEventListener("click",function(e){e.target.closest(".support")||(R.classList.remove("expanded"),F.style.display="flex",x.style.overflowY="hidden",x.style.overflowX="hidden",x.style.height="auto",x.style.marginRight="0",A())});var j={};j=new URL(r("kyEFX").resolve("1yVwl"),import.meta.url).toString();var q={};q=new URL(r("kyEFX").resolve("fIBw5"),import.meta.url).toString();var T={};T=new URL(r("kyEFX").resolve("fSsri"),import.meta.url).toString();const I=document.querySelector(".backdrop"),U=document.querySelector(".modal"),X=document.querySelector(".modal-shopping-close"),M=document.querySelector(".render-modal");function O(){I.classList.remove("active"),U.classList.remove("active"),document.body.style.overflow="auto"}async function N(e){try{let t=`https://books-backend.p.goit.global/books/${e}`,o=await fetch(t);if(!o.ok)throw Error(`Error: ${o.status} ${o.statusText}`);let i=await o.json();return[i]}catch(e){console.error(e)}}async function B(t){try{M.innerHTML="";let i=await N(t);e=i[0]._id,function(e){let t=e.map(e=>`
        <div class="card-modal" id="${e._id}">
        <img
          class="modal-img"
          alt="${e.title}"
          src="${e.book_image}"
        />
  
        <div class="thumb-modal">
          <h2 class="book-title-in-modal">${e.title}</h2>
          <p class="subtitle-book">${e.author}</p>
          <p class="text book">
          ${e.description?e.description:"Sorry, but this book does not have an accessible description. Try reading it on the website of one of the shops"}
          </p>
          <ul class="shop-list">
            <li>
              <a href="${e.buy_links[0].url}">
                <img src="${o(j)}" alt="Amazon" />
              </a>
            </li>
            <li>
              <a href="${e.buy_links[1].url}">
                <img src="${o(q)}" alt="Apple Books" />
              </a>
            </li>
            <li>
              <a href="${e.buy_links[4].url}">
                <img src="${o(T)}" alt="Bookshop" />
              </a>
            </li>
          </ul>
        </div>
      </div>
        `).join("");M.insertAdjacentHTML("beforeend",t)}(i),function(e){let t=JSON.parse(localStorage.getItem("savedBooks"));if(t.some(t=>t._id===e)){let t=`
      <button type="submit" class="button book">
        Remove from the shopping list
      </button>
      <p class="congratulation">
        Сongratulations! You have added the book to the shopping list. To delete,
        press the button “Remove from the shopping list”.
      </p>
    `;M.insertAdjacentHTML("beforeend",t);let o=document.querySelector(".button.book");o.addEventListener("click",t=>{(function(e){let t=JSON.parse(localStorage.getItem("savedBooks")),o=t.findIndex(t=>t._id===e);-1!==o&&t.splice(o,1),localStorage.setItem("savedBooks",JSON.stringify(t))})(e),O()})}else{let t=`
      <button type="submit" class="button book">
        Add to shopping list
      </button>
    `;M.insertAdjacentHTML("beforeend",t);let o=document.querySelector(".button.book");o.addEventListener("click",t=>{C(e),O()})}}(e)}catch(e){console.error(e)}}async function C(e){try{let t=await N(e),{_id:o,book_image:i,title:a,list_name:s,description:r,author:n,buy_links:l}=t[0],c=JSON.parse(localStorage.getItem("savedBooks"))||[];c.push({_id:o,book_image:i,title:a,list_name:s,description:r,author:n,buy_links:l}),localStorage.setItem("savedBooks",JSON.stringify(c))}catch(e){console.error(e)}}!function(){let e=JSON.parse(localStorage.getItem("savedBooks"));e||localStorage.setItem("savedBooks",JSON.stringify([]))}(),window.addEventListener("load",function(){d.addEventListener("click",e=>{let t;console.dir(e.target),"BUTTON"===e.target.tagName&&p(e.target.dataset.catname),e.target.classList.value.includes("js-ct")&&(t=e.target.parentElement.dataset.id),t&&(B(t),I.classList.add("active"),U.classList.add("active"),document.body.style.overflow="hidden",I.addEventListener("click",e=>{e.target===I&&O()}),document.addEventListener("keydown",e=>{"Escape"===e.key&&O()}),X.addEventListener("click",e=>{O()}))})});let z=document.querySelector(".mask");window.addEventListener("load",()=>{z.classList.add("hiden"),setTimeout(()=>{z.remove()},600)});const J=document.querySelector(".scroll-btn");J.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),document.addEventListener("scroll",()=>{window.scrollY>100?J.classList.add("show-scroll-btn"):J.classList.remove("show-scroll-btn")});
//# sourceMappingURL=index.bd63376e.js.map
