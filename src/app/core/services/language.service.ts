import { Injectable} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class LanguageService {
    
    public lang:any = "en";
    public currentRoute:any;


    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) { 

      if(localStorage.getItem('lang')){
        this.lang = localStorage.getItem('lang');
      }else{
        this.lang = "en";
      }

      
    }


    
    setLanguage(lang:string){

        this.lang = lang;
        localStorage.setItem('lang',lang);
        window.location.reload();

    }
  
  
      getLangClass(l:any): string {
        return this.lang === l ? 'd-block' : 'd-none';
      }
  


}

