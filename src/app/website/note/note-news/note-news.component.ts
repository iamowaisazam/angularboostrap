import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { NoteTimelineComponent } from '../note-timeline/note-timeline.component';
import { WebsiteService } from '../../website.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-note-news',
  standalone: true,
  imports: [
    RouterLink,
    TranslateModule,
    CommonModule,
    NoteTimelineComponent
  ],
  templateUrl: './note-news.component.html',
  styleUrl: './note-news.component.css'
})

export class NoteNewsComponent {

  public posts:any = [];
  public toggle:any = [];
  @Input() data:any = [];

  constructor(
    public service:WebsiteService,
       @Inject(PLATFORM_ID) private platformId: object 
  ){

    if (isPlatformBrowser(this.platformId)) {
       this.loadYearData();
    }

  }


  loadYearData(){

    this.service.post_by_year().subscribe((value) => {
      
        console.log(value.data.data);
        
        
        let obj = value.data.data;
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              const element = obj[key];
              this.posts.push({
                year:key,
                items:element,
              });
            }      
        }

        this.posts = this.posts.reverse();

        if(this.posts[0]){
          this.toggle.push(this.posts[0].year);
        }

    });


  }

  public changetoggle(key:any) {
 
      if(this.toggle.includes(key)){
        const index = this.toggle.indexOf(key);
        this.toggle.splice(index, 1);
      }else{
        this.toggle.push(key);
      }
      
  }




}
