import { Component, OnInit,Inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet,NavigationEnd  } from '@angular/router';
import { isPlatformBrowser,DOCUMENT, CommonModule  } from '@angular/common';
import { filter } from 'rxjs/operators';




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
    CommonModule
  ]
})
export class AdminComponent implements OnInit {

  sidebarToggle :boolean = false;
  menuDropdown:string = "";
  currentUrl: string = '';
  profileDropDown = false;

  
  constructor (
    private router:Router,
    @Inject(DOCUMENT) private document: Document
  ){





  }

  ngOnInit(): void {
    

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

  handleprofileDropDown(){
    this.profileDropDown = !this.profileDropDown;
  }



 
}
