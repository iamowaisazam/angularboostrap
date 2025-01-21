import { Component } from '@angular/core';
import { WebsiteService } from '../../website.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-oportunidades-bid',
  standalone: true,
  imports: [],
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
