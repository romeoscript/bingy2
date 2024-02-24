/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0;
}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",j.childNodes[0].style.borderCollapse="separate",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ra(a),g=l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Sa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Oa.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+eb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{
marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g,sb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(sb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var tb,ub,vb=n.expr.attrHandle,wb=/^(?:checked|selected)$/i,xb=l.getSetAttribute,yb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ub:tb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?yb&&xb||!wb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(xb?c:d)}}),ub={set:function(a,b,c){return b===!1?n.removeAttr(a,c):yb&&xb||!wb.test(c)?a.setAttribute(!xb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=vb[b]||n.find.attr;yb&&xb||!wb.test(b)?vb[b]=function(a,b,d){var e,f;return d||(f=vb[b],vb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,vb[b]=f),e}:vb[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),yb&&xb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):tb&&tb.set(a,b,c)}}),xb||(tb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},vb.id=vb.name=vb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:tb.set},n.attrHooks.contenteditable={set:function(a,b,c){tb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var zb=/^(?:input|select|textarea|button|object)$/i,Ab=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):zb.test(a.nodeName)||Ab.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Bb=/[\t\r\n\f]/g;function Cb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Cb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Cb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Cb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Cb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Cb(c)+" ").replace(Bb," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Db=a.location,Eb=n.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Hb=/#.*$/,Ib=/([?&])_=[^&]*/,Jb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Kb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lb=/^(?:GET|HEAD)$/,Mb=/^\/\//,Nb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ob={},Pb={},Qb="*/".concat("*"),Rb=Db.href,Sb=Nb.exec(Rb.toLowerCase())||[];function Tb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Ub(a,b,c,d){var e={},f=a===Pb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Vb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Wb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Xb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rb,type:"GET",isLocal:Kb.test(Sb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Vb(Vb(a,n.ajaxSettings),b):Vb(n.ajaxSettings,a)},ajaxPrefilter:Tb(Ob),ajaxTransport:Tb(Pb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Jb.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Rb)+"").replace(Hb,"").replace(Mb,Sb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Nb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Sb[1]&&d[2]===Sb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Sb[3]||("http:"===Sb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Ub(Ob,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Lb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ib.test(f)?f.replace(Ib,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Qb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Ub(Pb,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Wb(l,w,d)),v=Xb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Yb(a){return a.style&&a.style.display||n.css(a,"display")}function Zb(a){if(!n.contains(a.ownerDocument||d,a))return!0;while(a&&1===a.nodeType){if("none"===Yb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Zb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var $b=/%20/g,_b=/\[\]$/,ac=/\r?\n/g,bc=/^(?:submit|button|image|reset|file)$/i,cc=/^(?:input|select|textarea|keygen)/i;function dc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||_b.test(a)?d(a,e):dc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)dc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)dc(c,a[c],b,e);return d.join("&").replace($b,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&cc.test(this.nodeName)&&!bc.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(ac,"\r\n")}}):{name:b.name,value:c.replace(ac,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?ic():d.documentMode>8?hc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&hc()||ic()}:hc;var ec=0,fc={},gc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in fc)fc[a](void 0,!0)}),l.cors=!!gc&&"withCredentials"in gc,gc=l.ajax=!!gc,gc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++ec;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete fc[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=fc[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function hc(){try{return new a.XMLHttpRequest}catch(b){}}function ic(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var jc=[],kc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||n.expando+"_"+Eb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var lc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&lc)return lc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function mc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=mc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=mc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({
padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var nc=a.jQuery,oc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=oc),b&&a.jQuery===n&&(a.jQuery=nc),n},b||(a.jQuery=a.$=n),n});
/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */
 !function(){"use strict";function e(e){function t(t,n){var s,h,k=t==window,y=n&&void 0!==n.message?n.message:void 0;if(n=e.extend({},e.blockUI.defaults,n||{}),!n.ignoreIfBlocked||!e(t).data("blockUI.isBlocked")){if(n.overlayCSS=e.extend({},e.blockUI.defaults.overlayCSS,n.overlayCSS||{}),s=e.extend({},e.blockUI.defaults.css,n.css||{}),n.onOverlayClick&&(n.overlayCSS.cursor="pointer"),h=e.extend({},e.blockUI.defaults.themedCSS,n.themedCSS||{}),y=void 0===y?n.message:y,k&&p&&o(window,{fadeOut:0}),y&&"string"!=typeof y&&(y.parentNode||y.jquery)){var m=y.jquery?y[0]:y,v={};e(t).data("blockUI.history",v),v.el=m,v.parent=m.parentNode,v.display=m.style.display,v.position=m.style.position,v.parent&&v.parent.removeChild(m)}e(t).data("blockUI.onUnblock",n.onUnblock);var g,I,w,U,x=n.baseZ;g=e(r||n.forceIframe?'<iframe class="blockUI" style="z-index:'+x++ +';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+n.iframeSrc+'"></iframe>':'<div class="blockUI" style="display:none"></div>'),I=e(n.theme?'<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+x++ +';display:none"></div>':'<div class="blockUI blockOverlay" style="z-index:'+x++ +';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'),n.theme&&k?(U='<div class="blockUI '+n.blockMsgClass+' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(x+10)+';display:none;position:fixed">',n.title&&(U+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(n.title||"&nbsp;")+"</div>"),U+='<div class="ui-widget-content ui-dialog-content"></div>',U+="</div>"):n.theme?(U='<div class="blockUI '+n.blockMsgClass+' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(x+10)+';display:none;position:absolute">',n.title&&(U+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(n.title||"&nbsp;")+"</div>"),U+='<div class="ui-widget-content ui-dialog-content"></div>',U+="</div>"):U=k?'<div class="blockUI '+n.blockMsgClass+' blockPage" style="z-index:'+(x+10)+';display:none;position:fixed"></div>':'<div class="blockUI '+n.blockMsgClass+' blockElement" style="z-index:'+(x+10)+';display:none;position:absolute"></div>',w=e(U),y&&(n.theme?(w.css(h),w.addClass("ui-widget-content")):w.css(s)),n.theme||I.css(n.overlayCSS),I.css("position",k?"fixed":"absolute"),(r||n.forceIframe)&&g.css("opacity",0);var C=[g,I,w],S=e(k?"body":t);e.each(C,function(){this.appendTo(S)}),n.theme&&n.draggable&&e.fn.draggable&&w.draggable({handle:".ui-dialog-titlebar",cancel:"li"});var O=f&&(!e.support.boxModel||e("object,embed",k?null:t).length>0);if(u||O){if(k&&n.allowBodyStretch&&e.support.boxModel&&e("html,body").css("height","100%"),(u||!e.support.boxModel)&&!k)var E=d(t,"borderTopWidth"),T=d(t,"borderLeftWidth"),M=E?"(0 - "+E+")":0,B=T?"(0 - "+T+")":0;e.each(C,function(e,t){var o=t[0].style;if(o.position="absolute",2>e)k?o.setExpression("height","Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:"+n.quirksmodeOffsetHack+') + "px"'):o.setExpression("height",'this.parentNode.offsetHeight + "px"'),k?o.setExpression("width",'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"'):o.setExpression("width",'this.parentNode.offsetWidth + "px"'),B&&o.setExpression("left",B),M&&o.setExpression("top",M);else if(n.centerY)k&&o.setExpression("top",'(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),o.marginTop=0;else if(!n.centerY&&k){var i=n.css&&n.css.top?parseInt(n.css.top,10):0,s="((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "+i+') + "px"';o.setExpression("top",s)}})}if(y&&(n.theme?w.find(".ui-widget-content").append(y):w.append(y),(y.jquery||y.nodeType)&&e(y).show()),(r||n.forceIframe)&&n.showOverlay&&g.show(),n.fadeIn){var j=n.onBlock?n.onBlock:c,H=n.showOverlay&&!y?j:c,z=y?j:c;n.showOverlay&&I._fadeIn(n.fadeIn,H),y&&w._fadeIn(n.fadeIn,z)}else n.showOverlay&&I.show(),y&&w.show(),n.onBlock&&n.onBlock.bind(w)();if(i(1,t,n),k?(p=w[0],b=e(n.focusableElements,p),n.focusInput&&setTimeout(l,20)):a(w[0],n.centerX,n.centerY),n.timeout){var W=setTimeout(function(){k?e.unblockUI(n):e(t).unblock(n)},n.timeout);e(t).data("blockUI.timeout",W)}}}function o(t,o){var s,l=t==window,a=e(t),d=a.data("blockUI.history"),c=a.data("blockUI.timeout");c&&(clearTimeout(c),a.removeData("blockUI.timeout")),o=e.extend({},e.blockUI.defaults,o||{}),i(0,t,o),null===o.onUnblock&&(o.onUnblock=a.data("blockUI.onUnblock"),a.removeData("blockUI.onUnblock"));var r;r=l?e("body").children().filter(".blockUI").add("body > .blockUI"):a.find(">.blockUI"),o.cursorReset&&(r.length>1&&(r[1].style.cursor=o.cursorReset),r.length>2&&(r[2].style.cursor=o.cursorReset)),l&&(p=b=null),o.fadeOut?(s=r.length,r.stop().fadeOut(o.fadeOut,function(){0===--s&&n(r,d,o,t)})):n(r,d,o,t)}function n(t,o,n,i){var s=e(i);if(!s.data("blockUI.isBlocked")){t.each(function(){this.parentNode&&this.parentNode.removeChild(this)}),o&&o.el&&(o.el.style.display=o.display,o.el.style.position=o.position,o.el.style.cursor="default",o.parent&&o.parent.appendChild(o.el),s.removeData("blockUI.history")),s.data("blockUI.static")&&s.css("position","static"),"function"==typeof n.onUnblock&&n.onUnblock(i,n);var l=e(document.body),a=l.width(),d=l[0].style.width;l.width(a-1).width(a),l[0].style.width=d}}function i(t,o,n){var i=o==window,l=e(o);if((t||(!i||p)&&(i||l.data("blockUI.isBlocked")))&&(l.data("blockUI.isBlocked",t),i&&n.bindEvents&&(!t||n.showOverlay))){var a="mousedown mouseup keydown keypress keyup touchstart touchend touchmove";t?e(document).bind(a,n,s):e(document).unbind(a,s)}}function s(t){if("keydown"===t.type&&t.keyCode&&9==t.keyCode&&p&&t.data.constrainTabKey){var o=b,n=!t.shiftKey&&t.target===o[o.length-1],i=t.shiftKey&&t.target===o[0];if(n||i)return setTimeout(function(){l(i)},10),!1}var s=t.data,a=e(t.target);return a.hasClass("blockOverlay")&&s.onOverlayClick&&s.onOverlayClick(t),a.parents("div."+s.blockMsgClass).length>0?!0:0===a.parents().children().filter("div.blockUI").length}function l(e){if(b){var t=b[e===!0?b.length-1:0];t&&t.focus()}}function a(e,t,o){var n=e.parentNode,i=e.style,s=(n.offsetWidth-e.offsetWidth)/2-d(n,"borderLeftWidth"),l=(n.offsetHeight-e.offsetHeight)/2-d(n,"borderTopWidth");t&&(i.left=s>0?s+"px":"0"),o&&(i.top=l>0?l+"px":"0")}function d(t,o){return parseInt(e.css(t,o),10)||0}e.fn._fadeIn=e.fn.fadeIn;var c=e.noop||function(){},r=/MSIE/.test(navigator.userAgent),u=/MSIE 6.0/.test(navigator.userAgent)&&!/MSIE 8.0/.test(navigator.userAgent),f=(document.documentMode||0,e.isFunction(document.createElement("div").style.setExpression));e.blockUI=function(e){t(window,e)},e.unblockUI=function(e){o(window,e)},e.growlUI=function(t,o,n,i){var s=e('<div class="growlUI"></div>');t&&s.append("<h1>"+t+"</h1>"),o&&s.append("<h2>"+o+"</h2>"),void 0===n&&(n=3e3);var l=function(t){t=t||{},e.blockUI({message:s,fadeIn:"undefined"!=typeof t.fadeIn?t.fadeIn:700,fadeOut:"undefined"!=typeof t.fadeOut?t.fadeOut:1e3,timeout:"undefined"!=typeof t.timeout?t.timeout:n,centerY:!1,showOverlay:!1,onUnblock:i,css:e.blockUI.defaults.growlCSS})};l();s.css("opacity");s.mouseover(function(){l({fadeIn:0,timeout:3e4});var t=e(".blockMsg");t.stop(),t.fadeTo(300,1)}).mouseout(function(){e(".blockMsg").fadeOut(1e3)})},e.fn.block=function(o){if(this[0]===window)return e.blockUI(o),this;var n=e.extend({},e.blockUI.defaults,o||{});return this.each(function(){var t=e(this);n.ignoreIfBlocked&&t.data("blockUI.isBlocked")||t.unblock({fadeOut:0})}),this.each(function(){"static"==e.css(this,"position")&&(this.style.position="relative",e(this).data("blockUI.static",!0)),this.style.zoom=1,t(this,o)})},e.fn.unblock=function(t){return this[0]===window?(e.unblockUI(t),this):this.each(function(){o(this,t)})},e.blockUI.version=2.7,e.blockUI.defaults={message:"<h1>Please wait...</h1>",title:null,draggable:!0,theme:!1,css:{padding:0,margin:0,width:"30%",top:"40%",left:"35%",textAlign:"center",color:"#000",border:"3px solid #aaa",backgroundColor:"#fff",cursor:"wait"},themedCSS:{width:"30%",top:"40%",left:"35%"},overlayCSS:{backgroundColor:"#000",opacity:.6,cursor:"wait"},cursorReset:"default",growlCSS:{width:"350px",top:"10px",left:"",right:"10px",border:"none",padding:"5px",opacity:.6,cursor:"default",color:"#fff",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px","border-radius":"10px"},iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",forceIframe:!1,baseZ:1e3,centerX:!0,centerY:!0,allowBodyStretch:!0,bindEvents:!0,constrainTabKey:!0,fadeIn:200,fadeOut:400,timeout:0,showOverlay:!0,focusInput:!0,focusableElements:":input:enabled:visible",onBlock:null,onUnblock:null,onOverlayClick:null,quirksmodeOffsetHack:4,blockMsgClass:"blockMsg",ignoreIfBlocked:!1};var p=null,b=[]}"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],e):e(jQuery)}();
