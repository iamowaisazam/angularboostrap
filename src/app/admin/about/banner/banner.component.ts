import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NotificationService } from '../../../core/notification/notification.service';
import { MyFormService } from '../../../core/services/myform.service';
import { CommonModule } from '@angular/common';
import { SettingService } from '../../../core/services/setting.service';
import { LanguageService } from '../../../core/services/language.service';
import { EditorComponent } from '@tinymce/tinymce-angular';

@Component({
  selector: 'app-admin-about-banner',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EditorComponent,
    FormsModule
  ],
  templateUrl: './banner.component.html',
})

export class AboutBannerComponent {

  public form:FormGroup;
  public loader:boolean = true;

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
    this.service.find('about_banner').subscribe({
      next: (value:any) => {
      
        let data = value.data.about_banner ? JSON.parse(value.data.about_banner) : [];
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
              name:'about_banner', 
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
