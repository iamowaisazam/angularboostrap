import { Component } from '@angular/core';
import { LanguageService } from '../../../core/services/language.service';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorComponent } from '@tinymce/tinymce-angular';
import { NotificationService } from '../../../core/notification/notification.service';
import { MyFormService } from '../../../core/services/myform.service';
import { SettingService } from '../../../core/services/setting.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agrement',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EditorComponent,
    FormsModule
  ],
  templateUrl: './agrement.component.html',
})
export class AgrementComponent {

  
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
          posts: this.fb.array([])
        });      
   }

   ngOnInit(): void {

    this.getRecod();

  }

  getRecod(){
    this.service.loading = true;
    this.service.find('home_posts').subscribe({
      next: (value:any) => {
          let data = value.data.home_posts ? JSON.parse(value.data.home_posts) : [];
          this.posts().clear();
          data.forEach((element:any) => {  
              this.posts().push(this.fb.group({
                  type: [element.type,''],
                  title: [element.title,''],
                  image: [element.image,''],
                  button: [element.button,''],
                  link: [element.link,''],
              }));
          });
          this.service.loading = false;
      },
      error: (value:any) => {
        this.service.loading = false;

      }
    });
  }

  posts(): FormArray {
    return this.form.get('posts') as FormArray;
  }

  addPost(){
    this.posts().push(this.fb.group({
      type: ['',''],
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
                  name:'home_posts', 
                  data:JSON.stringify(this.form.value.posts)
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
    this.posts().removeAt(index);
  }

}
