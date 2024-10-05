import { Component } from '@angular/core';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-about-council',
  standalone: true,
  imports: [],
  templateUrl: './about-council.component.html',
})
export class AboutCouncilComponent {

  constructor(
    public lang:LanguageService
  ){

  }

}
