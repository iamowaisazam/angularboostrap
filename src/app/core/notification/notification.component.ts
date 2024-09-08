import { Component } from '@angular/core';
import { NotificationService } from './notification.service';
import { CommonModule } from '@angular/common';
  
@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})

export class NotificationComponent {

  constructor(
    public service:NotificationService
  ){

  }

  

}

