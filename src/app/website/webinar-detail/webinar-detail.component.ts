import { Component } from '@angular/core';
import { WebsiteService } from '../website.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';
import { SafeHtmlPipe } from '../../safeHtml.pipe';

@Component({
  selector: 'app-destacados-detail',
  standalone: true,
  imports: [
    RouterLink,
    SafeHtmlPipe
  ],
  templateUrl: './webinar-detail.component.html',
  styleUrl: './webinar-detail.component.css'
})
export class WebinarDetailComponent {

  public id:any = null;
  public data:any = {};
  public apiUrl:any = environment.apiUrl;
  

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
    this.service.get_posts({type:'webinar',limit:1,slug:this.id}).subscribe((value) => {
        this.data = value.data.data[0] ?? null;
      
    });
  }


  
}
