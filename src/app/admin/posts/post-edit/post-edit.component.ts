import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NotificationService } from '../../../core/notification/notification.service';
import { MyFormService } from '../../../core/services/myform.service';
import { PostService} from '../post.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguageService } from '../../../core/services/language.service';
import { EditorComponent } from '@tinymce/tinymce-angular';



@Component({
  selector: 'app-slider-edit',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EditorComponent,
    FormsModule
  ],
  templateUrl: './post-edit.component.html',
})
export class PostEditComponent {

  public form:FormGroup;
  public formLoader:boolean = false;
  public editId:any = '';
  public init: EditorComponent['init'] = {
    menubar:true,
    plugins: 'lists link image table code help wordcount'
  };


  constructor(
    private fb: FormBuilder,
    private notification: NotificationService,
    public myFormService:MyFormService,
    public service:PostService,
    private route:ActivatedRoute,
    private router:Router,
    public lang: LanguageService,
  ){
    
      this.form = this.fb.group({
        title : ['', [Validators.required,Validators.maxLength(50)]],
        short_description : ['',[Validators.required,Validators.maxLength(200)]],
        thumbnail : ['',Validators.required,],
        featured : ['',Validators.required],
        status : ['',Validators.required],
        long_description : ['',[Validators.required,Validators.maxLength(100)]],
      });

      this.myFormService.setForm(this.form);

     

}


ngOnInit(): void {
  

  this.route.paramMap.subscribe(params => {
    this.editId = params.get('id');
    this.getRecord(this.editId);
  });

}


async getRecord(id:any) {
      
    this.formLoader = true;

    this.service.edit(Number(this.editId)).subscribe({
      next: (res:any) => {
        let data = res.data;
        this.form.patchValue({
          title : data.title,
          short_description : data.short_description,
          long_description : data.long_description,
          thumbnail : data.thumbnail,
          status : data.status,
          featured : data.is_featured,
        });

        // this.notification.success(res.message);
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






