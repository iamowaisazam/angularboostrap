import { Component } from '@angular/core';
import { WebsiteService } from '../../website.service';

@Component({
  selector: 'app-website-about-directors',
  standalone: true,
  imports: [],
  templateUrl: './about-directors.component.html',
  styleUrl: './about-directors.component.css'
})
export class AboutDirectorsComponent {

  constructor (
    public service:WebsiteService
  ){
    
  }
  
}
