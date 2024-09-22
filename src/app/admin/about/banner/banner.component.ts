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
  public formLoader:boolean = true;
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
        this.service.loadSetting();
   }


  ngOnInit(): void {

      this.service.data.subscribe((value:any) => {
        if(value?.about_banner?.value){
          let sl = JSON.parse(value.about_banner.value);
          if(sl){

            this.form.patchValue({
              title : sl?.title,
              image : sl?.image,      
              description : sl?.description,
            });
            
          }

        }
      });

  }




async onSubmit() {
   
    if (this.form.valid) {

            this.service.loading = true;
            let data = {
               about_banner: JSON.stringify(this.form.value)
            }

            this.service.update(data).subscribe({
              next: (response:any) => {
                this.notification.success(response.message);    
                this.service.loadSetting();
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






