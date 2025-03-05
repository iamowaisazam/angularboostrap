import { Component, Inject, PLATFORM_ID } from '@angular/core';

import { WebsiteService } from '../website.service';
import { isPlatformBrowser } from '@angular/common';
import { SafeHtmlPipe } from '../../safeHtml.pipe';

@Component({
  selector: 'app-compras',
  standalone: true,
  imports: [
    SafeHtmlPipe,
  ],
  templateUrl: './compras.component.html',
  styleUrl: './compras.component.css'
})
export class ComprasComponent {

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
