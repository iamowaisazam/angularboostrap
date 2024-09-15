import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AdminService } from '../admin.service';
import { AppService } from '../../app.service';

@Injectable({
  providedIn: 'root'
})


export class SliderService {

    private apiUrl = environment.apiUrl;
    public data:any = [];
 
    constructor(
        private http: HttpClient,
        private router: Router,
        public appService:AppService,
        public adminService:AdminService
    ) { 
    

    }


  /**
   * Create Method
   */
  list(): Observable<any> {

    const url = `${this.apiUrl}/admin/sliders`; // API endpoint for registration
    return this.http.get(url, {
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

    const url = `${this.apiUrl}/admin/sliders`; // API endpoint for registration
    const body = data; // Request payload
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
     edit(id:any): Observable<any> {

      const url = `${this.apiUrl}/admin/sliders/${id}`;
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
  update(data:any): Observable<any> {

    const url = `${this.apiUrl}/admin/sliders/${data.id}`; // API endpoint for registration
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

    const url = `${this.apiUrl}/admin/sliders/${id}`;
    return this.http.delete(url,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.adminService.token}`, 
        'Content-Type': 'application/json' 
      })
    });

  }


 
  
}
