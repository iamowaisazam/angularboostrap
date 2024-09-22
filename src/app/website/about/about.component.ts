import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    BannerComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
