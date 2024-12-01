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
  public slider:any = [];
  public home_about:any = [];

  constructor (
    service:WebsiteService
  ){

  

  }



}
