import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CommentService} from '../../service/comment.service';
import {MeetingRoomService} from '../../service/meeting-room.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-detail-notification',
  templateUrl: './detail-notification.component.html',
  styleUrls: ['./detail-notification.component.css']
})
export class DetailNotificationComponent implements OnInit {
  detailCommentForm: FormGroup;
  public id;
  public contentComment;
  public contentReply;
  public comment: CommentService[];

  constructor(private formBuilder: FormBuilder,
              public commentService: CommentService,
              public activeRouter: ActivatedRoute,
              public router: Router,
              public dialogRef: MatDialogRef<DetailNotificationComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }


  ngOnInit(): void {
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
      console.log(this.id);
      this.commentService.getCommentById(this.id).subscribe(next => {
        console.log(next);
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
