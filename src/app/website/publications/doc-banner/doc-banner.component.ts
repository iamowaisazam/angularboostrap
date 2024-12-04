import { Component } from '@angular/core';
import { WebsiteService } from '../../website.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-doc-banner',
  standalone: true,
  imports: [],
  templateUrl: './doc-banner.component.html',
  styleUrl: './doc-banner.component.css'
})
export class DocBannerComponent {

  public apiUrl:any = environment.apiUrl;
  constructor (
    public service:WebsiteService
  ){
    
    
  }

}
