import './polyfills.server.mjs';
import{b as m,c as d}from"./chunk-7DPT6SHR.mjs";import{C as u,k as p,o as l,q as f}from"./chunk-XI4GD5BT.mjs";import{P as h,U as r,sa as c}from"./chunk-W2FOEFF4.mjs";import{h as s}from"./chunk-5XUXGTUW.mjs";var C=(()=>{let e=class e{constructor(t,i,o,a){this.platformId=t,this.http=i,this.router=o,this.appService=a,this.apiUrl=d.apiUrl,this.token=null,this.auth=!1}register(t,i,o){let a=`${this.apiUrl}/api/admin/auth/register`,g={fullname:t,email:i,password:o};return this.http.post(a,g,{headers:new l({"Content-Type":"application/json"})})}login(t,i){let o=`${this.apiUrl}/api/admin/auth/login`,a={email:t,password:i};return this.http.post(o,a,{headers:new l({"Content-Type":"application/json"})})}isAuthenticated(){return p(this.platformId)?!!localStorage.getItem("token"):!1}setAuth(){return s(this,null,function*(){if(p(this.platformId)){let t=yield localStorage.getItem("token");t?(this.token=t,this.auth=!0):(this.token=null,this.auth=!1)}})}logout(){return s(this,null,function*(){this.appService.apploading=!0,(yield localStorage.getItem("token"))?(localStorage.removeItem("token"),this.token=null,this.auth=!1,this.appService.apploading=!1):(this.token=null,this.auth=!1,this.appService.apploading=!1)})}};e.\u0275fac=function(i){return new(i||e)(r(c),r(f),r(u),r(m))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();export{C as a};