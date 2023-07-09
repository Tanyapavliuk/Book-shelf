let e;var t,o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},s={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in s){var t=s[e];delete s[e];var o={id:e,exports:{}};return i[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){s[e]=t},o.parcelRequired7c6=r);const n=document.querySelector('input[type = "checkbox"]');function a(){try{"dark"===localStorage.getItem("theme")?document.body.setAttribute("dark",""):document.body.removeAttribute("dark")}catch(e){}}n.addEventListener("change",e=>{e.preventDefault(),"dark"===localStorage.getItem("theme")?localStorage.removeItem("theme"):localStorage.setItem("theme","dark"),a()}),a();const l=document.querySelector(".support-list"),c=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"../src/images/support/save_the_children.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"../src/images/support/project_hope.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"../src/images/support/united24.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"../src/images/support/international_medical_corps.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"../src/images/support/medicins_sans_frontieres.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"./images/support/razom.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"../src/images/support/action_against_hunger.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"../images/support/world_vision.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"../images/support/serhiy_prytula_charity_foundation.png"}].map(function(e){return`<li class="support-item">
  <img src="${e.img}" alt="${e.title}" class="support-logo" data-url="${e.url}" height="32px">
  </li>`});l.innerHTML=c.join("");const d=document.querySelectorAll(".support-logo");d.forEach(function(e){e.addEventListener("click",function(){let e=this.getAttribute("data-url");window.open(e,"_blank")})});const u=document.querySelector(".support"),p=document.querySelector(".see-more");p.addEventListener("click",function(){u.classList.toggle("expanded")});var g=r("2shzp");const m=document.querySelector(".container-books"),h=document.querySelector(".book-list");async function b(){try{var e;let t;let o=await (0,g.default).get("https://books-backend.p.goit.global/books/top-books ");console.log(o.data),m.insertAdjacentHTML("beforeend",(e=o.data,t="",e.forEach(e=>{t+=`<div class="category-block">
        <h2 class="cat-title">${e.list_name}</h2>
        <ul class="book-list">${e.books.map(({book_image:e,author:t,title:o})=>`<li class="bs-list-item" hidden>
        <a href="#" class="book-card">
            <img class="book-img" src="${e}" alt="${o}" />
            <h3 class="book-title">${o}</h3>
            <h4 class="book-author">${t}</h4>
        </a>
        </li>`).join("")}</ul>
        <button type="button" class="btn-more">SEE MORE</button>
    </div>`}),t))}catch(e){console.log(e)}}console.dir(m),b(),h.addEventListener("click",void evt);const k=document.querySelector(".hero-ul"),f=document.querySelector(".backdrop"),y=document.querySelector(".modal"),v=document.querySelector(".modal-shopping-close"),w=document.querySelector(".render-modal");function S(){f.classList.remove("active"),y.classList.remove("active"),document.body.style.overflow="auto"}async function _(e){try{let t=`https://books-backend.p.goit.global/books/${e}`,o=await fetch(t);if(!o.ok)throw Error(`Error: ${o.status} ${o.statusText}`);let i=await o.json();return[i]}catch(e){console.error(e)}}async function E(t){try{w.innerHTML="";let o=await _(t);e=o[0]._id,function(e){let t=e.map(e=>`
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
        `).join("");w.insertAdjacentHTML("beforeend",t)}(o),function(e){let t=JSON.parse(localStorage.getItem("savedBooks"));if(t.some(t=>t._id===e)){let t=`
      <button type="submit" class="button book">
        Remove from the shopping list
      </button>
      <p class="congratulation">
        Сongratulations! You have added the book to the shopping list. To delete,
        press the button “Remove from the shopping list”.
      </p>
    `;w.insertAdjacentHTML("beforeend",t);let o=document.querySelector(".button.book");o.addEventListener("click",t=>{(function(e){let t=JSON.parse(localStorage.getItem("savedBooks")),o=t.findIndex(t=>t._id===e);-1!==o&&t.splice(o,1),localStorage.setItem("savedBooks",JSON.stringify(t))})(e),S()})}else{let t=`
      <button type="submit" class="button book">
        Add to shopping list
      </button>
    `;w.insertAdjacentHTML("beforeend",t);let o=document.querySelector(".button.book");o.addEventListener("click",t=>{L(e),S()})}}(e)}catch(e){console.error(e)}}async function L(e){try{let t=await _(e),{_id:o,book_image:i,title:s,list_name:r,description:n,author:a,buy_links:l}=t[0],c=JSON.parse(localStorage.getItem("savedBooks"))||[];c.push({_id:o,book_image:i,title:s,list_name:r,description:n,author:a,buy_links:l}),localStorage.setItem("savedBooks",JSON.stringify(c))}catch(e){console.error(e)}}!function(){let e=JSON.parse(localStorage.getItem("savedBooks"));e||localStorage.setItem("savedBooks",JSON.stringify([]))}(),window.addEventListener("load",function(){k.addEventListener("click",e=>{E("643282b1e85766588626a080"),f.classList.add("active"),y.classList.add("active"),document.body.style.overflow="hidden"}),f.addEventListener("click",e=>{e.target===f&&S()}),document.addEventListener("keydown",e=>{"Escape"===e.key&&S()}),v.addEventListener("click",e=>{S()})});
//# sourceMappingURL=index.2fc550e4.js.map
