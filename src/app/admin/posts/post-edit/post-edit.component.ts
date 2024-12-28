import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NotificationService } from '../../../core/notification/notification.service';
import { MyFormService } from '../../../core/services/myform.service';
import { PostService} from '../post.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguageService } from '../../../core/services/language.service';
import { ImgUploaderComponent } from '../../shared/img-uploader/img-uploader.component';
import { WebsiteService } from '../../../website/website.service';



@Component({
  selector: 'app-post-edit',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ImgUploaderComponent
  ],
  templateUrl: './post-edit.component.html',
})

export class PostEditComponent {

  public form:FormGroup;
  public formLoader:boolean = false;
  public editId:any = '';
  public categories:any = [];

  constructor(
    private fb: FormBuilder,
    private notification: NotificationService,
    public myFormService:MyFormService,
    public service:PostService,
    private route:ActivatedRoute,
    private router:Router,
    public lang: LanguageService,
    public websiteService:WebsiteService,
  ){
    
      this.form = this.fb.group({
        title : ['', [Validators.required,Validators.maxLength(100)]],
        category_id : ['', [Validators.required,Validators.maxLength(100)]],
        short_description : ['',[Validators.required,Validators.maxLength(300)]],
        thumbnail : ['',Validators.required,],
        featured : ['',Validators.required],
        status : ['',Validators.required],
        long_description : ['',[Validators.required,Validators.maxLength(10000)]],
      });

      this.websiteService.get_categories().subscribe((value) => {
        this.categories = value.data.data;
      });
}


ngOnInit(): void {

  this.route.paramMap.subscribe(params => {
     this.editId = params.get('id');
     this.getRecord(this.editId);
  });

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


async getRecord(id:any) {
      
    this.formLoader = true;

    this.service.list({type:'post',id:Number(this.editId),limit:1,}).subscribe({
      next: (res:any) => {

        let data = res.data.data[0];
        this.form.patchValue({
          title : data.title,
          short_description : data.short_description,
          long_description : data.long_description,
          thumbnail : data.thumbnail,
          status : data.status,
          featured : data.is_featured,
          category_id : data.category_id,
        });

        const editor = tinymce.get('long_description');
        if (editor) {
          editor.setContent(data.long_description);
        }

        this.notification.success(res.message);
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
        this.router.navigate(['/admin/dashboard']);
      }

    });
}


async onSubmit() {
   
    if (this.form.valid) {

        let data:any = this.form.value;
        data.type = 'post';
        data.id = this.editId;

        this.formLoader = true;
        this.service.update(data).subscribe({
          next: (response:any) => {

            this.formLoader = false;    
            this.notification.success(response.message);
            this.getRecord(this.editId);
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
        this.form.markAllAsTouched();
        this.notification.error('Validation Failed');  
    }
  
}


}






