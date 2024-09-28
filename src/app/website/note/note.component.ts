import { Component } from '@angular/core';
import { FeaturePostComponent } from '../home/home-feature-post/feature-post.component';
import { NoteNewsComponent } from './note-news/note-news.component';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [
    FeaturePostComponent,
    NoteNewsComponent
  ],
  templateUrl: './note.component.html',
  styleUrl: './note.component.css'
})
export class NoteComponent {

}
