import { Component } from '@angular/core';
import { WebsiteService } from '../../website.service';

@Component({
  selector: 'website-homeabout',
  standalone: true,
  imports: [],
  templateUrl: './homeabout.component.html',
  styleUrl: './homeabout.component.css'
})
export class HomeaboutComponent {

  public heading = "";
  public data:any = {
    description:'<p> </p>',
  };

  constructor (
    service:WebsiteService
  ){

    service.find('home_about').subscribe((value) => {
       let data = value.data.home_about ? JSON.parse(value.data.home_about) : []; 
       this.heading = data.description;
       this.data = data;      
    });

  }



}
