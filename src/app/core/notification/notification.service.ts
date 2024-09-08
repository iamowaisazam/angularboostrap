import { Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})


export class NotificationService {
    
    public color = "#03a9f3"
    public message = "";
    public display = false;
    public icon = "fa fa-exclamation-circle";

    info(message:any){

      this.display = true;
      this.icon = "fa fa-exclamation-circle";
      this.color = "#03a9f3";
      this.message = message;

      setTimeout(() => {
        this.close();
      }, 2000);
    }


    success(message:any){

      this.display = true;
      this.icon = "fa fa-check-circle";
      this.color = "#00c292";
      this.message = message;

      setTimeout(() => {
        this.close();
      }, 2000);
    }


    warning(message:any){

      this.display = true;
      this.color = "#fec107";
      this.icon = "fa fa-exclamation-triangle";
      this.message = message;

      setTimeout(() => {
        this.close();
      }, 2000);
    }

    error(message:any){

      this.display = true;
      this.color = "#e46a76";
      this.icon = "fa fa-exclamation-triangle";
      this.message = message;

      setTimeout(() => {
        this.close();
      }, 2000);

    }


    close(){

      this.display = false;
      this.message = "";
    }

 



}