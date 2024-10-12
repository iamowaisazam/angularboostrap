import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NotificationService } from '../../../core/notification/notification.service';
import { MyFormService } from '../../../core/services/myform.service';
import { CommonModule } from '@angular/common';
import { SettingService } from '../../../core/services/setting.service';
import { LanguageService } from '../../../core/services/language.service';
import { EditorComponent } from '@tinymce/tinymce-angular';

@Component({
  selector: 'app-admin-about-map',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EditorComponent,
    FormsModule
  ],
  templateUrl: './about-map.component.html',
})

export class AboutMapComponent {

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
          title : ['', []], 
          description : ['',[]],     
          image : ['',[]],  
          box_text_1 : ['',[]], 
          box_text_2 : ['',[]],
          box_text_3 : ['',[]],
          box_number_1 : ['',[]], 
          box_number_2 : ['',[]],
          box_number_3 : ['',[]],    

          gov_title : ['',[]],
          gov_description : ['',[]],    
        });
   }


  ngOnInit(): void {

    this.getRecord();

  }


  getRecord(){

    this.service.loading = true;
    this.service.find('about_map').subscribe({
      next: (value:any) => {
      
        let data = value.data.about_map ? JSON.parse(value.data.about_map) : [];
        if(data){ 
          this.form.patchValue({
            title : data?.title, 
            description : data?.description,     
            image : data?.image, 

            box_text_1 : data?.box_text_1, 
            box_text_2 : data?.box_text_2, 
            box_text_3 : data?.box_text_3,
            
            box_number_1 : data?.box_number_1, 
            box_number_2 : data?.box_number_2, 
            box_number_3 : data?.box_number_3, 

            gov_title : data?.gov_title, 
            gov_description : data?.gov_description,
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
              name:'about_map', 
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
