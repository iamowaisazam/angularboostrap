import { Component } from '@angular/core';
import { CommonModule, NgStyle } from '@angular/common';


import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


import { Router, RouterLink, RouterLinkActive } from '@angular/router';



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

    private fb: FormBuilder,
    private router: Router
  ) { 

    // if(this.auth.db.auth){
    //   this.router.navigate(['/admin/dashboard']);
    // }

    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.min(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.min(6)]]
    });

  }

  formSubmit() {
    
    this.formLoader = true;
    if (this.myForm.valid) {

      console.log(this.myForm.value);
      
      
        this.formLoader = false;
        const {email,password,name} = this.myForm.value;

        // this.auth.register(email,password,name)
        // .then((response) => {
        //    alert('Registeration Successfully Now You Can Logged In');
        //    this.router.navigate(['/admin/dashboard']);
        // }).catch((error) => {

        //   alert(error.code);
        // });

    } else {
      this.formLoader = false;
        alert('Form Not Submited');  
    }
  }

}
