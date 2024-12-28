import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NotificationService } from '../../../core/notification/notification.service';
import { LanguageService } from '../../../core/services/language.service';
import { SettingService } from '../../../core/services/setting.service';
import { FormsModule } from '@angular/forms';
import { ImgUploaderComponent } from '../../shared/img-uploader/img-uploader.component';
import { MyEditorComponent } from '../../shared/my-editor/my-editor.component';


@Component({
  selector: 'app-admin-settings-publication',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ImgUploaderComponent,
    MyEditorComponent
  ],
  templateUrl: './publication.component.html',
})
export class SettingPublicationComponent {
    
    public formLoader:boolean = false;
    public data:any = {};

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
      this.service.find('publication').subscribe({
        next: (value:any) => {
          this.data = value.data.publication ? JSON.parse(value.data.publication) : {};
          this.formLoader = false;

          console.log(this.data);
          
        },
        error: (response:any) => {
          this.formLoader = false;
        }
      });
  
    }


    async onSubmit(event: Event) {

        this.formLoader = true;
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        let data:any = {};
      
        formData.forEach((value, key) => {
            data[key] = value;
        });


        formData.append("name", "publication");
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

 


}
