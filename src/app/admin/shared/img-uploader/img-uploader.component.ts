import { Component, Input, Output,EventEmitter  } from '@angular/core';
import { FilemanagerService } from '../../filemanager/filemanager.service';

@Component({
  selector: 'app-img-uploader',
  standalone: true,
  imports: [],
  templateUrl: './img-uploader.component.html',
  styleUrl: './img-uploader.component.css'
})

export class ImgUploaderComponent {

  public files:any = [];
  public loading = false;

  @Input() public image = "";
  @Output() imgHanle = new EventEmitter<any>();

  constructor(
    public service:FilemanagerService
  ){

  }

  hanldeChange(event:any){
   
    this.loading = true;
    this.service.list({search:event.target.value}).subscribe({
      next:(res) => {
        this.files = res.data.data;
        this.loading = false;
      }
    });

  }

  select(path:any){
    this.image = path;
    this.imgHanle.emit(path);
  }

  remove(){
    this.image = "";
    this.imgHanle.emit('');
  }


}
