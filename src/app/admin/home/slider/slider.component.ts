import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NotificationService } from '../../../core/notification/notification.service';
import { MyFormService } from '../../../core/services/myform.service';
import { CommonModule } from '@angular/common';
import { SettingService } from '../../../core/services/setting.service';
import { LanguageService } from '../../../core/services/language.service';
import { EditorComponent } from '@tinymce/tinymce-angular';


@Component({
  selector: 'app-admin-setting-home-slider',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EditorComponent,
    FormsModule
  ],
  templateUrl: './slider.component.html',
})

export class SettingHomeSliderComponent {

  public form:FormGroup;
  public loading:boolean = true;
  // public sliders:any = [];
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
          sliders: this.fb.array([])
        });
        // this.myFormService.setForm(this.form);
        this.service.loadSetting();
   }




   ngOnInit(): void {

    this.getRecod();

  }




  getRecod(){
    this.service.loading = true;
    this.service.find('home_slider').subscribe((value:any) => {
      let data = value.data.home_slider ? JSON.parse(value.data.home_slider) : [];
      this.sliders().clear();
      data.forEach((element:any) => {  
          this.sliders().push(this.fb.group({
              title: [element.title,''],
              image: [element.image,''],
              button: [element.button,''],
              link: [element.link,''],
          }));
      });
      this.service.loading = false;
    });

  }



  sliders(): FormArray {
    return this.form.get('sliders') as FormArray;
  }



  addSlider(){
      this.sliders().push(this.fb.group({
        title: ['',''],
        image: ['',''],
        button: ['',''],
        link: ['',''],
      }));
  }




async onSubmit() {

    if (this.form.valid) {
      this.service.loading = true;

            let data = {
              name:'home_slider', 
              data:JSON.stringify(this.form.value.sliders)
            }; 

            this.service.update(data).subscribe({
              next: (response:any) => {
                this.service.loading = false;
                this.notification.success(response.message);    
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





remove(index: number) {
  this.sliders().removeAt(index);
}







}






