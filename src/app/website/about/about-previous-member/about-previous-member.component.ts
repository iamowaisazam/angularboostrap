import { Component } from '@angular/core';
import { WebsiteService } from '../../website.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-website-about-previous-member',
  standalone: true,
  imports: [],
  templateUrl: './about-previous-member.component.html',
  styleUrl: './about-previous-member.component.css'
})
export class AboutPreviousMemberComponent {

  public apiUrl:any = environment.apiUrl;

  constructor (
    public service:WebsiteService
  ){
    
  
  }

}
