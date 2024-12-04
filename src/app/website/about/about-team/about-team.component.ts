import { Component } from '@angular/core';
import { WebsiteService } from '../../website.service';

@Component({
  selector: 'app-wesbite-about-team',
  standalone: true,
  imports: [],
  templateUrl: './about-team.component.html',
  styleUrl: './about-team.component.css'
})
export class AboutTeamComponent {


  constructor (
    public service:WebsiteService
  ){
  
  }

  public data:any = [
    {
      id:1,
      name:"Director General",
      detail:"Pedro Flores",
      image:"./assets/web/teams/1.png",
    },
    {
      id:2,
      name:"Director de Programas",
      detail:"Alejandro Milanesi",
      image:"./assets/web/teams/2.png",
    },
    {
      id:3,
      name:"Director de Asuntos Internacionales",
      detail:"Alexander López",
      image:"./assets/web/teams/3.png",
    }
  ];

}
