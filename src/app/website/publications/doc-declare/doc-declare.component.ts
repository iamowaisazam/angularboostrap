import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { WebsiteService } from '../../website.service';
import { isPlatformBrowser } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { environment } from '../../../../environments/environment';
import { LanguageService } from '../../../core/services/language.service';
import { SafeHtmlPipe } from '../../../safeHtml.pipe';
 

@Component({
  selector: 'app-doc-declare',
  standalone: true,
  imports: [
    TranslateModule,
    SafeHtmlPipe
  ],
  templateUrl: './doc-declare.component.html',
  styleUrl: './doc-declare.component.css'
})
export class DocDeclareComponent {


  public apiUrl:any = environment.apiUrl;
  public posts:any = [];
  public loading:any = false;

  public country = [];
  public years = [];
  public topics = [];

  public options:any = {
    search:'',
    year:'',
    topic:'',
    country: '',
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
          // if(this.options.search == ''){
              //  this.posts = [];
              //  this.loading = false;
          // }else{
            this.service.get_document(this.options).subscribe((value) => {
                this.posts = value.data.data;
                this.loading = false;
            });
          // }

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
