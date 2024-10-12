import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, ViewChild } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';
import { MyFormService } from '../../core/services/myform.service';
import { NotificationService } from '../../core/notification/notification.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { EditorComponent } from '@tinymce/tinymce-angular';
import { FilemanagerService } from './filemanager.service';
import { FileModalComponent } from './file-modal/file-modal.component';

@Component({
  selector: 'app-filemanager',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EditorComponent,
    FormsModule,
    FileModalComponent,
  ],
  templateUrl: './filemanager.component.html',
  styleUrl: './filemanager.component.css'
})

export class FilemanagerComponent {

  public search = "";
  public fileDropdown:any = false;
  public loader:boolean = false;
  public files:any = [];
  @ViewChild(FileModalComponent) FileModalComponent!: FileModalComponent;


  

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


  onEdit(data:any){

     this.FileModalComponent.modal = true;
     this.FileModalComponent.is_edit = true;
     this.FileModalComponent.filename = data.name;
     this.FileModalComponent.file = {
       name:data.name,
       size:data.size,
       extension:data.extension,
       type:data.type,
       url:data.link,
       id:data.id,
     };

  }



}
