import { Component } from '@angular/core';
import { WebsiteService } from '../../website.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'website-slider',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {

  public activeI = 0;
  public slider:any = [];

  constructor (
    service:WebsiteService
  ){

    service.find('home_slider').subscribe((value) => {
      let data = value.data.home_slider ? JSON.parse(value.data.home_slider) : []; 
      this.slider = data;      
    });

  }

  changeSlide(slide:any){
    this.activeI = slide;
  }
  
}
