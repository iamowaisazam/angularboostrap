import { Component } from '@angular/core';
import { WebsiteService } from '../../website.service';

@Component({
  selector: 'app-website-about-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class AboutMapComponent {

  constructor (
    public service:WebsiteService
  ){
    
  }


}
