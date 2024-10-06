import { Component } from '@angular/core';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-events-plenary',
  standalone: true,
  imports: [],
  templateUrl: './events-plenary.component.html',
})
export class EventsPlenaryComponent {

  constructor(
    public lang:LanguageService
  ){

  }

}
