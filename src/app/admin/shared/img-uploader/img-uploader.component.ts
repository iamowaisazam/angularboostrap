import { Component, Input, Output,EventEmitter  } from '@angular/core';
import { FilemanagerService } from '../../filemanager/filemanager.service';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-img-uploader',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './img-uploader.component.html',
  styleUrl: './img-uploader.component.css'
})

export class ImgUploaderComponent {

  public apiUrl:any = environment.apiUrl;
  public files:any = [];
  public loading = false;

  
  @Input() public image = "";
  @Input() public name = "";
  @Output() imgHanle = new EventEmitter<any>();

  constructor(
    public service:FilemanagerService
  ){

   

  }

  hanldeChange(event:any){
   
    if(event.target.value.length > 0){
      this.loading = true;
      this.service.list({search:event.target.value}).subscribe({
        next:(res) => {
          this.files = res.data.data;
          this.loading = false;
        }
      });
   }else{

    this.files = [];
    this.loading = false;

   }

  }

  select(item:any){

    this.image = item.path;

    this.imgHanle.emit({
      'path': item.path,
      'name':this.name,
    });
  }

  remove(){
    this.image = "";
    this.imgHanle.emit('');
  }


}
