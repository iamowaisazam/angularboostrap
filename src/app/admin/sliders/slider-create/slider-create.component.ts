import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppService } from '../../../app.service';
import { MyFormService } from '../../../core/services/myform.services';
import { SliderService } from '../slider.service';
import { NotificationService } from '../../../core/notification/notification.service';

@Component({
  selector: 'app-slider-create',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './slider-create.component.html',
  styleUrl: './slider-create.component.css'
})
export class SliderCreateComponent {

  public form:FormGroup;
  public formLoader:boolean = true;

  constructor(
    private fb: FormBuilder,
    private notification: NotificationService,
    public myFormService:MyFormService,
    public service:SliderService
  ){

      this.form = this.fb.group({
        title : ['', [Validators.maxLength(30)]],
        title_es : ['',Validators.maxLength(30)],
        title_pt : ['',Validators.maxLength(30)],
        link : ['',Validators.maxLength(100)],
        link_es : ['',Validators.maxLength(100)],
        link_pt : ['',Validators.maxLength(100)],
        short_description : ['',Validators.maxLength(200)],
        short_description_es : ['',Validators.maxLength(200)],
        short_description_pt : ['',Validators.maxLength(200)],
        // thumbnail : ['', Validators.required],
        // thumbnail_es : ['', Validators.required],
        // thumbnail_pt : ['', Validators.required],
        // status : ['1', Validators.required],
      });

      this.myFormService.setForm(this.form);

}


ngOnInit(): void {

  this.formLoader = false;

  // this.form.patchValue({
  //   name: this.db.auth.displayName,
  //   email: this.db.auth.email,
  // });

  // this.formLoader = false;

}

async onSubmit() {
   
      if (this.form.valid) {

        let data:any = this.form.value;
        data.status = 1;

        this.formLoader = true;
        this.service.create(data).subscribe({
          next: (response:any) => {

            this.formLoader = false;    
            this.notification.success(response.message);
            this.form.reset();
            this.formLoader = false;

          },
          error: (response:any) => {

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



// getErrorMessage(controlName: string): string | null {
//   const control = this.form.get(controlName);
  
//   if (control?.hasError('required')) {
//     return `Field is required.`;
//   }

//   if (control?.hasError('minlength')) {
//     const minLength = control.getError('minlength').requiredLength;
//     return `must be at least ${minLength} characters long.`;
//   }

//   if (control?.hasError('email')) {
//     return `Please enter a valid email address.`;
//   }

//   if (control?.hasError('invalid')) {
//     return `${controlName.charAt(0).toUpperCase() + controlName.slice(1)} is Invalid.`;
//   }

//   // if (control?.hasError('invalid')) {
//   //   return `Please enter a valid email address.`;
//   // }


//   return null;
// }


}



