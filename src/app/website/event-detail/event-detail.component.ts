import { Component } from '@angular/core';
import { WebsiteService } from '../website.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SafeHtmlPipe } from '../../safeHtml.pipe';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [
    RouterLink,
    SafeHtmlPipe
  ],
  templateUrl: './event-detail.component.html',
  styleUrl: './event-detail.component.css'
})
export class EventDetailComponent {

  public apiUrl:any = environment.apiUrl;
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
    this.service.get_events({limit:1,slug:this.id}).subscribe((value) => {
        this.data = value.data.data[0] ?? null;
        this.getRelated();
    });
  }

  getRelated(){
    this.service.get_events({type:'event',limit:6}).subscribe((value) => {
        this.related = value.data.data;
    });
  }
  
}
