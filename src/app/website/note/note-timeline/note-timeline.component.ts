import { Component, Input } from '@angular/core';
import {WebsiteService} from '../../website.service';

@Component({
  selector: 'app-note-timeline',
  standalone: true,
  imports: [],
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
