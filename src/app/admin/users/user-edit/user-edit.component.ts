import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NotificationService } from '../../../core/notification/notification.service';
import { MyFormService } from '../../../core/services/myform.service';
import { UserService} from '../user.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguageService } from '../../../core/services/language.service';
import { ImgUploaderComponent } from '../../shared/img-uploader/img-uploader.component';
import { WebsiteService } from '../../../website/website.service';
import { MyEditorComponent } from '../../shared/my-editor/my-editor.component';




@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ImgUploaderComponent,
    MyEditorComponent,
  ],
  templateUrl: './user-edit.component.html',
})

export class UserEditComponent {
  public default:any = '';
  public form:FormGroup;
  public formLoader:boolean = false;
  public editId:any = '';
  public categories:any = [];
  public checked:any = [];


  constructor(
    private fb: FormBuilder,
    private notification: NotificationService,
    public myFormService:MyFormService,
    public service:UserService,
    private route:ActivatedRoute,
    private router:Router,
    public lang: LanguageService,
    public websiteService:WebsiteService,
  ){



      this.form = this.fb.group({
        name : ['', [Validators.required,Validators.maxLength(100)]],
        email : ['', [Validators.required,Validators.maxLength(100)]],
        password : ['',[Validators.maxLength(300)]],   
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

    this.service.list({id:Number(this.editId),limit:1,}).subscribe({
      next: (res:any) => {

        let data = res.data.data[0];
        this.form.patchValue({
          name : data.name,
          email : data.email,
          password : '',
        });

        this.checked = data.permissions;
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
        data.id = this.editId;
        this.formLoader = true;

        const checkboxes = document.querySelectorAll('.permission-checkbox') as NodeListOf<HTMLInputElement>;
        const checkedNames = Array.from(checkboxes).filter((checkbox) => checkbox.checked).map((checkbox) => checkbox.name);
        data.permissions = checkedNames.join(',');

        this.service.update(data).subscribe({
          next: (response:any) => {

           
            this.formLoader = false;    
            this.notification.success(response.message);
            this.router.navigate(['/admin/users/list']);
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






