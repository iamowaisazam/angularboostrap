import { Component } from '@angular/core';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-events-most',
  standalone: true,
  imports: [],
  templateUrl: './events-most.component.html',

})
export class EventsMostComponent {

  constructor(
    public lang:LanguageService
  ){

  }

}
