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

 
  constructor (
    public service:WebsiteService
  ){

  }

  

 
 
}
