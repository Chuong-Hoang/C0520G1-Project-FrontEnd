import { Component, OnInit } from '@angular/core';
import {CommentService} from '../../service/comment.service';
import {Comment} from '../../model/comment.class';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  public comments: Comment[];
  // public total: number;
  constructor(
    public commentService: CommentService,
  ) { }

  ngOnInit(): void {
    this.commentService.getAllComment().subscribe(data => {
      this.comments = data;
      console.log(this.comments);
    });
  }

}
