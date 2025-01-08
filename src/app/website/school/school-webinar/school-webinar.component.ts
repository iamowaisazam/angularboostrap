import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { WebsiteService } from '../../website.service';
import { environment } from '../../../../environments/environment';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-school-webinar',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
  ],
  templateUrl: './school-webinar.component.html',
  styleUrl: './school-webinar.component.css'
})
export class SchoolWebinarComponent {

         public posts:any = [];
         public apiUrl:any = environment.apiUrl;
         constructor (
           public service:WebsiteService,
           @Inject(PLATFORM_ID) private platformId: object
         ){
               if (isPlatformBrowser(this.platformId)) {
                 this.loadPosts();
               }
         }
         
           loadPosts(){
     
                  this.service.get_posts({
                    type:'webinar',
                    sort_by:'desc',
                    order_by:'created_at'
                  }).subscribe((value) => {
                      this.posts  = value.data.data; 
                  });
     
          }
     
     

}
