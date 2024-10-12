import { Component } from '@angular/core';
import { LanguageService } from '../../../core/services/language.service';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorComponent } from '@tinymce/tinymce-angular';
import { NotificationService } from '../../../core/notification/notification.service';
import { MyFormService } from '../../../core/services/myform.service';
import { SettingService } from '../../../core/services/setting.service';

@Component({
  selector: 'app-about-member',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EditorComponent,
    FormsModule
  ],
  templateUrl: './about-member.component.html',
})
export class AboutMemberComponent {

  public form:FormGroup;
  public loading:boolean = true;


  constructor(
    private fb: FormBuilder,
    private notification: NotificationService,
    public myFormService:MyFormService,
    public service:SettingService,
    public lang:LanguageService
    ){
        this.form = this.fb.group({
          section_title:[''],
          posts: this.fb.array([]),
        });      

   }

   ngOnInit(): void {

    this.getRecod();

  }


  getRecod(){
    this.service.loading = true;
    this.service.find('about_member').subscribe({
      next: (value:any) => {
          let data = value.data.about_member ? JSON.parse(value.data.about_member) : [];
  
          this.posts().clear();
          if(data.posts){
          data.posts.forEach((element:any) => {  
              this.posts().push(this.fb.group({
                  title: [element.title,''],
              }));
          });
        }

          this.form.patchValue({
            section_title :  data.section_title,
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
      }));
  }




async onSubmit() {

    if (this.form.valid) {
      this.service.loading = true;

            let data = {
              name:'about_member', 
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
