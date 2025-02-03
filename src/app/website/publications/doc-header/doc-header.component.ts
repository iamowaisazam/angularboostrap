import { Component } from '@angular/core';
import { WebsiteService } from '../../website.service';
import { SafeHtmlPipe } from '../../../safeHtml.pipe';

@Component({
  selector: 'app-doc-header',
  standalone: true,
  imports: [
    SafeHtmlPipe
  ],
  templateUrl: './doc-header.component.html',
  styleUrl: './doc-header.component.css'
})
export class DocHeaderComponent {

  constructor (
    public service:WebsiteService
  ){
    
  }

}
