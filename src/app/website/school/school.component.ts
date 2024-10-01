import { Component } from '@angular/core';
import { SchoolTallersComponent } from './school-tallers/school-tallers.component';
import { SchoolFormacionesComponent } from './school-formaciones/school-formaciones.component';
import { SchoolWebinarComponent } from './school-webinar/school-webinar.component';

@Component({
  selector: 'app-school',
  standalone: true,
  imports: [
    SchoolTallersComponent,
    SchoolFormacionesComponent,
    SchoolWebinarComponent
  ],
  templateUrl: './school.component.html',
  styleUrl: './school.component.css'
})
export class SchoolComponent {






}
