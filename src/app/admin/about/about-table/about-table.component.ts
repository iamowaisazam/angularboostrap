import { Component } from '@angular/core';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-about-table',
  standalone: true,
  imports: [],
  templateUrl: './about-table.component.html',
})
export class AboutTableComponent {

  constructor(
    public lang:LanguageService
  ){

  }

}
