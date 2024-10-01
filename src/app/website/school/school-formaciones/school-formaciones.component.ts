import { Component } from '@angular/core';

@Component({
  selector: 'app-school-formaciones',
  standalone: true,
  imports: [],
  templateUrl: './school-formaciones.component.html',
  styleUrl: './school-formaciones.component.css'
})
export class SchoolFormacionesComponent {

  public cards:any = [
    {
      'title':"Máster Universitario en Derecho del Trabajo y de la Seguridad Social",
      "button": "Convocatoria abierta",
      "sub" :"En alianza con UNIR España",
      "des":"Hasta el lunes 2 de septiembre de 2024 (inclusive)",
      "sub2":"Costo / Becas: Becas parciales",
      "image":"./assets/web/formaciones1.png",
    },
    {
      'title':"Gestión de las competencias laborales de los funcionarios públicos",
      "button": "Convocatoria abierta",
      "sub" :"01 de julio al 23 de septiembre de 2024",
      "image":"./assets/web/formaciones2.png",
    },
    {
      'title':"Gestión de las competencias laborales de los funcionarios públicos",
      "button": "Convocatoria abierta",
      "sub" :"01 de julio al 23 de septiembre de 2024",
      "image":"./assets/web/formaciones2.png",
    },
  
];

}
