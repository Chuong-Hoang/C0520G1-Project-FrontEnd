import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ErrorType} from '../../model/ErrorType.class';
import {MeetingRoom} from '../../model/MeetingRoom.class';
import {CommentService} from '../../service/comment.service';
import {ErrorTypeService} from '../../service/error-type.service';
import {MeetingRoomService} from '../../service/meeting-room.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenStorageService} from '../../../office-common/service/token-storage/token-storage.service';
import {Local} from 'protractor/built/driverProviders';

@Component({
  selector: 'app-comment-handle',
  templateUrl: './comment-handle.component.html',
  styleUrls: ['./comment-handle.component.css']
})
export class CommentHandleComponent implements OnInit {
  handleCommentForm: FormGroup;
  public idComment;
  private isLoggedIn;
  private user;
  constructor(private formBuilder: FormBuilder,
              public commentService: CommentService,
              private tokenStorageService: TokenStorageService,
              public activeRouter: ActivatedRoute,
              public router: Router) {
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      this.user = this.tokenStorageService.getUser().userName;
    }
    this.handleCommentForm = this.formBuilder.group({
      idComment: [''],
      commentTime: [''],
      contentComment: [''],
      contentReply: ['', [Validators.required]],
      status: [''],
      errorTypeName: [''],
      roomName: [''],
      replierName: [''],
      sender: [''],
    });
    this.activeRouter.params.subscribe(data => {
      this.idComment = data.idComment;
      this.commentService.getCommentById(this.idComment).subscribe(next => {
        this.handleCommentForm.patchValue(next);
      });
    });
  }

  handleComment(): void {
    if (this.handleCommentForm.valid) {
      this.handleCommentForm.value.replierName = this.user;
      this.commentService.handleComment(this.idComment, this.handleCommentForm.value).subscribe(data => {
        this.router.navigate(['comment-list']);
      });
    }
  }
}
