import { Component } from '@angular/core';
import { ResponsiveService } from '../../../core/services/responsive.service';

@Component({
  selector: 'web-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor (
    public responsive: ResponsiveService,
  
  ){

   
  }

  

}
