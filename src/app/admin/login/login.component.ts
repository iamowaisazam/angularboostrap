import { Component } from '@angular/core';
import { CommonModule, NgStyle } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AdminService } from '../admin.service';
import { NotificationService } from '../../core/notification/notification.service';



@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink,
    NgStyle,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  myForm:FormGroup;
  public formLoader = false;

  constructor(
    public service:AdminService,
    private fb: FormBuilder,
    private router: Router,
    private notification:NotificationService
    
  ) { 

  
    this.myForm = this.fb.group({
      email: ['admin@example.com', [Validators.required, Validators.email]],
      password: ['12345678', [Validators.required,Validators.min(6)]]
    });


  }

  ngOnInit(): void {

    if(this.service.auth){
      this.router.navigate(['/admin/dashboard']);
    }

  }

  formSubmit() {
    
    this.formLoader = true;

  
    if (this.myForm.valid) {

        const {email,password} = this.myForm.value;
        this.service.login(email,password).subscribe({
          next: (response) => {

            this.formLoader = false;    
            this.notification.success(response.message);
            this.myForm.reset();
            localStorage.setItem('token',response.data.token);
            this.service.setAuth();
            this.router.navigate(['/admin/dashboard']);

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