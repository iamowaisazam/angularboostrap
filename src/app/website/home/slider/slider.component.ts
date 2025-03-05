import { Component, Input } from '@angular/core';
import { WebsiteService } from '../../website.service';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'website-slider',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {

  @Input() data: any = {};
  public activeI = 0;
  public apiUrl = environment.apiUrl;
  
  

  constructor (
    public service:WebsiteService
  ){
  


    setInterval(() => {


    if (this.data?.length) {
        this.activeI = (this.activeI + 1) % this.data.length;
      }
        
    }, 9000); 

  }

  changeSlide(slide:any){
    this.activeI = slide;
  }

 public decode(data:any){
    return data ? JSON.parse(data) : [];     
 }
 
 
}
