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


  ngOnInit(): void {

      this.service.data.subscribe((value:any) => {

        if(value?.home_slider?.value){
          let sl = JSON.parse(value.home_slider.value);
          if(sl){

            this.sliders().clear();
            sl.forEach((element:any) => {  
              this.sliders().push(this.fb.group({
                title: [element.title,''],
                image: [element.image,''],
                button: [element.button,''],
                link: [element.link,''],
              }));
            });

          }

        }

    });
  }




async onSubmit() {

    if (this.form.valid) {

            this.service.loading = true;

            let data = {
              home_slider:JSON.stringify(this.form.value.sliders)
            }; 

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


remove(index: number) {
  this.sliders().removeAt(index);
}







}






