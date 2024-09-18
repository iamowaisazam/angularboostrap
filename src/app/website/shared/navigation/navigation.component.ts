import { CommonModule} from '@angular/common';
import { Component} from '@angular/core';
import { NotificationService } from '../../../core/notification/notification.service';
import { Router } from '@angular/router';
import { ResponsiveService } from '../../../core/services/responsive.service';
import { log } from 'console';
import { WebsiteService } from '../../website.service';


@Component({
  selector: 'web-navigation',
  standalone: true,
  imports: [
    CommonModule,
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
