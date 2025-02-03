import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { LanguageService } from '../../../core/services/language.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ResponsiveService } from '../../../core/services/responsive.service';
import { RouterLink } from '@angular/router';
import { WebsiteService } from '../../website.service';
import { environment } from '../../../../environments/environment';



@Component({
  selector: 'web-topbar',
  standalone: true,
  imports: [
    RouterLink,
    TranslateModule,
    CommonModule
  ],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {

    public apiUrl:any = environment.apiUrl
    public isSearching: boolean = false;
    public languageDropdown:any = false;
    public filters:any = {
      search:'',
      category:'',      
      order_by:'created_at',
      sort_by:'desc',
      type_in:'post,event,webinar,pdf,course,document',
      limit:10
  };

  public data:any = [

  ];


  constructor (
    public language:LanguageService,
    public service:WebsiteService,
    private translateService:TranslateService,
    @Inject(DOCUMENT) private document: Document,
    public responive:ResponsiveService
  ){

    this.submitSearch();

  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    const clickedInside = (event.target as HTMLElement).closest('.dropdown');
    if (!clickedInside) {
      this.languageDropdown = "";
    }
  }


  handleDropdown(){
    
    if(this.languageDropdown){
      this.languageDropdown = false;
    }else{
      this.languageDropdown = true;
    }

  }

  handleLanguage(lang:string){

    this.language.setLanguage(lang);
    this.translateService.use(lang);
    this.languageDropdown = false;

  }

  


public setS(event: Event){

  const input = event.target as HTMLInputElement;
  this.filters.search = input.value;
  this.submitSearch();
  
}

public submitSearch() {

      // if (this.isSearching) {
      //   console.log('Search already in progress.');
      //   return;
      // }

      this.isSearching = true;


      if(this.filters.search == ''){
        this.data = [];
        this.isSearching = false;
      }else{
        this.service.get_posts(this.filters).subscribe((value) => {   
          this.data =  value.data.data;
          this.isSearching = false;
        });
      }
}


public searchClear(){
    this.filters.search = '';
    
    this.submitSearch();
}



}