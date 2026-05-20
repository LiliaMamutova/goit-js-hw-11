import{S as f,a as h,i as m}from"./assets/vendor-Bxsdduue.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const c=document.querySelector(".gallery"),n=document.querySelector(".loader"),p=new f(".gallery a",{captionsData:"alt",captionsSelector:"img",captionDelay:450,overlayOpacity:.5});function y(r){return r.map(({id:i,webformatURL:a,largeImageURL:o,tags:e,likes:t,views:s,comments:d,downloads:u})=>` <li class="gallery-link" data-id="${i}">
         <a class="gallery-image" href="${o}" >
            <img class="gallery-img-item" src="${a}" alt="${e}" /></a>

            <div class="gallery-info">
              <div class="gallery-info-item">
                <h2 class="title-extra">Likes</h2>
                <p class="title-qty">${t}</p>
              </div>

              <div class="gallery-info-item">
                <h2 class="title-extra">Views</h2>
                <p class="title-qty">${s}</p>
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
      </li>`).join("")}function g(r){c.innerHTML="",c.insertAdjacentHTML("beforeend",y(r)),p.refresh()}function v(){n&&n.classList.remove("hidden")}function L(){n&&n.classList.add("hidden")}const b="55632316-73dae94149f02da0b6b69c83b";function S(r){const i=new URLSearchParams({key:b,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return h.get(`https://pixabay.com/api/?${i}`).then(a=>a.data)}const q=document.querySelector(".form");q.addEventListener("submit",w);function w(r){r.preventDefault();const i=r.target.elements[0].value.trim();if(!i){l("Please enter a search word");return}v(),S(i).then(a=>{a.hits.length>0?g(a.hits):l("Sorry, there are no images matching your search query. Please try again!")}).catch(a=>{l("Something bad happened, try again")}).finally(()=>{L()}),r.target.elements[0].value=""}function l(r){return m.show({message:r,color:"red",position:"topRight"})}
//# sourceMappingURL=index.js.map
