import{a as d}from"./chunk-UPMV7PW5.js";import{a as l}from"./chunk-2HKXIZ2N.js";import{h as n,j as p,p as c,s as h,t as m}from"./chunk-57FAEB72.js";import{P as s,U as r}from"./chunk-TL672DAF.js";var k=(()=>{let e=class e{constructor(t,i,a,u,f){this.http=t,this.router=i,this.appService=a,this.adminService=u,this.language=f,this.apiUrl=h.apiUrl,this.data=[]}list(t){let i=`${this.apiUrl}/api/admin/filemanagers?search=${t.search}`;return this.http.get(i,{headers:new n({Authorization:`Bearer ${this.adminService.token}`,"Content-Type":"application/json"})})}create(t){let i=`${this.apiUrl}/api/admin/filemanagers`,a=t;return this.http.post(i,a,{headers:new n({Authorization:`Bearer ${this.adminService.token}`})})}update(t){let i=`${this.apiUrl}/api/admin/filemanagers/${t.id}?lang=${this.language.lang}`,a=t;return this.http.put(i,a,{headers:new n({Authorization:`Bearer ${this.adminService.token}`,"Content-Type":"application/json"})})}delete(t){let i=`${this.apiUrl}/api/admin/filemanagers/${t}`;return this.http.delete(i,{headers:new n({Authorization:`Bearer ${this.adminService.token}`,"Content-Type":"application/json"})})}};e.\u0275fac=function(i){return new(i||e)(r(p),r(c),r(m),r(l),r(d))},e.\u0275prov=s({token:e,factory:e.\u0275fac,providedIn:"root"});let o=e;return o})();export{k as a};
