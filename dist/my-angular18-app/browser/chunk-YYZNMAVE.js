import{a as M}from"./chunk-RFMH2YTC.js";import{a as B}from"./chunk-73Q3L5KP.js";import"./chunk-JAQOLI4A.js";import{e as V,f as A,g as N,n as $}from"./chunk-53CZCGSV.js";import{a as D}from"./chunk-UPMV7PW5.js";import"./chunk-2HKXIZ2N.js";import{f as F,u as H}from"./chunk-57FAEB72.js";import{$a as f,Aa as o,Ba as x,Ma as C,Oa as v,Qa as I,Ra as w,Sa as k,Ta as T,Ua as l,Va as t,Wa as g,X as E,Za as y,_a as _,db as r,ea as h,eb as L,fa as S,fb as p,jb as j}from"./chunk-TL672DAF.js";import{d as b}from"./chunk-4CLCTAJ7.js";function O(c,u){c&1&&(l(0,"p",10),r(1,"Loading"),t())}function R(c,u){if(c&1){let s=y();l(0,"div",20)(1,"div",24)(2,"div",25)(3,"label",26),r(4),t(),g(5,"input",37),t()(),l(6,"div",24)(7,"div",25)(8,"label",26),r(9),t(),g(10,"app-img-uploader",28),t()(),l(11,"div",24)(12,"div",25)(13,"label",26),r(14),t(),g(15,"input",38),t()(),l(16,"div",24)(17,"div",25)(18,"label",26),r(19),t(),g(20,"input",39),t()(),l(21,"button",40),_("click",function(){let i=h(s).$index,a=f(2);return S(a.removeItem("sliders",i))}),r(22,"X"),t()()}if(c&2){let s=u.$implicit,n=u.$index,i=f(2);o(4),p("Title (",i.lang.lang,")"),o(),v("value",s.title)("name","sliders["+n+"][title]"),o(4),p("Image (",i.lang.lang,")"),o(),v("image",s.image)("name","sliders["+n+"][image]"),o(4),p("Button (",i.lang.lang,")"),o(),v("value",s.button)("name","sliders["+n+"][button]"),o(4),p("Link (",i.lang.lang,")"),o(),v("value",s.link)("name","sliders["+n+"][link]")}}function K(c,u){if(c&1){let s=y();l(0,"div",11)(1,"div",15)(2,"div",16)(3,"div",17)(4,"h4",18),r(5,"Create Slider Form"),t()(),l(6,"div",19),k(7,R,23,12,"div",20,w),l(9,"div",21)(10,"div",22)(11,"button",23),_("click",function(){h(s);let i=f();return S(i.add_new("sliders",{title:"",image:"",button:"",link:""}))}),r(12,"+"),t()()()()()(),l(13,"div",15)(14,"div",16)(15,"div",17)(16,"h4",18),r(17,"About Us "),t()(),l(18,"div",19)(19,"div",11)(20,"div",24)(21,"div",25)(22,"label",26),r(23),t(),g(24,"input",27),t()(),l(25,"div",24)(26,"div",25)(27,"label",26),r(28),t(),g(29,"app-img-uploader",28),t()(),l(30,"div",29)(31,"div",25)(32,"label",26),r(33),t(),l(34,"textarea",30),r(35),t()()()()()()(),l(36,"div",31)(37,"div",16)(38,"div",32)(39,"h4",18),r(40,"Destacados Posts "),t()(),l(41,"div",19)(42,"div",11)(43,"div",33)(44,"div",25)(45,"label",26),r(46),t(),g(47,"input",34),t()(),l(48,"div",33)(49,"div",25)(50,"label",26),r(51),t(),g(52,"input",35),t()(),l(53,"div",33)(54,"div",25)(55,"label",26),r(56),t(),g(57,"input",36),t()()()()()()()}if(c&2){let s,n,i,a,m,d,e=f();o(7),T(e.data.sliders),o(16),p("Title (",e.lang.lang,")"),o(),v("value",(s=e.data==null||e.data.about==null?null:e.data.about.title)!==null&&s!==void 0?s:""),o(4),p("Image (",e.lang.lang,")"),o(),v("image",(n=e.data==null||e.data.about==null?null:e.data.about.image)!==null&&n!==void 0?n:"")("name","about[image]"),o(4),p("Short Description (",e.lang.lang,")"),o(2),L((i=e.data==null||e.data.about==null?null:e.data.about.description)!==null&&i!==void 0?i:""),o(11),p("Section Title (",e.lang.lang,")"),o(),v("value",(a=e.data==null||e.data.destacados==null?null:e.data.destacados.title)!==null&&a!==void 0?a:""),o(4),p("Section Description (",e.lang.lang,")"),o(),v("value",(m=e.data==null||e.data.destacados==null?null:e.data.destacados.description)!==null&&m!==void 0?m:""),o(4),p("Section Button (",e.lang.lang,")"),o(),v("value",(d=e.data==null||e.data.destacados==null?null:e.data.destacados.button)!==null&&d!==void 0?d:"")}}var Q=(()=>{let u=class u{constructor(n,i,a){this.notification=n,this.lang=i,this.service=a,this.formLoader=!0,this.data={sliders:[{title:"title",image:"image",button:"button",link:"link"}],about:{title:"title",image:"image",description:"description"},destacados:{title:"",description:"",button:"",posts:[{type:"",title:"",image:"",button:"",link:""}]}}}ngOnInit(){this.getRecord()}getRecord(){this.formLoader=!0,this.service.find("home").subscribe({next:n=>{this.data=n.data.home?JSON.parse(n.data.home):{},this.formLoader=!1},error:n=>{this.formLoader=!1}})}onSubmit(n){return b(this,null,function*(){let i=n.target,a=new FormData(i),m={};a.forEach((d,e)=>{m[e]=d}),a.append("name","home"),this.service.update(a).subscribe({next:d=>{this.getRecord(),this.notification.success(d.message)},error:d=>{let e=d.error;e?e.errors?this.notification.error(Object.values(e.errors)[0]):this.notification.error(e.message):this.notification.error("Something Went Wrong")}})})}add_new(n,i){return b(this,null,function*(){let a=n.split("."),m=this.data;for(let e=0;e<a.length-1;e++)m=m[a[e]];let d=a[a.length-1];Array.isArray(m[d])||(m[d]=[]),m[d].push(i)})}removeItem(n,i){return b(this,null,function*(){let a=n.split("."),m=this.data;for(let e=0;e<a.length-1;e++)m=m[a[e]];let d=a[a.length-1];Array.isArray(m[d])?m[d].splice(i,1):console.error(`Target ${d} is not an array.`)})}};u.\u0275fac=function(i){return new(i||u)(x(H),x(D),x(M))},u.\u0275cmp=E({type:u,selectors:[["app-admin-settings-home"]],standalone:!0,features:[j],decls:19,vars:1,consts:[[1,"row","page-titles"],[1,"col-md-5","align-self-center"],[1,"text-themecolor"],[1,"col-md-7","align-self-center","text-end"],[1,"d-flex","justify-content-end","align-items-center"],[1,"breadcrumb","justify-content-end"],[1,"breadcrumb-item"],["href","javascript:void(0)"],[1,"breadcrumb-item","active"],[3,"ngSubmit"],[1,"text-center"],[1,"row"],[1,"row","pb-5"],[1,"col-md-12","text-center"],["type","submit",1,"btn","btn-info","text-white"],[1,"col-lg-12"],[1,"card"],[1,"card-header","bg-info"],[1,"mb-0","text-white"],[1,"card-body"],[1,"row","mb-4","px-3","py-3","border","box-seprator"],[1,"row","pb-2"],[1,"col-12","text-center"],["type","button",1,"btn","btn-success","text-white",3,"click"],[1,"col-md-6"],[1,"form-group"],[1,"form-label"],["name","about[title]",1,"form-control",3,"value"],[3,"image","name"],[1,"col-md-12"],["rows","10","name","about[description]",1,"form-control"],[1,"col-12"],[1,"card-header","bg-info","d-flex","justify-content-between","align-items-center"],[1,"col-md-4"],["name","destacados[title]",1,"form-control",3,"value"],["name","destacados[description]",1,"form-control",3,"value"],["name","destacados[button]",1,"form-control",3,"value"],["placeholder","Title",1,"form-control",3,"value","name"],["placeholder","Button",1,"form-control",3,"value","name"],["placeholder","Link",1,"form-control",3,"value","name"],["type","button",1,"delete_btn","btn","btn-danger",3,"click"]],template:function(i,a){i&1&&(l(0,"div",0)(1,"div",1)(2,"h4",2),r(3,"Home"),t()(),l(4,"div",3)(5,"div",4)(6,"ol",5)(7,"li",6)(8,"a",7),r(9,"Admin"),t()(),l(10,"li",8),r(11,"Home"),t()()()()(),l(12,"form",9),_("ngSubmit",function(d){return a.onSubmit(d)}),C(13,O,2,0,"p",10)(14,K,58,13,"div",11),l(15,"div",12)(16,"div",13)(17,"button",14),r(18,"Submit"),t()()()()),i&2&&(o(13),I(a.formLoader?13:14))},dependencies:[F,$,N,V,A,B],encapsulation:2});let c=u;return c})();export{Q as HomeComponent};
