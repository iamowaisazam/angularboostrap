import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { WebsiteService } from '../../website.service';
import { LanguageService } from '../../../core/services/language.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-doc-explorer',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    RouterLink
    
  ],
  templateUrl: './doc-explorer.component.html',
  styleUrl: './doc-explorer.component.css'
})
export class DocExplorerComponent {

    public apiUrl:any = environment.apiUrl;
    public categories:any = [];
    public searching = false;
    public data:any = [];


    public filters:any = {
        search:'',
        category:'',      
        order_by:'created_at',
        sort_by:'desc',
        type:'post',
        limit:10
    };

    constructor (
        public service:WebsiteService,
        public language:LanguageService,
        @Inject(PLATFORM_ID) private platformId: object
      ){
          if (isPlatformBrowser(this.platformId)) {
            this.service.get_categories().subscribe((value) => {
              this.categories = value.data.data;
            });   
          }
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
