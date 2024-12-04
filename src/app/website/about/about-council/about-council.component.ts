import { Component } from '@angular/core';
import { WebsiteService } from '../../website.service';

@Component({
  selector: 'app-website-about-council',
  standalone: true,
  imports: [],
  templateUrl: './about-council.component.html',
  styleUrl: './about-council.component.css'
})
export class AboutCouncilComponent {

  constructor (
    public service:WebsiteService
  ){
  
  }

  public data:any = [
    {
      id:2,
      name:"Abel Carreira",
      detail:"Es miembro del Consejo de Administración del Instituto Nacional de Administración, I.P. (INA, I. P.), en Portugal. Es licenciado en Psicología y máster en Psicología Social y Organizativa por la Universidad de Lisboa. En su carrera de más de 35 años, ha ocupado diversos cargos profesionales en el mundo académico y en los sectores público y privado, en áreas relacionadas con el liderazgo, la innovación, el desarrollo y la transformación organizativa, la gestión del capital humano y la capacitación y formación.",
      image:"./assets/web/council/2.png",
    },
    {
      id:3,
      name:"María del Carmen Pardo",
      detail:"Profesora investigadora del Centro de Estudios Internacionales de El Colegio de México (1981 2014) y autora del primer plan de estudios del programa de licenciatura en Política y Administración Pública en esa institución. Profesora del Programa de Estudios Interdisciplinarios del El Colegio de México (abril 2014 a la fecha) y profesora invitada al Instituto de Investigación en Política Pública y Gobierno UDG (enero 2023 a la fecha). Investigadora Emérita del Sistema Nacional de Investigadores (2022). Miembro de la Junta de Gobierno del Colegio de Sonora (2023). Doctora en Historia por la Universidad Iberoamericana. Estudios de doctorado en la Universidad de Paris II. Autora de libros, artículos, capítulos de libros, comentarios, y reseñas sobre temas relativos a modernización administrativa, descentralización, federalización educativa, servicio civil de carrera, profesionalización, gobierno local y órganos autónomos.",
      image:"./assets/web/council/3.png",
    },
    {
      id:4,
      name:"Salvador Parrado",
      detail:"Es profesor de Ciencia Política de la Universidad Nacional de Educación a Distancia, Madrid. Ha sido investigador visitante en universidades de Alemania, Chile, México, Reino Unido y Turquía. Fue editor asociado de Public Administration y es codirector de Governance International desde 2002. Investiga sobre gestión pública, políticas regulatorias, servicio civil y gobernanza pública desde una perspectiva comparada.",
      image:"./assets/web/council/4.png",
    },
    {
      id:5,
      name:"Alketa Peci",
      detail:"Professora titular da EBAPE/FGV. Membro do Committee of Experts on Public Administration, United Nations (2021 2025). Editora Chefe da Revista de Administração Pública e Co Editora da Regulation&Governance. Membro do Conselho Consultivo da ENAP (BR) e do Conselho Estratégico da Escola de Administração Publica da Republica do Kosovo. Foi presidente da Associação Nacional de Pós graduação e Pesquisa em Administração (ANPAD) no triênio 2021 2023. Seus interesses de pesquisa se situam na interface da administração pública e teoria organizacional, com particular interesse nas áreas de regulação e instituições regulatórias, e relações estado mercado terceiro setor. Coordenou e integrou mais de 20 projetos de pesquisa que contaram com fundos de financiamentos externos. Publicou dezenas de artigos em revistas como Public Administration Review, Public Management Review, Governance, Regulation & Governance, assim como livros e capítulos de livros internacionais e nacionais.",
      image:"./assets/web/council/5.png",
    },
    {
      id:6,
      name:"Cristian Pliscoff",
      detail:"Doctor en Administración Pública, Universidad de Southern California; Magíster en Administración y Políticas Públicas, London School of Economics and Political Science; Magíster Ciencia Política, Universidad de Chile. Administrador Público Universidad de Chile. Fundador y ex presidente de la Red Interamericana de Educación en Administración Pública (Inpae) (2016-2018). Ha ejercido distintas funciones académicas tanto en pre como en posgrado en materias de gestión pública en Chile y América Latina. Consultor nacional e internacional en temas de modernización del Estado, gestión de personas en el Estado, así como también en procesos de acreditación académica de programas de pre y posgrado en administración y políticas públicas. Es profesional experto del Sistema de Alta Dirección Pública de la Dirección Nacional de Servicio Civil del Ministerio de Hacienda. Ha sido editor asociado de la revista Public Administration (2021 2023), y miembro de los comités editoriales de las revistas: Asian Journal of Public Administration y Gobernar.",
      image:"./assets/web/council/6.png",
    }

    
  ];

}
