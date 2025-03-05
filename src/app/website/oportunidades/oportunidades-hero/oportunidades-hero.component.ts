import { Component } from '@angular/core';
import { WebsiteService } from '../../website.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-oportunidades-hero',
  standalone: true,
  imports: [
    RouterLink

  ],
  templateUrl: './oportunidades-hero.component.html',
  styleUrl: './oportunidades-hero.component.css'
})
export class OportunidadesHeroComponent {

      constructor (
        public service:WebsiteService,
        // @Inject(PLATFORM_ID) private platformId: object
      ){
  
        // if(isPlatformBrowser(this.platformId)) {
           
        // }
  
      }
  

}
