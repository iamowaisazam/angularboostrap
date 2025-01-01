import { Component, Input, Output,EventEmitter, SimpleChanges  } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-editor',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './my-editor.component.html',
  styleUrl: './my-editor.component.css'
})

export class MyEditorComponent {

  public id:string = "";
  @Input() public Defaultvalue = "";
  @Input() public value = "";
  @Input() public name = "";
  @Output() editorChange = new EventEmitter<any>();

  constructor(){
      const now = new Date();
      this.id = String('editor-'+now.getTime()+(Math.floor(Math.random() * 1000)));
  }

  ngAfterViewInit(): void {

        let editor = tinymce.get(this.name);
        if(!editor){
          tinymce.init({
            selector: '.'+this.id,
            height: 300,
            plugins: 'advlist autolink link image lists charmap print preview hr anchor pagebreak',
            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent',
            setup: (editor:any) => {
              editor.on('Change KeyUp', () => {
                this.value = editor.getContent();
                this.editorChange.emit(this.value);
              });
            },
          });
          console.log('register',this.name,editor);
        }else{
         
          
        }
    
  }


  ngOnChanges(changes: SimpleChanges): void {
      if(changes['Defaultvalue'] && changes['Defaultvalue'].currentValue) {
         let editor = tinymce.get(this.name);
         console.log(this.name,editor);
         
         if(editor){
            editor.setContent(changes['Defaultvalue'].currentValue);
            this.value = changes['Defaultvalue'].currentValue;
          }
      }
  }


  ngOnDestroy(): void {
    let editor = tinymce.get(this.name);
      if(editor){
        editor.remove();
    }
  }

  
}

