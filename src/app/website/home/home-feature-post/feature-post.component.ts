import { Component, Input, output } from '@angular/core';
import { WebsiteService } from '../../website.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'web-feature-post',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './feature-post.component.html',
  styleUrl: './feature-post.component.css'
})
export class FeaturePostComponent {


   @Input() data:any = [];

   public posts:any = [];

  constructor (
    public service:WebsiteService
  ){

    this.loadYearData();

  }

  loadYearData(){

    this.service.get_posts({type:'post',limit:6}).subscribe((value) => {
        this.posts = value.data.data;
    });

  }



}
