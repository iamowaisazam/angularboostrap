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

  find(data:any): Observable<any> {
      const url = `${this.apiUrl}/web/settings/${data}?lang=${this.language.lang}`;
      return this.http.get(url);
  }



    
}

