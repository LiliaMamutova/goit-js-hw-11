import{S as f,a as m,i as y}from"./assets/vendor-DWAYba1l.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const n=document.querySelector(".gallery"),h=new f(".gallery a",{captionsData:"alt",captionsSelector:"img",captionDelay:450,overlayOpacity:.5});function g(a){const r=a.map(({id:i,webformatURL:s,largeImageURL:e,tags:t,likes:o,views:c,comments:d,downloads:u})=>` <li class="gallery-link" data-id="${i}">
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
      </li>`).join("");n.insertAdjacentHTML("beforeend",r),h.refresh()}function p(){n.innerHTML=""}function v(){document.querySelector(".loader").classList.remove("hidden")}function L(){document.querySelector(".loader").classList.add("hidden")}const b="55632316-73dae94149f02da0b6b69c83b";function S(a){const r=new URLSearchParams({key:b,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0});m.get(`https://pixabay.com/api/?${r}`).then(i=>{console.log(i.data),i.data.hits.length>0?g(i.data.hits):l("Sorry, there are no images matching your search query. Please try again!")}).catch(i=>{console.log(i),l("Something bad happened, try again")}).finally(()=>{L()})}function l(a){return y.show({message:a,color:"red",position:"topRight"})}const q=document.querySelector(".form");q.addEventListener("submit",$);function $(a){a.preventDefault(),p(),v();const r=a.target.elements[0].value;S(r),a.target.elements[0].value=""}
//# sourceMappingURL=index.js.map
