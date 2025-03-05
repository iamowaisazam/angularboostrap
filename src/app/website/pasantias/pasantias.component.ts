import { Component, Inject, PLATFORM_ID } from '@angular/core';

import { WebsiteService } from '../website.service';
import { isPlatformBrowser } from '@angular/common';
import { SafeHtmlPipe } from '../../safeHtml.pipe';

@Component({
  selector: 'app-pasantias',
  standalone: true,
  imports: [
    SafeHtmlPipe,
  ],
  templateUrl: './pasantias.component.html',
  styleUrl: './pasantias.component.css'
})
export class PasantiasComponent {

    public data:any;
  
    constructor (
      public service:WebsiteService,
      @Inject(PLATFORM_ID) private platformId: object
    ){

      if(isPlatformBrowser(this.platformId)) {
         service.setPage('oportunidades');
      }

    }
  

}
