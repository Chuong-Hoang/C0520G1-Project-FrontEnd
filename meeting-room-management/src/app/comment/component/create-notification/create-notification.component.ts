import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ErrorType} from '../../model/ErrorType.class';
import {Comment} from '../../model/Comment.class';
import {MeetingRoom} from '../../model/MeetingRoom.class';
import {ErrorTypeService} from '../../service/error-type.service';
import {MeetingRoomService} from '../../../meeting-room/service/meeting-room.service';
import {CommentService} from '../../service/comment.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenStorageService} from '../../../office-common/service/token-storage/token-storage.service';
import {UserService} from '../../../user/service/user.service';
import {User} from '../../model/user.class';

@Component({
  selector: 'app-create-notification',
  templateUrl: './create-notification.component.html',
  styleUrls: ['./create-notification.component.css']
})
export class CreateNotificationComponent implements OnInit {

  createNoticeForm: FormGroup;
  form: FormGroup;
  public errorTypes: ErrorType[] = [];
  public users: User[] = [];
  public comment: Comment;
  public createMSG = '';
  public meetingRoomServices: MeetingRoom[] = [];
  public errors = [];
  isLoggedIn = false;
  public user;

  constructor(private formBuilder: FormBuilder,
              public errorTypeService: ErrorTypeService,
              public userService: UserService,
              public meetingRoomService: MeetingRoomService,
              public commentService: CommentService,
              public router: Router,
              private routerServer: ActivatedRoute,
              private tokenStorageService: TokenStorageService
  ) {
  }

  ngOnInit(): void {
    this.meetingRoomService.getAllMeetingRoom().subscribe(data => {
      this.meetingRoomServices = data;
    });
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      this.user = this.tokenStorageService.getUser().userName;
    }
    this.errorTypeService.getAllErrorType().subscribe(data => {
      this.errorTypes = data;
    });
    this.userService.getAllUser().subscribe(data => {
      this.users = data;
    });
    this.meetingRoomService.getAllMeetingRoom().subscribe(data => {
      this.meetingRoomServices = data;
    });
    this.createNoticeForm = this.formBuilder.group({
      // idComment: [''],
      commentTime: [''],
      contentComment: [''],
      contentReply: ['', [Validators.required]],
      status: [''],
      errorTypeName: [''],
      roomName: ['', [Validators.required]],
      replierName: [''],
      senderName: ['', [Validators.required]]
    });
  }
  createNotification(): void {
    // tslint:disable-next-line:triple-equals
    if (this.createNoticeForm.valid == true) {
      this.createNoticeForm.value.replierName = this.user;
      this.createNoticeForm.value.contentComment.trim();
      console.log( this.createNoticeForm.value.contentComment.trim());
      this.commentService.addNewNotification(this.createNoticeForm.value).subscribe(data => {
        this.router.navigate(['comment-list'], {queryParams: {create_msg: 'Create successfully!', si: true}});
      }, err => {
        this.errors = err.error.message;
      });
    }
  }
}
