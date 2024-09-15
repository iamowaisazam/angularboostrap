import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NotificationService } from '../../../core/notification/notification.service';
import { MyFormService } from '../../../core/services/myform.services';
import { SliderService } from '../slider.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-slider-edit',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './slider-edit.component.html',
  styleUrl: './slider-edit.component.css'
})
export class SliderEditComponent {

  public form:FormGroup;
  public formLoader:boolean = true;
  public editId:any = '';

  constructor(
    private fb: FormBuilder,
    private notification: NotificationService,
    public myFormService:MyFormService,
    public service:SliderService,
    private route:ActivatedRoute,
    private router:Router
  ){

      this.form = this.fb.group({
        title : ['', [Validators.maxLength(30)]],
        title_es : ['',Validators.maxLength(30)],
        title_pt : ['',Validators.maxLength(30)],
        link : ['',Validators.maxLength(100)],
        link_es : ['',Validators.maxLength(100)],
        link_pt : ['',Validators.maxLength(100)],
        short_description : ['',Validators.maxLength(200)],
        short_description_es : ['',Validators.maxLength(200)],
        short_description_pt : ['',Validators.maxLength(200)],
      });

      this.myFormService.setForm(this.form);

}


ngOnInit(): void {

  this.formLoader = false;
  this.route.paramMap.subscribe(params => {
    this.editId = params.get('id');
    this.getRecord(this.editId);
  });

}


async getRecord(id:any) {
      
    this.formLoader = true;
    this.service.edit(Number(this.editId)).subscribe({
      next: (res:any) => {
        let data = res.data[0];
        this.form.patchValue({
          title : data.title,
          title_es : data.title_es,
          title_pt : data.title_pt,
          link : data.link,
          link_es : data.link_es,
          link_pt : data.link_pt,
          short_description : data.short_description,
          short_description_es : data.short_description_es,
          short_description_pt : data.short_description_pt,
        });

        // this.notification.success(res.message);
        this.formLoader = false;

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
        this.formLoader = false;

        this.router.navigate(['/admin/dashboard']);

      }
    });
}

async onSubmit() {
   
    if (this.form.valid) {

        let data:any = this.form.value;
        data.status = 1;
        data.id = this.editId;

        this.formLoader = true;
        this.service.update(data).subscribe({
          next: (response:any) => {

            this.formLoader = false;    
            this.notification.success(response.message);
           
           
            this.getRecord(this.editId);
            this.formLoader = false;

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
              this.formLoader = false;
          }
        });

    } else {
      this.formLoader = false;
        this.notification.error('Validation Failed');  
    }
  
}


}






