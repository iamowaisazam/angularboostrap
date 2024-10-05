import { Component } from '@angular/core';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-about-member',
  standalone: true,
  imports: [],
  templateUrl: './about-member.component.html',
})
export class AboutMemberComponent {

  constructor(
    public lang:LanguageService
  ){

  }

}
