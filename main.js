(()=>{"use strict";function e(e){const t=document.createElement("div");t.classList.add("shoes-details");const n=document.createElement("h3");n.classList.add("shoes-name"),n.textContent=e;const a=document.createElement("img");return a.classList.add("shoes-img"),a.src=`/dist/images/shoes/${e.toLowerCase()}.JPG`,t.appendChild(n),t.appendChild(a),t}const t=(()=>{const e=document.querySelector("#content"),t=document.createElement("div");return t.id="container",e.appendChild(t),{content:e,container:t}})();function n(){const n=document.createElement("section"),d=document.createElement("div");n.classList.add("navbar"),t.content.appendChild(n),function(e){const n=document.createElement("div"),d=document.createElement("a");d.classList.add("navLink"),d.id="logo",d.textContent="adidas",d.href="#",e.appendChild(n),n.appendChild(d),d.addEventListener("click",(()=>{const e=document.getElementById("adidas");t.container.contains(e)||a()}))}(n),function(n){const a=document.createElement("a");a.classList.add("navLink"),a.textContent="Shoes",a.href="#",n.appendChild(a),a.addEventListener("click",(()=>{t.container.innerHTML.includes("shoes")||(t.container.innerHTML="",function(){const n=document.createElement("div");n.classList.add("shoes"),n.appendChild(e("SUPERSTAR")),n.appendChild(e("ZX-4000-4D-SHOES")),n.appendChild(e("4D-FUSIO-SHOES")),t.container.appendChild(n)}())}))}(d),function(e){const n=document.createElement("a");n.classList.add("navLink"),n.textContent="Contact",n.href="#",e.appendChild(n),n.addEventListener("click",(()=>{t.container.innerHTML.includes("contact")||(t.container.innerHTML="",function(){const e=document.createElement("div"),n=document.createElement("a"),a=document.createElement("h2"),d=document.createElement("p"),o=document.createElement("p"),c=document.createElement("p");e.classList.add("contact-info"),n.classList.add("fb-head"),n.href="https://www.facebook.com/adidasPH/",a.textContent="FACEBOOK:",d.textContent="Use the private message option to contact our support team.",o.textContent="Mon to Friday (excluding Public Holidays): 9am to 9pm.",c.textContent="Saturday: 9am to 6pm.",t.container.appendChild(e),e.appendChild(n),n.appendChild(a),e.appendChild(d),e.appendChild(o),e.appendChild(c)}())}))}(d),function(e){const n=document.createElement("a");n.classList.add("navLink"),n.textContent="About",n.href="#",e.appendChild(n),n.addEventListener("click",(()=>{t.container.innerHTML.includes("about")||(t.container.textContent="",function(){const e=document.createElement("div"),n=document.createElement("h2"),a=document.createElement("p");e.classList.add("about"),n.textContent="ADIDAS AT A GLANCE",a.textContent="adidas has its roots in Germany but we are a truly global company. Around the world we employ over 62,000 people. At our global HQ in Herzogenaurach, Germany, our teams are made up of people from over 100 different nations. These numbers alone can easily suggest that adidas is quite a large and also multifaceted organization. True. But we keep things simple, lean, and fast. And we will use this approach now to give an overview of what our company is all about.",t.container.appendChild(e),e.appendChild(n),e.appendChild(a)}())}))}(d),n.appendChild(d)}function a(){t.container.innerHTML="";const e=document.createElement("h1");e.id="adidas",e.textContent="adidas.",t.container.appendChild(e)}n(),function(){const e=document.createElement("img");e.id="background",e.src="/dist/images/Background.JPG",t.content.appendChild(e)}(),function(){const e=document.createElement("div");e.classList.add("socialsContainer"),function(e){const t=document.createElement("a");t.textContent="FB",t.href="https://www.facebook.com/adidasPH/",t.id="fb",t.classList.add("socials"),e.appendChild(t)}(e),function(e){const t=document.createElement("a");t.textContent="TW",t.href="https://twitter.com/adidas",t.id="tw",t.classList.add("socials"),e.appendChild(t)}(e),function(e){const t=document.createElement("a");t.textContent="IG",t.href="https://www.instagram.com/adidas/",t.id="ig",t.classList.add("socials"),e.appendChild(t)}(e),t.content.appendChild(e)}(),a()})();