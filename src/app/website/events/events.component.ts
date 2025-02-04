import { Component, Inject, PLATFORM_ID } from '@angular/core';
import {WebsiteService} from '../website.service';
import { RouterLink } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-web-events',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})

export class EventsComponent {

  public posts:any = [];
  public options:any = {
    type:'event',
    order_by:'created_at',
    sort_by:'desc',
    limit:10,
    status:1,
    page:1,
  };
  public paginations:any = [];

  constructor (
    public service:WebsiteService,
    @Inject(PLATFORM_ID) private platformId: object
  ){
      if(isPlatformBrowser(this.platformId)) {
        this.loadPosts();
      }
  }


  loadPosts(){

    this.paginations = [];
    this.posts = [];
    
    this.service.get_events(this.options).subscribe((value) => {
        this.posts = value.data;
        let totalPages = Math.ceil(value.data.total / this.options.limit);
        for (let index = 1; index < totalPages; index++) {
          this.paginations.push({
            'title':index,
          });
        }
    });

  }

  Page(number:any){
  
     this.options.page = number;
     this.loadPosts();
  }

}
