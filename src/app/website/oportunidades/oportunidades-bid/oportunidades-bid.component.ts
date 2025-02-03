import { Component } from '@angular/core';
import { WebsiteService } from '../../website.service';
import { environment } from '../../../../environments/environment';
import { SafeHtmlPipe } from '../../../safeHtml.pipe';

@Component({
  selector: 'app-oportunidades-bid',
  standalone: true,
  imports: [
    SafeHtmlPipe
  ],
  templateUrl: './oportunidades-bid.component.html',
  styleUrl: './oportunidades-bid.component.css'
})
export class OportunidadesBidComponent {

        public apiUrl:any = environment.apiUrl;
      constructor (
        public service:WebsiteService,
      ){
  
    
      }

}
