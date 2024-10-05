import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { LanguageService } from '../../../core/services/language.service';
import { TranslateService } from '@ngx-translate/core';
import { ResponsiveService } from '../../../core/services/responsive.service';

@Component({
  selector: 'web-topbar',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {

  public languageDropdown:any = false;


  constructor (
    public language:LanguageService,
    private translateService:TranslateService,
    @Inject(DOCUMENT) private document: Document,
    public responive:ResponsiveService
  ){

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

}
