import { CommonModule } from '@angular/common';
import { Component, Output,EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorComponent } from '@tinymce/tinymce-angular';
import { NotificationService } from '../../../core/notification/notification.service';
import { MyFormService } from '../../../core/services/myform.service';
import { LanguageService } from '../../../core/services/language.service';
import { FilemanagerService } from '../filemanager.service';


@Component({
  selector: 'app-file-modal',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EditorComponent,
    FormsModule
  ],
  templateUrl: './file-modal.component.html',
})
export class FileModalComponent {

  @Output() getFiles: EventEmitter<void> = new EventEmitter<void>();

  public loader:boolean = false;
  public modal = false;
  public is_edit = false;
  public file:any = {};

  public selectedFile: File | null = null;
  public filename:any = "";

  constructor(
    private notification: NotificationService,
    public myFormService:MyFormService,
    public lang:LanguageService,
    public service:FilemanagerService,
){


}

  handleModal(){
    this.modal =  this.modal ? false : true;

    if(this.modal == false){
      this.is_edit = false;
      this.clearFile();
    }

  }

  clearFile(){
      this.loader = true;
      this.selectedFile = null;
      this.filename = null;
      this.file = {};
      this.loader = false;
  }


  onFileSelected(event: Event): void {

      const input = event.target as HTMLInputElement;
      if(input.files && input.files.length > 0) {
        this.selectedFile = input.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {

          input.value = '';
          this.file = {
            name:this.selectedFile?.name,
            size:this.selectedFile?.size,
            type:this.selectedFile?.type,
            extension:this.selectedFile?.name?.split('.')?.pop(),
            url:reader.result,
          };
          this.setFileName(this.file.name);

        };

        reader.readAsDataURL(this.selectedFile);

      }

  }


  setFileName(value:any){
    this.filename = value;
  }



  async onSubmit() {

    if(!this.is_edit){
         if (this.selectedFile) {
              const formData = new FormData();
              formData.append('filename',this.filename);
              formData.append('file', this.selectedFile, this.selectedFile.name);
              this.loader = true;

              this.service.create(formData).subscribe({
                  next: (response:any) => {
                    this.notification.success(response.message);
                    this.loader = false;
                    this.selectedFile = null;
                    this.filename = null;
                    this.file = {};
                    this.modal = false;
                    this.getFiles.emit();
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
        

      if(this.is_edit){
              
            let data = {
              id:this.file.id,
              name:this.filename,
            }

            this.service.update(data).subscribe({
              next: (response:any) => {
                this.notification.success(response.message);
                this.loader = false;
                this.selectedFile = null;
                this.filename = null;
                this.file = {};
                this.modal = false;
                this.getFiles.emit();
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

  





}
