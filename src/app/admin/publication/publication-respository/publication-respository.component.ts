import { Component } from '@angular/core';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-publication-respository',
  standalone: true,
  imports: [],
  templateUrl: './publication-respository.component.html',
})
export class PublicationRespositoryComponent {

  constructor(
    public lang:LanguageService
  ){

  }


}
