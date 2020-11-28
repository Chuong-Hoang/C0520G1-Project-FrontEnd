import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CommentService} from '../../service/comment.service';
import {ErrorTypeService} from '../../service/error-type.service';
import {ErrorType} from '../../model/ErrorType.class';
import {MeetingRoom} from '../../model/MeetingRoom.class';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenStorageService} from '../../../office-common/service/token-storage/token-storage.service';
import {MeetingRoomService} from '../../../meeting-room/service/meeting-room.service';
import {Comment} from '../../model/Comment.class';


@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.css']
})
export class CommentCreateComponent implements OnInit {
  createCommentForm: FormGroup;
  form: FormGroup;
  public errorTypes: ErrorType[] = [];
  public comment: Comment;
  public createMSG = '';
  public meetingRoomServices: MeetingRoom[] = [];
  public errors = [];
  isLoggedIn = false;
  public user;

  constructor(private formBuilder: FormBuilder,
              public errorTypeService: ErrorTypeService,
              public meetingRoomService: MeetingRoomService,
              public commentService: CommentService,
              public router: Router,
              private routerServer: ActivatedRoute,
              private tokenStorageService: TokenStorageService
  ) {
  }

  ngOnInit(): void {

    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      this.user = this.tokenStorageService.getUser().userName;
    }
    this.errorTypeService.getAllErrorType().subscribe(data => {
      this.errorTypes = data;
    });
    this.meetingRoomService.getAllMeetingRoom().subscribe(data => {
      this.meetingRoomServices = data;
    });
    this.createCommentForm = this.formBuilder.group({
      // idComment: [''],
      commentTime: [''],
      contentComment: ['', [Validators.required]],
      contentReply: [''],
      status: [''],
      errorTypeName: ['', [Validators.required]],
      roomName: ['', [Validators.required]],
      replier: [''],
      senderName: [this.user]
    });
    this.sendMessage();
    setTimeout(function(): void {
  this.createMSG = '';
}.bind(this), 3000);
  }

  createComment(): void {
    // tslint:disable-next-line:triple-equals
    if (this.createCommentForm.valid == true) {
      this.createCommentForm.value.contentComment.trim();
      this.createCommentForm.value.contentReply = 'N/A';
      console.log( this.createCommentForm.value.contentComment.trim());
      this.commentService.addNewComment(this.createCommentForm.value).subscribe(data => {
        this.router.navigate([''], {queryParams: {create_msg: 'Create successfully!', si: true}});
      }, err => {
        this.errors = err.error.message;
      });
    }
  }
  sendMessage(): void {
    this.createMSG = this.routerServer.snapshot.queryParamMap.get('create_msg');
  }
}


