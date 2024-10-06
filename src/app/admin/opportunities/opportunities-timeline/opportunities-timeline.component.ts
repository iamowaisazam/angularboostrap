import { Component } from '@angular/core';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-opportunities-timeline',
  standalone: true,
  imports: [],
  templateUrl: './opportunities-timeline.component.html',
})
export class OpportunitiesTimelineComponent {

  constructor(
    public lang:LanguageService
  ){

  }

  
}
