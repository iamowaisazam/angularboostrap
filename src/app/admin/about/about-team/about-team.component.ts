import { Component } from '@angular/core';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-about-team',
  standalone: true,
  imports: [],
  templateUrl: './about-team.component.html',
})
export class AboutTeamComponent {

  constructor(
    public lang:LanguageService
  ){

  }

}
