import { Injectable} from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminService } from './admin/admin.service';


@Injectable({
  providedIn: 'root'
})


export class AppService {
    
    public apploading = true;
    public lang = "en";



    constructor(
        private router: Router
    ) { 

    }


    setLanguage(lang:string){
      this.lang = lang
    }


    getLangClass(l:any): string {
      return this.lang === l ? 'd-block' : 'd-none';
    }

       
    

  

}

