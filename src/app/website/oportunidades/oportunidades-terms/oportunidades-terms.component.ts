import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { WebsiteService } from '../../website.service';

@Component({
  selector: 'app-oportunidades-terms',
  standalone: true,
  imports: [],
  templateUrl: './oportunidades-terms.component.html',
  styleUrl: './oportunidades-terms.component.css'
})
export class OportunidadesTermsComponent {

       public apiUrl:any = environment.apiUrl;
        constructor (
          public service:WebsiteService,
        ){
    
      
        }

}
