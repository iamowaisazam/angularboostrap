import { Component, Inject, PLATFORM_ID} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { AppService } from './app.service';
import { AdminService } from './admin/admin.service';
import { NotificationComponent } from './core/notification/notification.component';
import { NotificationService } from './core/notification/notification.service';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NotificationComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular18-app';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    public service:AppService,
    private adminService: AdminService,
    
    
  ) {

    // if (isPlatformBrowser(this.platformId)) {
      this.adminService.setAuth();
    // }


    // notification.error("Welcome to Material Pro admin");

   

       


  }





}
