import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { SchoolTallersComponent } from './school-tallers/school-tallers.component';
import { SchoolFormacionesComponent } from './school-formaciones/school-formaciones.component';
import { SchoolWebinarComponent } from './school-webinar/school-webinar.component';
import { WebsiteService } from '../website.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-school',
  standalone: true,
  imports: [
    CommonModule,
    SchoolTallersComponent,
    SchoolFormacionesComponent,
    SchoolWebinarComponent
  ],
  templateUrl: './school.component.html',
  styleUrl: './school.component.css'
})
export class SchoolComponent {
   
    public courses:any = [];
    public apiUrl:any = environment.apiUrl;
    public activeI = 0;
    

    constructor (
      public service:WebsiteService,
      @Inject(PLATFORM_ID) private platformId: object
    ){
        if (isPlatformBrowser(this.platformId)) {
          service.setPage('escuela');
        }
    }

    changeSlide(slide:any){
      this.activeI = slide;
    }







}
