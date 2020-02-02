(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{102:function(a,t,s){"use strict";s.r(t);var r={name:"Register",components:{PleaseWaitLoader:s(1).a},data:function(){return{name:"",email:"",password:"",password_confirmation:"",loadingStatus:!1,errors:""}},methods:{register:function(){var a=this;a.loadingStatus=!0,axios.post("/api/register",{name:a.name,email:a.email,password:a.password,password_confirmation:a.password_confirmation}).then((function(t){console.log(t.data),a.errors="",a.loadingStatus=!1,a.$router.push({name:"login"})})).catch((function(t){a.errors=t.response.data.errors,a.loadingStatus=!1}))}}},e=s(0),o=Object(e.a)(r,(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-lg-4 mt-5"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("h4",[a._v("Register account")]),a._v(" "),s("hr"),a._v(" "),s("form",{on:{submit:function(t){return t.preventDefault(),a.register(t)}}},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"name"}},[a._v("Name")]),a._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:a.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",id:"name",placeholder:"Enter name"},domProps:{value:a.name},on:{input:function(t){t.target.composing||(a.name=t.target.value)}}}),a._v(" "),a.errors.name?s("small",{staticClass:"form-text text-danger"},[a._v(a._s(String(a.errors.name)))]):a._e()]),a._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"email"}},[a._v("Email address")]),a._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:a.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"email","aria-describedby":"emailHelp",placeholder:"Enter email"},domProps:{value:a.email},on:{input:function(t){t.target.composing||(a.email=t.target.value)}}}),a._v(" "),a.errors.email?s("small",{staticClass:"form-text text-danger",attrs:{id:"emailHelp"}},[a._v(a._s(String(a.errors.email)))]):a._e()]),a._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"password"}},[a._v("Password")]),a._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:a.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Password"},domProps:{value:a.password},on:{input:function(t){t.target.composing||(a.password=t.target.value)}}}),a._v(" "),a.errors.password?s("small",{staticClass:"form-text text-danger"},[a._v(a._s(String(a.errors.password)))]):a._e()]),a._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"password_confirmation"}},[a._v("Confirm password")]),a._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:a.password_confirmation,expression:"password_confirmation"}],staticClass:"form-control",attrs:{type:"password",id:"password_confirmation",placeholder:"Confirm password"},domProps:{value:a.password_confirmation},on:{input:function(t){t.target.composing||(a.password_confirmation=t.target.value)}}}),a._v(" "),a.errors.password_confirmation?s("small",{staticClass:"form-text text-danger"},[a._v(a._s(String(a.errors.password_confirmation)))]):a._e()]),a._v(" "),a.loadingStatus?a._e():s("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit"}},[a._v("Register")]),a._v(" "),a.loadingStatus?s("div",{staticClass:"d-flex align-items-center"},[s("PleaseWaitLoader",{attrs:{message:"Processing. . ."}})],1):a._e()]),a._v(" "),s("hr"),a._v(" "),s("span",{staticClass:"d-block text-muted mt-3"},[a._v("Have an account? Click "),s("router-link",{staticClass:"anchorColor",attrs:{to:{name:"login"}}},[a._v("here")]),a._v(" to sign in")],1)])])])])])}),[],!1,null,null,null);t.default=o.exports}}]);