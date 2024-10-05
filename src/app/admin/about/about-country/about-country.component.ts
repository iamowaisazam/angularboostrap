import { Component } from '@angular/core';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-about-country',
  standalone: true,
  imports: [],
  templateUrl: './about-country.component.html',
})
export class AboutCountryComponent {

  constructor(
    public lang:LanguageService
  ){

  }

}
