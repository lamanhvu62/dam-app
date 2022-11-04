import e from"react";import"react-router-dom";import"components/Spinner";import{withTranslation as t}from"react-i18next";import{FontAwesomeIcon as n}from"@fortawesome/react-fontawesome";import{faQuestionCircle as r}from"@fortawesome/free-solid-svg-icons/faQuestionCircle";import{faChevronLeft as o}from"@fortawesome/free-solid-svg-icons/faChevronLeft";import{Dropdown as a}from"react-bootstrap";import{AXIOS_CONFIGS as i,GENERAL_CONFIG as s,Storage as c,AUTHORIZATION_KEY as l}from"aesirx-dma-lib";import{faChevronDown as u}from"@fortawesome/free-solid-svg-icons/faChevronDown";import f from"@babel/runtime/helpers/esm/extends";import{toast as m}from"react-toastify";import{LazyLoadImage as d}from"react-lazy-load-image-component";import"components/SbarLeft";import{DamStoreProvider as p}from"store/DamStore/DamViewModelContextProvider";import h from"store/DamStore/DamViewModel";import v from"store/DamStore/DamStore";function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t,n){return t&&w(e.prototype,t),n&&w(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E.apply(this,arguments)}function N(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}function O(e,t){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},O(e,t)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _(e)}function A(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=x(e);if(t){var o=x(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return k(this,n)}}function C(e){return"/"===e.charAt(0)}function D(e,t){for(var n=t,r=n+1,o=e.length;r<o;n+=1,r+=1)e[n]=e[r];e.pop()}var L="production"===process.env.NODE_ENV;function T(e,t){if(!L){if(e)return;var n="Warning: "+t;"undefined"!=typeof console&&console.warn(n);try{throw Error(n)}catch(e){}}}var P="production"===process.env.NODE_ENV,S="Invariant failed";function j(e,t){if(!e){if(P)throw new Error(S);var n="function"==typeof t?t():t,r=n?"".concat(S,": ").concat(n):S;throw new Error(r)}}function R(e,t){return 0===e.toLowerCase().indexOf(t.toLowerCase())&&-1!=="/?#".indexOf(e.charAt(t.length))}function I(e,t,n,r){var o;"string"==typeof e?(o=function(e){var t=e||"/",n="",r="",o=t.indexOf("#");-1!==o&&(r=t.substr(o),t=t.substr(0,o));var a=t.indexOf("?");return-1!==a&&(n=t.substr(a),t=t.substr(0,a)),{pathname:t,search:"?"===n?"":n,hash:"#"===r?"":r}}(e),o.state=t):(void 0===(o=f({},e)).pathname&&(o.pathname=""),o.search?"?"!==o.search.charAt(0)&&(o.search="?"+o.search):o.search="",o.hash?"#"!==o.hash.charAt(0)&&(o.hash="#"+o.hash):o.hash="",void 0!==t&&void 0===o.state&&(o.state=t));try{o.pathname=decodeURI(o.pathname)}catch(e){throw e instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):e}return n&&(o.key=n),r?o.pathname?"/"!==o.pathname.charAt(0)&&(o.pathname=function(e,t){void 0===t&&(t="");var n,r=e&&e.split("/")||[],o=t&&t.split("/")||[],a=e&&C(e),i=t&&C(t),s=a||i;if(e&&C(e)?o=r:r.length&&(o.pop(),o=o.concat(r)),!o.length)return"/";if(o.length){var c=o[o.length-1];n="."===c||".."===c||""===c}else n=!1;for(var l=0,u=o.length;u>=0;u--){var f=o[u];"."===f?D(o,u):".."===f?(D(o,u),l++):l&&(D(o,u),l--)}if(!s)for(;l--;l)o.unshift("..");!s||""===o[0]||o[0]&&C(o[0])||o.unshift("");var m=o.join("/");return n&&"/"!==m.substr(-1)&&(m+="/"),m}(o.pathname,r.pathname)):o.pathname=r.pathname:o.pathname||(o.pathname="/"),o}var M=!("undefined"==typeof window||!window.document||!window.document.createElement);function V(e,t){t(window.confirm(e))}function U(){try{return window.history.state||{}}catch(e){return{}}}
/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */
var B=function(e){void 0===e&&(e={}),M||("production"!==process.env.NODE_ENV?j(!1,"Browser history needs a DOM"):j(!1));var t,n,r=window.history,o=(-1===(t=window.navigator.userAgent).indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,a=!(-1===window.navigator.userAgent.indexOf("Trident")),i=e,s=i.forceRefresh,c=void 0!==s&&s,l=i.getUserConfirmation,u=void 0===l?V:l,m=i.keyLength,d=void 0===m?6:m,p=e.basename?function(e){return"/"===e.charAt(e.length-1)?e.slice(0,-1):e}("/"===(n=e.basename).charAt(0)?n:"/"+n):"";function h(e){var t=e||{},n=t.key,r=t.state,o=window.location,a=o.pathname+o.search+o.hash;return"production"!==process.env.NODE_ENV&&T(!p||R(a,p),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+a+'" to begin with "'+p+'".'),p&&(a=function(e,t){return R(e,t)?e.substr(t.length):e}(a,p)),I(a,r,n)}function v(){return Math.random().toString(36).substr(2,d)}var g,w,b=(g=null,w=[],{setPrompt:function(e){return"production"!==process.env.NODE_ENV&&T(null==g,"A history supports only one prompt at a time"),g=e,function(){g===e&&(g=null)}},confirmTransitionTo:function(e,t,n,r){if(null!=g){var o="function"==typeof g?g(e,t):g;"string"==typeof o?"function"==typeof n?n(o,r):("production"!==process.env.NODE_ENV&&T(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),r(!0)):r(!1!==o)}else r(!0)},appendListener:function(e){var t=!0;function n(){t&&e.apply(void 0,arguments)}return w.push(n),function(){t=!1,w=w.filter((function(e){return e!==n}))}},notifyListeners:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];w.forEach((function(e){return e.apply(void 0,t)}))}});function y(e){f(S,e),S.length=r.length,b.notifyListeners(S.location,S.action)}function E(e){(function(e){return void 0===e.state&&-1===navigator.userAgent.indexOf("CriOS")})(e)||O(h(e.state))}function N(){O(h(U()))}var x=!1;function O(e){if(x)x=!1,y();else{b.confirmTransitionTo(e,"POP",u,(function(t){t?y({action:"POP",location:e}):function(e){var t=S.location,n=k.indexOf(t.key);-1===n&&(n=0);var r=k.indexOf(e.key);-1===r&&(r=0);var o=n-r;o&&(x=!0,C(o))}(e)}))}}var _=h(U()),k=[_.key];function A(e){return p+function(e){var t=e.pathname,n=e.search,r=e.hash,o=t||"/";return n&&"?"!==n&&(o+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}(e)}function C(e){r.go(e)}var D=0;function L(e){1===(D+=e)&&1===e?(window.addEventListener("popstate",E),a&&window.addEventListener("hashchange",N)):0===D&&(window.removeEventListener("popstate",E),a&&window.removeEventListener("hashchange",N))}var P=!1,S={length:r.length,action:"POP",location:_,createHref:A,push:function(e,t){"production"!==process.env.NODE_ENV&&T(!("object"==typeof e&&void 0!==e.state&&void 0!==t),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");var n="PUSH",a=I(e,t,v(),S.location);b.confirmTransitionTo(a,n,u,(function(e){if(e){var t=A(a),i=a.key,s=a.state;if(o)if(r.pushState({key:i,state:s},null,t),c)window.location.href=t;else{var l=k.indexOf(S.location.key),u=k.slice(0,l+1);u.push(a.key),k=u,y({action:n,location:a})}else"production"!==process.env.NODE_ENV&&T(void 0===s,"Browser history cannot push state in browsers that do not support HTML5 history"),window.location.href=t}}))},replace:function(e,t){"production"!==process.env.NODE_ENV&&T(!("object"==typeof e&&void 0!==e.state&&void 0!==t),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");var n="REPLACE",a=I(e,t,v(),S.location);b.confirmTransitionTo(a,n,u,(function(e){if(e){var t=A(a),i=a.key,s=a.state;if(o)if(r.replaceState({key:i,state:s},null,t),c)window.location.replace(t);else{var l=k.indexOf(S.location.key);-1!==l&&(k[l]=a.key),y({action:n,location:a})}else"production"!==process.env.NODE_ENV&&T(void 0===s,"Browser history cannot replace state in browsers that do not support HTML5 history"),window.location.replace(t)}}))},go:C,goBack:function(){C(-1)},goForward:function(){C(1)},block:function(e){void 0===e&&(e=!1);var t=b.setPrompt(e);return P||(L(1),P=!0),function(){return P&&(P=!1,L(-1)),t()}},listen:function(e){var t=b.appendListener(e);return L(1),function(){L(-1),t()}}};return S}();
/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */""!==i.CLIENT_ID&&""!==i.CLIENT_SECRET&&""!==i.BASE_ENDPOINT_URL&&""!==i.LICENSE&&""!==s.WEBSOCKET_ENDPOINT||function(t){switch(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success"){case"error":m.error(t,{className:"bg-danger"});break;case"warn":m.warn(t,{className:"bg-info"});break;case"success":m.success(t,{className:"bg-success"});break;case"promise":m.promise(t,{pending:{render:function(){return e.createElement("div",{className:"position-absolute top-50 start-50 translate-middle"},e.createElement("div",{className:"spinner-border",style:{width:"1rem",height:"1rem"},role:"status"},e.createElement("span",{className:"visually-hidden"},"Loading...")),e.createElement("span",{className:"ps-2"},"Loading"))},icon:!0},success:"Complete. 👌",error:"Error! 🤯"},{className:"bg-dark"});break;default:m.info(t,{className:"bg-info"})}}("The app has not been fully configured and you will not be able to login.  Go to https://dma.aesirx.io/install-guide/npm for instructions on how to configure your .env file","error");var z=function(){var e=localStorage.getItem("theme");localStorage.clear(),localStorage.setItem("theme",e),B.push("/login")},H=function(){function e(){g(this,e)}return b(e,null,[{key:"confirmDeleteItem",value:function(){return window.confirm("Are you sure you wish to delete this item?")}}]),e}();
/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */y(H,"isValidUrl",(function(e){return e&&/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/.test(e)})),y(H,"isNull",(function(e){return!e||"null"===e||!JSON.parse(e)})),y(H,"isJson",(function(e){try{JSON.parse(e)}catch(e){return!1}return!0})),y(H,"getTimezoneDefault",(function(){return Intl.DateTimeFormat().resolvedOptions().timeZone}));var F=function(t){return e.createElement(d,E({},t,{effect:"blur"}))},J=[{key:1,text:"txt_profile",link:"/profile"}],W=function(t){N(o,e.Component);var r=A(o);function o(t){var a;return g(this,o),y(_(a=r.call(this,t)),"Helper",void 0),y(_(a),"CustomToggleAvatar",e.forwardRef((function(t,r){var o=t.onClick;return e.createElement("div",{ref:r,onClick:function(e){e.preventDefault(),o(e)},className:"d-flex align-items-center text-decoration-none cursor-pointer"},e.createElement(F,{src:H.isValidUrl(c.getItem(l.AVATAR))?c.getItem(l.AVATAR):"/assets/images/avatar.png",alt:"",className:"img-avatar rounded-circle object-fit-cover h-45"}),e.createElement("div",{className:"text ps-3 pe-3"},e.createElement("p",{className:"mb-0 text-blue-0 fs-14 fw-bold"},c.getItem(l.MEMBER_FULL_NAME))),e.createElement("i",{className:"icons text-green"},e.createElement(n,{icon:u})))}))),a.state={},a}return b(o,[{key:"render",value:function(){var t=this.props.t;return e.createElement("div",{className:"wrapper_avatar position-relative"},e.createElement(a,null,e.createElement(a.Toggle,{as:this.CustomToggleAvatar,id:"dropdown-custom-components position-relative"}),e.createElement(a.Menu,{className:"shadow border-0"},e.createElement("div",{className:"p-3"},e.createElement("ul",{className:"list-unstyled ps-0 mb-0 list_menu_avatar"},J.map((function(n,r){return e.createElement("li",{key:r},e.createElement(a.Item,{href:n.link,className:"text-blue-0 d-block rounded-1 text-decoration-none p-2"},t(n.text)))})))),e.createElement("div",{onClick:z,className:"d-flex align-items-center p-3 text-green border-top-1 border-gray cursor-pointer"},e.createElement("span",{className:"ps-2 pe-2"},t("txt_sign_out"))))))}}]),o}(),Y=t("common")(W),G=function(t){N(r,e.Component);var n=A(r);function r(e){var t;return g(this,r),(t=n.call(this,e)).state={},t}return b(r,[{key:"render",value:function(){var t=this.props,n=t.handleAction,r=t.className;return e.createElement("div",{className:"wrapper_hambuger d-none cursor-pointer ps-3 pe-2 ".concat(r),onClick:n},e.createElement("div",{className:"item_hambuger"}),e.createElement("div",{className:"item_hambuger"}),e.createElement("div",{className:"item_hambuger"}))}}]),r}(),K=function(t){N(i,e.Component);var a=A(i);function i(e){var t;return g(this,i),y(_(t=a.call(this,e)),"handleCollap",(function(){var e=t.state.isMini;document.body.classList.toggle("mini_left"),t.setState({isMini:!e})})),y(_(t),"handleMenuLeft",(function(){document.body.classList.toggle("show_menu_left")})),t.state={isMini:!1},t}return b(i,[{key:"render",value:function(){var t=this.props.t,a=this.state.isMini;return e.createElement("div",{id:"all_header",className:"wrapper_header d-flex position-fixed w-100 top-0 left-0 right-0 pr-3 align-items-center shadow-sm z-index-100 bg-white"},e.createElement(G,{handleAction:this.handleMenuLeft}),e.createElement("div",{className:"wrapper_header_logo bg-dark w-248 h-80 d-flex align-items-center"},e.createElement("a",{href:"/",className:"header_logo d-block px-3"},a?e.createElement(F,{className:"logo_white pe-0",src:"/assets/images/logo/logo-white.svg",alt:"R Digital"}):e.createElement(F,{className:"logo_white pe-6",src:"/assets/images/logo/logo-white.svg",alt:"R Digital"}))),e.createElement("div",{className:"content_header h-80 border-start-1 flex-1 d-flex align-items-center ps-4 pr-4 position-relative"},e.createElement("span",{className:" item_collap d-flex position-absolute text-green bg-blue-1 rounded-circle align-items-center justify-content-center fs-12 cursor-pointer ",onClick:this.handleCollap},e.createElement(n,{icon:o})),e.createElement("div",{className:"d-flex justify-content-between flex-1 align-items-center"},e.createElement("div",{className:"d-flex align-items-center"},e.createElement("div",{className:"wr_help_center ps-3 pe-3 d-none"},e.createElement("span",{className:"item_help d-flex align-items-center text-blue-0 cursor-pointer"},e.createElement(n,{icon:r}),e.createElement("span",{className:"text white-spacing-nowrap ps-2"},t("txt_help_center")))),e.createElement("div",{className:"ps-3 pe-3"},e.createElement(Y,null))))))}}]),i}(),Q=t("common")(K),X=new h(new v),Z=function(t){return t.children,e.createElement("div",{className:"container-fluid"},e.createElement("div",{className:"row"},e.createElement(p,{viewModel:X},e.createElement("main",{className:"p-0"},e.createElement(Q,null),e.createElement("div",{className:"main_content vh-100 main_content_dashboard pd-t-80 d-flex"},e.createElement("div",{className:"flex-1 border-start-1 border-gray bg-blue mh-100 overflow-hidden overflow-y-auto position-relative main-content"},e.createElement("div",{className:"py-4 px-3 h-100 d-flex flex-column"},e.createElement("div",{className:"d-flex align-items-center justify-content-between mb-4"}))))))))},$=function(t){return e.createElement(Z,null,"asd")};export{$ as AesirXDamComponent};