/*!
  * Bootstrap v4.0.0 (https://getbootstrap.com)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery")):"function"==typeof define&&define.amd?define(["exports","jquery"],e):e(t.bootstrap={},t.jQuery)}(this,function(t,e){"use strict";function n(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function i(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}for(var o,s,a,l,c,h,f,u,d,p,g,m,_,v,E,y,b,T,C,w,I,A,D,S,O,N,k=function(t){var e=!1;function n(e){var n=this,r=!1;return t(this).one(i.TRANSITION_END,function(){r=!0}),setTimeout(function(){r||i.triggerTransitionEnd(n)},e),this}var i={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement:function(e){var n,i=e.getAttribute("data-target");i&&"#"!==i||(i=e.getAttribute("href")||""),"#"===i.charAt(0)&&(n=i,i=n="function"==typeof t.escapeSelector?t.escapeSelector(n).substr(1):n.replace(/(:|\.|\[|\]|,|=|@)/g,"\\$1"));try{return t(document).find(i).length>0?i:null}catch(t){return null}},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(n){t(n).trigger(e.end)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var o=n[r],s=e[r],a=s&&i.isElement(s)?"element":(l=s,{}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase());if(!new RegExp(o).test(a))throw new Error(t.toUpperCase()+': Option "'+r+'" provided type "'+a+'" but expected type "'+o+'".')}var l}};return e=("undefined"==typeof window||!window.QUnit)&&{end:"transitionend"},t.fn.emulateTransitionEnd=n,i.supportsTransitionEnd()&&(t.event.special[i.TRANSITION_END]={bindType:e.end,delegateType:e.end,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}),i}(e=e&&e.hasOwnProperty("default")?e.default:e),L=(s="alert",l="."+(a="bs.alert"),c=(o=e).fn[s],h={CLOSE:"close"+l,CLOSED:"closed"+l,CLICK_DATA_API:"click"+l+".data-api"},f="alert",u="fade",d="show",p=function(){function t(t){this._element=t}var e=t.prototype;return e.close=function(t){t=t||this._element;var e=this._getRootElement(t);this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},e.dispose=function(){o.removeData(this._element,a),this._element=null},e._getRootElement=function(t){var e=k.getSelectorFromElement(t),n=!1;return e&&(n=o(e)[0]),n||(n=o(t).closest("."+f)[0]),n},e._triggerCloseEvent=function(t){var e=o.Event(h.CLOSE);return o(t).trigger(e),e},e._removeElement=function(t){var e=this;o(t).removeClass(d),k.supportsTransitionEnd()&&o(t).hasClass(u)?o(t).one(k.TRANSITION_END,function(n){return e._destroyElement(t,n)}).emulateTransitionEnd(150):this._destroyElement(t)},e._destroyElement=function(t){o(t).detach().trigger(h.CLOSED).remove()},t._jQueryInterface=function(e){return this.each(function(){var n=o(this),i=n.data(a);i||(i=new t(this),n.data(a,i)),"close"===e&&i[e](this)})},t._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},i(t,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),t}(),o(document).on(h.CLICK_DATA_API,'[data-dismiss="alert"]',p._handleDismiss(new p)),o.fn[s]=p._jQueryInterface,o.fn[s].Constructor=p,o.fn[s].noConflict=function(){return o.fn[s]=c,p._jQueryInterface},p),P=(m="button",v="."+(_="bs.button"),E=".data-api",y=(g=e).fn[m],b="active",T="btn",C="focus",w='[data-toggle^="button"]',I='[data-toggle="buttons"]',A="input",D=".active",S=".btn",O={CLICK_DATA_API:"click"+v+E,FOCUS_BLUR_DATA_API:"focus"+v+E+" blur"+v+E},N=function(){function t(t){this._element=t}var e=t.prototype;return e.toggle=function(){var t=!0,e=!0,n=g(this._element).closest(I)[0];if(n){var i=g(this._element).find(A)[0];if(i){if("radio"===i.type)if(i.checked&&g(this._element).hasClass(b))t=!1;else{var r=g(n).find(D)[0];r&&g(r).removeClass(b)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!g(this._element).hasClass(b),g(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!g(this._element).hasClass(b)),t&&g(this._element).toggleClass(b)},e.dispose=function(){g.removeData(this._element,_),this._element=null},t._jQueryInterface=function(e){return this.each(function(){var n=g(this).data(_);n||(n=new t(this),g(this).data(_,n)),"toggle"===e&&n[e]()})},i(t,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),t}(),g(document).on(O.CLICK_DATA_API,w,function(t){t.preventDefault();var e=t.target;g(e).hasClass(T)||(e=g(e).closest(S)),N._jQueryInterface.call(g(e),"toggle")}).on(O.FOCUS_BLUR_DATA_API,w,function(t){var e=g(t.target).closest(S)[0];g(e).toggleClass(C,/^focus(in)?$/.test(t.type))}),g.fn[m]=N._jQueryInterface,g.fn[m].Constructor=N,g.fn[m].noConflict=function(){return g.fn[m]=y,N._jQueryInterface},N),x=function(t){var e="carousel",n="bs.carousel",o="."+n,s=t.fn[e],a={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},l={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},c="next",h="prev",f="left",u="right",d={SLIDE:"slide"+o,SLID:"slid"+o,KEYDOWN:"keydown"+o,MOUSEENTER:"mouseenter"+o,MOUSELEAVE:"mouseleave"+o,TOUCHEND:"touchend"+o,LOAD_DATA_API:"load"+o+".data-api",CLICK_DATA_API:"click"+o+".data-api"},p="carousel",g="active",m="slide",_="carousel-item-right",v="carousel-item-left",E="carousel-item-next",y="carousel-item-prev",b={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},T=function(){function s(e,n){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(n),this._element=t(e)[0],this._indicatorsElement=t(this._element).find(b.INDICATORS)[0],this._addEventListeners()}var T=s.prototype;return T.next=function(){this._isSliding||this._slide(c)},T.nextWhenVisible=function(){!document.hidden&&t(this._element).is(":visible")&&"hidden"!==t(this._element).css("visibility")&&this.next()},T.prev=function(){this._isSliding||this._slide(h)},T.pause=function(e){e||(this._isPaused=!0),t(this._element).find(b.NEXT_PREV)[0]&&k.supportsTransitionEnd()&&(k.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},T.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},T.to=function(e){var n=this;this._activeElement=t(this._element).find(b.ACTIVE_ITEM)[0];var i=this._getItemIndex(this._activeElement);if(!(e>this._items.length-1||e<0))if(this._isSliding)t(this._element).one(d.SLID,function(){return n.to(e)});else{if(i===e)return this.pause(),void this.cycle();var r=e>i?c:h;this._slide(r,this._items[e])}},T.dispose=function(){t(this._element).off(o),t.removeData(this._element,n),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},T._getConfig=function(t){return t=r({},a,t),k.typeCheckConfig(e,t,l),t},T._addEventListeners=function(){var e=this;this._config.keyboard&&t(this._element).on(d.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&(t(this._element).on(d.MOUSEENTER,function(t){return e.pause(t)}).on(d.MOUSELEAVE,function(t){return e.cycle(t)}),"ontouchstart"in document.documentElement&&t(this._element).on(d.TOUCHEND,function(){e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval)}))},T._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},T._getItemIndex=function(e){return this._items=t.makeArray(t(e).parent().find(b.ITEM)),this._items.indexOf(e)},T._getItemByDirection=function(t,e){var n=t===c,i=t===h,r=this._getItemIndex(e),o=this._items.length-1;if((i&&0===r||n&&r===o)&&!this._config.wrap)return e;var s=(r+(t===h?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},T._triggerSlideEvent=function(e,n){var i=this._getItemIndex(e),r=this._getItemIndex(t(this._element).find(b.ACTIVE_ITEM)[0]),o=t.Event(d.SLIDE,{relatedTarget:e,direction:n,from:r,to:i});return t(this._element).trigger(o),o},T._setActiveIndicatorElement=function(e){if(this._indicatorsElement){t(this._indicatorsElement).find(b.ACTIVE).removeClass(g);var n=this._indicatorsElement.children[this._getItemIndex(e)];n&&t(n).addClass(g)}},T._slide=function(e,n){var i,r,o,s=this,a=t(this._element).find(b.ACTIVE_ITEM)[0],l=this._getItemIndex(a),h=n||a&&this._getItemByDirection(e,a),p=this._getItemIndex(h),T=Boolean(this._interval);if(e===c?(i=v,r=E,o=f):(i=_,r=y,o=u),h&&t(h).hasClass(g))this._isSliding=!1;else if(!this._triggerSlideEvent(h,o).isDefaultPrevented()&&a&&h){this._isSliding=!0,T&&this.pause(),this._setActiveIndicatorElement(h);var C=t.Event(d.SLID,{relatedTarget:h,direction:o,from:l,to:p});k.supportsTransitionEnd()&&t(this._element).hasClass(m)?(t(h).addClass(r),k.reflow(h),t(a).addClass(i),t(h).addClass(i),t(a).one(k.TRANSITION_END,function(){t(h).removeClass(i+" "+r).addClass(g),t(a).removeClass(g+" "+r+" "+i),s._isSliding=!1,setTimeout(function(){return t(s._element).trigger(C)},0)}).emulateTransitionEnd(600)):(t(a).removeClass(g),t(h).addClass(g),this._isSliding=!1,t(this._element).trigger(C)),T&&this.cycle()}},s._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n),o=r({},a,t(this).data());"object"==typeof e&&(o=r({},o,e));var l="string"==typeof e?e:o.slide;if(i||(i=new s(this,o),t(this).data(n,i)),"number"==typeof e)i.to(e);else if("string"==typeof l){if("undefined"==typeof i[l])throw new TypeError('No method named "'+l+'"');i[l]()}else o.interval&&(i.pause(),i.cycle())})},s._dataApiClickHandler=function(e){var i=k.getSelectorFromElement(this);if(i){var o=t(i)[0];if(o&&t(o).hasClass(p)){var a=r({},t(o).data(),t(this).data()),l=this.getAttribute("data-slide-to");l&&(a.interval=!1),s._jQueryInterface.call(t(o),a),l&&t(o).data(n).to(l),e.preventDefault()}}},i(s,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),s}();return t(document).on(d.CLICK_DATA_API,b.DATA_SLIDE,T._dataApiClickHandler),t(window).on(d.LOAD_DATA_API,function(){t(b.DATA_RIDE).each(function(){var e=t(this);T._jQueryInterface.call(e,e.data())})}),t.fn[e]=T._jQueryInterface,t.fn[e].Constructor=T,t.fn[e].noConflict=function(){return t.fn[e]=s,T._jQueryInterface},T}(e),R=function(t){var e="collapse",n="bs.collapse",o="."+n,s=t.fn[e],a={toggle:!0,parent:""},l={toggle:"boolean",parent:"(string|element)"},c={SHOW:"show"+o,SHOWN:"shown"+o,HIDE:"hide"+o,HIDDEN:"hidden"+o,CLICK_DATA_API:"click"+o+".data-api"},h="show",f="collapse",u="collapsing",d="collapsed",p="width",g="height",m={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},_=function(){function o(e,n){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(n),this._triggerArray=t.makeArray(t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var i=t(m.DATA_TOGGLE),r=0;r<i.length;r++){var o=i[r],s=k.getSelectorFromElement(o);null!==s&&t(s).filter(e).length>0&&(this._selector=s,this._triggerArray.push(o))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var s=o.prototype;return s.toggle=function(){t(this._element).hasClass(h)?this.hide():this.show()},s.show=function(){var e,i,r=this;if(!this._isTransitioning&&!t(this._element).hasClass(h)&&(this._parent&&0===(e=t.makeArray(t(this._parent).find(m.ACTIVES).filter('[data-parent="'+this._config.parent+'"]'))).length&&(e=null),!(e&&(i=t(e).not(this._selector).data(n))&&i._isTransitioning))){var s=t.Event(c.SHOW);if(t(this._element).trigger(s),!s.isDefaultPrevented()){e&&(o._jQueryInterface.call(t(e).not(this._selector),"hide"),i||t(e).data(n,null));var a=this._getDimension();t(this._element).removeClass(f).addClass(u),this._element.style[a]=0,this._triggerArray.length>0&&t(this._triggerArray).removeClass(d).attr("aria-expanded",!0),this.setTransitioning(!0);var l=function(){t(r._element).removeClass(u).addClass(f).addClass(h),r._element.style[a]="",r.setTransitioning(!1),t(r._element).trigger(c.SHOWN)};if(k.supportsTransitionEnd()){var p="scroll"+(a[0].toUpperCase()+a.slice(1));t(this._element).one(k.TRANSITION_END,l).emulateTransitionEnd(600),this._element.style[a]=this._element[p]+"px"}else l()}}},s.hide=function(){var e=this;if(!this._isTransitioning&&t(this._element).hasClass(h)){var n=t.Event(c.HIDE);if(t(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension();if(this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",k.reflow(this._element),t(this._element).addClass(u).removeClass(f).removeClass(h),this._triggerArray.length>0)for(var r=0;r<this._triggerArray.length;r++){var o=this._triggerArray[r],s=k.getSelectorFromElement(o);if(null!==s)t(s).hasClass(h)||t(o).addClass(d).attr("aria-expanded",!1)}this.setTransitioning(!0);var a=function(){e.setTransitioning(!1),t(e._element).removeClass(u).addClass(f).trigger(c.HIDDEN)};this._element.style[i]="",k.supportsTransitionEnd()?t(this._element).one(k.TRANSITION_END,a).emulateTransitionEnd(600):a()}}},s.setTransitioning=function(t){this._isTransitioning=t},s.dispose=function(){t.removeData(this._element,n),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},s._getConfig=function(t){return(t=r({},a,t)).toggle=Boolean(t.toggle),k.typeCheckConfig(e,t,l),t},s._getDimension=function(){return t(this._element).hasClass(p)?p:g},s._getParent=function(){var e=this,n=null;k.isElement(this._config.parent)?(n=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(n=this._config.parent[0])):n=t(this._config.parent)[0];var i='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return t(n).find(i).each(function(t,n){e._addAriaAndCollapsedClass(o._getTargetFromElement(n),[n])}),n},s._addAriaAndCollapsedClass=function(e,n){if(e){var i=t(e).hasClass(h);n.length>0&&t(n).toggleClass(d,!i).attr("aria-expanded",i)}},o._getTargetFromElement=function(e){var n=k.getSelectorFromElement(e);return n?t(n)[0]:null},o._jQueryInterface=function(e){return this.each(function(){var i=t(this),s=i.data(n),l=r({},a,i.data(),"object"==typeof e&&e);if(!s&&l.toggle&&/show|hide/.test(e)&&(l.toggle=!1),s||(s=new o(this,l),i.data(n,s)),"string"==typeof e){if("undefined"==typeof s[e])throw new TypeError('No method named "'+e+'"');s[e]()}})},i(o,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),o}();return t(document).on(c.CLICK_DATA_API,m.DATA_TOGGLE,function(e){"A"===e.currentTarget.tagName&&e.preventDefault();var i=t(this),r=k.getSelectorFromElement(this);t(r).each(function(){var e=t(this),r=e.data(n)?"toggle":i.data();_._jQueryInterface.call(e,r)})}),t.fn[e]=_._jQueryInterface,t.fn[e].Constructor=_,t.fn[e].noConflict=function(){return t.fn[e]=s,_._jQueryInterface},_}(e),j="undefined"!=typeof window&&"undefined"!=typeof document,H=["Edge","Trident","Firefox"],M=0,W=0;W<H.length;W+=1)if(j&&navigator.userAgent.indexOf(H[W])>=0){M=1;break}var U=j&&window.Promise?function(t){var e=!1;return function(){e||(e=!0,window.Promise.resolve().then(function(){e=!1,t()}))}}:function(t){var e=!1;return function(){e||(e=!0,setTimeout(function(){e=!1,t()},M))}};function B(t){return t&&"[object Function]"==={}.toString.call(t)}function F(t,e){if(1!==t.nodeType)return[];var n=getComputedStyle(t,null);return e?n[e]:n}function K(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}function V(t){if(!t)return document.body;switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body;case"#document":return t.body}var e=F(t),n=e.overflow,i=e.overflowX,r=e.overflowY;return/(auto|scroll)/.test(n+r+i)?t:V(K(t))}function Q(t){var e=t&&t.offsetParent,n=e&&e.nodeName;return n&&"BODY"!==n&&"HTML"!==n?-1!==["TD","TABLE"].indexOf(e.nodeName)&&"static"===F(e,"position")?Q(e):e:t?t.ownerDocument.documentElement:document.documentElement}function Y(t){return null!==t.parentNode?Y(t.parentNode):t}function G(t,e){if(!(t&&t.nodeType&&e&&e.nodeType))return document.documentElement;var n=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,i=n?t:e,r=n?e:t,o=document.createRange();o.setStart(i,0),o.setEnd(r,0);var s,a,l=o.commonAncestorContainer;if(t!==l&&e!==l||i.contains(r))return"BODY"===(a=(s=l).nodeName)||"HTML"!==a&&Q(s.firstElementChild)!==s?Q(l):l;var c=Y(t);return c.host?G(c.host,e):G(t,Y(e).host)}function q(t){var e="top"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft",n=t.nodeName;if("BODY"===n||"HTML"===n){var i=t.ownerDocument.documentElement;return(t.ownerDocument.scrollingElement||i)[e]}return t[e]}function z(t,e){var n="x"===e?"Left":"Top",i="Left"===n?"Right":"Bottom";return parseFloat(t["border"+n+"Width"],10)+parseFloat(t["border"+i+"Width"],10)}var X=void 0,Z=function(){return void 0===X&&(X=-1!==navigator.appVersion.indexOf("MSIE 10")),X};function J(t,e,n,i){return Math.max(e["offset"+t],e["scroll"+t],n["client"+t],n["offset"+t],n["scroll"+t],Z()?n["offset"+t]+i["margin"+("Height"===t?"Top":"Left")]+i["margin"+("Height"===t?"Bottom":"Right")]:0)}function $(){var t=document.body,e=document.documentElement,n=Z()&&getComputedStyle(e);return{height:J("Height",t,e,n),width:J("Width",t,e,n)}}var tt=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},et=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),nt=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},it=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};function rt(t){return it({},t,{right:t.left+t.width,bottom:t.top+t.height})}function ot(t){var e={};if(Z())try{e=t.getBoundingClientRect();var n=q(t,"top"),i=q(t,"left");e.top+=n,e.left+=i,e.bottom+=n,e.right+=i}catch(t){}else e=t.getBoundingClientRect();var r={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},o="HTML"===t.nodeName?$():{},s=o.width||t.clientWidth||r.right-r.left,a=o.height||t.clientHeight||r.bottom-r.top,l=t.offsetWidth-s,c=t.offsetHeight-a;if(l||c){var h=F(t);l-=z(h,"x"),c-=z(h,"y"),r.width-=l,r.height-=c}return rt(r)}function st(t,e){var n=Z(),i="HTML"===e.nodeName,r=ot(t),o=ot(e),s=V(t),a=F(e),l=parseFloat(a.borderTopWidth,10),c=parseFloat(a.borderLeftWidth,10),h=rt({top:r.top-o.top-l,left:r.left-o.left-c,width:r.width,height:r.height});if(h.marginTop=0,h.marginLeft=0,!n&&i){var f=parseFloat(a.marginTop,10),u=parseFloat(a.marginLeft,10);h.top-=l-f,h.bottom-=l-f,h.left-=c-u,h.right-=c-u,h.marginTop=f,h.marginLeft=u}return(n?e.contains(s):e===s&&"BODY"!==s.nodeName)&&(h=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=q(e,"top"),r=q(e,"left"),o=n?-1:1;return t.top+=i*o,t.bottom+=i*o,t.left+=r*o,t.right+=r*o,t}(h,e)),h}function at(t,e,n,i){var r,o,s,a,l,c,h,f={top:0,left:0},u=G(t,e);if("viewport"===i)o=(r=u).ownerDocument.documentElement,s=st(r,o),a=Math.max(o.clientWidth,window.innerWidth||0),l=Math.max(o.clientHeight,window.innerHeight||0),c=q(o),h=q(o,"left"),f=rt({top:c-s.top+s.marginTop,left:h-s.left+s.marginLeft,width:a,height:l});else{var d=void 0;"scrollParent"===i?"BODY"===(d=V(K(e))).nodeName&&(d=t.ownerDocument.documentElement):d="window"===i?t.ownerDocument.documentElement:i;var p=st(d,u);if("HTML"!==d.nodeName||function t(e){var n=e.nodeName;return"BODY"!==n&&"HTML"!==n&&("fixed"===F(e,"position")||t(K(e)))}(u))f=p;else{var g=$(),m=g.height,_=g.width;f.top+=p.top-p.marginTop,f.bottom=m+p.top,f.left+=p.left-p.marginLeft,f.right=_+p.left}}return f.left+=n,f.top+=n,f.right-=n,f.bottom-=n,f}function lt(t,e,n,i,r){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===t.indexOf("auto"))return t;var s=at(n,i,o,r),a={top:{width:s.width,height:e.top-s.top},right:{width:s.right-e.right,height:s.height},bottom:{width:s.width,height:s.bottom-e.bottom},left:{width:e.left-s.left,height:s.height}},l=Object.keys(a).map(function(t){return it({key:t},a[t],{area:(e=a[t],e.width*e.height)});var e}).sort(function(t,e){return e.area-t.area}),c=l.filter(function(t){var e=t.width,i=t.height;return e>=n.clientWidth&&i>=n.clientHeight}),h=c.length>0?c[0].key:l[0].key,f=t.split("-")[1];return h+(f?"-"+f:"")}function ct(t,e,n){return st(n,G(e,n))}function ht(t){var e=getComputedStyle(t),n=parseFloat(e.marginTop)+parseFloat(e.marginBottom),i=parseFloat(e.marginLeft)+parseFloat(e.marginRight);return{width:t.offsetWidth+i,height:t.offsetHeight+n}}function ft(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,function(t){return e[t]})}function ut(t,e,n){n=n.split("-")[0];var i=ht(t),r={width:i.width,height:i.height},o=-1!==["right","left"].indexOf(n),s=o?"top":"left",a=o?"left":"top",l=o?"height":"width",c=o?"width":"height";return r[s]=e[s]+e[l]/2-i[l]/2,r[a]=n===a?e[a]-i[c]:e[ft(a)],r}function dt(t,e){return Array.prototype.find?t.find(e):t.filter(e)[0]}function pt(t,e,n){return(void 0===n?t:t.slice(0,function(t,e,n){if(Array.prototype.findIndex)return t.findIndex(function(t){return t[e]===n});var i=dt(t,function(t){return t[e]===n});return t.indexOf(i)}(t,"name",n))).forEach(function(t){t.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=t.function||t.fn;t.enabled&&B(n)&&(e.offsets.popper=rt(e.offsets.popper),e.offsets.reference=rt(e.offsets.reference),e=n(e,t))}),e}function gt(t,e){return t.some(function(t){var n=t.name;return t.enabled&&n===e})}function mt(t){for(var e=[!1,"ms","Webkit","Moz","O"],n=t.charAt(0).toUpperCase()+t.slice(1),i=0;i<e.length-1;i++){var r=e[i],o=r?""+r+n:t;if("undefined"!=typeof document.body.style[o])return o}return null}function _t(t){var e=t.ownerDocument;return e?e.defaultView:window}function vt(t,e,n,i){n.updateBound=i,_t(t).addEventListener("resize",n.updateBound,{passive:!0});var r=V(t);return function t(e,n,i,r){var o="BODY"===e.nodeName,s=o?e.ownerDocument.defaultView:e;s.addEventListener(n,i,{passive:!0}),o||t(V(s.parentNode),n,i,r),r.push(s)}(r,"scroll",n.updateBound,n.scrollParents),n.scrollElement=r,n.eventsEnabled=!0,n}function Et(){var t,e;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(t=this.reference,e=this.state,_t(t).removeEventListener("resize",e.updateBound),e.scrollParents.forEach(function(t){t.removeEventListener("scroll",e.updateBound)}),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e))}function yt(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function bt(t,e){Object.keys(e).forEach(function(n){var i="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&yt(e[n])&&(i="px"),t.style[n]=e[n]+i})}function Tt(t,e,n){var i=dt(t,function(t){return t.name===e}),r=!!i&&t.some(function(t){return t.name===n&&t.enabled&&t.order<i.order});if(!r){var o="`"+e+"`",s="`"+n+"`";console.warn(s+" modifier is required by "+o+" modifier in order to work, be sure to include it before "+o+"!")}return r}var Ct=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],wt=Ct.slice(3);function It(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=wt.indexOf(t),i=wt.slice(n+1).concat(wt.slice(0,n));return e?i.reverse():i}var At={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};function Dt(t,e,n,i){var r=[0,0],o=-1!==["right","left"].indexOf(i),s=t.split(/(\+|\-)/).map(function(t){return t.trim()}),a=s.indexOf(dt(s,function(t){return-1!==t.search(/,|\s/)}));s[a]&&-1===s[a].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l=/\s*,\s*|\s+/,c=-1!==a?[s.slice(0,a).concat([s[a].split(l)[0]]),[s[a].split(l)[1]].concat(s.slice(a+1))]:[s];return(c=c.map(function(t,i){var r=(1===i?!o:o)?"height":"width",s=!1;return t.reduce(function(t,e){return""===t[t.length-1]&&-1!==["+","-"].indexOf(e)?(t[t.length-1]=e,s=!0,t):s?(t[t.length-1]+=e,s=!1,t):t.concat(e)},[]).map(function(t){return function(t,e,n,i){var r=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),o=+r[1],s=r[2];if(!o)return t;if(0===s.indexOf("%")){var a=void 0;switch(s){case"%p":a=n;break;case"%":case"%r":default:a=i}return rt(a)[e]/100*o}if("vh"===s||"vw"===s)return("vh"===s?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*o;return o}(t,r,e,n)})})).forEach(function(t,e){t.forEach(function(n,i){yt(n)&&(r[e]+=n*("-"===t[i-1]?-1:1))})}),r}var St={placement:"bottom",eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(t){var e=t.placement,n=e.split("-")[0],i=e.split("-")[1];if(i){var r=t.offsets,o=r.reference,s=r.popper,a=-1!==["bottom","top"].indexOf(n),l=a?"left":"top",c=a?"width":"height",h={start:nt({},l,o[l]),end:nt({},l,o[l]+o[c]-s[c])};t.offsets.popper=it({},s,h[i])}return t}},offset:{order:200,enabled:!0,fn:function(t,e){var n=e.offset,i=t.placement,r=t.offsets,o=r.popper,s=r.reference,a=i.split("-")[0],l=void 0;return l=yt(+n)?[+n,0]:Dt(n,o,s,a),"left"===a?(o.top+=l[0],o.left-=l[1]):"right"===a?(o.top+=l[0],o.left+=l[1]):"top"===a?(o.left+=l[0],o.top-=l[1]):"bottom"===a&&(o.left+=l[0],o.top+=l[1]),t.popper=o,t},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(t,e){var n=e.boundariesElement||Q(t.instance.popper);t.instance.reference===n&&(n=Q(n));var i=at(t.instance.popper,t.instance.reference,e.padding,n);e.boundaries=i;var r=e.priority,o=t.offsets.popper,s={primary:function(t){var n=o[t];return o[t]<i[t]&&!e.escapeWithReference&&(n=Math.max(o[t],i[t])),nt({},t,n)},secondary:function(t){var n="right"===t?"left":"top",r=o[n];return o[t]>i[t]&&!e.escapeWithReference&&(r=Math.min(o[n],i[t]-("right"===t?o.width:o.height))),nt({},n,r)}};return r.forEach(function(t){var e=-1!==["left","top"].indexOf(t)?"primary":"secondary";o=it({},o,s[e](t))}),t.offsets.popper=o,t},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(t){var e=t.offsets,n=e.popper,i=e.reference,r=t.placement.split("-")[0],o=Math.floor,s=-1!==["top","bottom"].indexOf(r),a=s?"right":"bottom",l=s?"left":"top",c=s?"width":"height";return n[a]<o(i[l])&&(t.offsets.popper[l]=o(i[l])-n[c]),n[l]>o(i[a])&&(t.offsets.popper[l]=o(i[a])),t}},arrow:{order:500,enabled:!0,fn:function(t,e){var n;if(!Tt(t.instance.modifiers,"arrow","keepTogether"))return t;var i=e.element;if("string"==typeof i){if(!(i=t.instance.popper.querySelector(i)))return t}else if(!t.instance.popper.contains(i))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),t;var r=t.placement.split("-")[0],o=t.offsets,s=o.popper,a=o.reference,l=-1!==["left","right"].indexOf(r),c=l?"height":"width",h=l?"Top":"Left",f=h.toLowerCase(),u=l?"left":"top",d=l?"bottom":"right",p=ht(i)[c];a[d]-p<s[f]&&(t.offsets.popper[f]-=s[f]-(a[d]-p)),a[f]+p>s[d]&&(t.offsets.popper[f]+=a[f]+p-s[d]),t.offsets.popper=rt(t.offsets.popper);var g=a[f]+a[c]/2-p/2,m=F(t.instance.popper),_=parseFloat(m["margin"+h],10),v=parseFloat(m["border"+h+"Width"],10),E=g-t.offsets.popper[f]-_-v;return E=Math.max(Math.min(s[c]-p,E),0),t.arrowElement=i,t.offsets.arrow=(nt(n={},f,Math.round(E)),nt(n,u,""),n),t},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(t,e){if(gt(t.instance.modifiers,"inner"))return t;if(t.flipped&&t.placement===t.originalPlacement)return t;var n=at(t.instance.popper,t.instance.reference,e.padding,e.boundariesElement),i=t.placement.split("-")[0],r=ft(i),o=t.placement.split("-")[1]||"",s=[];switch(e.behavior){case At.FLIP:s=[i,r];break;case At.CLOCKWISE:s=It(i);break;case At.COUNTERCLOCKWISE:s=It(i,!0);break;default:s=e.behavior}return s.forEach(function(a,l){if(i!==a||s.length===l+1)return t;i=t.placement.split("-")[0],r=ft(i);var c,h=t.offsets.popper,f=t.offsets.reference,u=Math.floor,d="left"===i&&u(h.right)>u(f.left)||"right"===i&&u(h.left)<u(f.right)||"top"===i&&u(h.bottom)>u(f.top)||"bottom"===i&&u(h.top)<u(f.bottom),p=u(h.left)<u(n.left),g=u(h.right)>u(n.right),m=u(h.top)<u(n.top),_=u(h.bottom)>u(n.bottom),v="left"===i&&p||"right"===i&&g||"top"===i&&m||"bottom"===i&&_,E=-1!==["top","bottom"].indexOf(i),y=!!e.flipVariations&&(E&&"start"===o&&p||E&&"end"===o&&g||!E&&"start"===o&&m||!E&&"end"===o&&_);(d||v||y)&&(t.flipped=!0,(d||v)&&(i=s[l+1]),y&&(o="end"===(c=o)?"start":"start"===c?"end":c),t.placement=i+(o?"-"+o:""),t.offsets.popper=it({},t.offsets.popper,ut(t.instance.popper,t.offsets.reference,t.placement)),t=pt(t.instance.modifiers,t,"flip"))}),t},behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:function(t){var e=t.placement,n=e.split("-")[0],i=t.offsets,r=i.popper,o=i.reference,s=-1!==["left","right"].indexOf(n),a=-1===["top","left"].indexOf(n);return r[s?"left":"top"]=o[n]-(a?r[s?"width":"height"]:0),t.placement=ft(e),t.offsets.popper=rt(r),t}},hide:{order:800,enabled:!0,fn:function(t){if(!Tt(t.instance.modifiers,"hide","preventOverflow"))return t;var e=t.offsets.reference,n=dt(t.instance.modifiers,function(t){return"preventOverflow"===t.name}).boundaries;if(e.bottom<n.top||e.left>n.right||e.top>n.bottom||e.right<n.left){if(!0===t.hide)return t;t.hide=!0,t.attributes["x-out-of-boundaries"]=""}else{if(!1===t.hide)return t;t.hide=!1,t.attributes["x-out-of-boundaries"]=!1}return t}},computeStyle:{order:850,enabled:!0,fn:function(t,e){var n=e.x,i=e.y,r=t.offsets.popper,o=dt(t.instance.modifiers,function(t){return"applyStyle"===t.name}).gpuAcceleration;void 0!==o&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s=void 0!==o?o:e.gpuAcceleration,a=ot(Q(t.instance.popper)),l={position:r.position},c={left:Math.floor(r.left),top:Math.floor(r.top),bottom:Math.floor(r.bottom),right:Math.floor(r.right)},h="bottom"===n?"top":"bottom",f="right"===i?"left":"right",u=mt("transform"),d=void 0,p=void 0;if(p="bottom"===h?-a.height+c.bottom:c.top,d="right"===f?-a.width+c.right:c.left,s&&u)l[u]="translate3d("+d+"px, "+p+"px, 0)",l[h]=0,l[f]=0,l.willChange="transform";else{var g="bottom"===h?-1:1,m="right"===f?-1:1;l[h]=p*g,l[f]=d*m,l.willChange=h+", "+f}var _={"x-placement":t.placement};return t.attributes=it({},_,t.attributes),t.styles=it({},l,t.styles),t.arrowStyles=it({},t.offsets.arrow,t.arrowStyles),t},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(t){var e,n;return bt(t.instance.popper,t.styles),e=t.instance.popper,n=t.attributes,Object.keys(n).forEach(function(t){!1!==n[t]?e.setAttribute(t,n[t]):e.removeAttribute(t)}),t.arrowElement&&Object.keys(t.arrowStyles).length&&bt(t.arrowElement,t.arrowStyles),t},onLoad:function(t,e,n,i,r){var o=ct(0,e,t),s=lt(n.placement,o,e,t,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return e.setAttribute("x-placement",s),bt(e,{position:"absolute"}),n},gpuAcceleration:void 0}}},Ot=function(){function t(e,n){var i=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};tt(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=U(this.update.bind(this)),this.options=it({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=e&&e.jquery?e[0]:e,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(it({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){i.options.modifiers[e]=it({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(t){return it({name:t},i.options.modifiers[t])}).sort(function(t,e){return t.order-e.order}),this.modifiers.forEach(function(t){t.enabled&&B(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)}),this.update();var o=this.options.eventsEnabled;o&&this.enableEventListeners(),this.state.eventsEnabled=o}return et(t,[{key:"update",value:function(){return function(){if(!this.state.isDestroyed){var t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};t.offsets.reference=ct(this.state,this.popper,this.reference),t.placement=lt(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),t.originalPlacement=t.placement,t.offsets.popper=ut(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position="absolute",t=pt(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}}.call(this)}},{key:"destroy",value:function(){return function(){return this.state.isDestroyed=!0,gt(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.left="",this.popper.style.position="",this.popper.style.top="",this.popper.style[mt("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}.call(this)}},{key:"enableEventListeners",value:function(){return function(){this.state.eventsEnabled||(this.state=vt(this.reference,this.options,this.state,this.scheduleUpdate))}.call(this)}},{key:"disableEventListeners",value:function(){return Et.call(this)}}]),t}();Ot.Utils=("undefined"!=typeof window?window:global).PopperUtils,Ot.placements=Ct,Ot.Defaults=St;var Nt=function(t){var e="dropdown",n="bs.dropdown",o="."+n,s=t.fn[e],a=new RegExp("38|40|27"),l={HIDE:"hide"+o,HIDDEN:"hidden"+o,SHOW:"show"+o,SHOWN:"shown"+o,CLICK:"click"+o,CLICK_DATA_API:"click"+o+".data-api",KEYDOWN_DATA_API:"keydown"+o+".data-api",KEYUP_DATA_API:"keyup"+o+".data-api"},c="disabled",h="show",f="dropup",u="dropright",d="dropleft",p="dropdown-menu-right",g="dropdown-menu-left",m="position-static",_='[data-toggle="dropdown"]',v=".dropdown form",E=".dropdown-menu",y=".navbar-nav",b=".dropdown-menu .dropdown-item:not(.disabled)",T="top-start",C="top-end",w="bottom-start",I="bottom-end",A="right-start",D="left-start",S={offset:0,flip:!0,boundary:"scrollParent"},O={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)"},N=function(){function s(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var v=s.prototype;return v.toggle=function(){if(!this._element.disabled&&!t(this._element).hasClass(c)){var e=s._getParentFromElement(this._element),n=t(this._menu).hasClass(h);if(s._clearMenus(),!n){var i={relatedTarget:this._element},r=t.Event(l.SHOW,i);if(t(e).trigger(r),!r.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof Ot)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var o=this._element;t(e).hasClass(f)&&(t(this._menu).hasClass(g)||t(this._menu).hasClass(p))&&(o=e),"scrollParent"!==this._config.boundary&&t(e).addClass(m),this._popper=new Ot(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===t(e).closest(y).length&&t("body").children().on("mouseover",null,t.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),t(this._menu).toggleClass(h),t(e).toggleClass(h).trigger(t.Event(l.SHOWN,i))}}}},v.dispose=function(){t.removeData(this._element,n),t(this._element).off(o),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},v.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},v._addEventListeners=function(){var e=this;t(this._element).on(l.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},v._getConfig=function(n){return n=r({},this.constructor.Default,t(this._element).data(),n),k.typeCheckConfig(e,n,this.constructor.DefaultType),n},v._getMenuElement=function(){if(!this._menu){var e=s._getParentFromElement(this._element);this._menu=t(e).find(E)[0]}return this._menu},v._getPlacement=function(){var e=t(this._element).parent(),n=w;return e.hasClass(f)?(n=T,t(this._menu).hasClass(p)&&(n=C)):e.hasClass(u)?n=A:e.hasClass(d)?n=D:t(this._menu).hasClass(p)&&(n=I),n},v._detectNavbar=function(){return t(this._element).closest(".navbar").length>0},v._getPopperConfig=function(){var t=this,e={};return"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=r({},e.offsets,t._config.offset(e.offsets)||{}),e}:e.offset=this._config.offset,{placement:this._getPlacement(),modifiers:{offset:e,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}}},s._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n);if(i||(i=new s(this,"object"==typeof e?e:null),t(this).data(n,i)),"string"==typeof e){if("undefined"==typeof i[e])throw new TypeError('No method named "'+e+'"');i[e]()}})},s._clearMenus=function(e){if(!e||3!==e.which&&("keyup"!==e.type||9===e.which))for(var i=t.makeArray(t(_)),r=0;r<i.length;r++){var o=s._getParentFromElement(i[r]),a=t(i[r]).data(n),c={relatedTarget:i[r]};if(a){var f=a._menu;if(t(o).hasClass(h)&&!(e&&("click"===e.type&&/input|textarea/i.test(e.target.tagName)||"keyup"===e.type&&9===e.which)&&t.contains(o,e.target))){var u=t.Event(l.HIDE,c);t(o).trigger(u),u.isDefaultPrevented()||("ontouchstart"in document.documentElement&&t("body").children().off("mouseover",null,t.noop),i[r].setAttribute("aria-expanded","false"),t(f).removeClass(h),t(o).removeClass(h).trigger(t.Event(l.HIDDEN,c)))}}}},s._getParentFromElement=function(e){var n,i=k.getSelectorFromElement(e);return i&&(n=t(i)[0]),n||e.parentNode},s._dataApiKeydownHandler=function(e){if((/input|textarea/i.test(e.target.tagName)?!(32===e.which||27!==e.which&&(40!==e.which&&38!==e.which||t(e.target).closest(E).length)):a.test(e.which))&&(e.preventDefault(),e.stopPropagation(),!this.disabled&&!t(this).hasClass(c))){var n=s._getParentFromElement(this),i=t(n).hasClass(h);if((i||27===e.which&&32===e.which)&&(!i||27!==e.which&&32!==e.which)){var r=t(n).find(b).get();if(0!==r.length){var o=r.indexOf(e.target);38===e.which&&o>0&&o--,40===e.which&&o<r.length-1&&o++,o<0&&(o=0),r[o].focus()}}else{if(27===e.which){var l=t(n).find(_)[0];t(l).trigger("focus")}t(this).trigger("click")}}},i(s,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return S}},{key:"DefaultType",get:function(){return O}}]),s}();return t(document).on(l.KEYDOWN_DATA_API,_,N._dataApiKeydownHandler).on(l.KEYDOWN_DATA_API,E,N._dataApiKeydownHandler).on(l.CLICK_DATA_API+" "+l.KEYUP_DATA_API,N._clearMenus).on(l.CLICK_DATA_API,_,function(e){e.preventDefault(),e.stopPropagation(),N._jQueryInterface.call(t(this),"toggle")}).on(l.CLICK_DATA_API,v,function(t){t.stopPropagation()}),t.fn[e]=N._jQueryInterface,t.fn[e].Constructor=N,t.fn[e].noConflict=function(){return t.fn[e]=s,N._jQueryInterface},N}(e),kt=function(t){var e="bs.modal",n="."+e,o=t.fn.modal,s={backdrop:!0,keyboard:!0,focus:!0,show:!0},a={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},l={HIDE:"hide"+n,HIDDEN:"hidden"+n,SHOW:"show"+n,SHOWN:"shown"+n,FOCUSIN:"focusin"+n,RESIZE:"resize"+n,CLICK_DISMISS:"click.dismiss"+n,KEYDOWN_DISMISS:"keydown.dismiss"+n,MOUSEUP_DISMISS:"mouseup.dismiss"+n,MOUSEDOWN_DISMISS:"mousedown.dismiss"+n,CLICK_DATA_API:"click.bs.modal.data-api"},c="modal-scrollbar-measure",h="modal-backdrop",f="modal-open",u="fade",d="show",p={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},g=function(){function o(e,n){this._config=this._getConfig(n),this._element=e,this._dialog=t(e).find(p.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}var g=o.prototype;return g.toggle=function(t){return this._isShown?this.hide():this.show(t)},g.show=function(e){var n=this;if(!this._isTransitioning&&!this._isShown){k.supportsTransitionEnd()&&t(this._element).hasClass(u)&&(this._isTransitioning=!0);var i=t.Event(l.SHOW,{relatedTarget:e});t(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),t(document.body).addClass(f),this._setEscapeEvent(),this._setResizeEvent(),t(this._element).on(l.CLICK_DISMISS,p.DATA_DISMISS,function(t){return n.hide(t)}),t(this._dialog).on(l.MOUSEDOWN_DISMISS,function(){t(n._element).one(l.MOUSEUP_DISMISS,function(e){t(e.target).is(n._element)&&(n._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return n._showElement(e)}))}},g.hide=function(e){var n=this;if(e&&e.preventDefault(),!this._isTransitioning&&this._isShown){var i=t.Event(l.HIDE);if(t(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1;var r=k.supportsTransitionEnd()&&t(this._element).hasClass(u);r&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),t(document).off(l.FOCUSIN),t(this._element).removeClass(d),t(this._element).off(l.CLICK_DISMISS),t(this._dialog).off(l.MOUSEDOWN_DISMISS),r?t(this._element).one(k.TRANSITION_END,function(t){return n._hideModal(t)}).emulateTransitionEnd(300):this._hideModal()}}},g.dispose=function(){t.removeData(this._element,e),t(window,document,this._element,this._backdrop).off(n),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},g.handleUpdate=function(){this._adjustDialog()},g._getConfig=function(t){return t=r({},s,t),k.typeCheckConfig("modal",t,a),t},g._showElement=function(e){var n=this,i=k.supportsTransitionEnd()&&t(this._element).hasClass(u);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,i&&k.reflow(this._element),t(this._element).addClass(d),this._config.focus&&this._enforceFocus();var r=t.Event(l.SHOWN,{relatedTarget:e}),o=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,t(n._element).trigger(r)};i?t(this._dialog).one(k.TRANSITION_END,o).emulateTransitionEnd(300):o()},g._enforceFocus=function(){var e=this;t(document).off(l.FOCUSIN).on(l.FOCUSIN,function(n){document!==n.target&&e._element!==n.target&&0===t(e._element).has(n.target).length&&e._element.focus()})},g._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?t(this._element).on(l.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||t(this._element).off(l.KEYDOWN_DISMISS)},g._setResizeEvent=function(){var e=this;this._isShown?t(window).on(l.RESIZE,function(t){return e.handleUpdate(t)}):t(window).off(l.RESIZE)},g._hideModal=function(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){t(document.body).removeClass(f),e._resetAdjustments(),e._resetScrollbar(),t(e._element).trigger(l.HIDDEN)})},g._removeBackdrop=function(){this._backdrop&&(t(this._backdrop).remove(),this._backdrop=null)},g._showBackdrop=function(e){var n=this,i=t(this._element).hasClass(u)?u:"";if(this._isShown&&this._config.backdrop){var r=k.supportsTransitionEnd()&&i;if(this._backdrop=document.createElement("div"),this._backdrop.className=h,i&&t(this._backdrop).addClass(i),t(this._backdrop).appendTo(document.body),t(this._element).on(l.CLICK_DISMISS,function(t){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===n._config.backdrop?n._element.focus():n.hide())}),r&&k.reflow(this._backdrop),t(this._backdrop).addClass(d),!e)return;if(!r)return void e();t(this._backdrop).one(k.TRANSITION_END,e).emulateTransitionEnd(150)}else if(!this._isShown&&this._backdrop){t(this._backdrop).removeClass(d);var o=function(){n._removeBackdrop(),e&&e()};k.supportsTransitionEnd()&&t(this._element).hasClass(u)?t(this._backdrop).one(k.TRANSITION_END,o).emulateTransitionEnd(150):o()}else e&&e()},g._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},g._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},g._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},g._setScrollbar=function(){var e=this;if(this._isBodyOverflowing){t(p.FIXED_CONTENT).each(function(n,i){var r=t(i)[0].style.paddingRight,o=t(i).css("padding-right");t(i).data("padding-right",r).css("padding-right",parseFloat(o)+e._scrollbarWidth+"px")}),t(p.STICKY_CONTENT).each(function(n,i){var r=t(i)[0].style.marginRight,o=t(i).css("margin-right");t(i).data("margin-right",r).css("margin-right",parseFloat(o)-e._scrollbarWidth+"px")}),t(p.NAVBAR_TOGGLER).each(function(n,i){var r=t(i)[0].style.marginRight,o=t(i).css("margin-right");t(i).data("margin-right",r).css("margin-right",parseFloat(o)+e._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=t("body").css("padding-right");t("body").data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}},g._resetScrollbar=function(){t(p.FIXED_CONTENT).each(function(e,n){var i=t(n).data("padding-right");"undefined"!=typeof i&&t(n).css("padding-right",i).removeData("padding-right")}),t(p.STICKY_CONTENT+", "+p.NAVBAR_TOGGLER).each(function(e,n){var i=t(n).data("margin-right");"undefined"!=typeof i&&t(n).css("margin-right",i).removeData("margin-right")});var e=t("body").data("padding-right");"undefined"!=typeof e&&t("body").css("padding-right",e).removeData("padding-right")},g._getScrollbarWidth=function(){var t=document.createElement("div");t.className=c,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},o._jQueryInterface=function(n,i){return this.each(function(){var s=t(this).data(e),a=r({},o.Default,t(this).data(),"object"==typeof n&&n);if(s||(s=new o(this,a),t(this).data(e,s)),"string"==typeof n){if("undefined"==typeof s[n])throw new TypeError('No method named "'+n+'"');s[n](i)}else a.show&&s.show(i)})},i(o,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return s}}]),o}();return t(document).on(l.CLICK_DATA_API,p.DATA_TOGGLE,function(n){var i,o=this,s=k.getSelectorFromElement(this);s&&(i=t(s)[0]);var a=t(i).data(e)?"toggle":r({},t(i).data(),t(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||n.preventDefault();var c=t(i).one(l.SHOW,function(e){e.isDefaultPrevented()||c.one(l.HIDDEN,function(){t(o).is(":visible")&&o.focus()})});g._jQueryInterface.call(t(i),a,this)}),t.fn.modal=g._jQueryInterface,t.fn.modal.Constructor=g,t.fn.modal.noConflict=function(){return t.fn.modal=o,g._jQueryInterface},g}(e),Lt=function(t){var e="tooltip",n="bs.tooltip",o="."+n,s=t.fn[e],a=new RegExp("(^|\\s)bs-tooltip\\S+","g"),l={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"},c={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},h={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},f="show",u="out",d={HIDE:"hide"+o,HIDDEN:"hidden"+o,SHOW:"show"+o,SHOWN:"shown"+o,INSERTED:"inserted"+o,CLICK:"click"+o,FOCUSIN:"focusin"+o,FOCUSOUT:"focusout"+o,MOUSEENTER:"mouseenter"+o,MOUSELEAVE:"mouseleave"+o},p="fade",g="show",m=".tooltip-inner",_=".arrow",v="hover",E="focus",y="click",b="manual",T=function(){function s(t,e){if("undefined"==typeof Ot)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var T=s.prototype;return T.enable=function(){this._isEnabled=!0},T.disable=function(){this._isEnabled=!1},T.toggleEnabled=function(){this._isEnabled=!this._isEnabled},T.toggle=function(e){if(this._isEnabled)if(e){var n=this.constructor.DATA_KEY,i=t(e.currentTarget).data(n);i||(i=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(t(this.getTipElement()).hasClass(g))return void this._leave(null,this);this._enter(null,this)}},T.dispose=function(){clearTimeout(this._timeout),t.removeData(this.element,this.constructor.DATA_KEY),t(this.element).off(this.constructor.EVENT_KEY),t(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&t(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,null!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},T.show=function(){var e=this;if("none"===t(this.element).css("display"))throw new Error("Please use show on visible elements");var n=t.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){t(this.element).trigger(n);var i=t.contains(this.element.ownerDocument.documentElement,this.element);if(n.isDefaultPrevented()||!i)return;var r=this.getTipElement(),o=k.getUID(this.constructor.NAME);r.setAttribute("id",o),this.element.setAttribute("aria-describedby",o),this.setContent(),this.config.animation&&t(r).addClass(p);var a="function"==typeof this.config.placement?this.config.placement.call(this,r,this.element):this.config.placement,l=this._getAttachment(a);this.addAttachmentClass(l);var c=!1===this.config.container?document.body:t(this.config.container);t(r).data(this.constructor.DATA_KEY,this),t.contains(this.element.ownerDocument.documentElement,this.tip)||t(r).appendTo(c),t(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new Ot(this.element,r,{placement:l,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:_},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){e._handlePopperPlacementChange(t)}}),t(r).addClass(g),"ontouchstart"in document.documentElement&&t("body").children().on("mouseover",null,t.noop);var h=function(){e.config.animation&&e._fixTransition();var n=e._hoverState;e._hoverState=null,t(e.element).trigger(e.constructor.Event.SHOWN),n===u&&e._leave(null,e)};k.supportsTransitionEnd()&&t(this.tip).hasClass(p)?t(this.tip).one(k.TRANSITION_END,h).emulateTransitionEnd(s._TRANSITION_DURATION):h()}},T.hide=function(e){var n=this,i=this.getTipElement(),r=t.Event(this.constructor.Event.HIDE),o=function(){n._hoverState!==f&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),t(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),e&&e()};t(this.element).trigger(r),r.isDefaultPrevented()||(t(i).removeClass(g),"ontouchstart"in document.documentElement&&t("body").children().off("mouseover",null,t.noop),this._activeTrigger[y]=!1,this._activeTrigger[E]=!1,this._activeTrigger[v]=!1,k.supportsTransitionEnd()&&t(this.tip).hasClass(p)?t(i).one(k.TRANSITION_END,o).emulateTransitionEnd(150):o(),this._hoverState="")},T.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},T.isWithContent=function(){return Boolean(this.getTitle())},T.addAttachmentClass=function(e){t(this.getTipElement()).addClass("bs-tooltip-"+e)},T.getTipElement=function(){return this.tip=this.tip||t(this.config.template)[0],this.tip},T.setContent=function(){var e=t(this.getTipElement());this.setElementContent(e.find(m),this.getTitle()),e.removeClass(p+" "+g)},T.setElementContent=function(e,n){var i=this.config.html;"object"==typeof n&&(n.nodeType||n.jquery)?i?t(n).parent().is(e)||e.empty().append(n):e.text(t(n).text()):e[i?"html":"text"](n)},T.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},T._getAttachment=function(t){return c[t.toUpperCase()]},T._setListeners=function(){var e=this;this.config.trigger.split(" ").forEach(function(n){if("click"===n)t(e.element).on(e.constructor.Event.CLICK,e.config.selector,function(t){return e.toggle(t)});else if(n!==b){var i=n===v?e.constructor.Event.MOUSEENTER:e.constructor.Event.FOCUSIN,r=n===v?e.constructor.Event.MOUSELEAVE:e.constructor.Event.FOCUSOUT;t(e.element).on(i,e.config.selector,function(t){return e._enter(t)}).on(r,e.config.selector,function(t){return e._leave(t)})}t(e.element).closest(".modal").on("hide.bs.modal",function(){return e.hide()})}),this.config.selector?this.config=r({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},T._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},T._enter=function(e,n){var i=this.constructor.DATA_KEY;(n=n||t(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusin"===e.type?E:v]=!0),t(n.getTipElement()).hasClass(g)||n._hoverState===f?n._hoverState=f:(clearTimeout(n._timeout),n._hoverState=f,n.config.delay&&n.config.delay.show?n._timeout=setTimeout(function(){n._hoverState===f&&n.show()},n.config.delay.show):n.show())},T._leave=function(e,n){var i=this.constructor.DATA_KEY;(n=n||t(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusout"===e.type?E:v]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState=u,n.config.delay&&n.config.delay.hide?n._timeout=setTimeout(function(){n._hoverState===u&&n.hide()},n.config.delay.hide):n.hide())},T._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},T._getConfig=function(n){return"number"==typeof(n=r({},this.constructor.Default,t(this.element).data(),n)).delay&&(n.delay={show:n.delay,hide:n.delay}),"number"==typeof n.title&&(n.title=n.title.toString()),"number"==typeof n.content&&(n.content=n.content.toString()),k.typeCheckConfig(e,n,this.constructor.DefaultType),n},T._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},T._cleanTipClass=function(){var e=t(this.getTipElement()),n=e.attr("class").match(a);null!==n&&n.length>0&&e.removeClass(n.join(""))},T._handlePopperPlacementChange=function(t){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},T._fixTransition=function(){var e=this.getTipElement(),n=this.config.animation;null===e.getAttribute("x-placement")&&(t(e).removeClass(p),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},s._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n),r="object"==typeof e&&e;if((i||!/dispose|hide/.test(e))&&(i||(i=new s(this,r),t(this).data(n,i)),"string"==typeof e)){if("undefined"==typeof i[e])throw new TypeError('No method named "'+e+'"');i[e]()}})},i(s,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return h}},{key:"NAME",get:function(){return e}},{key:"DATA_KEY",get:function(){return n}},{key:"Event",get:function(){return d}},{key:"EVENT_KEY",get:function(){return o}},{key:"DefaultType",get:function(){return l}}]),s}();return t.fn[e]=T._jQueryInterface,t.fn[e].Constructor=T,t.fn[e].noConflict=function(){return t.fn[e]=s,T._jQueryInterface},T}(e),Pt=function(t){var e="popover",n="bs.popover",o="."+n,s=t.fn[e],a=new RegExp("(^|\\s)bs-popover\\S+","g"),l=r({},Lt.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),c=r({},Lt.DefaultType,{content:"(string|element|function)"}),h="fade",f="show",u=".popover-header",d=".popover-body",p={HIDE:"hide"+o,HIDDEN:"hidden"+o,SHOW:"show"+o,SHOWN:"shown"+o,INSERTED:"inserted"+o,CLICK:"click"+o,FOCUSIN:"focusin"+o,FOCUSOUT:"focusout"+o,MOUSEENTER:"mouseenter"+o,MOUSELEAVE:"mouseleave"+o},g=function(r){var s,g;function m(){return r.apply(this,arguments)||this}g=r,(s=m).prototype=Object.create(g.prototype),s.prototype.constructor=s,s.__proto__=g;var _=m.prototype;return _.isWithContent=function(){return this.getTitle()||this._getContent()},_.addAttachmentClass=function(e){t(this.getTipElement()).addClass("bs-popover-"+e)},_.getTipElement=function(){return this.tip=this.tip||t(this.config.template)[0],this.tip},_.setContent=function(){var e=t(this.getTipElement());this.setElementContent(e.find(u),this.getTitle());var n=this._getContent();"function"==typeof n&&(n=n.call(this.element)),this.setElementContent(e.find(d),n),e.removeClass(h+" "+f)},_._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},_._cleanTipClass=function(){var e=t(this.getTipElement()),n=e.attr("class").match(a);null!==n&&n.length>0&&e.removeClass(n.join(""))},m._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n),r="object"==typeof e?e:null;if((i||!/destroy|hide/.test(e))&&(i||(i=new m(this,r),t(this).data(n,i)),"string"==typeof e)){if("undefined"==typeof i[e])throw new TypeError('No method named "'+e+'"');i[e]()}})},i(m,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return l}},{key:"NAME",get:function(){return e}},{key:"DATA_KEY",get:function(){return n}},{key:"Event",get:function(){return p}},{key:"EVENT_KEY",get:function(){return o}},{key:"DefaultType",get:function(){return c}}]),m}(Lt);return t.fn[e]=g._jQueryInterface,t.fn[e].Constructor=g,t.fn[e].noConflict=function(){return t.fn[e]=s,g._jQueryInterface},g}(e),xt=function(t){var e="scrollspy",n="bs.scrollspy",o="."+n,s=t.fn[e],a={offset:10,method:"auto",target:""},l={offset:"number",method:"string",target:"(string|element)"},c={ACTIVATE:"activate"+o,SCROLL:"scroll"+o,LOAD_DATA_API:"load"+o+".data-api"},h="dropdown-item",f="active",u={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},d="offset",p="position",g=function(){function s(e,n){var i=this;this._element=e,this._scrollElement="BODY"===e.tagName?window:e,this._config=this._getConfig(n),this._selector=this._config.target+" "+u.NAV_LINKS+","+this._config.target+" "+u.LIST_ITEMS+","+this._config.target+" "+u.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,t(this._scrollElement).on(c.SCROLL,function(t){return i._process(t)}),this.refresh(),this._process()}var g=s.prototype;return g.refresh=function(){var e=this,n=this._scrollElement===this._scrollElement.window?d:p,i="auto"===this._config.method?n:this._config.method,r=i===p?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),t.makeArray(t(this._selector)).map(function(e){var n,o=k.getSelectorFromElement(e);if(o&&(n=t(o)[0]),n){var s=n.getBoundingClientRect();if(s.width||s.height)return[t(n)[i]().top+r,o]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},g.dispose=function(){t.removeData(this._element,n),t(this._scrollElement).off(o),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},g._getConfig=function(n){if("string"!=typeof(n=r({},a,n)).target){var i=t(n.target).attr("id");i||(i=k.getUID(e),t(n.target).attr("id",i)),n.target="#"+i}return k.typeCheckConfig(e,n,l),n},g._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},g._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},g._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},g._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var r=this._offsets.length;r--;){this._activeTarget!==this._targets[r]&&t>=this._offsets[r]&&("undefined"==typeof this._offsets[r+1]||t<this._offsets[r+1])&&this._activate(this._targets[r])}}},g._activate=function(e){this._activeTarget=e,this._clear();var n=this._selector.split(",");n=n.map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'});var i=t(n.join(","));i.hasClass(h)?(i.closest(u.DROPDOWN).find(u.DROPDOWN_TOGGLE).addClass(f),i.addClass(f)):(i.addClass(f),i.parents(u.NAV_LIST_GROUP).prev(u.NAV_LINKS+", "+u.LIST_ITEMS).addClass(f),i.parents(u.NAV_LIST_GROUP).prev(u.NAV_ITEMS).children(u.NAV_LINKS).addClass(f)),t(this._scrollElement).trigger(c.ACTIVATE,{relatedTarget:e})},g._clear=function(){t(this._selector).filter(u.ACTIVE).removeClass(f)},s._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n);if(i||(i=new s(this,"object"==typeof e&&e),t(this).data(n,i)),"string"==typeof e){if("undefined"==typeof i[e])throw new TypeError('No method named "'+e+'"');i[e]()}})},i(s,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),s}();return t(window).on(c.LOAD_DATA_API,function(){for(var e=t.makeArray(t(u.DATA_SPY)),n=e.length;n--;){var i=t(e[n]);g._jQueryInterface.call(i,i.data())}}),t.fn[e]=g._jQueryInterface,t.fn[e].Constructor=g,t.fn[e].noConflict=function(){return t.fn[e]=s,g._jQueryInterface},g}(e),Rt=function(t){var e=".bs.tab",n=t.fn.tab,r={HIDE:"hide"+e,HIDDEN:"hidden"+e,SHOW:"show"+e,SHOWN:"shown"+e,CLICK_DATA_API:"click.bs.tab.data-api"},o="dropdown-menu",s="active",a="disabled",l="fade",c="show",h=".dropdown",f=".nav, .list-group",u=".active",d="> li > .active",p='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',g=".dropdown-toggle",m="> .dropdown-menu .active",_=function(){function e(t){this._element=t}var n=e.prototype;return n.show=function(){var e=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&t(this._element).hasClass(s)||t(this._element).hasClass(a))){var n,i,o=t(this._element).closest(f)[0],l=k.getSelectorFromElement(this._element);if(o){var c="UL"===o.nodeName?d:u;i=(i=t.makeArray(t(o).find(c)))[i.length-1]}var h=t.Event(r.HIDE,{relatedTarget:this._element}),p=t.Event(r.SHOW,{relatedTarget:i});if(i&&t(i).trigger(h),t(this._element).trigger(p),!p.isDefaultPrevented()&&!h.isDefaultPrevented()){l&&(n=t(l)[0]),this._activate(this._element,o);var g=function(){var n=t.Event(r.HIDDEN,{relatedTarget:e._element}),o=t.Event(r.SHOWN,{relatedTarget:i});t(i).trigger(n),t(e._element).trigger(o)};n?this._activate(n,n.parentNode,g):g()}}},n.dispose=function(){t.removeData(this._element,"bs.tab"),this._element=null},n._activate=function(e,n,i){var r=this,o=("UL"===n.nodeName?t(n).find(d):t(n).children(u))[0],s=i&&k.supportsTransitionEnd()&&o&&t(o).hasClass(l),a=function(){return r._transitionComplete(e,o,i)};o&&s?t(o).one(k.TRANSITION_END,a).emulateTransitionEnd(150):a()},n._transitionComplete=function(e,n,i){if(n){t(n).removeClass(c+" "+s);var r=t(n.parentNode).find(m)[0];r&&t(r).removeClass(s),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(t(e).addClass(s),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),k.reflow(e),t(e).addClass(c),e.parentNode&&t(e.parentNode).hasClass(o)){var a=t(e).closest(h)[0];a&&t(a).find(g).addClass(s),e.setAttribute("aria-expanded",!0)}i&&i()},e._jQueryInterface=function(n){return this.each(function(){var i=t(this),r=i.data("bs.tab");if(r||(r=new e(this),i.data("bs.tab",r)),"string"==typeof n){if("undefined"==typeof r[n])throw new TypeError('No method named "'+n+'"');r[n]()}})},i(e,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),e}();return t(document).on(r.CLICK_DATA_API,p,function(e){e.preventDefault(),_._jQueryInterface.call(t(this),"show")}),t.fn.tab=_._jQueryInterface,t.fn.tab.Constructor=_,t.fn.tab.noConflict=function(){return t.fn.tab=n,_._jQueryInterface},_}(e);!function(t){if("undefined"==typeof t)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||e[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(e),t.Util=k,t.Alert=L,t.Button=P,t.Carousel=x,t.Collapse=R,t.Dropdown=Nt,t.Modal=kt,t.Popover=Pt,t.Scrollspy=xt,t.Tab=Rt,t.Tooltip=Lt,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.bundle.min.js.map
(function ($) {
  'use strict';

  var testElement = document.createElement('_');

  testElement.classList.toggle('c3', false);

  // Polyfill for IE 10 and Firefox <24, where classList.toggle does not
  // support the second argument.
  if (testElement.classList.contains('c3')) {
    var _toggle = DOMTokenList.prototype.toggle;

    DOMTokenList.prototype.toggle = function(token, force) {
      if (1 in arguments && !this.contains(token) === !force) {
        return force;
      } else {
        return _toggle.call(this, token);
      }
    };
  }

  // shallow array comparison
  function isEqual (array1, array2) {
    return array1.length === array2.length && array1.every(function(element, index) {
      return element === array2[index];
    });
  };

  //<editor-fold desc="Shims">
  if (!String.prototype.startsWith) {
    (function () {
      'use strict'; // needed to support `apply`/`call` with `undefined`/`null`
      var defineProperty = (function () {
        // IE 8 only supports `Object.defineProperty` on DOM elements
        try {
          var object = {};
          var $defineProperty = Object.defineProperty;
          var result = $defineProperty(object, object, object) && $defineProperty;
        } catch (error) {
        }
        return result;
      }());
      var toString = {}.toString;
      var startsWith = function (search) {
        if (this == null) {
          throw new TypeError();
        }
        var string = String(this);
        if (search && toString.call(search) == '[object RegExp]') {
          throw new TypeError();
        }
        var stringLength = string.length;
        var searchString = String(search);
        var searchLength = searchString.length;
        var position = arguments.length > 1 ? arguments[1] : undefined;
        // `ToInteger`
        var pos = position ? Number(position) : 0;
        if (pos != pos) { // better `isNaN`
          pos = 0;
        }
        var start = Math.min(Math.max(pos, 0), stringLength);
        // Avoid the `indexOf` call if no match is possible
        if (searchLength + start > stringLength) {
          return false;
        }
        var index = -1;
        while (++index < searchLength) {
          if (string.charCodeAt(start + index) != searchString.charCodeAt(index)) {
            return false;
          }
        }
        return true;
      };
      if (defineProperty) {
        defineProperty(String.prototype, 'startsWith', {
          'value': startsWith,
          'configurable': true,
          'writable': true
        });
      } else {
        String.prototype.startsWith = startsWith;
      }
    }());
  }

  if (!Object.keys) {
    Object.keys = function (
      o, // object
      k, // key
      r  // result array
      ){
      // initialize object and result
      r=[];
      // iterate over object keys
      for (k in o)
          // fill result array with non-prototypical keys
        r.hasOwnProperty.call(o, k) && r.push(k);
      // return result
      return r;
    };
  }

  // set data-selected on select element if the value has been programmatically selected
  // prior to initialization of bootstrap-select
  // * consider removing or replacing an alternative method *
  var valHooks = {
    useDefault: false,
    _set: $.valHooks.select.set
  };

  $.valHooks.select.set = function (elem, value) {
    if (value && !valHooks.useDefault) $(elem).data('selected', true);

    return valHooks._set.apply(this, arguments);
  };

  var changed_arguments = null;

  var EventIsSupported = (function () {
    try {
      new Event('change');
      return true;
    } catch (e) {
      return false;
    }
  })();

  $.fn.triggerNative = function (eventName) {
    var el = this[0],
        event;

    if (el.dispatchEvent) { // for modern browsers & IE9+
      if (EventIsSupported) {
        // For modern browsers
        event = new Event(eventName, {
          bubbles: true
        });
      } else {
        // For IE since it doesn't support Event constructor
        event = document.createEvent('Event');
        event.initEvent(eventName, true, false);
      }

      el.dispatchEvent(event);
    } else if (el.fireEvent) { // for IE8
      event = document.createEventObject();
      event.eventType = eventName;
      el.fireEvent('on' + eventName, event);
    } else {
      // fall back to jQuery.trigger
      this.trigger(eventName);
    }
  };
  //</editor-fold>

  function stringSearch(li, searchString, method, normalize) {
    var stringTypes = [
        'content',
        'subtext',
        'tokens'
      ],
      searchSuccess = false;

    for (var i = 0; i < stringTypes.length; i++) {
      var stringType = stringTypes[i],
          string = li[stringType];

      if (string) {
        string = string.toString();
        if (normalize) string = normalizeToBase(string);
        string = string.toUpperCase();

        if (method === 'contains') {
          searchSuccess = string.indexOf(searchString) >= 0;
        } else {
          searchSuccess = string.startsWith(searchString);
        }

        if (searchSuccess) break;
      }
    }

    return searchSuccess;
  }

  function toInteger(value) {
    return parseInt(value, 10) || 0;
  }

  /**
   * Remove all diatrics from the given text.
   * @access private
   * @param {String} text
   * @returns {String}
   */
  function normalizeToBase(text) {
    var rExps = [
      {re: /[\xC0-\xC6]/g, ch: "A"},
      {re: /[\xE0-\xE6]/g, ch: "a"},
      {re: /[\xC8-\xCB]/g, ch: "E"},
      {re: /[\xE8-\xEB]/g, ch: "e"},
      {re: /[\xCC-\xCF]/g, ch: "I"},
      {re: /[\xEC-\xEF]/g, ch: "i"},
      {re: /[\xD2-\xD6]/g, ch: "O"},
      {re: /[\xF2-\xF6]/g, ch: "o"},
      {re: /[\xD9-\xDC]/g, ch: "U"},
      {re: /[\xF9-\xFC]/g, ch: "u"},
      {re: /[\xC7-\xE7]/g, ch: "c"},
      {re: /[\xD1]/g, ch: "N"},
      {re: /[\xF1]/g, ch: "n"}
    ];
    $.each(rExps, function () {
      text = text ? text.replace(this.re, this.ch) : '';
    });
    return text;
  }


  // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };

  var unescapeMap = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#x27;': "'",
    '&#x60;': '`'
  };

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function (map) {
    var escaper = function (match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped.
    var source = '(?:' + Object.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function (string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };

  var htmlEscape = createEscaper(escapeMap);
  var htmlUnescape = createEscaper(unescapeMap);

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var keyCodeMap = {
    32: ' ',
    48: '0',
    49: '1',
    50: '2',
    51: '3',
    52: '4',
    53: '5',
    54: '6',
    55: '7',
    56: '8',
    57: '9',
    59: ';',
    65: 'A',
    66: 'B',
    67: 'C',
    68: 'D',
    69: 'E',
    70: 'F',
    71: 'G',
    72: 'H',
    73: 'I',
    74: 'J',
    75: 'K',
    76: 'L',
    77: 'M',
    78: 'N',
    79: 'O',
    80: 'P',
    81: 'Q',
    82: 'R',
    83: 'S',
    84: 'T',
    85: 'U',
    86: 'V',
    87: 'W',
    88: 'X',
    89: 'Y',
    90: 'Z',
    96: '0',
    97: '1',
    98: '2',
    99: '3',
    100: '4',
    101: '5',
    102: '6',
    103: '7',
    104: '8',
    105: '9'
  };

  var keyCodes = {
    ESCAPE: 27, // KeyboardEvent.which value for Escape (Esc) key
    ENTER: 13, // KeyboardEvent.which value for Enter key
    SPACE: 32, // KeyboardEvent.which value for space key
    TAB: 9, // KeyboardEvent.which value for tab key
    ARROW_UP: 38, // KeyboardEvent.which value for up arrow key
    ARROW_DOWN: 40 // KeyboardEvent.which value for down arrow key
  }

  var version = {};
  version.full = ($.fn.dropdown.Constructor.VERSION || '').split(' ')[0].split('.');
  version.major = version.full[0];

  var classNames = {
    DISABLED: 'disabled',
    DIVIDER: version.major === '4' ? 'dropdown-divider' : 'divider',
    SHOW: version.major === '4' ? 'show' : 'open',
    DROPUP: 'dropup',
    MENURIGHT: 'dropdown-menu-right',
    MENULEFT: 'dropdown-menu-left',
    // to-do: replace with more advanced template/customization options
    BUTTONCLASS: version.major === '4' ? 'btn-light' : 'btn-default'
  }

  var REGEXP_ARROW = new RegExp(keyCodes.ARROW_UP + '|' + keyCodes.ARROW_DOWN);
  var REGEXP_TAB_OR_ESCAPE = new RegExp('^' + keyCodes.TAB + '$|' + keyCodes.ESCAPE);
  var REGEXP_ENTER_OR_SPACE = new RegExp(keyCodes.ENTER + '|' + keyCodes.SPACE);

  var Selectpicker = function (element, options) {
    var that = this;

    // bootstrap-select has been initialized - revert valHooks.select.set back to its original function
    if (!valHooks.useDefault) {
      $.valHooks.select.set = valHooks._set;
      valHooks.useDefault = true;
    }

    this.$element = $(element);
    this.$newElement = null;
    this.$button = null;
    this.$menu = null;
    this.options = options;
    this.selectpicker = {
      main: {
        // store originalIndex (key) and newIndex (value) in this.selectpicker.main.map.newIndex for fast accessibility
        // allows us to do this.main.elements[this.selectpicker.main.map.newIndex[index]] to select an element based on the originalIndex
        map: {
          newIndex: {},
          originalIndex: {}
        }
      },
      current: {
        map: {}
      }, // current changes if a search is in progress
      search: {
        map: {}
      },
      view: {},
      keydown: {
        keyHistory: '',
        resetKeyHistory: {
          start: function () {
            return setTimeout(function () {
              that.selectpicker.keydown.keyHistory = '';
            }, 800);
          }
        }
      }
    };
    // If we have no title yet, try to pull it from the html title attribute (jQuery doesnt' pick it up as it's not a
    // data-attribute)
    if (this.options.title === null) {
      this.options.title = this.$element.attr('title');
    }

    // Format window padding
    var winPad = this.options.windowPadding;
    if (typeof winPad === 'number') {
      this.options.windowPadding = [winPad, winPad, winPad, winPad];
    }

    //Expose public methods
    this.val = Selectpicker.prototype.val;
    this.render = Selectpicker.prototype.render;
    this.refresh = Selectpicker.prototype.refresh;
    this.setStyle = Selectpicker.prototype.setStyle;
    this.selectAll = Selectpicker.prototype.selectAll;
    this.deselectAll = Selectpicker.prototype.deselectAll;
    this.destroy = Selectpicker.prototype.destroy;
    this.remove = Selectpicker.prototype.remove;
    this.show = Selectpicker.prototype.show;
    this.hide = Selectpicker.prototype.hide;

    this.init();
  };

  Selectpicker.VERSION = '1.13.0-beta';

  // part of this is duplicated in i18n/defaults-en_US.js. Make sure to update both.
  Selectpicker.DEFAULTS = {
    noneSelectedText: 'Nothing selected',
    noneResultsText: 'No results matched {0}',
    countSelectedText: function (numSelected, numTotal) {
      return (numSelected == 1) ? "{0} item selected" : "{0} items selected";
    },
    maxOptionsText: function (numAll, numGroup) {
      return [
        (numAll == 1) ? 'Limit reached ({n} item max)' : 'Limit reached ({n} items max)',
        (numGroup == 1) ? 'Group limit reached ({n} item max)' : 'Group limit reached ({n} items max)'
      ];
    },
    selectAllText: 'Select All',
    deselectAllText: 'Deselect All',
    doneButton: false,
    doneButtonText: 'Close',
    multipleSeparator: ', ',
    styleBase: 'btn',
    style: 'btn-default',
    size: 'auto',
    title: null,
    selectedTextFormat: 'values',
    width: false,
    container: false,
    hideDisabled: false,
    showSubtext: false,
    showIcon: true,
    showContent: true,
    dropupAuto: true,
    header: false,
    liveSearch: false,
    liveSearchPlaceholder: null,
    liveSearchNormalize: false,
    liveSearchStyle: 'contains',
    actionsBox: false,
    iconBase: 'glyphicon',
    tickIcon: 'glyphicon-ok',
    showTick: false,
    template: {
      caret: '<span class="caret"></span>'
    },
    maxOptions: false,
    mobile: false,
    selectOnTab: false,
    dropdownAlignRight: false,
    windowPadding: 0,
    virtualScroll: 600
  };

  if (version.major === '4') {
    Selectpicker.DEFAULTS.style = 'btn-light';
    Selectpicker.DEFAULTS.iconBase = '';
    Selectpicker.DEFAULTS.tickIcon = 'bs-ok-default';
  }

  Selectpicker.prototype = {

    constructor: Selectpicker,

    init: function () {
      var that = this,
          id = this.$element.attr('id');

      this.$element.addClass('bs-select-hidden');

      this.multiple = this.$element.prop('multiple');
      this.autofocus = this.$element.prop('autofocus');
      this.$newElement = this.createDropdown();
      this.createLi();
      this.$element
        .after(this.$newElement)
        .prependTo(this.$newElement);
      this.$button = this.$newElement.children('button');
      this.$menu = this.$newElement.children('.dropdown-menu');
      this.$menuInner = this.$menu.children('.inner');
      this.$searchbox = this.$menu.find('input');

      this.$element.removeClass('bs-select-hidden');

      if (this.options.dropdownAlignRight === true) this.$menu.addClass(classNames.MENURIGHT);

      if (typeof id !== 'undefined') {
        this.$button.attr('data-id', id);
      }

      this.checkDisabled();
      this.clickListener();
      if (this.options.liveSearch) this.liveSearchListener();
      this.render();
      this.setStyle();
      this.setWidth();
      if (this.options.container) {
        this.selectPosition();
      } else {
        this.$element.on('hide.bs.select', function () {
          if (that.isVirtual()) {
            // empty menu on close
            var menuInner = that.$menuInner[0],
                emptyMenu = menuInner.firstChild.cloneNode(false);

            // replace the existing UL with an empty one - this is faster than $.empty() or innerHTML = ''
            menuInner.replaceChild(emptyMenu, menuInner.firstChild);
            menuInner.scrollTop = 0;
          }
        });
      }
      this.$menu.data('this', this);
      this.$newElement.data('this', this);
      if (this.options.mobile) this.mobile();

      this.$newElement.on({
        'hide.bs.dropdown': function (e) {
          that.$menuInner.attr('aria-expanded', false);
          that.$element.trigger('hide.bs.select', e);
        },
        'hidden.bs.dropdown': function (e) {
          that.$element.trigger('hidden.bs.select', e);
        },
        'show.bs.dropdown': function (e) {
          that.$menuInner.attr('aria-expanded', true);
          that.$element.trigger('show.bs.select', e);
        },
        'shown.bs.dropdown': function (e) {
          that.$element.trigger('shown.bs.select', e);
        }
      });

      if (that.$element[0].hasAttribute('required')) {
        this.$element.on('invalid', function () {
          that.$button.addClass('bs-invalid');

          that.$element.on({
            'shown.bs.select': function () {
              that.$element
                .val(that.$element.val()) // set the value to hide the validation message in Chrome when menu is opened
                .off('shown.bs.select');
            },
            'rendered.bs.select': function () {
              // if select is no longer invalid, remove the bs-invalid class
              if (this.validity.valid) that.$button.removeClass('bs-invalid');
              that.$element.off('rendered.bs.select');
            }
          });

          that.$button.on('blur.bs.select', function () {
            that.$element.focus().blur();
            that.$button.off('blur.bs.select');
          });
        });
      }

      setTimeout(function () {
        that.$element.trigger('loaded.bs.select');
      });
    },

    createDropdown: function () {
      // Options
      // If we are multiple or showTick option is set, then add the show-tick class
      var showTick = (this.multiple || this.options.showTick) ? ' show-tick' : '',
          inputGroup = this.$element.parent().hasClass('input-group') ? ' input-group-btn' : '',
          autofocus = this.autofocus ? ' autofocus' : '';
      // Elements
      var header = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + '</div>' : '';
      var searchbox = this.options.liveSearch ?
      '<div class="bs-searchbox">' +
      '<input type="text" class="form-control" autocomplete="off"' +
      (null === this.options.liveSearchPlaceholder ? '' : ' placeholder="' + htmlEscape(this.options.liveSearchPlaceholder) + '"') + ' role="textbox" aria-label="Search">' +
      '</div>'
          : '';
      var actionsbox = this.multiple && this.options.actionsBox ?
      '<div class="bs-actionsbox">' +
      '<div class="btn-group btn-group-sm btn-block">' +
      '<button type="button" class="actions-btn bs-select-all btn ' + classNames.BUTTONCLASS + '">' +
      this.options.selectAllText +
      '</button>' +
      '<button type="button" class="actions-btn bs-deselect-all btn ' + classNames.BUTTONCLASS + '">' +
      this.options.deselectAllText +
      '</button>' +
      '</div>' +
      '</div>'
          : '';
      var donebutton = this.multiple && this.options.doneButton ?
      '<div class="bs-donebutton">' +
      '<div class="btn-group btn-block">' +
      '<button type="button" class="btn btn-sm ' + classNames.BUTTONCLASS + '">' +
      this.options.doneButtonText +
      '</button>' +
      '</div>' +
      '</div>'
          : '';
      var drop =
          '<div class="dropdown bootstrap-select' + showTick + inputGroup + '">' +
          '<button type="button" class="' + this.options.styleBase + ' dropdown-toggle" data-toggle="dropdown"' + autofocus + ' role="button">' +
          '<div class="filter-option">' +
            '<div class="filter-option-inner"></div>' +
          '</div>&nbsp;' +
          '<span class="bs-caret">' +
          this.options.template.caret +
          '</span>' +
          '</button>' +
          '<div class="dropdown-menu ' + (version.major === '4' ? '' : classNames.SHOW) + '" role="combobox">' +
          header +
          searchbox +
          actionsbox +
          '<div class="inner ' + classNames.SHOW + '" role="listbox" aria-expanded="false" tabindex="-1">' +
              '<ul class="dropdown-menu inner ' + (version.major === '4' ? classNames.SHOW : '') + '">' +
              '</ul>' +
          '</div>' +
          donebutton +
          '</div>' +
          '</div>';

      return $(drop);
    },

    setPositionData: function () {
      this.selectpicker.view.canHighlight = [];

      for (var i = 0; i < this.selectpicker.current.data.length; i++) {
        var li = this.selectpicker.current.data[i],
            canHighlight = true;

        if (li.type === 'divider') {
          canHighlight = false;
          li.height = this.sizeInfo.dividerHeight;
        } else if (li.type === 'optgroup-label') {
          canHighlight = false;
          li.height = this.sizeInfo.dropdownHeaderHeight;
        } else {
          li.height = this.sizeInfo.liHeight;
        }

        if (li.disabled) canHighlight = false;

        this.selectpicker.view.canHighlight.push(canHighlight);

        li.position = (i === 0 ? 0 : this.selectpicker.current.data[i - 1].position) + li.height;
      }
    },

    isVirtual: function () {
      return (this.options.virtualScroll !== false) && this.selectpicker.main.elements.length >= this.options.virtualScroll || this.options.virtualScroll === true;
    },

    createView: function (isSearching, scrollTop) {
      scrollTop = scrollTop || 0;

      var that = this;

      this.selectpicker.current = isSearching ? this.selectpicker.search : this.selectpicker.main;

      var $lis;
      var active = [];
      var selected;
      var prevActive;
      var activeIndex;
      var prevActiveIndex;

      this.setPositionData();

      scroll(scrollTop, true);

      this.$menuInner.off('scroll.createView').on('scroll.createView', function (e, updateValue) {
        if (!that.noScroll) scroll(this.scrollTop, updateValue);
        that.noScroll = false;
      });

      function scroll(scrollTop, init) {
        var size = that.selectpicker.current.elements.length,
            chunks = [],
            chunkSize,
            chunkCount,
            firstChunk,
            lastChunk,
            currentChunk = undefined,
            prevPositions,
            positionIsDifferent,
            previousElements,
            menuIsDifferent = true,
            isVirtual = that.isVirtual();

        that.selectpicker.view.scrollTop = scrollTop;

        if (isVirtual === true) {
          // if an option that is encountered that is wider than the current menu width, update the menu width accordingly
          if (that.sizeInfo.hasScrollBar && that.$menu[0].offsetWidth > that.sizeInfo.totalMenuWidth) {
            that.sizeInfo.menuWidth = that.$menu[0].offsetWidth;
            that.sizeInfo.totalMenuWidth = that.sizeInfo.menuWidth + that.sizeInfo.scrollBarWidth;
            that.$menu.css('min-width', that.sizeInfo.menuWidth);
          }
        }

        chunkSize = Math.ceil(that.sizeInfo.menuInnerHeight / that.sizeInfo.liHeight * 1.5); // number of options in a chunk
        chunkCount = Math.round(size / chunkSize) || 1; // number of chunks

        for (var i = 0; i < chunkCount; i++) {
          var end_of_chunk = (i + 1) * chunkSize;

          if (i === chunkCount - 1) {
            end_of_chunk = size;
          }

          chunks[i] = [
            (i) * chunkSize + (!i ? 0 : 1),
            end_of_chunk
          ];

          if (!size) break;

          if (currentChunk === undefined && scrollTop <= that.selectpicker.current.data[end_of_chunk - 1].position - that.sizeInfo.menuInnerHeight) {
            currentChunk = i;
          }
        }

        if (currentChunk === undefined) currentChunk = 0;

        prevPositions = [that.selectpicker.view.position0, that.selectpicker.view.position1];

        // always display previous, current, and next chunks
        firstChunk = Math.max(0, currentChunk - 1);
        lastChunk = Math.min(chunkCount - 1, currentChunk + 1);

        that.selectpicker.view.position0 = Math.max(0, chunks[firstChunk][0]) || 0;
        that.selectpicker.view.position1 = Math.min(size, chunks[lastChunk][1]) || 0;

        positionIsDifferent = prevPositions[0] !== that.selectpicker.view.position0 || prevPositions[1] !== that.selectpicker.view.position1;

        if (that.activeIndex !== undefined) {
          prevActive = that.selectpicker.current.elements[that.selectpicker.current.map.newIndex[that.prevActiveIndex]];
          active = that.selectpicker.current.elements[that.selectpicker.current.map.newIndex[that.activeIndex]];
          selected = that.selectpicker.current.elements[that.selectpicker.current.map.newIndex[that.selectedIndex]];

          if (init) {
            if (that.activeIndex !== that.selectedIndex) {
              active.classList.remove('active');
              if (active.firstChild) active.firstChild.classList.remove('active');
            }
            that.activeIndex = undefined;
          }

          if (that.activeIndex && that.activeIndex !== that.selectedIndex && selected && selected.length) {
            selected.classList.remove('active');
            if (selected.firstChild) selected.firstChild.classList.remove('active');
          }
        }

        if (that.prevActiveIndex !== undefined && that.prevActiveIndex !== that.activeIndex && that.prevActiveIndex !== that.selectedIndex && prevActive && prevActive.length) {
          prevActive.classList.remove('active');
          if (prevActive.firstChild) prevActive.firstChild.classList.remove('active');
        }

        if (init || positionIsDifferent) {
          previousElements = that.selectpicker.view.visibleElements ? that.selectpicker.view.visibleElements.slice() : [];

          that.selectpicker.view.visibleElements = that.selectpicker.current.elements.slice(that.selectpicker.view.position0, that.selectpicker.view.position1);

          that.setOptionStatus();

          // if searching, check to make sure the list has actually been updated before updating DOM
          // this prevents unnecessary repaints
          if ( isSearching || (isVirtual === false && init) ) menuIsDifferent = !isEqual(previousElements, that.selectpicker.view.visibleElements);

          // if virtual scroll is disabled and not searching,
          // menu should never need to be updated more than once
          if ( (init || isVirtual === true) && menuIsDifferent ) {
            var menuInner = that.$menuInner[0],
                menuFragment = document.createDocumentFragment(),
                emptyMenu = menuInner.firstChild.cloneNode(false),
                marginTop,
                marginBottom,
                elements = isVirtual === true ? that.selectpicker.view.visibleElements : that.selectpicker.current.elements;

            // replace the existing UL with an empty one - this is faster than $.empty()
            menuInner.replaceChild(emptyMenu, menuInner.firstChild);

            for (var i = 0, visibleElementsLen = elements.length; i < visibleElementsLen; i++) {
              menuFragment.appendChild(elements[i]);
            }

            if (isVirtual === true) {
              marginTop = (that.selectpicker.view.position0 === 0 ? 0 : that.selectpicker.current.data[that.selectpicker.view.position0 - 1].position),
              marginBottom = (that.selectpicker.view.position1 > size - 1 ? 0 : that.selectpicker.current.data[size - 1].position - that.selectpicker.current.data[that.selectpicker.view.position1 - 1].position);

              menuInner.firstChild.style.marginTop = marginTop + 'px';
              menuInner.firstChild.style.marginBottom = marginBottom + 'px';
            }

            menuInner.firstChild.appendChild(menuFragment);
          }
        }

        that.prevActiveIndex = that.activeIndex;

        if (!that.options.liveSearch) {
          that.$menuInner.focus();
        } else if (isSearching && init) {
          var index = 0,
              newActive;

          if (!that.selectpicker.view.canHighlight[index]) {
            index = 1 + that.selectpicker.view.canHighlight.slice(1).indexOf(true);
          }

          newActive = that.selectpicker.view.visibleElements[index];

          if (that.selectpicker.view.currentActive) {
            that.selectpicker.view.currentActive.classList.remove('active');
            if (that.selectpicker.view.currentActive.firstChild) that.selectpicker.view.currentActive.firstChild.classList.remove('active');
          }

          if (newActive) {
            newActive.classList.add('active');
            if (newActive.firstChild) newActive.firstChild.classList.add('active');
          }

          that.activeIndex = that.selectpicker.current.map.originalIndex[index];
        }
      }

      $(window).off('resize.createView').on('resize.createView', function () {
        scroll(that.$menuInner[0].scrollTop);
      });
    },

    createLi: function () {
      var that = this,
          mainElements = [],
          widestOption,
          availableOptionsCount = 0,
          widestOptionLength = 0,
          mainData = [],
          optID = 0,
          headerIndex = 0,
          liIndex = -1; // increment liIndex whenever a new <li> element is created to ensure newIndex is correct

      if (!this.selectpicker.view.titleOption) this.selectpicker.view.titleOption = document.createElement('option');

      var elementTemplates = {
          span: document.createElement('span'),
          subtext: document.createElement('small'),
          a: document.createElement('a'),
          li: document.createElement('li'),
          whitespace: document.createTextNode("\u00A0")
        },
        checkMark = elementTemplates.span.cloneNode(false),
        fragment = document.createDocumentFragment();

      checkMark.className = that.options.iconBase + ' ' + that.options.tickIcon + ' check-mark';
      elementTemplates.a.appendChild(checkMark);
      elementTemplates.a.setAttribute('role', 'option');

      elementTemplates.subtext.className = 'text-muted';

      elementTemplates.text = elementTemplates.span.cloneNode(false);
      elementTemplates.text.className = 'text';

      // Helper functions
      /**
       * @param content
       * @param [index]
       * @param [classes]
       * @param [optgroup]
       * @returns {HTMLElement}
       */
      var generateLI = function (content, index, classes, optgroup) {
        var li = elementTemplates.li.cloneNode(false);

        if (content) {
          if (content.nodeType === 1 || content.nodeType === 11) {
            li.appendChild(content);
          } else {
            li.innerHTML = content;
          }
        }

        if (typeof classes !== 'undefined' && '' !== classes) li.className = classes;
        if (typeof optgroup !== 'undefined' && null !== optgroup) li.classList.add('optgroup-' + optgroup);

        return li;
      };

      /**
       * @param text
       * @param [classes]
       * @param [inline]
       * @returns {string}
       */
      var generateA = function (text, classes, inline) {
        var a = elementTemplates.a.cloneNode(true);

        if (text) {
          if (text.nodeType === 11) {
            a.appendChild(text);
          } else {
            a.insertAdjacentHTML('beforeend', text);
          }
        }

        if (typeof classes !== 'undefined' & '' !== classes) a.className = classes;
        if (version.major === '4') a.classList.add('dropdown-item');
        if (inline) a.setAttribute('style', inline);

        return a;
      };

      var generateText = function (options) {
        var textElement = elementTemplates.text.cloneNode(false),
            optionSubtextElement,
            optionIconElement;

        if (options.optionContent) {
          textElement.innerHTML = options.optionContent;
        } else {
          textElement.textContent = options.text;

          if (options.optionIcon) {
            var whitespace = elementTemplates.whitespace.cloneNode(false);

            optionIconElement = elementTemplates.span.cloneNode(false);
            optionIconElement.className = that.options.iconBase + ' ' + options.optionIcon;

            fragment.appendChild(optionIconElement);
            fragment.appendChild(whitespace);
          }

          if (options.optionSubtext) {
            optionSubtextElement = elementTemplates.subtext.cloneNode(false);
            optionSubtextElement.textContent = options.optionSubtext;
            textElement.appendChild(optionSubtextElement);
          }
        }

        fragment.appendChild(textElement);

        return fragment;
      };

      var generateLabel = function (options) {
        var labelTextElement = elementTemplates.text.cloneNode(false),
            labelSubtextElement,
            labelIconElement;

        labelTextElement.textContent = options.labelEscaped;

        if (options.labelIcon) {
          var whitespace = elementTemplates.whitespace.cloneNode(false);

          labelIconElement = elementTemplates.span.cloneNode(false);
          labelIconElement.className = that.options.iconBase + ' ' + options.labelIcon;

          fragment.appendChild(labelIconElement);
          fragment.appendChild(whitespace);
        }

        if (options.labelSubtext) {
          labelSubtextElement = elementTemplates.subtext.cloneNode(false);
          labelSubtextElement.textContent = options.labelSubtext;
          labelTextElement.appendChild(labelSubtextElement);
        }

        fragment.appendChild(labelTextElement);

        return fragment;
      }

      if (this.options.title && !this.multiple) {
        // this option doesn't create a new <li> element, but does add a new option, so liIndex is decreased
        // since newIndex is recalculated on every refresh, liIndex needs to be decreased even if the titleOption is already appended
        liIndex--;

        var element = this.$element[0],
            isSelected = false;

        if (!this.selectpicker.view.titleOption.parentNode) {
          // Use native JS to prepend option (faster)
          this.selectpicker.view.titleOption.className = 'bs-title-option';
          this.selectpicker.view.titleOption.innerHTML = this.options.title;
          this.selectpicker.view.titleOption.value = '';

          // Check if selected or data-selected attribute is already set on an option. If not, select the titleOption option.
          // the selected item may have been changed by user or programmatically before the bootstrap select plugin runs,
          // if so, the select will have the data-selected attribute
          var $opt = $(element.options[element.selectedIndex]);
          isSelected = $opt.attr('selected') === undefined && this.$element.data('selected') === undefined;
        }

        element.insertBefore(this.selectpicker.view.titleOption, element.firstChild);

        // Set selected *after* appending to select,
        // otherwise the option doesn't get selected in IE
        // set using selectedIndex, as setting the selected attr to true here doesn't work in IE11
        if (isSelected) element.selectedIndex = 0;
      }

      var $selectOptions = this.$element.find('option');

      $selectOptions.each(function (index) {
        var $this = $(this);

        liIndex++;

        if ($this.hasClass('bs-title-option')) return;

        var thisData = $this.data();

        // Get the class and text for the option
        var optionClass = this.className || '',
            inline = htmlEscape(this.style.cssText),
            optionContent = thisData.content,
            text = this.textContent,
            tokens = thisData.tokens,
            subtext = thisData.subtext,
            icon = thisData.icon,
            $parent = $this.parent(),
            parent = $parent[0],
            isOptgroup = parent.tagName === 'OPTGROUP',
            isOptgroupDisabled = isOptgroup && parent.disabled,
            isDisabled = this.disabled || isOptgroupDisabled,
            prevHiddenIndex,
            showDivider = this.previousElementSibling && this.previousElementSibling.tagName === 'OPTGROUP',
            textElement;

        var parentData = $parent.data();

        if (thisData.hidden === true || that.options.hideDisabled && (isDisabled && !isOptgroup || isOptgroupDisabled)) {
          // set prevHiddenIndex - the index of the first hidden option in a group of hidden options
          // used to determine whether or not a divider should be placed after an optgroup if there are
          // hidden options between the optgroup and the first visible option
          prevHiddenIndex = thisData.prevHiddenIndex;
          $this.next().data('prevHiddenIndex', (prevHiddenIndex !== undefined ? prevHiddenIndex : index));

          liIndex--;

          // if previous element is not an optgroup
          if (!showDivider) {
            if (prevHiddenIndex !== undefined) {
              // select the element **before** the first hidden element in the group
              var prevHidden = $selectOptions[prevHiddenIndex].previousElementSibling;

              if (prevHidden && prevHidden.tagName === 'OPTGROUP' && !prevHidden.disabled) {
                showDivider = true;
              }
            }
          }

          if (showDivider && mainData[mainData.length - 1].type !== 'divider') {
            liIndex++;
            mainElements.push(
              generateLI(
                false,
                null,
                classNames.DIVIDER,
                optID + 'div'
              )
            );
            mainData.push({
              type: 'divider',
              optID: optID,
              originalIndex: index
            });
          }

          return;
        }

        if (isOptgroup && thisData.divider !== true) {
          if (that.options.hideDisabled && isDisabled) {
            if (parentData.allOptionsDisabled === undefined) {
              var $options = $parent.children();
              $parent.data('allOptionsDisabled', $options.filter(':disabled').length === $options.length);
            }

            if ($parent.data('allOptionsDisabled')) {
              liIndex--;
              return;
            }
          }

          var optGroupClass = ' ' + parent.className || '';

          if (!this.previousElementSibling) { // Is it the first option of the optgroup?
            optID += 1;

            // Get the opt group label
            var label = parent.label,
                labelEscaped = htmlEscape(label),
                labelSubtext = parentData.subtext,
                labelIcon = parentData.icon;

            if (index !== 0 && mainElements.length > 0) { // Is it NOT the first option of the select && are there elements in the dropdown?
              liIndex++;
              mainElements.push(
                generateLI(
                  false,
                  null,
                  classNames.DIVIDER,
                  optID + 'div'
                )
              );
              mainData.push({
                type: 'divider',
                optID: optID,
                originalIndex: index
              });
            }
            liIndex++;

            var labelElement = generateLabel({
                  labelEscaped: labelEscaped,
                  labelSubtext: labelSubtext,
                  labelIcon: labelIcon
                });

            mainElements.push(generateLI(labelElement, null, 'dropdown-header' + optGroupClass, optID));
            mainData.push({
              content: labelEscaped,
              subtext: labelSubtext,
              type: 'optgroup-label',
              optID: optID,
              originalIndex: index
            });

            headerIndex = liIndex - 1;
          }

          if (that.options.hideDisabled && isDisabled || thisData.hidden === true) {
            liIndex--;
            return;
          }

          textElement = generateText({
            text: text,
            optionContent: optionContent,
            optionSubtext: subtext,
            optionIcon: icon
          });

          mainElements.push(generateLI(generateA(textElement, 'opt ' + optionClass + optGroupClass, inline), index, '', optID));
          mainData.push({
            content: text,
            subtext: subtext,
            tokens: tokens,
            type: 'option',
            optID: optID,
            headerIndex: headerIndex,
            lastIndex: headerIndex + parent.childElementCount,
            originalIndex: index
          });

          availableOptionsCount++;
        } else if (thisData.divider === true) {
          mainElements.push(generateLI(false, index, 'divider'));
          mainData.push({
            type: 'divider',
            originalIndex: index
          });
        } else {
          // if previous element is not an optgroup and hideDisabled is true
          if (!showDivider && that.options.hideDisabled) {
            prevHiddenIndex = thisData.prevHiddenIndex;

            if (prevHiddenIndex !== undefined) {
              // select the element **before** the first hidden element in the group
              var prevHidden = $selectOptions[prevHiddenIndex].previousElementSibling;

              if (prevHidden && prevHidden.tagName === 'OPTGROUP' && !prevHidden.disabled) {
                showDivider = true;
              }
            }
          }

          if (showDivider && mainData[mainData.length - 1].type !== 'divider') {
            liIndex++;
            mainElements.push(
              generateLI(
                false,
                null,
                classNames.DIVIDER,
                optID + 'div'
              )
            );
            mainData.push({
              type: 'divider',
              optID: optID,
              originalIndex: index
            });
          }

          textElement = generateText({
            text: text,
            optionContent: optionContent,
            optionSubtext: subtext,
            optionIcon: icon
          });

          mainElements.push(generateLI(generateA(textElement, optionClass, inline), index));
          mainData.push({
            content: text,
            subtext: subtext,
            tokens: tokens,
            type: 'option',
            originalIndex: index
          });

          availableOptionsCount++;
        }

        that.selectpicker.main.map.newIndex[index] = liIndex;
        that.selectpicker.main.map.originalIndex[liIndex] = index;

        // get the most recent option info added to mainData
        var _mainDataLast = mainData[mainData.length - 1];

        _mainDataLast.disabled = isDisabled;

        var combinedLength = 0;

        // count the number of characters in the option - not perfect, but should work in most cases
        if (_mainDataLast.content) combinedLength += _mainDataLast.content.length;
        if (_mainDataLast.subtext) combinedLength += _mainDataLast.subtext.length;
        // if there is an icon, ensure this option's width is checked
        if (icon) combinedLength += 1;

        if (combinedLength > widestOptionLength) {
          widestOptionLength = combinedLength;

          // guess which option is the widest
          // use this when calculating menu width
          // not perfect, but it's fast, and the width will be updating accordingly when scrolling
          widestOption = mainElements[mainElements.length - 1];
        }
      });

      this.selectpicker.main.elements = mainElements;
      this.selectpicker.main.data = mainData;

      this.selectpicker.current = this.selectpicker.main;

      this.selectpicker.view.widestOption = widestOption;
      this.selectpicker.view.availableOptionsCount = availableOptionsCount; // faster way to get # of available options without filter
    },

    findLis: function () {
      return this.$menuInner.find('.inner > li');
    },

    render: function () {
      var that = this,
          $selectOptions = this.$element.find('option'),
          selectedItems = [],
          selectedItemsInTitle = [];

      this.togglePlaceholder();

      this.tabIndex();

      $selectOptions.each(function (index) {
        if (this.selected) {
          selectedItems.push(this);

          if (selectedItemsInTitle.length < 100 && that.options.selectedTextFormat !== 'count') {
            if (that.options.hideDisabled && (this.disabled || this.parentNode.tagName === 'OPTGROUP' && this.parentNode.disabled)) return;

            var $this = $(this),
                thisData = $this.data(),
                icon = thisData.icon && that.options.showIcon ? '<i class="' + that.options.iconBase + ' ' + thisData.icon + '"></i> ' : '',
                subtext,
                titleItem;

            if (that.options.showSubtext && thisData.subtext && !that.multiple) {
              subtext = ' <small class="text-muted">' + thisData.subtext + '</small>';
            } else {
              subtext = '';
            }
            if (typeof $this.attr('title') !== 'undefined') {
              titleItem = $this.attr('title');
            } else if (thisData.content && that.options.showContent) {
              titleItem = thisData.content.toString();
            } else {
              titleItem = icon + $this.html() + subtext;
            }

            selectedItemsInTitle.push(titleItem);
          }
        }
      });

      //Fixes issue in IE10 occurring when no default option is selected and at least one option is disabled
      //Convert all the values into a comma delimited string
      var title = !this.multiple ? selectedItemsInTitle[0] : selectedItemsInTitle.join(this.options.multipleSeparator);

      // add ellipsis
      if (selectedItems.length > 100) title += '...';

      //If this is multi select, and the selectText type is count, the show 1 of 2 selected etc..
      if (this.multiple && this.options.selectedTextFormat.indexOf('count') > -1) {
        var max = this.options.selectedTextFormat.split('>');

        if ((max.length > 1 && selectedItems.length > max[1]) || (max.length === 1 && selectedItems.length >= 2)) {
          var totalCount = this.selectpicker.view.availableOptionsCount,
              tr8nText = (typeof this.options.countSelectedText === 'function') ? this.options.countSelectedText(selectedItems.length, totalCount) : this.options.countSelectedText;

          title = tr8nText.replace('{0}', selectedItems.length.toString()).replace('{1}', totalCount.toString());
        }
      }

      if (this.options.title == undefined) {
        this.options.title = this.$element.attr('title');
      }

      if (this.options.selectedTextFormat == 'static') {
        title = this.options.title;
      }

      //If we dont have a title, then use the default, or if nothing is set at all, use the not selected text
      if (!title) {
        title = typeof this.options.title !== 'undefined' ? this.options.title : this.options.noneSelectedText;
      }

      //strip all HTML tags and trim the result, then unescape any escaped tags
      this.$button.attr('title', htmlUnescape($.trim(title.replace(/<[^>]*>?/g, ''))));
      this.$button.find('.filter-option-inner').html(title);

      this.$element.trigger('rendered.bs.select');
    },

    /**
     * @param [style]
     * @param [status]
     */
    setStyle: function (style, status) {
      if (this.$element.attr('class')) {
        this.$newElement.addClass(this.$element.attr('class').replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, ''));
      }

      var buttonClass = style ? style : this.options.style;

      if (status == 'add') {
        this.$button.addClass(buttonClass);
      } else if (status == 'remove') {
        this.$button.removeClass(buttonClass);
      } else {
        this.$button.removeClass(this.options.style);
        this.$button.addClass(buttonClass);
      }
    },

    liHeight: function (refresh) {
      if (!refresh && (this.options.size === false || this.sizeInfo)) return;

      if (!this.sizeInfo) this.sizeInfo = {};

      var newElement = document.createElement('div'),
          menu = document.createElement('div'),
          menuInner = document.createElement('div'),
          menuInnerInner = document.createElement('ul'),
          divider = document.createElement('li'),
          dropdownHeader = document.createElement('li'),
          li = document.createElement('li'),
          a = document.createElement('a'),
          text = document.createElement('span'),
          header = this.options.header && this.$menu.find('.popover-title').length > 0 ? this.$menu.find('.popover-title')[0].cloneNode(true) : null,
          search = this.options.liveSearch ? document.createElement('div') : null,
          actions = this.options.actionsBox && this.multiple && this.$menu.find('.bs-actionsbox').length > 0 ? this.$menu.find('.bs-actionsbox')[0].cloneNode(true) : null,
          doneButton = this.options.doneButton && this.multiple && this.$menu.find('.bs-donebutton').length > 0 ? this.$menu.find('.bs-donebutton')[0].cloneNode(true) : null;

      this.sizeInfo.selectWidth = this.$newElement[0].offsetWidth;

      text.className = 'text';
      a.className = 'dropdown-item';
      newElement.className = this.$menu[0].parentNode.className + ' ' + classNames.SHOW;
      newElement.style.width = this.sizeInfo.selectWidth + 'px';
      menu.className = 'dropdown-menu ' + classNames.SHOW;
      menuInner.className = 'inner ' + classNames.SHOW;
      menuInnerInner.className = 'dropdown-menu inner ' + (version.major === '4' ? classNames.SHOW : '');
      divider.className = classNames.DIVIDER;
      dropdownHeader.className = 'dropdown-header';

      text.appendChild(document.createTextNode('Inner text'));
      a.appendChild(text);
      li.appendChild(a);
      dropdownHeader.appendChild(text.cloneNode(true));

      if (this.selectpicker.view.widestOption) {
        menuInnerInner.appendChild(this.selectpicker.view.widestOption.cloneNode(true));
      }

      menuInnerInner.appendChild(li);
      menuInnerInner.appendChild(divider);
      menuInnerInner.appendChild(dropdownHeader);
      if (header) menu.appendChild(header);
      if (search) {
        var input = document.createElement('input');
        search.className = 'bs-searchbox';
        input.className = 'form-control';
        search.appendChild(input);
        menu.appendChild(search);
      }
      if (actions) menu.appendChild(actions);
      menuInner.appendChild(menuInnerInner);
      menu.appendChild(menuInner);
      if (doneButton) menu.appendChild(doneButton);
      newElement.appendChild(menu);

      document.body.appendChild(newElement);

      var liHeight = a.offsetHeight,
          dropdownHeaderHeight = dropdownHeader ? dropdownHeader.offsetHeight : 0,
          headerHeight = header ? header.offsetHeight : 0,
          searchHeight = search ? search.offsetHeight : 0,
          actionsHeight = actions ? actions.offsetHeight : 0,
          doneButtonHeight = doneButton ? doneButton.offsetHeight : 0,
          dividerHeight = $(divider).outerHeight(true),
          // fall back to jQuery if getComputedStyle is not supported
          menuStyle = window.getComputedStyle ? window.getComputedStyle(menu) : false,
          menuWidth = menu.offsetWidth,
          $menu = menuStyle ? null : $(menu),
          menuPadding = {
            vert: toInteger(menuStyle ? menuStyle.paddingTop : $menu.css('paddingTop')) +
                  toInteger(menuStyle ? menuStyle.paddingBottom : $menu.css('paddingBottom')) +
                  toInteger(menuStyle ? menuStyle.borderTopWidth : $menu.css('borderTopWidth')) +
                  toInteger(menuStyle ? menuStyle.borderBottomWidth : $menu.css('borderBottomWidth')),
            horiz: toInteger(menuStyle ? menuStyle.paddingLeft : $menu.css('paddingLeft')) +
                  toInteger(menuStyle ? menuStyle.paddingRight : $menu.css('paddingRight')) +
                  toInteger(menuStyle ? menuStyle.borderLeftWidth : $menu.css('borderLeftWidth')) +
                  toInteger(menuStyle ? menuStyle.borderRightWidth : $menu.css('borderRightWidth'))
          },
          menuExtras =  {
            vert: menuPadding.vert +
                  toInteger(menuStyle ? menuStyle.marginTop : $menu.css('marginTop')) +
                  toInteger(menuStyle ? menuStyle.marginBottom : $menu.css('marginBottom')) + 2,
            horiz: menuPadding.horiz +
                  toInteger(menuStyle ? menuStyle.marginLeft : $menu.css('marginLeft')) +
                  toInteger(menuStyle ? menuStyle.marginRight : $menu.css('marginRight')) + 2
          },
          scrollBarWidth;

      menuInner.style.overflowY = 'scroll';

      scrollBarWidth = menu.offsetWidth - menuWidth;

      document.body.removeChild(newElement);

      this.sizeInfo.liHeight = liHeight;
      this.sizeInfo.dropdownHeaderHeight = dropdownHeaderHeight;
      this.sizeInfo.headerHeight = headerHeight;
      this.sizeInfo.searchHeight = searchHeight;
      this.sizeInfo.actionsHeight = actionsHeight;
      this.sizeInfo.doneButtonHeight = doneButtonHeight;
      this.sizeInfo.dividerHeight = dividerHeight;
      this.sizeInfo.menuPadding = menuPadding;
      this.sizeInfo.menuExtras = menuExtras;
      this.sizeInfo.menuWidth = menuWidth;
      this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth;
      this.sizeInfo.scrollBarWidth = scrollBarWidth;
      this.sizeInfo.selectHeight = this.$newElement[0].offsetHeight;

      this.setPositionData();
    },

    getSelectPosition: function () {
      var that = this,
          $window = $(window),
          pos = that.$newElement.offset(),
          $container = $(that.options.container),
          containerPos;

      if (that.options.container && !$container.is('body')) {
        containerPos = $container.offset();
        containerPos.top += parseInt($container.css('borderTopWidth'));
        containerPos.left += parseInt($container.css('borderLeftWidth'));
      } else {
        containerPos = { top: 0, left: 0 };
      }

      var winPad = that.options.windowPadding;

      this.sizeInfo.selectOffsetTop = pos.top - containerPos.top - $window.scrollTop();
      this.sizeInfo.selectOffsetBot = $window.height() - this.sizeInfo.selectOffsetTop - this.sizeInfo['selectHeight'] - containerPos.top - winPad[2];
      this.sizeInfo.selectOffsetLeft = pos.left - containerPos.left - $window.scrollLeft();
      this.sizeInfo.selectOffsetRight = $window.width() - this.sizeInfo.selectOffsetLeft - this.sizeInfo['selectWidth'] - containerPos.left - winPad[1];
      this.sizeInfo.selectOffsetTop -= winPad[0];
      this.sizeInfo.selectOffsetLeft -= winPad[3];
    },

    setMenuSize: function (isAuto) {
      this.getSelectPosition();

      var selectWidth = this.sizeInfo['selectWidth'],
          liHeight = this.sizeInfo['liHeight'],
          headerHeight = this.sizeInfo['headerHeight'],
          searchHeight = this.sizeInfo['searchHeight'],
          actionsHeight = this.sizeInfo['actionsHeight'],
          doneButtonHeight = this.sizeInfo['doneButtonHeight'],
          divHeight = this.sizeInfo['dividerHeight'],
          menuPadding = this.sizeInfo['menuPadding'],
          menuInnerHeight,
          menuHeight,
          divLength = 0,
          minHeight,
          _minHeight,
          maxHeight,
          menuInnerMinHeight,
          estimate;

      if (this.options.dropupAuto) {
        // Get the estimated height of the menu without scrollbars.
        // This is useful for smaller menus, where there might be plenty of room
        // below the button without setting dropup, but we can't know
        // the exact height of the menu until createView is called later
        estimate = liHeight * this.selectpicker.current.elements.length + menuPadding.vert;
        this.$newElement.toggleClass(classNames.DROPUP, this.sizeInfo.selectOffsetTop - this.sizeInfo.selectOffsetBot > this.sizeInfo.menuExtras.vert && estimate + this.sizeInfo.menuExtras.vert + 50 > this.sizeInfo.selectOffsetBot);
      }

      if (this.options.size === 'auto') {
        _minHeight = this.selectpicker.current.elements.length > 3 ? this.sizeInfo.liHeight * 3 + this.sizeInfo.menuExtras.vert - 2 : 0;
        menuHeight = this.sizeInfo.selectOffsetBot - this.sizeInfo.menuExtras.vert;
        minHeight = _minHeight + headerHeight + searchHeight + actionsHeight + doneButtonHeight;
        menuInnerMinHeight = Math.max(_minHeight - menuPadding.vert, 0);

        if (this.$newElement.hasClass(classNames.DROPUP)) {
          menuHeight = this.sizeInfo.selectOffsetTop - this.sizeInfo.menuExtras.vert;
        }

        maxHeight = menuHeight;
        menuInnerHeight = menuHeight - headerHeight - searchHeight - actionsHeight - doneButtonHeight - menuPadding.vert;
      } else if (this.options.size && this.options.size != 'auto' && this.selectpicker.current.elements.length > this.options.size) {
        for (var i = 0; i < this.options.size; i++) {
          if (this.selectpicker.current.data[i].type === 'divider') divLength++;
        }

        menuHeight = liHeight * this.options.size + divLength * divHeight + menuPadding.vert;
        menuInnerHeight = menuHeight - menuPadding.vert;
        maxHeight = menuHeight + headerHeight + searchHeight + actionsHeight + doneButtonHeight;
        minHeight = menuInnerMinHeight = '';
      }

      if (this.options.dropdownAlignRight === 'auto') {
        this.$menu.toggleClass(classNames.MENURIGHT, this.sizeInfo.selectOffsetLeft > this.sizeInfo.selectOffsetRight && this.sizeInfo.selectOffsetRight < (this.$menu[0].offsetWidth - selectWidth));
      }

      this.$menu.css({
        'max-height': maxHeight + 'px',
        'overflow': 'hidden',
        'min-height': minHeight + 'px'
      });

      this.$menuInner.css({
        'max-height': menuInnerHeight + 'px',
        'overflow-y': 'auto',
        'min-height': menuInnerMinHeight + 'px'
      });

      this.sizeInfo['menuInnerHeight'] = menuInnerHeight;

      if (this.selectpicker.current.data.length && this.selectpicker.current.data[this.selectpicker.current.data.length - 1].position > this.sizeInfo.menuInnerHeight) {
        this.sizeInfo.hasScrollBar = true;
        this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth + this.sizeInfo.scrollBarWidth;

        this.$menu.css('min-width', this.sizeInfo.totalMenuWidth);
      }

      if (this.dropdown) this.dropdown._popper.update();
    },

    setSize: function (refresh) {
      this.liHeight(refresh);

      if (this.options.header) this.$menu.css('padding-top', 0);
      if (this.options.size === false) return;

      var that = this,
          $window = $(window),
          selectedIndex,
          offset = 0;

      this.setMenuSize();

      if (this.options.size === 'auto') {
        this.$searchbox.off('input.setMenuSize propertychange.setMenuSize').on('input.setMenuSize propertychange.setMenuSize', function() {
          return that.setMenuSize();
        });
        $window.off('resize.setMenuSize scroll.setMenuSize').on('resize.setMenuSize scroll.setMenuSize', function() {
          return that.setMenuSize();
        });
      } else if (this.options.size && this.options.size != 'auto' && this.selectpicker.current.elements.length > this.options.size) {
        this.$searchbox.off('input.setMenuSize propertychange.setMenuSize');
        $window.off('resize.setMenuSize scroll.setMenuSize');
      }

      if (refresh) {
        offset = this.$menuInner[0].scrollTop;
      } else if (!that.multiple) {
        selectedIndex = that.selectpicker.main.map.newIndex[that.$element[0].selectedIndex];

        if (typeof selectedIndex === 'number' && that.options.size !== false) {
          offset = that.sizeInfo.liHeight * selectedIndex;
          offset = offset - (that.sizeInfo.menuInnerHeight / 2) + (that.sizeInfo.liHeight / 2);
        }
      }

      that.createView(false, offset);
    },

    setWidth: function () {
      var that = this;

      if (this.options.width === 'auto') {
        requestAnimationFrame(function() {
          that.$menu.css('min-width', '0');
          that.liHeight();
          that.setMenuSize();

          // Get correct width if element is hidden
          var $selectClone = that.$newElement.clone().appendTo('body'),
              btnWidth = $selectClone.css('width', 'auto').children('button').outerWidth();

          $selectClone.remove();

          // Set width to whatever's larger, button title or longest option
          that.sizeInfo.selectWidth = Math.max(that.sizeInfo.totalMenuWidth, btnWidth);
          that.$newElement.css('width', that.sizeInfo.selectWidth + 'px');
        });
      } else if (this.options.width === 'fit') {
        // Remove inline min-width so width can be changed from 'auto'
        this.$menu.css('min-width', '');
        this.$newElement.css('width', '').addClass('fit-width');
      } else if (this.options.width) {
        // Remove inline min-width so width can be changed from 'auto'
        this.$menu.css('min-width', '');
        this.$newElement.css('width', this.options.width);
      } else {
        // Remove inline min-width/width so width can be changed
        this.$menu.css('min-width', '');
        this.$newElement.css('width', '');
      }
      // Remove fit-width class if width is changed programmatically
      if (this.$newElement.hasClass('fit-width') && this.options.width !== 'fit') {
        this.$newElement.removeClass('fit-width');
      }
    },

    selectPosition: function () {
      this.$bsContainer = $('<div class="bs-container" />');

      var that = this,
          $container = $(this.options.container),
          pos,
          containerPos,
          actualHeight,
          getPlacement = function ($element) {
            var containerPosition = {};

            that.$bsContainer.addClass($element.attr('class').replace(/form-control|fit-width/gi, '')).toggleClass(classNames.DROPUP, $element.hasClass(classNames.DROPUP));
            pos = $element.offset();

            if (!$container.is('body')) {
              containerPos = $container.offset();
              containerPos.top += parseInt($container.css('borderTopWidth')) - $container.scrollTop();
              containerPos.left += parseInt($container.css('borderLeftWidth')) - $container.scrollLeft();
            } else {
              containerPos = { top: 0, left: 0 };
            }

            actualHeight = $element.hasClass(classNames.DROPUP) ? 0 : $element[0].offsetHeight;

            // Bootstrap 4+ uses Popper for menu positioning
            if (version.major < 4) {
              containerPosition['top'] = pos.top - containerPos.top + actualHeight;
              containerPosition['left'] = pos.left - containerPos.left;
            }

            containerPosition['width'] = $element[0].offsetWidth;

            that.$bsContainer.css(containerPosition);
          };

      this.$button.on('click.bs.dropdown.data-api', function () {
        if (that.isDisabled()) {
          return;
        }

        getPlacement(that.$newElement);

        that.$bsContainer
          .appendTo(that.options.container)
          .toggleClass(classNames.SHOW, !that.$button.hasClass(classNames.SHOW))
          .append(that.$menu);
      });

      $(window).on('resize scroll', function () {
        getPlacement(that.$newElement);
      });

      this.$element.on('hide.bs.select', function () {
        that.$menu.data('height', that.$menu.height());
        that.$bsContainer.detach();
      });
    },

    setOptionStatus: function () {
      var that = this,
          $selectOptions = this.$element.find('option');

      that.noScroll = false;

      if (that.selectpicker.view.visibleElements && that.selectpicker.view.visibleElements.length) {
        for (var i = 0; i < that.selectpicker.view.visibleElements.length; i++) {
          var index = that.selectpicker.current.map.originalIndex[i + that.selectpicker.view.position0], // faster than $(li).data('originalIndex')
              option = $selectOptions[index];

          if (option) {
            var liIndex = this.selectpicker.main.map.newIndex[index],
                li = this.selectpicker.main.elements[liIndex];

            that.setDisabled(
              index,
              option.disabled || option.parentNode.tagName === 'OPTGROUP' && option.parentNode.disabled,
              liIndex,
              li
            );

            that.setSelected(
              index,
              option.selected,
              liIndex,
              li
            );
          }
        }
      }
    },

    /**
     * @param {number} index - the index of the option that is being changed
     * @param {boolean} selected - true if the option is being selected, false if being deselected
     */
    setSelected: function (index, selected, liIndex, li) {
      var activeIndexIsSet = this.activeIndex !== undefined,
          thisIsActive = this.activeIndex === index,
          prevActiveIndex,
          prevActive,
          a,
          keepActive = thisIsActive || selected && !this.multiple && !activeIndexIsSet;

      if (!liIndex) liIndex = this.selectpicker.main.map.newIndex[index];
      if (!li) li = this.selectpicker.main.elements[liIndex];

      a = li.firstChild;

      if (selected) {
        this.selectedIndex = index;
      }

      li.classList.toggle('selected', selected);
      li.classList.toggle('active', keepActive);

      if (keepActive) {
        this.selectpicker.view.currentActive = li;
        this.activeIndex = index
      }

      if (a) {
        a.classList.toggle('selected', selected);
        a.classList.toggle('active', keepActive);
        a.setAttribute('aria-selected', selected);
      }

      if (!keepActive) {
        if (!activeIndexIsSet && selected && this.prevActiveIndex) {
          prevActiveIndex = this.selectpicker.main.map.newIndex[this.prevActiveIndex];
          prevActive = this.selectpicker.main.elements[prevActiveIndex];

          prevActive.classList.remove('active');
          if (prevActive.firstChild) prevActive.firstChild.classList.remove('active');
        }
      }
    },

    /**
     * @param {number} index - the index of the option that is being disabled
     * @param {boolean} disabled - true if the option is being disabled, false if being enabled
     */
    setDisabled: function (index, disabled, liIndex, li) {
      var a;

      if (!liIndex) liIndex = this.selectpicker.main.map.newIndex[index];
      if (!li) li = this.selectpicker.main.elements[liIndex];

      a = li.firstChild;

      li.classList.toggle(classNames.DISABLED, disabled);

      if (a) {
        if (version.major === '4') a.classList.toggle(classNames.DISABLED, disabled);

        a.setAttribute('aria-disabled', disabled);

        if (disabled) {
          a.setAttribute('tabindex', -1);
        } else {
          a.setAttribute('tabindex', 0);
        }
      }
    },

    isDisabled: function () {
      return this.$element[0].disabled;
    },

    checkDisabled: function () {
      var that = this;

      if (this.isDisabled()) {
        this.$newElement.addClass(classNames.DISABLED);
        this.$button.addClass(classNames.DISABLED).attr('tabindex', -1).attr('aria-disabled', true);
      } else {
        if (this.$button.hasClass(classNames.DISABLED)) {
          this.$newElement.removeClass(classNames.DISABLED);
          this.$button.removeClass(classNames.DISABLED).attr('aria-disabled', false);
        }

        if (this.$button.attr('tabindex') == -1 && !this.$element.data('tabindex')) {
          this.$button.removeAttr('tabindex');
        }
      }

      this.$button.click(function () {
        return !that.isDisabled();
      });
    },

    togglePlaceholder: function () {
      // much faster than calling $.val()
      var element = this.$element[0],
          selectedIndex = element.selectedIndex,
          nothingSelected = selectedIndex === -1;

      if (!nothingSelected && !element.options[selectedIndex].value) nothingSelected = true;

      this.$button.toggleClass('bs-placeholder', nothingSelected);
    },

    tabIndex: function () {
      if (this.$element.data('tabindex') !== this.$element.attr('tabindex') &&
        (this.$element.attr('tabindex') !== -98 && this.$element.attr('tabindex') !== '-98')) {
        this.$element.data('tabindex', this.$element.attr('tabindex'));
        this.$button.attr('tabindex', this.$element.data('tabindex'));
      }

      this.$element.attr('tabindex', -98);
    },

    clickListener: function () {
      var that = this,
          $document = $(document);

      $document.data('spaceSelect', false);

      this.$button.on('keyup', function (e) {
        if (/(32)/.test(e.keyCode.toString(10)) && $document.data('spaceSelect')) {
            e.preventDefault();
            $document.data('spaceSelect', false);
        }
      });

      this.$newElement.on('show.bs.dropdown', function() {
        if (version.major > 3 && !that.dropdown) {
          that.dropdown = that.$button.data('bs.dropdown');
          that.dropdown._menu = that.$menu[0];
        }
      });

      this.$button.on('click.bs.dropdown.data-api', function () {
        if (!that.$newElement.hasClass(classNames.SHOW)) {
          that.setSize();
        }
      });

      this.$element.on('shown.bs.select', function () {
        if (that.$menuInner[0].scrollTop !== that.selectpicker.view.scrollTop) {
          that.$menuInner[0].scrollTop = that.selectpicker.view.scrollTop;
        }

        if (that.options.liveSearch) {
          that.$searchbox.focus();
        } else {
          that.$menuInner.focus();
        }
      });

      this.$menuInner.on('click', 'li a', function (e, retainActive) {
        var $this = $(this),
            position0 = that.isVirtual() ? that.selectpicker.view.position0 : 0,
            clickedIndex = that.selectpicker.current.map.originalIndex[$this.parent().index() + position0],
            prevValue = that.$element.val(),
            prevIndex = that.$element.prop('selectedIndex'),
            triggerChange = true;

        // Don't close on multi choice menu
        if (that.multiple && that.options.maxOptions !== 1) {
          e.stopPropagation();
        }

        e.preventDefault();

        //Don't run if we have been disabled
        if (!that.isDisabled() && !$this.parent().hasClass(classNames.DISABLED)) {
          var $options = that.$element.find('option'),
              $option = $options.eq(clickedIndex),
              state = $option.prop('selected'),
              $optgroup = $option.parent('optgroup'),
              maxOptions = that.options.maxOptions,
              maxOptionsGrp = $optgroup.data('maxOptions') || false;

          if (!that.multiple) { // Deselect all others if not multi select box
            $options.prop('selected', false);
            $option.prop('selected', true);
            that.setSelected(clickedIndex, true);
          } else { // Toggle the one we have chosen if we are multi select.
            $option.prop('selected', !state);

            if (clickedIndex === that.activeIndex) retainActive = true;

            if (!retainActive) {
              that.prevActiveIndex = that.activeIndex;
              that.activeIndex = undefined;
            }

            that.setSelected(clickedIndex, !state);
            $this.blur();

            if (maxOptions !== false || maxOptionsGrp !== false) {
              var maxReached = maxOptions < $options.filter(':selected').length,
                  maxReachedGrp = maxOptionsGrp < $optgroup.find('option:selected').length;

              if ((maxOptions && maxReached) || (maxOptionsGrp && maxReachedGrp)) {
                if (maxOptions && maxOptions == 1) {
                  $options.prop('selected', false);
                  $option.prop('selected', true);
                  that.$menuInner.find('.selected').removeClass('selected');
                  that.setSelected(clickedIndex, true);
                } else if (maxOptionsGrp && maxOptionsGrp == 1) {
                  $optgroup.find('option:selected').prop('selected', false);
                  $option.prop('selected', true);
                  var optgroupID = that.selectpicker.current.data[$this.parent().index() + that.selectpicker.view.position0].optID;
                  that.$menuInner.find('.optgroup-' + optgroupID).removeClass('selected');
                  that.setSelected(clickedIndex, true);
                } else {
                  var maxOptionsText = typeof that.options.maxOptionsText === 'string' ? [that.options.maxOptionsText, that.options.maxOptionsText] : that.options.maxOptionsText,
                      maxOptionsArr = typeof maxOptionsText === 'function' ? maxOptionsText(maxOptions, maxOptionsGrp) : maxOptionsText,
                      maxTxt = maxOptionsArr[0].replace('{n}', maxOptions),
                      maxTxtGrp = maxOptionsArr[1].replace('{n}', maxOptionsGrp),
                      $notify = $('<div class="notify"></div>');
                  // If {var} is set in array, replace it
                  /** @deprecated */
                  if (maxOptionsArr[2]) {
                    maxTxt = maxTxt.replace('{var}', maxOptionsArr[2][maxOptions > 1 ? 0 : 1]);
                    maxTxtGrp = maxTxtGrp.replace('{var}', maxOptionsArr[2][maxOptionsGrp > 1 ? 0 : 1]);
                  }

                  $option.prop('selected', false);

                  that.$menu.append($notify);

                  if (maxOptions && maxReached) {
                    $notify.append($('<div>' + maxTxt + '</div>'));
                    triggerChange = false;
                    that.$element.trigger('maxReached.bs.select');
                  }

                  if (maxOptionsGrp && maxReachedGrp) {
                    $notify.append($('<div>' + maxTxtGrp + '</div>'));
                    triggerChange = false;
                    that.$element.trigger('maxReachedGrp.bs.select');
                  }

                  setTimeout(function () {
                    that.setSelected(clickedIndex, false);
                  }, 10);

                  $notify.delay(750).fadeOut(300, function () {
                    $(this).remove();
                  });
                }
              }
            }
          }

          if (!that.multiple || (that.multiple && that.options.maxOptions === 1)) {
            that.$button.focus();
          } else if (that.options.liveSearch) {
            that.$searchbox.focus();
          }

          // Trigger select 'change'
          if (triggerChange) {
            if ((prevValue != that.$element.val() && that.multiple) || (prevIndex != that.$element.prop('selectedIndex') && !that.multiple)) {
              // $option.prop('selected') is current option state (selected/unselected). state is previous option state.
              changed_arguments = [clickedIndex, $option.prop('selected'), state];
              that.$element
                .triggerNative('change');
            }
          }
        }
      });

      this.$menu.on('click', 'li.' + classNames.DISABLED + ' a, .popover-title, .popover-title :not(.close)', function (e) {
        if (e.currentTarget == this) {
          e.preventDefault();
          e.stopPropagation();
          if (that.options.liveSearch && !$(e.target).hasClass('close')) {
            that.$searchbox.focus();
          } else {
            that.$button.focus();
          }
        }
      });

      this.$menuInner.on('click', '.divider, .dropdown-header', function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (that.options.liveSearch) {
          that.$searchbox.focus();
        } else {
          that.$button.focus();
        }
      });

      this.$menu.on('click', '.popover-title .close', function () {
        that.$button.click();
      });

      this.$searchbox.on('click', function (e) {
        e.stopPropagation();
      });

      this.$menu.on('click', '.actions-btn', function (e) {
        if (that.options.liveSearch) {
          that.$searchbox.focus();
        } else {
          that.$button.focus();
        }

        e.preventDefault();
        e.stopPropagation();

        if ($(this).hasClass('bs-select-all')) {
          that.selectAll();
        } else {
          that.deselectAll();
        }
      });

      this.$element.on({
        'change': function () {
          that.render();
          that.$element.trigger('changed.bs.select', changed_arguments);
          changed_arguments = null;
        },
        'focus': function () {
          that.$button.focus();
        }
      });
    },

    liveSearchListener: function () {
      var that = this,
          no_results = document.createElement('li');

      this.$button.on('click.bs.dropdown.data-api', function () {
        if (!!that.$searchbox.val()) {
          that.$searchbox.val('');
        }
      });

      this.$searchbox.on('click.bs.dropdown.data-api focus.bs.dropdown.data-api touchend.bs.dropdown.data-api', function (e) {
        e.stopPropagation();
      });

      this.$searchbox.on('input propertychange', function () {
        var searchValue = that.$searchbox.val();

        that.selectpicker.search.map.newIndex = {};
        that.selectpicker.search.map.originalIndex = {};
        that.selectpicker.search.elements = [];
        that.selectpicker.search.data = [];

        if (searchValue) {
          var i,
              searchMatch = [],
              q = searchValue.toUpperCase(),
              cache = {},
              cacheArr = [],
              searchStyle = that._searchStyle(),
              normalizeSearch = that.options.liveSearchNormalize;

          that._$lisSelected = that.$menuInner.find('.selected');

          for (var i = 0; i < that.selectpicker.main.data.length; i++) {
            var li = that.selectpicker.main.data[i];

            if (!cache[i]) {
              cache[i] = stringSearch(li, q, searchStyle, normalizeSearch);
            }

            if (cache[i] && li.headerIndex !== undefined && cacheArr.indexOf(li.headerIndex) === -1) {
              if (li.headerIndex > 0) {
                cache[li.headerIndex - 1] = true;
                cacheArr.push(li.headerIndex - 1);
              }

              cache[li.headerIndex] = true;
              cacheArr.push(li.headerIndex);

              cache[li.lastIndex + 1] = true;
            }

            if (cache[i] && li.type !== 'optgroup-label') cacheArr.push(i);
          }

          for (var i = 0, cacheLen = cacheArr.length; i < cacheLen; i++) {
            var index = cacheArr[i],
                prevIndex = cacheArr[i - 1],
                li = that.selectpicker.main.data[index],
                liPrev = that.selectpicker.main.data[prevIndex];

            if ( li.type !== 'divider' || ( li.type === 'divider' && liPrev && liPrev.type !== 'divider' && cacheLen - 1 !== i ) ) {
              that.selectpicker.search.data.push(li);
              searchMatch.push(that.selectpicker.main.elements[index]);
              that.selectpicker.search.map.newIndex[li.originalIndex] = searchMatch.length - 1;
              that.selectpicker.search.map.originalIndex[searchMatch.length - 1] = li.originalIndex;
            }
          }

          that.activeIndex = undefined;
          that.noScroll = true;
          that.$menuInner.scrollTop(0);
          that.selectpicker.search.elements = searchMatch;
          that.createView(true);

          if (!searchMatch.length) {
            no_results.className = 'no-results';
            no_results.innerHTML = that.options.noneResultsText.replace('{0}', '"' + htmlEscape(searchValue) + '"');
            that.$menuInner[0].firstChild.appendChild(no_results);
          }
        } else {
          that.$menuInner.scrollTop(0);
          that.createView(false);
        }
      });
    },

    _searchStyle: function () {
      return this.options.liveSearchStyle || 'contains';
    },

    val: function (value) {
      if (typeof value !== 'undefined') {
        this.$element
          .val(value)
          .triggerNative('change');

        return this.$element;
      } else {
        return this.$element.val();
      }
    },

    changeAll: function (status) {
      if (!this.multiple) return;
      if (typeof status === 'undefined') status = true;

      var $selectOptions = this.$element.find('option'),
          previousSelected = 0,
          currentSelected = 0;

      for (var i = 0; i < this.selectpicker.current.elements.length; i++) {
        var index = this.selectpicker.current.map.originalIndex[i], // faster than $(li).data('originalIndex')
            option = $selectOptions[index];

        if (option) {
          if (option.selected) previousSelected++;
          option.selected = status;
          if (option.selected) currentSelected++;
        }
      }

      if (previousSelected === currentSelected) return;

      this.setOptionStatus();

      this.togglePlaceholder();

      this.$element
        .triggerNative('change');
    },

    selectAll: function () {
      return this.changeAll(true);
    },

    deselectAll: function () {
      return this.changeAll(false);
    },

    toggle: function (e) {
      e = e || window.event;

      if (e) e.stopPropagation();

      this.$button.trigger('click.bs.dropdown.data-api');
    },

    keydown: function (e) {
      var $this = $(this),
          $parent = $this.is('input') ? $this.parent().parent() : $this.parent(),
          that = $parent.data('this'),
          $items = that.findLis(),
          index,
          isActive,
          liActive,
          activeLi,
          offset,
          updateScroll = false,
          downOnTab = e.which === keyCodes.TAB && !$this.hasClass('dropdown-toggle') && !that.options.selectOnTab,
          isArrowKey = REGEXP_ARROW.test(e.which) || downOnTab,
          scrollTop = that.$menuInner[0].scrollTop,
          isVirtual = that.isVirtual(),
          position0 = isVirtual === true ? that.selectpicker.view.position0 : 0;

      isActive = that.$newElement.hasClass(classNames.SHOW);

      if (
        !isActive &&
        (
          isArrowKey ||
          e.which >= 48 && e.which <= 57 ||
          e.which >= 96 && e.which <= 105 ||
          e.which >= 65 && e.which <= 90
        )
      ) {
        that.$button.trigger('click.bs.dropdown.data-api');
      }

      if (e.which === keyCodes.ESCAPE && isActive) {
        e.preventDefault();
        that.$button.trigger('click.bs.dropdown.data-api').focus();
      }

      if (isArrowKey) { // if up or down
        if (!$items.length) return;

        // $items.index/.filter is too slow with a large list and no virtual scroll
        index = isVirtual === true ? $items.index($items.filter('.active')) : that.selectpicker.current.map.newIndex[that.activeIndex];

        if (index === undefined) index = -1;

        if (index !== -1) {
          liActive = that.selectpicker.current.elements[index + position0];
          liActive.classList.remove('active');
          if (liActive.firstChild) liActive.firstChild.classList.remove('active');
        }

        if (e.which === keyCodes.ARROW_UP) { // up
          if (index !== -1) index--;
          if (index + position0 < 0) index += $items.length;

          if (!that.selectpicker.view.canHighlight[index + position0]) {
            index = that.selectpicker.view.canHighlight.slice(0, index + position0).lastIndexOf(true) - position0;
            if (index === -1) index = $items.length - 1;
          }
        } else if (e.which === keyCodes.ARROW_DOWN || downOnTab) { // down
          index++;
          if (index + position0 >= that.selectpicker.view.canHighlight.length) index = 0;

          if (!that.selectpicker.view.canHighlight[index + position0]) {
            index = index + 1 + that.selectpicker.view.canHighlight.slice(index + position0 + 1).indexOf(true);
          }
        }

        e.preventDefault();

        var liActiveIndex = position0 + index;

        if (e.which === keyCodes.ARROW_UP) { // up
          // scroll to bottom and highlight last option
          if (position0 === 0 && index === $items.length - 1) {
            that.$menuInner[0].scrollTop = that.$menuInner[0].scrollHeight;

            liActiveIndex = that.selectpicker.current.elements.length - 1;
          } else {
            activeLi = that.selectpicker.current.data[liActiveIndex];
            offset = activeLi.position - activeLi.height;

            updateScroll = offset < scrollTop;
          }
        } else if (e.which === keyCodes.ARROW_DOWN || downOnTab) { // down
          // scroll to top and highlight first option
          if (position0 !== 0 && index === 0) {
            that.$menuInner[0].scrollTop = 0;

            liActiveIndex = 0;
          } else {
            activeLi = that.selectpicker.current.data[liActiveIndex];
            offset = activeLi.position - that.sizeInfo.menuInnerHeight;

            updateScroll = offset > scrollTop;
          }
        }

        liActive = that.selectpicker.current.elements[liActiveIndex];
        liActive.classList.add('active');
        if (liActive.firstChild) liActive.firstChild.classList.add('active');
        that.activeIndex = that.selectpicker.current.map.originalIndex[liActiveIndex];

        that.selectpicker.view.currentActive = liActive;

        if (updateScroll) that.$menuInner[0].scrollTop = offset;

        if (that.options.liveSearch) {
          that.$searchbox.focus();
        } else {
          $this.focus();
        }
      } else if (
        !$this.is('input') &&
        !REGEXP_TAB_OR_ESCAPE.test(e.which) ||
        (e.which === keyCodes.SPACE && that.selectpicker.keydown.keyHistory)
      ) {
        var searchMatch,
            matches = [],
            keyHistory;

        e.preventDefault();

        that.selectpicker.keydown.keyHistory += keyCodeMap[e.which];

        if (that.selectpicker.keydown.resetKeyHistory.cancel) clearTimeout(that.selectpicker.keydown.resetKeyHistory.cancel);
        that.selectpicker.keydown.resetKeyHistory.cancel = that.selectpicker.keydown.resetKeyHistory.start();

        keyHistory = that.selectpicker.keydown.keyHistory;

        // if all letters are the same, set keyHistory to just the first character when searching
        if (/^(.)\1+$/.test(keyHistory)) {
          keyHistory = keyHistory.charAt(0);
        }

        // find matches
        for (var i = 0; i < that.selectpicker.current.data.length; i++) {
          var li = that.selectpicker.current.data[i],
              hasMatch;

          hasMatch = stringSearch(li, keyHistory, 'startsWith', true);

          if (hasMatch && that.selectpicker.view.canHighlight[i]) {
            li.index = i;
            matches.push(li.originalIndex);
          }
        }

        if (matches.length) {
          var matchIndex = 0;

          $items.removeClass('active').find('a').removeClass('active');

          // either only one key has been pressed or they are all the same key
          if (keyHistory.length === 1) {
            matchIndex = matches.indexOf(that.activeIndex);

            if (matchIndex === -1 || matchIndex === matches.length - 1) {
              matchIndex = 0;
            } else {
              matchIndex++;
            }
          }

          searchMatch = that.selectpicker.current.map.newIndex[matches[matchIndex]];

          activeLi = that.selectpicker.current.data[searchMatch];

          if (scrollTop - activeLi.position > 0) {
            offset = activeLi.position - activeLi.height;
            updateScroll = true;
          } else {
            offset = activeLi.position - that.sizeInfo.menuInnerHeight;
            // if the option is already visible at the current scroll position, just keep it the same
            updateScroll = activeLi.position > scrollTop + that.sizeInfo.menuInnerHeight;
          }

          liActive = that.selectpicker.current.elements[searchMatch];
          liActive.classList.add('active');
          if (liActive.firstChild) liActive.firstChild.classList.add('active');
          that.activeIndex = matches[matchIndex];

          liActive.firstChild.focus();

          if (updateScroll) that.$menuInner[0].scrollTop = offset;

          $this.focus();
        }
      }

      // Select focused option if "Enter", "Spacebar" or "Tab" (when selectOnTab is true) are pressed inside the menu.
      if (
        isActive &&
        (
          (e.which === keyCodes.SPACE && !that.selectpicker.keydown.keyHistory) ||
          e.which === keyCodes.ENTER ||
          (e.which === keyCodes.TAB && that.options.selectOnTab)
        )
      ) {
        if (e.which !== keyCodes.SPACE) e.preventDefault();

        if (!that.options.liveSearch || e.which !== keyCodes.SPACE) {
          that.$menuInner.find('.active a').trigger('click', true); // retain active class
          $this.focus();

          if (!that.options.liveSearch) {
            // Prevent screen from scrolling if the user hits the spacebar
            e.preventDefault();
            // Fixes spacebar selection of dropdown items in FF & IE
            $(document).data('spaceSelect', true);
          }
        }
      }
    },

    mobile: function () {
      this.$element.addClass('mobile-device');
    },

    refresh: function () {
      // update options if data attributes have been changed
      var config = $.extend({}, this.options, this.$element.data());
      this.options = config;

      this.selectpicker.main.map.newIndex = {};
      this.selectpicker.main.map.originalIndex = {};
      this.createLi();
      this.checkDisabled();
      this.render();
      this.setStyle();
      this.setWidth();

      this.setSize(true);

      this.$element.trigger('refreshed.bs.select');
    },

    hide: function () {
      this.$newElement.hide();
    },

    show: function () {
      this.$newElement.show();
    },

    remove: function () {
      this.$newElement.remove();
      this.$element.remove();
    },

    destroy: function () {
      this.$newElement.before(this.$element).remove();

      if (this.$bsContainer) {
        this.$bsContainer.remove();
      } else {
        this.$menu.remove();
      }

      this.$element
        .off('.bs.select')
        .removeData('selectpicker')
        .removeClass('bs-select-hidden selectpicker');
    }
  };

  // SELECTPICKER PLUGIN DEFINITION
  // ==============================
  function Plugin(option) {
    // get the args of the outer function..
    var args = arguments;
    // The arguments of the function are explicitly re-defined from the argument list, because the shift causes them
    // to get lost/corrupted in android 2.3 and IE9 #715 #775
    var _option = option;

    [].shift.apply(args);

    var value;
    var chain = this.each(function () {
      var $this = $(this);
      if ($this.is('select')) {
        var data = $this.data('selectpicker'),
            options = typeof _option == 'object' && _option;

        if (!data) {
          var config = $.extend({}, Selectpicker.DEFAULTS, $.fn.selectpicker.defaults || {}, $this.data(), options);
          config.template = $.extend({}, Selectpicker.DEFAULTS.template, ($.fn.selectpicker.defaults ? $.fn.selectpicker.defaults.template : {}), $this.data().template, options.template);
          $this.data('selectpicker', (data = new Selectpicker(this, config)));
        } else if (options) {
          for (var i in options) {
            if (options.hasOwnProperty(i)) {
              data.options[i] = options[i];
            }
          }
        }

        if (typeof _option == 'string') {
          if (data[_option] instanceof Function) {
            value = data[_option].apply(data, args);
          } else {
            value = data.options[_option];
          }
        }
      }
    });

    if (typeof value !== 'undefined') {
      //noinspection JSUnusedAssignment
      return value;
    } else {
      return chain;
    }
  }

  var old = $.fn.selectpicker;
  $.fn.selectpicker = Plugin;
  $.fn.selectpicker.Constructor = Selectpicker;

  // SELECTPICKER NO CONFLICT
  // ========================
  $.fn.selectpicker.noConflict = function () {
    $.fn.selectpicker = old;
    return this;
  };

  $(document)
      .off('keydown.bs.dropdown.data-api')
      .on('keydown.bs.select', '.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bs-searchbox input', Selectpicker.prototype.keydown)
      .on('focusin.modal', '.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bs-searchbox input', function (e) {
        e.stopPropagation();
      });

  // SELECTPICKER DATA-API
  // =====================
  $(window).on('load.bs.select.data-api', function () {
    $('.selectpicker').each(function () {
      var $selectpicker = $(this);
      Plugin.call($selectpicker, $selectpicker.data());
    })
  });
})(jQuery);

