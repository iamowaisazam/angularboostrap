import { Injectable} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})


export class MyFormService {
    
    private form:any; 

    constructor(
        private router: Router
    ) { 

    }

    

    getErrorMessage(controlName: string): string | null {
        const control = this.form.get(controlName);
        
        if (control?.hasError('required')) {
          return `Field is required.`;
        }
      
        if (control?.hasError('minlength')) {
          const minLength = control.getError('minlength').requiredLength;
          return `must be at least ${minLength} characters long.`;
        }

        if (control?.hasError('maxlength')) {
            const maxLength = control.getError('maxlength').requiredLength;
            return `Cannot exceed ${maxLength} characters.`;
        }
      
        if (control?.hasError('email')) {
          return `Please enter a valid email address.`;
        }
      
        // if (control?.hasError('invalid')) {
        //   return `${controlName.charAt(0).toUpperCase() + controlName.slice(1)} is Invalid.`;
        // }
      
        
        return null;
      }

      setForm(form:any){
        this.form = form;
      }

       
    

  

}

