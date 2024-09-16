import { Component, OnInit,Inject,HostListener, ViewEncapsulation  } from '@angular/core';
import { Router, RouterLink, RouterOutlet,NavigationEnd  } from '@angular/router';
import { isPlatformBrowser,DOCUMENT, CommonModule  } from '@angular/common';
import { filter } from 'rxjs/operators';
import { AdminService } from './admin.service';
import { TranslateModule,TranslateService } from '@ngx-translate/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NotificationService } from '../core/notification/notification.service';
import { LanguageService } from '../core/services/language.service';






// import { FooterComponent} from './shared/footer/footer.component';
// import { HeaderComponent } from './shared/header/header.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  encapsulation: ViewEncapsulation.None, // Disable encapsulation

  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    CommonModule,
    TranslateModule,
  ]
})
export class AdminComponent implements OnInit {

    sidebarToggle :boolean = false;
    menuDropdown:string = "";
    currentUrl: string = '';
    myDropDown:string = "";
    languageDropDown = "en";
    isSmallScreen: boolean = false;

    mini_sidebar:boolean = false;
    show_sidebar:boolean = false;
    


  constructor (
    private router:Router,
    public service:AdminService,
    private translateService:TranslateService,
    @Inject(DOCUMENT) private document: Document,
    private breakpointObserver: BreakpointObserver,
    private notification: NotificationService,
    public language:LanguageService,
  ){

    const CUSTOM_BREAKPOINT = '(max-width: 768px)'; 
    this.breakpointObserver.observe([Breakpoints.Handset,CUSTOM_BREAKPOINT])
    .subscribe(result => {

      // this.isSmallScreen = result.breakpoints[CUSTOM_BREAKPOINT];
      this.isSmallScreen = this.breakpointObserver.isMatched(CUSTOM_BREAKPOINT);
      if(this.isSmallScreen){
        this.mini_sidebar = true;
      }else{
        this.mini_sidebar = false;
      }
      

      // console.log(isCustomBreakpoint);
      // if(this.isSmallScreen){
      //   this.mini_sidebar = true;
      // }

    });

 




  }

  ngOnInit(): void {

    
    if(!this.service.auth){
      this.router.navigate(['/login']);
    }


    // if(!this.db.auth){
    //   this.router.navigate(['/admin/login']);
  
    // }

    this.router.events.subscribe((val) => {
      this.currentUrl = this.router.url;
    });

 }


  navbarToggle() {

    if(this.isSmallScreen){

        if(this.sidebarToggle){
          this.show_sidebar = false;
          this.sidebarToggle = false;
        }else{
          this.show_sidebar = true;
          this.sidebarToggle = true;
        }

    }else{

        if(this.sidebarToggle){
          this.mini_sidebar = false;
          this.sidebarToggle = false;
        }else{
          this.mini_sidebar = true;
          this.sidebarToggle = true;
        }

    }

  }


  toggleDropdown(menuName:string) {
      if (this.menuDropdown == menuName) {
          this.menuDropdown = "";
      } else {
        this.menuDropdown = menuName;
      }
  }

  handleMyDropDown(name:any){

    if(name == this.myDropDown){
      this.myDropDown = "";
    }else{
      this.myDropDown = name;
    }

  }


  logout(){

    this.service.logout();
    this.router.navigate(['/login']);

    this.notification.info("User Logout Successfully");
  
  }

  

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    const clickedInside = (event.target as HTMLElement).closest('.dropdown');
    if (!clickedInside) {
      this.myDropDown = "";
    }
  }

  handleLanguage(lang:string){

    this.language.setLanguage(lang);
    this.translateService.use(lang);
    this.myDropDown = "";

  }
  
}
