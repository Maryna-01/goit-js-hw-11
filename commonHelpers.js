import{i as l,S as u}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const f="45110069-9beca970d71a92a84c606c316",d="https://pixabay.com/api/";async function p(n,t=1,r=12){const s=`${d}?key=${f}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${r}`;try{const e=await fetch(s);if(!e.ok)throw new Error("Network response was not ok");return(await e.json()).hits}catch(e){throw console.error("Fetch error: ",e),e}}function y(n){const t=document.querySelector(".gallery");t.innerHTML=n.map(r=>`
        <a href="${r.largeImageURL}" class="gallery-item">
            <img src="${r.webformatURL}" alt="${r.tags}" />
            <div class="info">
                <p><strong>Likes:</strong> ${r.likes}</p>
                <p><strong>Views:</strong> ${r.views}</p>
                <p><strong>Comments:</strong> ${r.comments}</p>
                <p><strong>Downloads:</strong> ${r.downloads}</p>
            </div>
        </a>
        `).join("")}function i(n,t="info"){l[t]({title:n,position:"topRight"})}function m(){const n=document.querySelector(".gallery");n.innerHTML=""}const g=document.querySelector("#search-form"),c=document.querySelector(".loader");let h;g.addEventListener("submit",async n=>{n.preventDefault();const t=n.target.elements.query.value.trim();if(!t){i("Please enter a search query!","error");return}m(),c.style.display="block";try{const r=await p(t);r.length===0?i("Sorry, there are no images matching your search query. Please try again!","error"):(y(r),h=new u(".gallery a"))}catch{i("An error occurred while fetching images!","error")}finally{c.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
