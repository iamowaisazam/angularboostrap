import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { isPlatformBrowser } from '@angular/common';


@Injectable({
  providedIn: 'root'
})


export class AdminService {

    private apiUrl = environment.apiUrl; // Base URL from environment file
    public token:any = null;
    public auth:any = false;
 
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

    const url = `${this.apiUrl}/admin/auth/register`; // API endpoint for registration
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
    const url = `${this.apiUrl}/admin/auth/login`; // API endpoint for login
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
        }else{
            this.token = null;
            this.auth = false;
            // this.appService.apploading = false;
        }

    }

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
