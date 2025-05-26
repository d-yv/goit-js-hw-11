import{a as l,S as n,i as c}from"./assets/vendor-frHSA4Lh.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function u(o){const r="https://pixabay.com/api/";try{const s=await l.get(r,{params:{key:"50483673-3addba2370166e44fbbdc4d02",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}});return console.log("api",s.data),s.data}catch(s){return console.error(s),null}}function m(o){console.log("images",o);const r=document.querySelector(".gallery"),s=o.hits.map(({webformatURL:a,largeImageURL:e,tags:t,likes:i,views:d,comments:f,downloads:g})=>`<li class="gallery-item">
    <a class="gallery-link" href=${e}>
      <img
        class="gallery-image"
        src=${a}
        alt=${t}
      />
    </a>
  </li>`).join("");r.innerHTML=s,new n(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"})}document.querySelector(".search-form").addEventListener("submit",async o=>{o.preventDefault();let r="";const s={title:"Form field must be filled in !",titleColor:"red",position:"topRight"};o.target.elements["search-text"].value.trim()!=""?r=o.target.elements["search-text"].value.trim():c.show(s),o.target.reset(),console.log(r);const a=await u(r);console.log("main",a),m(a)});
//# sourceMappingURL=index.js.map
