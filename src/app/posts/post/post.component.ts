import { Component, OnInit } from '@angular/core';
import { ResourcesService } from './../../shared/resources.service';
import { Post } from './post';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post$;
  postUrl = 'https://jsonplaceholder.typicode.com/posts' ;
  constructor(private resources: ResourcesService) {
    const asignPost=(post)=>{
      this.post$=post;
    };
    this.resources.getResource<Post[]>
    (this.postUrl,"title").subscribe(asignPost);
   }

  ngOnInit() {
  }

}
