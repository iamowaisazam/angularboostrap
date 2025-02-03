import { Component } from '@angular/core';
import { WebsiteService } from '../website.service';
import { environment } from '../../../environments/environment';
import { SafeHtmlPipe } from '../../safeHtml.pipe';

@Component({
  selector: 'app-cooperation',
  standalone: true,
  imports: [
    SafeHtmlPipe
  ],
  templateUrl: './cooperation.component.html',
  styleUrl: './cooperation.component.css'
})
export class CooperationComponent {

  public apiUrl = environment.apiUrl;
  constructor (
    public service:WebsiteService
  ){
    
    service.setPage('cooperation');
  }



}


