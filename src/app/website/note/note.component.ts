import { Component } from '@angular/core';
import { FeaturePostComponent } from '../home/home-feature-post/feature-post.component';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [
    FeaturePostComponent
  ],
  templateUrl: './note.component.html',
  styleUrl: './note.component.css'
})
export class NoteComponent {

}
