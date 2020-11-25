import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ErrorType} from '../../model/errorType.class';
import {MeetingRoom} from '../../model/meetingRoom.class';
import {CommentService} from '../../service/comment.service';
import {ErrorTypeService} from '../../service/error-type.service';
import {MeetingRoomService} from '../../service/meeting-room.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-comment-handle',
  templateUrl: './comment-handle.component.html',
  styleUrls: ['./comment-handle.component.css']
})
export class CommentHandleComponent implements OnInit {
  handleCommentForm: FormGroup;
  public idComment;

  constructor(private formBuilder: FormBuilder,
              public commentService: CommentService,
              public activeRouter: ActivatedRoute,
              public router: Router) {
  }

  ngOnInit(): void {
    this.handleCommentForm = this.formBuilder.group({
      idComment: [''],
      commentTime: [''],
      contentComment: [''],
      contentReply: ['', [Validators.required]],
      status: [''],
      errorTypeName: [''],
      roomName: [''],
      idReplier: [''],
      sender: [''],
    });
    this.activeRouter.params.subscribe(data => {
      this.idComment = data.idComment;
      console.log(this.idComment);
      this.commentService.getCommentById(this.idComment).subscribe(next => {
        console.log(next);
        this.handleCommentForm.patchValue(next);
      });
    });
  }

  handleComment(): void {
    if (this.handleCommentForm.valid) {
      console.log(this.handleCommentForm.value);
      this.commentService.handleComment(this.idComment, this.handleCommentForm.value).subscribe(data => {
        this.router.navigate(['comment-list']);
      });
    }
  }
}
