import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FeaturePostComponent } from '../home/home-feature-post/feature-post.component';
import { NoteNewsComponent } from './note-news/note-news.component';
import { WebsiteService } from '../website.service';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-note',
  standalone: true,
  imports: [
    FeaturePostComponent,
    NoteNewsComponent
  ],
  templateUrl: './note.component.html',
  styleUrl: './note.component.css'
})
export class NoteComponent {

  public categories:any = [];
  public pageData:any ="";

  constructor(
    public service:WebsiteService,
    @Inject(PLATFORM_ID) private platformId: object // Identify platform

  ){

      if (isPlatformBrowser(this.platformId)) {
          this.load();
          this.service.find('noticias').subscribe({
            next: (response:any) => {
              this.pageData = response.data['noticias'] ? JSON.parse(response.data['noticias']) : {};
            },
            error: (response:any) => {
            }
          });
      }

  }


  public load() {
    this.service.get_categories().subscribe((value) => {
        this.categories = value.data.data;
    });
  }


  

  

}
