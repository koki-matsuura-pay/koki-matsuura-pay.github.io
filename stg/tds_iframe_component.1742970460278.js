/*! Wed Mar 26 2025 15:27:40 GMT+0900 (Japan Standard Time) */(()=>{"use strict";var e={689:(e,t,r)=>{r.r(t),r.d(t,{decode:()=>v,default:()=>C,encode:()=>y,toASCII:()=>j,toUnicode:()=>b,ucs2decode:()=>f,ucs2encode:()=>m});const n=2147483647,o=36,i=/^xn--/,a=/[^\0-\x7F]/,s=/[\x2E\u3002\uFF0E\uFF61]/g,c={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},l=Math.floor,d=String.fromCharCode;function u(e){throw new RangeError(c[e])}function p(e,t){const r=e.split("@");let n="";r.length>1&&(n=r[0]+"@",e=r[1]);const o=function(e,t){const r=[];let n=e.length;for(;n--;)r[n]=t(e[n]);return r}((e=e.replace(s,".")).split("."),t).join(".");return n+o}function f(e){const t=[];let r=0;const n=e.length;for(;r<n;){const o=e.charCodeAt(r++);if(o>=55296&&o<=56319&&r<n){const n=e.charCodeAt(r++);56320==(64512&n)?t.push(((1023&o)<<10)+(1023&n)+65536):(t.push(o),r--)}else t.push(o)}return t}const m=e=>String.fromCodePoint(...e),g=function(e,t){return e+22+75*(e<26)-((0!=t)<<5)},h=function(e,t,r){let n=0;for(e=r?l(e/700):e>>1,e+=l(e/t);e>455;n+=o)e=l(e/35);return l(n+36*e/(e+38))},v=function(e){const t=[],r=e.length;let i=0,a=128,s=72,c=e.lastIndexOf("-");c<0&&(c=0);for(let r=0;r<c;++r)e.charCodeAt(r)>=128&&u("not-basic"),t.push(e.charCodeAt(r));for(let p=c>0?c+1:0;p<r;){const c=i;for(let t=1,a=o;;a+=o){p>=r&&u("invalid-input");const c=(d=e.charCodeAt(p++))>=48&&d<58?d-48+26:d>=65&&d<91?d-65:d>=97&&d<123?d-97:o;c>=o&&u("invalid-input"),c>l((n-i)/t)&&u("overflow"),i+=c*t;const f=a<=s?1:a>=s+26?26:a-s;if(c<f)break;const m=o-f;t>l(n/m)&&u("overflow"),t*=m}const f=t.length+1;s=h(i-c,f,0==c),l(i/f)>n-a&&u("overflow"),a+=l(i/f),i%=f,t.splice(i++,0,a)}var d;return String.fromCodePoint(...t)},y=function(e){const t=[],r=(e=f(e)).length;let i=128,a=0,s=72;for(const r of e)r<128&&t.push(d(r));const c=t.length;let p=c;for(c&&t.push("-");p<r;){let r=n;for(const t of e)t>=i&&t<r&&(r=t);const f=p+1;r-i>l((n-a)/f)&&u("overflow"),a+=(r-i)*f,i=r;for(const r of e)if(r<i&&++a>n&&u("overflow"),r===i){let e=a;for(let r=o;;r+=o){const n=r<=s?1:r>=s+26?26:r-s;if(e<n)break;const i=e-n,a=o-n;t.push(d(g(n+i%a,0))),e=l(i/a)}t.push(d(g(e,0))),s=h(a,f,p===c),a=0,++p}++a,++i}return t.join("")},b=function(e){return p(e,(function(e){return i.test(e)?v(e.slice(4).toLowerCase()):e}))},j=function(e){return p(e,(function(e){return a.test(e)?"xn--"+y(e):e}))},C={version:"2.1.0",ucs2:{decode:f,encode:m},decode:v,encode:y,toASCII:j,toUnicode:b}},25:(e,t)=>{var r;Object.defineProperty(t,"__esModule",{value:!0}),t.getLocale=t.programmingErrors=t.errors=t.messages=void 0,function(e){e.ja="ja",e.en="en"}(r||(r={}));t.messages={"placeholder.cardNumber":{ja:"カード番号",en:"Number"},"placeholder.cardExpiry":{ja:"月 / 年",en:"MM / YY"},"placeholder.cardCvc":{ja:"CVC",en:"CVC"},"label.cardNumber":{ja:"クレジットカードまたはデビットカード番号",en:"Credit or debit card number"},"label.cardExpiry":{ja:"クレジットカードまたはデビットカードの有効期限",en:"Credit or debit card expiration date"},"label.cardCvc":{ja:"クレジットカードまたはデビットカードのセキュリティコード",en:"Credit or debit card CVC/CVV"}},t.errors={environmentalError:{ja:"このブラウザはサポートしていません。",en:"This browser is not supported."},timeoutError:{ja:"タイムアウトしました。通信環境の良い所で再度お試し下さい。",en:"Connection timeout."},processingError:{ja:"処理中にエラーが発生しました。",en:"Error occurred while processing."},invalid_expiry_year_past:{ja:"カードの有効期限が過ぎています。",en:"Card's expiration year is in the past."},invalid_expiry_month_past:{ja:"カードの有効期限（月）が過ぎています。",en:"Card's expiration month is in the past."},invalid_number:{ja:"カード番号が無効です。",en:"Card number is invalid."},incomplete_error:{ja:"入力が完了していません。",en:"Your input is not completed."},tdsTimeout:{ja:"3-Dセキュアが規定時間内に終了しませんでした。",en:"3-D Secure was not completed in time."},popupBlocked:{ja:"ポップアップウィンドウの制限などにより3-Dセキュアを行えませんでした。",en:"3-D Secure was not completed due to popup window limitation."},userClickCloseButton:{ja:"3-Dセキュア認証がキャンセルされました。",en:"3-D Secure was canceled."},tdsProcessingError:{ja:"3-Dセキュア処理中に予期せぬエラーが発生しました。",en:"An unexpected error occurred during 3-D Secure processing."}},t.programmingErrors={ALREADY_INSTANCED:"既にインスタンス化されています",NO_PUBLIC_KEY:"Public key がセットされていません",INVALID_PARAM:"引数が不正です",NO_ELEMENT_TYPE:"typeの値が存在しません。",INVALID_SELECTOR:"mountに指定されたセレクタが現在ページに存在しません。",BODY_NOT_FOUND:{ja:"body要素が存在しません。",en:"body element not found."},INVALID_PARAM_FIRST_ARGUMENT_NOT_STRING:{ja:"第一引数がstringではありません。",en:"The first argument is not a string."}},t.getLocale=function(e){var t,n,o=null!==(t=null==e?void 0:e.locale)&&void 0!==t?t:"ja";return null!==(n=r[o])&&void 0!==n?n:"ja"}},593:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=/^pk_(test|live)_[a-zA-Z0-9]+/,n={isPublicKey:function(e){return"string"==typeof e&&r.test(e)},isObject:function(e){return"object"==typeof e&&null!==e},setFrameName:function(e,t){return"_payjp"+e+(t?"_".concat(t):"")},createCssText:function(e){return Object.keys(e).map((function(t){return"".concat(t,": ").concat(e[t],";")})).join(" ")},getCardError:function(e){return e.cardNumber||e.cardExpiry||e.cardCvc||null},toFixed:function(e){return"string"==typeof e&&(e=parseFloat(e)),parseFloat(e.toFixed(1))}};t.default=n},326:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=r(689),o=new RegExp("^http(s)?://"),i={trimSlash:function(e){return"/"!==e.slice(-1)?e:e.slice(0,-1)},matchAsPuny:function(e,t){var r=i.trimSlash(t.replace(o,"")),a=(0,n.toASCII)(r);return 0===e.replace(o,"").indexOf(a)},_serialize:function(e,t){for(var r=[],n=0,o=Object.keys(e);n<o.length;n++){var a=o[n],s=t?t+"["+a+"]":a,c=e[a];"object"==typeof c&&null!==c?r.push(i._serialize(c,s)):r.push(encodeURIComponent(s)+"="+encodeURIComponent(c))}return r.join("&")},_deserialize:function(e){if("object"==typeof e)return e;for(var t={},r=0,n=e.split("&");r<n.length;r++){var o=n[r].split("="),i=decodeURIComponent(o[0]),a=decodeURIComponent(o[1]);"true"===a?a=!0:"false"===a?a=!1:"null"===a&&(a=null);for(var s=[],c=i,l=-1;-1!==(l=c.indexOf("["));)s.push(c.substring(0,l)),l=(c=c.substring(l+1)).indexOf("]"),c=c.substring(0,l)+c.substring(l+1);if(0!==s.length){for(var d=t,u=0,p=s;u<p.length;u++){var f=p[u];void 0===d[f]&&(d[f]={}),d=d[f]}d[c]=a}else t[i]=a}return t}};t.default=i}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n,o,i,a;n=r(326),o=r(593),i=r(25),a=function(){function e(){var e=this;this.closed=!1;var t=n.default._deserialize(window.location.hash.substring(1));this.parentOrigin=t.origin,this.locale=t.locale||"ja",this.iframe=this.createIframeTag(t.objectId,t.pk);var r=new URL(this.iframe.src).origin;this.iframeParantElm=document.getElementById("modal-content"),this.iframeParantElm.appendChild(this.iframe),window.addEventListener("message",(function(t){return e.onMessage(t,r)})),document.getElementById("payjp-close").addEventListener("click",(function(){e.closed=!0,e.modalFadeOut().then((function(){e.closeModal(e.buildErrorMessege(i.errors.userClickCloseButton[e.locale]))}))}))}return e.prototype.buildErrorMessege=function(e){return{type:"Error",message:e}},e.prototype.createIframeTag=function(e,t){var r=document.createElement("iframe"),i="".concat("https://api.pay-stage.com").concat(function(e,t){return"/v1/tds/".concat(e,"/start?publickey=").concat(t)}(e,t),"#")+n.default._serialize({referrer:window.location.href,origin:window.location.origin,parentOrigin:this.parentOrigin});return r.setAttribute("src",i),r.setAttribute("name",o.default.setFrameName("tds_iframe")),r.setAttribute("id","payjp-tds-api-iframe"),r.style.width="100%",r.style.height="100%",r.style.border="none",r},e.prototype.onMessage=function(e,t){var r=this;if(e.source===this.iframe.contentWindow&&e.origin===t&&!this.closed){var n;n=e.data&&"object"==typeof e.data&&e.data.payload&&e.data.payload.type&&"string"==typeof e.data.payload.type&&e.data.payload.message&&"string"==typeof e.data.payload.message?e.data.payload:this.buildErrorMessege(i.errors.tdsProcessingError[this.locale]);var o=this.modalFadeOut();return new Promise((function(e){o.then((function(){r.closeModal(n),e()}))}))}},e.prototype.modalFadeOut=function(){var e=document.getElementById("wrapper");return new Promise((function(t){e.addEventListener("transitionend",(function(e){t()})),e.classList.add("fade-out")}))},e.prototype.closeModal=function(e){document.getElementById("wrapper").remove(),this.iframe.remove(),window.parent.postMessage({payload:e},this.parentOrigin)},e}(),window.TdsIframeComponent=a})();