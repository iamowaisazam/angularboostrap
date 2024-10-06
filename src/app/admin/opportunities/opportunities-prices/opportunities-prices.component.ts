import { Component } from '@angular/core';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-opportunities-prices',
  standalone: true,
  imports: [],
  templateUrl: './opportunities-prices.component.html',
})

export class OpportunitiesPricesComponent {

  constructor(
    public lang:LanguageService
  ){

  }
  
}
