import { Component, Inject, PLATFORM_ID} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { AppService } from './app.service';
import { AdminService } from './admin/admin.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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

    if (isPlatformBrowser(this.platformId)) {
      this.adminService.setAuth();
    }

    // fetch("https://store.irhawears.com/ang/public/api/admin/auth/users").then(async (res) => {
    //   console.log('====================================');
    //   console.log(await res.json());
    //   console.log('====================================');
    // }).catch(() => {

    // });

   

       


  }





}
