import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { WebsiteService } from '../../website.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-doc-declare',
  standalone: true,
  imports: [],
  templateUrl: './doc-declare.component.html',
  styleUrl: './doc-declare.component.css'
})
export class DocDeclareComponent {

  public posts:any = [];
  public options:any ={
    type:'pdf',
    dctype:'document',
    search:'',
    topic:'',
    country: '',
  };

   constructor (
      public service:WebsiteService,
      @Inject(PLATFORM_ID) private platformId: object
    ){
        if (isPlatformBrowser(this.platformId)) {
          this.loadPosts();
        }
    }
  
    loadPosts(){
        this.service.get_posts(this.options).subscribe((value) => {
            this.posts = value.data.data;
        });
    }

    setSearch(event: Event){
      // const input = event.target as HTMLInputElement;
      // this.options.search = input.value;
      // this.loadPosts();
   }

   setCountry(event: Event){
    // const input = event.target as HTMLSelectElement;
    // this.options.country = input.value;
    // this.loadPosts();
  }

  setTopic(event: Event){
    // const input = event.target as HTMLSelectElement;
    // this.options.topic = input.value;
    // this.loadPosts();
 }

}
