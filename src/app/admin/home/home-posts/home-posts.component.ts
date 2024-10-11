import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorComponent } from '@tinymce/tinymce-angular';
import { NotificationService } from '../../../core/notification/notification.service';
import { MyFormService } from '../../../core/services/myform.service';
import { SettingService } from '../../../core/services/setting.service';
import { LanguageService } from '../../../core/services/language.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home-posts',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EditorComponent,
    FormsModule
  ],
  templateUrl: './home-posts.component.html',
  styleUrl: './home-posts.component.css'
})
export class HomePostsComponent {

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
          section_button:[''],
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
          if(data.posts){
          data.posts.forEach((element:any) => {  
              this.posts().push(this.fb.group({
                  type: [element.type,''],
                  title: [element.title,''],
                  image: [element.image,''],
                  button: [element.button,''],
                  link: [element.link,''],
              }));
          });
        }

          this.form.patchValue({
            section_title :  data.section_title,
            section_description : data.section_description,
            section_button : data.section_button,
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
