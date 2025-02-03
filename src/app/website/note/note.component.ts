import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FeaturePostComponent } from '../home/home-feature-post/feature-post.component';
import { NoteNewsComponent } from './note-news/note-news.component';
import { WebsiteService } from '../website.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';
import { TranslateModule } from '@ngx-translate/core';

  
@Component({
  selector: 'app-note',
  standalone: true,
  imports: [
    RouterLink,
    TranslateModule,
    CommonModule,
    FeaturePostComponent,
    NoteNewsComponent
  ],
  templateUrl: './note.component.html',
  styleUrl: './note.component.css'
})
export class NoteComponent {

  public categories:any = [];
  public pageData:any ="";
  public apiUrl:any = environment.apiUrl;

  public searching = false;
  public filters:any = {
      search:'',
      category:'',      
      order_by:'created_at',
      sort_by:'desc',
      type:'post',
      limit:10
  };

  public data:any = [
 
  ];

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
  

  public setCat(id:any){  
      if(this.filters.category == id){
        this.filters.category = '';
        this.submitSearch();
      }else{
        this.filters.category = id;
        this.submitSearch();
      }
  }


  public setS(event: Event){

    const input = event.target as HTMLInputElement;
    this.filters.search = input.value;
    this.submitSearch();
    
  }

  public submitSearch() {

      this.searching = true;

        if(this.filters.search == ''){

            this.data = [];
            this.searching = false;

        }else{
            this.service.get_posts(this.filters).subscribe((value) => {   
              this.data =  value.data.data;
              this.searching = false;
            });
       
        }

 

  }




}

