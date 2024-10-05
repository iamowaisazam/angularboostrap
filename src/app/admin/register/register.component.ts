import { Component } from '@angular/core';
import { CommonModule, NgStyle } from '@angular/common';


import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AdminService } from '../admin.service';
import { error } from 'console';
import { NotificationService } from '../../core/notification/notification.service';




@Component({
  selector: 'app-admin-register',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink,
    NgStyle,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {


  myForm:FormGroup;
  public formLoader = false;

  constructor(
    private service:AdminService,
    private fb: FormBuilder,
    private router: Router,
    private notification:NotificationService
  ) { 

    // if(this.service.auth){
    //   this.router.navigate(['/admin/dashboard']);
    // }

    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]]
    });

  }

  formSubmit() {
    
    this.formLoader = true;

    if (this.myForm.valid) {

        const {email,password,name} = this.myForm.value;
        this.service.register(name,email, password).subscribe({
          next: (response) => {

            this.formLoader = false;    
            this.notification.success(response.message);
            this.myForm.reset();

          },
          error: (response) => {

            const error = response.error;
            if(error){
                if(error.errors){
                     this.notification.error(Object.values(error.errors)[0]);
                }else{
                     this.notification.error(error.message);
                 }
            }else{
              this.notification.error('Something Went Wrong')
            }


            this.formLoader = false;
          }
        });

    } else {
      this.formLoader = false;
        this.notification.error('Validation Failed');  
    }
  }


  getErrorMessage(controlName: string): string | null {
    const control = this.myForm.get(controlName);
    
    if (control?.hasError('required')) {
      return `${controlName.charAt(0).toUpperCase() + controlName.slice(1)} is required.`;
    }
  
    if (control?.hasError('minlength')) {
      const minLength = control.getError('minlength').requiredLength;
      return `${controlName.charAt(0).toUpperCase() + controlName.slice(1)} must be at least ${minLength} characters long.`;
    }
  
    if (control?.hasError('email')) {
      return `Please enter a valid email address.`;
    }

    if (control?.hasError('invalid')) {
      return `${controlName.charAt(0).toUpperCase() + controlName.slice(1)} is Invalid.`;
    }

    // if (control?.hasError('invalid')) {
    //   return `Please enter a valid email address.`;
    // }

    
  
    return null;
  }

}
