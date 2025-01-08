import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppService } from '../../../app.service';
import { MyFormService } from '../../../core/services/myform.service';

import { NotificationService } from '../../../core/notification/notification.service';
import { LanguageService } from '../../../core/services/language.service';
import { ImgUploaderComponent } from '../../shared/img-uploader/img-uploader.component';
import { WebsiteService } from '../../../website/website.service';
import { PostService } from '../../posts/post.service';
import { MyEditorComponent } from '../../shared/my-editor/my-editor.component';

@Component({
  selector: 'app-webinar-create',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ImgUploaderComponent,
    MyEditorComponent,
  ],
  templateUrl: './webinar-create.component.html',
})
export class WebinarCreateComponent {

  public form:FormGroup;
  public formLoader:boolean = true;

  constructor(
    private fb: FormBuilder,
    private notification: NotificationService,
    public myFormService:MyFormService,
    public service:PostService,
    public lang: LanguageService,
  ){

      this.form = this.fb.group({
        title : ['', [Validators.required,Validators.maxLength(100)]],
        subtitle : ['', [Validators.maxLength(200)]],
        link : ['', [Validators.required,Validators.maxLength(200)]],
        button : ['', [Validators.required,Validators.maxLength(200)]],
        thumbnail : ['',Validators.required,],
        featured : ['',Validators.required],
        status : ['',Validators.required],
        short_description : ['',[Validators.maxLength(500)]],
        long_description : ['',[Validators.maxLength(10000)]],
      });
    
}

ngOnInit(): void {
  this.formLoader = false;
}

async onSubmit() {
   
    if (this.form.valid) {

        let data:any = this.form.value;
        data.type = 'webinar';

        this.formLoader = true;
        this.service.update(data).subscribe({
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



