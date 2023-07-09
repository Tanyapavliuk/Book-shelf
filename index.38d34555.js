let e;var t,o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},s={},n=o.parcelRequired7c6;null==n&&((n=function(e){if(e in i)return i[e].exports;if(e in s){var t=s[e];delete s[e];var o={id:e,exports:{}};return i[e]=o,t.call(o.exports,o,o.exports),o.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){s[e]=t},o.parcelRequired7c6=n);const r=document.querySelector(".support-list"),a=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"../src/images/support/save_the_children.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"../src/images/support/project_hope.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"../src/images/support/united24.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"../src/images/support/international_medical_corps.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"../src/images/support/medicins_sans_frontieres.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"./images/support/razom.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"../src/images/support/action_against_hunger.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"../images/support/world_vision.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"../images/support/serhiy_prytula_charity_foundation.png"}].map(function(e){return`<li class="support-item">
  <img src="${e.img}" alt="${e.title}" class="support-logo" data-url="${e.url}" height="32px">
  </li>`});r.innerHTML=a.join("");const l=document.querySelectorAll(".support-logo");l.forEach(function(e){e.addEventListener("click",function(){let e=this.getAttribute("data-url");window.open(e,"_blank")})});const c=document.querySelector(".support"),u=document.querySelector(".see-more");u.addEventListener("click",function(){c.classList.toggle("expanded")});var d=n("2shzp");const p=document.querySelector(".container-books"),g=document.querySelector(".book-list");async function m(){try{var e;let t;let o=await (0,d.default).get("https://books-backend.p.goit.global/books/top-books ");console.log(o.data),p.insertAdjacentHTML("beforeend",(e=o.data,t="",e.forEach(e=>{t+=`<div class="category-block">
        <h2 class="cat-title">${e.list_name}</h2>
        <ul class="book-list">${e.books.map(({book_image:e,author:t,title:o})=>`<li class="bs-list-item" hidden>
        <a href="#" class="book-card">
            <img class="book-img" src="${e}" alt="${o}" />
            <h3 class="book-title">${o}</h3>
            <h4 class="book-author">${t}</h4>
        </a>
        </li>`).join("")}</ul>
        <button type="button" class="btn-more">SEE MORE</button>
    </div>`}),t))}catch(e){console.log(e)}}console.dir(p),m(),g.addEventListener("click",void evt);const h=document.querySelector(".hero-ul"),b=document.querySelector(".backdrop"),k=document.querySelector(".modal"),f=document.querySelector(".modal-shopping-close"),y=document.querySelector(".render-modal");function v(){b.classList.remove("active"),k.classList.remove("active"),document.body.style.overflow="auto"}async function w(e){try{let t=`https://books-backend.p.goit.global/books/${e}`,o=await fetch(t);if(!o.ok)throw Error(`Error: ${o.status} ${o.statusText}`);let i=await o.json();return[i]}catch(e){console.error(e)}}async function _(t){try{y.innerHTML="";let o=await w(t);e=o[0]._id,function(e){let t=e.map(e=>`
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
                <img src="/images/amazon.png" alt="Amazon" />
              </a>
            </li>
            <li>
              <a href="${e.buy_links[1].url}">
                <img src="/images/book.png" alt="Apple Books" />
              </a>
            </li>
            <li>
              <a href="${e.buy_links[4].url}">
                <img src="/images/book-block.png" alt="Bookshop" />
              </a>
            </li>
          </ul>
        </div>
      </div>
        `).join("");y.insertAdjacentHTML("beforeend",t)}(o),function(e){let t=JSON.parse(localStorage.getItem("savedBooks"));if(t.some(t=>t._id===e)){let t=`
      <button type="submit" class="button book">
        Remove from the shopping list
      </button>
      <p class="congratulation">
        Сongratulations! You have added the book to the shopping list. To delete,
        press the button “Remove from the shopping list”.
      </p>
    `;y.insertAdjacentHTML("beforeend",t);let o=document.querySelector(".button.book");o.addEventListener("click",t=>{(function(e){let t=JSON.parse(localStorage.getItem("savedBooks")),o=t.findIndex(t=>t._id===e);-1!==o&&t.splice(o,1),localStorage.setItem("savedBooks",JSON.stringify(t))})(e),v()})}else{let t=`
      <button type="submit" class="button book">
        Add to shopping list
      </button>
    `;y.insertAdjacentHTML("beforeend",t);let o=document.querySelector(".button.book");o.addEventListener("click",t=>{S(e),v()})}}(e)}catch(e){console.error(e)}}async function S(e){try{let t=await w(e),{_id:o,book_image:i,title:s,list_name:n,description:r,author:a,buy_links:l}=t[0],c=JSON.parse(localStorage.getItem("savedBooks"))||[];c.push({_id:o,book_image:i,title:s,list_name:n,description:r,author:a,buy_links:l}),localStorage.setItem("savedBooks",JSON.stringify(c))}catch(e){console.error(e)}}!function(){let e=JSON.parse(localStorage.getItem("savedBooks"));e||localStorage.setItem("savedBooks",JSON.stringify([]))}(),window.addEventListener("load",function(){h.addEventListener("click",e=>{_("643282b1e85766588626a080"),b.classList.add("active"),k.classList.add("active"),document.body.style.overflow="hidden"}),b.addEventListener("click",e=>{e.target===b&&v()}),document.addEventListener("keydown",e=>{"Escape"===e.key&&v()}),f.addEventListener("click",e=>{v()})});
//# sourceMappingURL=index.38d34555.js.map
