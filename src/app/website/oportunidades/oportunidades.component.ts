import { Component } from '@angular/core';
import { OportunidadesHeroComponent } from './oportunidades-hero/oportunidades-hero.component';
import { OportunidadesBidComponent } from './oportunidades-bid/oportunidades-bid.component';
import { OportunidadesTermsComponent } from './oportunidades-terms/oportunidades-terms.component';

@Component({
  selector: 'app-oportunidades',
  standalone: true,
  imports: [
    OportunidadesHeroComponent,
    OportunidadesBidComponent,
    OportunidadesTermsComponent
  ],
  templateUrl: './oportunidades.component.html',
  styleUrl: './oportunidades.component.css'
})
export class OportunidadesComponent {

}
