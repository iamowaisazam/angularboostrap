import { Injectable} from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';



@Injectable({
  providedIn: 'root'
})


export class AppService {
    
    public apploading = false;

    constructor (
      private router:Router
    ){
      
   }



       
    

  

}

