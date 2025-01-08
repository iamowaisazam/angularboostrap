import { Component } from '@angular/core';
import { ResponsiveService } from '../../../core/services/responsive.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { WebsiteService } from '../../website.service';
import { NotificationService } from '../../../core/notification/notification.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'web-footer',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    TranslateModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  
  public form:any = {
    name:'',
    email:'',
  };

  constructor (
    public responsive: ResponsiveService,
    public service:WebsiteService,
    public notification:NotificationService
  
  ){

   
  }

  onSubmit(event: Event): any {

      event.preventDefault(); 

      if(this.form.name == ''){
        this.notification.error('Please Enter Your Name');
        return false;
      }

      if(this.form.email == ''){
        this.notification.error('Please Enter Your Email');
        return false;
      }

      this.service.newsletter_add(this.form).subscribe({
        next:(value) => {
          this.notification.success(value.message);
          this.form.name  = '';
          this.form.email = '';
      },
      error:(error) => {
        this.notification.error(error?.error?.message);
      }
    });

  }



  

}
