let t;const e=document.querySelector(".support-list"),o=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"/src/images/support/save_the_children.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"/src/images/support/project_hope.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"/src/images/support/united24.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"/src/images/support/international_medical_corps.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"/src/images/support/medicins_sans_frontieres.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"/src/images/support/razom.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"/src/images/support/action_against_hunger.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"/src/images/support/world_vision.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"/src/images/support/serhiy_prytula_charity_foundation.png"}].map(function(t){return`<li class="support-item">
    <a href="${t.url}" class="support-link">
      <img src="${t.img}" alt="${t.title}" class="support-logo">
    </a>
  </li>`});e.innerHTML=o.join("");const i=document.querySelector(".hero-ul"),s=document.querySelector(".backdrop"),r=document.querySelector(".modal"),n=document.querySelector(".modal-shopping-close"),a=document.querySelector(".render-modal");function l(){s.classList.remove("active")}async function c(t){try{let e=`https://books-backend.p.goit.global/books/${t}`,o=await fetch(e);if(!o.ok)throw Error(`Error: ${o.status} ${o.statusText}`);let i=await o.json();return[i]}catch(t){console.error(t)}}async function u(e){try{a.innerHTML="";let o=await c(e);t=o[0]._id,function(t){let e=t.map(t=>`
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
          ${t.description}
          </p>
          <ul class="shop-list">
            <li>
              <a href="${t.buy_links[0].url}">
                <img src="./images/amazon.png" alt="Amazon" />
              </a>
            </li>
            <li>
              <a href="${t.buy_links[1].url}">
                <img src="./images/book.png" alt="Apple Books" />
              </a>
            </li>
            <li>
              <a href="${t.buy_links[4].url}">
                <img src="./images/book-block.png" alt="Bookshop" />
              </a>
            </li>
          </ul>
        </div>
      </div>
        `).join("");a.insertAdjacentHTML("beforeend",e)}(o),function(t){let e=JSON.parse(localStorage.getItem("savedBooks"));if(e.some(e=>e._id===t)){let e=`
      <button type="submit" class="button book">
        Remove from the shopping list
      </button>
      <p class="congratulation">
        Сongratulations! You have added the book to the shopping list. To delete,
        press the button “Remove from the shopping list”.
      </p>
    `;a.insertAdjacentHTML("beforeend",e);let o=document.querySelector(".button.book");o.addEventListener("click",e=>{(function(t){let e=JSON.parse(localStorage.getItem("savedBooks")),o=e.findIndex(e=>e._id===t);-1!==o&&e.splice(o,1),localStorage.setItem("savedBooks",JSON.stringify(e))})(t),l()})}else{let e=`
      <button type="submit" class="button book">
        Add to shopping list
      </button>
    `;a.insertAdjacentHTML("beforeend",e);let o=document.querySelector(".button.book");o.addEventListener("click",e=>{p(t),l()})}}(t)}catch(t){console.error(t)}}async function p(t){try{let e=await c(t),{_id:o,book_image:i,title:s,list_name:r,description:n,author:a,buy_links:l}=e[0],u=JSON.parse(localStorage.getItem("savedBooks"))||[];u.push({_id:o,book_image:i,title:s,list_name:r,description:n,author:a,buy_links:l}),localStorage.setItem("savedBooks",JSON.stringify(u))}catch(t){console.error(t)}}window.addEventListener("load",function(){i.addEventListener("click",t=>{u("643282b1e85766588626a080"),s.classList.add("active"),r.classList.add("active")}),s.addEventListener("click",t=>{t.target===s&&l()}),document.addEventListener("keydown",t=>{"Escape"===t.key&&l()}),n.addEventListener("click",t=>{l()})});
//# sourceMappingURL=index.69772d84.js.map
