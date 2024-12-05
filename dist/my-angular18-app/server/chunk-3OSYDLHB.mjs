import './polyfills.server.mjs';
import{a as d}from"./chunk-ALZNOHOH.mjs";import{a as u}from"./chunk-MJJAFQCG.mjs";import{b as l,c as m}from"./chunk-7DPT6SHR.mjs";import{C as c,o as a,p,q as h}from"./chunk-XI4GD5BT.mjs";import{P as s,U as r}from"./chunk-W2FOEFF4.mjs";var U=(()=>{let n=class n{constructor(i,t,e,g,f){this.http=i,this.router=t,this.appService=e,this.adminService=g,this.language=f,this.apiUrl=m.apiUrl,this.data=[]}list(i){let t=new p;for(let e in i)i.hasOwnProperty(e)&&(t=t.set(e,i[e]));return t=t.set("lang",this.language.lang),this.http.get(`${this.apiUrl}/api/admin/posts`,{params:t,headers:new a({Authorization:`Bearer ${this.adminService.token}`,"Content-Type":"application/json"})})}create(i){let t=`${this.apiUrl}/api/admin/posts?lang=${this.language.lang}`,e=i;return this.http.post(t,e,{headers:new a({Authorization:`Bearer ${this.adminService.token}`,"Content-Type":"application/json"})})}edit(i){let t=`${this.apiUrl}/api/admin/posts/${i}?lang=${this.language.lang}`;return this.http.get(t,{headers:new a({Authorization:`Bearer ${this.adminService.token}`,"Content-Type":"application/json"})})}update(i){let t=`${this.apiUrl}/api/admin/posts/${i.id}?lang=${this.language.lang}`,e=i;return this.http.put(t,e,{headers:new a({Authorization:`Bearer ${this.adminService.token}`,"Content-Type":"application/json"})})}delete(i){let t=`${this.apiUrl}/api/admin/posts/${i}`;return this.http.delete(t,{headers:new a({Authorization:`Bearer ${this.adminService.token}`,"Content-Type":"application/json"})})}};n.\u0275fac=function(t){return new(t||n)(r(h),r(c),r(l),r(u),r(d))},n.\u0275prov=s({token:n,factory:n.\u0275fac,providedIn:"root"});let o=n;return o})();export{U as a};