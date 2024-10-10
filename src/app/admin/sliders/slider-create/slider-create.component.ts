import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppService } from '../../../app.service';
import { MyFormService } from '../../../core/services/myform.service';
import { SliderService } from '../slider.service';
import { NotificationService } from '../../../core/notification/notification.service';
import { LanguageService } from '../../../core/services/language.service';
import { EditorComponent } from '@tinymce/tinymce-angular';


@Component({
  selector: 'app-slider-create',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EditorComponent,
    FormsModule
  ],
  templateUrl: './slider-create.component.html',
})
export class SliderCreateComponent {

  public form:FormGroup;
  public formLoader:boolean = true;
  public init: EditorComponent['init'] = {
    menubar:true,
    plugins: 'lists link image table code help wordcount'
  };


  constructor(
    private fb: FormBuilder,
    private notification: NotificationService,
    public myFormService:MyFormService,
    public service:SliderService,
    public lang: LanguageService,
  ){

      this.form = this.fb.group({
        title : ['', [Validators.required,Validators.maxLength(50)]],
        link : ['',[Validators.required,Validators.maxLength(50)]],
        thumbnail : ['',Validators.required,],
        short_description : ['',[Validators.required,Validators.maxLength(100)]],
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
        this.form.markAllAsTouched();
        this.formLoader = false;
        this.notification.error('Validation Failed');  

      
        
    }

}





}



