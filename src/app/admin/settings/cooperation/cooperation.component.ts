import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NotificationService } from '../../../core/notification/notification.service';
import { LanguageService } from '../../../core/services/language.service';
import { SettingService } from '../../../core/services/setting.service';
import { FormsModule } from '@angular/forms';
import { ImgUploaderComponent } from '../../shared/img-uploader/img-uploader.component';
import { EditorComponent } from '@tinymce/tinymce-angular';


@Component({
  selector: 'app-admin-settings-publication',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ImgUploaderComponent,
    EditorComponent
  ],
  templateUrl: './cooperation.component.html',
})
export class SettingCooperationComponent {
    
    public formLoader:boolean = false;

    public data:any = {};

    public init: EditorComponent['init'] = {
      menubar:true,
      plugins: 'lists link image table code help wordcount',
      setup: (editor: any) => {

        editor.on('change', () => {
         
        });
      },
    };


  
    constructor(
        private notification: NotificationService,
        public lang: LanguageService,
        public service:SettingService,
    ){

      

    }


    ngOnInit(): void {

      this.getRecord();
    }


    getRecord(){

      this.formLoader = true;
      this.service.find('cooperation').subscribe({
        next: (value:any) => {
          this.data = value.data.cooperation ? JSON.parse(value.data.cooperation) : {};
       

          this.formLoader = false;
        },
        error: (response:any) => {
          this.formLoader = false;
        }
      });
  
    }


    async onSubmit(event: Event) {

        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        let data:any = {};
      
        formData.forEach((value, key) => {
            data[key] = value;
        });


        formData.append("name", "cooperation");
        this.service.update(formData).subscribe({
            next: (response:any) => {
              this.getRecord();
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
            }
          });
    }

    async add_new(name: any, item: any) {
      const path = name.split('.');
      let target = this.data; // Assuming `this.data` is the root object.
    
      // Navigate to the target object based on the path
      for (let i = 0; i < path.length - 1; i++) {
        target = target[path[i]];
      }
    
      const lastKey = path[path.length - 1];
    
      // Check if the target property exists, and if not, initialize it as an array
      if (!Array.isArray(target[lastKey])) {
        target[lastKey] = []; // Initialize it as an array if it's not an array
      }
    
      // Push the new item into the array
      target[lastKey].push(item);
    }

    async removeItem(name: string, id: number) {    

        const path = name.split('.'); // Split the path to access nested properties
        let target = this.data;

        // Traverse the path to reach the nested array
        for (let i = 0; i < path.length - 1; i++) {
          target = target[path[i]];
        }

        // Remove the item from the target array using the id (index)
        const lastKey = path[path.length - 1];
        if (Array.isArray(target[lastKey])) {

          target[lastKey].splice(id, 1);
      
        } else {
          console.error(`Target ${lastKey} is not an array.`);
        }
    }

    handleEvent(e:any,name:string){
        const editor = e.editor;
        const textarea = editor.getElement();
        textarea.setAttribute('name',name);
        const editorContent = editor.getContent();
        textarea.value = editorContent;
    }


}