/* =============================================================
 * bootstrap3-typeahead.js v4.0.2
 * https://github.com/bassjobsen/Bootstrap-3-Typeahead
 * =============================================================
 * Original written by @mdo and @fat
 * =============================================================
 * Copyright 2014 Bass Jobsen @bassjobsen
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


(function (root, factory) {

  'use strict';

  // CommonJS module is defined
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = factory(require('jquery'));
  }
  // AMD module is defined
  else if (typeof define === 'function' && define.amd) {
    define(['jquery'], function ($) {
      return factory ($);
    });
  } else {
    factory(root.jQuery);
  }

}(this, function ($) {

  'use strict';
  // jshint laxcomma: true


 /* TYPEAHEAD PUBLIC CLASS DEFINITION
  * ================================= */

  var Typeahead = function (element, options) {
    this.$element = $(element);
    this.options = $.extend({}, Typeahead.defaults, options);
    this.matcher = this.options.matcher || this.matcher;
    this.sorter = this.options.sorter || this.sorter;
    this.select = this.options.select || this.select;
    this.autoSelect = typeof this.options.autoSelect == 'boolean' ? this.options.autoSelect : true;
    this.highlighter = this.options.highlighter || this.highlighter;
    this.render = this.options.render || this.render;
    this.updater = this.options.updater || this.updater;
    this.displayText = this.options.displayText || this.displayText;
    this.itemLink = this.options.itemLink || this.itemLink;
    this.itemTitle = this.options.itemTitle || this.itemTitle;
    this.followLinkOnSelect = this.options.followLinkOnSelect || this.followLinkOnSelect;
    this.source = this.options.source;
    this.delay = this.options.delay;
    this.theme = this.options.theme && this.options.themes && this.options.themes[this.options.theme] || Typeahead.defaults.themes[Typeahead.defaults.theme];
    this.$menu = $(this.options.menu || this.theme.menu);
    this.$appendTo = this.options.appendTo ? $(this.options.appendTo) : null;
    this.fitToElement = typeof this.options.fitToElement == 'boolean' ? this.options.fitToElement : false;
    this.shown = false;
    this.listen();
    this.showHintOnFocus = typeof this.options.showHintOnFocus == 'boolean' || this.options.showHintOnFocus === "all" ? this.options.showHintOnFocus : false;
    this.afterSelect = this.options.afterSelect;
    this.afterEmptySelect = this.options.afterEmptySelect;
    this.addItem = false;
    this.value = this.$element.val() || this.$element.text();
    this.keyPressed = false;
    this.focused = this.$element.is( ":focus" );
  };

  Typeahead.prototype = {

    constructor: Typeahead,


    setDefault: function (val) {
      // var val = this.$menu.find('.active').data('value');
      this.$element.data('active', val);
      if (this.autoSelect || val) {
        var newVal = this.updater(val);
        // Updater can be set to any random functions via "options" parameter in constructor above.
        // Add null check for cases when updater returns void or undefined.
        if (!newVal) {
          newVal = '';
        }
        this.$element
          .val(this.displayText(newVal) || newVal)
          .text(this.displayText(newVal) || newVal)
          .change();
        this.afterSelect(newVal);
      }
      return this.hide();
    },

    select: function () {
        var val = this.$menu.find('.active').data('value');

        this.$element.data('active', val);
        if (this.autoSelect || val) {
            var newVal = this.updater(val);
            // Updater can be set to any random functions via "options" parameter in constructor above.
            // Add null check for cases when updater returns void or undefined.
            if (!newVal) {
              newVal = '';
            }
            this.$element
              .val(this.displayText(newVal) || newVal)
              .text(this.displayText(newVal) || newVal)
              .change();

            // dimitris: fix for https://github.com/bassjobsen/Bootstrap-3-Typeahead/issues/321
            // this.afterSelect(newVal);

            if(this.followLinkOnSelect && this.itemLink(val)) {
                document.location = this.itemLink(val);
                this.afterSelect(newVal);
            } else if(this.followLinkOnSelect && !this.itemLink(val)) {
                this.afterEmptySelect(newVal);
            } else {
                this.afterSelect(newVal);
            }
        } else {
            this.afterEmptySelect(newVal);
        }

        return this.hide();
    },

    updater: function (item) {
      return item;
    },

    setSource: function (source) {
      this.source = source;
    },

    show: function () {
      var pos = $.extend({}, this.$element.position(), {
        height: this.$element[0].offsetHeight
      });

      var scrollHeight = typeof this.options.scrollHeight == 'function' ?
          this.options.scrollHeight.call() :
          this.options.scrollHeight;

      var element;
      if (this.shown) {
        element = this.$menu;
      } else if (this.$appendTo) {
        element = this.$menu.appendTo(this.$appendTo);
        this.hasSameParent = this.$appendTo.is(this.$element.parent());
      } else {
        element = this.$menu.insertAfter(this.$element);
        this.hasSameParent = true;
      }

      if (!this.hasSameParent) {
          // We cannot rely on the element position, need to position relative to the window
          element.css("position", "fixed");
          var offset = this.$element.offset();
          pos.top =  offset.top;
          pos.left = offset.left;
      }
      // The rules for bootstrap are: 'dropup' in the parent and 'dropdown-menu-right' in the element.
      // Note that to get right alignment, you'll need to specify `menu` in the options to be:
      // '<ul class="typeahead dropdown-menu" role="listbox"></ul>'
      var dropup = $(element).parent().hasClass('dropup');
      var newTop = dropup ? 'auto' : (pos.top + pos.height + scrollHeight);
      var right = $(element).hasClass('dropdown-menu-right');
      var newLeft = right ? 'auto' : pos.left;
      // it seems like setting the css is a bad idea (just let Bootstrap do it), but I'll keep the old
      // logic in place except for the dropup/right-align cases.
      element.css({ top: newTop, left: newLeft }).show();

      if (this.options.fitToElement === true) {
          element.css("width", this.$element.outerWidth() + "px");
      }

      this.shown = true;
      return this;
    },

    hide: function () {
      this.$menu.hide();
      this.shown = false;
      return this;
    },

    lookup: function (query) {
      var items;
      if (typeof(query) != 'undefined' && query !== null) {
        this.query = query;
      } else {
        this.query = this.$element.val();
      }

      if (this.query.length < this.options.minLength && !this.options.showHintOnFocus) {
        return this.shown ? this.hide() : this;
      }

      var worker = $.proxy(function () {

        // Bloodhound (since 0.11) needs three arguments.
        // Two of them are callback functions (sync and async) for local and remote data processing
        // see https://github.com/twitter/typeahead.js/blob/master/src/bloodhound/bloodhound.js#L132
        if ($.isFunction(this.source) && this.source.length === 3) {
          this.source(this.query, $.proxy(this.process, this), $.proxy(this.process, this));
        } else if ($.isFunction(this.source)) {
          this.source(this.query, $.proxy(this.process, this));
        } else if (this.source) {
          this.process(this.source);
        }
      }, this);

      clearTimeout(this.lookupWorker);
      this.lookupWorker = setTimeout(worker, this.delay);
    },

    process: function (items) {
      var that = this;

      items = $.grep(items, function (item) {
        return that.matcher(item);
      });

      items = this.sorter(items);

      if (!items.length && !this.options.addItem) {
        return this.shown ? this.hide() : this;
      }

      if (items.length > 0) {
        this.$element.data('active', items[0]);
      } else {
        this.$element.data('active', null);
      }

      if (this.options.items != 'all') {
        items = items.slice(0, this.options.items);
      }

      // Add item
      if (this.options.addItem){
        items.push(this.options.addItem);
      }

      return this.render(items).show();
    },

    matcher: function (item) {
      var it = this.displayText(item);
      return ~it.toLowerCase().indexOf(this.query.toLowerCase());
    },

    sorter: function (items) {
      var beginswith = [];
      var caseSensitive = [];
      var caseInsensitive = [];
      var item;

      while ((item = items.shift())) {
        var it = this.displayText(item);
        if (!it.toLowerCase().indexOf(this.query.toLowerCase())) beginswith.push(item);
        else if (~it.indexOf(this.query)) caseSensitive.push(item);
        else caseInsensitive.push(item);
      }

      return beginswith.concat(caseSensitive, caseInsensitive);
    },

    highlighter: function (item) {
      var text = this.query;
      if(text===""){
        return item;
      }
      var matches = item.match(/(>)([^<]*)(<)/g);
      var first = [];
      var second = [];
      var i;
      if(matches && matches.length){
        //html
        for (i = 0; i < matches.length; ++i) {
          if (matches[i].length > 2) {//escape '><'
            first.push(matches[i]);
          }
        }
      }else{
        //text
        first = [];
        first.push(item);
      }
      text = text.replace((/[\(\)\/\.\*\+\?\[\]]/g), function(mat) {
          return '\\' + mat;
      });
      var reg = new RegExp(text, "g");
      var m;
      for (i = 0; i < first.length; ++i) {
        m = first[i].match(reg);
        if(m && m.length>0){//find all text nodes matches
          second.push(first[i]);
        }
      }
      for (i = 0; i < second.length; ++i) {
        item = item.replace(second[i],second[i].replace(reg, '<strong>$&</strong>'));
      }
      return item;
    },

    render: function (items) {
      var that = this;
      var self = this;
      var activeFound = false;
      var data = [];
      var _category = that.options.separator;

      $.each(items, function (key,value) {
        // inject separator
        if (key > 0 && value[_category] !== items[key - 1][_category]){
          data.push({
            __type: 'divider'
          });
        }

        // inject category header
        if (value[_category] && (key === 0 || value[_category] !== items[key - 1][_category])){
          data.push({
            __type: 'category',
            name: value[_category]
          });
        }
        data.push(value);
      });

      items = $(data).map(function (i, item) {
        if ((item.__type || false) == 'category'){
          return $(that.options.headerHtml || that.theme.headerHtml).text(item.name)[0];
        }

        if ((item.__type || false) == 'divider'){
          return $(that.options.headerDivider || that.theme.headerDivider)[0];
        }

        var text = self.displayText(item);
        i = $(that.options.item || that.theme.item).data('value', item);
        i.find(that.options.itemContentSelector || that.theme.itemContentSelector)
         .addBack(that.options.itemContentSelector || that.theme.itemContentSelector)
         .html(that.highlighter(text, item));
        if(this.followLinkOnSelect) {
            i.find('a').attr('href', self.itemLink(item));
        }
        i.find('a').attr('title', self.itemTitle(item));
        if (text == self.$element.val()) {
          i.addClass('active');
          self.$element.data('active', item);
          activeFound = true;
        }
        return i[0];
      });

      if (this.autoSelect && !activeFound) {
        items.filter(':not(.dropdown-header)').first().addClass('active');
        this.$element.data('active', items.first().data('value'));
      }
      this.$menu.html(items);
      return this;
    },

    displayText: function (item) {
      return typeof item !== 'undefined' && typeof item.name != 'undefined' ? item.name : item;
    },

    itemLink: function (item) {
      return null;
    },

    itemTitle: function (item) {
      return null;
    },

    next: function (event) {
      var active = this.$menu.find('.active').removeClass('active');
      var next = active.next();

      if (!next.length) {
        next = $(this.$menu.find($(this.options.item || this.theme.item).prop('tagName'))[0]);
      }

      next.addClass('active');
      // added for screen reader
      var newVal = this.updater(next.data('value'));
      this.$element.val(this.displayText(newVal) || newVal);
    },

    prev: function (event) {
      var active = this.$menu.find('.active').removeClass('active');
      var prev = active.prev();

      if (!prev.length) {
        prev = this.$menu.find($(this.options.item || this.theme.item).prop('tagName')).last();
      }

      prev.addClass('active');
      // added for screen reader
      var newVal = this.updater(prev.data('value'));
      this.$element.val(this.displayText(newVal) || newVal);
    },

    listen: function () {
      this.$element
        .on('focus.bootstrap3Typeahead',    $.proxy(this.focus, this))
        .on('blur.bootstrap3Typeahead',     $.proxy(this.blur, this))
        .on('keypress.bootstrap3Typeahead', $.proxy(this.keypress, this))
        .on('propertychange.bootstrap3Typeahead input.bootstrap3Typeahead',    $.proxy(this.input, this))
        .on('keyup.bootstrap3Typeahead',    $.proxy(this.keyup, this));

      if (this.eventSupported('keydown')) {
        this.$element.on('keydown.bootstrap3Typeahead', $.proxy(this.keydown, this));
      }

      var itemTagName = $(this.options.item || this.theme.item).prop('tagName')
      if ('ontouchstart' in document.documentElement) {
        this.$menu
          .on('touchstart', itemTagName, $.proxy(this.touchstart, this))
          .on('touchend', itemTagName, $.proxy(this.click, this));
      } else {
        this.$menu
          .on('click', $.proxy(this.click, this))
          .on('mouseenter', itemTagName, $.proxy(this.mouseenter, this))
          .on('mouseleave', itemTagName, $.proxy(this.mouseleave, this))
          .on('mousedown', $.proxy(this.mousedown,this));
      }
    },

    destroy : function () {
      this.$element.data('typeahead',null);
      this.$element.data('active',null);
      this.$element
        .unbind('focus.bootstrap3Typeahead')
        .unbind('blur.bootstrap3Typeahead')
        .unbind('keypress.bootstrap3Typeahead')
        .unbind('propertychange.bootstrap3Typeahead input.bootstrap3Typeahead')
        .unbind('keyup.bootstrap3Typeahead');

      if (this.eventSupported('keydown')) {
        this.$element.unbind('keydown.bootstrap3-typeahead');
      }

      this.$menu.remove();
      this.destroyed = true;
    },

    eventSupported: function (eventName) {
      var isSupported = eventName in this.$element;
      if (!isSupported) {
        this.$element.setAttribute(eventName, 'return;');
        isSupported = typeof this.$element[eventName] === 'function';
      }
      return isSupported;
    },

    move: function (e) {
      if (!this.shown) return;

      switch (e.keyCode) {
        case 9: // tab
        case 13: // enter
        case 27: // escape
          e.preventDefault();
          break;

        case 38: // up arrow
          // with the shiftKey (this is actually the left parenthesis)
          if (e.shiftKey) return;
          e.preventDefault();
          this.prev();
          break;

        case 40: // down arrow
          // with the shiftKey (this is actually the right parenthesis)
          if (e.shiftKey) return;
          e.preventDefault();
          this.next();
          break;
      }
    },

    keydown: function (e) {
      /**
       * Prevent to make an ajax call while copying and pasting.
       *
       * @author Simone Sacchi
       * @version 2018/01/18
       */
      if (e.keyCode === 17) { // ctrl
        return;
      }
      this.keyPressed = true;
      this.suppressKeyPressRepeat = ~$.inArray(e.keyCode, [40,38,9,13,27]);
      if (!this.shown && e.keyCode == 40) {
        this.lookup();
      } else {
        this.move(e);
      }
    },

    keypress: function (e) {
      if (this.suppressKeyPressRepeat) return;
      this.move(e);
    },

    input: function (e) {
      // This is a fixed for IE10/11 that fires the input event when a placehoder is changed
      // (https://connect.microsoft.com/IE/feedback/details/810538/ie-11-fires-input-event-on-focus)
      var currentValue = this.$element.val() || this.$element.text();
      if (this.value !== currentValue) {
        this.value = currentValue;
        this.lookup();
      }
    },

    keyup: function (e) {
      if (this.destroyed) {
        return;
      }
      switch (e.keyCode) {
        case 40: // down arrow
        case 38: // up arrow
        case 16: // shift
        case 17: // ctrl
        case 18: // alt
          break;

        case 9: // tab
          if (!this.shown || (this.showHintOnFocus && !this.keyPressed)) return;
          this.select();
          break;
        case 13: // enter
          if (!this.shown) return;
          this.select();
          break;

        case 27: // escape
          if (!this.shown) return;
          this.hide();
          break;
      }

    },

    focus: function (e) {
      if (!this.focused) {
        this.focused = true;
        this.keyPressed = false;
        if (this.options.showHintOnFocus && this.skipShowHintOnFocus !== true) {
          if(this.options.showHintOnFocus === "all") {
            this.lookup("");
          } else {
            this.lookup();
          }
        }
      }
      if (this.skipShowHintOnFocus) {
        this.skipShowHintOnFocus = false;
      }
    },

    blur: function (e) {
      if (!this.mousedover && !this.mouseddown && this.shown) {

        // dimitris: fix for submit when closing via clicking anywhere outside the menu
        //this.select();

        this.hide();
        this.focused = false;
        this.keyPressed = false;
      } else if (this.mouseddown) {
        // This is for IE that blurs the input when user clicks on scroll.
        // We set the focus back on the input and prevent the lookup to occur again
        this.skipShowHintOnFocus = true;
        this.$element.focus();
        this.mouseddown = false;
      }
    },

    click: function (e) {
      e.preventDefault();
      this.skipShowHintOnFocus = true;
      this.select();
      this.$element.focus();
      this.hide();
    },

    mouseenter: function (e) {
      this.mousedover = true;
      this.$menu.find('.active').removeClass('active');
      $(e.currentTarget).addClass('active');
    },

    mouseleave: function (e) {
      this.mousedover = false;
      if (!this.focused && this.shown) this.hide();
    },

   /**
     * We track the mousedown for IE. When clicking on the menu scrollbar, IE makes the input blur thus hiding the menu.
     */
    mousedown: function (e) {
      this.mouseddown = true;
      this.$menu.one("mouseup", function(e){
        // IE won't fire this, but FF and Chrome will so we reset our flag for them here
        this.mouseddown = false;
      }.bind(this));
    },

    touchstart: function (e) {
      e.preventDefault();
      this.$menu.find('.active').removeClass('active');
      $(e.currentTarget).addClass('active');
    },

    touchend: function (e) {
      e.preventDefault();
      this.select();
      this.$element.focus();
    }

  };


  /* TYPEAHEAD PLUGIN DEFINITION
   * =========================== */

  var old = $.fn.typeahead;

  $.fn.typeahead = function (option) {
    var arg = arguments;
    if (typeof option == 'string' && option == 'getActive') {
      return this.data('active');
    }
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('typeahead');
      var options = typeof option == 'object' && option;
      if (!data) $this.data('typeahead', (data = new Typeahead(this, options)));
      if (typeof option == 'string' && data[option]) {
        if (arg.length > 1) {
          data[option].apply(data, Array.prototype.slice.call(arg, 1));
        } else {
          data[option]();
        }
      }
    });
  };

  Typeahead.defaults = {
    source: [],
    items: 8,
    minLength: 1,
    scrollHeight: 0,
    autoSelect: true,
    afterSelect: $.noop,
    afterEmptySelect: $.noop,
    addItem: false,
    followLinkOnSelect: false,
    delay: 0,
    separator: 'category',
    theme: "bootstrap3",
    themes: {
      bootstrap3: {
        menu: '<ul class="typeahead dropdown-menu" role="listbox"></ul>',
        item: '<li><a class="dropdown-item" href="#" role="option"></a></li>',
        itemContentSelector: "a",
        headerHtml: '<li class="dropdown-header"></li>',
        headerDivider: '<li class="divider" role="separator"></li>'
      },
      bootstrap4: {
        menu: '<div class="typeahead dropdown-menu" role="listbox"></div>',
        item: '<button class="dropdown-item" role="option"></button>',
        itemContentSelector: '.dropdown-item',
        headerHtml: '<h6 class="dropdown-header"></h6>',
        headerDivider: '<div class="dropdown-divider"></div>'
      }
    }
  };

  $.fn.typeahead.Constructor = Typeahead;

 /* TYPEAHEAD NO CONFLICT
  * =================== */

  $.fn.typeahead.noConflict = function () {
    $.fn.typeahead = old;
    return this;
  };


 /* TYPEAHEAD DATA-API
  * ================== */

  $(document).on('focus.typeahead.data-api', '[data-provide="typeahead"]', function (e) {
    var $this = $(this);
    if ($this.data('typeahead')) return;
    $this.typeahead($this.data());
  });

}));

