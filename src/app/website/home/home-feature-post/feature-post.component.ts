import { Component } from '@angular/core';

@Component({
  selector: 'web-feature-post',
  standalone: true,
  imports: [],
  templateUrl: './feature-post.component.html',
  styleUrl: './feature-post.component.css'
})
export class FeaturePostComponent {

  public data = [
    {
      id:1,
      category:"NOTICIAS",
      title:"El CLAD dirá presente en «States of the Future» en Brasil.",
      button:"Ver más",
      image:"./assets/images/Rectangle%204.png",
    },
    {
      id:2,
      category:"TALLER",
      title:"El CLAD realiza taller en Design Thinking para potenciar su plataforma tecnológicaa",
      button:"Ver más",
      image:"./assets/images/Image1.png",
    },
    {
      id:3,
      category:"NOTICIAS",
      title:"El CLAD y el KIPA se reúnen en Corea del Sur en aras de crear alianzas.",
      button:"Ver más",
      image:"./assets/images/Image2.png",
    },
    {
      id:4,
      category:"Revista",
      title:"La “Revista del CLAD Reforma y Democracia” inicia su proceso de digitalización",
      button:"Ver más",
      image:"./assets/images/Rectangle%204.png",
    },
    {
      id:5,
      category:"NOTICIAS",
      title:"Inicia el Encuentro Internacional de Alta Dirección Pública en Santiago de Chile",
      button:"Ver más",
      image:"./assets/images/Rectangle%204.png",
    },
    {
      id:6,
      category:"NOTICIAS",
      title:"El CLAD en alianza con ONU Mujeres desarrolla taller para promover la igualdad.",
      button:"Ver más",
      image:"./assets/images/Image3.png",
    },

  ]

}
