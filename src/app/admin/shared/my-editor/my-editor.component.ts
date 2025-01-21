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
            plugins: 'advlist autolink link image lists charmap print preview hr anchor pagebreak code textcolor colorpicker table image media emoticons wordcount fullscreen template',
            toolbar: 'undo redo | bold italic | fontselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | table | image | media | emoticons | wordcount | fullscreen | template',
            font_formats: 'Figtree=Figtree, sans-serif; Red Hat Display=Red Hat Display, Arial=arial,helvetica,sans-serif; Times New Roman=times new roman,times; Courier New=courier new,courier; Verdana=verdana,geneva,sans-serif;',
            templates: [
              {
                title: 'Two Column Layout',
                description: 'A two-column layout with text on the left and an image on the right.',
                content: `
                  <div style="display: flex;">
                    <div style="flex: 1; padding: 10px;">
                      <p>This is the left column.</p>
                    </div>
                    <div style="flex: 1; padding: 10px;">
                      <img src="https://via.placeholder.com/150" alt="Placeholder Image" />
                    </div>
                  </div>
                `,
              },
              {
                title: 'Header and Paragraph',
                description: 'A simple header with a paragraph.',
                content: `
                  <h2>Header</h2>
                  <p>This is a paragraph below the header.</p>
                `,
              },
              {
                title: 'Table Template',
                description: 'A pre-defined table template.',
                content: `
                  <table style="width: 100%; border: 1px solid #ccc; border-collapse: collapse;">
                    <tr>
                      <th style="border: 1px solid #ccc; padding: 8px;">Header 1</th>
                      <th style="border: 1px solid #ccc; padding: 8px;">Header 2</th>
                    </tr>
                    <tr>
                      <td style="border: 1px solid #ccc; padding: 8px;">Data 1</td>
                      <td style="border: 1px solid #ccc; padding: 8px;">Data 2</td>
                    </tr>
                  </table>
                `,
              },
            ],
            setup: (editor:any) => {
              editor.on('Change KeyUp', () => {
                this.value = editor.getContent();
                this.editorChange.emit(this.value);
              });
            },
          });
          // console.log('register',this.name,editor);
        }else{
         
          
        }
    
  }


  ngOnChanges(changes: SimpleChanges): void {
      if(changes['Defaultvalue'] && changes['Defaultvalue'].currentValue) {
         let editor = tinymce.get(this.name);
        
         
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

