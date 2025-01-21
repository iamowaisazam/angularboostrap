import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { OportunidadesHeroComponent } from './oportunidades-hero/oportunidades-hero.component';
import { OportunidadesBidComponent } from './oportunidades-bid/oportunidades-bid.component';
import { OportunidadesTermsComponent } from './oportunidades-terms/oportunidades-terms.component';
import { WebsiteService } from '../website.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-oportunidades',
  standalone: true,
  imports: [
    OportunidadesHeroComponent,
    OportunidadesBidComponent,
    OportunidadesTermsComponent
  ],
  templateUrl: './oportunidades.component.html',
  styleUrl: './oportunidades.component.css'
})
export class OportunidadesComponent {

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
