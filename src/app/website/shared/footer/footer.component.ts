import { Component } from '@angular/core';
import { ResponsiveService } from '../../../core/services/responsive.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'web-footer',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor (
    public responsive: ResponsiveService,
  
  ){

   
  }

  

}
