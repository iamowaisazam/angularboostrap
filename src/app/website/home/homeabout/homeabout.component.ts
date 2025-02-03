import { Component, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { SafeHtmlPipe } from '../../../safeHtml.pipe';

@Component({
  selector: 'website-homeabout',
  standalone: true,
  imports: [
    SafeHtmlPipe
  ],
  templateUrl: './homeabout.component.html',
  styleUrl: './homeabout.component.css'
})

export class HomeaboutComponent {

  @Input() data: any = {};
  public apiUrl = environment.apiUrl;
  
  constructor (
    
  ){

  


  }

}
