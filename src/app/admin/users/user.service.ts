import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AdminService } from '../admin.service';
import { AppService } from '../../app.service';
import { LanguageService } from '../../core/services/language.service';

@Injectable({
  providedIn: 'root'
})


export class UserService {

    private apiUrl = environment.apiUrl;
    public data:any = [];
 
    constructor(
        private http: HttpClient,
        private router: Router,
        public appService:AppService,
        public adminService:AdminService,
        public language:LanguageService
    ) { 
    

    }


  /**
   * Create Method
   */
  list(data:any):Observable<any> {

    let params = new HttpParams();
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            params = params.set(key, data[key]);
        }
    }

    params = params.set('lang', this.language.lang);
    return this.http.get(`${this.apiUrl}/api/admin/users/list`,
      { 
        params,
        headers: new HttpHeaders({
          'Authorization': `Bearer ${this.adminService.token}`, 
          'Content-Type': 'application/json' 
        })
      });

  }


  /**
   * Create Method
   */
  store(data:any): Observable<any> {
    const url = `${this.apiUrl}/api/admin/users/store?lang=${this.language.lang}`;
    const body = data;
    return this.http.post(url, body, {
        headers: new HttpHeaders({
          'Authorization': `Bearer ${this.adminService.token}`, 
          'Content-Type': 'application/json' 
        })
    });
  }
  
  
  /**
   * Create Method
   */
  update(data:any): Observable<any> {
    const url = `${this.apiUrl}/api/admin/users/update/${data.id}?lang=${this.language.lang}`;
    const body = data;
    return this.http.post(url, body, {
        headers: new HttpHeaders({
          'Authorization': `Bearer ${this.adminService.token}`, 
          'Content-Type': 'application/json' 
        })
    });
  }


   /**
   * Edit Method
   */
   delete(id:any): Observable<any> {
    const url = `${this.apiUrl}/api/admin/users/delete/${id}`;
    return this.http.get(url,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.adminService.token}`, 
        'Content-Type': 'application/json' 
      })
    });
  }


  
}
