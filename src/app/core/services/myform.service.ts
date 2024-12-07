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

    

    getErrorMessage(control:any){

      
        if (control?.errors?.required){
          return `Field is required.`;
        }
      
        if (control?.errors?.minlength) {
          const minLength = control.errors.minlength.requiredLength;
          return `must be at least ${minLength} characters long.`;
        }

        if (control?.errors?.maxlength) {
            const maxLength = control.errors.maxlength.requiredLength;
            return `Cannot exceed ${maxLength} characters.`;
        }
      
        if (control?.errors?.email) {
          return `Please enter a valid email address.`;
        }
      
        if (control?.errors?.invalid) {
          return `${control.charAt(0).toUpperCase() + control.slice(1)} is Invalid.`;
        }
        
        return null;

      }

      setForm(form:any){
        this.form = form;
      }


      form_patch(value:any){
        const controlNames = Object.keys(this.form.controls);
        let formArray:any = {}; 
        for (const element of controlNames) {
          let key = String(element);
          formArray[key] = value?.[key]?.value;
        }
        return formArray;
      }

       
    

  

}

