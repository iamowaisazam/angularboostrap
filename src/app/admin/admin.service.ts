import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { isPlatformBrowser } from '@angular/common';


@Injectable({
  providedIn: 'root'
})


export class AdminService {
    public p:any = [];
    public permissions:any = [
      'dashboard',

      'users.menu',
      'users.list',
      'users.create',
      'users.edit',
      'users.delete',

      'destacados.menu',
      'destacados.list',
      'destacados.create',
      'destacados.edit',
      'destacados.delete',

      'events.menu',
      'events.list',
      'events.create',
      'events.edit',
      'events.delete',

      'pdf.menu',
      'pdf.list',
      'pdf.create',
      'pdf.edit',
      'pdf.delete',

      'document.menu',
      'document.list',
      'document.create',
      'document.edit',
      'document.delete',

      'course.menu',
      'course.list',
      'course.create',
      'course.edit',
      'course.delete',

      'webinars.menu',
      'webinars.list',
      'webinars.create',
      'webinars.edit',
      'webinars.delete',

      'newsletter.menu',
      'newsletter.list',
      'newsletter.delete',

      'filemanager.menu',
      'filemanager.list',
      'filemanger.edit',
      'filemanager.add',
      'filemanager.delete',

      'home.page',
      'quienes_somos.page',
      'cooperacion.page',
      'investigacion_y_documentos.page',
      'noticias.page',
      'repository.page',
      'escuela.page',
      'oportunidades.page',
      'eventos.page',
    ];

    private apiUrl = environment.apiUrl; // Base URL from environment file
    public token:any = null;
    public auth:any = false;
    public user:any = [];
 
    constructor(
      @Inject(PLATFORM_ID) private platformId: Object,
        private http: HttpClient,
        private router: Router,
        public appService:AppService
    ) { 
    

    }


 


    /**
   * Register a new user
   * @param name User's full name
   * @param email User's email
   * @param password User's password
   * @returns Observable of the API response
   */
  register(fullname: string, email: string, password: string): Observable<any> {

    const url = `${this.apiUrl}/api/admin/auth/register`; // API endpoint for registration
    const body = { fullname, email, password }; // Request payload
    
    return this.http.post(url, body, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });

  }


  /**
   * Login an existing user
   * @param email User's email
   * @param password User's password
   * @returns Observable of the API response
   */
  login(email: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/api/admin/auth/login`; // API endpoint for login
    const body = { email, password }; // Request payload
    return this.http.post(url, body, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
  

  /**
   * Login an existing user
   * @param email User's email
   * @param password User's password
   * @returns Observable of the API response
   */
  isAuthenticated(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return !!localStorage.getItem('token');
    }
    return false;
  }



  /**
   * Login an existing user
   * @returns Observable of the API response
   */
  async setAuth(){
    
    if (isPlatformBrowser(this.platformId)) {

        // this.appService.apploading = true;
        const token = await localStorage.getItem('token');  
        if (token) {
            this.token = token;
            this.auth = true;
            // this.appService.apploading = false;

            this.getAuth(token).subscribe({
              next: (response:any) => {
                this.user = response.data;
                this.p = response.data.permissions;
              },
              error: (response:any) => {
                localStorage.removeItem('token');
                this.token = null;
                this.auth = false;
                this.appService.apploading = false;
              
              }
            });

        }else{
            this.token = null;
            this.auth = false;
            // this.appService.apploading = false;
        }

    }

  }

    /**
     * Create Method
     */
    getAuth(token:any):Observable<any> {

      let params = new HttpParams();
      return this.http.get(`${this.apiUrl}/api/admin/profile`,
        { 
          params,
          headers: new HttpHeaders({
            'Authorization': `Bearer ${token}`, 
            'Content-Type': 'application/json' 
          })
        });

    }



   /**
   * Login an existing user
   * @param email User's email
   * @param password User's password
   * @returns Observable of the API response
   */
   async logout(){
    

        this.appService.apploading = true;
        const token = await localStorage.getItem('token');
    
        if (token) {
            localStorage.removeItem('token');
            this.token = null;
            this.auth = false;
            this.appService.apploading = false;
        }else{
            this.token = null;
            this.auth = false;
            this.appService.apploading = false;
        }

  }
  
  
}
