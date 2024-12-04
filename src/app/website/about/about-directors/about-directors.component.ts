import { Component } from '@angular/core';
import { WebsiteService } from '../../website.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-website-about-directors',
  standalone: true,
  imports: [],
  templateUrl: './about-directors.component.html',
  styleUrl: './about-directors.component.css'
})
export class AboutDirectorsComponent {

  public apiUrl:any = environment.apiUrl;
  constructor (
    public service:WebsiteService
  ){
    
    
  }
  
}
