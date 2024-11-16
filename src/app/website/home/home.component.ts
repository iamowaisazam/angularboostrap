import { Component } from '@angular/core';
import { SliderComponent } from './slider/slider.component';
import { FeaturePostComponent } from './home-feature-post/feature-post.component';
import { HomeaboutComponent } from './homeabout/homeabout.component';
import { WebsiteService } from '../website.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SliderComponent,
    FeaturePostComponent,
    HomeaboutComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public data:any;

  constructor (
    public service:WebsiteService
  ){


    service.setPage('home');

    // service.find('home').subscribe({
    //   next: (response:any) => {

    //     this.data = response.data.home ? JSON.parse(response.data.home) : {};

    //   },
    //   error: (response:any) => {
        
    //     const error = response.error;
    //     console.log('====================================');
    //     console.log(error);
    //     console.log('====================================');

    //   //   if(error){
    //   //       if(error.errors){
    //   //           this.notification.error(Object.values(error.errors)[0]);
    //   //       }else{
    //   //           this.notification.error(error.message);
    //   //       }
    //   //   }else{
    //   //     this.notification.error('Something Went Wrong')
    //   //   }
    //   }
    // });


  }



}
