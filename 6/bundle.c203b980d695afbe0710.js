(()=>{var e={287:(e,t,i)=>{"use strict";i.d(t,{Z:()=>c});var s=i(537),a=i.n(s),n=i(645),r=i.n(n)()(a());r.push([e.id,".event__type-label::first-letter {\n  text-transform: uppercase;\n}\n\n.event__photos-container {\n  overflow-x: auto;\n}","",{version:3,sources:["webpack://./src/views/editor-view.css"],names:[],mappings:"AAAA;EACE,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;AAClB",sourcesContent:[".event__type-label::first-letter {\n  text-transform: uppercase;\n}\n\n.event__photos-container {\n  overflow-x: auto;\n}"],sourceRoot:""}]);const c=r},766:(e,t,i)=>{"use strict";i.d(t,{Z:()=>c});var s=i(537),a=i.n(s),n=i(645),r=i.n(n)()(a());r.push([e.id,".trip-list {\n  display: block;\n}\n\n.trip-list__item {\n  display: block;\n  margin-bottom: 54px;\n  margin-left: auto;\n}","",{version:3,sources:["webpack://./src/views/list-view.css"],names:[],mappings:"AAAA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,mBAAmB;EACnB,iBAAiB;AACnB",sourcesContent:[".trip-list {\n  display: block;\n}\n\n.trip-list__item {\n  display: block;\n  margin-bottom: 54px;\n  margin-left: auto;\n}"],sourceRoot:""}]);const c=r},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i="",s=void 0!==t[5];return t[4]&&(i+="@supports (".concat(t[4],") {")),t[2]&&(i+="@media ".concat(t[2]," {")),s&&(i+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),i+=e(t),s&&(i+="}"),t[2]&&(i+="}"),t[4]&&(i+="}"),i})).join("")},t.i=function(e,i,s,a,n){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(s)for(var c=0;c<this.length;c++){var o=this[c][0];null!=o&&(r[o]=!0)}for(var d=0;d<e.length;d++){var f=[].concat(e[d]);s&&r[f[0]]||(void 0!==n&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=n),i&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=i):f[2]=i),a&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=a):f[4]="".concat(a)),t.push(f))}},t}},537:e=>{"use strict";e.exports=function(e){var t=e[1],i=e[3];if(!i)return t;if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),n="/*# ".concat(a," */");return[t].concat([n]).join("\n")}return[t].join("\n")}},484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,i="millisecond",s="second",a="minute",n="hour",r="day",c="week",o="month",d="quarter",f="year",l="date",u="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,b={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],i=e%100;return"["+e+(t[(i-20)%10]||t[i]||t[0])+"]"}},m=function(e,t,i){var s=String(e);return!s||s.length>=t?e:""+Array(t+1-s.length).join(i)+e},v={s:m,z:function(e){var t=-e.utcOffset(),i=Math.abs(t),s=Math.floor(i/60),a=i%60;return(t<=0?"+":"-")+m(s,2,"0")+":"+m(a,2,"0")},m:function e(t,i){if(t.date()<i.date())return-e(i,t);var s=12*(i.year()-t.year())+(i.month()-t.month()),a=t.clone().add(s,o),n=i-a<0,r=t.clone().add(s+(n?-1:1),o);return+(-(s+(i-a)/(n?a-r:r-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:o,y:f,w:c,d:r,D:l,h:n,m:a,s,ms:i,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},_="en",y={};y[_]=b;var g=function(e){return e instanceof M},$=function e(t,i,s){var a;if(!t)return _;if("string"==typeof t){var n=t.toLowerCase();y[n]&&(a=n),i&&(y[n]=i,a=n);var r=t.split("-");if(!a&&r.length>1)return e(r[0])}else{var c=t.name;y[c]=t,a=c}return!s&&a&&(_=a),a||!s&&_},w=function(e,t){if(g(e))return e.clone();var i="object"==typeof t?t:{};return i.date=e,i.args=arguments,new M(i)},S=v;S.l=$,S.i=g,S.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var M=function(){function b(e){this.$L=$(e.locale,null,!0),this.parse(e)}var m=b.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,i=e.utc;if(null===t)return new Date(NaN);if(S.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var s=t.match(p);if(s){var a=s[2]-1||0,n=(s[7]||"0").substring(0,3);return i?new Date(Date.UTC(s[1],a,s[3]||1,s[4]||0,s[5]||0,s[6]||0,n)):new Date(s[1],a,s[3]||1,s[4]||0,s[5]||0,s[6]||0,n)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return S},m.isValid=function(){return!(this.$d.toString()===u)},m.isSame=function(e,t){var i=w(e);return this.startOf(t)<=i&&i<=this.endOf(t)},m.isAfter=function(e,t){return w(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<w(e)},m.$g=function(e,t,i){return S.u(e)?this[t]:this.set(i,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,t){var i=this,d=!!S.u(t)||t,u=S.p(e),p=function(e,t){var s=S.w(i.$u?Date.UTC(i.$y,t,e):new Date(i.$y,t,e),i);return d?s:s.endOf(r)},h=function(e,t){return S.w(i.toDate()[e].apply(i.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(t)),i)},b=this.$W,m=this.$M,v=this.$D,_="set"+(this.$u?"UTC":"");switch(u){case f:return d?p(1,0):p(31,11);case o:return d?p(1,m):p(0,m+1);case c:var y=this.$locale().weekStart||0,g=(b<y?b+7:b)-y;return p(d?v-g:v+(6-g),m);case r:case l:return h(_+"Hours",0);case n:return h(_+"Minutes",1);case a:return h(_+"Seconds",2);case s:return h(_+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(e,t){var c,d=S.p(e),u="set"+(this.$u?"UTC":""),p=(c={},c[r]=u+"Date",c[l]=u+"Date",c[o]=u+"Month",c[f]=u+"FullYear",c[n]=u+"Hours",c[a]=u+"Minutes",c[s]=u+"Seconds",c[i]=u+"Milliseconds",c)[d],h=d===r?this.$D+(t-this.$W):t;if(d===o||d===f){var b=this.clone().set(l,1);b.$d[p](h),b.init(),this.$d=b.set(l,Math.min(this.$D,b.daysInMonth())).$d}else p&&this.$d[p](h);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[S.p(e)]()},m.add=function(i,d){var l,u=this;i=Number(i);var p=S.p(d),h=function(e){var t=w(u);return S.w(t.date(t.date()+Math.round(e*i)),u)};if(p===o)return this.set(o,this.$M+i);if(p===f)return this.set(f,this.$y+i);if(p===r)return h(1);if(p===c)return h(7);var b=(l={},l[a]=e,l[n]=t,l[s]=1e3,l)[p]||1,m=this.$d.getTime()+i*b;return S.w(m,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this,i=this.$locale();if(!this.isValid())return i.invalidDate||u;var s=e||"YYYY-MM-DDTHH:mm:ssZ",a=S.z(this),n=this.$H,r=this.$m,c=this.$M,o=i.weekdays,d=i.months,f=function(e,i,a,n){return e&&(e[i]||e(t,s))||a[i].slice(0,n)},l=function(e){return S.s(n%12||12,e,"0")},p=i.meridiem||function(e,t,i){var s=e<12?"AM":"PM";return i?s.toLowerCase():s},b={YY:String(this.$y).slice(-2),YYYY:this.$y,M:c+1,MM:S.s(c+1,2,"0"),MMM:f(i.monthsShort,c,d,3),MMMM:f(d,c),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:f(i.weekdaysMin,this.$W,o,2),ddd:f(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(n),HH:S.s(n,2,"0"),h:l(1),hh:l(2),a:p(n,r,!0),A:p(n,r,!1),m:String(r),mm:S.s(r,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:a};return s.replace(h,(function(e,t){return t||b[e]||a.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(i,l,u){var p,h=S.p(l),b=w(i),m=(b.utcOffset()-this.utcOffset())*e,v=this-b,_=S.m(this,b);return _=(p={},p[f]=_/12,p[o]=_,p[d]=_/3,p[c]=(v-m)/6048e5,p[r]=(v-m)/864e5,p[n]=v/t,p[a]=v/e,p[s]=v/1e3,p)[h]||v,u?_:S.a(_)},m.daysInMonth=function(){return this.endOf(o).$D},m.$locale=function(){return y[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var i=this.clone(),s=$(e,t,!0);return s&&(i.$L=s),i},m.clone=function(){return S.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},b}(),T=M.prototype;return w.prototype=T,[["$ms",i],["$s",s],["$m",a],["$H",n],["$W",r],["$M",o],["$y",f],["$D",l]].forEach((function(e){T[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),w.extend=function(e,t){return e.$i||(e(t,M,w),e.$i=!0),w},w.locale=$,w.isDayjs=g,w.unix=function(e){return w(1e3*e)},w.en=y[_],w.Ls=y,w.p={},w}()},646:function(e){e.exports=function(){"use strict";var e,t,i=1e3,s=6e4,a=36e5,n=864e5,r=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=31536e6,o=2592e6,d=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,f={years:c,months:o,days:n,hours:a,minutes:s,seconds:i,milliseconds:1,weeks:6048e5},l=function(e){return e instanceof _},u=function(e,t,i){return new _(e,i,t.$l)},p=function(e){return t.p(e)+"s"},h=function(e){return e<0},b=function(e){return h(e)?Math.ceil(e):Math.floor(e)},m=function(e){return Math.abs(e)},v=function(e,t){return e?h(e)?{negative:!0,format:""+m(e)+t}:{negative:!1,format:""+e+t}:{negative:!1,format:""}},_=function(){function h(e,t,i){var s=this;if(this.$d={},this.$l=i,void 0===e&&(this.$ms=0,this.parseFromMilliseconds()),t)return u(e*f[p(t)],this);if("number"==typeof e)return this.$ms=e,this.parseFromMilliseconds(),this;if("object"==typeof e)return Object.keys(e).forEach((function(t){s.$d[p(t)]=e[t]})),this.calMilliseconds(),this;if("string"==typeof e){var a=e.match(d);if(a){var n=a.slice(2).map((function(e){return null!=e?Number(e):0}));return this.$d.years=n[0],this.$d.months=n[1],this.$d.weeks=n[2],this.$d.days=n[3],this.$d.hours=n[4],this.$d.minutes=n[5],this.$d.seconds=n[6],this.calMilliseconds(),this}}return this}var m=h.prototype;return m.calMilliseconds=function(){var e=this;this.$ms=Object.keys(this.$d).reduce((function(t,i){return t+(e.$d[i]||0)*f[i]}),0)},m.parseFromMilliseconds=function(){var e=this.$ms;this.$d.years=b(e/c),e%=c,this.$d.months=b(e/o),e%=o,this.$d.days=b(e/n),e%=n,this.$d.hours=b(e/a),e%=a,this.$d.minutes=b(e/s),e%=s,this.$d.seconds=b(e/i),e%=i,this.$d.milliseconds=e},m.toISOString=function(){var e=v(this.$d.years,"Y"),t=v(this.$d.months,"M"),i=+this.$d.days||0;this.$d.weeks&&(i+=7*this.$d.weeks);var s=v(i,"D"),a=v(this.$d.hours,"H"),n=v(this.$d.minutes,"M"),r=this.$d.seconds||0;this.$d.milliseconds&&(r+=this.$d.milliseconds/1e3);var c=v(r,"S"),o=e.negative||t.negative||s.negative||a.negative||n.negative||c.negative,d=a.format||n.format||c.format?"T":"",f=(o?"-":"")+"P"+e.format+t.format+s.format+d+a.format+n.format+c.format;return"P"===f||"-P"===f?"P0D":f},m.toJSON=function(){return this.toISOString()},m.format=function(e){var i=e||"YYYY-MM-DDTHH:mm:ss",s={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return i.replace(r,(function(e,t){return t||String(s[e])}))},m.as=function(e){return this.$ms/f[p(e)]},m.get=function(e){var t=this.$ms,i=p(e);return"milliseconds"===i?t%=1e3:t="weeks"===i?b(t/f[i]):this.$d[i],0===t?0:t},m.add=function(e,t,i){var s;return s=t?e*f[p(t)]:l(e)?e.$ms:u(e,this).$ms,u(this.$ms+s*(i?-1:1),this)},m.subtract=function(e,t){return this.add(e,t,!0)},m.locale=function(e){var t=this.clone();return t.$l=e,t},m.clone=function(){return u(this.$ms,this)},m.humanize=function(t){return e().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},m.milliseconds=function(){return this.get("milliseconds")},m.asMilliseconds=function(){return this.as("milliseconds")},m.seconds=function(){return this.get("seconds")},m.asSeconds=function(){return this.as("seconds")},m.minutes=function(){return this.get("minutes")},m.asMinutes=function(){return this.as("minutes")},m.hours=function(){return this.get("hours")},m.asHours=function(){return this.as("hours")},m.days=function(){return this.get("days")},m.asDays=function(){return this.as("days")},m.weeks=function(){return this.get("weeks")},m.asWeeks=function(){return this.as("weeks")},m.months=function(){return this.get("months")},m.asMonths=function(){return this.as("months")},m.years=function(){return this.get("years")},m.asYears=function(){return this.as("years")},h}();return function(i,s,a){e=a,t=a().$utils(),a.duration=function(e,t){var i=a.locale();return u(e,{$l:i},t)},a.isDuration=l;var n=s.prototype.add,r=s.prototype.subtract;s.prototype.add=function(e,t){return l(e)&&(e=e.asMilliseconds()),n.bind(this)(e,t)},s.prototype.subtract=function(e,t){return l(e)&&(e=e.asMilliseconds()),r.bind(this)(e,t)}}}()},379:e=>{"use strict";var t=[];function i(e){for(var i=-1,s=0;s<t.length;s++)if(t[s].identifier===e){i=s;break}return i}function s(e,s){for(var n={},r=[],c=0;c<e.length;c++){var o=e[c],d=s.base?o[0]+s.base:o[0],f=n[d]||0,l="".concat(d," ").concat(f);n[d]=f+1;var u=i(l),p={css:o[1],media:o[2],sourceMap:o[3],supports:o[4],layer:o[5]};if(-1!==u)t[u].references++,t[u].updater(p);else{var h=a(p,s);s.byIndex=c,t.splice(c,0,{identifier:l,updater:h,references:1})}r.push(l)}return r}function a(e,t){var i=t.domAPI(t);return i.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;i.update(e=t)}else i.remove()}}e.exports=function(e,a){var n=s(e=e||[],a=a||{});return function(e){e=e||[];for(var r=0;r<n.length;r++){var c=i(n[r]);t[c].references--}for(var o=s(e,a),d=0;d<n.length;d++){var f=i(n[d]);0===t[f].references&&(t[f].updater(),t.splice(f,1))}n=o}}},569:e=>{"use strict";var t={};e.exports=function(e,i){var s=function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}t[e]=i}return t[e]}(e);if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(i)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,i)=>{"use strict";e.exports=function(e){var t=i.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(i){!function(e,t,i){var s="";i.supports&&(s+="@supports (".concat(i.supports,") {")),i.media&&(s+="@media ".concat(i.media," {"));var a=void 0!==i.layer;a&&(s+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),s+=i.css,a&&(s+="}"),i.media&&(s+="}"),i.supports&&(s+="}");var n=i.sourceMap;n&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),t.styleTagTransform(s,e,t.options)}(t,e,i)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function i(s){var a=t[s];if(void 0!==a)return a.exports;var n=t[s]={id:s,exports:{}};return e[s].call(n.exports,n,n.exports,i),n.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.nc=void 0,(()=>{"use strict";class e extends HTMLElement{constructor(){super(),this.state=Object.create(null)}setState(e){Object.assign(this.state,e),this.render()}render(){this.innerHTML=this.createHtml()}createHtml(){return""}dispatch(e,t=null){const i=new CustomEvent(e,{detail:t,bubbles:!0,cancelable:!0});return this.dispatchEvent(i)}}const t=e;var s=i(484),a=i.n(s),n=i(646),r=i.n(n);function c(e){return a()(e).format("HH:mm")}function o(e,...t){return e.reduce(((e,i,s)=>{const a=t[s-1];return void 0===a?e+i:Array.isArray(a)?e+a.join("")+i:e+a+i}))}a().extend(r());customElements.define("brief-view",class extends t{constructor(){super(),this.classList.add("trip-info")}createHtml(){return o`
      <div class="trip-info__main">
        <h1 class="trip-info__title">Мурманск — Петрозаводск — Санкт-Петербург</h1>

        <p class="trip-info__dates">Mar 18&nbsp;—&nbsp;20</p>
      </div>

      <p class="trip-info__cost">
        Total: €&nbsp;<span class="trip-info__cost-value">1230</span>
      </p>
    `}});customElements.define("filter-view",class extends t{constructor(){super(),this.classList.add("trip-filters")}createHtml(){return o`
      ${this.state.items.map((e=>o`
      <div class="trip-filters__filter">
        <input
          id="filter-${e.value}"
          class="trip-filters__filter-input  visually-hidden"
          type="radio"
          name="trip-filter"
          value="${e.value}"
          ${e.isSelected?"checked":""}
          ${e.isDisabled?"disabled":""}>
        <label
          class="trip-filters__filter-label"
          for="filter-${e.value}">
          ${e.value}
        </label>
      </div>
    `))}
    `}});customElements.define("add-button-view",class extends t{createHtml(){return o`
      <button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button" disabled="">New event</button>
    `}});customElements.define("sort-view",class extends t{constructor(){super(),this.classList.add("trip-sort")}createHtml(){return o`
      ${this.state.items.map((e=>o`
        <div class="trip-sort__item  trip-sort__item--${e.value}">
          <input
            id="sort-${e.value}"
            class="trip-sort__input  visually-hidden"
            type="radio"
            name="trip-sort"
            value="${e.value}"
            ${e.isSelected?"checked":""}
            ${e.isDisabled?"disabled":""}>
          <label
            class="trip-sort__btn"
            for="sort-${e.value}">
            ${e.value}
          </label>
        </div>
      `))}
    `}});var d=i(379),f=i.n(d),l=i(795),u=i.n(l),p=i(569),h=i.n(p),b=i(565),m=i.n(b),v=i(216),_=i.n(v),y=i(589),g=i.n(y),$=i(766),w={};w.styleTagTransform=g(),w.setAttributes=m(),w.insert=h().bind(null,"head"),w.domAPI=u(),w.insertStyleElement=_(),f()($.Z,w),$.Z&&$.Z.locals&&$.Z.locals;class S extends t{constructor(){super(),this.addEventListener("click",this.onClick)}createHtml(){return o`
      <div class="event">
        ${this.createStartDateHtml()}
        ${this.createTypeIconHtml()}
        ${this.createDestinationHtml()}
        ${this.createScheduleHtml()}
        ${this.createPriceHtml()}
        ${this.createOfferListHtml()}
        ${this.createFavoriteButtonHtml()}
        ${this.createOpenButtonHtml()}

      </div>
    `}createStartDateHtml(){const{dateFrom:e}=this.state;return o`
      <time class="event__date" datetime="${e}">${t=e,a()(t).format("MMM D")}</time>
    `;var t}createTypeIconHtml(){const{types:e}=this.state;return o`
      <div class="event__type">
        <img
          class="event__type-icon"
          width="42"
          height="42"
          src="img/icons/${e.find((e=>e.isSelected)).value}.png"
          alt="Event type icon">
      </div>
    `}createDestinationHtml(){const{types:e,destinations:t}=this.state,i=e.find((e=>e.isSelected)),s=t.find((e=>e.isSelected));return o`
    <h3 class="event__title">${i.value} ${s.name}</h3>
    `}createScheduleHtml(){const{dateFrom:e,dateTo:t}=this.state;return o`
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${e}">${c(e)}</time>
          —
          <time class="event__end-time" datetime="${t}">${c(t)}</time>
        </p>
        <p class="event__duration">${function(e,t){const i=a()(t).diff(e),s=a().duration(i);return s.days()?s.format("DD[d] HH[h] mm[m]"):s.hours()?s.format("HH[h] mm[m]"):s.format("mm[m]")}(e,t)}</p>
      </div>
    `}createPriceHtml(){const{basePrice:e}=this.state;return o`
      <p class="event__price">
        €&nbsp;<span class="event__price-value">${t=e,t.toLocaleString("en")}</span>
      </p>
    `;var t}createOfferListHtml(){const{offers:e}=this.state,t=e.filter((e=>e.isSelected));return t.length?o`
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${t.map((e=>o`
        <li class="event__offer">
          <span class="event__offer-title">${e.title}</span>
          +€&nbsp;
          <span class="event__offer-price">${e.price}</span>
        </li>
      `))}
      </ul>
    `:""}createFavoriteButtonHtml(){const{isFavorite:e}=this.state;return o`
    <button class="event__favorite-btn ${e?"event__favorite-btn--active":""}" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>
        </svg>
      </button>
    `}createOpenButtonHtml(){return o`
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    `}onClick(e){e.target.closest(".event__rollup-btn")&&this.dispatch("open")}}customElements.define("card-view",S);const M=S;var T=i(287),H={};H.styleTagTransform=g(),H.setAttributes=m(),H.insert=h().bind(null,"head"),H.domAPI=u(),H.insertStyleElement=_(),f()(T.Z,H),T.Z&&T.Z.locals&&T.Z.locals;class D extends t{constructor(){super(),this.addEventListener("click",this.onClick)}connectedCallback(){document.addEventListener("keydown",this)}disconnectedCallback(){document.removeEventListener("keydown",this)}createHtml(){return o`
    <form class="event event--edit" action="#" method="post">
      <header class="event__header">
        ${this.createTypeFieldHtml()}
        ${this.createDestinationFieldHtml()}
        ${this.createScheduleFieldHtml()}
        ${this.createPriceFieldHtml()}
        ${this.createSubmitButtonHtml()}
        ${this.createResetButtonHtml()}
        ${this.createCloseButtonHtml()}
      </header>
      <section class="event__details">
        ${this.createOfferListFieldHtml()}
        ${this.createDestinationHtml()}
      </section>
    </form>
    `}createTypeFieldHtml(){const{types:e}=this.state;return o`
      <div class="event__type-wrapper">
      <label class="event__type  event__type-btn" for="event-type-toggle-1">
        <span class="visually-hidden">Choose event type</span>
        <img
          class="event__type-icon"
          width="17"
          height="17"
          src="img/icons/${e.find((e=>e.isSelected)).value}.png"
          alt="Event type icon">
      </label>
      <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

      <div class="event__type-list">
        <fieldset class="event__type-group">
          <legend class="visually-hidden">Event type</legend>

          ${e.map((e=>o`
              <div class="event__type-item">
                <input
                  id="event-type-${e.value}-1"
                  class="event__type-input  visually-hidden"
                  type="radio"
                  name="event-type"
                  value="${e.value}"
                  ${e.isSelected?"checked":""}>
                <label
                  class="event__type-label  event__type-label--${e.value}"
                  for="event-type-${e.value}-1">
                  ${e.value}
                </label>
              </div>
            `))}


        </fieldset>
      </div>
    </div>
    `}createDestinationFieldHtml(){const{types:e,destinations:t}=this.state;return o`
      <div class="event__field-group  event__field-group--destination">
      <label class="event__label  event__type-output" for="event-destination-1">
        ${e.find((e=>e.isSelected)).value}
      </label>

      <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${t.find((e=>e.isSelected))?.name}" list="destination-list-1">
      <datalist id="destination-list-1">
        ${t.map((e=>o`
        <option value="${e.name}"></option>
        `))}
      </datalist>
      </div>
    `}createScheduleFieldHtml(){const{dateFrom:e,dateTo:t}=this.state;return o`
      <div class="event__field-group  event__field-group--time">
        <label class="visually-hidden" for="event-start-time-1">From</label>
        <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${e}">
        —
        <label class="visually-hidden" for="event-end-time-1">To</label>
        <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${t}">
      </div>
    `}createPriceFieldHtml(){const{basePrice:e}=this.state;return o`
      <div class="event__field-group  event__field-group--price">
        <label class="event__label" for="event-price-1">
          <span class="visually-hidden">Price</span>
          €
        </label>
        <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${e}">
      </div>
    `}createSubmitButtonHtml(){return o`
      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
    `}createResetButtonHtml(){return o`
      <button class="event__reset-btn" type="reset">Cancel</button>
    `}createCloseButtonHtml(){return o`
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    `}createOfferListFieldHtml(){const{offers:e}=this.state;return e.length?o`
    <section class="event__section  event__section--offers">
    <h3 class="event__section-title  event__section-title--offers">Offers</h3>

    <div class="event__available-offers">
    ${e.map((e=>o`
    <div class="event__offer-selector">
      <input
        class="event__offer-checkbox  visually-hidden"
        id="${e.id}"
        type="checkbox"
        name="event-offer"
        value="${e.id}"
        ${e.isSelected?"checked":""}>

        <label class="event__offer-label" for="${e.id}">
        <span class="event__offer-title">${e.title}</span>
        +€&nbsp;
        <span class="event__offer-price">${e.price}</span>
      </label>
    </div>
  `))}

    </div>
  </section>
    `:""}createDestinationHtml(){const{destinations:e}=this.state,t=e.find((e=>e.isSelected));return t?o`
      <section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">${t.description}</p>

        <div class="event__photos-container">
          <div class="event__photos-tape">
          ${t.pictures.map((e=>o`
          <img class="event__photo" src="${e.src}" alt="${e.description}">
          `))}
          </div>
        </div>
      </section>
    `:""}onClick(e){e.target.closest(".event__rollup-btn")&&this.dispatch("close")}handleEvent(e){e.key?.startsWith("Esc")&&this.dispatch("close")}}customElements.define("editor-view",D);const k=D;customElements.define("list-view",class extends t{constructor(){super(),this.classList.add("trip-list"),this.setAttribute("role","list")}render(){const e=this.state.items.map((e=>{const t=e.isEditable?new k:new M;return t.classList.add("trip-list__item"),t.setAttribute("role","listitem"),t.setState(e),t}));this.replaceChildren(...e)}});const A=class{},Z=JSON.parse('[{"id":"e7ff019f-3298-4022-bdee-2961fe8ccca7","base_price":7038,"date_from":"2023-07-31T21:00:00.460Z","date_to":"2023-08-09T10:00:00.460Z","destination":"3cec8c6b-dbb7-4fb2-ad7d-371c6e2c6f32","is_favorite":true,"offers":["e10440f3-9fe2-4ee0-834f-c0519a2108d5"],"type":"restaurant"},{"id":"49439c40-3ec8-43de-976c-7cde8176446e","base_price":8087,"date_from":"2023-07-28T21:00:00.460Z","date_to":"2023-08-09T05:00:00.460Z","destination":"71f97de3-6394-4123-9a72-c70fb9086d34","is_favorite":false,"offers":["fc5c09cf-78e5-4428-b60a-518087945868","89c3959a-66e3-48fb-8f14-85e166d0658f","f8837550-b774-4a0b-96b4-4d88581c6749","56fb3bb7-0f78-42b7-bee2-1d07eb0abe4a"],"type":"taxi"},{"id":"b392ed73-1c58-4a5d-8eba-15dfbed336ec","base_price":9478,"date_from":"2023-08-01T21:00:00.460Z","date_to":"2023-08-10T13:00:00.460Z","destination":"3616737f-3bef-43d9-8c7d-5fbf11c6561b","is_favorite":false,"offers":[],"type":"sightseeing"},{"id":"66788ff2-5a59-4414-aae5-b83e82703c81","base_price":3402,"date_from":"2023-07-27T21:00:00.460Z","date_to":"2023-08-10T20:00:00.460Z","destination":"71f97de3-6394-4123-9a72-c70fb9086d34","is_favorite":true,"offers":["903c92aa-75c9-4edb-bb51-28bfde53bf2e","1228b78f-7437-4346-adcc-dd596a921b41","31563017-0362-4acd-929d-c963649af2b5"],"type":"ship"},{"id":"936ea22d-2d6a-45f6-ab1a-ec7e4f8167e1","base_price":8574,"date_from":"2023-08-03T21:00:00.460Z","date_to":"2023-08-09T10:00:00.460Z","destination":"3d539331-532d-4fd3-9c1a-a5541971efe8","is_favorite":false,"offers":["b9dcd348-b635-4c02-9df6-60f8cc568f00"],"type":"train"},{"id":"b7721607-80ac-4d4b-b2dc-ca2caec7e63f","base_price":9654,"date_from":"2023-07-28T21:00:00.460Z","date_to":"2023-08-09T09:00:00.460Z","destination":"3d539331-532d-4fd3-9c1a-a5541971efe8","is_favorite":false,"offers":["176ae8b1-aa5c-446d-9ad2-445ba18c20c8","90d941a4-f68d-4c5f-9c80-3dffe69d91ed","bc3cc4a3-20d2-41b9-a555-4c7323228d85"],"type":"flight"},{"id":"e9ae1516-65be-4367-9457-a21c5d1aa038","base_price":7209,"date_from":"2023-08-03T21:00:00.460Z","date_to":"2023-08-09T04:00:00.460Z","destination":"63128c31-ebef-4a73-81f7-19b3e94ed3c5","is_favorite":true,"offers":["151d78ac-1f58-4379-af5c-11143f922ee0"],"type":"bus"},{"id":"8803015e-b006-4b5d-b990-bce0a8440fc9","base_price":5822,"date_from":"2023-07-31T21:00:00.460Z","date_to":"2023-08-09T10:00:00.460Z","destination":"3cec8c6b-dbb7-4fb2-ad7d-371c6e2c6f32","is_favorite":false,"offers":["f8837550-b774-4a0b-96b4-4d88581c6749","56fb3bb7-0f78-42b7-bee2-1d07eb0abe4a"],"type":"taxi"},{"id":"4b938d56-e988-4497-b590-84cd1c6f22e1","base_price":3021,"date_from":"2023-07-28T21:00:00.460Z","date_to":"2023-08-10T11:00:00.460Z","destination":"3cec8c6b-dbb7-4fb2-ad7d-371c6e2c6f32","is_favorite":false,"offers":[],"type":"restaurant"},{"id":"4df0864d-5ca0-4243-8883-5d09697bcca1","base_price":861,"date_from":"2023-08-05T21:00:00.460Z","date_to":"2023-08-10T02:00:00.460Z","destination":"3616737f-3bef-43d9-8c7d-5fbf11c6561b","is_favorite":true,"offers":["89c3959a-66e3-48fb-8f14-85e166d0658f","f8837550-b774-4a0b-96b4-4d88581c6749","56fb3bb7-0f78-42b7-bee2-1d07eb0abe4a"],"type":"taxi"},{"id":"60973a77-0d61-4709-bad4-9ef8735e11f2","base_price":9667,"date_from":"2023-08-02T21:00:00.460Z","date_to":"2023-08-09T21:00:00.460Z","destination":"63128c31-ebef-4a73-81f7-19b3e94ed3c5","is_favorite":false,"offers":["89c3959a-66e3-48fb-8f14-85e166d0658f","f8837550-b774-4a0b-96b4-4d88581c6749","56fb3bb7-0f78-42b7-bee2-1d07eb0abe4a"],"type":"taxi"},{"id":"31393abf-9a1a-4637-ab5c-483ef3f501ba","base_price":7619,"date_from":"2023-07-29T21:00:00.460Z","date_to":"2023-08-09T15:00:00.460Z","destination":"51cb4703-8895-439d-a2e0-c113d723ef29","is_favorite":true,"offers":[],"type":"sightseeing"},{"id":"40acf913-1ec3-45d5-853a-d6a2b4b3830d","base_price":235,"date_from":"2023-08-03T21:00:00.460Z","date_to":"2023-08-09T21:00:00.460Z","destination":"46224961-67b1-4a72-add9-df15619c2e50","is_favorite":true,"offers":["e10440f3-9fe2-4ee0-834f-c0519a2108d5"],"type":"restaurant"},{"id":"91dfc58e-995b-4014-bf14-1d1e1b08e74b","base_price":9839,"date_from":"2023-07-28T21:00:00.460Z","date_to":"2023-08-10T18:00:00.460Z","destination":"ce9767a8-c3ad-44f3-9273-f70c86c44ad4","is_favorite":true,"offers":[],"type":"sightseeing"},{"id":"0bbf3c0d-0f8a-40c9-8362-50742613a429","base_price":7946,"date_from":"2023-08-04T21:00:00.460Z","date_to":"2023-08-09T20:00:00.460Z","destination":"ce9767a8-c3ad-44f3-9273-f70c86c44ad4","is_favorite":false,"offers":["f8c4b069-67ac-44ea-8c2a-fe973f1cf9fb","b9dcd348-b635-4c02-9df6-60f8cc568f00"],"type":"train"},{"id":"ff2c65be-439c-432d-86a3-bf311e31b2cd","base_price":4607,"date_from":"2023-07-27T21:00:00.460Z","date_to":"2023-08-09T16:00:00.460Z","destination":"14422c85-bca6-48cc-9335-3132e08bcb4c","is_favorite":false,"offers":["8c3c0a5f-c6c2-44ac-a74c-a16b5d6d6db6","fc5c09cf-78e5-4428-b60a-518087945868","89c3959a-66e3-48fb-8f14-85e166d0658f","f8837550-b774-4a0b-96b4-4d88581c6749","56fb3bb7-0f78-42b7-bee2-1d07eb0abe4a"],"type":"taxi"},{"id":"66d48be9-1613-4718-9809-6c943f4da5e9","base_price":3810,"date_from":"2023-07-28T21:00:00.460Z","date_to":"2023-08-09T13:00:00.460Z","destination":"ca6378f2-ee46-4b29-ac68-cd51d48b987f","is_favorite":true,"offers":[],"type":"bus"},{"id":"74b079a1-56e0-4a11-bfbd-7b51e4ee1ebb","base_price":5491,"date_from":"2023-08-04T21:00:00.460Z","date_to":"2023-08-09T14:00:00.460Z","destination":"3d539331-532d-4fd3-9c1a-a5541971efe8","is_favorite":false,"offers":["57267833-3b2e-45ca-beca-7dbed8475056","f8c4b069-67ac-44ea-8c2a-fe973f1cf9fb","b9dcd348-b635-4c02-9df6-60f8cc568f00"],"type":"train"},{"id":"89524188-0430-45d3-a3e6-6b952bec7365","base_price":2860,"date_from":"2023-08-01T21:00:00.460Z","date_to":"2023-08-10T21:00:00.460Z","destination":"14422c85-bca6-48cc-9335-3132e08bcb4c","is_favorite":true,"offers":["f8c4b069-67ac-44ea-8c2a-fe973f1cf9fb","b9dcd348-b635-4c02-9df6-60f8cc568f00"],"type":"train"},{"id":"50003357-d0e1-48ed-9f63-0e368a82cd79","base_price":491,"date_from":"2023-08-01T21:00:00.460Z","date_to":"2023-08-10T14:00:00.460Z","destination":"ce9767a8-c3ad-44f3-9273-f70c86c44ad4","is_favorite":true,"offers":["b9661f43-8b01-4993-93f1-74a33da7a7cf","7994ccc2-3740-46fa-9a9e-721772b54b33"],"type":"drive"},{"id":"abbb3fe9-6393-4efd-97fb-82680236c341","base_price":6897,"date_from":"2023-08-05T21:00:00.460Z","date_to":"2023-08-09T13:00:00.460Z","destination":"3cec8c6b-dbb7-4fb2-ad7d-371c6e2c6f32","is_favorite":false,"offers":["031252c0-9d5b-4ae0-a693-ed8572d6ee33","176ae8b1-aa5c-446d-9ad2-445ba18c20c8","90d941a4-f68d-4c5f-9c80-3dffe69d91ed","bc3cc4a3-20d2-41b9-a555-4c7323228d85"],"type":"flight"},{"id":"94d4f935-c564-4c5f-9feb-80382fd7d929","base_price":663,"date_from":"2023-07-27T21:00:00.460Z","date_to":"2023-08-10T11:00:00.460Z","destination":"46224961-67b1-4a72-add9-df15619c2e50","is_favorite":true,"offers":[],"type":"sightseeing"},{"id":"f8ef281d-5a42-44ac-b263-843b5714a9c5","base_price":6718,"date_from":"2023-07-31T21:00:00.460Z","date_to":"2023-08-10T11:00:00.460Z","destination":"14422c85-bca6-48cc-9335-3132e08bcb4c","is_favorite":true,"offers":["b9dcd348-b635-4c02-9df6-60f8cc568f00"],"type":"train"},{"id":"575163a0-4507-4769-999f-2af3e7a6a156","base_price":7276,"date_from":"2023-07-30T21:00:00.460Z","date_to":"2023-08-09T17:00:00.460Z","destination":"51cb4703-8895-439d-a2e0-c113d723ef29","is_favorite":true,"offers":["151d78ac-1f58-4379-af5c-11143f922ee0"],"type":"bus"},{"id":"a01b44e3-3695-4e28-a3fa-ce648e3a3027","base_price":5055,"date_from":"2023-07-30T21:00:00.460Z","date_to":"2023-08-10T13:00:00.460Z","destination":"63128c31-ebef-4a73-81f7-19b3e94ed3c5","is_favorite":true,"offers":[],"type":"sightseeing"}]'),x=JSON.parse('[{"id":"51cb4703-8895-439d-a2e0-c113d723ef29","description":"Venice - is a beautiful city","name":"Venice","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/10.jpg","description":"Venice with a beautiful old town"},{"src":"https://21.objects.pages.academy/static/destinations/18.jpg","description":"Venice middle-eastern paradise"},{"src":"https://21.objects.pages.academy/static/destinations/19.jpg","description":"Venice a true asian pearl"},{"src":"https://21.objects.pages.academy/static/destinations/14.jpg","description":"Venice with crowded streets"}]},{"id":"14422c85-bca6-48cc-9335-3132e08bcb4c","description":"Naples - with a beautiful old town","name":"Naples","pictures":[]},{"id":"63128c31-ebef-4a73-81f7-19b3e94ed3c5","description":"Milan - with an embankment of a mighty river as a centre of attraction","name":"Milan","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/15.jpg","description":"Milan famous for its crowded street markets with the best street food in Asia"}]},{"id":"3d539331-532d-4fd3-9c1a-a5541971efe8","description":"Berlin - with an embankment of a mighty river as a centre of attraction","name":"Berlin","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/14.jpg","description":"Berlin a true asian pearl"},{"src":"https://21.objects.pages.academy/static/destinations/7.jpg","description":"Berlin with an embankment of a mighty river as a centre of attraction"},{"src":"https://21.objects.pages.academy/static/destinations/13.jpg","description":"Berlin with a beautiful old town"},{"src":"https://21.objects.pages.academy/static/destinations/5.jpg","description":"Berlin with a beautiful old town"},{"src":"https://21.objects.pages.academy/static/destinations/5.jpg","description":"Berlin with an embankment of a mighty river as a centre of attraction"}]},{"id":"ce9767a8-c3ad-44f3-9273-f70c86c44ad4","description":"Amsterdam - a true asian pearl","name":"Amsterdam","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/15.jpg","description":"Amsterdam with crowded streets"}]},{"id":"ca6378f2-ee46-4b29-ac68-cd51d48b987f","description":"Berlin - with a beautiful old town","name":"Berlin","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/10.jpg","description":"Berlin with a beautiful old town"},{"src":"https://21.objects.pages.academy/static/destinations/19.jpg","description":"Berlin with a beautiful old town"},{"src":"https://21.objects.pages.academy/static/destinations/9.jpg","description":"Berlin with a beautiful old town"},{"src":"https://21.objects.pages.academy/static/destinations/4.jpg","description":"Berlin full of of cozy canteens where you can try the best coffee in the Middle East"}]},{"id":"3616737f-3bef-43d9-8c7d-5fbf11c6561b","description":"Vien - with an embankment of a mighty river as a centre of attraction","name":"Vien","pictures":[]},{"id":"71f97de3-6394-4123-9a72-c70fb9086d34","description":"Helsinki - is a beautiful city","name":"Helsinki","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/6.jpg","description":"Helsinki with a beautiful old town"},{"src":"https://21.objects.pages.academy/static/destinations/18.jpg","description":"Helsinki full of of cozy canteens where you can try the best coffee in the Middle East"}]},{"id":"46224961-67b1-4a72-add9-df15619c2e50","description":"Nagasaki - full of of cozy canteens where you can try the best coffee in the Middle East","name":"Nagasaki","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/3.jpg","description":"Nagasaki with a beautiful old town"},{"src":"https://21.objects.pages.academy/static/destinations/17.jpg","description":"Nagasaki in a middle of Europe"},{"src":"https://21.objects.pages.academy/static/destinations/20.jpg","description":"Nagasaki with a beautiful old town"}]},{"id":"3cec8c6b-dbb7-4fb2-ad7d-371c6e2c6f32","description":"Den Haag - full of of cozy canteens where you can try the best coffee in the Middle East","name":"Den Haag","pictures":[]}]'),C=JSON.parse('[{"type":"taxi","offers":[{"id":"8c3c0a5f-c6c2-44ac-a74c-a16b5d6d6db6","title":"Upgrade to a business class","price":50},{"id":"fc5c09cf-78e5-4428-b60a-518087945868","title":"Choose the radio station","price":96},{"id":"89c3959a-66e3-48fb-8f14-85e166d0658f","title":"Choose temperature","price":38},{"id":"f8837550-b774-4a0b-96b4-4d88581c6749","title":"Drive quickly, I\'m in a hurry","price":74},{"id":"56fb3bb7-0f78-42b7-bee2-1d07eb0abe4a","title":"Drive slowly","price":192}]},{"type":"bus","offers":[{"id":"02c931fd-4835-4fb1-91a5-cf5ed64e19a9","title":"Infotainment system","price":145},{"id":"1ab4e9e8-fb33-4a35-800a-910789102c26","title":"Order meal","price":60},{"id":"151d78ac-1f58-4379-af5c-11143f922ee0","title":"Choose seats","price":95}]},{"type":"train","offers":[{"id":"57267833-3b2e-45ca-beca-7dbed8475056","title":"Book a taxi at the arrival point","price":200},{"id":"f8c4b069-67ac-44ea-8c2a-fe973f1cf9fb","title":"Order a breakfast","price":173},{"id":"b9dcd348-b635-4c02-9df6-60f8cc568f00","title":"Wake up at a certain time","price":40}]},{"type":"flight","offers":[{"id":"b60ffc60-171c-4e4f-840b-6083f341947d","title":"Choose meal","price":103},{"id":"fc2a36a4-a049-4306-b5e7-695850cc8564","title":"Choose seats","price":63},{"id":"031252c0-9d5b-4ae0-a693-ed8572d6ee33","title":"Upgrade to comfort class","price":193},{"id":"176ae8b1-aa5c-446d-9ad2-445ba18c20c8","title":"Upgrade to business class","price":173},{"id":"90d941a4-f68d-4c5f-9c80-3dffe69d91ed","title":"Add luggage","price":127},{"id":"bc3cc4a3-20d2-41b9-a555-4c7323228d85","title":"Business lounge","price":156}]},{"type":"check-in","offers":[{"id":"790c560b-360d-45df-9e1c-ad10a744b234","title":"Choose the time of check-in","price":51},{"id":"b392225e-654a-41bb-bf54-f335b3d1ff8e","title":"Choose the time of check-out","price":82},{"id":"5abbbe87-96c4-4646-92b1-74db339a950a","title":"Add breakfast","price":163},{"id":"2803e7b9-a7fd-447c-8d43-9e8e86ecf27a","title":"Laundry","price":143},{"id":"8977cea4-1e96-4f76-b8e6-231ae269a8e5","title":"Order a meal from the restaurant","price":93}]},{"type":"sightseeing","offers":[]},{"type":"ship","offers":[{"id":"7492a6f3-2f37-4c79-ba3e-cc0260b892fd","title":"Choose meal","price":138},{"id":"80aa5689-e71f-4129-a0ed-0098246f6396","title":"Choose seats","price":132},{"id":"793ee434-a618-4e19-9e09-3324e83689a2","title":"Upgrade to comfort class","price":36},{"id":"903c92aa-75c9-4edb-bb51-28bfde53bf2e","title":"Upgrade to business class","price":200},{"id":"1228b78f-7437-4346-adcc-dd596a921b41","title":"Add luggage","price":159},{"id":"31563017-0362-4acd-929d-c963649af2b5","title":"Business lounge","price":31}]},{"type":"drive","offers":[{"id":"b9661f43-8b01-4993-93f1-74a33da7a7cf","title":"With automatic transmission","price":169},{"id":"7994ccc2-3740-46fa-9a9e-721772b54b33","title":"With air conditioning","price":90}]},{"type":"restaurant","offers":[{"id":"d69d21ff-7a0b-4bda-8773-87d16c87849b","title":"Choose live music","price":139},{"id":"e10440f3-9fe2-4ee0-834f-c0519a2108d5","title":"Choose VIP area","price":81}]}]'),j=class extends A{constructor(e){super(),this.id=e.id,this.basePrice=e.base_price,this.dateFrom=e.date_from,this.dateTo=e.date_to,this.destinationId=e.destination,this.isFavorite=e.is_favorite,this.offerIds=structuredClone(e.offers),this.type=e.type}};class E extends EventTarget{constructor(){super(),window.addEventListener("popstate",(()=>{this.dispatchEvent(new Event("change"))}))}setParams(e){const t=this.getUrl();t.search="",Object.keys(e).forEach((i=>{t.searchParams.set(i,e[i])})),window.history.pushState(null,"",t.href),this.dispatchEvent(new Event("change"))}getParams(){const e=this.getUrl();return Object.fromEntries(e.searchParams)}getUrl(){return new URL(window.location.href)}}const O=new E,B=class{constructor(e,t){this.view=e,this.model=t,this.navigation=O,this.navigation.addEventListener("change",this.onNavigationChange.bind(this)),window.queueMicrotask((()=>this.updateView()))}updateView(){}onNavigationChange(){this.updateView()}},L=class extends B{constructor(...e){super(...e)}updateView(){this.view.render()}},P=class extends B{constructor(...e){super(...e)}updateView(){const e=["everything","future","present","past"].map((e=>({value:e,isSelected:"everything"===e,isDisabled:"present"===e})));this.view.setState({items:e})}},F=class extends B{constructor(...e){super(...e)}updateView(){this.view.render()}},Y=class extends B{constructor(...e){super(...e)}updateView(){const e=["day","event","time","price","offers"].map((e=>({value:e,isSelected:"day"===e,isDisabled:"event"===e||"offers"===e})));this.view.setState({items:e})}},N=class extends B{constructor(...e){super(...e),this.view.addEventListener("open",this.onViewOpen.bind(this)),this.view.addEventListener("close",this.onViewClose.bind(this))}updateView(){const e=this.navigation.getParams(),t=this.model.getPoints(),i=this.model.getDestinations(),s=this.model.getOfferGroup(),a=t.map((t=>{const{offers:a}=s.find((e=>e.type===t.type));return{id:t.id,types:s.map((e=>({value:e.type,isSelected:e.type===t.type}))),destinations:i.map((e=>({...e,isSelected:e.id===t.destinationId}))),dateFrom:t.dateFrom,dateTo:t.dateTo,basePrice:t.basePrice,offers:a.map((e=>({...e,isSelected:t.offerIds?.includes(e.id)}))),isFavorite:t.isFavorite,isEditable:e.edit===t.id}}));this.view.setState({items:a})}onViewOpen(e){const t=this.navigation.getParams();t.edit=e.target.state.id,this.navigation.setParams(t)}onViewClose(){const e=this.navigation.getParams();delete e.edit,this.navigation.setParams(e)}},I=new class extends A{constructor(){super(),this.points=[],this.destinations=[],this.offerGroups=[]}async ready(){this.points=Z,this.destinations=x,this.offerGroups=C}getPoints(){return this.points.map((e=>new j(e)))}getDestinations(){return structuredClone(this.destinations)}getOfferGroup(){return structuredClone(this.offerGroups)}};I.ready().then((()=>{new L(document.querySelector("brief-view"),I),new P(document.querySelector("filter-view"),I),new F(document.querySelector("add-button-view"),I),new Y(document.querySelector("sort-view"),I),new N(document.querySelector("list-view"),I)}))})()})();
//# sourceMappingURL=bundle.c203b980d695afbe0710.js.map