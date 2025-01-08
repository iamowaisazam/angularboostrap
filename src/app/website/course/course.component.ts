import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { WebsiteService } from '../website.service';
import { ActivatedRoute } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {

    public apiUrl:any = environment.apiUrl;
    public id:any = null;
    public data:any = {};
  

    constructor (
      public service:WebsiteService,
      private route: ActivatedRoute,
      @Inject(PLATFORM_ID) private platformId: object
    ){
      this.route.paramMap.subscribe((params) => {
        this.id = params.get('id');
        if (this.id) {
          if (isPlatformBrowser(this.platformId)) {
            this.loadPosts();
          }
        }
      });
    }
  
    loadPosts(){
      this.service.get_posts({type:'course',limit:1,slug:this.id}).subscribe((value) => {
          this.data = value.data.data[0] ?? null;
      });
    }

}
