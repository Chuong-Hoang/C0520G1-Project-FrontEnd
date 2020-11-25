import {Component, OnInit} from '@angular/core';
import {Comment} from '../../model/comment.class';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CommentService} from '../../service/comment.service';
import {DeleteCommentComponent} from '../delete-comment/delete-comment.component';
import {MatDialog} from '@angular/material/dialog';
import {DetailNotificationComponent} from '../detail-notification/detail-notification.component';
import {dashCaseToCamelCase} from '@angular/compiler/src/util';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  public commentsNotification: Comment[];
<<<<<<< HEAD
  public status = true;
=======
>>>>>>> fe797ed9eedc2383894b7ba4ac1118cdf32337fa
  public count = 0;
  formSearch: FormGroup;
  p: any;

  constructor(
    public commentService: CommentService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.count = 0;
    this.commentService.getAllComment().subscribe(data => {
      this.commentsNotification = data;
<<<<<<< HEAD
      console.log(data);
      // console.log(this.commentsNotification);
    }, error => {
      console.log(error);
      console.log('error');
=======
      for (const i of this.commentsNotification){
        // tslint:disable-next-line:triple-equals
        if (i.status == false && i.statusView == false){
          this.count ++;
        }
      }
    }, error => {
      console.log(error)
>>>>>>> fe797ed9eedc2383894b7ba4ac1118cdf32337fa
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
    }, error => console.log(error));
  }

  dialogDetailComment(commentId): void {
    this.commentService.getCommentById(commentId).subscribe(dataFull => {
<<<<<<< HEAD
      console.log(dataFull);
=======
>>>>>>> fe797ed9eedc2383894b7ba4ac1118cdf32337fa
      const dialogRef = this.dialog.open(DetailNotificationComponent, {
        width: '500px',
        data: {full: dataFull},
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.ngOnInit();
      });
    }, error => console.log(error));
  }
}
