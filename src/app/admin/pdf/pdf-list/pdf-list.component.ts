import { CommonModule, NgStyle, NgTemplateOutlet } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { NotificationService } from '../../../core/notification/notification.service';
import { PostService } from '../../posts/post.service';
import { environment } from '../../../../environments/environment';


@Component({
  selector: 'app-pdf-list',
  standalone: true,
  imports: [ 
    NgStyle,
    RouterLink,
    NgTemplateOutlet,
    CommonModule,
  ],
  templateUrl: './pdf-list.component.html',
})
export class PdfListComponent {

  

   //List
   public apiUrl = environment.apiUrl;
   public loader = false;
   public dataSource:any = {};
   public options:any = {
      type:'pdf',
      page:1,
      limit:10,
   };

    /**
    ****** Constructure 
    */
    constructor(
     public service:PostService,
     public notification:NotificationService,
     private router:Router

    ) {

  
   }

   ngOnInit(): void {

      this.getList();
  }


 public getList(): void {

        this.loader = true;
        this.service.list(this.options).subscribe({
          next: (response) => {
            this.dataSource = response.data;
            this.loader = false; 
          },
          error: (response) => {
            this.notification.error('Something Went Wrong')        
            this.loader = false;
          }
        });
  }


  handleSearch(event: Event){
    const input = event.target as HTMLInputElement;
    this.options.search = input.value;
    this.getList();
  }

  handlePage(id:any){
    this.options.page = id;
    this.getList();
  }


   onDelete(id:any){

    this.loader = true;
    this.service.delete(id).subscribe({
      next: (response) => {

        this.notification.success(response.message);
        this.getList();

      },
      error: (response) => {
        
      
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
