import { Component } from '@angular/core';
import { WebsiteService } from '../../website.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-website-about-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class AboutMapComponent {

  public apiUrl:any = environment.apiUrl;
  constructor (
    public service:WebsiteService
  ){
    
    
    
  }


}
