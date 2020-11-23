import { Component, OnInit } from '@angular/core';
import {Comment} from '../../model/comment.class';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CommentService} from '../../service/comment.service';
import {DeleteCommentComponent} from '../delete-comment/delete-comment.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  public commentsNotification: Comment[];
  public status = true;
  formSearch: FormGroup;
  // public total: number;
  p: any;

  constructor(
    public commentService: CommentService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.commentService.getAllComment().subscribe(data => {
      this.commentsNotification = data;
      console.log(this.commentsNotification);
    });
  }
  dialogDeleteComment(commentId): void {
    this.commentService.getCommentById(commentId).subscribe(dataName => {
      console.log(dataName);
      const dialogRef = this.dialog.open(DeleteCommentComponent, {
        width: '500px',
        data: {fullName: dataName},
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.ngOnInit();
      });
    });

  }

}
