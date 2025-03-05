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
  public language = [];
  public years = [];
  public topics = [];
  
  public options:any = {
    limit:4,
    search:'',
    year:'',
    topic:'',
    country: '',
    language:'',
    order_by:'created_at',
    sort_by:'desc',
    page:1,
  };

   constructor (
      public service:WebsiteService,
      public llanguage:LanguageService,
      @Inject(PLATFORM_ID) private platformId: object
    ){
      
        if(isPlatformBrowser(this.platformId)){
            this.loadPosts();
            this.service.get_document_filters().subscribe((value) => {
                
                this.country = value.data.country;
                this.topics = value.data.topics;
                this.language = value.data.languages;
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
    }

    Page(number:any){
  
      this.options.page = number;
      this.loadPosts();
 
   }

    setSearch(event: Event){
      const input = event.target as HTMLInputElement;
      this.options.page = 1;
      this.options.search = input.value;
      this.loadPosts();
   }

   setYear(event: Event){
    const input = event.target as HTMLSelectElement;
    this.options.page = 1;
    this.options.year = input.value;
    this.loadPosts();
  }

   setCountry(event: Event){
    const input = event.target as HTMLSelectElement;
    this.options.page = 1;
    this.options.country = input.value;
    this.loadPosts();
  }

  setTopic(event: Event){
    const input = event.target as HTMLSelectElement;
    this.options.page = 1;
    this.options.topic = input.value;
    this.loadPosts();
 }

 setLanguage(event: Event){
  const input = event.target as HTMLSelectElement;
  this.options.page = 1;
  this.options.language = input.value;
  this.loadPosts();
}

 
 views(id:any){

  if(isPlatformBrowser(this.platformId)) {
    

      let views = JSON.parse(localStorage.getItem('views') || '{}');
      if (views[id]) { 
        return;
      }

      this.service.views(id).subscribe((value) => {
        views[id] = true;
        localStorage.setItem('views', JSON.stringify(views));
        this.loadPosts();     
      });

  }

}


likes(id:any){

    if(isPlatformBrowser(this.platformId)) {

        let likes = JSON.parse(localStorage.getItem('likes') || '{}');
        if (likes[id]) { 
          return;
        }

    
        this.service.like(id).subscribe((value) => {
          likes[id] = true;
          localStorage.setItem('likes', JSON.stringify(likes));
          this.loadPosts();
       
        });
    }

}


}