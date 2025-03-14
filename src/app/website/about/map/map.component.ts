import { Component,AfterViewInit  } from '@angular/core';
import { WebsiteService } from '../../website.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-website-about-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class AboutMapComponent implements AfterViewInit {

  public apiUrl:any = environment.apiUrl;

  public greenCountries:any = [
    "Canada", "United States", "Turkey", "Greece", "Italy", 
    "Slovenia", "Austria", "Hungary", "Slovakia", "Czech Republic", 
    "Germany", "Poland", "France", "Belgium", "Netherlands", 
    "Denmark", "Sweden", "Norway", "Finland", "Estonia", 
    "United Kingdom", "Ireland", "New Zealand", "Australia", "Guyana", "Suriname"
  ];

  public selectedCountries:any = [
    "Mexico", "Colombia", "Ecuador", "Peru", "Bolivia", "Chile",
    "Dominican Republi", "Venez", "Brazil", "Parag", 
    "Uruguay", "Argentina", "Andorra", "Spain", "Portugal",
    "Equatorial Guine", "Angola"];

  public countryYears:any = {
    "Mexico": 1821,
    "Colombia": 1810,
    "Ecuador": 1830,
    "Peru": 1821,
    "Bolivia": 1825,
    "Chile": 1818,
    "Dominican Republi": 1844,
    "Venez": 1811,
    "Brazil": 1822,
    "Parag": 1811,
    "Uruguay": 1828,
    "Argentina": 1816,
    "Andorra": 1278,  
    "Spain": 1492,   
    "Portugal": 1139, 
    "Equatorial Guinea": 1968,
    "Angola": 1975,
  };


  constructor (
    public service:WebsiteService
  ){
    


  
    
    
  }


  ngAfterViewInit() {

    

    const box = document.getElementById("mouseBox") as HTMLObjectElement;
    const svgObject = document.getElementById('svgMap') as HTMLObjectElement;

   
    svgObject.addEventListener('load', () => {

      const svgDoc = svgObject.contentDocument;
      const countries = svgDoc?.querySelectorAll('path');

      countries?.forEach((e: any) => {
          
          const countryId = e.getAttribute("title");

          e.style.fill = "#D3D6F2"; 

          if(this.greenCountries.includes(countryId)) {
            e.style.fill = "#8ae6de"; 
          }

          if(this.selectedCountries.includes(countryId)) {


            e.addEventListener('mouseover', (event:any) => { 
             
               e.style.fill = "#1f11cb";
               box.style.left = `${event.clientX}px`; // Position slightly right
               box.style.top = `${event.clientY}px`;  // Position slightly below
               box.style.display = "block";
               box.textContent = countryId+' :'+this.countryYears[countryId];

            });
  
            e.addEventListener('mouseout', (event:any) => { 
               e.style.fill = "#594ee6"; 
               box.style.display = "none";
               box.textContent = "";

              // box.style.left = `${event.clientX}px`; // Position slightly right
              // box.style.top = `${event.clientY}px`;  // Position slightly below

            });

            e.style.fill = "#594ee6"; 
          }

          // country.addEventListener('mouseout', () => country.style.fill = "#ccc");
          // country.addEventListener('click', () => alert(`Clicked: ${country.id}`));

      });


    });

  }


}
