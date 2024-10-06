import { Component } from '@angular/core';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-events-actividades',
  standalone: true,
  imports: [],
  templateUrl: './events-actividades.component.html',
})
export class EventsActividadesComponent {

  constructor(
    public lang:LanguageService
  ){

  }

}
