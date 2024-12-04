import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AdminService } from '../../admin/admin.service';
import { AppService } from '../../app.service';
import { NotificationService } from '../../core/notification/notification.service';
import { LanguageService } from '../../core/services/language.service';

@Injectable({
  providedIn: 'root'
})


export class SettingService {

    private apiUrl = environment.apiUrl;
    private dataSubject = new BehaviorSubject<any>({}); 
    public data = this.dataSubject.asObservable();
    public loading : any = false;

    constructor(
        private http: HttpClient,
        private router: Router,
        public appService:AppService,
        public adminService:AdminService,
        public notification:NotificationService,
        public language:LanguageService
    ) { 
    

    }


  /**
   * Create Method
   */
  list(): Observable<any> {

    const url = `${this.apiUrl}/api/admin/settings?lang=${this.language.lang}`;
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
   find(data:any): Observable<any> {

    const url = `${this.apiUrl}/api/admin/settings/${data}?lang=${this.language.lang}`;
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
  update(data:any): Observable<any> {
    
    const url = `${this.apiUrl}/api/admin/settings?lang=${this.language.lang}`;
    const body = data;
    return this.http.post(url, body, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.adminService.token}`, 
        // 'Content-Type': 'application/json' 
      })
    });

  }

    /**
   * Edit Method
   */
    edit(id:any): Observable<any> {

      const url = `${this.apiUrl}/api/admin/sliders/${id}`;
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

    const url = `${this.apiUrl}/api/admin/sliders`; // API endpoint for registration
    const body = data; // Request payload
    return this.http.post(url, body, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.adminService.token}`, 
        'Content-Type': 'application/json' 
      })
    });

  }


 
  
  
  



  


  loadSetting(){
    

    //  this.list().subscribe({
    //   next: (response:any) => {

    //     let newData:any = {};
    //     response.data.forEach((element:any) => {
    //       newData[element.name] = element;
    //     });

    //     this.dataSubject.next(newData);
    //     this.loading = false;

    //   },
    //   error: (response:any) => {
    //     const error = response.error;
    //     if(error){
    //         if(error.errors){
    //             this.notification.error(Object.values(error.errors)[0]);
    //         }else{
    //             this.notification.error(error.message);
    //         }
    //     }else{
    //       this.notification.error('Something Went Wrong')
    //     }
    //     this.loading = false;
    //   }      
    // });
  

    
  }

 
  
}
