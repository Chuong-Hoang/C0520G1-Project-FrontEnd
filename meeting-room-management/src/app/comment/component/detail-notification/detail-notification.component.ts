import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CommentService} from '../../service/comment.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {TokenStorageService} from '../../../office-common/service/token-storage/token-storage.service';
import { TitleCasePipe } from '@angular/common';
@Component({
  selector: 'app-detail-notification',
  templateUrl: './detail-notification.component.html',
  styleUrls: ['./detail-notification.component.css']
})
export class DetailNotificationComponent implements OnInit {
  detailCommentForm: FormGroup;
  public id;
  public fullName;
  public contentComment;
  public contentReply;
  public errorType;
  public commentTime;
  public comment: CommentService[];
  private isLoggedIn;

  constructor(private formBuilder: FormBuilder,
              public commentService: CommentService,
              public activeRouter: ActivatedRoute,
              private tokenStorageService: TokenStorageService,
              public router: Router,
              public dialogRef: MatDialogRef<DetailNotificationComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }


  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      this.fullName = this.tokenStorageService.getUser().fullName;
    }
    this.detailCommentForm = this.formBuilder.group({
      idComment: [''],
      commentTime: [''],
      contentComment: [''],
      contentReply: [''],
      status: [''],
      errorTypeName: [''],
      roomName: [''],
      idReplier: [''],
      sender: [''],
    });
    this.activeRouter.params.subscribe(data => {
      this.id = this.data.full.idComment;
      this.contentComment = this.data.full.contentComment;
      this.contentReply = this.data.full.contentReply;
      this.commentTime = this.data.full.commentTime;
      this.errorType = this.data.full.errorTypeName;
      console.log(this.errorType);
      this.commentService.getCommentById(this.id).subscribe(next => {
        this.detailCommentForm.patchValue(next);
      });
    });
  }

  detailComment(): void {
    this.commentService.detailComment(this.id, this.detailCommentForm.value).subscribe(data => {
      this.dialogRef.close();
    });
  }

}
