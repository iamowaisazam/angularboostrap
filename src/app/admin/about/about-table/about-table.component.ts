import { Component } from '@angular/core';
import { LanguageService } from '../../../core/services/language.service';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EditorComponent } from '@tinymce/tinymce-angular';
import { NotificationService } from '../../../core/notification/notification.service';
import { MyFormService } from '../../../core/services/myform.service';
import { SettingService } from '../../../core/services/setting.service';

@Component({
  selector: 'app-about-table',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EditorComponent,
    FormsModule
  ],
  templateUrl: './about-table.component.html',
})
export class AboutTableComponent {
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
          section_title:[''],
          section_description:[''],
          section_subheading:[''],
          posts: this.fb.array([])
        });      
   }

   ngOnInit(): void {

    this.getRecod();

  }




  getRecod(){
    this.service.loading = true;
    this.service.find('about_table').subscribe({
      next: (value:any) => {
          let data = value.data.about_table ? JSON.parse(value.data.about_table) : [];

  
          this.posts().clear();
          if(data.posts){
          data.posts.forEach((element:any) => {  
              this.posts().push(this.fb.group({
                  title: [element.title,''],
                  description: [element.description,''],
                  image: [element.image,''],
                  country_text: [element.country_text,''],
                  country_image: [element.country_image,''],
              }));
          });
        }

          this.form.patchValue({
            section_title :  data.section_title,
            section_description : data.section_description,
            section_subheading : data.section_subheading,
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
        
        title: ['',''],
        description: ['',''],
        image: ['',''],
        country_text: ['',''],
        country_image: ['',''],
      }));
  }




async onSubmit() {

    if (this.form.valid) {
      this.service.loading = true;

            let data = {
              name:'about_table', 
              data:JSON.stringify(this.form.value)
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
