import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AdminService } from '../admin.service';
import { AppService } from '../../app.service';
import { LanguageService } from '../../core/services/language.service';

@Injectable({
  providedIn: 'root'
})


export class FilemanagerService {

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
  list(data:any): Observable<any> {

    const url = `${this.apiUrl}/api/admin/filemanagers?search=${data.search}`; // API endpoint for registration
    return this.http.get(url,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.adminService.token}`, 
        'Content-Type': 'application/json' 
      })
    });

  }

  /**
   * Create Method
   */
  create(data:any): Observable<any> {

    const url = `${this.apiUrl}/api/admin/filemanagers`; // API endpoint for registration
    const body = data; // Request payload
    return this.http.post(url, body, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.adminService.token}`, 
      })
    });

  }


  
  /**
   * Create Method
   */
  update(data:any): Observable<any> {

    const url = `${this.apiUrl}/api/admin/filemanagers/${data.id}?lang=${this.language.lang}`; // API endpoint for registration
    const body = data; // Request payload
    return this.http.put(url, body, {
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

      const url = `${this.apiUrl}/api/admin/filemanagers/${id}`;
      return this.http.delete(url,{
        headers: new HttpHeaders({
          'Authorization': `Bearer ${this.adminService.token}`, 
          'Content-Type': 'application/json' 
        })
      });

  }


  
}
