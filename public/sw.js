if(!self.define){let e,s={};const c=(c,n)=>(c=new URL(c+".js",n).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>c(e,i),u={module:{uri:i},exports:t,require:r};s[i]=Promise.all(n.map((e=>u[e]||r(e)))).then((e=>(a(...e),t)))}}define(["./workbox-fb87826f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"97399f158cae4b111765a20837cdbd52"},{url:"/_next/static/X9c-Jk3scePeRb_YCu2UC/_buildManifest.js",revision:"d8963c6657102db1f2fa51dc81a43a6f"},{url:"/_next/static/X9c-Jk3scePeRb_YCu2UC/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0e5ce63c-544ba371e6058b32.js",revision:"X9c-Jk3scePeRb_YCu2UC"},{url:"/_next/static/chunks/150-61826c39de96397e.js",revision:"X9c-Jk3scePeRb_YCu2UC"},{url:"/_next/static/chunks/166-c92d6d60764a35d1.js",revision:"X9c-Jk3scePeRb_YCu2UC"},{url:"/_next/static/chunks/187-8603658750afcb8b.js",revision:"X9c-Jk3scePeRb_YCu2UC"},{url:"/_next/static/chunks/215-37b20a033576545e.js",revision:"X9c-Jk3scePeRb_YCu2UC"},{url:"/_next/static/chunks/286-df5473f98db9569e.js",revision:"X9c-Jk3scePeRb_YCu2UC"},{url:"/_next/static/chunks/334-118420b46f1a1646.js",revision:"X9c-Jk3scePeRb_YCu2UC"},{url:"/_next/static/chunks/3d47b92a-a26eba70cdacf4bb.js",revision:"X9c-Jk3scePeRb_YCu2UC"},{url:"/_next/static/chunks/479ba886-9cfb1fa876b71543.js",revision:"X9c-Jk3scePeRb_YCu2UC"},{url:"/_next/static/chunks/539-85ef37a1a15ed0b4.js",revision:"X9c-Jk3scePeRb_YCu2UC"},{url:"/_next/static/chunks/5a799df0-3113ab4118d9ffc9.js",revision:"X9c-Jk3scePeRb_YCu2UC"},{url:"/_next/static/chunks/602-a2a7f3d80af5b34a.js",revision:"X9c-Jk3scePeRb_YCu2UC"},{url:"/_next/static/chunks/69-71bddaee0d37f4f6.js",revision:"X9c-Jk3scePeRb_YCu2UC"},{url:"/_next/static/chunks/703-047548543f8ae7f0.js",revision:"X9c-Jk3scePeRb_YCu2UC"},{url:"/_next/static/chunks/792-358252e3621bcd1a.js",revision:"X9c-Jk3scePeRb_YCu2UC"},{url:"/_next/static/chunks/828-9251f44b5ebe3c95.js",revision:"X9c-Jk3scePeRb_YCu2UC"},{url:"/_next/static/chunks/862-9157f57fb731e4c6.js",revision:"X9c-Jk3scePeRb_YCu2UC"},{url:"/_next/static/chunks/app/%5Bframe%5D/page-fa140bcdb15b56d4.js",revision:"X9c-Jk3scePeRb_YCu2UC"},{url:"/_next/static/chunks/app/ContactUs/page-e74a6fffb022abf9.js",revision:"X9c-Jk3scePeRb_YCu2UC"},{url:"/_next/static/chunks/app/_not-found-9e6899bfd1e2adfa.js",revision:"X9c-Jk3scePeRb_YCu2UC"},{url:"/_next/static/chunks/app/buyProduct/page-c370a4fbd024ff4a.js",revision:"X9c-Jk3scePeRb_YCu2UC"},{url:"/_next/static/chunks/app/category/page-6289eedfca937a40.js",revision:"X9c-Jk3scePeRb_YCu2UC"},{url:"/_next/static/chunks/app/create-item/page-8997a1bd8a44be71.js",revision:"X9c-Jk3scePeRb_YCu2UC"},{url:"/_next/static/chunks/app/exhibition/id/page-5580e8ff26b5894b.js",revision:"X9c-Jk3scePeRb_YCu2UC"},{url:"/_next/static/chunks/app/exhibition/page-1dc9eee58edb7361.js",revision:"X9c-Jk3scePeRb_YCu2UC"},{url:"/_next/static/chunks/app/layout-892d181a576c1e3e.js",revision:"X9c-Jk3scePeRb_YCu2UC"},{url:"/_next/static/chunks/app/menu/page-7d8fee61093e451f.js",revision:"X9c-Jk3scePeRb_YCu2UC"},{url:"/_next/static/chunks/app/page-540bdc81e710da00.js",revision:"X9c-Jk3scePeRb_YCu2UC"},{url:"/_next/static/chunks/app/paymentsuccess/page-58c88797acaeff32.js",revision:"X9c-Jk3scePeRb_YCu2UC"},{url:"/_next/static/chunks/app/tickets/%5B...ticket%5D/page-5244331a5204c03a.js",revision:"X9c-Jk3scePeRb_YCu2UC"},{url:"/_next/static/chunks/app/trendy/page-29735cc2cfa8a7e0.js",revision:"X9c-Jk3scePeRb_YCu2UC"},{url:"/_next/static/chunks/bc9e92e6-753f263492131be6.js",revision:"X9c-Jk3scePeRb_YCu2UC"},{url:"/_next/static/chunks/dc112a36-b0e438d22936fbf5.js",revision:"X9c-Jk3scePeRb_YCu2UC"},{url:"/_next/static/chunks/e34aaff9-cc42186550803244.js",revision:"X9c-Jk3scePeRb_YCu2UC"},{url:"/_next/static/chunks/fd9d1056-1b4b1c6892dbce95.js",revision:"X9c-Jk3scePeRb_YCu2UC"},{url:"/_next/static/chunks/framework-b370f160bb96059c.js",revision:"X9c-Jk3scePeRb_YCu2UC"},{url:"/_next/static/chunks/main-6e24f955fa94ef48.js",revision:"X9c-Jk3scePeRb_YCu2UC"},{url:"/_next/static/chunks/main-app-4e1574de87dbaad0.js",revision:"X9c-Jk3scePeRb_YCu2UC"},{url:"/_next/static/chunks/pages/_app-d21e88acd55d90f1.js",revision:"X9c-Jk3scePeRb_YCu2UC"},{url:"/_next/static/chunks/pages/_error-d6107f1aac0c574c.js",revision:"X9c-Jk3scePeRb_YCu2UC"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-549b9e4f1be5228e.js",revision:"X9c-Jk3scePeRb_YCu2UC"},{url:"/_next/static/css/3867448c2b7c162d.css",revision:"3867448c2b7c162d"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/anime.bde1704c.jpg",revision:"10ba4b0518ca1fee8c91c6d7087de160"},{url:"/_next/static/media/bollywood.94802691.jpg",revision:"88d733504f53636fe89712cb287d1bed"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/emptyCart.96d27f4b.svg",revision:"840927a478f9d9f9e9f689935a8a9404"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/media/nonfound.d739a57c.svg",revision:"1d307f4eb0a9595f6988b88119359a58"},{url:"/_next/static/media/roll models.c557c3c2.webp",revision:"7c6af80159d82ee6606a670ee22fdcd3"},{url:"/icons/android-chrome-192x192.png",revision:"62ad98ff0b7e9f737e3423204126225e"},{url:"/icons/android-chrome-384x384.png",revision:"52a1af0ed5e5b01eeded7fc244178653"},{url:"/icons/icon-512x512.png",revision:"a905d732285a3040cb6c2967844be681"},{url:"/manifest.json",revision:"53a9cd45468dcb877eee12fe45703c81"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/swe-worker-development.js",revision:"2317afc06ee70dae7a5ca090a6830494"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
