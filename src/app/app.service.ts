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
    



    constructor(
        private router: Router
    ) { 

    }


       
    

  

}

