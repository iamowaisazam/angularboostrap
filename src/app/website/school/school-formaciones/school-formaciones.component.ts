import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { WebsiteService } from '../../website.service';
import { environment } from '../../../../environments/environment';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-school-formaciones',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
  ],
  templateUrl: './school-formaciones.component.html',
  styleUrl: './school-formaciones.component.css'
})
export class SchoolFormacionesComponent {

    public course = '0';
    public courses:any = [];
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

        this.service.get_posts({type:'course',dctype:'clad course',sort_by:'desc',order_by:'created_at'}).subscribe((value) => {
          let array = [];
          let data  = value.data.data;
          for (let i = 0; i < data.length; i += 3) {

            array.push({id:i,data:data.slice(i, i + 3)});
          }
          this.courses = array;

        });

      }

      changeSlide(id:any){
        this.course = id;
      }


}
