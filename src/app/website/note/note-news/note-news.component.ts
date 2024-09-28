import { Component } from '@angular/core';
import { NoteTimelineComponent } from '../note-timeline/note-timeline.component';

@Component({
  selector: 'app-note-news',
  standalone: true,
  imports: [
    NoteTimelineComponent
  ],
  templateUrl: './note-news.component.html',
  styleUrl: './note-news.component.css'
})
export class NoteNewsComponent {

}
