import { Component } from '@angular/core';
import { SliderService } from './slider.service';
import { Router } from 'express';
import { CommonModule, NgStyle, NgTemplateOutlet } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [ 
    RouterOutlet
  ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {


 
}
