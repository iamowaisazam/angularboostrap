import { Component } from '@angular/core';
import { WebsiteService } from '../website.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-destacados-detail',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './destacados-detail.component.html',
  styleUrl: './destacados-detail.component.css'
})
export class DestacadosDetailComponent {

  public id:any = null;
  public data:any = {};
  public related:any = [];

  constructor (
    public service:WebsiteService,
    private route: ActivatedRoute
  ){
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      if (this.id) {
        this.loadPosts();
      }
    });
  }

  loadPosts(){
    this.service.get_posts({type:'post',limit:1,slug:this.id}).subscribe((value) => {
        this.data = value.data.data[0] ?? null;
        this.getRelated(this.data.category_id);
    });
  }

  getRelated(id:any){
    this.service.get_posts({type:'post',limit:6,category:id}).subscribe((value) => {
        this.related = value.data.data;
    });
  }
  
}
