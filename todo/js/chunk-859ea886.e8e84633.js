(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-859ea886"],{a2c6:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"todo__edit grid h_max"},[n("div",{staticClass:"edit__header shadow text_center grid grid_vertical_center"},[n("edit-title",{attrs:{options:t.note}}),n("button",{staticClass:"btn btn_radius btn_add",on:{click:t.contentAdd}},[t._v("+")])],1),n("div",{staticClass:"edit__body grid"},[n("div",{staticClass:"card__body"},[n("edit-form",{attrs:{content:t.note.content}})],1),n("div",{staticClass:"card__footer flex flex_end"},[n("div",{staticClass:"button_group"},[t.id?t._e():n("button",{staticClass:"btn btn_big btn_warning",on:{click:t.noteSave}},[t._v("Добавить")]),t.id?n("button",{staticClass:"btn btn_big btn_warning",on:{click:t.noteUpdate}},[t._v("Сохронить")]):t._e(),t.id?n("button",{staticClass:"btn btn_big btn_dark",on:{click:t.deleteShowModal}},[t._v("Удалить")]):t._e(),n("button",{staticClass:"btn btn_big btn_dark",on:{click:t.cancelShowModel}},[t._v("Отменить")])])])]),n("modal",{attrs:{options:t.modalCancel},on:{down:t.cancelShowModel}},[n("warning",{attrs:{options:t.warningCancel},on:{cancel:t.cancelShowModel,confirm:t.cancelConfirm}})],1),n("modal",{attrs:{options:t.deleteModal},on:{down:t.deleteShowModal}},[n("warning",{attrs:{options:t.deleteWarning},on:{cancel:t.deleteShowModal,confirm:t.deleteConfirm}})],1)],1)},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form grid"},[n("ul",t._l(t.content,(function(e,i){return n("li",{key:i},[n("edit-input",{attrs:{options:e},on:{"delete:content":function(e){return t.del(i)}}})],1)})),0)])},a=[],c=(n("a434"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"edit__input grid",attrs:{id:t.index}},[n("div",{staticClass:"input__left grid"},[t.showInput?t._e():n("label",{staticClass:"label__control",attrs:{for:""},on:{dblclick:t.openInput}},[t._v(t._s(t.options.text))]),t.showInput?n("input",{directives:[{name:"model",rawName:"v-model",value:t.options.text,expression:"options.text"}],staticClass:"control",attrs:{type:"text"},domProps:{value:t.options.text},on:{dblclick:t.openInput,input:function(e){e.target.composing||t.$set(t.options,"text",e.target.value)}}}):t._e()]),n("div",{staticClass:"input__right grid grid_vertical_center grid_center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.options.status,expression:"options.status"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.options.status)?t._i(t.options.status,null)>-1:t.options.status},on:{change:function(e){var n=t.options.status,i=e.target,s=!!i.checked;if(Array.isArray(n)){var o=null,a=t._i(n,o);i.checked?a<0&&t.$set(t.options,"status",n.concat([o])):a>-1&&t.$set(t.options,"status",n.slice(0,a).concat(n.slice(a+1)))}else t.$set(t.options,"status",s)}}})]),n("div",{staticClass:"input__right grid grid_vertical_center grid_center"},[n("button",{staticClass:"icon-delete btn btn_radius btn_input",on:{click:function(e){return e.preventDefault(),t.contentDelete(e)}}})])])}),l=[],r={props:["index","options"],data:function(){return{showInput:!1}},methods:{openInput:function(){this.showInput=!this.showInput},contentDelete:function(){this.$emit("delete:content",!0)}}},d=r,u=(n("c8a0"),n("2877")),p=Object(u["a"])(d,c,l,!1,null,"14ee0638",null),h=p.exports,_={props:["content"],components:{"edit-input":h},data:function(){return{list:this.content}},methods:{del:function(t){this.list.splice(t,1)}}},f=_,v=Object(u["a"])(f,o,a,!1,null,null,null),b=v.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title grid"},[t.show?n("label",{staticClass:"title__text",attrs:{for:"title"},on:{dblclick:t.open}},[t._v(t._s(t.options.title))]):t._e(),t.show?t._e():n("input",{directives:[{name:"model",rawName:"v-model",value:t.options.title,expression:"options.title"}],staticClass:"title__input",attrs:{id:"title",type:"text"},domProps:{value:t.options.title},on:{dblclick:t.open,input:function(e){e.target.composing||t.$set(t.options,"title",e.target.value)}}})])},g=[],w={props:["options"],data:function(){return{show:!0}},methods:{open:function(){this.show=!this.show}}},C=w,x=(n("ee38"),Object(u["a"])(C,m,g,!1,null,"59d51398",null)),k=x.exports,$=n("aff5"),S=n("dcd2"),y={props:["id"],components:{"edit-form":b,"edit-title":k,modal:$["a"],warning:S["a"]},data:function(){return{note:null,modalCancel:{show:!1},warningCancel:{message:"Вы хотите покинуть эту страницу ?"},deleteModal:{show:!1},deleteWarning:{message:"Данная заметка будет удалена на всегда !"}}},methods:{initNote:function(){var t=this.$store.getters.getList;this.id?(this.note=JSON.parse(JSON.stringify(t[this.id])),this.history.push(JSON.parse(JSON.stringify(this.note)))):this.note={title:"Новая заметка",content:[{text:"Новая задача",status:!1}]}},contentAdd:function(){this.note.content.push({text:"Новая задача",status:!1})},cancelShowModel:function(){this.modalCancel.show=!this.modalCancel.show},cancelConfirm:function(){this.$router.push("/")},deleteShowModal:function(){this.deleteModal.show=!this.deleteModal.show},deleteConfirm:function(){this.$store.dispatch("DELETE_NOTE",this.id),this.$router.push("/")},noteSave:function(){this.$store.dispatch("ADD_NOTE",this.note),this.$router.push("/")},noteUpdate:function(){this.$store.dispatch("UPDATE_NOTE",{note:this.note,id:this.id}),this.history.push(JSON.parse(JSON.stringify(this.note)))}},created:function(){this.initNote()}},N=y,O=(n("cd02"),Object(u["a"])(N,i,s,!1,null,"07a32cd3",null));e["default"]=O.exports},b376:function(t,e,n){},c8a0:function(t,e,n){"use strict";var i=n("e170"),s=n.n(i);s.a},cd02:function(t,e,n){"use strict";var i=n("b376"),s=n.n(i);s.a},dc55:function(t,e,n){},e170:function(t,e,n){},ee38:function(t,e,n){"use strict";var i=n("dc55"),s=n.n(i);s.a}}]);
//# sourceMappingURL=chunk-859ea886.e8e84633.js.map