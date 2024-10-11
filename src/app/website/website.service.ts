import { Injectable} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    const url = `${this.apiUrl}/web/settings?lang=${this.language.lang}`;
    return this.http.get(url)
  }

  find(data:any): Observable<any> {
      const url = `${this.apiUrl}/web/settings/${data}?lang=${this.language.lang}`;
      return this.http.get(url)
  }


  find1(){
    this.list().subscribe((value) => {
      
      let data = value.data;
      Object.keys(data).forEach(key => {
        // console.log();
        
        data[key] = JSON.parse(data[key]) ?? '';
      });
      this.data = data;

      
      
      
    });
  }

  



    
}

