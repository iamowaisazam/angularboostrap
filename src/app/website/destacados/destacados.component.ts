import { Component } from '@angular/core';
import {WebsiteService} from '../website.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-destacados',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './destacados.component.html',
  styleUrl: './destacados.component.css'
})

export class DestacadosComponent {

  public posts:any = [];
  public options:any = {
    type:'post',
    limit:10,
    page:1,
  };
  public paginations:any = [];

  constructor (
    public service:WebsiteService
  ){
    this.loadPosts();
  }


  loadPosts(){

    this.paginations = [];
    this.posts = [];
    
    this.service.get_posts(this.options).subscribe((value) => {
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
