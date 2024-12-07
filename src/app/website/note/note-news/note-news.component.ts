import { Component, Input } from '@angular/core';
import { NoteTimelineComponent } from '../note-timeline/note-timeline.component';
import { WebsiteService } from '../../website.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-note-news',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    NoteTimelineComponent
  ],
  templateUrl: './note-news.component.html',
  styleUrl: './note-news.component.css'
})

export class NoteNewsComponent {

  
  public posts:any = [];
  public toggle:any = '';
  
  @Input() data:any = [];

  constructor(
    public service:WebsiteService
  ){
    this.loadYearData();
  }


  loadYearData(){

    this.service.post_by_year().subscribe((value) => {
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

        this.toggle = Object.keys(obj).sort()[0];
        
    });


    


  }

  public changetoggle(key:any) {
      this.toggle = key;
  }





}
