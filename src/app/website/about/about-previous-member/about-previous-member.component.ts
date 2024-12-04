import { Component } from '@angular/core';
import { WebsiteService } from '../../website.service';

@Component({
  selector: 'app-website-about-previous-member',
  standalone: true,
  imports: [],
  templateUrl: './about-previous-member.component.html',
  styleUrl: './about-previous-member.component.css'
})
export class AboutPreviousMemberComponent {
  constructor (
    public service:WebsiteService
  ){
  
  }

}
