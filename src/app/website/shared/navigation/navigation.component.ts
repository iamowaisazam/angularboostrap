import { CommonModule} from '@angular/common';
import { Component} from '@angular/core';
import { NotificationService } from '../../../core/notification/notification.service';
import { Router, RouterLink } from '@angular/router';
import { ResponsiveService } from '../../../core/services/responsive.service';
import { WebsiteService } from '../../website.service';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'web-navigation',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

  constructor (
    public responsive: ResponsiveService,
    public website: WebsiteService
  ){

   
  }


}
