import { CommonModule, NgStyle, NgTemplateOutlet } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NotificationService } from '../../core/notification/notification.service';
import { WebsiteService } from '../../website/website.service';
import { HttpClientModule } from '@angular/common/http';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-newsletters',
  standalone: true,
  imports: [ 
    RouterLink,
    CommonModule,
  ],
  templateUrl: './newsletters.component.html',
})
export class NewslettersComponent {

   //List
   public loader = false;
   public dataSource:any = {};
   public options:any = {
      search:'',
      page:1,
      limit:10,
   };

    /**
    ****** Constructure 
    */
    constructor(
     public service:WebsiteService,
     public admin:AdminService,
     public notification:NotificationService,
     private router:Router

    ) {

      this.getList();
   }

   ngOnInit(): void {
      this.getList();
  }

  ngAfterViewInit(): void {
    this.getList();
  }


 public getList(): void {

        this.loader = true;
        this.service.newsletter_list(this.options).subscribe({
          next: (response:any) => {
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

    this.service.newsletter_remove({id:id}).subscribe({
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
