(function(e){function t(t){for(var r,a,i=t[0],s=t[1],u=t[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2cd3a1f0":"873c1076","chunk-783da660":"93f4e9f0","chunk-ebcf9598":"6076f629"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-2cd3a1f0":1,"chunk-783da660":1,"chunk-ebcf9598":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2cd3a1f0":"21dced54","chunk-783da660":"10e99c53","chunk-ebcf9598":"24db0ae3"}[e]+".css",o=s.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],f.parentNode.removeChild(f),n(c)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/todo/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"27dc":function(e,t,n){},"3b64":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app grid",attrs:{id:"app"}},[n("Preloader",{attrs:{show:e.preloader}}),n("header",{staticClass:"app-header"},[n("TheHeader")],1),n("main",{staticClass:"app-main"},[n("router-view")],1)],1)},o=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header w_max flex flex_between flex_center_vertical"},[n("p",{staticClass:"login"},[e._v(e._s(e.login))]),n("button",{directives:[{name:"show",rawName:"v-show",value:e.path,expression:"path"}],staticClass:"btn btn_create icon-create",on:{click:e.$_header_pushAdd}})])},i=[],s={data:function(){return{login:"todo"}},computed:{path:function(){return"/"===this.$route.path}},methods:{$_header_pushAdd:function(){this.$router.push("/edit")}}},u=s,l=(n("fa3f"),n("2877")),d=Object(l["a"])(u,c,i,!1,null,"cdf068f2",null),f=d.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("section",{staticClass:"preloader grid grid_center grid_center_vertical"},[n("div",{staticClass:"preloader__content"},[n("h1",{staticClass:"preloader__message"},[e._v(e._s(e.message))])])]):e._e()},h=[],m={props:{show:Boolean},data:function(){return{message:"loading"}}},v=m,b=(n("efe0"),Object(l["a"])(v,p,h,!1,null,"5e789c44",null)),g=b.exports,_={components:{TheHeader:f,Preloader:g},data:function(){return{preloader:!1}}},w=_,k=(n("5c0b"),Object(l["a"])(w,a,o,!1,null,null,null)),y=k.exports,x=(n("d3b7"),n("8c4f")),O=n("2f62"),E=(n("96cf"),n("1da1")),L=n("59ca"),j=n.n(L),N={apiKey:"AIzaSyB0I7s4clpck9gdCn2Sa14l8QXOjcRvmgA",authDomain:"todo-585ab.firebaseapp.com",databaseURL:"https://todo-585ab.firebaseio.com",projectId:"todo-585ab",storageBucket:"todo-585ab.appspot.com",messagingSenderId:"192811257162",appId:"1:192811257162:web:f0961bed57a35858b4c5b3"},T={state:{loader:0},mutations:{upLoader:function(e){e.loader=++e.loader},downLoader:function(e){e.loader=--e.loader}},actions:{FIREBASE__INIT:function(e){var t=e.dispatch,n=e.getters;return Object(E["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.initializeApp(N);case 3:n.isNoteList||t("NOTE__LOADING"),e.next=10;break;case 6:throw e.prev=6,e.t0=e["catch"](0),console.error(e.t0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))()}},getters:{getLoader:function(e){return e.loader}}},C={state:{noteList:[]},mutations:{setList:function(e,t){e.noteList=t}},actions:{NOTE__LOADING:function(e){var t=e.commit;return Object(E["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.database().ref("/note").on("value",(function(e){t("setList",e.val())}));case 3:e.next=9;break;case 5:throw e.prev=5,e.t0=e["catch"](0),console.error(e.t0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,5]])})))()},NOTE__ADD:function(e,t){e.commit;return Object(E["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.database().ref("/note").push(t);case 3:e.next=9;break;case 5:throw e.prev=5,e.t0=e["catch"](0),console.error(e.t0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,5]])})))()},NOTE__DELETE:function(e,t){e.commit;return Object(E["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.database().ref("/note").child(t).remove();case 3:e.next=9;break;case 5:throw e.prev=5,e.t0=e["catch"](0),console.error(e.t0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,5]])})))()},NOTE__UPDATE:function(e,t){e.commit;return Object(E["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.database().ref("/note").child(t.id).set(t.note);case 3:e.next=9;break;case 5:throw e.prev=5,e.t0=e["catch"](0),console.error(e.t0.message),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,5]])})))()}},getters:{getNoteList:function(e){return e.noteList},getNote:function(e){return function(t){return e.noteList[t]}},isNoteList:function(e){return e.noteList.lenght>0}}};r["a"].use(O["a"]);var A=new O["a"].Store({modules:{init:T,noteList:C}});r["a"].use(x["a"]);var P=[{path:"/",name:"home",component:function(){return Promise.all([n.e("chunk-2cd3a1f0"),n.e("chunk-ebcf9598")]).then(n.bind(null,"bb51"))}},{path:"/edit/:id",name:"edit",component:function(){return Promise.all([n.e("chunk-2cd3a1f0"),n.e("chunk-783da660")]).then(n.bind(null,"1071"))},props:!0},{path:"/edit",name:"create",component:function(){return Promise.all([n.e("chunk-2cd3a1f0"),n.e("chunk-783da660")]).then(n.bind(null,"1071"))},props:!0}],S=new x["a"]({mode:"history",base:"/todo/",routes:P}),I=S;n("27dc"),n("66ce");r["a"].config.productionTip=!1,new r["a"]({router:I,store:A,beforeCreate:function(){this.$store.dispatch("FIREBASE__INIT")},render:function(e){return e(y)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"75dc":function(e,t,n){},"9c0c":function(e,t,n){},efe0:function(e,t,n){"use strict";var r=n("3b64"),a=n.n(r);a.a},fa3f:function(e,t,n){"use strict";var r=n("75dc"),a=n.n(r);a.a}});
//# sourceMappingURL=app.186744f6.js.map