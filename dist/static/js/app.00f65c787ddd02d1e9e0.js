webpackJsonp([1],{"+o+d":function(t,a,s){t.exports=s.p+"static/img/icon-01.5c78bfa.png"},"/KV2":function(t,a){},"1/oy":function(t,a){},"1YoK":function(t,a,s){t.exports=s.p+"static/img/icon-03.cc06c93.png"},"42/e":function(t,a){},"5gre":function(t,a){},"9M+g":function(t,a){},GfHa:function(t,a){},Id91:function(t,a){},J7VE:function(t,a,s){t.exports=s.p+"static/img/tic-logo.5d186c2.png"},Jmt5:function(t,a){},NHnr:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("/5sW"),o=s("/ocq"),r=s("//Fk"),i=s.n(r),n=s("NYxO"),l=s("mtWM"),c=s.n(l);e.default.use(n.a);var d=new n.a.Store({state:{status:"",token:localStorage.getItem("token")||"",user:{}},mutations:{auth_request:function(t){t.status="loading"},auth_success:function(t,a,s){t.status="success",t.token=a,t.user=s},auth_error:function(t){t.status="error"},logout:function(t){t.status="",t.token=""}},actions:{login:function(t,a){var s=t.commit;return new i.a(function(t,e){s("auth_request"),c()({url:"http://localhost:5000/login",data:a,method:"POST"}).then(function(a){var e=a.data.token,o=a.data.user;localStorage.setItem("token",e),c.a.defaults.headers.common.Authorization=e,s("auth_success",e,o),t(a)}).catch(function(t){s("auth_error"),localStorage.removeItem("token"),e(t)})})},register:function(t,a){var s=t.commit;return new i.a(function(t,e){s("auth_request"),c()({url:"http://localhost:5000/register",data:a,method:"POST"}).then(function(a){var e=a.data.token,o=a.data.user;localStorage.setItem("token",e),c.a.defaults.headers.common.Authorization=e,s("auth_success",e,o),t(a)}).catch(function(t){s("auth_error",t),localStorage.removeItem("token"),e(t)})})},logout:function(t){var a=t.commit;return new i.a(function(t,s){a("logout"),localStorage.removeItem("token"),delete c.a.defaults.headers.common.Authorization,t()})}},getters:{isLoggedIn:function(t){return!!t.token},authStatus:function(t){return t.status}}}),v={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{staticClass:"navbar navbar-expand-lg fixed-top",attrs:{id:"nav"}},[s("div",{staticClass:"container-fluid"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[t._m(2),t._v(" "),s("ul",{staticClass:"nav navbar-nav navbar-right"},[s("li",{staticClass:"nav-item dropdown pull-right"},[s("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Support\n          ")]),t._v(" "),s("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),t._v(" "),s("router-link",{attrs:{to:"/about"}},[s("a",{staticClass:"dropdown-item"},[t._v("Another action")])]),t._v(" "),s("div",{staticClass:"dropdown-divider"}),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])],1)]),t._v(" "),s("li",{staticClass:"nav-item"},[s("router-link",{attrs:{to:"/login"}},[s("a",{staticClass:"nav-link"},[t._v("Login")])])],1),t._v(" "),s("li",{staticClass:"nav-item"},[s("router-link",{attrs:{to:"/login"}},[s("a",{staticClass:"button is-primary learn-more",attrs:{href:""}},[t._v("Create free account")])])],1)])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[a("img",{staticStyle:{width:"200px"},attrs:{src:s("ioJ2")}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon",staticStyle:{border:"1px solid grey"}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",{staticClass:"navbar-nav mr-auto"},[s("li",{staticClass:"nav-item dropdown"},[s("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Why Bluform\n          ")]),t._v(" "),s("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),t._v(" "),s("div",{staticClass:"dropdown-divider"}),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])])]),t._v(" "),s("li",{staticClass:"nav-item active"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Pricing "),s("span",{staticClass:"sr-only"},[t._v("(current)")])])]),t._v(" "),s("li",{staticClass:"nav-item dropdown"},[s("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Learn\n          ")]),t._v(" "),s("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),t._v(" "),s("div",{staticClass:"dropdown-divider"}),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])])])])}]};var u={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",[s("div",{attrs:{id:"footer"}},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-2 col-xs-12 col-sm-12"},[s("h3",[t._v("Why Blueform")]),t._v(" "),s("p",[t._v("For Individuals"),s("br"),t._v("For Non-Profits "),s("br"),t._v("For Businesses")])]),t._v(" "),s("div",{staticClass:"col-md-2 col-xs-12 col-sm-12"},[s("h3",[t._v("Developers")]),t._v(" "),s("p",[t._v("Status page")])]),t._v(" "),s("div",{staticClass:"col-md-2 col-xs-12 col-sm-12"},[s("h3",[t._v("Pricing")]),t._v(" "),s("p",[t._v("Nigeria")])]),t._v(" "),s("div",{staticClass:"col-md-2 col-xs-12 col-sm-12"},[s("h3",[t._v("Learn")]),t._v(" "),s("p",[t._v("Blog"),s("br"),t._v("Guides")])]),t._v(" "),s("div",{staticClass:"col-md-2 col-xs-12 col-sm-12"},[s("h3",[t._v("Support")]),t._v(" "),s("p",[t._v("Help Desk"),s("br"),t._v("Contact us")])]),t._v(" "),s("div",{staticClass:"col-md-2 col-xs-12 col-sm-12"},[s("h3",[t._v("About")]),t._v(" "),s("p",[t._v("Company "),s("br"),t._v("Careers "),s("br"),t._v("Media Kit "),s("br"),t._v("Privacy & Terms")])])]),s("hr"),t._v(" "),s("div",{staticClass:"row footer-bottom"},[s("div",{staticClass:"col-md-3 col-xs-12 col-sm-12"},[s("h3",[t._v("Contact")]),t._v(" "),s("p",[t._v("hellow@blueform.co")])]),t._v(" "),s("div",{staticClass:"col-md-3 col-xs-12 col-sm-12"},[s("h3",[t._v("Lagos")]),t._v(" "),s("p",[t._v("Work station Maryland Mall,"),s("br"),t._v(" Maryland, Lagos.")])]),t._v(" "),s("div",{staticClass:"col-md-6 col-xs-12 col-sm-12",staticStyle:{"text-align":"right"}})])])])])}]},m={name:"Home",components:{NavMenu:s("VU/8")({name:"NavMenu"},v,!1,function(t){s("5gre")},"data-v-3966ed2c",null).exports,FooterSection:s("VU/8")({name:"FooterSection"},u,!1,null,null,null).exports}},_={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"home-page"}},[s("nav-menu"),s("hr"),t._v(" "),t._m(0),s("hr"),t._v(" "),t._m(1),s("hr"),t._v(" "),t._m(2),s("hr"),t._v(" "),t._m(3),s("hr"),t._v(" "),t._m(4),s("hr"),t._v(" "),t._m(5),s("hr"),t._v(" "),t._m(6),s("hr"),t._v(" "),s("footer-section")],1)},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{attrs:{id:"first-section"}},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 col-xs-12 col-sm-12"},[e("div",{staticClass:"top-content"},[e("h1",[t._v("Modern online and "),e("br"),t._v("offline data collection for "),e("br"),t._v("Africa")]),t._v(" "),e("p",{staticClass:"subtitle"},[t._v("\n                Blueform helps individuals and organizations in Africa collect data "),e("br"),t._v("from any part of Africa in real time. \n              ")]),t._v(" "),e("p",[e("a",{staticClass:"button is-primary learn-more",attrs:{href:""}},[t._v("Create free account")])])]),t._v(" "),e("p",{staticStyle:{color:"#223D68"}},[t._v("Trusted by the best")]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-3 col-xs-3 col-sm-3 tic"},[e("img",{attrs:{src:s("J7VE")}})]),t._v(" "),e("div",{staticClass:"col-md-3 col-xs-3 col-sm-3 boldX"},[e("img",{attrs:{src:s("J7VE")}})]),t._v(" "),e("div",{staticClass:"col-md-3 col-xs-3 col-sm-3 identity"},[e("img",{attrs:{src:s("n6Qz")}})]),t._v(" "),e("div",{staticClass:"col-md-3 col-xs-3 col-sm-3"})])]),t._v(" "),e("div",{staticClass:"col-md-6 col-xs-12 col-sm-12 illustration"},[e("div",{staticStyle:{padding:"180px"}})])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"section-3"},[s("div",{staticClass:"container-fluid"},[s("h1",{staticClass:"first"},[t._v("Simple, easy data "),s("br"),t._v("collection")]),s("br"),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6 col-xs-12 col-sm-12 background"},[s("div",{staticStyle:{padding:"150px"}})]),t._v(" "),s("div",{staticClass:"col-md-6 col-xs-12 col-sm-12 right-content"},[s("h1",[t._v("Provide users with a "),s("br"),t._v("seamless data "),s("br"),t._v("collection experience")]),t._v(" "),s("p",[t._v("Empower your team with a  modern, effortless, painless "),s("br"),t._v("data collection tool. Design custom forms for data "),s("br"),t._v("collection using any of our channels. ")]),s("br"),t._v(" "),s("ul",[s("li",[t._v("Web")]),t._v(" "),s("li",[t._v("Offline mobile app")]),t._v(" "),s("li",[t._v("USSD Code (*333#)")])]),s("br"),t._v(" "),s("h1",[t._v("Enjoy phenomenal "),s("br"),t._v("feedback rates")]),t._v(" "),s("p",[t._v("We allow data collection across all technical scenarios "),s("br"),t._v("using web forms, offline enabled mobile app and USSD "),s("br"),t._v("technology.")])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"section-4"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6 col-xs-12 col-sm-12 left-content"},[s("h1",[t._v("Manage data collection "),s("br"),t._v("with ease.")]),t._v(" "),s("p",[t._v("Project managers love managing data collection project or monitoring and evaluation exercise using Blueform from simple data collection exercises to complex projects, they can receive and track forms sent to team members or field agents from anywhere.")]),s("br"),t._v(" "),s("ul",[s("li",[t._v("Collect real-time information from team members or field agents using the web, mobile or USSD channels.")]),t._v(" "),s("li",[t._v("Monitor location that data came from using our accurate GIS mapping")]),t._v(" "),s("li",[t._v("Collect direct beneficiary feedback using the USSD and Web channel.")])]),s("br")]),t._v(" "),s("div",{staticClass:"col-md-6 col-xs-12 col-sm-12 background"},[s("div",{staticStyle:{padding:"150px"}})])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("section",{staticClass:"section-5"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 col-xs-12 col-sm-12 background"},[a("div",{staticStyle:{padding:"150px"}})]),this._v(" "),a("div",{staticClass:"col-md-6 col-xs-12 col-sm-12 left-content"},[a("h1",[this._v("Protect yourself and your "),a("br"),this._v("users with advanced "),a("br"),this._v("security features ")]),this._v(" "),a("p",[this._v("Blueform combination of automated and manual security "),a("br"),this._v("systems protect you from data theft and loss.")]),a("br")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"section-6"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6 col-xs-12 col-sm-12 left-content"},[s("h1",[t._v("Detailed reporting for "),s("br"),t._v("your survey, monitoring "),s("br"),t._v("and evaluation, accounting, "),s("br"),t._v("and audits")]),t._v(" "),s("p",[t._v("Blueform combination of automated and manual security "),s("br"),t._v("systems protect you from data theft and loss.")]),s("br")]),t._v(" "),s("div",{staticClass:"col-md-6 col-xs-12 col-sm-12 background"},[s("div",{staticStyle:{padding:"150px"}})])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"section-7"},[e("div",{staticClass:"container-fluid"},[e("h1",[t._v("You are covered")]),t._v(" "),e("p",[t._v("Join other organizations who trust Blueform to make work "),e("br"),t._v("easy for them and save cost.")]),t._v(" "),e("div",{staticClass:"row",staticStyle:{"margin-top":"80px"}},[e("div",{staticClass:"col-md-4 col-xs-12 col-sm-12 card"},[e("div",{staticClass:"col-md-12"},[e("img",{attrs:{src:s("+o+d")}}),t._v(" "),e("h2",[t._v("Blueform for individuals")]),t._v(" "),e("p",[t._v("We help individuals conduct surveys and conduct data collection exercise anywhere in Africa with or without the internet.")])])]),t._v(" "),e("div",{staticClass:"col-md-4 col-xs-12 col-sm-12 card"},[e("div",{staticClass:"col-md-12"},[e("img",{attrs:{src:s("PDEJ")}}),t._v(" "),e("h2",[t._v("Blueform for Non-profits")]),t._v(" "),e("p",[t._v("We make data collection, monitoring and evaluation easy and less expensive for non-profits")])])]),t._v(" "),e("div",{staticClass:"col-md-4 col-xs-12 col-sm-12 card"},[e("div",{staticClass:"col-md-12"},[e("img",{attrs:{src:s("1YoK")}}),t._v(" "),e("h2",[t._v("Blueform for Businesses")]),t._v(" "),e("p",[t._v("We make data collection, monitoring and evaluation easy and less expensive for businesses of all sizes.")])])])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("section",{staticClass:"section-8"},[a("div",{staticClass:"container-fluid"},[a("p",[this._v("Try Blueform Now")]),a("br"),this._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 col-xs-12 col-sm-12"},[a("h1",[this._v("Do more with "),a("br"),this._v("less")])]),this._v(" "),a("div",{staticClass:"col-md-6 col-xs-12 col-sm-12 right"},[a("p",[a("a",{staticClass:"button is-primary learn-more",attrs:{href:""}},[this._v("Create free account")])])])])])])}]};var f=s("VU/8")(m,_,!1,function(t){s("grJb")},"data-v-7d373929",null).exports,p=s("VU/8")(null,null,!1,null,null,null).exports,h={name:"Register",data:function(){return{user:{email:"",password:"",name:"",password_confirmation:""},is_admin:!1}},methods:{register:function(){var t=this,a={name:this.user.name,email:this.user.email,password:this.user.password,is_admin:this.is_admin};this.$store.dispatch("register",a).then(function(){return t.$router.push("/")}).catch(function(t){return console.log(t)})}}},g={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("div",{staticClass:"col-md-4 offset-4"},[s("h3",[t._v("User Registration")]),s("hr"),t._v(" "),s("form",{on:{submit:function(a){return a.preventDefault(),t.login(a)}}},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v("Name")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Full Name",required:""},domProps:{value:t.user.name},on:{input:function(a){a.target.composing||t.$set(t.user,"name",a.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v("Email Address")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Email Address",required:""},domProps:{value:t.user.email},on:{input:function(a){a.target.composing||t.$set(t.user,"email",a.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v("Password")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password",required:""},domProps:{value:t.user.password},on:{input:function(a){a.target.composing||t.$set(t.user,"password",a.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v("Confirm Password")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password_confirmation,expression:"user.password_confirmation"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password Confirmation",required:""},domProps:{value:t.user.password_confirmation},on:{input:function(a){a.target.composing||t.$set(t.user,"password_confirmation",a.target.value)}}})]),s("hr"),t._v(" "),t._m(0)])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-primary btn-lg",attrs:{type:"submit"}},[this._v("Register")])])}]};var C=s("VU/8")(h,g,!1,function(t){s("42/e")},"data-v-56189ca6",null).exports;e.default.use(o.a);var b=new o.a({mode:"history",routes:[{path:"/",name:"Home",component:f},{path:"/login",name:"Login",component:p},{path:"/register",name:"Register",component:C}]}),w=s("e6fC"),x={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.2.0/css/all.css",integrity:"sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ",crossorigin:"anonymous"}}),this._v(" "),a("router-view")],1)},staticRenderFns:[]};var y=s("VU/8")({name:"App"},x,!1,function(t){s("O2dh")},null,null).exports,S=s("C/JF"),k=s("fhbW"),E=s("1e6/"),$=s("O3Oo"),P=s.n($);s("/KV2"),s("K3J8"),s("Jmt5"),s("9M+g");e.default.config.productionTip=!1,S.c.add(k.a),e.default.use(w.a),e.default.use(P.a),e.default.component("font-awesome-icon",E.a),new e.default({router:b,store:d,render:function(t){return t(y)}}).$mount("#app")},O2dh:function(t,a){},PDEJ:function(t,a,s){t.exports=s.p+"static/img/icon-02.5568f6f.png"},grJb:function(t,a){},ioJ2:function(t,a,s){t.exports=s.p+"static/img/blueform-logo.b1acbe0.png"},n6Qz:function(t,a,s){t.exports=s.p+"static/img/identity-logo.5c96874.png"},zj2Q:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.00f65c787ddd02d1e9e0.js.map