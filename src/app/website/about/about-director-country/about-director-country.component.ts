import { Component } from '@angular/core';
import { WebsiteService } from '../../website.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-website-about-director-country',
  standalone: true,
  imports: [],
  templateUrl: './about-director-country.component.html',
  styleUrl: './about-director-country.component.css'
})
export class AboutDirectorCountryComponent {

  public apiUrl:any = environment.apiUrl;
  constructor (
    public service:WebsiteService
  ){
    
  
  }

  public data:any = [
    {
      id:1,
      title1:"D. Roberto Salcedo Aquino (Titular)",
      title2:"D. Jaime Arturo Larrazábal Escárraga (Alterno)",
      detail1:"Secretario de la Secretaría de la Función Pública",
      detail2:"Titular de la Unidad de Política de Recursos Humanos de la Administración Pública Federal Secretaría de la Función Pública",
      image:"./assets/web/countyIcons/mexico.png",
      country:"México",
    },
    {
      id:2,
      title1:"D. Guillermo Steve Valvivieso Payva (Titular)",
      title2:"Dª. Geraldine Elia Denise Mouchard Infantes (Alterno)",
      detail1:"Presidente Ejecutivo de la Autoridad Nacional del Servicio Civil – SERVIR",
      detail2:"Secretaria de Gestión Pública de la Presidencia del Consejo de Ministros",
      image:"./assets/web/countyIcons/peru.png",
      country:"Perú",
    },
    {
      id:3,
      title1:"D. Ricardo José Menéndez Prieto (Titular)",
      title2:"D . Wilmara Esther Lugo Morgado (Alterna)",
      title3:"D. José Gerardo Avendaño Rumbos (Alterno)",
      detail1:"Ministro del Poder Popular de Planificación",
      detail2:"Viceministra de Planificación Social e Institucional del Ministerio del Poder Popular de Planificación",
      detail3:"Viceministro de Planificación Estratégica y Política del Ministerio del Poder Popular de Planificación",
      image:"./assets/web/countyIcons/venezuela.png",
      country:"Venezuela",
    },
    {
      id:4,
      title1:"D. Sigmund Freund (Titular)",
      title2:"D . Grey Josefina Peña Cabral (Alterna)",
      detail1:"Ministro de Administración Pública (MAP)",
      detail2:"Viceministro de Reforma y Modernización de la Administración Pública del Ministerio de Administración Pública (MAP)",
      image:"./assets/web/countyIcons/republica-dominicana.png",
      country:"República Dominicana",
    },
    {
      id:5,
      title1:"D. Álvaro Elizalde Soto (Titular)",
      title2:"D. Felipe Melo Rivara (Alterno)",
      detail1:"Ministro Secretaría General de la Presidencia",
      detail2:"Director Nacional del Servicio Civil",
      image:"./assets/web/countyIcons/chile.png",
      country:"Chile",
    },
    {
      id:6,
      title1:"D. Marcelo Alejandro Montenegro Gómez – García (Titular)",
      title2:"D. Zenón Pedro Mamani Ticona (Alterno)",
      detail1:"Ministro de Economía y Finanzas Públicas",
      detail2:"Viceministro de Presupuesto y Contabilidad Fiscal",
      detail3:"Ministerio de Economía y Finanzas Públicas",
      image:"./assets/web/countyIcons/bolivia.png",
      country:"Bolivia",
    },
    {
      id:7,
      title1:"(Titular)",
      title2:"(Alterno)",
      detail1:"Jefe del Gabinete de Ministros",
      detail2:"Secretaria de Gestión y Empleo Público de Jefatura de Gabinete de Ministros",
      image:"./assets/web/countyIcons/argentina.png",
      country:"Argentina",
    },
    {
      id:8,
      title1:"D. César Augusto Manrique Soacha (Titular)",
      title2:"D. Jesús Hernando Amado Abril (Alterno)",
      detail1:"Director General del Departamento Administrativo de la Función Pública",
      detail2:"Subdirector del Departamento Administrativo de la Función Pública",
      image:"./assets/web/countyIcons/colombia.png",
      country:"Colombia",
    },
    {
      id:9,
      title1:"Dª. Lorena Moya (Titular)",
      title2:"(Alterno)",
      detail1:"Subsecretaria de Gobierno Abierto de la Presidencia de la República",
      detail2:"Subsecretario de Administración Pública",
      image:"./assets/web/countyIcons/ecuador.png",
      country:"Ecuador",
    },
    {
      id:10,
      title1:"D. Russel Garay Bautista  (Titular)",
      detail1:"Secretario Ejecutivo de la Administración Nacional del Servicio Civil",
      image:"./assets/web/countyIcons/honduras.png",
      country:"Honduras",
    },
    {
      id:11,
      title1:"D. Eduardo Antonio Velásquez Carrera (Titular)",
      title2:"Dª. Ruth Elisabeth Ávalos Castañeda (Alterna)",
      detail1:"Presidente de la Junta Directiva del Instituto Nacional de Administración Pública (INAP)",
      detail2:"Gerente del Instituto Nacional de Administración Pública (INAP)",
      image:"./assets/web/countyIcons/guatemala.png",
      country:"Guatemala",
    },
    {
      id:12,
      title1:"D. Felipe E. Chapman (Titular)",
      title2:"Dª. Ivette E. Martínez S. (Alterna)",
      detail1:"Ministro de Economía y Finanzas",
      detail2:"Secretaria General del Ministerio de Economía y Finanzas",
      image:"./assets/web/countyIcons/panama.png",
      country:"Panamá",
    },
    {
      id:13,
      title1:"D. José Adrián Chavarría Montenegro (Titular)",
      detail1:"Secretario de Administración Financiera del Ministerio de Hacienda y Crédito Público",
      detail2:"Secretaria General del Ministerio de Economía y Finanzas",
      image:"./assets/web/countyIcons/nicaragua.png",
      country:"Nicaragua",
    },
    {
      id:14,
      title1:"Costa Rica",
      title2:"Dª. Laura Fernández Delgado (Titular)",
      title3:"D. Francisco Chang Vargas (Alterno)",
      detail1:"Ministra de Planificación Nacional y Política Económica",
      detail2:"Director General de Servicio Civil",
      image:"./assets/web/countyIcons/costarica.png",
      country:"Costa Rica",
    },
    {
      id:15,
      title1:"D. José Luis Escrivá Belmonte (Titular)",
      title2:"Dª. Clara Mapelli Marchena (Alterna)",
      title3:"Dª. Consuelo Sánchez Naranjo (Alterna)",
      detail1:"Ministro para la Transformación Digital y de la Función Pública",
      detail2:"Secretaria de Estado de Función Pública",
      detail3:"Directora del Instituto Nacional de Administración Pública de España",
      image:"./assets/web/countyIcons/espana.png",
      country:"españa",
    },
    {
      id:16,
      title1:"D. Ariel Sánchez (Titular)",
      title2:"(Alterno)",
      detail1:"Director de la Oficina Nacional del Servicio Civil de la Presidencia de la República",
      detail2:"Subdirector de la Oficina Nacional del Servicio Civil de la Presidencia de la República",
      image:"./assets/web/countyIcons/uruguay.png",
      country:"Uruguay",
    },
    {
      id:17,
      title1:"Dª. Esther Dweck (Titular)",
      title2:"Dª. Betânia Peixoto Lemos (Alterna)",
      detail1:"Ministra da Gestão e da Inovação em Serviços Públicos",
      detail2:"Presidenta da Escola Nacional de Administração Pública",
      image:"./assets/web/countyIcons/brasil.png",
      country:"Brasil",
    },
    {
      id:18,
      title1:"D. Gerardo Montenegro Morán (Titular)",
      title2:"Dª. Clara Mariela Columbié Santana (Alterna)",
      detail1:"Director de la Dirección de Preparación y Superación de Cuadros",
      detail2:"Directora de Organización, Planificación y Control",
      image:"./assets/web/countyIcons/cuba.png",
      country:"Cuba",
    },
    {
      id:19,
      title1:"D. Félix Augusto Antonio Ulloa Garay (Titular)",
      title2:"Dª. Claudia De Larin (Alterno)",
      detail1:"Vicepresidente de la República y Director de la Escuela Superior de Innovación en la Administración Pública (ESIAP)",
      detail2:"Directora Ejecutiva de la Escuela Superior de Innovación en la Administración Pública (ESIAP)",
      image:"./assets/web/countyIcons/el-salvador.png",
      country:"El Salvador",
    },
    {
      id:20,
      title1:"D. Carlos Fernández Valdovinos (Titular)",
      title2:"Dª. Andrea Mercedes Picaso (Alterna)",
      detail1:"Ministro de Economía y Finanzas de la República",
      detail2:"Viceministra de Capital Humano y Gestión Organizacional del Ministerio de Economía y Finanzas de la República",
      image:"./assets/web/countyIcons/paraguay.png",
      country:"Paraguay",
    },
    {
      id:21,
      title1:"D. António Leitão Amaro (Titular)",
      title2:"Dª. Luisa Neto (Alterna)",
      detail1:"Ministro da Presidência",
      detail2:"Presidente do Conselho Diretivo doInstituto Nacional de Administraçao, I.P.",
      image:"./assets/web/countyIcons/portugal.png",
      country:"Portugal",
    },
    {
      id:22,
      title1:"Dª. Trini Marín González (Titular)",
      detail1:"Ministra de Asuntos Sociales y Función Pública",
      image:"./assets/web/countyIcons/andorra.png",
      country:"Andorra",
    },
    {
      id:23,
      title1:"Dª. Amélia Augusto Varela (Titular)",
      title2:"Dª. Sandra Cristina Dos Reis Rodrigues Alves (Alterna)",
      detail1:"Secretária de Estado da Administração Pública do Ministerio da Administração Pública, Trabalho e Segurança Social – MAPTSS",
      detail2:"Presidente do Conselho de Administração da Escola Nacional de Administração e Políticas Públicas, – ENAPP",
      image:"./assets/web/countyIcons/angola.png",
      country:"Angola",
    },
    


    
  ];


}