webpackJsonp([1],{"+o+d":function(t,s,a){t.exports=a.p+"static/img/icon-01.5c78bfa.png"},"/KV2":function(t,s){},"1/oy":function(t,s){},"1YoK":function(t,s,a){t.exports=a.p+"static/img/icon-03.cc06c93.png"},"42/e":function(t,s){},"9M+g":function(t,s){},GfHa:function(t,s){},Id91:function(t,s){},J7VE:function(t,s,a){t.exports=a.p+"static/img/tic-logo.5d186c2.png"},Jmt5:function(t,s){},MoHP:function(t,s){},NHnr:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("/5sW"),o=a("/ocq"),i=a("//Fk"),r=a.n(i),n=a("NYxO"),c=a("mtWM"),l=a.n(c);e.default.use(n.a);var v=new n.a.Store({state:{status:"",token:localStorage.getItem("token")||"",user:{}},mutations:{auth_request:function(t){t.status="loading"},auth_success:function(t,s,a){t.status="success",t.token=s,t.user=a},auth_error:function(t){t.status="error"},logout:function(t){t.status="",t.token=""}},actions:{login:function(t,s){var a=t.commit;return new r.a(function(t,e){a("auth_request"),l()({url:"http://localhost:5000/login",data:s,method:"POST"}).then(function(s){var e=s.data.token,o=s.data.user;localStorage.setItem("token",e),l.a.defaults.headers.common.Authorization=e,a("auth_success",e,o),t(s)}).catch(function(t){a("auth_error"),localStorage.removeItem("token"),e(t)})})},register:function(t,s){var a=t.commit;return new r.a(function(t,e){a("auth_request"),l()({url:"http://localhost:5000/register",data:s,method:"POST"}).then(function(s){var e=s.data.token,o=s.data.user;localStorage.setItem("token",e),l.a.defaults.headers.common.Authorization=e,a("auth_success",e,o),t(s)}).catch(function(t){a("auth_error",t),localStorage.removeItem("token"),e(t)})})},logout:function(t){var s=t.commit;return new r.a(function(t,a){s("logout"),localStorage.removeItem("token"),delete l.a.defaults.headers.common.Authorization,t()})}},getters:{isLoggedIn:function(t){return!!t.token},authStatus:function(t){return t.status}}}),d={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("nav",{staticClass:"navbar navbar-expand-lg fixed-top",attrs:{id:"nav"}},[e("div",{staticClass:"container-fluid"},[e("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e("img",{staticStyle:{width:"200px"},attrs:{src:a("ioJ2")}})]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav mr-auto"},[e("li",{staticClass:"nav-item dropdown"},[e("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Why Bluform\n          ")]),t._v(" "),e("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[e("router-link",{attrs:{to:"/why-choose-us"}},[e("a",{staticClass:"dropdown-item"},[t._v("Why Choose Blueform")])]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),t._v(" "),e("div",{staticClass:"dropdown-divider"}),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])],1)]),t._v(" "),t._m(1),t._v(" "),t._m(2)]),t._v(" "),e("ul",{staticClass:"nav navbar-nav navbar-right"},[e("li",{staticClass:"nav-item dropdown pull-right"},[e("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Support\n          ")]),t._v(" "),e("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),t._v(" "),e("router-link",{attrs:{to:"/about"}},[e("a",{staticClass:"dropdown-item"},[t._v("Another action")])]),t._v(" "),e("div",{staticClass:"dropdown-divider"}),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])],1)]),t._v(" "),e("li",{staticClass:"nav-item"},[e("router-link",{attrs:{to:"/login"}},[e("a",{staticClass:"nav-link"},[t._v("Login")])])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("router-link",{attrs:{to:"/login"}},[e("a",{staticClass:"button is-primary learn-more",attrs:{href:""}},[t._v("Create free account")])])],1)])])],1)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon",staticStyle:{border:"1px solid grey"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"nav-item active"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[this._v("Pricing "),s("span",{staticClass:"sr-only"},[this._v("(current)")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",{staticClass:"nav-item dropdown"},[a("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Learn\n          ")]),t._v(" "),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),t._v(" "),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),t._v(" "),a("div",{staticClass:"dropdown-divider"}),t._v(" "),a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])])])}]};var m=a("VU/8")({name:"NavMenu"},d,!1,function(t){a("Q7rS")},"data-v-aaae1232",null).exports,u={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{attrs:{id:"footer"}},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row first"},[a("div",{staticClass:"col-md-2 col-xs-12 col-sm-12"},[a("h3",[t._v("Why Blueform?")]),a("br"),t._v(" "),a("p",[t._v("For Individuals"),a("br"),t._v("For Non-Profits "),a("br"),t._v("For Businesses")])]),t._v(" "),a("div",{staticClass:"col-md-2 col-xs-12 col-sm-12"},[a("h3",[t._v("Developers")]),a("br"),t._v(" "),a("p",[t._v("Status page")])]),t._v(" "),a("div",{staticClass:"col-md-2 col-xs-12 col-sm-12"},[a("h3",[t._v("Pricing")]),a("br"),t._v(" "),a("p",[t._v("Nigeria")])]),t._v(" "),a("div",{staticClass:"col-md-2 col-xs-12 col-sm-12"},[a("h3",[t._v("Learn")]),a("br"),t._v(" "),a("p",[t._v("Blog"),a("br"),t._v("Guides")])]),t._v(" "),a("div",{staticClass:"col-md-2 col-xs-12 col-sm-12"},[a("h3",[t._v("Support")]),a("br"),t._v(" "),a("p",[t._v("Help Desk"),a("br"),t._v("Contact us")])]),t._v(" "),a("div",{staticClass:"col-md-2 col-xs-12 col-sm-12"},[a("h3",[t._v("About Us")]),a("br"),t._v(" "),a("p",[t._v("Company "),a("br"),t._v(" Careers "),a("br"),t._v("Media Kit "),a("br"),t._v("Privacy & Terms")])])]),t._v(" "),a("div",{staticClass:"row bottom"},[a("div",{staticClass:"col-md-3 col-xs-12 col-sm-12"},[a("h3",[t._v("Contact")]),a("br"),t._v(" "),a("p",[t._v("hello@blueform.co")])]),t._v(" "),a("div",{staticClass:"col-md-3 col-xs-12 col-sm-12"},[a("h3",[t._v("Lagos")]),a("br"),t._v(" "),a("p",[t._v("Workstation Maryland Mall, "),a("br"),t._v("Maryland, "),a("br"),t._v("Lagos.")])]),t._v(" "),a("div",{staticClass:"col-md-6 col-xs-12 col-sm-12 social"})])])])}]};var _=a("VU/8")({name:"BottomNav"},u,!1,function(t){a("lnyT")},"data-v-aa891416",null).exports,f={name:"Home",components:{NavMenu:m,BottomNav:_}},h={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"home-page"}},[a("nav-menu"),a("hr"),t._v(" "),t._m(0),a("hr"),t._v(" "),t._m(1),a("hr"),t._v(" "),t._m(2),a("hr"),t._v(" "),t._m(3),a("hr"),t._v(" "),t._m(4),a("hr"),t._v(" "),t._m(5),a("hr"),t._v(" "),t._m(6),a("hr"),t._v(" "),a("bottom-nav")],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{attrs:{id:"first-section"}},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 col-xs-12 col-sm-12"},[e("div",{staticClass:"top-content"},[e("h1",[t._v("Modern online and "),e("br"),t._v("offline data collection for "),e("br"),t._v("Africa")]),t._v(" "),e("p",{staticClass:"subtitle"},[t._v("\n                Blueform helps individuals and organizations in Africa collect data "),e("br"),t._v("from any part of Africa in real time. \n              ")]),t._v(" "),e("p",[e("a",{staticClass:"button is-primary learn-more",attrs:{href:""}},[t._v("Create free account")])])]),t._v(" "),e("p",{staticStyle:{color:"#223D68"}},[t._v("Trusted by the best")]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-3 col-xs-3 col-sm-3 tic"},[e("img",{attrs:{src:a("J7VE")}})]),t._v(" "),e("div",{staticClass:"col-md-3 col-xs-3 col-sm-3 boldX"},[e("img",{attrs:{src:a("J7VE")}})]),t._v(" "),e("div",{staticClass:"col-md-3 col-xs-3 col-sm-3 identity"},[e("img",{attrs:{src:a("n6Qz")}})]),t._v(" "),e("div",{staticClass:"col-md-3 col-xs-3 col-sm-3"})])]),t._v(" "),e("div",{staticClass:"col-md-6 col-xs-12 col-sm-12 illustration"},[e("div",{staticStyle:{padding:"180px"}})])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"section-3"},[a("div",{staticClass:"container-fluid"},[a("h1",{staticClass:"first"},[t._v("Simple, easy data "),a("br"),t._v("collection")]),a("br"),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 col-xs-12 col-sm-12 background"},[a("div",{staticStyle:{padding:"150px"}})]),t._v(" "),a("div",{staticClass:"col-md-6 col-xs-12 col-sm-12 right-content"},[a("h1",[t._v("Provide users with a "),a("br"),t._v("seamless data "),a("br"),t._v("collection experience")]),t._v(" "),a("p",[t._v("Empower your team with a  modern, effortless, painless "),a("br"),t._v("data collection tool. Design custom forms for data "),a("br"),t._v("collection using any of our channels. ")]),a("br"),t._v(" "),a("ul",[a("li",[t._v("Web")]),t._v(" "),a("li",[t._v("Offline mobile app")]),t._v(" "),a("li",[t._v("USSD Code (*333#)")])]),a("br"),t._v(" "),a("h1",[t._v("Enjoy phenomenal "),a("br"),t._v("feedback rates")]),t._v(" "),a("p",[t._v("We allow data collection across all technical scenarios "),a("br"),t._v("using web forms, offline enabled mobile app and USSD "),a("br"),t._v("technology.")])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"section-4"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 col-xs-12 col-sm-12 left-content"},[a("h1",[t._v("Manage data collection "),a("br"),t._v("with ease.")]),t._v(" "),a("p",[t._v("Project managers love managing data collection project or monitoring and evaluation exercise using Blueform from simple data collection exercises to complex projects, they can receive and track forms sent to team members or field agents from anywhere.")]),a("br"),t._v(" "),a("ul",[a("li",[t._v("Collect real-time information from team members or field agents using the web, mobile or USSD channels.")]),t._v(" "),a("li",[t._v("Monitor location that data came from using our accurate GIS mapping")]),t._v(" "),a("li",[t._v("Collect direct beneficiary feedback using the USSD and Web channel.")])]),a("br")]),t._v(" "),a("div",{staticClass:"col-md-6 col-xs-12 col-sm-12 background"},[a("div",{staticStyle:{padding:"150px"}})])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"section-5"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6 col-xs-12 col-sm-12 background"},[s("div",{staticStyle:{padding:"150px"}})]),this._v(" "),s("div",{staticClass:"col-md-6 col-xs-12 col-sm-12 left-content"},[s("h1",[this._v("Protect yourself and your "),s("br"),this._v("users with advanced "),s("br"),this._v("security features ")]),this._v(" "),s("p",[this._v("Blueform combination of automated and manual security "),s("br"),this._v("systems protect you from data theft and loss.")]),s("br")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"section-6"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 col-xs-12 col-sm-12 left-content"},[a("h1",[t._v("Detailed reporting for "),a("br"),t._v("your survey, monitoring "),a("br"),t._v("and evaluation, accounting, "),a("br"),t._v("and audits")]),t._v(" "),a("p",[t._v("Blueform combination of automated and manual security "),a("br"),t._v("systems protect you from data theft and loss.")]),a("br")]),t._v(" "),a("div",{staticClass:"col-md-6 col-xs-12 col-sm-12 background"},[a("div",{staticStyle:{padding:"150px"}})])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"section-7"},[e("div",{staticClass:"container-fluid"},[e("h1",[t._v("You are covered")]),t._v(" "),e("p",[t._v("Join other organizations who trust Blueform to make work "),e("br"),t._v("easy for them and save cost.")]),t._v(" "),e("div",{staticClass:"row",staticStyle:{"margin-top":"80px"}},[e("div",{staticClass:"col-md-4 col-xs-12 col-sm-12"},[e("div",{staticClass:"col-md-12 col-xs-12 col-sm-12 card"},[e("img",{attrs:{src:a("+o+d")}}),t._v(" "),e("h2",[t._v("Blueform for "),e("br"),t._v("individuals")]),t._v(" "),e("p",[t._v("We help individuals conduct surveys and conduct data collection exercise anywhere in Africa with or without the internet.")])])]),t._v(" "),e("div",{staticClass:"col-md-4 col-xs-12 col-sm-12"},[e("div",{staticClass:"col-md-12 col-xs-12 col-sm-12 card"},[e("img",{attrs:{src:a("PDEJ")}}),t._v(" "),e("h2",[t._v("Blueform for "),e("br"),t._v("Non-profits")]),t._v(" "),e("p",[t._v("We make data collection, monitoring and evaluation easy and less expensive for non-profits")])])]),t._v(" "),e("div",{staticClass:"col-md-4 col-xs-12 col-sm-12"},[e("div",{staticClass:"col-md-12 col-xs-12 col-sm-12 card"},[e("img",{attrs:{src:a("1YoK")}}),t._v(" "),e("h2",[t._v("Blueform for "),e("br"),t._v("Businesses")]),t._v(" "),e("p",[t._v("We make data collection, monitoring and evaluation easy and less expensive for businesses of all sizes.")])])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"section-8"},[s("div",{staticClass:"container-fluid"},[s("p",[this._v("Try Blueform Now")]),s("br"),this._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6 col-xs-12 col-sm-12"},[s("h1",[this._v("Do more with "),s("br"),this._v("less")])]),this._v(" "),s("div",{staticClass:"col-md-6 col-xs-12 col-sm-12 right"},[s("p",[s("a",{staticClass:"button is-primary learn-more",attrs:{href:""}},[this._v("Create free account")])])])])])])}]};var p=a("VU/8")(f,h,!1,function(t){a("muVZ")},"data-v-bd326fae",null).exports,b=a("VU/8")(null,null,!1,null,null,null).exports,C={name:"Register",data:function(){return{user:{email:"",password:"",name:"",password_confirmation:""},is_admin:!1}},methods:{register:function(){var t=this,s={name:this.user.name,email:this.user.email,password:this.user.password,is_admin:this.is_admin};this.$store.dispatch("register",s).then(function(){return t.$router.push("/")}).catch(function(t){return console.log(t)})}}},g={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container"},[a("div",{staticClass:"col-md-4 offset-4"},[a("h3",[t._v("User Registration")]),a("hr"),t._v(" "),a("form",{on:{submit:function(s){return s.preventDefault(),t.login(s)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Full Name",required:""},domProps:{value:t.user.name},on:{input:function(s){s.target.composing||t.$set(t.user,"name",s.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Email Address")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Email Address",required:""},domProps:{value:t.user.email},on:{input:function(s){s.target.composing||t.$set(t.user,"email",s.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Password")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password",required:""},domProps:{value:t.user.password},on:{input:function(s){s.target.composing||t.$set(t.user,"password",s.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Confirm Password")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password_confirmation,expression:"user.password_confirmation"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password Confirmation",required:""},domProps:{value:t.user.password_confirmation},on:{input:function(s){s.target.composing||t.$set(t.user,"password_confirmation",s.target.value)}}})]),a("hr"),t._v(" "),t._m(0)])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"form-group"},[s("button",{staticClass:"btn btn-primary btn-lg",attrs:{type:"submit"}},[this._v("Register")])])}]};var w=a("VU/8")(C,g,!1,function(t){a("42/e")},"data-v-56189ca6",null).exports,y={name:"WhyChooseUs",components:{NavMenu:m,BottomNav:_}},x={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"choose-us"}},[a("nav-menu"),a("hr"),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),a("bottom-nav")],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"text-center section-1"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-3 col-xs-12 col-sm-12"}),this._v(" "),s("div",{staticClass:"col-md-6 col-xs-12 col-sm-12"},[s("h1",[this._v("Why do individuals, businesses and Non-profits love Blueform?")]),this._v(" "),s("p",[this._v("Blueform is the data collection tool of choice for some of the fastest-growing businesses and Non-profits in Africa. Here're 12 reasons why.")])]),this._v(" "),s("div",{staticClass:"col-md-3 col-xs-12 col-sm-12"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"section-2"},[s("div",{staticStyle:{padding:"150px"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"section-3"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 col-xs-12 col-sm-12 background"},[a("div",{staticStyle:{padding:"150px"}})]),t._v(" "),a("div",{staticClass:"col-md-6 col-xs-12 col-sm-12 content"},[a("h2",[t._v("01")]),t._v(" "),a("h1",[t._v("Provide users with a "),a("br"),t._v("seamless data collection "),a("br"),t._v("experience")]),t._v(" "),a("p",[t._v("Empower your team with a  modern, effortless, painless "),a("br"),t._v("data collection tool. Design custom forms for data "),a("br"),t._v("collection using any of our channels.")]),a("br"),t._v(" "),a("ul",[a("li",[t._v("Web")]),t._v(" "),a("li",[t._v("Offline mobile app")]),t._v(" "),a("li",[t._v("USSD Code (*333#)")])])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"section-4"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 col-xs-12 col-sm-12 content"},[a("h2",[t._v("02")]),t._v(" "),a("h1",[t._v("Enjoy phenomenal "),a("br"),t._v("feedback rates")]),t._v(" "),a("p",[t._v("We allow data collection across all technical scenarios "),a("br"),t._v("using web forms, offline enabled mobile app and USSD technology.")])]),t._v(" "),a("div",{staticClass:"col-md-6 col-xs-12 col-sm-12 background"},[a("div",{staticStyle:{padding:"150px"}})])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"section-5"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 col-xs-12 col-sm-12 background"},[a("div",{staticStyle:{padding:"150px"}})]),t._v(" "),a("div",{staticClass:"col-md-6 col-xs-12 col-sm-12 content"},[a("h2",[t._v("03")]),t._v(" "),a("h1",[t._v("Protect yourself and your "),a("br"),t._v("users with advanced "),a("br"),t._v("security features ")]),t._v(" "),a("p",[t._v("Blueform combination of automated and manual security systems protect you from data theft and loss.")])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"section-6"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 col-xs-12 col-sm-12 content"},[a("h2",[t._v("04")]),t._v(" "),a("h1",[t._v("Know exactly where your "),a("br"),t._v("data was collected")]),t._v(" "),a("p",[t._v("Blueform provides detailed reporting, alerts, and "),a("br"),t._v("exports, so you and your team can know where your "),a("br"),t._v("data was collected using our GPS technology.")])]),t._v(" "),a("div",{staticClass:"col-md-6 col-xs-12 col-sm-12 background"},[a("div",{staticStyle:{padding:"150px"}})])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"section-7"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6 col-xs-12 col-sm-12 background"},[s("div",{staticStyle:{padding:"150px"}})]),this._v(" "),s("div",{staticClass:"col-md-6 col-xs-12 col-sm-12 content"},[s("h2",[this._v("05")]),this._v(" "),s("h1",[this._v("Get your data real time ")]),this._v(" "),s("p",[this._v("Receive your data automatically on your dashboard immediately it is collected without the internet. Yes, it possible. ")])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"section-8"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 col-xs-12 col-sm-12 content"},[a("h2",[t._v("06")]),t._v(" "),a("h1",[t._v("Receive Data from "),a("br"),t._v("agents, team members, "),a("br"),t._v("beneficiary and partners "),a("br"),t._v("from anywhere in the "),a("br"),t._v("world")]),t._v(" "),a("p",[t._v("The world has no borders, and neither should you. With Blueform, you can collect data from your team, "),a("br"),t._v("wherever they are in the world even without "),a("br"),t._v("the internet.")])]),t._v(" "),a("div",{staticClass:"col-md-6 col-xs-12 col-sm-12 background"},[a("div",{staticStyle:{padding:"150px"}})])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"section-9"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6 col-xs-12 col-sm-12 background"},[s("div",{staticStyle:{padding:"150px"}})]),this._v(" "),s("div",{staticClass:"col-md-6 col-xs-12 col-sm-12 content"},[s("h2",[this._v("07")]),this._v(" "),s("h1",[this._v("Get attentive, empathetic "),s("br"),this._v("help 24/7 ")]),this._v(" "),s("p",[this._v("Receive your data automatically on your dashboard immediately it is collected without the internet. Yes, it possible. ")])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"section-10"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 col-xs-12 col-sm-12 content"},[a("h2",[t._v("08")]),t._v(" "),a("h1",[t._v("A modern, beautiful data "),a("br"),t._v("collection experience")]),t._v(" "),a("p",[t._v("Give users confidence in your organization with a "),a("br"),t._v("modern, gorgeous data collection form that elevates "),a("br"),t._v("your brand.")])]),t._v(" "),a("div",{staticClass:"col-md-6 col-xs-12 col-sm-12 background"},[a("div",{staticStyle:{padding:"150px"}})])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"section-11"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 col-xs-12 col-sm-12 background"},[a("div",{staticStyle:{padding:"150px"}})]),t._v(" "),a("div",{staticClass:"col-md-6 col-xs-12 col-sm-12 content"},[a("h2",[t._v("09")]),t._v(" "),a("h1",[t._v("Simple, Easy data "),a("br"),t._v("collection")]),t._v(" "),a("p",[t._v("Provide users with a seamless data collection experience. "),a("br"),a("br"),t._v("Empower your team with a  modern, effortless, painless data collection tool. Design custom forms for data collection using any of our channels. ")])])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"section-12"},[e("div",{staticClass:"container-fluid"},[e("h1",[t._v("You are covered")]),t._v(" "),e("p",[t._v("Join other organizations who trust Blueform to make work "),e("br"),t._v("easy for them and save cost.")]),t._v(" "),e("div",{staticClass:"row",staticStyle:{"margin-top":"80px"}},[e("div",{staticClass:"col-md-4 col-xs-12 col-sm-12"},[e("div",{staticClass:"col-md-12 col-xs-12 col-sm-12 card"},[e("img",{attrs:{src:a("+o+d")}}),t._v(" "),e("h2",[t._v("Blueform for "),e("br"),t._v("individuals")]),t._v(" "),e("p",[t._v("We help individuals conduct surveys and conduct data collection exercise anywhere in Africa with or without the internet.")])])]),t._v(" "),e("div",{staticClass:"col-md-4 col-xs-12 col-sm-12"},[e("div",{staticClass:"col-md-12 col-xs-12 col-sm-12 card"},[e("img",{attrs:{src:a("PDEJ")}}),t._v(" "),e("h2",[t._v("Blueform for "),e("br"),t._v("Non-profits")]),t._v(" "),e("p",[t._v("We make data collection, monitoring and evaluation easy and less expensive for non-profits")])])]),t._v(" "),e("div",{staticClass:"col-md-4 col-xs-12 col-sm-12"},[e("div",{staticClass:"col-md-12 col-xs-12 col-sm-12 card"},[e("img",{attrs:{src:a("1YoK")}}),t._v(" "),e("h2",[t._v("Blueform for "),e("br"),t._v("Businesses")]),t._v(" "),e("p",[t._v("We make data collection, monitoring and evaluation easy and less expensive for businesses of all sizes.")])])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"section-13"},[s("div",{staticClass:"container-fluid"},[s("p",[this._v("Try Blueform Now")]),s("br"),this._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6 col-xs-12 col-sm-12"},[s("h1",[this._v("Do more with "),s("br"),this._v("less")])]),this._v(" "),s("div",{staticClass:"col-md-6 col-xs-12 col-sm-12 right"},[s("p",[s("a",{staticClass:"button is-primary learn-more",attrs:{href:""}},[this._v("Create free account")])])])])])])}]};var S=a("VU/8")(y,x,!1,function(t){a("okLF")},"data-v-6738025b",null).exports;e.default.use(o.a);var k=new o.a({mode:"history",routes:[{path:"/",name:"Home",component:p},{path:"/why-choose-us",name:"WhyChooseUs",component:S},{path:"/login",name:"Login",component:b},{path:"/register",name:"Register",component:w}]}),E=a("e6fC"),$={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.2.0/css/all.css",integrity:"sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ",crossorigin:"anonymous"}}),this._v(" "),s("router-view")],1)},staticRenderFns:[]};var B=a("VU/8")({name:"App"},$,!1,function(t){a("MoHP")},null,null).exports,P=a("C/JF"),D=a("fhbW"),N=a("1e6/"),W=a("O3Oo"),A=a.n(W);a("/KV2"),a("K3J8"),a("Jmt5"),a("9M+g");e.default.config.productionTip=!1,P.c.add(D.a),e.default.use(E.a),e.default.use(A.a),e.default.component("font-awesome-icon",N.a),new e.default({router:k,store:v,render:function(t){return t(B)}}).$mount("#app")},PDEJ:function(t,s,a){t.exports=a.p+"static/img/icon-02.5568f6f.png"},Q7rS:function(t,s){},ioJ2:function(t,s,a){t.exports=a.p+"static/img/blueform-logo.b1acbe0.png"},lnyT:function(t,s){},muVZ:function(t,s){},n6Qz:function(t,s,a){t.exports=a.p+"static/img/identity-logo.5c96874.png"},okLF:function(t,s){},zj2Q:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.cce920dd485aa122c274.js.map