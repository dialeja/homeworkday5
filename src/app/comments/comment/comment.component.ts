import { Component, OnInit } from '@angular/core';
import { ResourcesService } from './../../shared/resources.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  commentsUrl='https://jsonplaceholder.typicode.com/comments';
  comments;
  constructor(private resource: ResourcesService) {
    const assingComments=(comment)=>{
      this.comments=comment;
    };
    this.resource.getResource<Comment[]>
    (this.commentsUrl,"body").subscribe(assingComments);
   }

  ngOnInit() {
  }

}
