import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './comment/comment.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
 
  CommonModule,
    SharedModule
  ],
  exports: [CommentComponent],
  declarations: [CommentComponent]
})
export class CommentsModule { }
