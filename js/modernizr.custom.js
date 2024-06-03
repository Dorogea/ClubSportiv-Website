/*! modernizr 3.3.1 (Custom Build) | MIT http://modernizr.com/download/?-flexbox-touchevents-setclasses !*/
!function(e,n,t){function o(e,n){return typeof e===n}function s(){var e,n,t,s,r,i,a;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],n=C[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=o(n.fn,"function")?n.fn():n.fn,r=0;r<e.length;r++)i=e[r],a=i.split("."),1===a.length?w[a[0]]=s:(!w[a[0]]||w[a[0]]instanceof Boolean||(w[a[0]]=new Boolean(w[a[0]])),w[a[0]][a[1]]=s),g.push((s?"":"no-")+a.join("-"))}}function r(e){var n=b.className,t=w._config.classPrefix||"";if(S&&(n=n.baseVal),w._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}w._config.enableClasses&&(n+=" "+t+e.join(" "+t),S?b.className.baseVal=n:b.className=n)}function i(e,n){return!!~(""+e).indexOf(n)}function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):S?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function f(e,n){return function(){return e.apply(n,arguments)}}function u(e,n,t){var s;for(var r in e)if(e[r]in n)return t===!1?e[r]:(s=n[e[r]],o(s,"function")?f(s,t||n):s);return!1}function c(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function p(){var e=n.body;return e||(e=a(S?"svg":"body"),e.fake=!0),e}function d(e,t,o,s){var r,i,l,f,u="modernizr",c=a("div"),d=p();if(parseInt(o,10))for(;o--;)l=a("div"),l.id=s?s[o]:u+(o+1),c.appendChild(l);return r=a("style"),r.type="text/css",r.id="s"+u,(d.fake?d:c).appendChild(r),d.appendChild(c),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(n.createTextNode(e)),c.id=u,d.fake&&(d.style.background="",d.style.overflow="hidden",f=b.style.overflow,b.style.overflow="hidden",b.appendChild(d)),i=t(c,e),d.fake?(d.parentNode.removeChild(d),b.style.overflow=f,b.offsetHeight):c.parentNode.removeChild(c),!!i}function m(n,o){var s=n.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(c(n[s]),o))return!0;return!1}if("CSSSupportsRule"in e){for(var r=[];s--;)r.push("("+c(n[s])+":"+o+")");return r=r.join(" or "),d("@supports ("+r+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function h(e,n,s,r){function f(){c&&(delete j.style,delete j.modElem)}if(r=o(r,"undefined")?!1:r,!o(s,"undefined")){var u=m(e,s);if(!o(u,"undefined"))return u}for(var c,p,d,h,v,y=["modernizr","tspan"];!j.style;)c=!0,j.modElem=a(y.shift()),j.style=j.modElem.style;for(d=e.length,p=0;d>p;p++)if(h=e[p],v=j.style[h],i(h,"-")&&(h=l(h)),j.style[h]!==t){if(r||o(s,"undefined"))return f(),"pfx"==n?h:!0;try{j.style[h]=s}catch(g){}if(j.style[h]!=v)return f(),"pfx"==n?h:!0}return f(),!1}function v(e,n,t,s,r){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+T.join(i+" ")+i).split(" ");return o(n,"string")||o(n,"undefined")?h(a,n,s,r):(a=(e+" "+z.join(i+" ")+i).split(" "),u(a,n,t))}function y(e,n,o){return v(e,t,t,n,o)}var g=[],C=[],x={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){C.push({name:e,fn:n,options:t})},addAsyncTest:function(e){C.push({name:null,fn:e})}},w=function(){};w.prototype=x,w=new w;var b=n.documentElement,S="svg"===b.nodeName.toLowerCase(),_="Moz O ms Webkit",T=x._config.usePrefixes?_.split(" "):[];x._cssomPrefixes=T;var z=x._config.usePrefixes?_.toLowerCase().split(" "):[];x._domPrefixes=z;var P={elem:a("modernizr")};w._q.push(function(){delete P.elem});var j={style:P.elem.style};w._q.unshift(function(){delete j.style}),x.testAllProps=v,x.testAllProps=y,w.addTest("flexbox",y("flexBasis","1px",!0));var E=x._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];x._prefixes=E;var N=x.testStyles=d;w.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",E.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");N(o,function(e){t=9===e.offsetTop})}return t}),s(),r(g),delete x.addTest,delete x.addAsyncTest;for(var k=0;k<w._q.length;k++)w._q[k]();e.Modernizr=w}(window,document);