import"./modulepreload-polyfill.js";function n(t,e,r){return(1-r)*t+r*e}function i(){const t=document.querySelector(".preloader"),e=t.querySelector(".preloader__progress"),r=document.querySelectorAll("video"),l=r.length;let o=0;r.forEach((s,h)=>{switch(s.tagName.toLowerCase()){case"video":const c=s.getAttribute("data-src");s.setAttribute("src",c),s.addEventListener("loadeddata",()=>{s.readyState>=3&&(o+=1,a(t,e,l,o))})}})}function a(t,e,r,l){const o=l/r*100;e.innerText=`${o}%`,o===100&&t.classList.add("preloader--loaded")}class d{constructor(){this.scrollElement=document.querySelector("[smooth-scroll]"),this.currentScrollPos=0,this.targetScrollPos=0,this.scrollEase=.1,this._initSmoothScroll(),this._update(),this._createPage()}_update(){this._smoothScroll(),this.frame=requestAnimationFrame(this._update.bind(this))}_createPage(){i()}_initSmoothScroll(){document.body.style.height=`${this.scrollElement.getBoundingClientRect().height}px`}_smoothScroll(){this.targetScrollPos=window.scrollY,this.currentScrollPos=n(this.currentScrollPos,this.targetScrollPos,this.scrollEase),this.currentScrollPos=parseFloat(this.currentScrollPos.toFixed(2));const e=`translate3d(0, ${this.currentScrollPos*-1}px, 0)`;this.scrollElement.style.transform=e}}new d;