import { Component } from '@angular/core';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-agrement',
  standalone: true,
  imports: [],
  templateUrl: './agrement.component.html',
})
export class AgrementComponent {

  constructor(
    public lang:LanguageService
  ){

  }

}
