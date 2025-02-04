import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { WebsiteService } from '../../website.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { environment } from '../../../../environments/environment';
import { LanguageService } from '../../../core/services/language.service';
import { SafeHtmlPipe } from '../../../safeHtml.pipe';
import { RouterLink } from '@angular/router';

 

@Component({
  selector: 'app-doc-declare',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule,
    SafeHtmlPipe,
    TranslateModule,
    RouterLink
    
  ],
  templateUrl: './doc-declare.component.html',
  styleUrl: './doc-declare.component.css'
})
export class DocDeclareComponent {

  public paginations:any = [];
  public apiUrl:any = environment.apiUrl;
  public posts:any = [];
  public loading:any = false;

  public country = [];
  public years = [];
  public topics = [];
  
  public options:any = {
    limit:10,
    search:'',
    year:'',
    topic:'',
    country: '',
    page:1,
  };

   constructor (
      public service:WebsiteService,
      public language:LanguageService,
      @Inject(PLATFORM_ID) private platformId: object
    ){
      
        if(isPlatformBrowser(this.platformId)){
            this.loadPosts();
            this.service.get_document_filters().subscribe((value) => {
                this.country = value.data.country;
                this.topics = value.data.topics;
                this.years = value.data.years;
            });
        }

    }
  
    loadPosts(){

            this.loading = true;  
            this.paginations = [];
            
            this.service.get_document(this.options).subscribe((value) => {
                this.posts = value.data.data;
                this.loading = false;

                let totalPages = Math.ceil(value.data.total / this.options.limit);
                for (let index = 1; index < totalPages; index++) {
                  this.paginations.push({
                    'title':index,
                  });
                }

            });


          // }

    }

    Page(number:any){
  
      this.options.page = number;
      this.loadPosts();
 
   }

    setSearch(event: Event){
      const input = event.target as HTMLInputElement;
      this.options.search = input.value;
      this.loadPosts();
   }

   setYear(event: Event){
    const input = event.target as HTMLSelectElement;
    this.options.year = input.value;
    this.loadPosts();
  }

   setCountry(event: Event){
    const input = event.target as HTMLSelectElement;
    this.options.country = input.value;
    this.loadPosts();
  }

  setTopic(event: Event){
    const input = event.target as HTMLSelectElement;
    this.options.topic = input.value;
    this.loadPosts();
 }


}