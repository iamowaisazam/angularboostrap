import { Component, Input } from '@angular/core';
import {WebsiteService} from '../../website.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-note-timeline',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './note-timeline.component.html',
  styleUrl: './note-timeline.component.css'
})
export class NoteTimelineComponent {

  @Input() public data:any = [];

  constructor(
    public service:WebsiteService
  ){
    

  }

 
  

}
