import { Component } from '@angular/core';
import { DocHeaderComponent } from './doc-header/doc-header.component';
import { DocBannerComponent } from './doc-banner/doc-banner.component';
import { DocExplorerComponent } from './doc-explorer/doc-explorer.component';
import { DocDeclareComponent } from './doc-declare/doc-declare.component';
import { DocRepositoryComponent } from './doc-repository/doc-repository.component';

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

}
