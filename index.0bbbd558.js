let t;const e=document.querySelector(".support-list"),o=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"../src/images/support/save_the_children.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"../src/images/support/project_hope.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"../src/images/support/united24.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"../src/images/support/international_medical_corps.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"../src/images/support/medicins_sans_frontieres.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"./images/support/razom.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"../src/images/support/action_against_hunger.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"../images/support/world_vision.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"../images/support/serhiy_prytula_charity_foundation.png"}].map(function(t){return`<li class="support-item">
  <img src="${t.img}" alt="${t.title}" class="support-logo" data-url="${t.url}" height="32px">
  </li>`});e.innerHTML=o.join("");const i=document.querySelectorAll(".support-logo");i.forEach(function(t){t.addEventListener("click",function(){let t=this.getAttribute("data-url");window.open(t,"_blank")})});const s=document.querySelector(".support"),n=document.querySelector(".see-more");n.addEventListener("click",function(){s.classList.toggle("expanded")});const r=document.querySelector(".hero-ul"),a=document.querySelector(".backdrop"),l=document.querySelector(".modal"),c=document.querySelector(".modal-shopping-close"),u=document.querySelector(".render-modal");function d(){a.classList.remove("active"),l.classList.remove("active"),document.body.style.overflow="auto"}async function p(t){try{let e=`https://books-backend.p.goit.global/books/${t}`,o=await fetch(e);if(!o.ok)throw Error(`Error: ${o.status} ${o.statusText}`);let i=await o.json();return[i]}catch(t){console.error(t)}}async function g(e){try{u.innerHTML="";let o=await p(e);t=o[0]._id,function(t){let e=t.map(t=>`
        <div class="card-modal" id="${t._id}">
        <img
          class="modal-img"
          alt="${t.title}"
          src="${t.book_image}"
        />
  
        <div class="thumb-modal">
          <h2 class="book-title-in-modal">${t.title}</h2>
          <p class="subtitle-book">${t.author}</p>
          <p class="text book">
          ${t.description?t.description:"Sorry, but this book does not have an accessible description. Try reading it on the website of one of the shops"}
          </p>
          <ul class="shop-list">
            <li>
              <a href="${t.buy_links[0].url}">
                <img src="/images/amazon.png" alt="Amazon" />
              </a>
            </li>
            <li>
              <a href="${t.buy_links[1].url}">
                <img src="/images/book.png" alt="Apple Books" />
              </a>
            </li>
            <li>
              <a href="${t.buy_links[4].url}">
                <img src="/images/book-block.png" alt="Bookshop" />
              </a>
            </li>
          </ul>
        </div>
      </div>
        `).join("");u.insertAdjacentHTML("beforeend",e)}(o),function(t){let e=JSON.parse(localStorage.getItem("savedBooks"));if(e.some(e=>e._id===t)){let e=`
      <button type="submit" class="button book">
        Remove from the shopping list
      </button>
      <p class="congratulation">
        Сongratulations! You have added the book to the shopping list. To delete,
        press the button “Remove from the shopping list”.
      </p>
    `;u.insertAdjacentHTML("beforeend",e);let o=document.querySelector(".button.book");o.addEventListener("click",e=>{(function(t){let e=JSON.parse(localStorage.getItem("savedBooks")),o=e.findIndex(e=>e._id===t);-1!==o&&e.splice(o,1),localStorage.setItem("savedBooks",JSON.stringify(e))})(t),d()})}else{let e=`
      <button type="submit" class="button book">
        Add to shopping list
      </button>
    `;u.insertAdjacentHTML("beforeend",e);let o=document.querySelector(".button.book");o.addEventListener("click",e=>{m(t),d()})}}(t)}catch(t){console.error(t)}}async function m(t){try{let e=await p(t),{_id:o,book_image:i,title:s,list_name:n,description:r,author:a,buy_links:l}=e[0],c=JSON.parse(localStorage.getItem("savedBooks"))||[];c.push({_id:o,book_image:i,title:s,list_name:n,description:r,author:a,buy_links:l}),localStorage.setItem("savedBooks",JSON.stringify(c))}catch(t){console.error(t)}}!function(){let t=JSON.parse(localStorage.getItem("savedBooks"));t||localStorage.setItem("savedBooks",JSON.stringify([]))}(),window.addEventListener("load",function(){r.addEventListener("click",t=>{g("643282b1e85766588626a080"),a.classList.add("active"),l.classList.add("active"),document.body.style.overflow="hidden"}),a.addEventListener("click",t=>{t.target===a&&d()}),document.addEventListener("keydown",t=>{"Escape"===t.key&&d()}),c.addEventListener("click",t=>{d()})});
//# sourceMappingURL=index.0bbbd558.js.map
