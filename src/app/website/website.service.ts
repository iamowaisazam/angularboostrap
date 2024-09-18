import { Injectable} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})

export class WebsiteService {

  public is_mobile_nav = true;
  public mobile_menu = false;
  
  hanlde_mobile_menu(){

    if(this.mobile_menu){
      this.mobile_menu = false;
    } else{
     this.mobile_menu = true;
    }

  }



    
}

