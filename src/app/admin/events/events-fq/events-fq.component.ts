import { Component } from '@angular/core';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-events-fq',
  standalone: true,
  imports: [],
  templateUrl: './events-fq.component.html',
})
export class EventsFqComponent {

  constructor(
    public lang:LanguageService
  ){

  }


  
}
