import{a as p,S as f,i as o}from"./assets/vendor-frHSA4Lh.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();async function g(i){const a="https://pixabay.com/api/";try{return(await p.get(a,{params:{key:"50483673-3addba2370166e44fbbdc4d02",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(r){return console.error(r),null}}const c=document.querySelector(".loader"),u=document.querySelector(".gallery");function y(i){const a=i.hits.map(({webformatURL:r,largeImageURL:l,tags:e,likes:t,views:s,comments:m,downloads:d})=>`<li class="gallery-item">
              <a class="gallery-link" href=${l}>
                <img
                  src=${r}
                  alt=${e}
                  width="360"
                  height="200"
                />
                <ul class="markup-image">
                  <ul>
                    <li class = "markup-image-text">likes</li>
                    <li class = "markup-image-value">${t}</li>      
                  </ul>
                  <ul>
                    <li class = "markup-image-text">views</li>
                    <li class = "markup-image-value">${s}</li>      
                  </ul>
                  <ul>
                    <li class = "markup-image-text">comments</li>
                    <li class = "markup-image-value">${m}</li>      
                  </ul>
                  <ul>
                    <li class = "markup-image-text">downloads</li>
                    <li class = "markup-image-value">${d}</li>      
                  </ul>
                </ul>
              </a>
            </li>`).join("");u.innerHTML=a,new f(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"}).refresh()}function h(){u.innerHTML=""}function b(){c.style.display="block"}function n(){c.style.display="none"}document.querySelector(".search-form").addEventListener("submit",async i=>{i.preventDefault();let a="";const r={title:"",titleColor:"red",position:"topRight"},l=i.target.elements["search-text"].value.trim();if(l!=""){a=l,h(),b();const e=await g(a);e.hits.length!=0?(y(e),n()):(r.title="Sorry, there are no images matching your search query. Please try again!",o.show(r),n())}else r.title="Form field must be filled in !",o.show(r);i.target.reset()});
//# sourceMappingURL=index.js.map
