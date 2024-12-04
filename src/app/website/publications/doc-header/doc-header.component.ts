import { Component } from '@angular/core';
import { WebsiteService } from '../../website.service';

@Component({
  selector: 'app-doc-header',
  standalone: true,
  imports: [],
  templateUrl: './doc-header.component.html',
  styleUrl: './doc-header.component.css'
})
export class DocHeaderComponent {

  constructor (
    public service:WebsiteService
  ){
    
  }

}
