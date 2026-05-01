import{S as f,a as m,i as h}from"./assets/vendor-Bxsdduue.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const n=document.querySelector(".gallery"),y=new f(".gallery a",{captionsData:"alt",captionsSelector:"img",captionDelay:450,overlayOpacity:.5});function p(r){const a=r.map(({id:i,webformatURL:s,largeImageURL:e,tags:t,likes:o,views:c,comments:d,downloads:u})=>` <li class="gallery-link" data-id="${i}">
         <a class="gallery-image" href="${e}" >
            <img class="gallery-img-item" src="${s}" alt="${t}" /></a>

            <div class="gallery-info">
              <div class="gallery-info-item">
                <h2 class="title-extra">Likes</h2>
                <p class="title-qty">${o}</p>
              </div>

              <div class="gallery-info-item">
                <h2 class="title-extra">Views</h2>
                <p class="title-qty">${c}</p>
              </div>

              <div class="gallery-info-item">
                <h2 class="title-extra">Comments</h2>
                <p class="title-qty">${d}</p>
              </div>

              <div class="gallery-info-item">
                <h2 class="title-extra">Downloads</h2>
                <p class="title-qty">${u}</p>
              </div>
           </div>
      </li>`).join("");n.insertAdjacentHTML("beforeend",a),y.refresh()}function g(){n.innerHTML=""}function v(){document.querySelector(".loader").classList.remove("hidden")}function L(){document.querySelector(".loader").classList.add("hidden")}const b="55632316-73dae94149f02da0b6b69c83b";function S(r){const a=new URLSearchParams({key:b,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return m.get(`https://pixabay.com/api/?${a}`).then(i=>i.data)}const q=document.querySelector(".form");q.addEventListener("submit",w);function w(r){r.preventDefault();const a=r.target.elements[0].value.trim();if(!a){l("Please enter a search word");return}g(),v(),S(a).then(i=>{i.hits.length>0?p(i.hits):l("Sorry, there are no images matching your search query. Please try again!")}).catch(i=>{l("Something bad happened, try again")}).finally(()=>{L()}),r.target.elements[0].value=""}function l(r){return h.show({message:r,color:"red",position:"topRight"})}
//# sourceMappingURL=index.js.map
