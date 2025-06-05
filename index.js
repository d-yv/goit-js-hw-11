import{a as f,S as p,i as o}from"./assets/vendor-frHSA4Lh.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function g(a){return f.get("https://pixabay.com/api/",{params:{key:"50483673-3addba2370166e44fbbdc4d02",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data).catch(r=>(console.error(r),null))}const c=document.querySelector(".loader"),u=document.querySelector(".gallery");function y(a){const i=a.hits.map(({webformatURL:r,largeImageURL:l,tags:e,likes:t,views:s,comments:m,downloads:d})=>`<li class="gallery-item">
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
            </li>`).join("");u.innerHTML=i,new p(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"}).refresh()}function h(){u.innerHTML=""}function b(){c.style.display="block"}function n(){c.style.display="none"}document.querySelector(".search-form").addEventListener("submit",async a=>{a.preventDefault();let i="";const r={title:"",titleColor:"red",position:"topRight"},l=a.target.elements["search-text"].value.trim();if(l!=""){i=l,h(),b();const e=await g(i);e.hits.length!=0?(y(e),n()):(r.title="Sorry, there are no images matching your search query. Please try again!",o.show(r),n())}else r.title="Form field must be filled in !",o.show(r);a.target.reset()});
//# sourceMappingURL=index.js.map
