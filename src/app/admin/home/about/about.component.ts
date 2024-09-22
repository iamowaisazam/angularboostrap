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
          home_about_title : ['', [Validators.maxLength(30)]],
          home_about_image : ['',Validators.maxLength(100)],        
          home_about_description : ['',Validators.maxLength(10000)],
        });

        this.myFormService.setForm(this.form);
        this.service.loadSetting();
   }


  ngOnInit(): void {

      this.service.data.subscribe((value:any) => {
          this.form.patchValue({
            home_about_title : value?.home_about_title?.value,
            home_about_image : value?.home_about_image?.value,      
            home_about_description : value?.home_about_description?.value,
          });
      });

  }




async onSubmit() {
   
    if (this.form.valid) {

            this.service.loading = true;
            let data = this.form.value;

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






