import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppService } from '../../../app.service';
import { MyFormService } from '../../../core/services/myform.service';

import { NotificationService } from '../../../core/notification/notification.service';
import { LanguageService } from '../../../core/services/language.service';
import { PostService } from '../post.service';
import { ImgUploaderComponent } from '../../shared/img-uploader/img-uploader.component';
import { WebsiteService } from '../../../website/website.service';
import { MyEditorComponent } from '../../shared/my-editor/my-editor.component';



@Component({
  selector: 'app-slider-create',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ImgUploaderComponent,
    MyEditorComponent,
  ],
  templateUrl: './post-create.component.html',
})
export class PostCreateComponent  {

  public form:FormGroup;
  public categories:any;
  public formLoader:boolean = true;


  constructor(
    private fb: FormBuilder,
    private notification: NotificationService,
    public myFormService:MyFormService,
    public service:PostService,
    public websiteService:WebsiteService,
    public lang: LanguageService,
  ){

      this.form = this.fb.group({
        title : ['', [Validators.required,Validators.maxLength(500)]],
        category_id : ['', [Validators.required,Validators.maxLength(100)]],
        short_description : ['',[Validators.required,Validators.maxLength(500)]],
        thumbnail : ['',Validators.required,],
        featured : ['',Validators.required],
        status : ['',Validators.required],
        long_description : ['',[Validators.required,Validators.maxLength(20000)]],
      });

      this.myFormService.setForm(this.form);
      this.websiteService.get_categories().subscribe((value) => {
        this.categories = value.data.data;
      });

}

ngOnInit(): void {

  this.formLoader = false;
}


async onSubmit() {


    if (this.form.valid) {

        let data:any = this.form.value;
        data.type = 'post';

        this.formLoader = true;
        this.service.update(data).subscribe({
          next: (response:any) => {

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



