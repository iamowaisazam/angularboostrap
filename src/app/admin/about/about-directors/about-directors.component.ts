import { Component } from '@angular/core';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-about-directors',
  standalone: true,
  imports: [],
  templateUrl: './about-directors.component.html',
})
export class AboutDirectorsComponent {

  constructor(
    public lang:LanguageService
  ){

  }

}
