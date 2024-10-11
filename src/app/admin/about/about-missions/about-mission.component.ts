import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NotificationService } from '../../../core/notification/notification.service';
import { MyFormService } from '../../../core/services/myform.service';
import { CommonModule } from '@angular/common';
import { SettingService } from '../../../core/services/setting.service';
import { LanguageService } from '../../../core/services/language.service';
import { EditorComponent } from '@tinymce/tinymce-angular';

@Component({
  selector: 'app-admin-about-mission',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EditorComponent,
    FormsModule
  ],
  templateUrl: './about-missions.component.html',
})

export class AboutMissionComponent {

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
          top_detail : ['', [Validators.maxLength(100)]],
          
          about_title : ['',Validators.maxLength(100)],        
          about_description : ['',Validators.maxLength(10000)],
          
          missiion_title : ['',Validators.maxLength(100)],        
          missiion_image : ['',Validators.maxLength(100)],   

          mission_description : ['',Validators.maxLength(10000)],
          mission_button_1_text : ['',Validators.maxLength(100)],
          mission_button_1_image : ['',Validators.maxLength(100)],
          mission_button_2_image : ['',Validators.maxLength(100)],
          mission_button_2_text : ['',Validators.maxLength(100)], 

        });
        this.myFormService.setForm(this.form);
    
   }


  ngOnInit(): void {

    this.getRecord();

  }


  getRecord(){

    this.service.loading = true;
    this.service.find('about_mission').subscribe({
      next: (value:any) => {
      
        let data = value.data.about_mission ? JSON.parse(value.data.about_mission) : [];
        if(data){ 
          this.form.patchValue({
            top_detail : data.top_detail,
          
            about_title : data.about_title,        
            about_description : data.about_description,
            
            missiion_title : data.missiion_title,        
            missiion_image : data.missiion_image,   
  
            mission_description : data.mission_description,
            mission_button_1_text : data.mission_button_1_text,
            mission_button_1_image : data.mission_button_1_image,
            mission_button_2_image : data.mission_button_2_image,
            mission_button_2_text : data.mission_button_2_text, 
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
