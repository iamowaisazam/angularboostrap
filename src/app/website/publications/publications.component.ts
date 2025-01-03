import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { DocHeaderComponent } from './doc-header/doc-header.component';
import { DocBannerComponent } from './doc-banner/doc-banner.component';
import { DocExplorerComponent } from './doc-explorer/doc-explorer.component';
import { DocDeclareComponent } from './doc-declare/doc-declare.component';
import { DocRepositoryComponent } from './doc-repository/doc-repository.component';
import { WebsiteService } from '../website.service';
import { environment } from '../../../environments/environment';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [
    DocHeaderComponent,
    DocBannerComponent,
    DocExplorerComponent,
    DocDeclareComponent,
    DocRepositoryComponent
  ],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.css'
})
export class PublicationsComponent {

  public data:any;
  public apiUrl:any = environment.apiUrl;

  constructor (
    public service:WebsiteService,
    @Inject(PLATFORM_ID) private platformId: object
  ){
      if (isPlatformBrowser(this.platformId)) {
        service.setPage('publication');
      }
  }


}
