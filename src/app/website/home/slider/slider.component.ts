import { Component, Input } from '@angular/core';
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

  @Input() data: any = {};
  public activeI = 0;
  
  

  constructor (
    public service:WebsiteService
  ){



  }

  changeSlide(slide:any){
    this.activeI = slide;
  }

 public decode(data:any){
    return data ? JSON.parse(data) : [];     
 }
 
 
}
