import { Component } from '@angular/core';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-events-thematic',
  standalone: true,
  imports: [],
  templateUrl: './events-thematic.component.html',
})
export class EventsThematicComponent {

  constructor(
    public lang:LanguageService
  ){

  }

}
