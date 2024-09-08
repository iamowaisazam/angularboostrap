import { Component, OnInit,Inject,HostListener  } from '@angular/core';
import { Router, RouterLink, RouterOutlet,NavigationEnd  } from '@angular/router';
import { isPlatformBrowser,DOCUMENT, CommonModule  } from '@angular/common';
import { filter } from 'rxjs/operators';
import { AdminService } from './admin.service';
import { TranslateModule,TranslateService } from '@ngx-translate/core';






// import { FooterComponent} from './shared/footer/footer.component';
// import { HeaderComponent } from './shared/header/header.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
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

  
  constructor (
    private router:Router,
    public service:AdminService,
    private translateService:TranslateService,
    @Inject(DOCUMENT) private document: Document
  ){

 




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
       
    if(this.sidebarToggle){
      this.sidebarToggle = false;
    }else{
      this.sidebarToggle = true;
    }

      if (document.body.classList.contains('mini-sidebar')) {
          document.body.classList.remove("mini-sidebar");
      } else {
          document.body.classList.add("mini-sidebar");
      }

  
  }


  toggleDropdown(menuName:string) {

    console.log('====================================');
    console.log(menuName);
    console.log('====================================');
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
  
  }

  

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    const clickedInside = (event.target as HTMLElement).closest('.dropdown');
    if (!clickedInside) {
      this.myDropDown = "";
    }
  }

  handleLanguage(lang:string){

    this.service.appService.setLanguage(lang);
    this.translateService.use(lang);
    this.myDropDown = "";

  }

  



 
}
