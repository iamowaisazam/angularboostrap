import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { WebsiteService } from '../website.service';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../../environments/environment';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';



@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {

      public data:any;
      public api:any = environment.apiUrl;
    
      constructor (
        public service:WebsiteService,
        private sanitizer: DomSanitizer,
        @Inject(PLATFORM_ID) private platformId: object
      ){
  
        if(isPlatformBrowser(this.platformId)) {
           service.setPage('eventos');
        }
  
      }

      getSafeUrl(url: string): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
      }

}
