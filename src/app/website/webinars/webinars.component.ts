import { Component, Inject, PLATFORM_ID } from '@angular/core';
import {WebsiteService} from '../website.service';
import { RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-externalcourses',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './webinars.component.html',
  styleUrl: './webinars.component.css'
})
export class WebinarsComponent {

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
      type:'webinar',
      order_by:'created_at',
      sort_by:'desc'
    }).subscribe((value) => {
        this.posts = value.data.data;
    });

  }


}
