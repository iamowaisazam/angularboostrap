import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { WebsiteService } from '../website.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { environment } from '../../../environments/environment';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
  ],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {

      public collabs:any = [];

      public data:any;
      public api:any = environment.apiUrl;
      public events:any = [];
    
      constructor (
        public service:WebsiteService,
        private sanitizer: DomSanitizer,
        @Inject(PLATFORM_ID) private platformId: object
      ){
  
        if(isPlatformBrowser(this.platformId)) {
           service.setPage('eventos');

           this.service.get_events({status:1,is_featured:1,order_by:'created_at'}).subscribe((value) => {
            this.events = value.data.data ? value.data.data : [] ;
          });


        }
  
      }

      getSafeUrl(url: string): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
      }

      public setCollab(key:any){

          if(this.collabs.includes(key)){
            const index = this.collabs.indexOf(key);
            this.collabs.splice(index, 1);
          }else{
            this.collabs.push(key);
          }

      }

}
