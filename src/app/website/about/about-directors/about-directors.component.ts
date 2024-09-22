import { Component } from '@angular/core';

@Component({
  selector: 'app-website-about-directors',
  standalone: true,
  imports: [],
  templateUrl: './about-directors.component.html',
  styleUrl: './about-directors.component.css'
})
export class AboutDirectorsComponent {

  public data:any = [
    {
      id:1,
      name:"Presidenta del Consejo Directivo",
      detail:"Dª. Esther Dweck, Ministra da Gestão e da Inovação em Serviços Públicos.",
      image:"./assets/web/directors/1.png",
      country:"Brasil",
      icon:"./assets/web/countyIcons/brazil.png",
    },
    {
      id:2,
      name:"Primer Vicepresidente del Consejo Directivo",
      detail:"D. Ricardo José Menéndez Prieto, Ministro del Poder Popular de Planificación.",
      image:"./assets/web/directors/2.png",
      country:"Venezuela",
      icon:"./assets/web/countyIcons/venezuela.png",
    },
    {
      id:3,
      name:"Segundo Vicepresidente del Consejo Directivo",
      detail:"D. César Augusto Manrique Soacha, Director General del Departamento Administrativo de la Función Pública.",
      image:"./assets/web/directors/3.png",
      country:"Colombia",
      icon:"./assets/web/countyIcons/colombia.png",
    },
    {
      id:4,
      name:"Tercer Vicepresidente del Consejo Directivo",
      detail:"Felipe Chapman, Ministro de Economía y Finanzas.",
      image:"./assets/web/directors/4.png",
      country:"Panama",
      icon:"./assets/web/countyIcons/panama.png",
    },
    {
      id:5,
      name:"Secretario General del CLAD",
      detail:"D. Conrado Ricardo Ramos Larraburu",
      image:"./assets/web/directors/5.png",
      country:"",
      icon:"",
    }
  ];



}
