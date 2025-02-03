import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { WebsiteService } from '../website.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../../environments/environment';
import {SafeHtmlPipe} from '../../safeHtml.pipe';


@Component({
  selector: 'app-repositorio-publicacion',
  standalone: true,
  imports: [
    SafeHtmlPipe,
    RouterLink
  ],
  templateUrl: './repositorio-detail.component.html',
  styleUrl: './repositorio-detail.component.css'
})
export class RepositorioPublicacionComponent {

  public apiUrl:any = environment.apiUrl;
  public id:any = null;
  public data:any = {};
  public related:any = [];

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
    this.service.get_posts({type:'pdf',limit:1,slug:this.id}).subscribe((value) => {
        this.data = value.data.data[0] ?? null;
        this.getRelated(this.data.category_id);
    });
  }

  getRelated(id:any){
    this.service.get_posts({type:'pdf',limit:6}).subscribe((value) => {
        this.related = value.data.data;
    });
  }

  
}
