import { Component, Inject, PLATFORM_ID } from '@angular/core';
import {WebsiteService} from '../website.service';
import { RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../../environments/environment';
import { SafeHtmlPipe } from '../../safeHtml.pipe';

@Component({
  selector: 'app-cladcourse',
  standalone: true,
  imports: [
    RouterLink,
    SafeHtmlPipe
  ],
  templateUrl: './cladcourses.component.html',
  styleUrl: './cladcourses.component.css'
})
export class CladCoursesComponent {

  public posts:any = [];
  public apiUrl:any = environment.apiUrl;
  
  constructor (
    public service:WebsiteService,
    @Inject(PLATFORM_ID) private platformId: object
  ){

    if(isPlatformBrowser(this.platformId)) {
       this.loadPosts();
    }

  }

  loadPosts(){

    this.service.get_posts({
      type:'course',
      dctype:'clad course',
      order_by:'created_at',
      sort_by:'desc'
    }).subscribe((value) => {
        this.posts = value.data.data;
    });

  }


}
