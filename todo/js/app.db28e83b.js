(function(t){function e(e){for(var r,a,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-859ea886":"e8e84633"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-859ea886":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-859ea886":"70a38a8c"}[t]+".css",o=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===r||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/todo/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"04ef":function(t,e,n){"use strict";var r=n("5ba8"),a=n.n(r);a.a},"0954":function(t,e,n){"use strict";var r=n("5af9"),a=n.n(r);a.a},"0a3e":function(t,e,n){},"0d47":function(t,e,n){},1463:function(t,e,n){"use strict";var r=n("4408"),a=n.n(r);a.a},"22da":function(t,e,n){"use strict";var r=n("5cfd"),a=n.n(r);a.a},"27dc":function(t,e,n){},"3a11":function(t,e,n){"use strict";var r=n("f334"),a=n.n(r);a.a},4408:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todo__container grid h_max",attrs:{id:"app"}},[n("header",{staticClass:"todo__header grid grid_vertical_center"},[n("todo-header")],1),n("main",{staticClass:"todo__main"},[n("router-view")],1),n("preloader",{attrs:{processing:t.loader}})],1)},o=[],i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"logo"},[n("span",[t._v("t")]),n("span",[t._v("odo")])])}],c=(n("9fed"),n("2877")),u={},l=Object(c["a"])(u,i,s,!1,null,"a7af4328",null),d=l.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"loader"}},[t.processing?n("section",{staticClass:"preloader grid grid_center grid_vertical_center"},[n("div",{staticClass:"content grid"},[n("span",{staticClass:"ball"}),n("h1",{staticClass:"preloader__text"},[t._v("loading")])])]):t._e()])},p=[],m={props:{processing:Boolean},data:function(){return{}}},h=m,_=(n("22da"),Object(c["a"])(h,f,p,!1,null,"59c6766e",null)),v=_.exports,g={components:{"todo-header":d,preloader:v},data:function(){return{loading:!0}},computed:{loader:function(){return this.loading}},created:function(){var t=this;setTimeout((function(e){t.loading=!1}),3e3)}},b=g,w=(n("04ef"),Object(c["a"])(b,a,o,!1,null,"346f4466",null)),E=w.exports,C=(n("27dc"),n("d3b7"),n("8c4f")),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"todo__content w_max grid"},[n("div",{staticClass:"nav__control"},[n("nav-control")],1),n("ul",{staticClass:"list grid"},t._l(t.todoList,(function(t,e){return n("li",{key:e,staticClass:"list__item"},[n("list-item",{attrs:{options:t,id:e}})],1)})),0)])},y=[],O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"control shadow w_max flex flex_end"},[n("div",{staticClass:"control__item"},[n("button",{staticClass:"btn btn_radius icon-add btn_add",on:{click:t.add}})])])},k=[],j={methods:{add:function(){this.$router.push("/edit")}}},$=j,L=(n("823d"),Object(c["a"])($,O,k,!1,null,"8272b3d2",null)),T=L.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"article grid w_max"},[n("div",{staticClass:"article__header"},[n("article-header",{attrs:{title:t.article.title}})],1),n("div",{staticClass:"article__body"},[n("article-body",{attrs:{content:t.article.content}})],1),n("div",{staticClass:"article__footer"},[n("article-footer",{attrs:{id:t.id}})],1)])},S=[],N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header shadow h_max grid grid_vertical_center"},[n("h2",{staticClass:"header__text"},[t._v(t._s(t.name))])])},R=[],P={props:["title"],data:function(){return{name:this.title}}},I=P,D=(n("626a"),Object(c["a"])(I,N,R,!1,null,"73d4ae4c",null)),B=D.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"body"},[n("ul",{staticClass:"list"},t._l(t.minList,(function(e,r){return n("li",{key:r,staticClass:"item grid grid_vertical_center"},[n("span",{staticClass:"item__text"},[t._v(t._s(e.text))]),e.status?n("span",{staticClass:"item__status icon-check"}):t._e()])})),0)])},W=[],F=(n("fb6a"),{props:["content"],data:function(){return{list:this.content}},computed:{minList:function(){return this.list.slice(0,3)}}}),U=F,q=(n("3a11"),Object(c["a"])(U,M,W,!1,null,"ac1f13f8",null)),z=q.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer shadow h_max grid grid_vertical_center"},[n("div",{staticClass:"nav w_max flex flex_end"},[n("div",{staticClass:"button_group"},[n("button",{staticClass:"btn nav_btn btn_radius icon-edit",on:{click:t.edit}}),n("button",{staticClass:"btn nav_btn btn_radius icon-delete",on:{click:t.showWindow}})])]),n("modal",{attrs:{options:t.options},on:{down:t.showWindow}},[n("warning",{attrs:{options:t.warning},on:{cancel:t.showWindow,confirm:t.confirm}})],1)],1)},J=[],K=n("aff5"),Q=n("dcd2"),X={components:{modal:K["a"],warning:Q["a"]},props:["id"],data:function(){return{options:{show:!1},warning:{message:"Данная заметка будет удалена навсегда!"}}},methods:{showWindow:function(){this.options.show=!this.options.show},confirm:function(){this.$store.dispatch("DELETE_NOTE",this.id)},edit:function(){this.$router.push("/edit/".concat(this.id))}}},G=X,V=(n("7b8a"),Object(c["a"])(G,H,J,!1,null,"4d8b5626",null)),Y=V.exports,Z={props:["options","id"],data:function(){return{article:this.options}},components:{"article-header":B,"article-body":z,"article-footer":Y}},tt=Z,et=(n("1463"),Object(c["a"])(tt,A,S,!1,null,"9d6396a2",null)),nt=et.exports,rt={components:{"nav-control":T,"list-item":nt},computed:{todoList:function(){return this.$store.getters.getList}}},at=rt,ot=(n("f3d3"),Object(c["a"])(at,x,y,!1,null,"2c0d20e4",null)),it=ot.exports;r["a"].use(C["a"]);var st=[{path:"/",name:"Home",component:it},{path:"/edit/:id",name:"edit",component:function(){return n.e("chunk-859ea886").then(n.bind(null,"a2c6"))},props:!0},{path:"/edit",name:"create",component:function(){return n.e("chunk-859ea886").then(n.bind(null,"a2c6"))},props:!0}],ct=new C["a"]({mode:"history",base:"/todo/",routes:st}),ut=ct,lt=n("2f62"),dt=(n("a434"),n("96cf"),n("1da1")),ft=n("59ca"),pt=n.n(ft),mt={state:{list:[]},mutations:{setList:function(t,e){t.list=e},deleteNote:function(t,e){t.list.splice(e,1)}},actions:{DELETE_NOTE:function(t,e){var n=t.commit;return Object(dt["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n("clearError"),t.prev=1,pt.a.database().ref("/note/".concat(e)).remove(),t.next=9;break;case 5:throw t.prev=5,t.t0=t["catch"](1),n("setError",t.t0.message),t.t0;case 9:case"end":return t.stop()}}),t,null,[[1,5]])})))()},ADD_NOTE:function(t,e){var n=t.commit;return Object(dt["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n("clearError"),t.prev=1,pt.a.database().ref("/note").push(e),t.next=9;break;case 5:throw t.prev=5,t.t0=t["catch"](1),n("setError",t.t0.message),t.t0;case 9:case"end":return t.stop()}}),t,null,[[1,5]])})))()},UPDATE_NOTE:function(t,e){var n=t.commit;return Object(dt["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n("clearError"),t.prev=1,pt.a.database().ref("/note/".concat(e.id)).update(e.note),t.next=9;break;case 5:throw t.prev=5,t.t0=t["catch"](1),n("setError",t.t0.message),t.t0;case 9:case"end":return t.stop()}}),t,null,[[1,5]])})))()}},getters:{getList:function(t){return t.list}}},ht={apiKey:"AIzaSyB0I7s4clpck9gdCn2Sa14l8QXOjcRvmgA",authDomain:"todo-585ab.firebaseapp.com",databaseURL:"https://todo-585ab.firebaseio.com",projectId:"todo-585ab",storageBucket:"todo-585ab.appspot.com",messagingSenderId:"192811257162",appId:"1:192811257162:web:f0961bed57a35858b4c5b3"},_t={state:{},mutations:{},actions:{FIREBASE_INIT:function(t){var e=t.commit,n=t.dispatch;return Object(dt["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e("clearError"),t.prev=1,t.next=4,pt.a.initializeApp(ht);case 4:n("LOAD_NOTE"),t.next=11;break;case 7:throw t.prev=7,t.t0=t["catch"](1),e("setError",t.t0.message),t.t0;case 11:case"end":return t.stop()}}),t,null,[[1,7]])})))()},LOAD_NOTE:function(t){var e=t.commit;return Object(dt["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e("clearError"),t.prev=1,t.next=4,pt.a.database().ref("/note");case 4:n=t.sent,n.on("value",(function(t){e("setList",t.val())})),t.next=12;break;case 8:throw t.prev=8,t.t0=t["catch"](1),e("setError",t.t0.message),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,8]])})))()}},getters:{}},vt={state:{processing:!1,error:null},mutations:{setProcessing:function(t,e){t.processing=e},setError:function(t,e){t.error=e},clearError:function(t){t.error=null}},getters:{getError:function(t){return t.error},getProcessing:function(t){return t.processing}}};r["a"].use(lt["a"]);var gt=new lt["a"].Store({modules:{common:vt,init:_t,todoList:mt}});n("66ce");r["a"].config.productionTip=!1,new r["a"]({router:ut,store:gt,beforeCreate:function(){this.$store.dispatch("FIREBASE_INIT")},render:function(t){return t(E)}}).$mount("#app")},"5af9":function(t,e,n){},"5ba8":function(t,e,n){},"5cfd":function(t,e,n){},"5eb5":function(t,e,n){},"626a":function(t,e,n){"use strict";var r=n("ad69"),a=n.n(r);a.a},"7b8a":function(t,e,n){"use strict";var r=n("9d98"),a=n.n(r);a.a},"823d":function(t,e,n){"use strict";var r=n("0d47"),a=n.n(r);a.a},"9d98":function(t,e,n){},"9fed":function(t,e,n){"use strict";var r=n("f4ef"),a=n.n(r);a.a},ad69:function(t,e,n){},aff5:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"modal"}},[t.open?n("div",{staticClass:"modal-space grid grid_vertical_center grid_center",on:{click:function(e){return t.down(e)}}},[n("div",{staticClass:"window grid"},[t._t("default")],2)]):t._e()])},a=[],o={props:["options"],data:function(){return{}},computed:{open:function(){return this.options.show}},methods:{down:function(t){t.target.classList.contains("modal-space")&&this.$emit("down",!0)}}},i=o,s=(n("0954"),n("2877")),c=Object(s["a"])(i,r,a,!1,null,"51a42c9c",null);e["a"]=c.exports},dcd2:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"warning grid h_max"},[n("div",{staticClass:"warning__body grid grid_vertical_center grid_center"},[n("h3",{staticClass:"warning__message"},[t._v(t._s(t.message))])]),n("div",{staticClass:"warning__footer flex flex_end"},[n("div",{staticClass:"button_group"},[n("button",{staticClass:"btn btn_big btn_warning",on:{click:t.confirm}},[t._v("ОК")]),n("button",{staticClass:"btn btn_big btn_dark",on:{click:t.cancel}},[t._v("Отмена")])])])])},a=[],o={props:["options"],data:function(){return{message:this.options.message}},methods:{cancel:function(){this.$emit("cancel",!0)},confirm:function(){this.$emit("confirm",!0),this.cancel()}}},i=o,s=(n("e4b6"),n("2877")),c=Object(s["a"])(i,r,a,!1,null,"de2826be",null);e["a"]=c.exports},e4b6:function(t,e,n){"use strict";var r=n("5eb5"),a=n.n(r);a.a},f334:function(t,e,n){},f3d3:function(t,e,n){"use strict";var r=n("0a3e"),a=n.n(r);a.a},f4ef:function(t,e,n){}});
//# sourceMappingURL=app.db28e83b.js.map