import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { SliderComponent } from './slider/slider.component';
import { FeaturePostComponent } from './home-feature-post/feature-post.component';
import { HomeaboutComponent } from './homeabout/homeabout.component';
import { WebsiteService } from '../website.service';
import { isPlatformBrowser } from '@angular/common';

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
    public service:WebsiteService,
    @Inject(PLATFORM_ID) private platformId: object
  ){
    if (isPlatformBrowser(this.platformId)) {
     service.setPage('home');
    }
  }



}
