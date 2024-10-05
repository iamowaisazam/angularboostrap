import { Component } from '@angular/core';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-working',
  standalone: true,
  imports: [],
  templateUrl: './working.component.html',
})
export class WorkingComponent {

  constructor(
    public lang:LanguageService
  ){

  }

}
