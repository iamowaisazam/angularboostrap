import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { TopbarComponent } from './shared/topbar/topbar.component';
import { NavigationComponent } from './shared/navigation/navigation.component';




@Component({
  selector: 'app-website',
  standalone: true,
  imports: [
    RouterOutlet,
    FooterComponent,
    TopbarComponent,
    NavigationComponent
  ],
  templateUrl: './website.component.html',
  styleUrl: './website.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class WebsiteComponent {




}
