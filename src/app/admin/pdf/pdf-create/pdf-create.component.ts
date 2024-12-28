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

@Component({
  selector: 'app-pdf-create',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ImgUploaderComponent,
  ],
  templateUrl: './pdf-create.component.html',
})
export class PdfCreateComponent {

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
        pdf : ['', [Validators.required,Validators.maxLength(100)]],
        author : ['', [Validators.required,Validators.maxLength(100)]],

        banner : ['', [Validators.required,Validators.maxLength(100)]],
        creater : ['', [Validators.required,Validators.maxLength(100)]],

        short_description : ['',[Validators.required,Validators.maxLength(500)]],
        thumbnail : ['',Validators.required,],
        featured : ['',Validators.required],
        status : ['',Validators.required],
        long_description : ['',[Validators.required,Validators.maxLength(10000)]],
      });
    
}

ngOnInit(): void {
  this.formLoader = false;
}

async onSubmit() {
   
    if (this.form.valid) {

        let data:any = this.form.value;
        data.type = 'pdf';

        this.formLoader = true;
        this.service.update(data).subscribe({
          next: (response:any) => {

            this.formLoader = false;    
            this.notification.success(response.message);
            this.form.reset();
            this.formLoader = false;

            const editor = tinymce.get('long_description');
            if (editor) {
              editor.setContent('');
            }

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

ngAfterViewInit(): void {

  tinymce.init({
    selector: '#long_description',
    height: 300,
    plugins: 'advlist autolink link image lists charmap print preview hr anchor pagebreak',
    toolbar: 'undo redo | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent',
    setup: (editor:any) => {
      editor.on('Change KeyUp', () => {
        const content = editor.getContent();
        this.form.get('long_description')?.setValue(content, { emitEvent: false });
      });
    },
  });

}

ngOnDestroy(): void {
  tinymce.remove('#long_description');
}







}


