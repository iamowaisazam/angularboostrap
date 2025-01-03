import { Component, Inject, PLATFORM_ID } from '@angular/core';
import {WebsiteService} from '../website.service';
import { RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-respository',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './respository.component.html',
  styleUrl: './respository.component.css'
})
export class RespositoryComponent {

  public posts:any = [];
  
  
  constructor (
    public service:WebsiteService,
    @Inject(PLATFORM_ID) private platformId: object
  ){

    if(isPlatformBrowser(this.platformId)) {
       this.loadPosts();
    }

  }

  loadPosts(){

    this.service.get_posts({type:'pdf',dctype:'pdf'}).subscribe((value) => {
        this.posts = value.data.data;
    });

  }


}
