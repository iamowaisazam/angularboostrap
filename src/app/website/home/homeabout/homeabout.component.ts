import { Component, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'website-homeabout',
  standalone: true,
  imports: [],
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