/*!
 * Socket.IO v4.0.1
 * (c) 2014-2021 Guillermo Rauch
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.io=e():t.io=e()}(self,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=18)}([function(t,e,n){var r=n(24),o=n(25),i=String.fromCharCode(30);t.exports={protocol:4,encodePacket:r,encodePayload:function(t,e){var n=t.length,o=new Array(n),s=0;t.forEach((function(t,c){r(t,!1,(function(t){o[c]=t,++s===n&&e(o.join(i))}))}))},decodePacket:o,decodePayload:function(t,e){for(var n=t.split(i),r=[],s=0;s<n.length;s++){var c=o(n[s],e);if(r.push(c),"error"===c.type)break}return r}}},function(t,e,n){function r(t){if(t)return function(t){for(var e in r.prototype)t[e]=r.prototype[e];return t}(t)}t.exports=r,r.prototype.on=r.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},r.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n,r=this._callbacks["$"+t];if(!r)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var o=0;o<r.length;o++)if((n=r[o])===e||n.fn===e){r.splice(o,1);break}return 0===r.length&&delete this._callbacks["$"+t],this},r.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),n=this._callbacks["$"+t],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(n){r=0;for(var o=(n=n.slice(0)).length;r<o;++r)n[r].apply(this,e)}return this},r.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},r.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e){t.exports="undefined"!=typeof self?self:"undefined"!=typeof window?window:Function("return this")()},function(t,e,n){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=a(t);if(e){var o=a(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}function c(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var u=n(0),f=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(a,t);var e,n,r,c=s(a);function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=c.call(this)).opts=t,e.query=t.query,e.readyState="",e.socket=t.socket,e}return e=a,(n=[{key:"onError",value:function(t,e){var n=new Error(t);return n.type="TransportError",n.description=e,this.emit("error",n),this}},{key:"open",value:function(){return"closed"!==this.readyState&&""!==this.readyState||(this.readyState="opening",this.doOpen()),this}},{key:"close",value:function(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this}},{key:"send",value:function(t){"open"===this.readyState&&this.write(t)}},{key:"onOpen",value:function(){this.readyState="open",this.writable=!0,this.emit("open")}},{key:"onData",value:function(t){var e=u.decodePacket(t,this.socket.binaryType);this.onPacket(e)}},{key:"onPacket",value:function(t){this.emit("packet",t)}},{key:"onClose",value:function(){this.readyState="closed",this.emit("close")}}])&&o(e.prototype,n),r&&o(e,r),a}(n(1));t.exports=f},function(t,e){e.encode=function(t){var e="";for(var n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e},e.decode=function(t){for(var e={},n=t.split("&"),r=0,o=n.length;r<o;r++){var i=n[r].split("=");e[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return e}},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e,n){return(o="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=a(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=a(t);if(e){var o=a(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}function c(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e,n){return e&&f(t.prototype,e),n&&f(t,n),t}Object.defineProperty(e,"__esModule",{value:!0}),e.Decoder=e.Encoder=e.PacketType=e.protocol=void 0;var l,h=n(1),y=n(30),d=n(15);e.protocol=5,function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"}(l=e.PacketType||(e.PacketType={}));var v=function(){function t(){u(this,t)}return p(t,[{key:"encode",value:function(t){return t.type!==l.EVENT&&t.type!==l.ACK||!d.hasBinary(t)?[this.encodeAsString(t)]:(t.type=t.type===l.EVENT?l.BINARY_EVENT:l.BINARY_ACK,this.encodeAsBinary(t))}},{key:"encodeAsString",value:function(t){var e=""+t.type;return t.type!==l.BINARY_EVENT&&t.type!==l.BINARY_ACK||(e+=t.attachments+"-"),t.nsp&&"/"!==t.nsp&&(e+=t.nsp+","),null!=t.id&&(e+=t.id),null!=t.data&&(e+=JSON.stringify(t.data)),e}},{key:"encodeAsBinary",value:function(t){var e=y.deconstructPacket(t),n=this.encodeAsString(e.packet),r=e.buffers;return r.unshift(n),r}}]),t}();e.Encoder=v;var b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(n,t);var e=s(n);function n(){return u(this,n),e.call(this)}return p(n,[{key:"add",value:function(t){var e;if("string"==typeof t)(e=this.decodeString(t)).type===l.BINARY_EVENT||e.type===l.BINARY_ACK?(this.reconstructor=new m(e),0===e.attachments&&o(a(n.prototype),"emit",this).call(this,"decoded",e)):o(a(n.prototype),"emit",this).call(this,"decoded",e);else{if(!d.isBinary(t)&&!t.base64)throw new Error("Unknown type: "+t);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");(e=this.reconstructor.takeBinaryData(t))&&(this.reconstructor=null,o(a(n.prototype),"emit",this).call(this,"decoded",e))}}},{key:"decodeString",value:function(t){var e=0,r={type:Number(t.charAt(0))};if(void 0===l[r.type])throw new Error("unknown packet type "+r.type);if(r.type===l.BINARY_EVENT||r.type===l.BINARY_ACK){for(var o=e+1;"-"!==t.charAt(++e)&&e!=t.length;);var i=t.substring(o,e);if(i!=Number(i)||"-"!==t.charAt(e))throw new Error("Illegal attachments");r.attachments=Number(i)}if("/"===t.charAt(e+1)){for(var s=e+1;++e;){if(","===t.charAt(e))break;if(e===t.length)break}r.nsp=t.substring(s,e)}else r.nsp="/";var c=t.charAt(e+1);if(""!==c&&Number(c)==c){for(var a=e+1;++e;){var u=t.charAt(e);if(null==u||Number(u)!=u){--e;break}if(e===t.length)break}r.id=Number(t.substring(a,e+1))}if(t.charAt(++e)){var f=function(t){try{return JSON.parse(t)}catch(t){return!1}}(t.substr(e));if(!n.isPayloadValid(r.type,f))throw new Error("invalid payload");r.data=f}return r}},{key:"destroy",value:function(){this.reconstructor&&this.reconstructor.finishedReconstruction()}}],[{key:"isPayloadValid",value:function(t,e){switch(t){case l.CONNECT:return"object"===r(e);case l.DISCONNECT:return void 0===e;case l.CONNECT_ERROR:return"string"==typeof e||"object"===r(e);case l.EVENT:case l.BINARY_EVENT:return Array.isArray(e)&&e.length>0;case l.ACK:case l.BINARY_ACK:return Array.isArray(e)}}}]),n}(h);e.Decoder=b;var m=function(){function t(e){u(this,t),this.packet=e,this.buffers=[],this.reconPack=e}return p(t,[{key:"takeBinaryData",value:function(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){var e=y.reconstructPacket(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null}},{key:"finishedReconstruction",value:function(){this.reconPack=null,this.buffers=[]}}]),t}()},function(t,e){var n=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,r=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];t.exports=function(t){var e=t,o=t.indexOf("["),i=t.indexOf("]");-1!=o&&-1!=i&&(t=t.substring(0,o)+t.substring(o,i).replace(/:/g,";")+t.substring(i,t.length));for(var s,c,a=n.exec(t||""),u={},f=14;f--;)u[r[f]]=a[f]||"";return-1!=o&&-1!=i&&(u.source=e,u.host=u.host.substring(1,u.host.length-1).replace(/;/g,":"),u.authority=u.authority.replace("[","").replace("]","").replace(/;/g,":"),u.ipv6uri=!0),u.pathNames=function(t,e){var n=e.replace(/\/{2,9}/g,"/").split("/");"/"!=e.substr(0,1)&&0!==e.length||n.splice(0,1);"/"==e.substr(e.length-1,1)&&n.splice(n.length-1,1);return n}(0,u.path),u.queryKey=(s=u.query,c={},s.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,(function(t,e,n){e&&(c[e]=n)})),c),u}},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=a(t);if(e){var o=a(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}function c(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.Manager=void 0;var u=n(20),f=n(14),p=n(5),l=n(16),h=n(31),y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(y,t);var e,n,c,a=s(y);function y(t,e){var n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,y),(n=a.call(this)).nsps={},n.subs=[],t&&"object"===r(t)&&(e=t,t=void 0),(e=e||{}).path=e.path||"/socket.io",n.opts=e,n.reconnection(!1!==e.reconnection),n.reconnectionAttempts(e.reconnectionAttempts||1/0),n.reconnectionDelay(e.reconnectionDelay||1e3),n.reconnectionDelayMax(e.reconnectionDelayMax||5e3),n.randomizationFactor(e.randomizationFactor||.5),n.backoff=new h({min:n.reconnectionDelay(),max:n.reconnectionDelayMax(),jitter:n.randomizationFactor()}),n.timeout(null==e.timeout?2e4:e.timeout),n._readyState="closed",n.uri=t;var o=e.parser||p;return n.encoder=new o.Encoder,n.decoder=new o.Decoder,n._autoConnect=!1!==e.autoConnect,n._autoConnect&&n.open(),n}return e=y,(n=[{key:"reconnection",value:function(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection}},{key:"reconnectionAttempts",value:function(t){return void 0===t?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}},{key:"reconnectionDelay",value:function(t){var e;return void 0===t?this._reconnectionDelay:(this._reconnectionDelay=t,null===(e=this.backoff)||void 0===e||e.setMin(t),this)}},{key:"randomizationFactor",value:function(t){var e;return void 0===t?this._randomizationFactor:(this._randomizationFactor=t,null===(e=this.backoff)||void 0===e||e.setJitter(t),this)}},{key:"reconnectionDelayMax",value:function(t){var e;return void 0===t?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,null===(e=this.backoff)||void 0===e||e.setMax(t),this)}},{key:"timeout",value:function(t){return arguments.length?(this._timeout=t,this):this._timeout}},{key:"maybeReconnectOnOpen",value:function(){!this._reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()}},{key:"open",value:function(t){var e=this;if(~this._readyState.indexOf("open"))return this;this.engine=u(this.uri,this.opts);var n=this.engine,r=this;this._readyState="opening",this.skipReconnect=!1;var o=l.on(n,"open",(function(){r.onopen(),t&&t()})),i=l.on(n,"error",(function(n){r.cleanup(),r._readyState="closed",e.emitReserved("error",n),t?t(n):r.maybeReconnectOnOpen()}));if(!1!==this._timeout){var s=this._timeout;0===s&&o();var c=setTimeout((function(){o(),n.close(),n.emit("error",new Error("timeout"))}),s);this.opts.autoUnref&&c.unref(),this.subs.push((function(){clearTimeout(c)}))}return this.subs.push(o),this.subs.push(i),this}},{key:"connect",value:function(t){return this.open(t)}},{key:"onopen",value:function(){this.cleanup(),this._readyState="open",this.emitReserved("open");var t=this.engine;this.subs.push(l.on(t,"ping",this.onping.bind(this)),l.on(t,"data",this.ondata.bind(this)),l.on(t,"error",this.onerror.bind(this)),l.on(t,"close",this.onclose.bind(this)),l.on(this.decoder,"decoded",this.ondecoded.bind(this)))}},{key:"onping",value:function(){this.emitReserved("ping")}},{key:"ondata",value:function(t){this.decoder.add(t)}},{key:"ondecoded",value:function(t){this.emitReserved("packet",t)}},{key:"onerror",value:function(t){this.emitReserved("error",t)}},{key:"socket",value:function(t,e){var n=this.nsps[t];return n||(n=new f.Socket(this,t,e),this.nsps[t]=n),n}},{key:"_destroy",value:function(t){for(var e=0,n=Object.keys(this.nsps);e<n.length;e++){var r=n[e];if(this.nsps[r].active)return}this._close()}},{key:"_packet",value:function(t){for(var e=this.encoder.encode(t),n=0;n<e.length;n++)this.engine.write(e[n],t.options)}},{key:"cleanup",value:function(){this.subs.forEach((function(t){return t()})),this.subs.length=0,this.decoder.destroy()}},{key:"_close",value:function(){this.skipReconnect=!0,this._reconnecting=!1,"opening"===this._readyState&&this.cleanup(),this.backoff.reset(),this._readyState="closed",this.engine&&this.engine.close()}},{key:"disconnect",value:function(){return this._close()}},{key:"onclose",value:function(t){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t),this._reconnection&&!this.skipReconnect&&this.reconnect()}},{key:"reconnect",value:function(){var t=this;if(this._reconnecting||this.skipReconnect)return this;var e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{var n=this.backoff.duration();this._reconnecting=!0;var r=setTimeout((function(){e.skipReconnect||(t.emitReserved("reconnect_attempt",e.backoff.attempts),e.skipReconnect||e.open((function(n){n?(e._reconnecting=!1,e.reconnect(),t.emitReserved("reconnect_error",n)):e.onreconnect()})))}),n);this.opts.autoUnref&&r.unref(),this.subs.push((function(){clearTimeout(r)}))}}},{key:"onreconnect",value:function(){var t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}])&&o(e.prototype,n),c&&o(e,c),y}(n(17).StrictEventEmitter);e.Manager=y},function(t,e,n){var r=n(9),o=n(23),i=n(27),s=n(28);e.polling=function(t){var e=!1,n=!1,s=!1!==t.jsonp;if("undefined"!=typeof location){var c="https:"===location.protocol,a=location.port;a||(a=c?443:80),e=t.hostname!==location.hostname||a!==t.port,n=t.secure!==c}if(t.xdomain=e,t.xscheme=n,"open"in new r(t)&&!t.forceJSONP)return new o(t);if(!s)throw new Error("JSONP disabled");return new i(t)},e.websocket=s},function(t,e,n){var r=n(22),o=n(2);t.exports=function(t){var e=t.xdomain,n=t.xscheme,i=t.enablesXDR;try{if("undefined"!=typeof XMLHttpRequest&&(!e||r))return new XMLHttpRequest}catch(t){}try{if("undefined"!=typeof XDomainRequest&&!n&&i)return new XDomainRequest}catch(t){}if(!e)try{return new(o[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(t){}}},function(t,e,n){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}function a(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var f=n(3),p=n(4),l=n(0),h=n(12),y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(u,t);var e,n,r,a=c(u);function u(){return o(this,u),a.apply(this,arguments)}return e=u,(n=[{key:"doOpen",value:function(){this.poll()}},{key:"pause",value:function(t){var e=this;function n(){e.readyState="paused",t()}if(this.readyState="pausing",this.polling||!this.writable){var r=0;this.polling&&(r++,this.once("pollComplete",(function(){--r||n()}))),this.writable||(r++,this.once("drain",(function(){--r||n()})))}else n()}},{key:"poll",value:function(){this.polling=!0,this.doPoll(),this.emit("poll")}},{key:"onData",value:function(t){var e=this;l.decodePayload(t,this.socket.binaryType).forEach((function(t,n,r){if("opening"===e.readyState&&"open"===t.type&&e.onOpen(),"close"===t.type)return e.onClose(),!1;e.onPacket(t)})),"closed"!==this.readyState&&(this.polling=!1,this.emit("pollComplete"),"open"===this.readyState&&this.poll())}},{key:"doClose",value:function(){var t=this;function e(){t.write([{type:"close"}])}"open"===this.readyState?e():this.once("open",e)}},{key:"write",value:function(t){var e=this;this.writable=!1,l.encodePayload(t,(function(t){e.doWrite(t,(function(){e.writable=!0,e.emit("drain")}))}))}},{key:"uri",value:function(){var t=this.query||{},e=this.opts.secure?"https":"http",n="";return!1!==this.opts.timestampRequests&&(t[this.opts.timestampParam]=h()),this.supportsBinary||t.sid||(t.b64=1),t=p.encode(t),this.opts.port&&("https"===e&&443!==Number(this.opts.port)||"http"===e&&80!==Number(this.opts.port))&&(n=":"+this.opts.port),t.length&&(t="?"+t),e+"://"+(-1!==this.opts.hostname.indexOf(":")?"["+this.opts.hostname+"]":this.opts.hostname)+n+this.opts.path+t}},{key:"name",get:function(){return"polling"}}])&&i(e.prototype,n),r&&i(e,r),u}(f);t.exports=y},function(t,e){var n=Object.create(null);n.open="0",n.close="1",n.ping="2",n.pong="3",n.message="4",n.upgrade="5",n.noop="6";var r=Object.create(null);Object.keys(n).forEach((function(t){r[n[t]]=t}));t.exports={PACKET_TYPES:n,PACKET_TYPES_REVERSE:r,ERROR_PACKET:{type:"error",data:"parser error"}}},function(t,e,n){"use strict";var r,o="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),i={},s=0,c=0;function a(t){var e="";do{e=o[t%64]+e,t=Math.floor(t/64)}while(t>0);return e}function u(){var t=a(+new Date);return t!==r?(s=0,r=t):t+"."+a(s++)}for(;c<64;c++)i[o[c]]=c;u.encode=a,u.decode=function(t){var e=0;for(c=0;c<t.length;c++)e=64*e+i[t.charAt(c)];return e},t.exports=u},function(t,e){t.exports.pick=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return n.reduce((function(e,n){return t.hasOwnProperty(n)&&(e[n]=t[n]),e}),{})}},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,c=!0,a=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){a=!0,s=t},f:function(){try{c||null==n.return||n.return()}finally{if(a)throw s}}}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e,n){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=p(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=p(t);if(e){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.Socket=void 0;var l=n(5),h=n(16),y=n(17),d=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1}),v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(f,t);var e,n,r,i=u(f);function f(t,e,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,f),(r=i.call(this)).receiveBuffer=[],r.sendBuffer=[],r.ids=0,r.acks={},r.flags={},r.io=t,r.nsp=e,r.ids=0,r.acks={},r.receiveBuffer=[],r.sendBuffer=[],r.connected=!1,r.disconnected=!0,r.flags={},n&&n.auth&&(r.auth=n.auth),r.io._autoConnect&&r.open(),r}return e=f,(n=[{key:"subEvents",value:function(){if(!this.subs){var t=this.io;this.subs=[h.on(t,"open",this.onopen.bind(this)),h.on(t,"packet",this.onpacket.bind(this)),h.on(t,"error",this.onerror.bind(this)),h.on(t,"close",this.onclose.bind(this))]}}},{key:"connect",value:function(){return this.connected||(this.subEvents(),this.io._reconnecting||this.io.open(),"open"===this.io._readyState&&this.onopen()),this}},{key:"open",value:function(){return this.connect()}},{key:"send",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.unshift("message"),this.emit.apply(this,e),this}},{key:"emit",value:function(t){if(d.hasOwnProperty(t))throw new Error('"'+t+'" is a reserved event name');for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];n.unshift(t);var o={type:l.PacketType.EVENT,data:n,options:{}};o.options.compress=!1!==this.flags.compress,"function"==typeof n[n.length-1]&&(this.acks[this.ids]=n.pop(),o.id=this.ids++);var i=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable,s=this.flags.volatile&&(!i||!this.connected);return s||(this.connected?this.packet(o):this.sendBuffer.push(o)),this.flags={},this}},{key:"packet",value:function(t){t.nsp=this.nsp,this.io._packet(t)}},{key:"onopen",value:function(){var t=this;"function"==typeof this.auth?this.auth((function(e){t.packet({type:l.PacketType.CONNECT,data:e})})):this.packet({type:l.PacketType.CONNECT,data:this.auth})}},{key:"onerror",value:function(t){this.connected||this.emitReserved("connect_error",t)}},{key:"onclose",value:function(t){this.connected=!1,this.disconnected=!0,delete this.id,this.emitReserved("disconnect",t)}},{key:"onpacket",value:function(t){if(t.nsp===this.nsp)switch(t.type){case l.PacketType.CONNECT:if(t.data&&t.data.sid){var e=t.data.sid;this.onconnect(e)}else this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case l.PacketType.EVENT:case l.PacketType.BINARY_EVENT:this.onevent(t);break;case l.PacketType.ACK:case l.PacketType.BINARY_ACK:this.onack(t);break;case l.PacketType.DISCONNECT:this.ondisconnect();break;case l.PacketType.CONNECT_ERROR:var n=new Error(t.data.message);n.data=t.data.data,this.emitReserved("connect_error",n)}}},{key:"onevent",value:function(t){var e=t.data||[];null!=t.id&&e.push(this.ack(t.id)),this.connected?this.emitEvent(e):this.receiveBuffer.push(Object.freeze(e))}},{key:"emitEvent",value:function(t){if(this._anyListeners&&this._anyListeners.length){var e,n=o(this._anyListeners.slice());try{for(n.s();!(e=n.n()).done;)e.value.apply(this,t)}catch(t){n.e(t)}finally{n.f()}}c(p(f.prototype),"emit",this).apply(this,t)}},{key:"ack",value:function(t){var e=this,n=!1;return function(){if(!n){n=!0;for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];e.packet({type:l.PacketType.ACK,id:t,data:o})}}}},{key:"onack",value:function(t){var e=this.acks[t.id];"function"==typeof e&&(e.apply(this,t.data),delete this.acks[t.id])}},{key:"onconnect",value:function(t){this.id=t,this.connected=!0,this.disconnected=!1,this.emitReserved("connect"),this.emitBuffered()}},{key:"emitBuffered",value:function(){var t=this;this.receiveBuffer.forEach((function(e){return t.emitEvent(e)})),this.receiveBuffer=[],this.sendBuffer.forEach((function(e){return t.packet(e)})),this.sendBuffer=[]}},{key:"ondisconnect",value:function(){this.destroy(),this.onclose("io server disconnect")}},{key:"destroy",value:function(){this.subs&&(this.subs.forEach((function(t){return t()})),this.subs=void 0),this.io._destroy(this)}},{key:"disconnect",value:function(){return this.connected&&this.packet({type:l.PacketType.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}},{key:"close",value:function(){return this.disconnect()}},{key:"compress",value:function(t){return this.flags.compress=t,this}},{key:"onAny",value:function(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}},{key:"prependAny",value:function(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}},{key:"offAny",value:function(t){if(!this._anyListeners)return this;if(t){for(var e=this._anyListeners,n=0;n<e.length;n++)if(t===e[n])return e.splice(n,1),this}else this._anyListeners=[];return this}},{key:"listenersAny",value:function(){return this._anyListeners||[]}},{key:"active",get:function(){return!!this.subs}},{key:"volatile",get:function(){return this.flags.volatile=!0,this}}])&&s(e.prototype,n),r&&s(e,r),f}(y.StrictEventEmitter);e.Socket=v},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.hasBinary=e.isBinary=void 0;var o="function"==typeof ArrayBuffer,i=Object.prototype.toString,s="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===i.call(Blob),c="function"==typeof File||"undefined"!=typeof File&&"[object FileConstructor]"===i.call(File);function a(t){return o&&(t instanceof ArrayBuffer||function(t){return"function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer}(t))||s&&t instanceof Blob||c&&t instanceof File}e.isBinary=a,e.hasBinary=function t(e,n){if(!e||"object"!==r(e))return!1;if(Array.isArray(e)){for(var o=0,i=e.length;o<i;o++)if(t(e[o]))return!0;return!1}if(a(e))return!0;if(e.toJSON&&"function"==typeof e.toJSON&&1===arguments.length)return t(e.toJSON(),!0);for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)&&t(e[s]))return!0;return!1}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.on=void 0,e.on=function(t,e,n){return t.on(e,n),function(){t.off(e,n)}}},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e,n){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=f(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=f(t);if(e){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}function u(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.StrictEventEmitter=void 0;var p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(p,t);var e,n,r,u=a(p);function p(){return o(this,p),u.apply(this,arguments)}return e=p,(n=[{key:"on",value:function(t,e){return s(f(p.prototype),"on",this).call(this,t,e),this}},{key:"once",value:function(t,e){return s(f(p.prototype),"once",this).call(this,t,e),this}},{key:"emit",value:function(t){for(var e,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return(e=s(f(p.prototype),"emit",this)).call.apply(e,[this,t].concat(r)),this}},{key:"emitReserved",value:function(t){for(var e,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return(e=s(f(p.prototype),"emit",this)).call.apply(e,[this,t].concat(r)),this}},{key:"listeners",value:function(t){return s(f(p.prototype),"listeners",this).call(this,t)}}])&&i(e.prototype,n),r&&i(e,r),p}(n(1));e.StrictEventEmitter=p},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.Socket=e.io=e.Manager=e.protocol=void 0;var o=n(19),i=n(7),s=n(14);Object.defineProperty(e,"Socket",{enumerable:!0,get:function(){return s.Socket}}),t.exports=e=a;var c=e.managers={};function a(t,e){"object"===r(t)&&(e=t,t=void 0),e=e||{};var n,s=o.url(t,e.path),a=s.source,u=s.id,f=s.path,p=c[u]&&f in c[u].nsps;return e.forceNew||e["force new connection"]||!1===e.multiplex||p?n=new i.Manager(a,e):(c[u]||(c[u]=new i.Manager(a,e)),n=c[u]),s.query&&!e.query&&(e.query=s.queryKey),n.socket(s.path,e)}e.io=a;var u=n(5);Object.defineProperty(e,"protocol",{enumerable:!0,get:function(){return u.protocol}}),e.connect=a;var f=n(7);Object.defineProperty(e,"Manager",{enumerable:!0,get:function(){return f.Manager}}),e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.url=void 0;var r=n(6);e.url=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,o=t;n=n||"undefined"!=typeof location&&location,null==t&&(t=n.protocol+"//"+n.host),"string"==typeof t&&("/"===t.charAt(0)&&(t="/"===t.charAt(1)?n.protocol+t:n.host+t),/^(https?|wss?):\/\//.test(t)||(t=void 0!==n?n.protocol+"//"+t:"https://"+t),o=r(t)),o.port||(/^(http|ws)$/.test(o.protocol)?o.port="80":/^(http|ws)s$/.test(o.protocol)&&(o.port="443")),o.path=o.path||"/";var i=-1!==o.host.indexOf(":"),s=i?"["+o.host+"]":o.host;return o.id=o.protocol+"://"+s+":"+o.port+e,o.href=o.protocol+"://"+s+(n&&n.port===o.port?"":":"+o.port),o}},function(t,e,n){var r=n(21);t.exports=function(t,e){return new r(t,e)},t.exports.Socket=r,t.exports.protocol=r.protocol,t.exports.Transport=n(3),t.exports.transports=n(8),t.exports.parser=n(0)},function(t,e,n){function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=f(t);if(e){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}function u(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=n(8),l=n(1),h=n(0),y=n(6),d=n(4),v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(l,t);var e,n,u,f=a(l);function l(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i(this,l),e=f.call(this),t&&"object"===o(t)&&(n=t,t=null),t?(t=y(t),n.hostname=t.host,n.secure="https"===t.protocol||"wss"===t.protocol,n.port=t.port,t.query&&(n.query=t.query)):n.host&&(n.hostname=y(n.host).host),e.secure=null!=n.secure?n.secure:"undefined"!=typeof location&&"https:"===location.protocol,n.hostname&&!n.port&&(n.port=e.secure?"443":"80"),e.hostname=n.hostname||("undefined"!=typeof location?location.hostname:"localhost"),e.port=n.port||("undefined"!=typeof location&&location.port?location.port:e.secure?443:80),e.transports=n.transports||["polling","websocket"],e.readyState="",e.writeBuffer=[],e.prevBufferLen=0,e.opts=r({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,jsonp:!0,timestampParam:"t",rememberUpgrade:!1,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{}},n),e.opts.path=e.opts.path.replace(/\/$/,"")+"/","string"==typeof e.opts.query&&(e.opts.query=d.decode(e.opts.query)),e.id=null,e.upgrades=null,e.pingInterval=null,e.pingTimeout=null,e.pingTimeoutTimer=null,"function"==typeof addEventListener&&(addEventListener("beforeunload",(function(){e.transport&&(e.transport.removeAllListeners(),e.transport.close())}),!1),"localhost"!==e.hostname&&(e.offlineEventListener=function(){e.onClose("transport close")},addEventListener("offline",e.offlineEventListener,!1))),e.open(),e}return e=l,(n=[{key:"createTransport",value:function(t){var e=function(t){var e={};for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}(this.opts.query);e.EIO=h.protocol,e.transport=t,this.id&&(e.sid=this.id);var n=r({},this.opts.transportOptions[t],this.opts,{query:e,socket:this,hostname:this.hostname,secure:this.secure,port:this.port});return new p[t](n)}},{key:"open",value:function(){var t;if(this.opts.rememberUpgrade&&l.priorWebsocketSuccess&&-1!==this.transports.indexOf("websocket"))t="websocket";else{if(0===this.transports.length){var e=this;return void setTimeout((function(){e.emit("error","No transports available")}),0)}t=this.transports[0]}this.readyState="opening";try{t=this.createTransport(t)}catch(t){return this.transports.shift(),void this.open()}t.open(),this.setTransport(t)}},{key:"setTransport",value:function(t){var e=this;this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",(function(){e.onDrain()})).on("packet",(function(t){e.onPacket(t)})).on("error",(function(t){e.onError(t)})).on("close",(function(){e.onClose("transport close")}))}},{key:"probe",value:function(t){var e=this.createTransport(t,{probe:1}),n=!1,r=this;function o(){if(r.onlyBinaryUpgrades){var t=!this.supportsBinary&&r.transport.supportsBinary;n=n||t}n||(e.send([{type:"ping",data:"probe"}]),e.once("packet",(function(t){if(!n)if("pong"===t.type&&"probe"===t.data){if(r.upgrading=!0,r.emit("upgrading",e),!e)return;l.priorWebsocketSuccess="websocket"===e.name,r.transport.pause((function(){n||"closed"!==r.readyState&&(f(),r.setTransport(e),e.send([{type:"upgrade"}]),r.emit("upgrade",e),e=null,r.upgrading=!1,r.flush())}))}else{var o=new Error("probe error");o.transport=e.name,r.emit("upgradeError",o)}})))}function i(){n||(n=!0,f(),e.close(),e=null)}function s(t){var n=new Error("probe error: "+t);n.transport=e.name,i(),r.emit("upgradeError",n)}function c(){s("transport closed")}function a(){s("socket closed")}function u(t){e&&t.name!==e.name&&i()}function f(){e.removeListener("open",o),e.removeListener("error",s),e.removeListener("close",c),r.removeListener("close",a),r.removeListener("upgrading",u)}l.priorWebsocketSuccess=!1,e.once("open",o),e.once("error",s),e.once("close",c),this.once("close",a),this.once("upgrading",u),e.open()}},{key:"onOpen",value:function(){if(this.readyState="open",l.priorWebsocketSuccess="websocket"===this.transport.name,this.emit("open"),this.flush(),"open"===this.readyState&&this.opts.upgrade&&this.transport.pause)for(var t=0,e=this.upgrades.length;t<e;t++)this.probe(this.upgrades[t])}},{key:"onPacket",value:function(t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(this.emit("packet",t),this.emit("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this.resetPingTimeout(),this.sendPacket("pong"),this.emit("pong");break;case"error":var e=new Error("server error");e.code=t.data,this.onError(e);break;case"message":this.emit("data",t.data),this.emit("message",t.data)}}},{key:"onHandshake",value:function(t){this.emit("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.onOpen(),"closed"!==this.readyState&&this.resetPingTimeout()}},{key:"resetPingTimeout",value:function(){var t=this;clearTimeout(this.pingTimeoutTimer),this.pingTimeoutTimer=setTimeout((function(){t.onClose("ping timeout")}),this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}},{key:"onDrain",value:function(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emit("drain"):this.flush()}},{key:"flush",value:function(){"closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emit("flush"))}},{key:"write",value:function(t,e,n){return this.sendPacket("message",t,e,n),this}},{key:"send",value:function(t,e,n){return this.sendPacket("message",t,e,n),this}},{key:"sendPacket",value:function(t,e,n,r){if("function"==typeof e&&(r=e,e=void 0),"function"==typeof n&&(r=n,n=null),"closing"!==this.readyState&&"closed"!==this.readyState){(n=n||{}).compress=!1!==n.compress;var o={type:t,data:e,options:n};this.emit("packetCreate",o),this.writeBuffer.push(o),r&&this.once("flush",r),this.flush()}}},{key:"close",value:function(){var t=this;function e(){t.onClose("forced close"),t.transport.close()}function n(){t.removeListener("upgrade",n),t.removeListener("upgradeError",n),e()}function r(){t.once("upgrade",n),t.once("upgradeError",n)}return"opening"!==this.readyState&&"open"!==this.readyState||(this.readyState="closing",this.writeBuffer.length?this.once("drain",(function(){this.upgrading?r():e()})):this.upgrading?r():e()),this}},{key:"onError",value:function(t){l.priorWebsocketSuccess=!1,this.emit("error",t),this.onClose("transport error",t)}},{key:"onClose",value:function(t,e){"opening"!==this.readyState&&"open"!==this.readyState&&"closing"!==this.readyState||(clearTimeout(this.pingIntervalTimer),clearTimeout(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),"function"==typeof removeEventListener&&removeEventListener("offline",this.offlineEventListener,!1),this.readyState="closed",this.id=null,this.emit("close",t,e),this.writeBuffer=[],this.prevBufferLen=0)}},{key:"filterUpgrades",value:function(t){for(var e=[],n=0,r=t.length;n<r;n++)~this.transports.indexOf(t[n])&&e.push(t[n]);return e}}])&&s(e.prototype,n),u&&s(e,u),l}(l);v.priorWebsocketSuccess=!1,v.protocol=h.protocol,t.exports=v},function(t,e){try{t.exports="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(e){t.exports=!1}},function(t,e,n){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=l(t);if(e){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var h=n(9),y=n(10),d=n(1),v=n(13).pick,b=n(2);function m(){}var g=null!=new h({xdomain:!1}).responseType,k=function(t){a(n,t);var e=f(n);function n(t){var r;if(i(this,n),r=e.call(this,t),"undefined"!=typeof location){var o="https:"===location.protocol,s=location.port;s||(s=o?443:80),r.xd="undefined"!=typeof location&&t.hostname!==location.hostname||s!==t.port,r.xs=t.secure!==o}var c=t&&t.forceBase64;return r.supportsBinary=g&&!c,r}return c(n,[{key:"request",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o(t,{xd:this.xd,xs:this.xs},this.opts),new w(this.uri(),t)}},{key:"doWrite",value:function(t,e){var n=this.request({method:"POST",data:t}),r=this;n.on("success",e),n.on("error",(function(t){r.onError("xhr post error",t)}))}},{key:"doPoll",value:function(){var t=this.request(),e=this;t.on("data",(function(t){e.onData(t)})),t.on("error",(function(t){e.onError("xhr poll error",t)})),this.pollXhr=t}}]),n}(y),w=function(t){a(n,t);var e=f(n);function n(t,r){var o;return i(this,n),(o=e.call(this)).opts=r,o.method=r.method||"GET",o.uri=t,o.async=!1!==r.async,o.data=void 0!==r.data?r.data:null,o.create(),o}return c(n,[{key:"create",value:function(){var t=v(this.opts,"agent","enablesXDR","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this.opts.xd,t.xscheme=!!this.opts.xs;var e=this.xhr=new h(t),r=this;try{e.open(this.method,this.uri,this.async);try{if(this.opts.extraHeaders)for(var o in e.setDisableHeaderCheck&&e.setDisableHeaderCheck(!0),this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(o)&&e.setRequestHeader(o,this.opts.extraHeaders[o])}catch(t){}if("POST"===this.method)try{e.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(t){}try{e.setRequestHeader("Accept","*/*")}catch(t){}"withCredentials"in e&&(e.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(e.timeout=this.opts.requestTimeout),this.hasXDR()?(e.onload=function(){r.onLoad()},e.onerror=function(){r.onError(e.responseText)}):e.onreadystatechange=function(){4===e.readyState&&(200===e.status||1223===e.status?r.onLoad():setTimeout((function(){r.onError("number"==typeof e.status?e.status:0)}),0))},e.send(this.data)}catch(t){return void setTimeout((function(){r.onError(t)}),0)}"undefined"!=typeof document&&(this.index=n.requestsCount++,n.requests[this.index]=this)}},{key:"onSuccess",value:function(){this.emit("success"),this.cleanup()}},{key:"onData",value:function(t){this.emit("data",t),this.onSuccess()}},{key:"onError",value:function(t){this.emit("error",t),this.cleanup(!0)}},{key:"cleanup",value:function(t){if(void 0!==this.xhr&&null!==this.xhr){if(this.hasXDR()?this.xhr.onload=this.xhr.onerror=m:this.xhr.onreadystatechange=m,t)try{this.xhr.abort()}catch(t){}"undefined"!=typeof document&&delete n.requests[this.index],this.xhr=null}}},{key:"onLoad",value:function(){var t=this.xhr.responseText;null!==t&&this.onData(t)}},{key:"hasXDR",value:function(){return"undefined"!=typeof XDomainRequest&&!this.xs&&this.enablesXDR}},{key:"abort",value:function(){this.cleanup()}}]),n}(d);if(w.requestsCount=0,w.requests={},"undefined"!=typeof document)if("function"==typeof attachEvent)attachEvent("onunload",_);else if("function"==typeof addEventListener){addEventListener("onpagehide"in b?"pagehide":"unload",_,!1)}function _(){for(var t in w.requests)w.requests.hasOwnProperty(t)&&w.requests[t].abort()}t.exports=k,t.exports.Request=w},function(t,e,n){var r=n(11).PACKET_TYPES,o="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===Object.prototype.toString.call(Blob),i="function"==typeof ArrayBuffer,s=function(t,e){var n=new FileReader;return n.onload=function(){var t=n.result.split(",")[1];e("b"+t)},n.readAsDataURL(t)};t.exports=function(t,e,n){var c,a=t.type,u=t.data;return o&&u instanceof Blob?e?n(u):s(u,n):i&&(u instanceof ArrayBuffer||(c=u,"function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(c):c&&c.buffer instanceof ArrayBuffer))?e?n(u instanceof ArrayBuffer?u:u.buffer):s(new Blob([u]),n):n(r[a]+(u||""))}},function(t,e,n){var r,o=n(11),i=o.PACKET_TYPES_REVERSE,s=o.ERROR_PACKET;"function"==typeof ArrayBuffer&&(r=n(26));var c=function(t,e){if(r){var n=r.decode(t);return a(n,e)}return{base64:!0,data:t}},a=function(t,e){switch(e){case"blob":return t instanceof ArrayBuffer?new Blob([t]):t;case"arraybuffer":default:return t}};t.exports=function(t,e){if("string"!=typeof t)return{type:"message",data:a(t,e)};var n=t.charAt(0);return"b"===n?{type:"message",data:c(t.substring(1),e)}:i[n]?t.length>1?{type:i[n],data:t.substring(1)}:{type:i[n]}:s}},function(t,e){!function(t){"use strict";e.encode=function(e){var n,r=new Uint8Array(e),o=r.length,i="";for(n=0;n<o;n+=3)i+=t[r[n]>>2],i+=t[(3&r[n])<<4|r[n+1]>>4],i+=t[(15&r[n+1])<<2|r[n+2]>>6],i+=t[63&r[n+2]];return o%3==2?i=i.substring(0,i.length-1)+"=":o%3==1&&(i=i.substring(0,i.length-2)+"=="),i},e.decode=function(e){var n,r,o,i,s,c=.75*e.length,a=e.length,u=0;"="===e[e.length-1]&&(c--,"="===e[e.length-2]&&c--);var f=new ArrayBuffer(c),p=new Uint8Array(f);for(n=0;n<a;n+=4)r=t.indexOf(e[n]),o=t.indexOf(e[n+1]),i=t.indexOf(e[n+2]),s=t.indexOf(e[n+3]),p[u++]=r<<2|o>>4,p[u++]=(15&o)<<4|i>>2,p[u++]=(3&i)<<6|63&s;return f}}("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")},function(t,e,n){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return(i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=f(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=f(t);if(e){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}function a(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?u(t):e}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p,l=n(10),h=n(2),y=/\n/g,d=/\\n/g,v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(l,t);var e,n,r,a=c(l);function l(t){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l),(e=a.call(this,t)).query=e.query||{},p||(p=h.___eio=h.___eio||[]),e.index=p.length;var n=u(e);return p.push((function(t){n.onData(t)})),e.query.j=e.index,e}return e=l,(n=[{key:"doClose",value:function(){this.script&&(this.script.onerror=function(){},this.script.parentNode.removeChild(this.script),this.script=null),this.form&&(this.form.parentNode.removeChild(this.form),this.form=null,this.iframe=null),i(f(l.prototype),"doClose",this).call(this)}},{key:"doPoll",value:function(){var t=this,e=document.createElement("script");this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),e.async=!0,e.src=this.uri(),e.onerror=function(e){t.onError("jsonp poll error",e)};var n=document.getElementsByTagName("script")[0];n?n.parentNode.insertBefore(e,n):(document.head||document.body).appendChild(e),this.script=e,"undefined"!=typeof navigator&&/gecko/i.test(navigator.userAgent)&&setTimeout((function(){var t=document.createElement("iframe");document.body.appendChild(t),document.body.removeChild(t)}),100)}},{key:"doWrite",value:function(t,e){var n,r=this;if(!this.form){var o=document.createElement("form"),i=document.createElement("textarea"),s=this.iframeId="eio_iframe_"+this.index;o.className="socketio",o.style.position="absolute",o.style.top="-1000px",o.style.left="-1000px",o.target=s,o.method="POST",o.setAttribute("accept-charset","utf-8"),i.name="d",o.appendChild(i),document.body.appendChild(o),this.form=o,this.area=i}function c(){a(),e()}function a(){if(r.iframe)try{r.form.removeChild(r.iframe)}catch(t){r.onError("jsonp polling iframe removal error",t)}try{var t='<iframe src="javascript:0" name="'+r.iframeId+'">';n=document.createElement(t)}catch(t){(n=document.createElement("iframe")).name=r.iframeId,n.src="javascript:0"}n.id=r.iframeId,r.form.appendChild(n),r.iframe=n}this.form.action=this.uri(),a(),t=t.replace(d,"\\\n"),this.area.value=t.replace(y,"\\n");try{this.form.submit()}catch(t){}this.iframe.attachEvent?this.iframe.onreadystatechange=function(){"complete"===r.iframe.readyState&&c()}:this.iframe.onload=c}},{key:"supportsBinary",get:function(){return!1}}])&&o(e.prototype,n),r&&o(e,r),l}(l);t.exports=v},function(t,e,n){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=a(t);if(e){var o=a(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}function c(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var u=n(3),f=n(0),p=n(4),l=n(12),h=n(13).pick,y=n(29),d=y.WebSocket,v=y.usingBrowserWebSocket,b=y.defaultBinaryType,m="undefined"!=typeof navigator&&"string"==typeof navigator.product&&"reactnative"===navigator.product.toLowerCase(),g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(a,t);var e,n,r,c=s(a);function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=c.call(this,t)).supportsBinary=!t.forceBase64,e}return e=a,(n=[{key:"doOpen",value:function(){if(this.check()){var t=this.uri(),e=this.opts.protocols,n=m?{}:h(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=v&&!m?e?new d(t,e):new d(t):new d(t,e,n)}catch(t){return this.emit("error",t)}this.ws.binaryType=this.socket.binaryType||b,this.addEventListeners()}}},{key:"addEventListeners",value:function(){var t=this;this.ws.onopen=function(){t.opts.autoUnref&&t.ws._socket.unref(),t.onOpen()},this.ws.onclose=this.onClose.bind(this),this.ws.onmessage=function(e){return t.onData(e.data)},this.ws.onerror=function(e){return t.onError("websocket error",e)}}},{key:"write",value:function(t){var e=this;this.writable=!1;for(var n=t.length,r=0,o=n;r<o;r++)!function(t){f.encodePacket(t,e.supportsBinary,(function(r){var o={};v||(t.options&&(o.compress=t.options.compress),e.opts.perMessageDeflate&&("string"==typeof r?Buffer.byteLength(r):r.length)<e.opts.perMessageDeflate.threshold&&(o.compress=!1));try{v?e.ws.send(r):e.ws.send(r,o)}catch(t){}--n||(e.emit("flush"),setTimeout((function(){e.writable=!0,e.emit("drain")}),0))}))}(t[r])}},{key:"onClose",value:function(){u.prototype.onClose.call(this)}},{key:"doClose",value:function(){void 0!==this.ws&&(this.ws.close(),this.ws=null)}},{key:"uri",value:function(){var t=this.query||{},e=this.opts.secure?"wss":"ws",n="";return this.opts.port&&("wss"===e&&443!==Number(this.opts.port)||"ws"===e&&80!==Number(this.opts.port))&&(n=":"+this.opts.port),this.opts.timestampRequests&&(t[this.opts.timestampParam]=l()),this.supportsBinary||(t.b64=1),(t=p.encode(t)).length&&(t="?"+t),e+"://"+(-1!==this.opts.hostname.indexOf(":")?"["+this.opts.hostname+"]":this.opts.hostname)+n+this.opts.path+t}},{key:"check",value:function(){return!(!d||"__initialize"in d&&this.name===a.prototype.name)}},{key:"name",get:function(){return"websocket"}}])&&o(e.prototype,n),r&&o(e,r),a}(u);t.exports=g},function(t,e,n){var r=n(2);t.exports={WebSocket:r.WebSocket||r.MozWebSocket,usingBrowserWebSocket:!0,defaultBinaryType:"arraybuffer"}},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.reconstructPacket=e.deconstructPacket=void 0;var o=n(15);e.deconstructPacket=function(t){var e=[],n=t.data,i=t;return i.data=function t(e,n){if(!e)return e;if(o.isBinary(e)){var i={_placeholder:!0,num:n.length};return n.push(e),i}if(Array.isArray(e)){for(var s=new Array(e.length),c=0;c<e.length;c++)s[c]=t(e[c],n);return s}if("object"===r(e)&&!(e instanceof Date)){var a={};for(var u in e)e.hasOwnProperty(u)&&(a[u]=t(e[u],n));return a}return e}(n,e),i.attachments=e.length,{packet:i,buffers:e}},e.reconstructPacket=function(t,e){return t.data=function t(e,n){if(!e)return e;if(e&&e._placeholder)return n[e.num];if(Array.isArray(e))for(var o=0;o<e.length;o++)e[o]=t(e[o],n);else if("object"===r(e))for(var i in e)e.hasOwnProperty(i)&&(e[i]=t(e[i],n));return e}(t.data,e),t.attachments=void 0,t}},function(t,e){function n(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}t.exports=n,n.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=0==(1&Math.floor(10*e))?t-n:t+n}return 0|Math.min(t,this.max)},n.prototype.reset=function(){this.attempts=0},n.prototype.setMin=function(t){this.ms=t},n.prototype.setMax=function(t){this.max=t},n.prototype.setJitter=function(t){this.jitter=t}}])}));
//# sourceMappingURL=socket.io.min.js.map