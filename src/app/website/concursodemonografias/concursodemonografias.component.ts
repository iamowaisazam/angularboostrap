import { Component, Inject, PLATFORM_ID } from '@angular/core';

import { WebsiteService } from '../website.service';
import { isPlatformBrowser } from '@angular/common';
import { SafeHtmlPipe } from '../../safeHtml.pipe';

@Component({
  selector: 'app-concursodemonografias',
  standalone: true,
  imports: [
    SafeHtmlPipe,
  ],
  templateUrl: './concursodemonografias.component.html',
  styleUrl: './concursodemonografias.component.css'
})
export class ConcursodemonografiasComponent {

    public data:any;
  
    constructor (
      public service:WebsiteService,
      @Inject(PLATFORM_ID) private platformId: object
    ){

      if(isPlatformBrowser(this.platformId)) {
         service.setPage('publication');
      }

    }
  

}
