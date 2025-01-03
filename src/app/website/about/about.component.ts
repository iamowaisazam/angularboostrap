import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { AboutMapComponent } from './map/map.component';
import { AboutDirectorsComponent } from './about-directors/about-directors.component';
import { AboutTeamComponent } from './about-team/about-team.component';
import { AboutCouncilComponent } from './about-council/about-council.component';
import { AboutPreviousMemberComponent } from './about-previous-member/about-previous-member.component';
import { AboutDirectorCountryComponent } from './about-director-country/about-director-country.component';
import { WebsiteService } from '../website.service';
import { environment } from '../../../environments/environment';
import { RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    RouterLink,
    BannerComponent,
    AboutMapComponent,
    AboutDirectorsComponent,
    AboutTeamComponent,
    AboutCouncilComponent,
    AboutPreviousMemberComponent,
    AboutDirectorCountryComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  public data:any;

  public apiUrl:any = environment.apiUrl;

  constructor (
    public service:WebsiteService,
    @Inject(PLATFORM_ID) private platformId: object
  ){
    
    if (isPlatformBrowser(this.platformId)) {
      service.setPage('about');
    }
  }


}
