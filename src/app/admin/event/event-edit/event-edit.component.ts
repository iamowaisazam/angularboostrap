import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NotificationService } from '../../../core/notification/notification.service';
import { MyFormService } from '../../../core/services/myform.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguageService } from '../../../core/services/language.service';
import { ImgUploaderComponent } from '../../shared/img-uploader/img-uploader.component';
import { WebsiteService } from '../../../website/website.service';
import { PostService } from '../../posts/post.service';
import { MyEditorComponent } from '../../shared/my-editor/my-editor.component';


@Component({
  selector: 'app-event-edit',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ImgUploaderComponent,
    MyEditorComponent
  ],
  templateUrl: './event-edit.component.html',
})
export class EventEditComponent {
  public default:any = '';
  public form:FormGroup;
  public formLoader:boolean = false;
  public editId:any = '';


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
        title : ['', [Validators.required,Validators.maxLength(200)]],
        subtitle : ['', [Validators.required,Validators.maxLength(200)]],
        button : ['', [Validators.required,Validators.maxLength(100)]],
        start_date : ['', [Validators.required,Validators.maxLength(100)]],
        end_date : ['', [Validators.required,Validators.maxLength(100)]],
        created_at : ['', [Validators.required,Validators.maxLength(100)]],

        banner : ['', [Validators.maxLength(100)]],
        short_description : ['',[Validators.maxLength(500)]],
        thumbnail : ['',],
        featured : ['',Validators.required],
        status : ['',Validators.required],
        long_description : ['',[Validators.maxLength(10000)]],
      });
}

ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
     this.editId = params.get('id');   
     this.getRecord(this.editId);
  });
}


async getRecord(id:any) {

    this.formLoader = true;
    this.service.list({type:'event',id:Number(this.editId),limit:1,}).subscribe({
      next: (res:any) => {

        let data = res.data.data[0];
        if(data){
          this.form.patchValue({
            title : data.title,
            subtitle : data.subtitle,
            button : data.button,
            created_at:data.date,
            start_date:data.start_date,
            end_date:data.end_date,
            short_description : data.short_description,
            long_description : data.long_description,
            thumbnail : data.thumbnail,
            banner : data.banner,
            status : data.status,
            featured : data.is_featured,
          });

          this.default = data.long_description;

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
      }
   });
}


async onSubmit() {
   
    if (this.form.valid) {

        let data:any = this.form.value;
        data.type = 'event';
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






