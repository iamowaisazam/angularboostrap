import { CommonModule, NgStyle, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { PostService } from '../post.service';
import { NotificationService } from '../../../core/notification/notification.service';

@Component({
  selector: 'app-slider-list',
  standalone: true,
  imports: [ 
    NgStyle,
    RouterLink,
    NgTemplateOutlet,
    CommonModule,
  ],
  templateUrl: './post-list.component.html',
})
export class PostListComponent {

   //List
   public loader = false;
   public dataSource:any = [];

 
   
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


  getList(): void {

        this.loader = true;
        this.service.list().subscribe({
          next: (response) => {
        
            // this.notification.success(response.message);
            let data:any = [];
            response.data.data.forEach((element:any) => {
              data.push(element);
            });
            this.dataSource = data;
            this.loader = false;  

          },
          error: (response) => {
            console.log(response);
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



   onDelete(id:any){

    this.loader = true;
    this.service.delete(id).subscribe({
      next: (response) => {

        this.notification.success(response.message);
        this.getList();

      },
      error: (response) => {
        
        console.log(response);
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
