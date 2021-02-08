"use strict";function e(e){var n={exports:{}};return e(n,n.exports),n.exports}var n=e((function(e){!function(n){if("undefined"!=typeof window){var t,o=0,i=!1,r=!1,a="message".length,u="[iFrameSizer]",c=u.length,s=null,d=window.requestAnimationFrame,l={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},f={},m=null,g={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,mouseEvents:!0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"scroll",onClose:function(){return!0},onClosed:function(){},onInit:function(){},onMessage:function(){I("onMessage function not defined")},onMouseEnter:function(){},onMouseLeave:function(){},onResized:function(){},onScroll:function(){return!0}},h={};window.jQuery&&((t=window.jQuery).fn?t.fn.iFrameResize||(t.fn.iFrameResize=function(e){return this.filter("iframe").each((function(n,t){P(t,e)})).end()}):M("","Unable to bind to jQuery, it is not fully loaded.")),e.exports=U(),window.iFrameResize=window.iFrameResize||U()}function p(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function w(e,n,t){e.addEventListener(n,t,!1)}function y(e,n,t){e.removeEventListener(n,t,!1)}function b(e){return u+"["+function(e){var n="Host page: "+e;return window.top!==window.self&&(n=window.parentIFrame&&window.parentIFrame.getId?window.parentIFrame.getId()+": "+e:"Nested host page: "+e),n}(e)+"]"}function v(e){return f[e]?f[e].log:i}function T(e,n){E("log",e,n,v(e))}function M(e,n){E("info",e,n,v(e))}function I(e,n){E("warn",e,n,!0)}function E(e,n,t,o){!0===o&&"object"==typeof window.console&&console[e](b(n),t)}function O(e){function n(){i("Height"),i("Width"),A((function(){C(B),k(q),b("onResized",B)}),B,"init")}function t(e){return"border-box"!==e.boxSizing?0:(e.paddingTop?parseInt(e.paddingTop,10):0)+(e.paddingBottom?parseInt(e.paddingBottom,10):0)}function o(e){return"border-box"!==e.boxSizing?0:(e.borderTopWidth?parseInt(e.borderTopWidth,10):0)+(e.borderBottomWidth?parseInt(e.borderBottomWidth,10):0)}function i(e){var n=Number(f[q]["max"+e]),t=Number(f[q]["min"+e]),o=e.toLowerCase(),i=Number(B[o]);T(q,"Checking "+o+" is in range "+t+"-"+n),i<t&&(i=t,T(q,"Set "+o+" to min value")),i>n&&(i=n,T(q,"Set "+o+" to max value")),B[o]=""+i}function r(e){return H.substr(H.indexOf(":")+a+e)}function d(e,n){var t,o,i;t=function(){var t,o;W("Send Page Info","pageInfo:"+(t=document.body.getBoundingClientRect(),o=B.iframe.getBoundingClientRect(),JSON.stringify({iframeHeight:o.height,iframeWidth:o.width,clientHeight:Math.max(document.documentElement.clientHeight,window.innerHeight||0),clientWidth:Math.max(document.documentElement.clientWidth,window.innerWidth||0),offsetTop:parseInt(o.top-t.top,10),offsetLeft:parseInt(o.left-t.left,10),scrollTop:window.pageYOffset,scrollLeft:window.pageXOffset,documentHeight:document.documentElement.clientHeight,documentWidth:document.documentElement.clientWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth})),e,n)},o=32,h[i=n]||(h[i]=setTimeout((function(){h[i]=null,t()}),o))}function l(e){var n=e.getBoundingClientRect();return N(q),{x:Math.floor(Number(n.left)+Number(s.x)),y:Math.floor(Number(n.top)+Number(s.y))}}function m(e){var n=e?l(B.iframe):{x:0,y:0},t={x:Number(B.width)+n.x,y:Number(B.height)+n.y};T(q,"Reposition requested from iFrame (offset x:"+n.x+" y:"+n.y+")"),window.top!==window.self?window.parentIFrame?window.parentIFrame["scrollTo"+(e?"Offset":"")](t.x,t.y):I(q,"Unable to scroll to requested position, window.parentIFrame not found"):(s=t,g(),T(q,"--"))}function g(){!1!==b("onScroll",s)?k(q):R()}function p(e){var n={};if(0===Number(B.width)&&0===Number(B.height)){var t=r(9).split(":");n={x:t[1],y:t[0]}}else n={x:B.width,y:B.height};b(e,{iframe:B.iframe,screenX:Number(n.x),screenY:Number(n.y),type:B.type})}function b(e,n){return S(q,e,n)}var v,E,O,x,P,j,H=e.data,B={},q=null;"[iFrameResizerChild]Ready"===H?function(){for(var e in f)W("iFrame requested init",L(e),f[e].iframe,e)}():u===(""+H).substr(0,c)&&H.substr(c).split(":")[0]in f?(O=H.substr(c).split(":"),x=O[1]?parseInt(O[1],10):0,P=f[O[0]]&&f[O[0]].iframe,j=getComputedStyle(P),B={iframe:P,id:O[0],height:x+t(j)+o(j),width:O[2],type:O[3]},q=B.id,f[q]&&(f[q].loaded=!0),(E=B.type in{true:1,false:1,undefined:1})&&T(q,"Ignoring init message from meta parent page"),!E&&function(e){var n=!0;return f[e]||(n=!1,I(B.type+" No settings for "+e+". Message was: "+H)),n}(q)&&(T(q,"Received: "+H),v=!0,null===B.iframe&&(I(q,"IFrame ("+B.id+") not found"),v=!1),v&&function(){var n,t=e.origin,o=f[q]&&f[q].checkOrigin;if(o&&""+t!="null"&&!(o.constructor===Array?function(){var e=0,n=!1;for(T(q,"Checking connection is from allowed list of origins: "+o);e<o.length;e++)if(o[e]===t){n=!0;break}return n}():(n=f[q]&&f[q].remoteHost,T(q,"Checking connection is from: "+n),t===n)))throw new Error("Unexpected message received from: "+t+" for "+B.iframe.id+". Message was: "+e.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return!0}()&&function(){switch(f[q]&&f[q].firstRun&&f[q]&&(f[q].firstRun=!1),B.type){case"close":z(B.iframe);break;case"message":a=r(6),T(q,"onMessage passed: {iframe: "+B.iframe.id+", message: "+a+"}"),b("onMessage",{iframe:B.iframe,message:JSON.parse(a)}),T(q,"--");break;case"mouseenter":p("onMouseEnter");break;case"mouseleave":p("onMouseLeave");break;case"autoResize":f[q].autoResize=JSON.parse(r(9));break;case"scrollTo":m(!1);break;case"scrollToOffset":m(!0);break;case"pageInfo":d(f[q]&&f[q].iframe,q),function(){function e(e,o){function i(){f[t]?d(f[t].iframe,t):n()}["scroll","resize"].forEach((function(n){T(t,e+n+" listener for sendPageInfo"),o(window,n,i)}))}function n(){e("Remove ",y)}var t=q;e("Add ",w),f[t]&&(f[t].stopPageInfo=n)}();break;case"pageInfoStop":f[q]&&f[q].stopPageInfo&&(f[q].stopPageInfo(),delete f[q].stopPageInfo);break;case"inPageLink":t=r(9).split("#")[1]||"",o=decodeURIComponent(t),(i=document.getElementById(o)||document.getElementsByName(o)[0])?(e=l(i),T(q,"Moving to in page link (#"+t+") at x: "+e.x+" y: "+e.y),s={x:e.x,y:e.y},g(),T(q,"--")):window.top!==window.self?window.parentIFrame?window.parentIFrame.moveToAnchor(t):T(q,"In page link #"+t+" not found and window.parentIFrame not found"):T(q,"In page link #"+t+" not found");break;case"reset":F(B);break;case"init":n(),b("onInit",B.iframe);break;default:0===Number(B.width)&&0===Number(B.height)?I("Unsupported message received ("+B.type+"), this is likely due to the iframe containing a later version of iframe-resizer than the parent page"):n()}var e,t,o,i,a}())):M(q,"Ignored: "+H)}function S(e,n,t){var o=null,i=null;if(f[e]){if("function"!=typeof(o=f[e][n]))throw new TypeError(n+" on iFrame["+e+"] is not a function");i=o(t)}return i}function x(e){var n=e.id;delete f[n]}function z(e){var n=e.id;if(!1!==S(n,"onClose",n)){T(n,"Removing iFrame: "+n);try{e.parentNode&&e.parentNode.removeChild(e)}catch(e){I(e)}S(n,"onClosed",n),T(n,"--"),x(e)}else T(n,"Close iframe cancelled by onClose event")}function N(e){null===s&&T(e,"Get page position: "+(s={x:window.pageXOffset!==n?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==n?window.pageYOffset:document.documentElement.scrollTop}).x+","+s.y)}function k(e){null!==s&&(window.scrollTo(s.x,s.y),T(e,"Set page position: "+s.x+","+s.y),R())}function R(){s=null}function F(e){T(e.id,"Size reset requested by "+("init"===e.type?"host page":"iFrame")),N(e.id),A((function(){C(e),W("reset","reset",e.iframe,e.id)}),e,"reset")}function C(e){function n(n){r||"0"!==e[n]||(r=!0,T(o,"Hidden iFrame detected, creating visibility listener"),function(){function e(){function e(e){function n(n){return"0px"===(f[e]&&f[e].iframe.style[n])}function t(e){return null!==e.offsetParent}f[e]&&t(f[e].iframe)&&(n("height")||n("width"))&&W("Visibility change","resize",f[e].iframe,e)}Object.keys(f).forEach((function(n){e(n)}))}function n(n){T("window","Mutation observed: "+n[0].target+" "+n[0].type),j(e,16)}function t(){var e=document.querySelector("body"),t={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0};new o(n).observe(e,t)}var o=p();o&&t()}())}function t(t){!function(n){e.id?(e.iframe.style[n]=e[n]+"px",T(e.id,"IFrame ("+o+") "+n+" set to "+e[n]+"px")):T("undefined","messageData id not set")}(t),n(t)}var o=e.iframe.id;f[o]&&(f[o].sizeHeight&&t("height"),f[o].sizeWidth&&t("width"))}function A(e,n,t){t!==n.type&&d&&!window.jasmine?(T(n.id,"Requesting animation frame"),d(e)):e()}function W(e,n,t,o,i){var r,a=!1;o=o||t.id,f[o]&&(t&&"contentWindow"in t&&null!==t.contentWindow?(r=f[o]&&f[o].targetOrigin,T(o,"["+e+"] Sending msg to iframe["+o+"] ("+n+") targetOrigin: "+r),t.contentWindow.postMessage(u+n,r)):I(o,"["+e+"] IFrame("+o+") not found"),i&&f[o]&&f[o].warningTimeout&&(f[o].msgTimeout=setTimeout((function(){!f[o]||f[o].loaded||a||(a=!0,I(o,"IFrame has not responded within "+f[o].warningTimeout/1e3+" seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))}),f[o].warningTimeout)))}function L(e){return e+":"+f[e].bodyMarginV1+":"+f[e].sizeWidth+":"+f[e].log+":"+f[e].interval+":"+f[e].enablePublicMethods+":"+f[e].autoResize+":"+f[e].bodyMargin+":"+f[e].heightCalculationMethod+":"+f[e].bodyBackground+":"+f[e].bodyPadding+":"+f[e].tolerance+":"+f[e].inPageLinks+":"+f[e].resizeFrom+":"+f[e].widthCalculationMethod+":"+f[e].mouseEvents}function P(e,t){function r(e){var n=e.split("Callback");if(2===n.length){var t="on"+n[0].charAt(0).toUpperCase()+n[0].slice(1);this[t]=this[e],delete this[e],I(c,"Deprecated: '"+e+"' has been renamed '"+t+"'. The old method will be removed in the next major version.")}}var a,u,c=function(n){var r;return""===n&&(e.id=(r=t&&t.id||g.id+o++,null!==document.getElementById(r)&&(r+=o++),n=r),i=(t||{}).log,T(n,"Added missing iframe ID: "+n+" ("+e.src+")")),n}(e.id);c in f&&"iFrameResizer"in e?I(c,"Ignored iFrame, already setup."):(!function(n){var t;n=n||{},f[c]={firstRun:!0,iframe:e,remoteHost:e.src&&e.src.split("/").slice(0,3).join("/")},function(e){if("object"!=typeof e)throw new TypeError("Options is not an object")}(n),Object.keys(n).forEach(r,n),function(e){for(var n in g)Object.prototype.hasOwnProperty.call(g,n)&&(f[c][n]=Object.prototype.hasOwnProperty.call(e,n)?e[n]:g[n])}(n),f[c]&&(f[c].targetOrigin=!0===f[c].checkOrigin?""===(t=f[c].remoteHost)||null!==t.match(/^(about:blank|javascript:|file:\/\/)/)?"*":t:"*")}(t),function(){switch(T(c,"IFrame scrolling "+(f[c]&&f[c].scrolling?"enabled":"disabled")+" for "+c),e.style.overflow=!1===(f[c]&&f[c].scrolling)?"hidden":"auto",f[c]&&f[c].scrolling){case"omit":break;case!0:e.scrolling="yes";break;case!1:e.scrolling="no";break;default:e.scrolling=f[c]?f[c].scrolling:"no"}}(),function(){function n(n){1/0!==f[c][n]&&0!==f[c][n]&&(e.style[n]=f[c][n]+"px",T(c,"Set "+n+" = "+f[c][n]+"px"))}function t(e){if(f[c]["min"+e]>f[c]["max"+e])throw new Error("Value for min"+e+" can not be greater than max"+e)}t("Height"),t("Width"),n("maxHeight"),n("minHeight"),n("maxWidth"),n("minWidth")}(),"number"!=typeof(f[c]&&f[c].bodyMargin)&&"0"!==(f[c]&&f[c].bodyMargin)||(f[c].bodyMarginV1=f[c].bodyMargin,f[c].bodyMargin=f[c].bodyMargin+"px"),a=L(c),(u=p())&&function(n){e.parentNode&&new n((function(n){n.forEach((function(n){Array.prototype.slice.call(n.removedNodes).forEach((function(n){n===e&&z(e)}))}))})).observe(e.parentNode,{childList:!0})}(u),w(e,"load",(function(){var t,o;W("iFrame.onload",a,e,n,!0),t=f[c]&&f[c].firstRun,o=f[c]&&f[c].heightCalculationMethod in l,!t&&o&&F({iframe:e,height:0,width:0,type:"init"})})),W("init",a,e,n,!0),f[c]&&(f[c].iframe.iFrameResizer={close:z.bind(null,f[c].iframe),removeListeners:x.bind(null,f[c].iframe),resize:W.bind(null,"Window resize","resize",f[c].iframe),moveToAnchor:function(e){W("Move to anchor","moveToAnchor:"+e,f[c].iframe,c)},sendMessage:function(e){W("Send Message","message:"+(e=JSON.stringify(e)),f[c].iframe,c)}}))}function j(e,n){null===m&&(m=setTimeout((function(){m=null,e()}),n))}function H(){"hidden"!==document.visibilityState&&(T("document","Trigger event: Visiblity change"),j((function(){B("Tab Visable","resize")}),16))}function B(e,n){Object.keys(f).forEach((function(t){(function(e){return f[e]&&"parent"===f[e].resizeFrom&&f[e].autoResize&&!f[e].firstRun})(t)&&W(e,n,f[t].iframe,t)}))}function q(){w(window,"message",O),w(window,"resize",(function(){var e;T("window","Trigger event: "+(e="resize")),j((function(){B("Window "+e,"resize")}),16)})),w(document,"visibilitychange",H),w(document,"-webkit-visibilitychange",H)}function U(){function e(e,n){n&&(!function(){if(!n.tagName)throw new TypeError("Object is not a valid DOM element");if("IFRAME"!==n.tagName.toUpperCase())throw new TypeError("Expected <IFRAME> tag, found <"+n.tagName+">")}(),P(n,e),t.push(n))}var t;return function(){var e,n=["moz","webkit","o","ms"];for(e=0;e<n.length&&!d;e+=1)d=window[n[e]+"RequestAnimationFrame"];d?d=d.bind(window):T("setup","RequestAnimationFrame not supported")}(),q(),function(o,i){switch(t=[],function(e){e&&e.enablePublicMethods&&I("enablePublicMethods option has been removed, public methods are now always available in the iFrame")}(o),typeof i){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(i||"iframe"),e.bind(n,o));break;case"object":e(o,i);break;default:throw new TypeError("Unexpected data type ("+typeof i+")")}return t}}}()})),t={iframeResize:n,iframeResizer:n,iframeResizerContentWindow:e((function(e){!function(n){if("undefined"!=typeof window){var t=!0,o="",i=0,r="",a=null,u="",c=!1,s={resize:1,click:1},d=128,l=!0,f=1,m="bodyOffset",g=m,h=!0,p="",w={},y=32,b=null,v=!1,T=!1,M="[iFrameSizer]",I=M.length,E="",O={max:1,min:1,bodyScroll:1,documentElementScroll:1},S="child",x=window.parent,z="*",N=0,k=!1,R=null,F=16,C=1,A="scroll",W=A,L=window,P=function(){ae("onMessage function not defined")},j=function(){},H=function(){},B={height:function(){return ae("Custom height calculation function not defined"),document.documentElement.offsetHeight},width:function(){return ae("Custom width calculation function not defined"),document.body.scrollWidth}},q={},U=!1;try{var D=Object.create({},{passive:{get:function(){U=!0}}});window.addEventListener("test",ne,D),window.removeEventListener("test",ne,D)}catch(e){}var V,J,X,Y,Q,K,$,G=Date.now||function(){return(new Date).getTime()},Z={bodyOffset:function(){return document.body.offsetHeight+we("marginTop")+we("marginBottom")},offset:function(){return Z.bodyOffset()},bodyScroll:function(){return document.body.scrollHeight},custom:function(){return B.height()},documentElementOffset:function(){return document.documentElement.offsetHeight},documentElementScroll:function(){return document.documentElement.scrollHeight},max:function(){return Math.max.apply(null,be(Z))},min:function(){return Math.min.apply(null,be(Z))},grow:function(){return Z.max()},lowestElement:function(){return Math.max(Z.bodyOffset()||Z.documentElementOffset(),ye("bottom",Te()))},taggedElement:function(){return ve("bottom","data-iframe-height")}},_={bodyScroll:function(){return document.body.scrollWidth},bodyOffset:function(){return document.body.offsetWidth},custom:function(){return B.width()},documentElementScroll:function(){return document.documentElement.scrollWidth},documentElementOffset:function(){return document.documentElement.offsetWidth},scroll:function(){return Math.max(_.bodyScroll(),_.documentElementScroll())},max:function(){return Math.max.apply(null,be(_))},min:function(){return Math.min.apply(null,be(_))},rightMostElement:function(){return ye("right",Te())},taggedElement:function(){return ve("right","data-iframe-width")}},ee=(V=Me,Q=null,K=0,$=function(){K=G(),Q=null,Y=V.apply(J,X),Q||(J=X=null)},function(){var e=G();K||(K=e);var n=F-(e-K);return J=this,X=arguments,n<=0||n>F?(Q&&(clearTimeout(Q),Q=null),K=e,Y=V.apply(J,X),Q||(J=X=null)):Q||(Q=setTimeout($,n)),Y});te(window,"message",(function(n){var t={init:function(){p=n.data,x=n.source,ue(),l=!1,setTimeout((function(){h=!1}),d)},reset:function(){h?re("Page reset ignored by init"):(re("Page size reset by host page"),Oe("resetPage"))},resize:function(){Ie("resizeParent","Parent window requested size check")},moveToAnchor:function(){w.findTarget(i())},inPageLink:function(){this.moveToAnchor()},pageInfo:function(){var e=i();re("PageInfoFromParent called from parent: "+e),H(JSON.parse(e)),re(" --")},message:function(){var e=i();re("onMessage called from parent: "+e),P(JSON.parse(e)),re(" --")}};function o(){return n.data.split("]")[1].split(":")[0]}function i(){return n.data.substr(n.data.indexOf(":")+1)}function r(){return n.data.split(":")[2]in{true:1,false:1}}function a(){var i=o();i in t?t[i]():!e.exports&&"iFrameResize"in window||"jQuery"in window&&"iFrameResize"in window.jQuery.prototype||r()||ae("Unexpected message ("+n.data+")")}M===(""+n.data).substr(0,I)&&(!1===l?a():r()?t.init():re('Ignored message of type "'+o()+'". Received before initialization.'))})),te(window,"readystatechange",ze),ze()}function ne(){}function te(e,n,t,o){e.addEventListener(n,t,!!U&&(o||{}))}function oe(e){return e.charAt(0).toUpperCase()+e.slice(1)}function ie(e){return M+"["+E+"] "+e}function re(e){v&&"object"==typeof window.console&&console.log(ie(e))}function ae(e){"object"==typeof window.console&&console.warn(ie(e))}function ue(){var e;!function(){function e(e){return"true"===e}var a=p.substr(I).split(":");E=a[0],i=n!==a[1]?Number(a[1]):i,c=n!==a[2]?e(a[2]):c,v=n!==a[3]?e(a[3]):v,y=n!==a[4]?Number(a[4]):y,t=n!==a[6]?e(a[6]):t,r=a[7],g=n!==a[8]?a[8]:g,o=a[9],u=a[10],N=n!==a[11]?Number(a[11]):N,w.enable=n!==a[12]&&e(a[12]),S=n!==a[13]?a[13]:S,W=n!==a[14]?a[14]:W,T=n!==a[15]?Boolean(a[15]):T}(),re("Initialising iFrame ("+window.location.href+")"),function(){function e(){var e=window.iFrameResizer;re("Reading data from page: "+JSON.stringify(e)),Object.keys(e).forEach(ce,e),P="onMessage"in e?e.onMessage:P,j="onReady"in e?e.onReady:j,z="targetOrigin"in e?e.targetOrigin:z,g="heightCalculationMethod"in e?e.heightCalculationMethod:g,W="widthCalculationMethod"in e?e.widthCalculationMethod:W}function n(e,n){return"function"==typeof e&&(re("Setup custom "+n+"CalcMethod"),B[n]=e,e="custom"),e}"iFrameResizer"in window&&Object===window.iFrameResizer.constructor&&(e(),g=n(g,"height"),W=n(W,"width"));re("TargetOrigin for parent set to: "+z)}(),function(){n===r&&(r=i+"px");se("margin",function(e,n){-1!==n.indexOf("-")&&(ae("Negative CSS value ignored for "+e),n="");return n}("margin",r))}(),se("background",o),se("padding",u),(e=document.createElement("div")).style.clear="both",e.style.display="block",e.style.height="0",document.body.appendChild(e),me(),ge(),document.documentElement.style.height="",document.body.style.height="",re('HTML & body height set to "auto"'),re("Enable public methods"),L.parentIFrame={autoResize:function(e){return!0===e&&!1===t?(t=!0,he()):!1===e&&!0===t&&(t=!1,le("remove"),null!==a&&a.disconnect(),clearInterval(b)),xe(0,0,"autoResize",JSON.stringify(t)),t},close:function(){xe(0,0,"close")},getId:function(){return E},getPageInfo:function(e){"function"==typeof e?(H=e,xe(0,0,"pageInfo")):(H=function(){},xe(0,0,"pageInfoStop"))},moveToAnchor:function(e){w.findTarget(e)},reset:function(){Se("parentIFrame.reset")},scrollTo:function(e,n){xe(n,e,"scrollTo")},scrollToOffset:function(e,n){xe(n,e,"scrollToOffset")},sendMessage:function(e,n){xe(0,0,"message",JSON.stringify(e),n)},setHeightCalculationMethod:function(e){g=e,me()},setWidthCalculationMethod:function(e){W=e,ge()},setTargetOrigin:function(e){re("Set targetOrigin: "+e),z=e},size:function(e,n){Ie("size","parentIFrame.size("+(e||"")+(n?","+n:"")+")",e,n)}},function(){if(!0!==T)return;function e(e){xe(0,0,e.type,e.screenY+":"+e.screenX)}function n(n,t){re("Add event listener: "+t),te(window.document,n,e)}n("mouseenter","Mouse Enter"),n("mouseleave","Mouse Leave")}(),he(),w=function(){function e(){return{x:window.pageXOffset!==n?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==n?window.pageYOffset:document.documentElement.scrollTop}}function t(n){var t=n.getBoundingClientRect(),o=e();return{x:parseInt(t.left,10)+parseInt(o.x,10),y:parseInt(t.top,10)+parseInt(o.y,10)}}function o(e){function o(e){var n=t(e);re("Moving to in page link (#"+i+") at x: "+n.x+" y: "+n.y),xe(n.y,n.x,"scrollToOffset")}var i=e.split("#")[1]||e,r=decodeURIComponent(i),a=document.getElementById(r)||document.getElementsByName(r)[0];n!==a?o(a):(re("In page link (#"+i+") not found in iFrame, so sending to parent"),xe(0,0,"inPageLink","#"+i))}function i(){var e=window.location.hash,n=window.location.href;""!==e&&"#"!==e&&o(n)}function r(){function e(e){function n(e){e.preventDefault(),o(this.getAttribute("href"))}"#"!==e.getAttribute("href")&&te(e,"click",n)}Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'),e)}function a(){te(window,"hashchange",i)}function u(){setTimeout(i,d)}function c(){Array.prototype.forEach&&document.querySelectorAll?(re("Setting up location.hash handlers"),r(),a(),u()):ae("In page linking not fully supported in this browser! (See README.md for IE8 workaround)")}w.enable?c():re("In page linking not enabled");return{findTarget:o}}(),Ie("init","Init message from host page"),j()}function ce(e){var n=e.split("Callback");if(2===n.length){var t="on"+n[0].charAt(0).toUpperCase()+n[0].slice(1);this[t]=this[e],delete this[e],ae("Deprecated: '"+e+"' has been renamed '"+t+"'. The old method will be removed in the next major version.")}}function se(e,t){n!==t&&""!==t&&"null"!==t&&(document.body.style[e]=t,re("Body "+e+' set to "'+t+'"'))}function de(e){var n={add:function(n){function t(){Ie(e.eventName,e.eventType)}q[n]=t,te(window,n,t,{passive:!0})},remove:function(e){var n,t,o,i=q[e];delete q[e],n=window,t=e,o=i,n.removeEventListener(t,o,!1)}};e.eventNames&&Array.prototype.map?(e.eventName=e.eventNames[0],e.eventNames.map(n[e.method])):n[e.method](e.eventName),re(oe(e.method)+" event listener: "+e.eventType)}function le(e){de({method:e,eventType:"Animation Start",eventNames:["animationstart","webkitAnimationStart"]}),de({method:e,eventType:"Animation Iteration",eventNames:["animationiteration","webkitAnimationIteration"]}),de({method:e,eventType:"Animation End",eventNames:["animationend","webkitAnimationEnd"]}),de({method:e,eventType:"Input",eventName:"input"}),de({method:e,eventType:"Mouse Up",eventName:"mouseup"}),de({method:e,eventType:"Mouse Down",eventName:"mousedown"}),de({method:e,eventType:"Orientation Change",eventName:"orientationchange"}),de({method:e,eventType:"Print",eventName:["afterprint","beforeprint"]}),de({method:e,eventType:"Ready State Change",eventName:"readystatechange"}),de({method:e,eventType:"Touch Start",eventName:"touchstart"}),de({method:e,eventType:"Touch End",eventName:"touchend"}),de({method:e,eventType:"Touch Cancel",eventName:"touchcancel"}),de({method:e,eventType:"Transition Start",eventNames:["transitionstart","webkitTransitionStart","MSTransitionStart","oTransitionStart","otransitionstart"]}),de({method:e,eventType:"Transition Iteration",eventNames:["transitioniteration","webkitTransitionIteration","MSTransitionIteration","oTransitionIteration","otransitioniteration"]}),de({method:e,eventType:"Transition End",eventNames:["transitionend","webkitTransitionEnd","MSTransitionEnd","oTransitionEnd","otransitionend"]}),"child"===S&&de({method:e,eventType:"IFrame Resized",eventName:"resize"})}function fe(e,n,t,o){return n!==e&&(e in t||(ae(e+" is not a valid option for "+o+"CalculationMethod."),e=n),re(o+' calculation method set to "'+e+'"')),e}function me(){g=fe(g,m,Z,"height")}function ge(){W=fe(W,A,_,"width")}function he(){var e;!0===t?(le("add"),e=0>y,window.MutationObserver||window.WebKitMutationObserver?e?pe():a=function(){function e(e){function n(e){!1===e.complete&&(re("Attach listeners to "+e.src),e.addEventListener("load",i,!1),e.addEventListener("error",r,!1),c.push(e))}"attributes"===e.type&&"src"===e.attributeName?n(e.target):"childList"===e.type&&Array.prototype.forEach.call(e.target.querySelectorAll("img"),n)}function n(e){c.splice(c.indexOf(e),1)}function t(e){re("Remove listeners from "+e.src),e.removeEventListener("load",i,!1),e.removeEventListener("error",r,!1),n(e)}function o(e,n,o){t(e.target),Ie(n,o+": "+e.target.src)}function i(e){o(e,"imageLoad","Image loaded")}function r(e){o(e,"imageLoadFailed","Image load failed")}function a(n){Ie("mutationObserver","mutationObserver: "+n[0].target+" "+n[0].type),n.forEach(e)}function u(){var e=document.querySelector("body"),n={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0};return d=new s(a),re("Create body MutationObserver"),d.observe(e,n),d}var c=[],s=window.MutationObserver||window.WebKitMutationObserver,d=u();return{disconnect:function(){"disconnect"in d&&(re("Disconnect body MutationObserver"),d.disconnect(),c.forEach(t))}}}():(re("MutationObserver not supported in this browser!"),pe())):re("Auto Resize disabled")}function pe(){0!==y&&(re("setInterval: "+y+"ms"),b=setInterval((function(){Ie("interval","setInterval: "+y)}),Math.abs(y)))}function we(e,n){var t=0;return n=n||document.body,t=null!==(t=document.defaultView.getComputedStyle(n,null))?t[e]:0,parseInt(t,10)}function ye(e,n){for(var t=n.length,o=0,i=0,r=oe(e),a=G(),u=0;u<t;u++)(o=n[u].getBoundingClientRect()[e]+we("margin"+r,n[u]))>i&&(i=o);return a=G()-a,re("Parsed "+t+" HTML elements"),re("Element position calculated in "+a+"ms"),function(e){e>F/2&&re("Event throttle increased to "+(F=2*e)+"ms")}(a),i}function be(e){return[e.bodyOffset(),e.bodyScroll(),e.documentElementOffset(),e.documentElementScroll()]}function ve(e,n){var t=document.querySelectorAll("["+n+"]");return 0===t.length&&(ae("No tagged elements ("+n+") found on page"),document.querySelectorAll("body *")),ye(e,t)}function Te(){return document.querySelectorAll("body *")}function Me(e,t,o,i){var r,a;!function(){function e(e,n){return!(Math.abs(e-n)<=N)}return r=n!==o?o:Z[g](),a=n!==i?i:_[W](),e(f,r)||c&&e(C,a)}()&&"init"!==e?!(e in{init:1,interval:1,size:1})&&(g in O||c&&W in O)?Se(t):e in{interval:1}||re("No change in size detected"):(Ee(),xe(f=r,C=a,e))}function Ie(e,n,t,o){k&&e in s?re("Trigger event cancelled: "+e):(e in{reset:1,resetPage:1,init:1}||re("Trigger event: "+n),"init"===e?Me(e,n,t,o):ee(e,n,t,o))}function Ee(){k||(k=!0,re("Trigger event lock on")),clearTimeout(R),R=setTimeout((function(){k=!1,re("Trigger event lock off"),re("--")}),d)}function Oe(e){f=Z[g](),C=_[W](),xe(f,C,e)}function Se(e){var n=g;g=m,re("Reset trigger event: "+e),Ee(),Oe("reset"),g=n}function xe(e,t,o,i,r){var a;n===r?r=z:re("Message targetOrigin: "+r),re("Sending message to host page ("+(a=E+":"+e+":"+t+":"+o+(n!==i?":"+i:""))+")"),x.postMessage(M+a,r)}function ze(){"loading"!==document.readyState&&window.parent.postMessage("[iFrameResizerChild]Ready","*")}}()}))};function o(e,n){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return i(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,c=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return u=e.done,e},e:function(e){c=!0,a=e},f:function(){try{u||null==t.return||t.return()}finally{if(c)throw a}}}}function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}!function(){function e(e,n){var t;try{t=new URL(e)}catch(e){return!1}return n&&"http:"===t.protocol||"https:"===t.protocol}function n(e){var n=[];for(var t in e)e.hasOwnProperty(t)&&n.push(encodeURIComponent(t)+"="+encodeURIComponent(e[t]));return n.join("&")}window.onload=function(){var i,r=o(document.getElementsByClassName("liane-form"));try{for(r.s();!(i=r.n()).done;){var a=i.value,u=a.getAttribute("data-url"),c=a.getAttribute("data-campaignId"),s=a.getAttribute("data-compact"),d=!!a.getAttribute("data-allowNonSecure"),l={c:c};if(s&&(l.compact=!0),e(u,d)){var f=document.createElement("iframe"),m="".concat(u.replace(/\/$/,""),"/f/?").concat(n(l));a.appendChild(f),f.setAttribute("style","min-width: 200px; width: 100%;"),f.setAttribute("src",m),f.setAttribute("frameborder",0),t.iframeResize({onMessage:function(e){if(e.message){var n=e.message;n.redirect&&(window.location=n.redirect),n.sent&&e.iframe.scrollIntoView()}}},f)}}}catch(e){r.e(e)}finally{r.f()}}}();
//# sourceMappingURL=liane-form.js.map
