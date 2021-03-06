import {Component, OnInit} from '@angular/core';
import {Comment} from '../../model/Comment.class';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CommentService} from '../../service/comment.service';
import {DeleteCommentComponent} from '../delete-comment/delete-comment.component';
import {MatDialog} from '@angular/material/dialog';
import {DetailNotificationComponent} from '../detail-notification/detail-notification.component';
import {dashCaseToCamelCase} from '@angular/compiler/src/util';
import {TokenStorageService} from '../../../office-common/service/token-storage/token-storage.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  public commentsNotification: Comment[];
  public count = 0;
  public isLoggedIn ;
  public userName ;
  p: any;

  constructor(
    public commentService: CommentService,
    public tokenStorageService: TokenStorageService,
    public dialog: MatDialog,
    private title: Title) {
  }

  ngOnInit(): void {
    this.title.setTitle('Feedback');
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      this.userName = this.tokenStorageService.getUser().userName;
    }
    this.count = 0;
    this.commentService.getAllNotification(this.userName).subscribe(data => {
      this.commentsNotification = data;
      for (const i of this.commentsNotification){
        // tslint:disable-next-line:triple-equals
        if (i.status == false && i.statusView == false){
          this.count ++;
        }
      }
    }, error => {
      console.log(error);
    });
  }

  dialogDeleteComment(commentId): void {
    this.commentService.getCommentById(commentId).subscribe(dataName => {
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
