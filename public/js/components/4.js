(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{100:function(t,n,a){"use strict";a.r(n);var e={name:"FriendList",components:{LeftCard:a(22).a},created:function(){this.navigateTo(this.$route.meta.navSequence)},data:function(){return{navSequence:1}},methods:{navigateTo:function(t){this.navSequence=t}}},s=(a(33),a(0)),i=Object(s.a)(e,(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row mt-4"},[a("div",{staticClass:"col-lg-3"},[a("LeftCard")],1),t._v(" "),a("div",{staticClass:"col-lg-9 px-0 px-lg-2"},[a("div",{staticClass:"mb-2 ml-3"},[a("router-link",{staticClass:"anchor-link",attrs:{to:"/friends/list"},nativeOn:{click:function(n){return t.navigateTo(1)}}},[a("span",{staticClass:"badge badge-pill px-3 py-2",class:{"bg-secondary":1==t.navSequence}},[t._v(": Friends")])]),t._v(" "),a("router-link",{staticClass:"anchor-link",attrs:{to:"/friends/requests"},nativeOn:{click:function(n){return t.navigateTo(2)}}},[a("span",{staticClass:"badge badge-pill px-3 py-2",class:{"bg-secondary":2==t.navSequence}},[t._v(": Requests")])]),t._v(" "),a("router-link",{staticClass:"anchor-link",attrs:{to:"/friends/sent-requests"},nativeOn:{click:function(n){return t.navigateTo(3)}}},[a("span",{staticClass:"badge badge-pill px-3 py-2",class:{"bg-secondary":3==t.navSequence}},[t._v(": Sent Requests")])])],1),t._v(" "),a("router-view")],1)])])}),[],!1,null,"32ecbf90",null);n.default=i.exports},33:function(t,n,a){"use strict";var e=a(7);a.n(e).a},34:function(t,n,a){(t.exports=a(2)(!1)).push([t.i,".anchor-link[data-v-32ecbf90] {\n  color: var(--primary-color-lighter);\n}\n.anchor-link[data-v-32ecbf90]:hover {\n  color: var(--primary-color-darker);\n}",""])},7:function(t,n,a){var e=a(34);"string"==typeof e&&(e=[[t.i,e,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a(3)(e,s);e.locals&&(t.exports=e.locals)}}]);