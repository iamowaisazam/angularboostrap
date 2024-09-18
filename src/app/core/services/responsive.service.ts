import { Injectable} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Injectable({
  providedIn: 'root'
})

export class ResponsiveService {
 
    public is_desktop = false;
    public is_tablet = true;
    public is_mobile = true;

    constructor (
      private breakpointObserver: BreakpointObserver
    ){

      const DESKTOP_BREAKPOINT = '(max-width: 992px)'; 
      const TABLET_BREAKPOINT = '(max-width: 786px)'; 
      const MOBILE_BREAKPOINT = '(max-width: 576px)'; 

    this.breakpointObserver.observe([DESKTOP_BREAKPOINT,TABLET_BREAKPOINT,MOBILE_BREAKPOINT])
    .subscribe(result => {
        
      this.is_desktop = this.breakpointObserver.isMatched(DESKTOP_BREAKPOINT);
      this.is_tablet = this.breakpointObserver.isMatched(TABLET_BREAKPOINT);
      this.is_mobile = this.breakpointObserver.isMatched(MOBILE_BREAKPOINT);

    });

    
  }



       
  
}

