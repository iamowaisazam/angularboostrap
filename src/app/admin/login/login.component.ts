import { Component } from '@angular/core';
import { CommonModule, NgStyle } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AdminService } from '../admin.service';



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
    private router: Router
    
  ) { 

  
    this.myForm = this.fb.group({
      email: ['iamowaisazam@gmail.com', [Validators.required, Validators.email]],
      password: ['owais123', [Validators.required,Validators.min(6)]]
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

            debugger

            this.formLoader = false;    
            alert(response.message);
            this.myForm.reset();
            localStorage.setItem('token',response.data.token);
            this.service.setAuth();
            this.router.navigate(['/admin/dashboard']);

          },
          error: (response) => {

            const error = response.error;
            if(error){
                if(error.errors){
                     alert(Object.values(error.errors)[0]);
                }else{
                     alert(error.message);
                 }
            }else{
              alert('Something Went Wrong')
            }


            this.formLoader = false;
          }
        });

    } else {
      this.formLoader = false;
        alert('Form Not Submited');  
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