import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { AboutMapComponent } from './map/map.component';
import { AboutDirectorsComponent } from './about-directors/about-directors.component';
import { AboutTeamComponent } from './about-team/about-team.component';
import { AboutCouncilComponent } from './about-council/about-council.component';
import { AboutPreviousMemberComponent } from './about-previous-member/about-previous-member.component';
import { AboutDirectorCountryComponent } from './about-director-country/about-director-country.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
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

}
