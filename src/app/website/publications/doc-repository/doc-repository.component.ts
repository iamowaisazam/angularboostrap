import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { WebsiteService } from '../../website.service';
import { SafeHtmlPipe } from '../../../safeHtml.pipe';

@Component({
  selector: 'app-doc-repository',
  standalone: true,
  imports: [
    SafeHtmlPipe
  ],
  templateUrl: './doc-repository.component.html',
  styleUrl: './doc-repository.component.css'
})
export class DocRepositoryComponent {

  public apiUrl:any = environment.apiUrl;
  constructor (public service:WebsiteService){

  
     
   }

}
