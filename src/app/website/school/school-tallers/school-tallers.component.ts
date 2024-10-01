import { Component } from '@angular/core';

@Component({
  selector: 'app-school-tallers',
  standalone: true,
  imports: [],
  templateUrl: './school-tallers.component.html',
  styleUrl: './school-tallers.component.css'
})
export class SchoolTallersComponent {

  public cards:any = [
    {
      'title':"Gobernanza de la Inteligencia Artificial en la Administración Pública",
      "button": "Convocatoria abierta",
      "sub" :"01 de julio al 23 de septiembre de 2024",
      "image":"./assets/web/card1.png",
    },
    {
      'title':"Gestión de las competencias laborales de los funcionarios públicos",
      "button": "Convocatoria abierta",
      "sub" :"01 de julio al 23 de septiembre de 2024",
      "image":"./assets/web/card2.png",
    },
    {
      'title':"Ciudades Sostenibles: desarrollo de proyectos. Los Objetivos de Desarrollo Sostenible (ODS)",
      "button": "Convocatoria abierta",
      "sub" :"01 de julio al 23 de septiembre de 2024",
      "image":"./assets/web/card1.png",
    }
];

}
