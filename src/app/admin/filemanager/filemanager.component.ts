import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';
import { MyFormService } from '../../core/services/myform.service';
import { NotificationService } from '../../core/notification/notification.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { EditorComponent } from '@tinymce/tinymce-angular';
import { FilemanagerService } from './filemanager.service';


@Component({
  selector: 'app-filemanager',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EditorComponent,
    FormsModule
  ],
  templateUrl: './filemanager.component.html',
  styleUrl: './filemanager.component.css'
})

export class FilemanagerComponent {

  public search = "";
  public fileDropdown:any = false;
  public loader:boolean = false;
  public modal = false;
  public selectedFile: File | null = null;
  public selectedPrev:any = '';
  public files:any = [];


  constructor(
      private notification: NotificationService,
      public myFormService:MyFormService,
      public lang:LanguageService,
      public service:FilemanagerService,
  ){


  }

  
  ngOnInit(): void {
    this.getFiles();

  }

  hanldeSearch(event: Event){

    const inputValue = (event.target as HTMLInputElement).value;
    this.search = inputValue;
    this.getFiles();

  }

  getFiles(){
    this.loader = true;
    this.service.list({search:this.search}).subscribe({
      next:( (value) => {

        this.files = value.data.data
        this.loader = false;

      }),
      error:( (error) => {
         this.loader = false;
      }),
    });
  }



  handleModal(){
    this.modal =  this.modal ? false : true;
  }

  onFileSelected(event: Event): void {

      const input = event.target as HTMLInputElement;
      if(input.files && input.files.length > 0) {
        this.selectedFile = input.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
          this.selectedPrev = reader.result;
     
        };
        reader.readAsDataURL(this.selectedFile);
      }

  }


  async onSubmit() {

        if (this.selectedFile) {

            this.loader = true;
            const formData = new FormData();
            formData.append('file', this.selectedFile, this.selectedFile.name);

            this.service.create(formData).subscribe({
              next: (response:any) => {

                this.notification.success(response.message);
                this.loader = false;
                this.selectedFile = null;
                this.selectedPrev = null;
                this.getFiles();

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

                  this.loader = false;
              }

          });

      }else{
        this.notification.error('File Not Found');
      }

  }

  handle_fileDropdown(){
    this.fileDropdown = this.fileDropdown ? false: true;
  }


  delete(id:any){
  
    this.service.delete(id).subscribe({
      next: (response:any) => {

        this.notification.success(response.message);
        this.loader = false;
        this.getFiles();

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

          this.loader = false;
      }
     });

  }


}
