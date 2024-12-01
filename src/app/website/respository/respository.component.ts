import { Component } from '@angular/core';
import {WebsiteService} from '../website.service';
import { RouterLink } from '@angular/router';

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
    public service:WebsiteService
  ){

    this.loadPosts();

  }

  loadPosts(){

    this.service.get_posts({type:'pdf',limit:10}).subscribe((value) => {
        this.posts = value.data.data;
    });

  }


}
