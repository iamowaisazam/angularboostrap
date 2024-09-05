import { Component } from '@angular/core';
import { CommonModule, NgStyle, NgTemplateOutlet } from '@angular/common';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CustomerService } from '../customer.service';

// import { CustomerService } from "../customer.service";

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    FormsModule, 
    NgStyle,
    RouterLink,
    NgTemplateOutlet,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent {

  public favoriteColor = '#26ab3c';
 


  //List
  public listLoader = false;
  public dataSource:any = [];

  
   /**
   *
   */
   constructor(
    public service:CustomerService,
    private router:Router
   ) {

      // this.getListData();

  }

  // async getListData(){

    // this.listLoader = true;
    
    // let data = 
    // let tabledata :any = [];

    // console.log(data);
    


    // this.dataSource = tabledata;
    // this.listLoader = false;

// }



 // Edit Record
 async edit(id:string){

  // this.router.navigate(['/admin/customer/'+id]);

}


  // Delete Record
 async delete(id:string){

      // this.listLoader= true;
      // let res = await this.db.deleteCustomer(id);
      // if(res){
      //   alert('Record Deleted Successfully');
      //   this.getListData();
      // }else{
      //   this.listLoader= false;
      //   alert('Record Not Deleted');
      // }
  }


}


