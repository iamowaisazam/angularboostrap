import { Injectable} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { NotificationService } from '../core/notification/notification.service';
import { LanguageService } from '../core/services/language.service';
import { AppService } from '../app.service';

@Injectable({
  providedIn: 'root'
})

export class WebsiteService {

  private apiUrl = environment.apiUrl;
  public is_mobile_nav = true;
  public mobile_menu = false;
  public data:any = {};
  public page:any ={};

  constructor(
    private http: HttpClient,
    private router: Router,
    public appService:AppService,
    public notification:NotificationService,
    public language:LanguageService  
) { 


}
  
  hanlde_mobile_menu(){
      if(this.mobile_menu){
        this.mobile_menu = false;
      } else{
      this.mobile_menu = true;
      }
  }


  list(): Observable<any> {
    const url = `${this.apiUrl}/api/web/settings?lang=${this.language.lang}`;
    return this.http.get(url)
  }

  find(data:any): Observable<any> {
      const url = `${this.apiUrl}/api/web/settings/${data}?lang=${this.language.lang}`;
      return this.http.get(url)
  }

  get_posts(data:any): Observable<any> {

    let params = new HttpParams();
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            params = params.set(key, data[key]);
        }
    }

    params = params.set('lang', this.language.lang);
    return this.http.get(`${this.apiUrl}/api/web/posts`,{ params })
    
  }

  post_by_year(): Observable<any> {
    const url = `${this.apiUrl}/api/web/posts_by_year?type=post&lang=${this.language.lang}`;
    return this.http.get(url)
  }

  get_categories(): Observable<any> {
    
    const url = `${this.apiUrl}/api/web/categories?lang=${this.language.lang}`;
    return this.http.get(url)
  }


  find1(){

    this.list().subscribe((value) => {
      let data = value.data;
      Object.keys(data).forEach(key => {
        data[key] = JSON.parse(data[key]) ?? '';
      });
      this.data = data;
    });

  }
 

  setPage(page:any){

      this.find(page).subscribe({
        next: (response:any) => {
          this.page = response.data[page] ? JSON.parse(response.data[page]) : {};

        },
        error: (response:any) => {
          
        }

    });
    
  }

  newsletter_list(data:any): Observable<any> {

    let params = new HttpParams();
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            params = params.set(key, data[key]);
        }
    }
    return this.http.get(`${this.apiUrl}/api/web/newsletter_list`,{ params })

  }

  newsletter_add(data:any): Observable<any> {
   
    let params = new HttpParams();
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            params = params.set(key, data[key]);
        }
    }
    return this.http.get(`${this.apiUrl}/api/web/newsletter_add`,{ params })

  }

  newsletter_remove(data:any): Observable<any> {
   
    let params = new HttpParams();
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            params = params.set(key, data[key]);
        }
    }
    return this.http.get(`${this.apiUrl}/api/web/newsletter_remove`,{ params })

  }

}

