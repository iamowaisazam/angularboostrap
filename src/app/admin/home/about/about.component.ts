import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NotificationService } from '../../../core/notification/notification.service';
import { MyFormService } from '../../../core/services/myform.service';
import { CommonModule } from '@angular/common';
import { SettingService } from '../../../core/services/setting.service';
import { LanguageService } from '../../../core/services/language.service';
import { EditorComponent } from '@tinymce/tinymce-angular';

@Component({
  selector: 'app-admin-home-about',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EditorComponent,
    FormsModule
  ],
  templateUrl: './about.component.html',
})

export class HomeAboutComponent {

  public form:FormGroup;
  public loader:boolean = true;
  public init: EditorComponent['init'] = {
    menubar:true,
    plugins: 'lists link image table code help wordcount'
  };


  constructor(
    private fb: FormBuilder,
    private notification: NotificationService,
    public myFormService:MyFormService,
    public service:SettingService,
    public lang:LanguageService
    ){

        this.form = this.fb.group({
          title : ['', [Validators.maxLength(30)]],
          image : ['',Validators.maxLength(100)],        
          description : ['',Validators.maxLength(10000)],
        });
        this.myFormService.setForm(this.form);
    
   }


  ngOnInit(): void {

    this.getRecord();

  }


  getRecord(){

    this.service.loading = true;
    this.service.find('home_about').subscribe({
      next: (value:any) => {
      
        let data = value.data.home_about ? JSON.parse(value.data.home_about) : [];
        if(data){ 
          this.form.patchValue({
            title : data?.title,
            image : data?.image,      
            description : data?.description,
          });
        }
        this.service.loading = false;
      },
      error: (response:any) => {
        this.service.loading = false;

      }

    });

  }




async onSubmit() {
   
    if (this.form.valid) {
      this.service.loading = true;

            let data = {
              name:'home_about', 
              data:JSON.stringify(this.form.value)
            }; 

            this.service.update(data).subscribe({
              next: (response:any) => {
                this.notification.success(response.message);    
                this.service.loading = false;
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
                
                this.service.loading = false;
              }
            });


    } else {
        this.notification.error('Validation Failed');  
    }


  
}



}
