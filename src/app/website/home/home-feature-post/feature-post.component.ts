import { Component, Inject, Input, output, PLATFORM_ID } from '@angular/core';
import { WebsiteService } from '../../website.service';
import { RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

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
    public service:WebsiteService,
    @Inject(PLATFORM_ID) private platformId: object
  ){
      if (isPlatformBrowser(this.platformId)) {
        this.loadYearData();
      }
  }

  loadYearData(){
    this.service.get_posts({order_by:'created_at','sort_by':'desc',is_featured:1,type:'post',limit:6}).subscribe((value) => {
        this.posts = value.data.data;
    });
  }

}

