(this.webpackJsonp=this.webpackJsonp||[]).push([[12,17,22,25],{17:function(t,e,n){"use strict";n.r(e),n.d(e,"ripple",(function(){return l}));var i=n(5),s=n(54),a=n(1),o=n(15);let r=0;function l(t,e=(()=>Promise.resolve()),n=null,l=!1){if(t.querySelector(".c-ripple"))return;t.classList.add("rp");let c=document.createElement("div");c.classList.add("c-ripple");let u;t.classList.contains("rp-square")&&c.classList.add("is-square"),t[l?"prepend":"append"](c);const d=(t,i)=>{const o=Date.now(),l=document.createElement("div"),d=r++,h=1e3*+window.getComputedStyle(c).getPropertyValue("--ripple-duration").replace("s","");u=()=>{let t=Date.now()-o;const e=()=>{s.a.mutate(()=>{l.remove()}),n&&n(d)};if(t<h){let n=Math.max(h-t,h/2);setTimeout(()=>l.classList.add("hiding"),Math.max(n-h/2,0)),setTimeout(e,n)}else l.classList.add("hiding"),setTimeout(e,h/2);a.IS_TOUCH_SUPPORTED||window.removeEventListener("contextmenu",u),u=null,p=!1},e&&e(d),window.requestAnimationFrame(()=>{const e=c.getBoundingClientRect();l.classList.add("c-ripple__circle");const n=t-e.left,s=i-e.top,a=Math.sqrt(Math.pow(Math.abs(s-e.height/2)+e.height/2,2)+Math.pow(Math.abs(n-e.width/2)+e.width/2,2)),o=n-a/2,r=s-a/2;l.style.width=l.style.height=a+"px",l.style.left=o+"px",l.style.top=r+"px",c.append(l)})},h=e=>e.target!==t&&(["BUTTON","A"].includes(e.target.tagName)||Object(i.a)(e.target,"c-ripple")!==c);let p=!1;if(a.IS_TOUCH_SUPPORTED){let e=()=>{u&&u()};t.addEventListener("touchstart",n=>{if(!o.default.settings.animationsEnabled)return;if(n.touches.length>1||p||h(n))return;p=!0;let{clientX:i,clientY:s}=n.touches[0];d(i,s),t.addEventListener("touchend",e,{once:!0}),window.addEventListener("touchmove",n=>{n.cancelBubble=!0,n.stopPropagation(),e(),t.removeEventListener("touchend",e)},{once:!0})},{passive:!0})}else t.addEventListener("mousedown",e=>{if(![0,2].includes(e.button))return;if(!o.default.settings.animationsEnabled)return;if("0"===t.dataset.ripple||h(e))return;if(p)return void(p=!1);let{clientX:n,clientY:i}=e;d(n,i),window.addEventListener("mouseup",u,{once:!0,passive:!0}),window.addEventListener("contextmenu",u,{once:!0,passive:!0})},{passive:!0})}},21:function(t,e,n){"use strict";n.r(e);var i=n(34),s=n(36),a=n(16),o=n(27),r=n(38),l=n(30);const c=new class{getState(){return l.a.invokeApi("account.getPassword").then(t=>t)}updateSettings(t={}){return this.getState().then(e=>{let n,i;const s={password:null,new_settings:{_:"account.passwordInputSettings",hint:t.hint,email:t.email}};n=t.currentPassword?l.a.invokeCrypto("computeSRP",t.currentPassword,e,!1):Promise.resolve({_:"inputCheckPasswordEmpty"});const a=e.new_algo,o=new Uint8Array(a.salt1.length+32);return o.randomize(),o.set(a.salt1,0),a.salt1=o,i=t.newPassword?l.a.invokeCrypto("computeSRP",t.newPassword,e,!0):Promise.resolve(new Uint8Array),Promise.all([n,i]).then(t=>(s.password=t[0],s.new_settings.new_algo=a,s.new_settings.new_password_hash=t[1],l.a.invokeApi("account.updatePasswordSettings",s)))})}check(t,e,n={}){return l.a.invokeCrypto("computeSRP",t,e,!1).then(t=>l.a.invokeApi("auth.checkPassword",{password:t},n).then(t=>("auth.authorization"===t._&&(r.a.saveApiUser(t.user),l.a.setUserAuth(t.user.id)),t)))}confirmPasswordEmail(t){return l.a.invokeApi("account.confirmPasswordEmail",{code:t})}resendPasswordEmail(){return l.a.invokeApi("account.resendPasswordEmail")}cancelPasswordEmail(){return l.a.invokeApi("account.cancelPasswordEmail")}};o.a.passwordManager=c;var u=c,d=n(56),h=n(32),p=n(4),m=n(40);class g extends m.b{constructor(t={}){super(Object.assign({plainText:!0},t)),this.passwordVisible=!1,this.onVisibilityClick=t=>{Object(p.a)(t),this.passwordVisible=!this.passwordVisible,this.toggleVisible.classList.toggle("eye-hidden",this.passwordVisible),this.input.type=this.passwordVisible?"text":"password",this.onVisibilityClickAdditional&&this.onVisibilityClickAdditional()};const e=this.input;e.type="password",e.setAttribute("required",""),e.autocomplete="off";const n=document.createElement("input");n.classList.add("stealthy"),n.tabIndex=-1,n.type="password",e.parentElement.prepend(n),e.parentElement.insertBefore(n.cloneNode(),e.nextSibling);const i=this.toggleVisible=document.createElement("span");i.classList.add("toggle-visible","tgico"),this.container.classList.add("input-field-password"),this.container.append(i),i.addEventListener("click",this.onVisibilityClick),i.addEventListener("touchend",this.onVisibilityClick)}}var v=n(48);class f{constructor(t,e){this.passwordInputField=t,this.size=e,this.needFrame=0,this.container=document.createElement("div"),this.container.classList.add("media-sticker-wrapper")}load(){return this.loadPromise?this.loadPromise:this.loadPromise=v.b.loadAnimationFromURL({container:this.container,loop:!1,autoplay:!1,width:this.size,height:this.size,noCache:!0},"assets/img/TwoFactorSetupMonkeyPeek.tgs").then(t=>(this.animation=t,this.animation.addEventListener("enterFrame",t=>{(1===this.animation.direction&&t>=this.needFrame||-1===this.animation.direction&&t<=this.needFrame)&&(this.animation.setSpeed(1),this.animation.pause())}),this.passwordInputField.onVisibilityClickAdditional=()=>{this.passwordInputField.passwordVisible?(this.animation.setDirection(1),this.animation.curFrame=0,this.needFrame=16,this.animation.play()):(this.animation.setDirection(-1),this.animation.curFrame=16,this.needFrame=0,this.animation.play())},v.b.waitForFirstFrame(t)))}remove(){this.animation&&this.animation.remove()}}var b=n(29),w=n(14),y=n(82),E=n(28),L=n(100),k=n(33),S=n(61);let T;const O=new d.a("page-password",!0,()=>{const t=new y.a({className:"page-password",withInputWrapper:!0,titleLangKey:"Login.Password.Title",subtitleLangKey:"Login.Password.Subtitle"}),e=Object(h.a)("btn-primary btn-color-primary"),a=new w.default.IntlElement({key:"Login.Next"});e.append(a.element);const o=new g({label:"LoginPassword",name:"password"});let r;T=o.input,t.inputWrapper.append(o.container,e);let l,c=()=>(r||(r=window.setInterval(c,1e4)),u.getState().then(t=>{l=t,l.hint?Object(k.a)(o.label,Object(L.a)(b.b.wrapEmojiText(l.hint))):o.setLabel()}));const d=t=>{if(t&&Object(p.a)(t),!T.value.length)return void T.classList.add("error");const s=Object(S.a)([T,e],!0);let d=T.value;a.update({key:"PleaseWait"});const h=Object(i.f)(e);u.check(d,l).then(t=>{switch(t._){case"auth.authorization":clearInterval(r),n.e(5).then(n.bind(null,19)).then(t=>{t.default.mount()}),v&&v.remove();break;default:e.removeAttribute("disabled"),a.update({key:t._}),h.remove()}}).catch(t=>{s(),o.input.classList.add("error"),t.type,a.update({key:"PASSWORD_HASH_INVALID"}),T.select(),h.remove(),c()})};Object(E.b)(e,d),T.addEventListener("keypress",(function(t){if(this.classList.remove("error"),a.update({key:"Login.Next"}),"Enter"===t.key)return d()}));const m=s.b.isMobile?100:166,v=new f(o,m);return t.imageDiv.append(v.container),Promise.all([v.load(),c()])},null,()=>{T.focus(),a.default.pushToState("authState",{_:"authStatePassword"})});e.default=O},28:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return l}));var i=n(1),s=n(46);const a=i.IS_TOUCH_SUPPORTED?"mousedown":"click";function o(t,e,n={}){const i=n.listenerSetter?n.listenerSetter.add(t):t.addEventListener.bind(t);n.touchMouseDown=!0,i(a,e,n)}function r(t,e,n){t.removeEventListener(a,e,n)}function l(t){Object(s.a)(t,a)}},32:function(t,e,n){"use strict";var i=n(14),s=n(17);e.a=(t,e={})=>{const n=document.createElement(e.asDiv?"div":"button");return n.className=t+(e.icon?" tgico-"+e.icon:""),e.noRipple||(e.rippleSquare&&n.classList.add("rp-square"),Object(s.ripple)(n)),e.onlyMobile&&n.classList.add("only-handhelds"),e.disabled&&n.setAttribute("disabled","true"),e.text&&n.append(Object(i.i18n)(e.text)),n}},33:function(t,e,n){"use strict";function i(t,e){if("string"==typeof e)return void(t.innerHTML=e);const n=t.firstChild;n?t.lastChild===n?n.replaceWith(e):(t.textContent="",t.append(e)):t.append(e)}n.d(e,"a",(function(){return i}))},34:function(t,e,n){"use strict";n.d(e,"f",(function(){return d})),n.d(e,"g",(function(){return h})),n.d(e,"c",(function(){return g})),n.d(e,"d",(function(){return w})),n.d(e,"e",(function(){return y})),n.d(e,"b",(function(){return k})),n.d(e,"a",(function(){return S}));var i=n(27),s=n(4),a=n(28),o=n(36),r=n(1),l=n(0),c=n(15),u=n(43);function d(t,e=!1){const n='\n  <svg xmlns="http://www.w3.org/2000/svg" class="preloader-circular" viewBox="25 25 50 50">\n  <circle class="preloader-path" cx="50" cy="50" r="20" fill="none" stroke-miterlimit="10"/>\n  </svg>';if(e){const e=document.createElement("div");return e.classList.add("preloader"),e.innerHTML=n,t&&t.appendChild(e),e}return t.insertAdjacentHTML("beforeend",n),t.lastElementChild}function h(t,e="check"){return t.classList.remove("tgico-"+e),t.disabled=!0,d(t),()=>{t.innerHTML="",t.classList.add("tgico-"+e),t.removeAttribute("disabled")}}i.a.putPreloader=d;let p=t=>{let e=v.getBoundingClientRect(),{clientX:n,clientY:i}=t,s=n>=e.right?n-e.right:e.left-n,a=i>=e.bottom?i-e.bottom:e.top-i;(s>=100||a>=100)&&g()};const m=t=>{g()},g=()=>{v&&(v.classList.remove("active"),v.parentElement.classList.remove("menu-open"),b&&b.remove(),v=null,c.default.dispatchEvent("context_menu_toggle",!1)),f&&(f(),f=null),r.IS_TOUCH_SUPPORTED||(window.removeEventListener("mousemove",p),window.removeEventListener("contextmenu",m)),document.removeEventListener(a.a,m),l.IS_MOBILE_SAFARI||u.a.removeByType("menu")};window.addEventListener("resize",()=>{v&&g()});let v=null,f=null,b=null;function w(t,e){g(),l.IS_MOBILE_SAFARI||u.a.pushItem({type:"menu",onPop:t=>{g()}}),v=t,v.classList.add("active"),v.parentElement.classList.add("menu-open"),b||(b=document.createElement("div"),b.classList.add("btn-menu-overlay"),b.addEventListener(a.a,t=>{Object(s.a)(t),m()})),v.parentElement.insertBefore(b,v),f=e,r.IS_TOUCH_SUPPORTED||(window.addEventListener("mousemove",p),window.addEventListener("contextmenu",m,{once:!0})),document.addEventListener(a.a,m),c.default.dispatchEvent("context_menu_toggle",!0)}function y({pageX:t,pageY:e},n,i){let{scrollWidth:s,scrollHeight:a}=n;const r=document.body.getBoundingClientRect(),l=r.width,c=r.height;i=o.b.isMobile?"right":"left";let u="top";const d={x:{left:t,right:t-s},intermediateX:"right"===i?8:l-s-8,y:{top:e,bottom:e-a},intermediateY:e<c/2?8:c-a-8},h={left:d.x.left+s+8<=l,right:d.x.right>=8},p={top:d.y.top+a+8<=c,bottom:d.y.bottom-8>=8};{let t;t=h[i]?d.x[i]:(i="center",d.intermediateX),n.style.left=t+"px"}{let t;t=p[u]?d.y[u]:(u="center",d.intermediateY),n.style.top=t+"px"}n.className=n.className.replace(/(top|center|bottom)-(left|center|right)/g,""),n.classList.add(("center"===u?u:"bottom")+"-"+("center"===i?i:"left"===i?"right":"left"))}let E=!1,L=0;function k(){L&&clearTimeout(L),L=window.setTimeout(()=>{L=0,E=!1},400),E=!0}function S(t,e,n){const i=n?n.add(t):t.addEventListener.bind(t),a=n?n.removeManual.bind(n,t):t.removeEventListener.bind(t);if(l.IS_APPLE&&r.IS_TOUCH_SUPPORTED){let n;const o={capture:!0},r=()=>{clearTimeout(n),a("touchmove",r,o),a("touchend",r,o),a("touchcancel",r,o)};i("touchstart",a=>{a.touches.length>1?r():(i("touchmove",r,o),i("touchend",r,o),i("touchcancel",r,o),n=window.setTimeout(()=>{E?r():(e(a.touches[0]),r(),v&&t.addEventListener("touchend",s.a,{once:!0}))},400))})}else i("contextmenu",r.IS_TOUCH_SUPPORTED?n=>{e(n),v&&t.addEventListener("touchend",s.a,{once:!0})}:e)}},40:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i=n(46),s=n(80),a=n(59),o=n(81);var r=n(14),l=n(29);let c=()=>{document.addEventListener("paste",t=>{if(!Object(s.a)(t.target,'contenteditable="true"'))return;t.preventDefault();let e=(t.originalEvent||t).clipboardData.getData("text/plain"),n=l.b.parseEntities(e);n=n.filter(t=>"messageEntityEmoji"===t._||"messageEntityLinebreak"===t._),e=l.b.wrapRichText(e,{entities:n,noLinks:!0,wrappingDraft:!0}),window.document.execCommand("insertHTML",!1,e)}),c=null};var u;!function(t){t[t.Neutral=0]="Neutral",t[t.Valid=1]="Valid",t[t.Error=2]="Error"}(u||(u={}));e.b=class{constructor(t={}){this.options=t,this.container=document.createElement("div"),this.container.classList.add("input-field"),this.required=t.required,this.validate=t.validate,t.maxLength&&(t.showLengthOn=Math.min(40,Math.round(t.maxLength/3)));const{placeholder:e,maxLength:n,showLengthOn:i,name:s,plainText:l}=t;let u,d,h=t.label||t.labelText;if(l)this.container.innerHTML=`\n      <input type="text" ${s?`name="${s}"`:""} autocomplete="off" ${h?'required=""':""} class="input-field-input">\n      `,u=this.container.firstElementChild;else{c&&c(),this.container.innerHTML='\n      <div contenteditable="true" class="input-field-input"></div>\n      ',u=this.container.firstElementChild;const e=new MutationObserver(()=>{d&&d()});u.addEventListener("input",()=>{Object(o.a)(u)&&(u.innerHTML=""),this.inputFake&&(this.inputFake.innerHTML=u.innerHTML,this.onFakeInput())}),e.observe(u,{characterData:!0,childList:!0,subtree:!0}),t.animate&&(u.classList.add("scrollable","scrollable-y"),this.wasInputFakeClientHeight=0,this.inputFake=document.createElement("div"),this.inputFake.setAttribute("contenteditable","true"),this.inputFake.className=u.className+" input-field-input-fake")}if(u.setAttribute("dir","auto"),e&&(Object(r._i18n)(u,e,void 0,"placeholder"),this.inputFake&&Object(r._i18n)(this.inputFake,e,void 0,"placeholder")),h||e){const t=document.createElement("div");t.classList.add("input-field-border"),this.container.append(t)}if(h&&(this.label=document.createElement("label"),this.setLabel(),this.container.append(this.label)),n){const t=this.container.lastElementChild;let e=!1;d=()=>{const s=u.classList.contains("error"),o=l?u.value.length:[...Object(a.a)(u,!1).value].length,r=n-o,c=r<0;u.classList.toggle("error",c),c||r<=i?(this.setLabel(),t.append(` (${n-o})`),e||(e=!0)):(s&&!c||e)&&(this.setLabel(),e=!1)},u.addEventListener("input",d)}this.input=u}select(){this.value&&(this.options.plainText?this.input.select():function(t){const e=document.createRange();e.selectNodeContents(t);const n=window.getSelection();n.removeAllRanges(),n.addRange(e)}(this.input))}setLabel(){this.label.textContent="",this.options.labelText?this.label.innerHTML=this.options.labelText:this.label.append(Object(r.i18n)(this.options.label,this.options.labelOptions))}onFakeInput(){const{scrollHeight:t,clientHeight:e}=this.inputFake;this.wasInputFakeClientHeight=e,this.input.style.height=t?t+"px":""}get value(){return this.options.plainText?this.input.value:Object(a.a)(this.input,!1).value}set value(t){this.setValueSilently(t,!1),Object(i.a)(this.input,"input")}setValueSilently(t,e=!0){this.options.plainText?this.input.value=t:(this.input.innerHTML=t,this.inputFake&&(this.inputFake.innerHTML=t,e&&this.onFakeInput()))}isChanged(){return this.value!==this.originalValue}isValid(){return!this.input.classList.contains("error")&&this.isChanged()&&(!this.validate||this.validate())&&(!this.required||!Object(o.a)(this.input))}setDraftValue(t="",e=!1){this.options.plainText||(t=l.b.wrapDraftText(t)),e?this.setValueSilently(t,!1):this.value=t}setOriginalValue(t="",e=!1){this.originalValue=t,this.setDraftValue(t,e)}setState(t,e){e&&(this.label.textContent="",this.label.append(Object(r.i18n)(e,this.options.labelOptions))),this.input.classList.toggle("error",!!(t&u.Error)),this.input.classList.toggle("valid",!!(t&u.Valid))}setError(t){this.setState(u.Error,t)}}},43:function(t,e,n){"use strict";var i=n(27),s=n(0),a=n(39),o=n(35),r=n(6),l=n(4);const c=new class{constructor(){this.navigations=[],this.id=Date.now(),this.manual=!1,this.log=Object(a.b)("NC"),this.debug=!0,this.currentHash=window.location.hash;let t=!1;if(window.addEventListener("popstate",e=>{if(this.debug&&this.log("popstate",e,t),window.location.hash!==this.currentHash)return this.onHashChange&&this.onHashChange(),void this.replaceState();this.currentHash=window.location.hash;if(e.state!==this.id)return void this.pushState();const n=this.navigations.pop();n?(this.manual=!t,this.handleItem(n)):this.pushState()}),window.addEventListener("keydown",t=>{const e=this.navigations[this.navigations.length-1];e&&("Escape"!==t.key||e.onEscape&&!e.onEscape()||(Object(l.a)(t),this.back(e.type)))},{capture:!0,passive:!1}),s.IS_MOBILE_SAFARI){const e={passive:!0};window.addEventListener("touchstart",n=>{if(n.touches.length>1)return;this.debug&&this.log("touchstart");const i=()=>{window.removeEventListener("touchend",r),window.removeEventListener("touchmove",a)};let s=!1;const a=t=>{this.debug&&this.log("touchmove"),t.touches.length>1?i():s=!0},r=e=>{this.debug&&this.log("touchend"),e.touches.length>1||!s||(t=!0,Object(o.a)().then(()=>{t=!1})),i()};window.addEventListener("touchend",r,e),window.addEventListener("touchmove",a,e)},e)}history.scrollRestoration="manual",this.pushState()}handleItem(t){const e=t.onPop(!!this.manual&&void 0);this.debug&&this.log("popstate, navigation:",t,this.navigations),!1===e?this.pushItem(t):t.noBlurOnPop||Object(r.a)(),this.manual=!1}findItemByType(t){for(let e=this.navigations.length-1;e>=0;--e){const n=this.navigations[e];if(n.type===t)return{item:n,index:e}}}back(t){if(t){const e=this.findItemByType(t);if(e)return this.manual=!0,this.navigations.splice(e.index,1),void this.handleItem(e.item)}history.back()}pushItem(t){this.navigations.push(t),this.debug&&this.log("pushstate",t,this.navigations),t.noHistory||this.pushState()}pushState(){this.manual=!1,history.pushState(this.id,"")}replaceState(){history.replaceState(this.id,"",location.origin+location.pathname)}removeItem(t){this.navigations.findAndSplice(e=>e===t)}removeByType(t,e=!1){for(let n=this.navigations.length-1;n>=0;--n){if(this.navigations[n].type===t&&(this.navigations.splice(n,1),e))break}}};i.a.appNavigationController=c,e.a=c},46:function(t,e,n){"use strict";function i(t,e){const n=new Event(e,{bubbles:!0,cancelable:!0});t.dispatchEvent(n)}n.d(e,"a",(function(){return i}))},54:function(t,e,n){"use strict";var i=n(35),s=n(42),a=n(27),o=n(52);const r=new class{constructor(){this.promises={},this.raf=i.b.bind(null),this.scheduled=!1}do(t,e){let n=this.promises[t];return n||(this.scheduleFlush(),n=this.promises[t]=Object(s.a)()),void 0!==e&&n.then(()=>e()),n}measure(t){return this.do("read",t)}mutate(t){return this.do("write",t)}mutateElement(t,e){const n=Object(o.a)(t)?this.mutate():Promise.resolve();return void 0!==e&&n.then(()=>e()),n}scheduleFlush(){this.scheduled||(this.scheduled=!0,this.raf(()=>{this.promises.read&&this.promises.read.resolve(),this.promises.write&&this.promises.write.resolve(),this.scheduled=!1,this.promises={}}))}};a.a&&(a.a.sequentialDom=r),e.a=r},57:function(t,e,n){"use strict";var i=n(27),s=n(55),a=n(30);const o=new class{constructor(){this.serverTimeOffset=0,s.a.get("server_time_offset").then(t=>{t&&(this.serverTimeOffset=t)}),a.a.addTaskListener("applyServerTimeOffset",t=>{this.serverTimeOffset=t.payload})}};i.a&&(i.a.serverTimeManager=o),e.a=o},59:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(27),s=n(29),a=n(77);function o(t,e=!0){const n=[],i=[],o=e?[]:void 0;Object(a.a)(t,n,i,void 0,void 0,o),i.length&&n.push(i.join(""));let r=n.join("\n");return r=r.replace(/\u00A0/g," "),o&&s.b.combineSameEntities(o),{value:r,entities:o}}i.a.getRichValue=o},61:function(t,e,n){"use strict";function i(t,e){return e?t.forEach(t=>t.setAttribute("disabled","true")):t.forEach(t=>t.removeAttribute("disabled")),()=>i(t,!e)}n.d(e,"a",(function(){return i}))},77:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return s}));const i={bold:{match:'[style*="font-weight"], b',entityName:"messageEntityBold"},underline:{match:'[style*="underline"], u',entityName:"messageEntityUnderline"},italic:{match:'[style*="italic"], i',entityName:"messageEntityItalic"},monospace:{match:'[style*="monospace"], [face="monospace"], pre',entityName:"messageEntityPre"},strikethrough:{match:'[style*="line-through"], strike',entityName:"messageEntityStrike"},link:{match:"A:not(.follow)",entityName:"messageEntityTextUrl"},mentionName:{match:"A.follow",entityName:"messageEntityMentionName"}};function s(t,e,n,a,o,r,l={offset:0}){if(3===t.nodeType){const e=t.nodeValue;if(a===t?n.push(e.substr(0,o)+""+e.substr(o)):n.push(e),r&&e.trim()&&t.parentNode){const n=t.parentElement;for(const t in i){const s=i[t],a=n.closest(s.match+", [contenteditable]");a&&null===a.getAttribute("contenteditable")&&("messageEntityTextUrl"===s.entityName?r.push({_:s.entityName,url:n.href,offset:l.offset,length:e.length}):"messageEntityMentionName"===s.entityName?r.push({_:s.entityName,offset:l.offset,length:e.length,user_id:+n.dataset.follow}):r.push({_:s.entityName,offset:l.offset,length:e.length}))}}return void(l.offset+=e.length)}if(1!==t.nodeType)return;const c=a===t,u="DIV"===t.tagName||"P"===t.tagName;if(u&&n.length||"BR"===t.tagName)e.push(n.join("")),n.splice(0,n.length);else if("IMG"===t.tagName){const e=t.alt;e&&(n.push(e),l.offset+=e.length)}c&&!o&&n.push("");let d=t.firstChild;for(;d;)s(d,e,n,a,o,r,l),d=d.nextSibling;c&&o&&n.push(""),u&&n.length&&(e.push(n.join("")),n.splice(0,n.length))}},80:function(t,e,n){"use strict";function i(t,e){return t.closest(`[${e}]`)}n.d(e,"a",(function(){return i}))},81:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n(59);function s(t){return t.hasAttribute("contenteditable")||"INPUT"!==t.tagName?!Object(i.a)(t,!1).value.trim():!t.value.trim()}},82:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n(14);class s{constructor(t){this.element=document.body.querySelector("."+t.className),this.container=document.createElement("div"),this.container.className="container center-align",this.imageDiv=document.createElement("div"),this.imageDiv.className="auth-image",this.title=document.createElement("h4"),t.titleLangKey&&this.title.append(Object(i.i18n)(t.titleLangKey)),this.subtitle=document.createElement("p"),this.subtitle.className="subtitle",t.subtitleLangKey&&this.subtitle.append(Object(i.i18n)(t.subtitleLangKey)),this.container.append(this.imageDiv,this.title,this.subtitle),t.withInputWrapper&&(this.inputWrapper=document.createElement("div"),this.inputWrapper.className="input-wrapper",this.container.append(this.inputWrapper)),this.element.append(this.container)}}},87:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n(14);const s=new Map;let a=0;const o=(t,e,n="")=>{n=e.country_code+n,a=Math.max(a,n.length),s.set(n,{country:t,code:e})};function r(t){s.size||i.default.countriesList.forEach(t=>{t.country_codes.forEach(e=>{e.prefixes?e.prefixes.forEach(n=>{o(t,e,n)}):o(t,e)})});let e,n=t.replace(/\D/g,""),r=n.slice(0,a);for(let t=r.length-1;t>=0&&(e=s.get(r.slice(0,t+1)),!e);--t);if(!e)return{formatted:n,country:void 0,code:void 0,leftPattern:""};const l=e.country,c=e.code.patterns||[],u=n.slice(e.code.country_code.length);let d="",h=0,p="";for(let t=c.length-1;t>=0;--t){d=c[t];const e=d.replace(/ /g,"");let n=0;for(let t=0,i=Math.min(u.length,e.length);t<i;++t){if(u[t]!==e[t]&&"X"!==e[t]){n=0;break}++n}n>h&&(h=n,p=d)}d=p||d,d=d.replace(/\d/g,"X"),d=e.code.country_code+" "+d,d.split("").forEach((t,e)=>{" "===t&&" "!==n[e]&&n.length>e&&(n=n.slice(0,e)+" "+n.slice(e))});let m=d&&d.length>n.length?d.slice(n.length):"";return m&&(m=m.replace(/X/g,"‒")),{formatted:n,country:l,code:e.code,leftPattern:m}}}}]);
//# sourceMappingURL=12.072116df5ff6a29d6fa2.chunk.js.map